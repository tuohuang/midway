"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7542],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),m=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},c=function(e){var n=m(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),g=m(t),d=i,u=g["".concat(l,".").concat(d)]||g[d]||s[d]||a;return t?r.createElement(u,p(p({ref:n},c),{},{components:t})):r.createElement(u,p({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,p=new Array(a);p[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var m=2;m<a;m++)p[m]=t[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},1820:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return c},default:function(){return g}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),p=["components"],o={},l="\u8c03\u8bd5",m={unversionedId:"debugger",id:"debugger",title:"\u8c03\u8bd5",description:"\u672c\u7ae0\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u5e38\u7528\u7f16\u8f91\u5668\u4e2d\u8c03\u8bd5 Midway \u9879\u76ee\u3002",source:"@site/docs/debugger.md",sourceDirName:".",slug:"/debugger",permalink:"/docs/next/debugger",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/debugger.md",tags:[],version:"current",frontMatter:{},sidebar:"common",previous:{title:"\u6d4b\u8bd5",permalink:"/docs/next/testing"},next:{title:"\u8fd0\u884c\u73af\u5883",permalink:"/docs/next/environment"}},c=[{value:"\u5728 VSCode \u4e2d\u8c03\u8bd5",id:"\u5728-vscode-\u4e2d\u8c03\u8bd5",children:[{value:"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528 JavaScript Debug Teminal",id:"\u65b9\u6cd5\u4e00\u4f7f\u7528-javascript-debug-teminal",children:[],level:3},{value:"\u65b9\u6cd5\u4e8c\uff1a\u914d\u7f6e\u8c03\u8bd5\u6587\u4ef6",id:"\u65b9\u6cd5\u4e8c\u914d\u7f6e\u8c03\u8bd5\u6587\u4ef6",children:[],level:3}],level:2},{value:"\u5728 WebStorm/Idea \u4e2d\u8c03\u8bd5",id:"\u5728-webstormidea-\u4e2d\u8c03\u8bd5",children:[],level:2},{value:"\u5728 Chrome \u4e2d\u8c03\u8bd5",id:"\u5728-chrome-\u4e2d\u8c03\u8bd5",children:[],level:2}],s={toc:c};function g(e){var n=e.components,t=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u8c03\u8bd5"},"\u8c03\u8bd5"),(0,a.kt)("p",null,"\u672c\u7ae0\u8282\u4ecb\u7ecd\u5982\u4f55\u5728\u5e38\u7528\u7f16\u8f91\u5668\u4e2d\u8c03\u8bd5 Midway \u9879\u76ee\u3002"),(0,a.kt)("h2",{id:"\u5728-vscode-\u4e2d\u8c03\u8bd5"},"\u5728 VSCode \u4e2d\u8c03\u8bd5"),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e00\u4f7f\u7528-javascript-debug-teminal"},"\u65b9\u6cd5\u4e00\uff1a\u4f7f\u7528 JavaScript Debug Teminal"),(0,a.kt)("p",null,"\u5728 VSCode \u7684\u7ec8\u7aef\u4e0b\u62c9\u51fa\uff0c\u9690\u85cf\u7740\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"JavaScript Debug Terminal")," \uff0c\u70b9\u51fb\u5b83\uff0c\u521b\u5efa\u51fa\u6765\u7684\u7ec8\u7aef\u5c06\u81ea\u5e26\u8c03\u8bd5\u80fd\u529b\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01HWzQEu1cQ6C7q9OYh_!!6000000003594-2-tps-1030-364.png",alt:"image.png"})),(0,a.kt)("p",null,"\u8f93\u5165\u4efb\u610f\u7684\u547d\u4ee4\u90fd\u5c06\u81ea\u52a8\u5f00\u542f Debug\uff0c\u6bd4\u5982\u8f93\u5165 ",(0,a.kt)("inlineCode",{parentName:"p"},"npm run dev")," \u540e\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01nnkbOQ1YN79M1svVV_!!6000000003046-2-tps-1500-570.png",alt:"image.png"})),(0,a.kt)("h3",{id:"\u65b9\u6cd5\u4e8c\u914d\u7f6e\u8c03\u8bd5\u6587\u4ef6"},"\u65b9\u6cd5\u4e8c\uff1a\u914d\u7f6e\u8c03\u8bd5\u6587\u4ef6"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a vscode \u7684\u542f\u52a8\u6587\u4ef6\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01WzgZwN23WVMLYP4Xs_!!6000000007263-2-tps-645-344.png",alt:"image.png"}),"\n\u968f\u4fbf\u9009\u4e00\u4e2a\uff0c\u4f1a\u521b\u5efa  ",(0,a.kt)("inlineCode",{parentName:"p"},".vscode/launch.json")," \u6587\u4ef6\uff0c\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01pP7ntf1HRNMmTeGBT_!!6000000000754-2-tps-655-231.png",alt:"image.png"})),(0,a.kt)("p",null,"\u5c06\u4e0b\u9762\u5185\u5bb9\u590d\u5236\u8fdb\u53bb\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    // \u4f7f\u7528 IntelliSense \u4e86\u89e3\u76f8\u5173\u5c5e\u6027\u3002 \n    // \u60ac\u505c\u4ee5\u67e5\u770b\u73b0\u6709\u5c5e\u6027\u7684\u63cf\u8ff0\u3002\n    // \u6b32\u4e86\u89e3\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u8bbf\u95ee: https://go.microsoft.com/fwlink/?linkid=830387\n    "version": "0.2.0",\n    "configurations": [{\n        "name": "Midway Local",\n        "type": "node",\n        "request": "launch",\n        "cwd": "${workspaceRoot}",\n        "runtimeExecutable": "npm",\n        "windows": {\n            "runtimeExecutable": "npm.cmd"\n        },\n        "runtimeArgs": [\n            "run",\n            "dev"\n        ],\n        "env": {\n            "NODE_ENV": "local"\n        },\n        "console": "integratedTerminal",\n        "protocol": "auto",\n        "restart": true,\n        "port": 7001,\n        "autoAttachChildProcesses": true\n    }]\n}\n\n')),(0,a.kt)("p",null,"\u542f\u52a8\u65ad\u70b9\u5373\u53ef\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i3/O1CN01AGHSI51zZvrKgS9xx_!!6000000006729-2-tps-1470-1020.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u5728-webstormidea-\u4e2d\u8c03\u8bd5"},"\u5728 WebStorm/Idea \u4e2d\u8c03\u8bd5"),(0,a.kt)("p",null,"\u5f00\u59cb\u914d\u7f6e IDE\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01bmrjiW1frz9dLpdEZ_!!6000000004061-2-tps-1110-692.png",alt:"image.png"})),(0,a.kt)("p",null,"\u914d\u7f6e npm \u547d\u4ee4\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01e4yJnU1QT3MOImlpR_!!6000000001976-2-tps-620-946.png",alt:"image.png"})),(0,a.kt)("p",null,"\u9009\u62e9\u4f60\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u540e\uff0c\u4e0b\u62c9\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Scrips")," \uff0c\u5176\u4e2d\u662f\u4f60 ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u914d\u7f6e\u597d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"scripts")," \u4e2d\u7684\u547d\u4ee4\uff0c\u9009\u62e9\u4f60\u8981\u7684\u547d\u4ee4\uff0c\u6bd4\u5982 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," \u7b49\u5373\u53ef \u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01DBqmwD1rtbwqpuQZe_!!6000000005689-2-tps-1500-1017.png",alt:"image.png"})),(0,a.kt)("p",null,"\u5728\u4ee3\u7801\u4e0a\u65ad\u70b9\u540e\u6267\u884c\u8c03\u8bd5\u5373\u53ef\u3002\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01sGzfeH1iLPpzSIWSg_!!6000000004396-2-tps-1327-907.png",alt:"image.png"})),(0,a.kt)("h2",{id:"\u5728-chrome-\u4e2d\u8c03\u8bd5"},"\u5728 Chrome \u4e2d\u8c03\u8bd5"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528 vim \u6216\u5176\u4ed6\u4ee3\u7801\u7f16\u8f91\u5668\uff0c\u53ef\u4ee5\u4f7f\u7528\u6b64\u65b9\u5f0f\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"@midwayjs/cli")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," \u547d\u4ee4\uff0c\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"--debug")," \u53c2\u6570\u542f\u52a8 debug \u6a21\u5f0f\uff0c\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome devtools")," \u8fdb\u884c\u5355\u6b65\u4ee3\u7801\u8c03\u8bd5\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01jovior1pQBGiH8ao3_!!6000000005354-2-tps-1462-633.png",alt:"69456694-513D-4388-B52F-001562D4A520.png"}),"\n\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"chrome://inspect/")," \u6253\u5f00 ",(0,a.kt)("inlineCode",{parentName:"p"},"nodejs devtools")," \u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i4/O1CN01ntvZ5j28wDfyG5Gpe_!!6000000007996-2-tps-1464-708.png",alt:"image.png"}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN010Jpz2O1lp8NrFFK57_!!6000000004867-2-tps-1500-842.png",alt:"image.png"}),"\n\u60a8\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 chrome \u6d4f\u89c8\u5668\u6253\u5f00\u547d\u4ee4\u884c\u4e2d\u8f93\u51fa\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"devtools")," \u534f\u8bae\u7684\u94fe\u63a5\uff0c\u7ed9\u5bf9\u5e94\u4ee3\u7801\u6dfb\u52a0\u65ad\u70b9\u540e\u8c03\u8bd5\uff1a\n",(0,a.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i1/O1CN01jOAX0U1Ggey4FsGnw_!!6000000000652-2-tps-1474-487.png",alt:"10016148-385E-46A4-8B3A-0A0110BECD18.png"})))}g.isMDXComponent=!0}}]);