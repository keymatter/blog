if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>n(e,r),o={module:{uri:r},exports:a,require:t};s[r]=Promise.all(l.map((e=>o[e]||t(e)))).then((e=>(i(...e),a)))}}define(["./workbox-755692f8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"b5b8b29b0647cf86ede26f76cd49c9f6"},{url:"archive/index.html",revision:"aceceb8b634a4aad960749a1de9fdcdf"},{url:"assets/app.fe3301b8.js",revision:null},{url:"assets/archive_index.md.5fbcae7a.js",revision:null},{url:"assets/archive_index.md.5fbcae7a.lean.js",revision:null},{url:"assets/backend_index.md.3f7f534d.js",revision:null},{url:"assets/backend_index.md.3f7f534d.lean.js",revision:null},{url:"assets/backend_koa_start.md.0c37ecee.js",revision:null},{url:"assets/backend_koa_start.md.0c37ecee.lean.js",revision:null},{url:"assets/backend_koa_use.md.4bc57624.js",revision:null},{url:"assets/backend_koa_use.md.4bc57624.lean.js",revision:null},{url:"assets/backend_mysql_install.md.ea16bacd.js",revision:null},{url:"assets/backend_mysql_install.md.ea16bacd.lean.js",revision:null},{url:"assets/backend_node_env.md.fce7f0a2.js",revision:null},{url:"assets/backend_node_env.md.fce7f0a2.lean.js",revision:null},{url:"assets/backend_node_process.md.a20da397.js",revision:null},{url:"assets/backend_node_process.md.a20da397.lean.js",revision:null},{url:"assets/backend_redis_install.md.69b4c8ac.js",revision:null},{url:"assets/backend_redis_install.md.69b4c8ac.lean.js",revision:null},{url:"assets/chunks/base-80a1f760.c54940d7.js",revision:null},{url:"assets/chunks/client.utils-7a723432.ace87b8e.js",revision:null},{url:"assets/chunks/commonjsHelpers.39b5b250.js",revision:null},{url:"assets/chunks/DocShici.030a7911.js",revision:null},{url:"assets/chunks/DocTag.7681955d.js",revision:null},{url:"assets/chunks/framework.50c4d085.js",revision:null},{url:"assets/chunks/ImageLazyLoad.5703198b.js",revision:null},{url:"assets/chunks/index-bd1ff004.d5c7970a.js",revision:null},{url:"assets/chunks/index.0b25a6a6.js",revision:null},{url:"assets/chunks/index.854751e3.js",revision:null},{url:"assets/chunks/SvgIcon.9b9c9086.js",revision:null},{url:"assets/chunks/theme.e66b8b0c.js",revision:null},{url:"assets/chunks/useNamespace.75a6a06b.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.1008c565.js",revision:null},{url:"assets/chunks/WordCloud.f578b6cc.js",revision:null},{url:"assets/cli_git_cli.md.dcd09115.js",revision:null},{url:"assets/cli_git_cli.md.dcd09115.lean.js",revision:null},{url:"assets/cli_git_commitlint.md.dce7427a.js",revision:null},{url:"assets/cli_git_commitlint.md.dce7427a.lean.js",revision:null},{url:"assets/cli_git_FAQ.md.bfa6a884.js",revision:null},{url:"assets/cli_git_FAQ.md.bfa6a884.lean.js",revision:null},{url:"assets/cli_git_hub.md.5aac4de7.js",revision:null},{url:"assets/cli_git_hub.md.5aac4de7.lean.js",revision:null},{url:"assets/cli_git_use.md.c830c8bd.js",revision:null},{url:"assets/cli_git_use.md.c830c8bd.lean.js",revision:null},{url:"assets/cli_index.md.04aa29be.js",revision:null},{url:"assets/cli_index.md.04aa29be.lean.js",revision:null},{url:"assets/cli_linux_cli.md.9b90e047.js",revision:null},{url:"assets/cli_linux_cli.md.9b90e047.lean.js",revision:null},{url:"assets/cli_linux_use.md.5ac5f4f1.js",revision:null},{url:"assets/cli_linux_use.md.5ac5f4f1.lean.js",revision:null},{url:"assets/cli_windows_cli.md.3368a343.js",revision:null},{url:"assets/cli_windows_cli.md.3368a343.lean.js",revision:null},{url:"assets/cli_windows_FAQ.md.256a7d57.js",revision:null},{url:"assets/cli_windows_FAQ.md.256a7d57.lean.js",revision:null},{url:"assets/custom_img_1.52edb246.png",revision:null},{url:"assets/custom_img_10.3ca3a90f.png",revision:null},{url:"assets/custom_img_2.a631dcde.png",revision:null},{url:"assets/custom_img_3.bd948ff2.png",revision:null},{url:"assets/custom_img_4.1079f71d.png",revision:null},{url:"assets/custom_img_5.4a9f769f.png",revision:null},{url:"assets/custom_img_6.4cbaf63b.png",revision:null},{url:"assets/custom_img_7.57e88110.png",revision:null},{url:"assets/custom_img_8.f39cf452.png",revision:null},{url:"assets/custom_img_9.9ebbc7c6.png",revision:null},{url:"assets/download_img_1.6f3b10a5.png",revision:null},{url:"assets/download_img_2.64ee6991.png",revision:null},{url:"assets/download_img.b46b56c9.png",revision:null},{url:"assets/frontend_browser_basics.md.8b7307a5.js",revision:null},{url:"assets/frontend_browser_basics.md.8b7307a5.lean.js",revision:null},{url:"assets/frontend_browser_cache.md.38983d74.js",revision:null},{url:"assets/frontend_browser_cache.md.38983d74.lean.js",revision:null},{url:"assets/frontend_browser_storage.md.deb07ab5.js",revision:null},{url:"assets/frontend_browser_storage.md.deb07ab5.lean.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.eccaee2c.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.eccaee2c.lean.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.fee0fbc7.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.fee0fbc7.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.5f55364e.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.5f55364e.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9d221db2.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9d221db2.lean.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.df49a8d7.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.df49a8d7.lean.js",revision:null},{url:"assets/frontend_build_vite_ts.md.5aaa8e82.js",revision:null},{url:"assets/frontend_build_vite_ts.md.5aaa8e82.lean.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.220e52dc.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.220e52dc.lean.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.6c520d5d.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.6c520d5d.lean.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.2985619a.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.2985619a.lean.js",revision:null},{url:"assets/frontend_code_excel-json.md.50187fd5.js",revision:null},{url:"assets/frontend_code_excel-json.md.50187fd5.lean.js",revision:null},{url:"assets/frontend_code_image-lazy.md.86f2d462.js",revision:null},{url:"assets/frontend_code_image-lazy.md.86f2d462.lean.js",revision:null},{url:"assets/frontend_code_list-tree.md.9ba1c34f.js",revision:null},{url:"assets/frontend_code_list-tree.md.9ba1c34f.lean.js",revision:null},{url:"assets/frontend_code_others.md.01eb02f1.js",revision:null},{url:"assets/frontend_code_others.md.01eb02f1.lean.js",revision:null},{url:"assets/frontend_code_pretter.md.16d18d77.js",revision:null},{url:"assets/frontend_code_pretter.md.16d18d77.lean.js",revision:null},{url:"assets/frontend_css_selector.md.f0906bac.js",revision:null},{url:"assets/frontend_css_selector.md.f0906bac.lean.js",revision:null},{url:"assets/frontend_css_weight.md.6e96033d.js",revision:null},{url:"assets/frontend_css_weight.md.6e96033d.lean.js",revision:null},{url:"assets/frontend_html_index.md.af975fe0.js",revision:null},{url:"assets/frontend_html_index.md.af975fe0.lean.js",revision:null},{url:"assets/frontend_index.md.271ae47d.js",revision:null},{url:"assets/frontend_index.md.271ae47d.lean.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ff876fdb.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ff876fdb.lean.js",revision:null},{url:"assets/frontend_javascript_array.md.66c2277c.js",revision:null},{url:"assets/frontend_javascript_array.md.66c2277c.lean.js",revision:null},{url:"assets/frontend_javascript_binary.md.4bbff079.js",revision:null},{url:"assets/frontend_javascript_binary.md.4bbff079.lean.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.44d06c9c.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.44d06c9c.lean.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.510e1b65.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.510e1b65.lean.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.c120e7c9.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.c120e7c9.lean.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.6ef4f561.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.6ef4f561.lean.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.304338e5.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.304338e5.lean.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.7eb84284.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.7eb84284.lean.js",revision:null},{url:"assets/frontend_javascript_fetch.md.93055c7f.js",revision:null},{url:"assets/frontend_javascript_fetch.md.93055c7f.lean.js",revision:null},{url:"assets/frontend_javascript_object.md.c8f715d9.js",revision:null},{url:"assets/frontend_javascript_object.md.c8f715d9.lean.js",revision:null},{url:"assets/frontend_javascript_promise.md.c09c656c.js",revision:null},{url:"assets/frontend_javascript_promise.md.c09c656c.lean.js",revision:null},{url:"assets/frontend_javascript_prototype.md.7bfb3de8.js",revision:null},{url:"assets/frontend_javascript_prototype.md.7bfb3de8.lean.js",revision:null},{url:"assets/frontend_javascript_scope.md.2a3c19cc.js",revision:null},{url:"assets/frontend_javascript_scope.md.2a3c19cc.lean.js",revision:null},{url:"assets/frontend_javascript_string.md.703b92f9.js",revision:null},{url:"assets/frontend_javascript_string.md.703b92f9.lean.js",revision:null},{url:"assets/frontend_network_cors.md.d5307982.js",revision:null},{url:"assets/frontend_network_cors.md.d5307982.lean.js",revision:null},{url:"assets/frontend_network_encryption.md.e9852c4a.js",revision:null},{url:"assets/frontend_network_encryption.md.e9852c4a.lean.js",revision:null},{url:"assets/frontend_network_http.md.d98cbb97.js",revision:null},{url:"assets/frontend_network_http.md.d98cbb97.lean.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.8cdff2d8.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.8cdff2d8.lean.js",revision:null},{url:"assets/frontend_network_request.md.886291cb.js",revision:null},{url:"assets/frontend_network_request.md.886291cb.lean.js",revision:null},{url:"assets/frontend_network_security.md.8d44efd2.js",revision:null},{url:"assets/frontend_network_security.md.8d44efd2.lean.js",revision:null},{url:"assets/frontend_network_tcp.md.fc8d323c.js",revision:null},{url:"assets/frontend_network_tcp.md.fc8d323c.lean.js",revision:null},{url:"assets/frontend_npm_changesets.md.edce00ec.js",revision:null},{url:"assets/frontend_npm_changesets.md.edce00ec.lean.js",revision:null},{url:"assets/frontend_npm_cli.md.d7f31ada.js",revision:null},{url:"assets/frontend_npm_cli.md.d7f31ada.lean.js",revision:null},{url:"assets/frontend_npm_FAQ.md.f6896410.js",revision:null},{url:"assets/frontend_npm_FAQ.md.f6896410.lean.js",revision:null},{url:"assets/frontend_npm_libs.md.cfdd0c25.js",revision:null},{url:"assets/frontend_npm_libs.md.cfdd0c25.lean.js",revision:null},{url:"assets/frontend_npm_license.md.c9a72898.js",revision:null},{url:"assets/frontend_npm_license.md.c9a72898.lean.js",revision:null},{url:"assets/frontend_npm_package-exports.md.6d2c83f4.js",revision:null},{url:"assets/frontend_npm_package-exports.md.6d2c83f4.lean.js",revision:null},{url:"assets/frontend_npm_package-json.md.67824e8d.js",revision:null},{url:"assets/frontend_npm_package-json.md.67824e8d.lean.js",revision:null},{url:"assets/frontend_npm_package-manager.md.3564d290.js",revision:null},{url:"assets/frontend_npm_package-manager.md.3564d290.lean.js",revision:null},{url:"assets/frontend_npm_package-patch.md.09b3311f.js",revision:null},{url:"assets/frontend_npm_package-patch.md.09b3311f.lean.js",revision:null},{url:"assets/frontend_npm_release-it.md.044ce2ce.js",revision:null},{url:"assets/frontend_npm_release-it.md.044ce2ce.lean.js",revision:null},{url:"assets/frontend_npm_SemVer.md.407546f7.js",revision:null},{url:"assets/frontend_npm_SemVer.md.407546f7.lean.js",revision:null},{url:"assets/frontend_regex_basics.md.90a8feba.js",revision:null},{url:"assets/frontend_regex_basics.md.90a8feba.lean.js",revision:null},{url:"assets/frontend_regex_use.md.315c245e.js",revision:null},{url:"assets/frontend_regex_use.md.315c245e.lean.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.7bb36da4.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.7bb36da4.lean.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.3b6764d5.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.3b6764d5.lean.js",revision:null},{url:"assets/img_1.5e390f4e.png",revision:null},{url:"assets/img_1.7a3ebcab.png",revision:null},{url:"assets/img_1.7ff297cb.png",revision:null},{url:"assets/img_1.b295697c.png",revision:null},{url:"assets/img_10.200e566d.png",revision:null},{url:"assets/img_2.2810f483.png",revision:null},{url:"assets/img_2.55110f2a.png",revision:null},{url:"assets/img_2.e7b91dcb.png",revision:null},{url:"assets/img_3.8118008d.png",revision:null},{url:"assets/img_3.e18870c4.png",revision:null},{url:"assets/img_4.5f8c656c.png",revision:null},{url:"assets/img_4.726c4310.png",revision:null},{url:"assets/img_5.2dbf15aa.png",revision:null},{url:"assets/img_5.d8f884e8.png",revision:null},{url:"assets/img_6.0ade014a.png",revision:null},{url:"assets/img_6.0bbbfc14.png",revision:null},{url:"assets/img_7.6a52f8bc.png",revision:null},{url:"assets/img_7.b6f57f5c.png",revision:null},{url:"assets/img_8.2991d750.png",revision:null},{url:"assets/img_9.a4f5bf01.png",revision:null},{url:"assets/img.2e8a66d0.png",revision:null},{url:"assets/img.65a9c1e9.png",revision:null},{url:"assets/img.7effe2e8.png",revision:null},{url:"assets/img.8a89d19f.png",revision:null},{url:"assets/img.a4ef83c3.png",revision:null},{url:"assets/img.fa4a579c.png",revision:null},{url:"assets/index.md.456eb89a.js",revision:null},{url:"assets/index.md.456eb89a.lean.js",revision:null},{url:"assets/install_img_0.70e8c1af.png",revision:null},{url:"assets/install_img_1.99713b77.png",revision:null},{url:"assets/install_img_10.f3eb1b6b.png",revision:null},{url:"assets/install_img_11.d097a64e.png",revision:null},{url:"assets/install_img_12.e9657aae.png",revision:null},{url:"assets/install_img_13.08ffcc88.png",revision:null},{url:"assets/install_img_14.f1461e36.png",revision:null},{url:"assets/install_img_15.437fbd05.png",revision:null},{url:"assets/install_img_16.8e228a7b.png",revision:null},{url:"assets/install_img_17.2ce62dd7.png",revision:null},{url:"assets/install_img_18.2f2f5f60.png",revision:null},{url:"assets/install_img_19.5ac4c6d1.png",revision:null},{url:"assets/install_img_2.6d44774c.png",revision:null},{url:"assets/install_img_20.4466232f.png",revision:null},{url:"assets/install_img_3.8b8b4477.png",revision:null},{url:"assets/install_img_4.89ea364c.png",revision:null},{url:"assets/install_img_5.54926192.png",revision:null},{url:"assets/install_img_6.22305e60.png",revision:null},{url:"assets/install_img_7.42ad31bd.png",revision:null},{url:"assets/install_img_8.5486d534.png",revision:null},{url:"assets/install_img_9.666141db.png",revision:null},{url:"assets/install_img.a7659d1c.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/navigation_index.md.d70af756.js",revision:null},{url:"assets/navigation_index.md.d70af756.lean.js",revision:null},{url:"assets/npm_license_img.507c89ef.png",revision:null},{url:"assets/origin_index.md.339c4cb1.js",revision:null},{url:"assets/origin_index.md.339c4cb1.lean.js",revision:null},{url:"assets/style.cef2583f.css",revision:null},{url:"backend/index.html",revision:"c58d3492cc0febb89a6b46ba4d56984d"},{url:"backend/koa/start.html",revision:"fe4b16060ee7fd2fd0076b5fdf78a410"},{url:"backend/koa/use.html",revision:"1cf36c3323860c3ba09c2fc3e0a8bb0d"},{url:"backend/mysql/install.html",revision:"203f510941cd0a5fc4d3993ac9a421fb"},{url:"backend/node/env.html",revision:"de5af2a7be67256d78690fe0780389c1"},{url:"backend/node/process.html",revision:"4018dae09dcb04548656dbd18f63eb09"},{url:"backend/redis/install.html",revision:"ed6ed6c2bc6ba2a043b081e41c577cb4"},{url:"cli/git/cli.html",revision:"f676632ca99e1d66033aa7042859b075"},{url:"cli/git/commitlint.html",revision:"e3df5127048e6c7d37e7464692db5584"},{url:"cli/git/FAQ.html",revision:"3ba18fb5755b2487e86271e81f817c28"},{url:"cli/git/hub.html",revision:"35f2f7cac8fa4700d6b1d521c3ec51ad"},{url:"cli/git/use.html",revision:"fbb7e6a813bd94004e7072ff3cc6628f"},{url:"cli/index.html",revision:"4807707b3946c3407b83a2bda69699c6"},{url:"cli/linux/cli.html",revision:"f2a6510b6697ce0d62e4faa5823cc125"},{url:"cli/linux/use.html",revision:"9c97bd888dae75a15eb658d8baadd91a"},{url:"cli/windows/cli.html",revision:"23676167e95d182d4e2e731ffd9c17c6"},{url:"cli/windows/FAQ.html",revision:"dee0f404d1f927f6e6d3c554ae32cd24"},{url:"favicon.ico",revision:"710702509c00e4fe7442447e555df1ff"},{url:"frontend/browser/basics.html",revision:"4c089cff0bfe74a5859f6dfd24e43ffc"},{url:"frontend/browser/cache.html",revision:"f1b1218148b1a71d015cacbab25efb6c"},{url:"frontend/browser/storage.html",revision:"6618a514532190a88cd1ff4ebbc57da7"},{url:"frontend/build/monorepo/quickstart.html",revision:"d71e6c2b64b498961c35cc419242095b"},{url:"frontend/build/monorepo/turborepo.html",revision:"a3daffbe9d9885be58b67a6a85dedecc"},{url:"frontend/build/rollup/lib-js.html",revision:"7215433324266ef61612f48a7066d679"},{url:"frontend/build/rollup/lib-ts.html",revision:"4ac82fef3252c4fc4515f5f30e8ff871"},{url:"frontend/build/rollup/quickstart.html",revision:"cb8db7af7d0f1d5decc1a65bade74b00"},{url:"frontend/build/vite/ts.html",revision:"8f35819510e0c4c0d479871abc61b60e"},{url:"frontend/build/webpack/FAQ.html",revision:"0d7dad52d6cfecb5cd320f434b149fb9"},{url:"frontend/build/webpack/lib-icon.html",revision:"0c6d707fc3fdcba75a7c65c16ce34dcb"},{url:"frontend/code/debounce-throttle.html",revision:"ea9af6150f5cba9353d0f6a60d383199"},{url:"frontend/code/excel-json.html",revision:"c280981bc04728413d65f0d487db2755"},{url:"frontend/code/image-lazy.html",revision:"aedcb8c68919df1b936edb97e7155ae4"},{url:"frontend/code/list-tree.html",revision:"b8344ccd8cbdc7202b2f98d98c9620a1"},{url:"frontend/code/others.html",revision:"405d29c091fba494bd9bd60f0ad19067"},{url:"frontend/code/pretter.html",revision:"11c49e65db36410ba6beda2a16a01d54"},{url:"frontend/css/selector.html",revision:"ecfad63c7fb145536f906d7a2546d2b9"},{url:"frontend/css/weight.html",revision:"2d71cae089cc927e51b0b02e32b87125"},{url:"frontend/html/index.html",revision:"b4f78a40848f46ad78466aef28612b93"},{url:"frontend/index.html",revision:"f213e889a67c36c103e38f2e3de1ce93"},{url:"frontend/javascript/ajax.html",revision:"ed08f64aec23e498033f297cc623ea6a"},{url:"frontend/javascript/array.html",revision:"15cff085621dfd8f7b52f61d359b51b7"},{url:"frontend/javascript/binary.html",revision:"33430b3b937b2c4376dbbc04619d6822"},{url:"frontend/javascript/BOMObserver.html",revision:"9cf37e177853c1316554dd699fa446df"},{url:"frontend/javascript/CallStack.html",revision:"6593dfd316c25985e93ec2b791b428b7"},{url:"frontend/javascript/dictionary.html",revision:"339b18184a2dbd75fe49fa0be45218c6"},{url:"frontend/javascript/ElementPosition.html",revision:"36fc58898fdec2001c66088a1e5caeda"},{url:"frontend/javascript/ES6+.html",revision:"d55dc06c324a61b746d089f449b421a7"},{url:"frontend/javascript/EventLoop.html",revision:"8fda81dd367dabb5cb40233e50e21d70"},{url:"frontend/javascript/fetch.html",revision:"6abed0096307e56c3481e30893b9f1d0"},{url:"frontend/javascript/object.html",revision:"2b0ae4909719d09a52aff264232cf4fb"},{url:"frontend/javascript/promise.html",revision:"b6c039e0f5e9caf5ec5b2671e7a7c465"},{url:"frontend/javascript/prototype.html",revision:"66e210836df2fd1684a015d925847f39"},{url:"frontend/javascript/scope.html",revision:"1e1cc7aba0067a2fcab61215035d2a2b"},{url:"frontend/javascript/string.html",revision:"0ce09c6fcfe84a50c518378f3a537c1f"},{url:"frontend/network/cors.html",revision:"cb6cb38ea18703e1762ab002092a23f0"},{url:"frontend/network/encryption.html",revision:"558c7cc1868114b37fccae907f51f1eb"},{url:"frontend/network/http.html",revision:"034dd2b66425ec2671b94dc302824354"},{url:"frontend/network/KeepAlive.html",revision:"03cc91efcf8bb0310ce0bd6eb96d2d72"},{url:"frontend/network/request.html",revision:"8fbe68bbbfa1f553bc776a1637a9beed"},{url:"frontend/network/security.html",revision:"eac34f08d8dc287542e913ff7f16a3c9"},{url:"frontend/network/tcp.html",revision:"9103b1e54f386ed4a23a32eff820b209"},{url:"frontend/npm/changesets.html",revision:"ad275aa792b6ac025e79cf8640cc96bd"},{url:"frontend/npm/cli.html",revision:"92a50613a0cae65c6859f3915480bd0a"},{url:"frontend/npm/FAQ.html",revision:"71ebd9bb8d0c319409c5f5acb0667c54"},{url:"frontend/npm/libs.html",revision:"bf6d05d8307b7605f2dcc26688f80b04"},{url:"frontend/npm/license.html",revision:"0cf6af7b2bb5dcf6f6b3026c9cf8683b"},{url:"frontend/npm/package-exports.html",revision:"d4d2318044a8a00e1299b2e310530621"},{url:"frontend/npm/package-json.html",revision:"91a8355f8fcc8e8f7f849bc3051752b4"},{url:"frontend/npm/package-manager.html",revision:"874167b3591ab0ebec34b92b32fadf5c"},{url:"frontend/npm/package-patch.html",revision:"60a40e9343a5cec9762fa676e2e25afc"},{url:"frontend/npm/release-it.html",revision:"dd219452a6618799c552ee72f458ab1e"},{url:"frontend/npm/SemVer.html",revision:"c9eb76737b2a6c314553b5915f1ce277"},{url:"frontend/regex/basics.html",revision:"fa750b465da0ae96f19dd8d6cd2eacb5"},{url:"frontend/regex/use.html",revision:"09ea38f49f322196c1fdb6b585b0bd2f"},{url:"frontend/uncategorized/url-preview.html",revision:"6fdc3656cbd884b697f2a98df3bb258a"},{url:"frontend/vue/vue2-components.html",revision:"c22d90a750bf2165ec40917d27404311"},{url:"giscus/noborder_dark.css",revision:"0381017c9f23173fc52539b760cbc7b3"},{url:"giscus/noborder_light.css",revision:"1514a7d3868ce0bc5faae416baaf6a56"},{url:"icons/create.svg",revision:"4596b23f730edc20645b66213f234a9d"},{url:"icons/tags.svg",revision:"a89835a6d5f3d0f6314cb20684bfd01c"},{url:"icons/update.svg",revision:"13a037f2fbd6ef84d88997aa4cc27339"},{url:"icons/zodiac/dog.svg",revision:"7f255c221ebc536ae168bd061ce4fcd4"},{url:"icons/zodiac/dragon.svg",revision:"a6811eb3e6ac9f931f8510604b35990e"},{url:"icons/zodiac/goat.svg",revision:"8d7e96e3d87b51fc866a9706747051c0"},{url:"icons/zodiac/horse.svg",revision:"f0d014be2cf1f15ef06214b1eb480062"},{url:"icons/zodiac/monkey.svg",revision:"1160fea5b17cd96f5df29508bd455586"},{url:"icons/zodiac/ox.svg",revision:"e62223d23b89c74e26812692e78754e9"},{url:"icons/zodiac/pig.svg",revision:"ab2396b4707b864301dbd5eda5732b12"},{url:"icons/zodiac/rabbit.svg",revision:"3a89782cda47e40f4a7732ff9ba0553f"},{url:"icons/zodiac/rat.svg",revision:"45e7451cea0ef25237e19ff13fedc7e0"},{url:"icons/zodiac/rooster.svg",revision:"15d1a5484eea17d9ecf87df3841996f1"},{url:"icons/zodiac/snake.svg",revision:"abbce3bed7859d23b33c1c86517f01e2"},{url:"icons/zodiac/tiger.svg",revision:"5e9bb5ee0924f9b96b2a86e9b645bc55"},{url:"index.html",revision:"6241b3b6e868f3d1951281d82119b25a"},{url:"live2d/core/live2dCubismCore.min.js",revision:"1ae0f80720323fd164deb9c2af05848a"},{url:"live2d/models/hijiki/hijiki.2048/texture_00.png",revision:"0cc2f2880ef801c9bdcdcfddcdddafb3"},{url:"live2d/models/tororo/tororo.2048/texture_00.png",revision:"ee9c6155217d874a3825b07dd672a029"},{url:"logo.default.svg",revision:"c13222dbc0049bf4be184901a9a20949"},{url:"logo.png",revision:"276008f0fc30e3c90ae57daf41766cbb"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"navigation/index.html",revision:"77cf1f515c7df5d6a5d32f033edf561b"},{url:"origin/index.html",revision:"68ed6263b6b1fc0776a53f75eed2ad26"},{url:"pwa-192x192.svg",revision:"b0229250796c6572bb422e21ef82e933"},{url:"pwa-512x512.svg",revision:"aa97e375b04bcd0f65f015503c2acbf3"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"manifest.webmanifest",revision:"08a9bdf7b879dd338ae4d3ff2b4b7f97"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({sameOrigin:e,url:s})=>e&&["images","icons","svg"].some((e=>s.pathname.startsWith(`/assets/${e}/`)))),new e.StaleWhileRevalidate({cacheName:"assets-images-cache",plugins:[new e.ExpirationPlugin({purgeOnQuotaError:!0,maxEntries:256,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^https:\/\/peiyanlu.github.io\/.*/i,new e.StaleWhileRevalidate({cacheName:"gh-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/someInterface/i,new e.StaleWhileRevalidate({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET")}));
