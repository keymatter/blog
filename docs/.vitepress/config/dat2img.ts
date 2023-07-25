import fs from 'fs';
import { mkdirp } from 'mkdirp'
import path from 'path';


// const filePath = 'C:\\Users\\hdec\\Documents\\WeChat Files\\wxid_yxj0hb5cljh522\\FileStorage\\MsgAttach'
export function dat2img(filePath: string, outPath: string) {
  //读取目录下所有.dat文件
  const getDat = (filePath: string): string[] => {
    return fs.readdirSync(filePath).reduce<string[]>((list, file) => {
      const fullPath = path.join(filePath, file)
      if (fs.statSync(fullPath).isDirectory()) {
        return list.concat(getDat(fullPath))
      } else {
        if (path.extname(fullPath) === '.dat') {
          list.push(fullPath)
        }
      }
      return list
    }, [])
  }
  
  const extract = (content: Buffer) => {
    const [ firstV, nextV ] = content
    const base = 0xFF
    const next = 0xD8
    const gifA = 0x47
    const gifB = 0x49
    const pngA = 0x89
    const pngB = 0x50
    
    const jT = firstV ^ base
    const jB = nextV ^ next
    const gT = firstV ^ gifA
    const gB = nextV ^ gifB
    const pT = firstV ^ pngA
    const pB = nextV ^ pngB
    
    let v = jT
    let type = '.jpg'
    if (jT === jB) {
      v = jT
      type = '.jpg'
    } else if (gT === gB) {
      v = gT
      type = '.gif'
    } else if (pT === pB) {
      v = pT
      type = '.png'
    }
    
    const buffer = content.map(br => br ^ v)
    return { buffer, type };
  };
  
  //.dat转化为.jpg图片
  const convert = (item: string) => {
    const { dir, base } = path.parse(item)
    const lastDir = dir.split(path.sep).at(-1)
    const writeDir = lastDir ? path.join(outPath, lastDir) : outPath
    if (!fs.existsSync(writeDir)) {
      mkdirp.sync(writeDir)
    }
    
    fs.readFile(item, (_err, content) => {
      if (content?.length) {
        const { buffer, type } = extract(content);
        let imgPath = path.join(writeDir, `${ base + type }`);
        fs.writeFileSync(imgPath, buffer)
      }
    })
  };
  
  const list = getDat(filePath)
  list.forEach((item, index) => {
    convert(item)
    process.stdout.write(`正在转换：${ index + 1 }/${ list.length } 张\r`)
  })
}
