if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>n(e,r),o={module:{uri:r},exports:a,require:t};s[r]=Promise.all(l.map((e=>o[e]||t(e)))).then((e=>(i(...e),a)))}}define(["./workbox-755692f8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"a853e219ef9ee7c4e1cddf64f2d60aca"},{url:"archive/index.html",revision:"a1db8572ee83fc8f71f39824afc7a161"},{url:"assets/app.fe3301b8.js",revision:null},{url:"assets/archive_index.md.57e5bd2c.js",revision:null},{url:"assets/archive_index.md.57e5bd2c.lean.js",revision:null},{url:"assets/backend_index.md.3f7f534d.js",revision:null},{url:"assets/backend_index.md.3f7f534d.lean.js",revision:null},{url:"assets/backend_koa_start.md.0c37ecee.js",revision:null},{url:"assets/backend_koa_start.md.0c37ecee.lean.js",revision:null},{url:"assets/backend_koa_use.md.4bc57624.js",revision:null},{url:"assets/backend_koa_use.md.4bc57624.lean.js",revision:null},{url:"assets/backend_mysql_install.md.ea16bacd.js",revision:null},{url:"assets/backend_mysql_install.md.ea16bacd.lean.js",revision:null},{url:"assets/backend_node_env.md.fce7f0a2.js",revision:null},{url:"assets/backend_node_env.md.fce7f0a2.lean.js",revision:null},{url:"assets/backend_node_process.md.a20da397.js",revision:null},{url:"assets/backend_node_process.md.a20da397.lean.js",revision:null},{url:"assets/backend_redis_install.md.69b4c8ac.js",revision:null},{url:"assets/backend_redis_install.md.69b4c8ac.lean.js",revision:null},{url:"assets/chunks/base-80a1f760.c54940d7.js",revision:null},{url:"assets/chunks/client.utils-7a723432.ace87b8e.js",revision:null},{url:"assets/chunks/commonjsHelpers.39b5b250.js",revision:null},{url:"assets/chunks/DocShici.030a7911.js",revision:null},{url:"assets/chunks/DocTag.7681955d.js",revision:null},{url:"assets/chunks/framework.50c4d085.js",revision:null},{url:"assets/chunks/ImageLazyLoad.5703198b.js",revision:null},{url:"assets/chunks/index-bd1ff004.d5c7970a.js",revision:null},{url:"assets/chunks/index.0b25a6a6.js",revision:null},{url:"assets/chunks/index.854751e3.js",revision:null},{url:"assets/chunks/SvgIcon.9b9c9086.js",revision:null},{url:"assets/chunks/theme.e66b8b0c.js",revision:null},{url:"assets/chunks/useNamespace.75a6a06b.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.1008c565.js",revision:null},{url:"assets/chunks/WordCloud.6ac81906.js",revision:null},{url:"assets/cli_git_cli.md.dcd09115.js",revision:null},{url:"assets/cli_git_cli.md.dcd09115.lean.js",revision:null},{url:"assets/cli_git_commitlint.md.dce7427a.js",revision:null},{url:"assets/cli_git_commitlint.md.dce7427a.lean.js",revision:null},{url:"assets/cli_git_FAQ.md.bfa6a884.js",revision:null},{url:"assets/cli_git_FAQ.md.bfa6a884.lean.js",revision:null},{url:"assets/cli_git_hub.md.5aac4de7.js",revision:null},{url:"assets/cli_git_hub.md.5aac4de7.lean.js",revision:null},{url:"assets/cli_git_use.md.c830c8bd.js",revision:null},{url:"assets/cli_git_use.md.c830c8bd.lean.js",revision:null},{url:"assets/cli_index.md.04aa29be.js",revision:null},{url:"assets/cli_index.md.04aa29be.lean.js",revision:null},{url:"assets/cli_linux_cli.md.9b90e047.js",revision:null},{url:"assets/cli_linux_cli.md.9b90e047.lean.js",revision:null},{url:"assets/cli_linux_use.md.5ac5f4f1.js",revision:null},{url:"assets/cli_linux_use.md.5ac5f4f1.lean.js",revision:null},{url:"assets/cli_windows_cli.md.3368a343.js",revision:null},{url:"assets/cli_windows_cli.md.3368a343.lean.js",revision:null},{url:"assets/cli_windows_FAQ.md.256a7d57.js",revision:null},{url:"assets/cli_windows_FAQ.md.256a7d57.lean.js",revision:null},{url:"assets/custom_img_1.52edb246.png",revision:null},{url:"assets/custom_img_10.3ca3a90f.png",revision:null},{url:"assets/custom_img_2.a631dcde.png",revision:null},{url:"assets/custom_img_3.bd948ff2.png",revision:null},{url:"assets/custom_img_4.1079f71d.png",revision:null},{url:"assets/custom_img_5.4a9f769f.png",revision:null},{url:"assets/custom_img_6.4cbaf63b.png",revision:null},{url:"assets/custom_img_7.57e88110.png",revision:null},{url:"assets/custom_img_8.f39cf452.png",revision:null},{url:"assets/custom_img_9.9ebbc7c6.png",revision:null},{url:"assets/download_img_1.6f3b10a5.png",revision:null},{url:"assets/download_img_2.64ee6991.png",revision:null},{url:"assets/download_img.b46b56c9.png",revision:null},{url:"assets/frontend_browser_basics.md.8b7307a5.js",revision:null},{url:"assets/frontend_browser_basics.md.8b7307a5.lean.js",revision:null},{url:"assets/frontend_browser_cache.md.50c3b40e.js",revision:null},{url:"assets/frontend_browser_cache.md.50c3b40e.lean.js",revision:null},{url:"assets/frontend_browser_storage.md.deb07ab5.js",revision:null},{url:"assets/frontend_browser_storage.md.deb07ab5.lean.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.eccaee2c.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.eccaee2c.lean.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.fee0fbc7.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.fee0fbc7.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.5f55364e.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.5f55364e.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9d221db2.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9d221db2.lean.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.df49a8d7.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.df49a8d7.lean.js",revision:null},{url:"assets/frontend_build_vite_ts.md.5aaa8e82.js",revision:null},{url:"assets/frontend_build_vite_ts.md.5aaa8e82.lean.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.220e52dc.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.220e52dc.lean.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.6c520d5d.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.6c520d5d.lean.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.2985619a.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.2985619a.lean.js",revision:null},{url:"assets/frontend_code_excel-json.md.50187fd5.js",revision:null},{url:"assets/frontend_code_excel-json.md.50187fd5.lean.js",revision:null},{url:"assets/frontend_code_image-lazy.md.86f2d462.js",revision:null},{url:"assets/frontend_code_image-lazy.md.86f2d462.lean.js",revision:null},{url:"assets/frontend_code_list-tree.md.9ba1c34f.js",revision:null},{url:"assets/frontend_code_list-tree.md.9ba1c34f.lean.js",revision:null},{url:"assets/frontend_code_others.md.01eb02f1.js",revision:null},{url:"assets/frontend_code_others.md.01eb02f1.lean.js",revision:null},{url:"assets/frontend_code_pretter.md.16d18d77.js",revision:null},{url:"assets/frontend_code_pretter.md.16d18d77.lean.js",revision:null},{url:"assets/frontend_css_selector.md.f0906bac.js",revision:null},{url:"assets/frontend_css_selector.md.f0906bac.lean.js",revision:null},{url:"assets/frontend_css_weight.md.6e96033d.js",revision:null},{url:"assets/frontend_css_weight.md.6e96033d.lean.js",revision:null},{url:"assets/frontend_html_index.md.af975fe0.js",revision:null},{url:"assets/frontend_html_index.md.af975fe0.lean.js",revision:null},{url:"assets/frontend_index.md.271ae47d.js",revision:null},{url:"assets/frontend_index.md.271ae47d.lean.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ff876fdb.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ff876fdb.lean.js",revision:null},{url:"assets/frontend_javascript_array.md.66c2277c.js",revision:null},{url:"assets/frontend_javascript_array.md.66c2277c.lean.js",revision:null},{url:"assets/frontend_javascript_binary.md.4bbff079.js",revision:null},{url:"assets/frontend_javascript_binary.md.4bbff079.lean.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.44d06c9c.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.44d06c9c.lean.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.510e1b65.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.510e1b65.lean.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.c120e7c9.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.c120e7c9.lean.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.6ef4f561.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.6ef4f561.lean.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.304338e5.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.304338e5.lean.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.7eb84284.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.7eb84284.lean.js",revision:null},{url:"assets/frontend_javascript_fetch.md.93055c7f.js",revision:null},{url:"assets/frontend_javascript_fetch.md.93055c7f.lean.js",revision:null},{url:"assets/frontend_javascript_object.md.c8f715d9.js",revision:null},{url:"assets/frontend_javascript_object.md.c8f715d9.lean.js",revision:null},{url:"assets/frontend_javascript_promise.md.c09c656c.js",revision:null},{url:"assets/frontend_javascript_promise.md.c09c656c.lean.js",revision:null},{url:"assets/frontend_javascript_prototype.md.7bfb3de8.js",revision:null},{url:"assets/frontend_javascript_prototype.md.7bfb3de8.lean.js",revision:null},{url:"assets/frontend_javascript_scope.md.2a3c19cc.js",revision:null},{url:"assets/frontend_javascript_scope.md.2a3c19cc.lean.js",revision:null},{url:"assets/frontend_javascript_string.md.703b92f9.js",revision:null},{url:"assets/frontend_javascript_string.md.703b92f9.lean.js",revision:null},{url:"assets/frontend_network_cors.md.d5307982.js",revision:null},{url:"assets/frontend_network_cors.md.d5307982.lean.js",revision:null},{url:"assets/frontend_network_encryption.md.e9852c4a.js",revision:null},{url:"assets/frontend_network_encryption.md.e9852c4a.lean.js",revision:null},{url:"assets/frontend_network_http.md.d98cbb97.js",revision:null},{url:"assets/frontend_network_http.md.d98cbb97.lean.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.8cdff2d8.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.8cdff2d8.lean.js",revision:null},{url:"assets/frontend_network_request.md.886291cb.js",revision:null},{url:"assets/frontend_network_request.md.886291cb.lean.js",revision:null},{url:"assets/frontend_network_security.md.8d44efd2.js",revision:null},{url:"assets/frontend_network_security.md.8d44efd2.lean.js",revision:null},{url:"assets/frontend_network_tcp.md.fc8d323c.js",revision:null},{url:"assets/frontend_network_tcp.md.fc8d323c.lean.js",revision:null},{url:"assets/frontend_npm_changesets.md.edce00ec.js",revision:null},{url:"assets/frontend_npm_changesets.md.edce00ec.lean.js",revision:null},{url:"assets/frontend_npm_cli.md.d7f31ada.js",revision:null},{url:"assets/frontend_npm_cli.md.d7f31ada.lean.js",revision:null},{url:"assets/frontend_npm_FAQ.md.f6896410.js",revision:null},{url:"assets/frontend_npm_FAQ.md.f6896410.lean.js",revision:null},{url:"assets/frontend_npm_libs.md.cfdd0c25.js",revision:null},{url:"assets/frontend_npm_libs.md.cfdd0c25.lean.js",revision:null},{url:"assets/frontend_npm_license.md.c9a72898.js",revision:null},{url:"assets/frontend_npm_license.md.c9a72898.lean.js",revision:null},{url:"assets/frontend_npm_package-exports.md.6d2c83f4.js",revision:null},{url:"assets/frontend_npm_package-exports.md.6d2c83f4.lean.js",revision:null},{url:"assets/frontend_npm_package-json.md.67824e8d.js",revision:null},{url:"assets/frontend_npm_package-json.md.67824e8d.lean.js",revision:null},{url:"assets/frontend_npm_package-manager.md.3564d290.js",revision:null},{url:"assets/frontend_npm_package-manager.md.3564d290.lean.js",revision:null},{url:"assets/frontend_npm_package-patch.md.09b3311f.js",revision:null},{url:"assets/frontend_npm_package-patch.md.09b3311f.lean.js",revision:null},{url:"assets/frontend_npm_release-it.md.044ce2ce.js",revision:null},{url:"assets/frontend_npm_release-it.md.044ce2ce.lean.js",revision:null},{url:"assets/frontend_npm_SemVer.md.407546f7.js",revision:null},{url:"assets/frontend_npm_SemVer.md.407546f7.lean.js",revision:null},{url:"assets/frontend_regex_basics.md.90a8feba.js",revision:null},{url:"assets/frontend_regex_basics.md.90a8feba.lean.js",revision:null},{url:"assets/frontend_regex_use.md.315c245e.js",revision:null},{url:"assets/frontend_regex_use.md.315c245e.lean.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.7bb36da4.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.7bb36da4.lean.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.3b6764d5.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.3b6764d5.lean.js",revision:null},{url:"assets/img_1.5e390f4e.png",revision:null},{url:"assets/img_1.7a3ebcab.png",revision:null},{url:"assets/img_1.7ff297cb.png",revision:null},{url:"assets/img_1.b295697c.png",revision:null},{url:"assets/img_10.200e566d.png",revision:null},{url:"assets/img_2.2810f483.png",revision:null},{url:"assets/img_2.55110f2a.png",revision:null},{url:"assets/img_2.e7b91dcb.png",revision:null},{url:"assets/img_3.8118008d.png",revision:null},{url:"assets/img_3.e18870c4.png",revision:null},{url:"assets/img_4.5f8c656c.png",revision:null},{url:"assets/img_4.726c4310.png",revision:null},{url:"assets/img_5.2dbf15aa.png",revision:null},{url:"assets/img_5.d8f884e8.png",revision:null},{url:"assets/img_6.0ade014a.png",revision:null},{url:"assets/img_6.0bbbfc14.png",revision:null},{url:"assets/img_7.6a52f8bc.png",revision:null},{url:"assets/img_7.b6f57f5c.png",revision:null},{url:"assets/img_8.2991d750.png",revision:null},{url:"assets/img_9.a4f5bf01.png",revision:null},{url:"assets/img.2e8a66d0.png",revision:null},{url:"assets/img.65a9c1e9.png",revision:null},{url:"assets/img.7effe2e8.png",revision:null},{url:"assets/img.8a89d19f.png",revision:null},{url:"assets/img.a4ef83c3.png",revision:null},{url:"assets/img.fa4a579c.png",revision:null},{url:"assets/index.md.4cad84bb.js",revision:null},{url:"assets/index.md.4cad84bb.lean.js",revision:null},{url:"assets/install_img_0.70e8c1af.png",revision:null},{url:"assets/install_img_1.99713b77.png",revision:null},{url:"assets/install_img_10.f3eb1b6b.png",revision:null},{url:"assets/install_img_11.d097a64e.png",revision:null},{url:"assets/install_img_12.e9657aae.png",revision:null},{url:"assets/install_img_13.08ffcc88.png",revision:null},{url:"assets/install_img_14.f1461e36.png",revision:null},{url:"assets/install_img_15.437fbd05.png",revision:null},{url:"assets/install_img_16.8e228a7b.png",revision:null},{url:"assets/install_img_17.2ce62dd7.png",revision:null},{url:"assets/install_img_18.2f2f5f60.png",revision:null},{url:"assets/install_img_19.5ac4c6d1.png",revision:null},{url:"assets/install_img_2.6d44774c.png",revision:null},{url:"assets/install_img_20.4466232f.png",revision:null},{url:"assets/install_img_3.8b8b4477.png",revision:null},{url:"assets/install_img_4.89ea364c.png",revision:null},{url:"assets/install_img_5.54926192.png",revision:null},{url:"assets/install_img_6.22305e60.png",revision:null},{url:"assets/install_img_7.42ad31bd.png",revision:null},{url:"assets/install_img_8.5486d534.png",revision:null},{url:"assets/install_img_9.666141db.png",revision:null},{url:"assets/install_img.a7659d1c.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/navigation_index.md.d70af756.js",revision:null},{url:"assets/navigation_index.md.d70af756.lean.js",revision:null},{url:"assets/npm_license_img.507c89ef.png",revision:null},{url:"assets/origin_index.md.339c4cb1.js",revision:null},{url:"assets/origin_index.md.339c4cb1.lean.js",revision:null},{url:"assets/style.cef2583f.css",revision:null},{url:"backend/index.html",revision:"9651bfc5f71c3689f935e8e790d3a5e9"},{url:"backend/koa/start.html",revision:"e86a7b6fa88bab1794d5bb39bffe910e"},{url:"backend/koa/use.html",revision:"6b47550d0b6f92df851882f66526315d"},{url:"backend/mysql/install.html",revision:"55c454b2925dd1d32bcac36702b13f71"},{url:"backend/node/env.html",revision:"858413527745d907b7f4f97a067a2ee9"},{url:"backend/node/process.html",revision:"6a10e474a2dd5d69774881c0bb5f14a6"},{url:"backend/redis/install.html",revision:"4f20b22798fceaf29fd575366cbe2cb8"},{url:"cli/git/cli.html",revision:"8d3ae5fa6f9730bbce2cc23a26653b45"},{url:"cli/git/commitlint.html",revision:"b58338a9a273ca471a8e6941f9f85ff3"},{url:"cli/git/FAQ.html",revision:"293b703b519bc0fc658fb82788d172c9"},{url:"cli/git/hub.html",revision:"6c1f8b9868a38bf81b4c9b0bba1bacf3"},{url:"cli/git/use.html",revision:"ae1b8d1864ec7b2cb5fc3ed8f9d02cf1"},{url:"cli/index.html",revision:"a4fe423b5df1aad005a9b2c4900ec75d"},{url:"cli/linux/cli.html",revision:"a9f3f45efc8310a333add1a118836bd0"},{url:"cli/linux/use.html",revision:"1cbf8280b9424bd1abe82fd39c24bb46"},{url:"cli/windows/cli.html",revision:"0ada6c7cbe397ceab3abdcad8c68e636"},{url:"cli/windows/FAQ.html",revision:"43e9872a8e612b64d7b7ea04f641e838"},{url:"favicon.ico",revision:"710702509c00e4fe7442447e555df1ff"},{url:"frontend/browser/basics.html",revision:"71e801137b4c4f8b5a6e86d3caa2c29b"},{url:"frontend/browser/cache.html",revision:"81b90bef2e6dc946e1b8073c190975fd"},{url:"frontend/browser/storage.html",revision:"16c59eb9433354549927222ba98397aa"},{url:"frontend/build/monorepo/quickstart.html",revision:"66c7aa83f22594f07e31e38cc4d06e0c"},{url:"frontend/build/monorepo/turborepo.html",revision:"69f1db6417613daf2fee3e312e7cf835"},{url:"frontend/build/rollup/lib-js.html",revision:"9fca3504fb741d71c13ec10b6c8828be"},{url:"frontend/build/rollup/lib-ts.html",revision:"ad7c03d682760d40a063433e982cce7b"},{url:"frontend/build/rollup/quickstart.html",revision:"f92ccaa70beeb86e41280e1d6d0015a1"},{url:"frontend/build/vite/ts.html",revision:"c0b00ca897e1458cdb07ccc64d652521"},{url:"frontend/build/webpack/FAQ.html",revision:"586bdd2710dbcf1771d42baf2b4bc62e"},{url:"frontend/build/webpack/lib-icon.html",revision:"c47c58d0ca30b3138361e5c1cd9fa2a0"},{url:"frontend/code/debounce-throttle.html",revision:"92f3e69726d7a583583f90ffcf4f9038"},{url:"frontend/code/excel-json.html",revision:"b097d977df61f5d8a7b81913c6d5ec20"},{url:"frontend/code/image-lazy.html",revision:"591a1dca581d67bec2f578e66553a3b4"},{url:"frontend/code/list-tree.html",revision:"e44c7dd7e00606f6055d833fc109d309"},{url:"frontend/code/others.html",revision:"a081174beab30fce2c065e0c2b12648e"},{url:"frontend/code/pretter.html",revision:"ca4b80490199b9fd564ff03739b6ebd1"},{url:"frontend/css/selector.html",revision:"b71edba65ca85fcac0a881d835d3f627"},{url:"frontend/css/weight.html",revision:"1d8b5496f5080e57ac41585057b59afa"},{url:"frontend/html/index.html",revision:"040af405d7a64651b9e667e3c80613d2"},{url:"frontend/index.html",revision:"4ec42d53bc274bc49fc3917bd5a35b72"},{url:"frontend/javascript/ajax.html",revision:"371c24fcb492e939fce427ab15c844fb"},{url:"frontend/javascript/array.html",revision:"d8b956aa45e5aca1baaa8877546a14e3"},{url:"frontend/javascript/binary.html",revision:"2abb302f41274093dd1d94d495a60113"},{url:"frontend/javascript/BOMObserver.html",revision:"a7e0a01b55dbc7638c105f2a68b3a466"},{url:"frontend/javascript/CallStack.html",revision:"6498bf870009271142bfb02208713a1a"},{url:"frontend/javascript/dictionary.html",revision:"bb2ce839a00435ddc549cf11cc3ffcf5"},{url:"frontend/javascript/ElementPosition.html",revision:"79a294e65c6c385f44a6eaa8f102eccf"},{url:"frontend/javascript/ES6+.html",revision:"1347dd145126371df837c1312c7f4c7b"},{url:"frontend/javascript/EventLoop.html",revision:"4391ad6dd98580264b8318ac4cb18344"},{url:"frontend/javascript/fetch.html",revision:"7f6f6f104d0a62f3bd66ae563924a235"},{url:"frontend/javascript/object.html",revision:"6814509beb997e56bc36aab5a991bd3f"},{url:"frontend/javascript/promise.html",revision:"30f474f6422005c258e2f80554e34e6e"},{url:"frontend/javascript/prototype.html",revision:"57a65a047d65f676a0cf86da8c3b9c6c"},{url:"frontend/javascript/scope.html",revision:"96e0e17db4db506fff63ce27a4a90f58"},{url:"frontend/javascript/string.html",revision:"060d850bc4feda79ddb75f0f5fa45672"},{url:"frontend/network/cors.html",revision:"825091443e784b8943accff53e8b9928"},{url:"frontend/network/encryption.html",revision:"bdf96f868765695c133a6f85891f0121"},{url:"frontend/network/http.html",revision:"f54052b9506eb2dcfceaa5b4bb6d8cb6"},{url:"frontend/network/KeepAlive.html",revision:"6d5a934f2956b37e946c236acb681e60"},{url:"frontend/network/request.html",revision:"b3075155871129895a0e1caff137c633"},{url:"frontend/network/security.html",revision:"a521fa9d8ac77f64c8c71ad0c39701ec"},{url:"frontend/network/tcp.html",revision:"eb30106390622f5d49eca887561ee064"},{url:"frontend/npm/changesets.html",revision:"75502f48d9c355b7ecc4d15a6f3903f9"},{url:"frontend/npm/cli.html",revision:"a1ef406978987e5c8929ef7c06c207ee"},{url:"frontend/npm/FAQ.html",revision:"f240a62a48859691e443fe6df802c74f"},{url:"frontend/npm/libs.html",revision:"c3bf0c6cb3910d9a8b1956696a6fae13"},{url:"frontend/npm/license.html",revision:"043d2b8d4bc7c10cb3df99d31c5f2a39"},{url:"frontend/npm/package-exports.html",revision:"0b007bb92eb5ddcf5d87b2c417365eab"},{url:"frontend/npm/package-json.html",revision:"8b505f8968d69ae49ee855010399cd1f"},{url:"frontend/npm/package-manager.html",revision:"d03a217bfbd140d1bf46016cd2670458"},{url:"frontend/npm/package-patch.html",revision:"d926d52a7d7be7751efbf62515d44974"},{url:"frontend/npm/release-it.html",revision:"cf4a33b3d02d1fd65763fa63a294cd85"},{url:"frontend/npm/SemVer.html",revision:"01a24e2e9ff10e30217be0116ba5ebd0"},{url:"frontend/regex/basics.html",revision:"cfdfa3cd3e447356cc033bc4315dfcdd"},{url:"frontend/regex/use.html",revision:"7f2e2b44ab72e2b9d97198b6898c8c6b"},{url:"frontend/uncategorized/url-preview.html",revision:"6aada7dba5278dbeeacc8683bb7e9ee0"},{url:"frontend/vue/vue2-components.html",revision:"228b56f1a83145bfa804023fbe6c1c41"},{url:"giscus/noborder_dark.css",revision:"0381017c9f23173fc52539b760cbc7b3"},{url:"giscus/noborder_light.css",revision:"1514a7d3868ce0bc5faae416baaf6a56"},{url:"icons/create.svg",revision:"4596b23f730edc20645b66213f234a9d"},{url:"icons/tags.svg",revision:"a89835a6d5f3d0f6314cb20684bfd01c"},{url:"icons/update.svg",revision:"13a037f2fbd6ef84d88997aa4cc27339"},{url:"icons/zodiac/dog.svg",revision:"7f255c221ebc536ae168bd061ce4fcd4"},{url:"icons/zodiac/dragon.svg",revision:"a6811eb3e6ac9f931f8510604b35990e"},{url:"icons/zodiac/goat.svg",revision:"8d7e96e3d87b51fc866a9706747051c0"},{url:"icons/zodiac/horse.svg",revision:"f0d014be2cf1f15ef06214b1eb480062"},{url:"icons/zodiac/monkey.svg",revision:"1160fea5b17cd96f5df29508bd455586"},{url:"icons/zodiac/ox.svg",revision:"e62223d23b89c74e26812692e78754e9"},{url:"icons/zodiac/pig.svg",revision:"ab2396b4707b864301dbd5eda5732b12"},{url:"icons/zodiac/rabbit.svg",revision:"3a89782cda47e40f4a7732ff9ba0553f"},{url:"icons/zodiac/rat.svg",revision:"45e7451cea0ef25237e19ff13fedc7e0"},{url:"icons/zodiac/rooster.svg",revision:"15d1a5484eea17d9ecf87df3841996f1"},{url:"icons/zodiac/snake.svg",revision:"abbce3bed7859d23b33c1c86517f01e2"},{url:"icons/zodiac/tiger.svg",revision:"5e9bb5ee0924f9b96b2a86e9b645bc55"},{url:"index.html",revision:"46337ed379293b2d4ad1c17be236c295"},{url:"live2d/core/live2dCubismCore.min.js",revision:"1ae0f80720323fd164deb9c2af05848a"},{url:"live2d/models/hijiki/hijiki.2048/texture_00.png",revision:"0cc2f2880ef801c9bdcdcfddcdddafb3"},{url:"live2d/models/tororo/tororo.2048/texture_00.png",revision:"ee9c6155217d874a3825b07dd672a029"},{url:"logo.default.svg",revision:"c13222dbc0049bf4be184901a9a20949"},{url:"logo.png",revision:"276008f0fc30e3c90ae57daf41766cbb"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"navigation/index.html",revision:"eb0e170238da8dff2b1874db4c2b2ac7"},{url:"origin/index.html",revision:"35764b566f0f4a8b22a7f5f5947e81bc"},{url:"pwa-192x192.svg",revision:"b0229250796c6572bb422e21ef82e933"},{url:"pwa-512x512.svg",revision:"aa97e375b04bcd0f65f015503c2acbf3"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"manifest.webmanifest",revision:"08a9bdf7b879dd338ae4d3ff2b4b7f97"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({sameOrigin:e,url:s})=>e&&["images","icons","svg"].some((e=>s.pathname.startsWith(`/assets/${e}/`)))),new e.StaleWhileRevalidate({cacheName:"assets-images-cache",plugins:[new e.ExpirationPlugin({purgeOnQuotaError:!0,maxEntries:256,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^https:\/\/peiyanlu.github.io\/.*/i,new e.StaleWhileRevalidate({cacheName:"gh-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/someInterface/i,new e.StaleWhileRevalidate({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET")}));
