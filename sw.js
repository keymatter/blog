if(!self.define){let e,s={};const n=(n,l)=>(n=new URL(n+".js",l).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(l,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let a={};const t=e=>n(e,r),o={module:{uri:r},exports:a,require:t};s[r]=Promise.all(l.map((e=>o[e]||t(e)))).then((e=>(i(...e),a)))}}define(["./workbox-755692f8"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"46dcb99f96ddece83be66e7dbd97d3bc"},{url:"archive/index.html",revision:"07683f34c55e106562e9ce1dccef31d2"},{url:"assets/app.fe3301b8.js",revision:null},{url:"assets/archive_index.md.04855a2c.js",revision:null},{url:"assets/archive_index.md.04855a2c.lean.js",revision:null},{url:"assets/backend_index.md.3f7f534d.js",revision:null},{url:"assets/backend_index.md.3f7f534d.lean.js",revision:null},{url:"assets/backend_koa_start.md.0c37ecee.js",revision:null},{url:"assets/backend_koa_start.md.0c37ecee.lean.js",revision:null},{url:"assets/backend_koa_use.md.4bc57624.js",revision:null},{url:"assets/backend_koa_use.md.4bc57624.lean.js",revision:null},{url:"assets/backend_mysql_install.md.ea16bacd.js",revision:null},{url:"assets/backend_mysql_install.md.ea16bacd.lean.js",revision:null},{url:"assets/backend_node_env.md.fce7f0a2.js",revision:null},{url:"assets/backend_node_env.md.fce7f0a2.lean.js",revision:null},{url:"assets/backend_node_process.md.a20da397.js",revision:null},{url:"assets/backend_node_process.md.a20da397.lean.js",revision:null},{url:"assets/backend_redis_install.md.69b4c8ac.js",revision:null},{url:"assets/backend_redis_install.md.69b4c8ac.lean.js",revision:null},{url:"assets/chunks/base-80a1f760.c54940d7.js",revision:null},{url:"assets/chunks/client.utils-7a723432.ace87b8e.js",revision:null},{url:"assets/chunks/commonjsHelpers.39b5b250.js",revision:null},{url:"assets/chunks/DocShici.030a7911.js",revision:null},{url:"assets/chunks/DocTag.7681955d.js",revision:null},{url:"assets/chunks/framework.50c4d085.js",revision:null},{url:"assets/chunks/ImageLazyLoad.5703198b.js",revision:null},{url:"assets/chunks/index-bd1ff004.d5c7970a.js",revision:null},{url:"assets/chunks/index.0b25a6a6.js",revision:null},{url:"assets/chunks/index.854751e3.js",revision:null},{url:"assets/chunks/SvgIcon.9b9c9086.js",revision:null},{url:"assets/chunks/theme.e66b8b0c.js",revision:null},{url:"assets/chunks/useNamespace.75a6a06b.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.1008c565.js",revision:null},{url:"assets/chunks/WordCloud.883b3bf1.js",revision:null},{url:"assets/cli_git_cli.md.dcd09115.js",revision:null},{url:"assets/cli_git_cli.md.dcd09115.lean.js",revision:null},{url:"assets/cli_git_commitlint.md.dce7427a.js",revision:null},{url:"assets/cli_git_commitlint.md.dce7427a.lean.js",revision:null},{url:"assets/cli_git_FAQ.md.bfa6a884.js",revision:null},{url:"assets/cli_git_FAQ.md.bfa6a884.lean.js",revision:null},{url:"assets/cli_git_hub.md.5aac4de7.js",revision:null},{url:"assets/cli_git_hub.md.5aac4de7.lean.js",revision:null},{url:"assets/cli_git_use.md.c830c8bd.js",revision:null},{url:"assets/cli_git_use.md.c830c8bd.lean.js",revision:null},{url:"assets/cli_index.md.04aa29be.js",revision:null},{url:"assets/cli_index.md.04aa29be.lean.js",revision:null},{url:"assets/cli_linux_cli.md.9b90e047.js",revision:null},{url:"assets/cli_linux_cli.md.9b90e047.lean.js",revision:null},{url:"assets/cli_linux_use.md.5ac5f4f1.js",revision:null},{url:"assets/cli_linux_use.md.5ac5f4f1.lean.js",revision:null},{url:"assets/cli_windows_cli.md.3368a343.js",revision:null},{url:"assets/cli_windows_cli.md.3368a343.lean.js",revision:null},{url:"assets/cli_windows_FAQ.md.256a7d57.js",revision:null},{url:"assets/cli_windows_FAQ.md.256a7d57.lean.js",revision:null},{url:"assets/custom_img_1.52edb246.png",revision:null},{url:"assets/custom_img_10.3ca3a90f.png",revision:null},{url:"assets/custom_img_2.a631dcde.png",revision:null},{url:"assets/custom_img_3.bd948ff2.png",revision:null},{url:"assets/custom_img_4.1079f71d.png",revision:null},{url:"assets/custom_img_5.4a9f769f.png",revision:null},{url:"assets/custom_img_6.4cbaf63b.png",revision:null},{url:"assets/custom_img_7.57e88110.png",revision:null},{url:"assets/custom_img_8.f39cf452.png",revision:null},{url:"assets/custom_img_9.9ebbc7c6.png",revision:null},{url:"assets/download_img_1.6f3b10a5.png",revision:null},{url:"assets/download_img_2.64ee6991.png",revision:null},{url:"assets/download_img.b46b56c9.png",revision:null},{url:"assets/frontend_browser_basics.md.8b7307a5.js",revision:null},{url:"assets/frontend_browser_basics.md.8b7307a5.lean.js",revision:null},{url:"assets/frontend_browser_cache.md.dfcfc8ab.js",revision:null},{url:"assets/frontend_browser_cache.md.dfcfc8ab.lean.js",revision:null},{url:"assets/frontend_browser_storage.md.deb07ab5.js",revision:null},{url:"assets/frontend_browser_storage.md.deb07ab5.lean.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.eccaee2c.js",revision:null},{url:"assets/frontend_build_monorepo_quickstart.md.eccaee2c.lean.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.fee0fbc7.js",revision:null},{url:"assets/frontend_build_monorepo_turborepo.md.fee0fbc7.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.5f55364e.js",revision:null},{url:"assets/frontend_build_rollup_lib-js.md.5f55364e.lean.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9d221db2.js",revision:null},{url:"assets/frontend_build_rollup_lib-ts.md.9d221db2.lean.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.df49a8d7.js",revision:null},{url:"assets/frontend_build_rollup_quickstart.md.df49a8d7.lean.js",revision:null},{url:"assets/frontend_build_vite_ts.md.5aaa8e82.js",revision:null},{url:"assets/frontend_build_vite_ts.md.5aaa8e82.lean.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.220e52dc.js",revision:null},{url:"assets/frontend_build_webpack_FAQ.md.220e52dc.lean.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.6c520d5d.js",revision:null},{url:"assets/frontend_build_webpack_lib-icon.md.6c520d5d.lean.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.2985619a.js",revision:null},{url:"assets/frontend_code_debounce-throttle.md.2985619a.lean.js",revision:null},{url:"assets/frontend_code_excel-json.md.50187fd5.js",revision:null},{url:"assets/frontend_code_excel-json.md.50187fd5.lean.js",revision:null},{url:"assets/frontend_code_image-lazy.md.86f2d462.js",revision:null},{url:"assets/frontend_code_image-lazy.md.86f2d462.lean.js",revision:null},{url:"assets/frontend_code_list-tree.md.9ba1c34f.js",revision:null},{url:"assets/frontend_code_list-tree.md.9ba1c34f.lean.js",revision:null},{url:"assets/frontend_code_others.md.01eb02f1.js",revision:null},{url:"assets/frontend_code_others.md.01eb02f1.lean.js",revision:null},{url:"assets/frontend_code_pretter.md.16d18d77.js",revision:null},{url:"assets/frontend_code_pretter.md.16d18d77.lean.js",revision:null},{url:"assets/frontend_css_selector.md.f0906bac.js",revision:null},{url:"assets/frontend_css_selector.md.f0906bac.lean.js",revision:null},{url:"assets/frontend_css_weight.md.6e96033d.js",revision:null},{url:"assets/frontend_css_weight.md.6e96033d.lean.js",revision:null},{url:"assets/frontend_html_index.md.af975fe0.js",revision:null},{url:"assets/frontend_html_index.md.af975fe0.lean.js",revision:null},{url:"assets/frontend_index.md.271ae47d.js",revision:null},{url:"assets/frontend_index.md.271ae47d.lean.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ff876fdb.js",revision:null},{url:"assets/frontend_javascript_ajax.md.ff876fdb.lean.js",revision:null},{url:"assets/frontend_javascript_array.md.66c2277c.js",revision:null},{url:"assets/frontend_javascript_array.md.66c2277c.lean.js",revision:null},{url:"assets/frontend_javascript_binary.md.4bbff079.js",revision:null},{url:"assets/frontend_javascript_binary.md.4bbff079.lean.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.44d06c9c.js",revision:null},{url:"assets/frontend_javascript_BOMObserver.md.44d06c9c.lean.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.510e1b65.js",revision:null},{url:"assets/frontend_javascript_CallStack.md.510e1b65.lean.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.c120e7c9.js",revision:null},{url:"assets/frontend_javascript_dictionary.md.c120e7c9.lean.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.6ef4f561.js",revision:null},{url:"assets/frontend_javascript_ElementPosition.md.6ef4f561.lean.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.304338e5.js",revision:null},{url:"assets/frontend_javascript_ES6_.md.304338e5.lean.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.7eb84284.js",revision:null},{url:"assets/frontend_javascript_EventLoop.md.7eb84284.lean.js",revision:null},{url:"assets/frontend_javascript_fetch.md.93055c7f.js",revision:null},{url:"assets/frontend_javascript_fetch.md.93055c7f.lean.js",revision:null},{url:"assets/frontend_javascript_object.md.c8f715d9.js",revision:null},{url:"assets/frontend_javascript_object.md.c8f715d9.lean.js",revision:null},{url:"assets/frontend_javascript_promise.md.c09c656c.js",revision:null},{url:"assets/frontend_javascript_promise.md.c09c656c.lean.js",revision:null},{url:"assets/frontend_javascript_prototype.md.7bfb3de8.js",revision:null},{url:"assets/frontend_javascript_prototype.md.7bfb3de8.lean.js",revision:null},{url:"assets/frontend_javascript_scope.md.2a3c19cc.js",revision:null},{url:"assets/frontend_javascript_scope.md.2a3c19cc.lean.js",revision:null},{url:"assets/frontend_javascript_string.md.703b92f9.js",revision:null},{url:"assets/frontend_javascript_string.md.703b92f9.lean.js",revision:null},{url:"assets/frontend_network_cors.md.d5307982.js",revision:null},{url:"assets/frontend_network_cors.md.d5307982.lean.js",revision:null},{url:"assets/frontend_network_encryption.md.e9852c4a.js",revision:null},{url:"assets/frontend_network_encryption.md.e9852c4a.lean.js",revision:null},{url:"assets/frontend_network_http.md.d98cbb97.js",revision:null},{url:"assets/frontend_network_http.md.d98cbb97.lean.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.8cdff2d8.js",revision:null},{url:"assets/frontend_network_KeepAlive.md.8cdff2d8.lean.js",revision:null},{url:"assets/frontend_network_request.md.886291cb.js",revision:null},{url:"assets/frontend_network_request.md.886291cb.lean.js",revision:null},{url:"assets/frontend_network_security.md.8d44efd2.js",revision:null},{url:"assets/frontend_network_security.md.8d44efd2.lean.js",revision:null},{url:"assets/frontend_network_tcp.md.fc8d323c.js",revision:null},{url:"assets/frontend_network_tcp.md.fc8d323c.lean.js",revision:null},{url:"assets/frontend_npm_changesets.md.edce00ec.js",revision:null},{url:"assets/frontend_npm_changesets.md.edce00ec.lean.js",revision:null},{url:"assets/frontend_npm_cli.md.d7f31ada.js",revision:null},{url:"assets/frontend_npm_cli.md.d7f31ada.lean.js",revision:null},{url:"assets/frontend_npm_FAQ.md.f6896410.js",revision:null},{url:"assets/frontend_npm_FAQ.md.f6896410.lean.js",revision:null},{url:"assets/frontend_npm_libs.md.cfdd0c25.js",revision:null},{url:"assets/frontend_npm_libs.md.cfdd0c25.lean.js",revision:null},{url:"assets/frontend_npm_license.md.c9a72898.js",revision:null},{url:"assets/frontend_npm_license.md.c9a72898.lean.js",revision:null},{url:"assets/frontend_npm_package-exports.md.6d2c83f4.js",revision:null},{url:"assets/frontend_npm_package-exports.md.6d2c83f4.lean.js",revision:null},{url:"assets/frontend_npm_package-json.md.67824e8d.js",revision:null},{url:"assets/frontend_npm_package-json.md.67824e8d.lean.js",revision:null},{url:"assets/frontend_npm_package-manager.md.3564d290.js",revision:null},{url:"assets/frontend_npm_package-manager.md.3564d290.lean.js",revision:null},{url:"assets/frontend_npm_package-patch.md.09b3311f.js",revision:null},{url:"assets/frontend_npm_package-patch.md.09b3311f.lean.js",revision:null},{url:"assets/frontend_npm_release-it.md.044ce2ce.js",revision:null},{url:"assets/frontend_npm_release-it.md.044ce2ce.lean.js",revision:null},{url:"assets/frontend_npm_SemVer.md.407546f7.js",revision:null},{url:"assets/frontend_npm_SemVer.md.407546f7.lean.js",revision:null},{url:"assets/frontend_regex_basics.md.90a8feba.js",revision:null},{url:"assets/frontend_regex_basics.md.90a8feba.lean.js",revision:null},{url:"assets/frontend_regex_use.md.315c245e.js",revision:null},{url:"assets/frontend_regex_use.md.315c245e.lean.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.7bb36da4.js",revision:null},{url:"assets/frontend_uncategorized_url-preview.md.7bb36da4.lean.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.3b6764d5.js",revision:null},{url:"assets/frontend_vue_vue2-components.md.3b6764d5.lean.js",revision:null},{url:"assets/img_1.5e390f4e.png",revision:null},{url:"assets/img_1.7a3ebcab.png",revision:null},{url:"assets/img_1.7ff297cb.png",revision:null},{url:"assets/img_1.b295697c.png",revision:null},{url:"assets/img_10.200e566d.png",revision:null},{url:"assets/img_2.2810f483.png",revision:null},{url:"assets/img_2.55110f2a.png",revision:null},{url:"assets/img_2.e7b91dcb.png",revision:null},{url:"assets/img_3.8118008d.png",revision:null},{url:"assets/img_3.e18870c4.png",revision:null},{url:"assets/img_4.5f8c656c.png",revision:null},{url:"assets/img_4.726c4310.png",revision:null},{url:"assets/img_5.2dbf15aa.png",revision:null},{url:"assets/img_5.d8f884e8.png",revision:null},{url:"assets/img_6.0ade014a.png",revision:null},{url:"assets/img_6.0bbbfc14.png",revision:null},{url:"assets/img_7.6a52f8bc.png",revision:null},{url:"assets/img_7.b6f57f5c.png",revision:null},{url:"assets/img_8.2991d750.png",revision:null},{url:"assets/img_9.a4f5bf01.png",revision:null},{url:"assets/img.2e8a66d0.png",revision:null},{url:"assets/img.65a9c1e9.png",revision:null},{url:"assets/img.7effe2e8.png",revision:null},{url:"assets/img.8a89d19f.png",revision:null},{url:"assets/img.a4ef83c3.png",revision:null},{url:"assets/img.fa4a579c.png",revision:null},{url:"assets/index.md.a3054963.js",revision:null},{url:"assets/index.md.a3054963.lean.js",revision:null},{url:"assets/install_img_0.70e8c1af.png",revision:null},{url:"assets/install_img_1.99713b77.png",revision:null},{url:"assets/install_img_10.f3eb1b6b.png",revision:null},{url:"assets/install_img_11.d097a64e.png",revision:null},{url:"assets/install_img_12.e9657aae.png",revision:null},{url:"assets/install_img_13.08ffcc88.png",revision:null},{url:"assets/install_img_14.f1461e36.png",revision:null},{url:"assets/install_img_15.437fbd05.png",revision:null},{url:"assets/install_img_16.8e228a7b.png",revision:null},{url:"assets/install_img_17.2ce62dd7.png",revision:null},{url:"assets/install_img_18.2f2f5f60.png",revision:null},{url:"assets/install_img_19.5ac4c6d1.png",revision:null},{url:"assets/install_img_2.6d44774c.png",revision:null},{url:"assets/install_img_20.4466232f.png",revision:null},{url:"assets/install_img_3.8b8b4477.png",revision:null},{url:"assets/install_img_4.89ea364c.png",revision:null},{url:"assets/install_img_5.54926192.png",revision:null},{url:"assets/install_img_6.22305e60.png",revision:null},{url:"assets/install_img_7.42ad31bd.png",revision:null},{url:"assets/install_img_8.5486d534.png",revision:null},{url:"assets/install_img_9.666141db.png",revision:null},{url:"assets/install_img.a7659d1c.png",revision:null},{url:"assets/inter-italic-cyrillic-ext.33bd5a8e.woff2",revision:null},{url:"assets/inter-italic-cyrillic.ea42a392.woff2",revision:null},{url:"assets/inter-italic-greek-ext.4fbe9427.woff2",revision:null},{url:"assets/inter-italic-greek.8f4463c4.woff2",revision:null},{url:"assets/inter-italic-latin-ext.bd8920cc.woff2",revision:null},{url:"assets/inter-italic-latin.bd3b6f56.woff2",revision:null},{url:"assets/inter-italic-vietnamese.6ce511fb.woff2",revision:null},{url:"assets/inter-roman-cyrillic-ext.e75737ce.woff2",revision:null},{url:"assets/inter-roman-cyrillic.5f2c6c8c.woff2",revision:null},{url:"assets/inter-roman-greek-ext.ab0619bc.woff2",revision:null},{url:"assets/inter-roman-greek.d5a6d92a.woff2",revision:null},{url:"assets/inter-roman-latin-ext.0030eebd.woff2",revision:null},{url:"assets/inter-roman-latin.2ed14f66.woff2",revision:null},{url:"assets/inter-roman-vietnamese.14ce25a6.woff2",revision:null},{url:"assets/navigation_index.md.d70af756.js",revision:null},{url:"assets/navigation_index.md.d70af756.lean.js",revision:null},{url:"assets/npm_license_img.507c89ef.png",revision:null},{url:"assets/origin_index.md.339c4cb1.js",revision:null},{url:"assets/origin_index.md.339c4cb1.lean.js",revision:null},{url:"assets/style.cef2583f.css",revision:null},{url:"backend/index.html",revision:"36594846426bf43ac81fd218634e195b"},{url:"backend/koa/start.html",revision:"7b0af13164358c465b2c72188bd4982d"},{url:"backend/koa/use.html",revision:"70c99245effd0d2bdf563eaedf27136c"},{url:"backend/mysql/install.html",revision:"e48b91de78298068649c7c877c796268"},{url:"backend/node/env.html",revision:"c9c8ddbb650679e57e2aaadf34f01a75"},{url:"backend/node/process.html",revision:"07734f35c4185b15ccd47610c2a71b8b"},{url:"backend/redis/install.html",revision:"0ea37edd26f2cab0e118c69c4aa7b556"},{url:"cli/git/cli.html",revision:"0d5640c594d8e2f62c91a90ee68dae27"},{url:"cli/git/commitlint.html",revision:"bf455774dae8d844ff6cbefbebd577b3"},{url:"cli/git/FAQ.html",revision:"0bbf67683bf20e81bc4fb3ad52ee443a"},{url:"cli/git/hub.html",revision:"d8b928248efd49424a571f1e97ddba81"},{url:"cli/git/use.html",revision:"787f949f74da46ebc08a0aecad2d387e"},{url:"cli/index.html",revision:"bf9fe7f7da0032d92dd94bf46e6e72c5"},{url:"cli/linux/cli.html",revision:"e2f9539e0f46a9a3e5509a31e78578ec"},{url:"cli/linux/use.html",revision:"f696987ad33cfe2fe36f2bd038e8dc92"},{url:"cli/windows/cli.html",revision:"7dacfceddd209f11885ff77ec1451f78"},{url:"cli/windows/FAQ.html",revision:"cd24e6ea2c07e3ac8cdcb7ceb28e526d"},{url:"favicon.ico",revision:"710702509c00e4fe7442447e555df1ff"},{url:"frontend/browser/basics.html",revision:"87020b65bb1a4d8eb4728faa6e3fcf95"},{url:"frontend/browser/cache.html",revision:"7b264b84ee06e306e27f1bffb7798a1a"},{url:"frontend/browser/storage.html",revision:"002bbf5dcd4b0ac9d1c402f0ef42bd9b"},{url:"frontend/build/monorepo/quickstart.html",revision:"0f72a0391e1045b51b0b3e9129b58059"},{url:"frontend/build/monorepo/turborepo.html",revision:"e0f2ff6b6ef25d98f5d48f5fd54c133a"},{url:"frontend/build/rollup/lib-js.html",revision:"4f765ce72730438ac9a83b8661c29ec4"},{url:"frontend/build/rollup/lib-ts.html",revision:"5ff8384cbe1159e1dadbe9273ea0f1a9"},{url:"frontend/build/rollup/quickstart.html",revision:"28c39a618f21bbbc6453027a1851bc2b"},{url:"frontend/build/vite/ts.html",revision:"39f021053b1cb16ed65d4b9dbcd40c30"},{url:"frontend/build/webpack/FAQ.html",revision:"155d30d5053dc3cd049f2446dfd38e77"},{url:"frontend/build/webpack/lib-icon.html",revision:"300861d9f843f9e6946ce5dec307c4b8"},{url:"frontend/code/debounce-throttle.html",revision:"c8a4c792b54db1fb3094646a52de111f"},{url:"frontend/code/excel-json.html",revision:"27e050dacb3f87a8b6251a8bf2486282"},{url:"frontend/code/image-lazy.html",revision:"5df52f28dac2cc512fe302d6c4e929fa"},{url:"frontend/code/list-tree.html",revision:"c2f629daa4908c300c391b4256d9aa20"},{url:"frontend/code/others.html",revision:"1ae2eb7d6d10b9451a264cff36699e66"},{url:"frontend/code/pretter.html",revision:"fe88026c6dc864e1959f997b528767fa"},{url:"frontend/css/selector.html",revision:"1bb3cf4f8a1c529a3395789cd2f51948"},{url:"frontend/css/weight.html",revision:"93c84a1775ac623e52388434989b85ee"},{url:"frontend/html/index.html",revision:"1565300e068e3ff94ae28c6e8fddfb26"},{url:"frontend/index.html",revision:"71f3c73e96df588bd3ff66f8d815dd4d"},{url:"frontend/javascript/ajax.html",revision:"81b646e3939c1dbde3fe41f551c0d12d"},{url:"frontend/javascript/array.html",revision:"13408cf5245d153556ea11b98e46e881"},{url:"frontend/javascript/binary.html",revision:"8fd201a3d70a3e7efad5c82ba8dbd3f6"},{url:"frontend/javascript/BOMObserver.html",revision:"432307ef9a55e272ff620d045940132b"},{url:"frontend/javascript/CallStack.html",revision:"cd0cc9f66903d5a4b2ab0275d8e557c0"},{url:"frontend/javascript/dictionary.html",revision:"4b3b24e08a858e008fe5d92cc161fe50"},{url:"frontend/javascript/ElementPosition.html",revision:"27fec8f39018ac9e92667617c5c11e08"},{url:"frontend/javascript/ES6+.html",revision:"12c9472eb794d3e5d7df017db31d7274"},{url:"frontend/javascript/EventLoop.html",revision:"5609c7f2936a00637eb7bf286700dd3b"},{url:"frontend/javascript/fetch.html",revision:"7dbc78f64f57de030280a64ed4fac689"},{url:"frontend/javascript/object.html",revision:"fea5fa1a51f6f2d3b800ee1e89fab8e2"},{url:"frontend/javascript/promise.html",revision:"9f12d16e61aef613b8f7352ee0e8c3a7"},{url:"frontend/javascript/prototype.html",revision:"839587090c11254116f28ccc2da7a480"},{url:"frontend/javascript/scope.html",revision:"ed65248b5b6514b53b2afb90a169f2a9"},{url:"frontend/javascript/string.html",revision:"84e023733ca2226ce060b3acf275ac83"},{url:"frontend/network/cors.html",revision:"da1822fab4bcc1401a196aeb0a3607ce"},{url:"frontend/network/encryption.html",revision:"835b22e166babb8f0b3cd5dd9d27e17d"},{url:"frontend/network/http.html",revision:"ef6676430c3cc9f861cb1c053b512b28"},{url:"frontend/network/KeepAlive.html",revision:"d0da81dcf7051ea634fd10e52b0c2070"},{url:"frontend/network/request.html",revision:"801c0c198ff95964912d4e6844740165"},{url:"frontend/network/security.html",revision:"6d0574513ee388dcec5b57f3a792ccdd"},{url:"frontend/network/tcp.html",revision:"ae15e17aaeb09dbd115b5d2988cc5805"},{url:"frontend/npm/changesets.html",revision:"7b4a3bdfed66b14616d427ac9e0f4b6f"},{url:"frontend/npm/cli.html",revision:"9cff4c4d549fc5fa0c36a55721d310a2"},{url:"frontend/npm/FAQ.html",revision:"7cb72610945d60dd6404f107f945a5ac"},{url:"frontend/npm/libs.html",revision:"fd0bca9f11fc8f6864a3aa6af6d34ff3"},{url:"frontend/npm/license.html",revision:"dac94a4cbb6816f2a0a2a9f5555d3cf0"},{url:"frontend/npm/package-exports.html",revision:"a39a842562254846a85e198aa0cd70cd"},{url:"frontend/npm/package-json.html",revision:"2d1a4f9e09e0a95d2a6960f7590d085e"},{url:"frontend/npm/package-manager.html",revision:"e6eff66ec50288e4ccaec00ff4eff650"},{url:"frontend/npm/package-patch.html",revision:"576a0800c881f54eff78c7c7a40497c5"},{url:"frontend/npm/release-it.html",revision:"99d7a44d1bb35279c7afc6de9c89da31"},{url:"frontend/npm/SemVer.html",revision:"8d8b2a468a8f15cd8de685184cd15575"},{url:"frontend/regex/basics.html",revision:"f1e81e3cfc362e4d1e356608f42d0ec7"},{url:"frontend/regex/use.html",revision:"58487d8704bd17423f820ce083a438ea"},{url:"frontend/uncategorized/url-preview.html",revision:"436e51e2fe99177e68720527d066acbe"},{url:"frontend/vue/vue2-components.html",revision:"f3b6c5ff2eecdbff660a4ab7cc2fec24"},{url:"giscus/noborder_dark.css",revision:"0381017c9f23173fc52539b760cbc7b3"},{url:"giscus/noborder_light.css",revision:"1514a7d3868ce0bc5faae416baaf6a56"},{url:"icons/create.svg",revision:"4596b23f730edc20645b66213f234a9d"},{url:"icons/tags.svg",revision:"a89835a6d5f3d0f6314cb20684bfd01c"},{url:"icons/update.svg",revision:"13a037f2fbd6ef84d88997aa4cc27339"},{url:"icons/zodiac/dog.svg",revision:"7f255c221ebc536ae168bd061ce4fcd4"},{url:"icons/zodiac/dragon.svg",revision:"a6811eb3e6ac9f931f8510604b35990e"},{url:"icons/zodiac/goat.svg",revision:"8d7e96e3d87b51fc866a9706747051c0"},{url:"icons/zodiac/horse.svg",revision:"f0d014be2cf1f15ef06214b1eb480062"},{url:"icons/zodiac/monkey.svg",revision:"1160fea5b17cd96f5df29508bd455586"},{url:"icons/zodiac/ox.svg",revision:"e62223d23b89c74e26812692e78754e9"},{url:"icons/zodiac/pig.svg",revision:"ab2396b4707b864301dbd5eda5732b12"},{url:"icons/zodiac/rabbit.svg",revision:"3a89782cda47e40f4a7732ff9ba0553f"},{url:"icons/zodiac/rat.svg",revision:"45e7451cea0ef25237e19ff13fedc7e0"},{url:"icons/zodiac/rooster.svg",revision:"15d1a5484eea17d9ecf87df3841996f1"},{url:"icons/zodiac/snake.svg",revision:"abbce3bed7859d23b33c1c86517f01e2"},{url:"icons/zodiac/tiger.svg",revision:"5e9bb5ee0924f9b96b2a86e9b645bc55"},{url:"index.html",revision:"09cf3ab1335c8db3fddf1198dd775427"},{url:"live2d/core/live2dCubismCore.min.js",revision:"1ae0f80720323fd164deb9c2af05848a"},{url:"live2d/models/hijiki/hijiki.2048/texture_00.png",revision:"0cc2f2880ef801c9bdcdcfddcdddafb3"},{url:"live2d/models/tororo/tororo.2048/texture_00.png",revision:"ee9c6155217d874a3825b07dd672a029"},{url:"logo.default.svg",revision:"c13222dbc0049bf4be184901a9a20949"},{url:"logo.png",revision:"276008f0fc30e3c90ae57daf41766cbb"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"navigation/index.html",revision:"f338623664c7f3cd648278fa07cefcf2"},{url:"origin/index.html",revision:"ff3764698757fc2173c2700266034efb"},{url:"pwa-192x192.svg",revision:"b0229250796c6572bb422e21ef82e933"},{url:"pwa-512x512.svg",revision:"aa97e375b04bcd0f65f015503c2acbf3"},{url:"logo.svg",revision:"ac82ac1a2751f04c23460d2c6861c6a4"},{url:"manifest.webmanifest",revision:"08a9bdf7b879dd338ae4d3ff2b4b7f97"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute((({sameOrigin:e,url:s})=>e&&["images","icons","svg"].some((e=>s.pathname.startsWith(`/assets/${e}/`)))),new e.StaleWhileRevalidate({cacheName:"assets-images-cache",plugins:[new e.ExpirationPlugin({purgeOnQuotaError:!0,maxEntries:256,maxAgeSeconds:604800}),new e.CacheableResponsePlugin({statuses:[200]})]}),"GET"),e.registerRoute(/^https:\/\/peiyanlu.github.io\/.*/i,new e.StaleWhileRevalidate({cacheName:"gh-images-cache",plugins:[new e.ExpirationPlugin({maxEntries:10,maxAgeSeconds:86400}),new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),e.registerRoute(/someInterface/i,new e.StaleWhileRevalidate({cacheName:"interface-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(js|css|ts)/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/(.*?)\.(png|jpe?g|svg|gif|bmp|psd|tiff|tga|eps)/,new e.StaleWhileRevalidate({cacheName:"image-cache",plugins:[]}),"GET")}));
