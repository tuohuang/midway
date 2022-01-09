"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6416],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=c(t),u=a,k=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return t?r.createElement(k,i(i({ref:n},d),{},{components:t})):r.createElement(k,i({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1158:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],o={title:"\u8def\u7531\u548c\u63a7\u5236\u5668"},p=void 0,c={unversionedId:"controller",id:"version-1.0.0/controller",title:"\u8def\u7531\u548c\u63a7\u5236\u5668",description:"midway \u4f7f\u7528 koa-router \u4f5c\u4e3a\u8def\u7531\u7684\u627f\u8f7d\u8005\uff0c\u540c\u65f6\u5728 ts \u7684\u8bed\u6cd5\u4e0a\u505a\u4e86\u4e00\u4e9b\u7b80\u5316\uff0c\u6211\u4eec\u5c06\u8def\u7531\u548c\u63a7\u5236\u5668\u653e\u5728\u4e86\u4e00\u8d77\uff0c\u4f7f\u7528\u88c5\u9970\u5668\u6765\u6807\u6ce8\u8def\u7531\u3002",source:"@site/versioned_docs/version-1.0.0/controller.md",sourceDirName:".",slug:"/controller",permalink:"/en/docs/1.0.0/controller",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-1.0.0/controller.md",tags:[],version:"1.0.0",frontMatter:{title:"\u8def\u7531\u548c\u63a7\u5236\u5668"},sidebar:"common",previous:{title:"TS \u65b0\u624b\u6307\u5357",permalink:"/en/docs/1.0.0/ts_guide"},next:{title:"\u5168\u5c40\u4e2d\u95f4\u4ef6",permalink:"/en/docs/1.0.0/middleware"}},d=[{value:"\u8def\u7531\u88c5\u9970\u5668",id:"\u8def\u7531\u88c5\u9970\u5668",children:[],level:3},{value:"\u8def\u7531\u7ed1\u5b9a",id:"\u8def\u7531\u7ed1\u5b9a",children:[],level:3},{value:"\u8def\u7531\u4f18\u5148\u7ea7",id:"\u8def\u7531\u4f18\u5148\u7ea7",children:[],level:3},{value:"\u8def\u7531\u4e2d\u95f4\u4ef6",id:"\u8def\u7531\u4e2d\u95f4\u4ef6",children:[{value:"\u4e2d\u95f4\u4ef6\u6ce8\u5165\u7684\u7279\u6b8a\u6027",id:"\u4e2d\u95f4\u4ef6\u6ce8\u5165\u7684\u7279\u6b8a\u6027",children:[],level:4}],level:3},{value:"\u4e00\u4e2a\u65b9\u6cd5\u6302\u8f7d\u591a\u4e2a\u8def\u7531",id:"\u4e00\u4e2a\u65b9\u6cd5\u6302\u8f7d\u591a\u4e2a\u8def\u7531",children:[],level:3}],s={toc:d};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"midway \u4f7f\u7528 koa-router \u4f5c\u4e3a\u8def\u7531\u7684\u627f\u8f7d\u8005\uff0c\u540c\u65f6\u5728 ts \u7684\u8bed\u6cd5\u4e0a\u505a\u4e86\u4e00\u4e9b\u7b80\u5316\uff0c\u6211\u4eec\u5c06\u8def\u7531\u548c\u63a7\u5236\u5668\u653e\u5728\u4e86\u4e00\u8d77\uff0c\u4f7f\u7528\u88c5\u9970\u5668\u6765\u6807\u6ce8\u8def\u7531\u3002"),(0,l.kt)("p",null,"\u7531\u4e8e midway \u91c7\u7528\u4e86 IoC \u81ea\u626b\u63cf\u673a\u5236\uff0c\u4f7f\u5f97\u5728\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u5f31\u5316\u4e86\u76ee\u5f55\u7ed3\u6784\u7ea6\u5b9a\uff0c\u901a\u8fc7\u88c5\u9970\u5668\u7684\u673a\u5236\uff0c\u53ef\u4ee5\u975e\u5e38\u65b9\u4fbf\u7684\u8fdb\u884c\u89e3\u8026\uff0c\u6309\u4e1a\u52a1\u903b\u8f91\u62c6\u5206\u7b49\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u5728\u4efb\u610f\u76ee\u5f55\u4e0b\u521b\u5efa controller\uff0c\u4e0d\u518d\u9650\u5b9a app/controller \u76ee\u5f55\uff0c\u540c\u7406\uff0c\u5176\u4ed6\u88c5\u9970\u5668\u4e5f\u4e0d\u9650\u5b9a\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u505a\u5230\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/web/controller")," \u4e0b\u653e controller\uff0c\u4e5f\u53ef\u4ee5\u6309\u4e1a\u52a1\u7ef4\u5ea6\u5206\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"user")," \u76ee\u5f55\uff0c\u5305\u542b\u8ddf\u7528\u6237\u76f8\u5173\u6240\u6709\u7684 controller/service/dao \u7b49\uff0c\u5bf9\u5fae\u670d\u52a1\u6216\u8005 serverless \u6bd4\u8f83\u53cb\u597d\u3002"),(0,l.kt)("h3",{id:"\u8def\u7531\u88c5\u9970\u5668"},"\u8def\u7531\u88c5\u9970\u5668"),(0,l.kt)("p",null,"\u5728\u65b0\u7684 ts \u4f53\u7cfb\u4e2d\uff0c\u6211\u4eec\u7684\u63a7\u5236\u5668\u76ee\u5f55\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"app/controller")," \uff0c\u6211\u4eec\u5728\u5176\u4e2d\u7f16\u5199 ",(0,l.kt)("inlineCode",{parentName:"p"},"*.ts")," \u6587\u4ef6\u3002\u4f8b\u5982\u4e0b\u9762\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"userController.ts")," \uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u83b7\u53d6\u7528\u6237\u7684\u63a5\u53e3\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { provide, controller, inject, get } from 'midway';\n\n@provide()\n@controller('/user')\nexport class UserController {\n  @inject('userService')\n  service: IUserService;\n\n  @inject()\n  ctx;\n\n  @get('/:id')\n  async getUser(): Promise<void> {\n    const id: number = this.ctx.params.id;\n    const user: IUserResult = await this.service.getUser({ id });\n    this.ctx.body = { success: true, message: 'OK', data: user };\n  }\n}\n")),(0,l.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"@controller")," \u88c5\u9970\u5668\u7528\u6765\u5b9a\u4e49\u8fd9\u4e2a\u7c7b\u4e3a Controller\uff0c\u540c\u65f6\uff0c\u63d0\u4f9b\u4e86\u65b9\u6cd5\u88c5\u9970\u5668\u7528\u4e8e\u6807\u6ce8\u8bf7\u6c42\u7684\u7c7b\u578b\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u8d34\u58eb")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u4fbf\u4e8e\u5927\u5bb6\u7406\u89e3\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@controller")," \u7684\u53c2\u6570\u4e3a\u5b57\u7b26\u4e32 pattern\uff0c\u6211\u4eec\u4f1a\u5c06\u8fd9\u4e2a\u503c\u4f20\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"router.prefix(prefix)")," \u7684\u53c2\u6570\u4e2d\u3002"))),(0,l.kt)("p",null,"midway \u9488\u5bf9 web \u8bf7\u6c42\uff0c\u63d0\u4f9b\u4e86\u548c koa-router \u5bf9\u5e94\u7684\u65b9\u6cd5\u88c5\u9970\u5668\uff0c\u5217\u8868\u5982\u4e0b\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/get"},"@get ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/post"},"@post ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/del"},"@del ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/put"},"@put ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/patch"},"@patch ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/options"},"@options ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/head"},"@head ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/all"},"@all "))),(0,l.kt)("p",null,"\u8fd9\u51e0\u4e2a\u88c5\u9970\u5668\u7528\u4e8e\u4fee\u9970\u4e0d\u540c\u7684\u5f02\u6b65\u65b9\u6cd5\uff0c\u540c\u65f6\u5bf9\u5e94\u5230\u4e86 koa-router \u7684\u76f8\u5e94\u7684\u65b9\u6cd5\u3002\u548c\u539f\u6709\u63d0\u4f9b\u7684\u63a7\u5236\u5668\u4e00\u6837\uff0c\u6bcf\u4e2a\u63a7\u5236\u5668\u90fd\u4e3a\u5f02\u6b65\u65b9\u6cd5\uff0c\u9ed8\u8ba4\u53c2\u6570\u4e3a koa \u4e0a\u4e0b\u6587\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@get('/:id')\nasync getUser(ctx): Promise<void> {\n    // TODO ctx...\n}\n")),(0,l.kt)("h3",{id:"\u8def\u7531\u7ed1\u5b9a"},"\u8def\u7531\u7ed1\u5b9a"),(0,l.kt)("p",null,"\u5728\u4ee5\u5f80\u6846\u67b6\u7684\u5199\u6cd5\u4e2d\uff0c\u63d0\u4f9b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"app/router")," \u6587\u4ef6\uff0c\u867d\u7136\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\uff0c\u4f46\u662f\u7531\u4e8e\u63a7\u5236\u5668\u88ab IoC \u7ba1\u63a7\u7684\u5173\u7cfb\uff0c\u4f1a\u6709\u4e00\u4e9b\u533a\u522b\u3002"),(0,l.kt)("p",null,"\u548c\u4ee5\u5f80\u7684\u5199\u6cd5\u4e0d\u540c\u7684\u662f\uff0c",(0,l.kt)("strong",{parentName:"p"},"\u6211\u4eec\u9700\u8981\u4ece\u5bb9\u5668\u4e2d\u62ff\u5230\u5bf9\u5e94\u7684\u63a7\u5236\u5668\u5b9e\u4f8b\uff0c\u5e76\u7ed1\u5b9a\u5230\u8def\u7531\u7684 pattern \u4e0a"),"\u3002"),(0,l.kt)("p",null,"\u5047\u5982\u6211\u4eec\u6709\u4e00\u4e2a\u63a7\u5236\u5668\uff0c\u540c\u65f6\u6ca1\u6709\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"@controller")," \u88c5\u9970\u5668\uff0c\u8868\u660e\u4ed6\u4e0d\u662f\u4e00\u4e2a\u63a7\u5236\u5668\uff0c\u5728\u5e94\u7528\u521d\u59cb\u5316\u65f6\u4e0d\u4f1a\u81ea\u52a8\u7ed1\u5b9a\u5230\u67d0\u4e2a\u8def\u7531\u4e0a\uff0c\u4f46\u662f\u7531\u4e8e\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"@provide")," \u88c5\u9970\u5668\uff0c\u4ed6\u4f1a\u88ab IoC \u5bb9\u5668\u6240\u52a0\u8f7d\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// app/controller/api.ts\n\n@provide()\nexport class BaseApi {\n  async index(ctx) {\n    ctx.body = 'index';\n  }\n}\n")),(0,l.kt)("p",null,"\u5047\u5982\u6211\u4eec\u5e0c\u671b\u8fd9\u4e2a\u63a7\u5236\u5668\u53ef\u4ee5\u88ab\u5916\u90e8\u7684\u8def\u7531\u4f7f\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// app/router.ts\n\nmodule.exports = function (app) {\n  app.get('/api/index', app.generateController('baseApi.index'));\n};\n")),(0,l.kt)("p",null,"midway \u6269\u5c55\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"app.generateController")," \u7684\u65b9\u6cd5\u6765\u7b80\u5316\u7ed1\u5b9a\u7684\u8fd9\u4e2a\u6b65\u9aa4\uff0c\u53c2\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"ClassName.methodName")," \u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\u3002"),(0,l.kt)("h3",{id:"\u8def\u7531\u4f18\u5148\u7ea7"},"\u8def\u7531\u4f18\u5148\u7ea7"),(0,l.kt)("p",null,"\u5728\u5355\u9875\u5e94\u7528\u4e0b\uff0c\u7ecf\u5e38\u4f1a\u51fa\u73b0 ",(0,l.kt)("inlineCode",{parentName:"p"},"/*")," \u8fd9\u79cd\u8def\u7531\uff0c\u5728\u539f\u672c\u7684\u8def\u7531\u6587\u4ef6\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8c03\u6574\u4ee3\u7801\u7684\u987a\u5e8f\uff0c\u6765\u4f7f\u7684\u8def\u7531\u7684\u5339\u914d\u987a\u5e8f\u53d1\u751f\u53d8\u5316\u3002\u800c\u7531\u4e8e\u4f7f\u7528\u4e86\u88c5\u9970\u5668\u7684\u5173\u7cfb\uff0c\u5728\u65b0\u7684\u4f53\u7cfb\u65e0\u6cd5\u63a7\u5236\u6587\u4ef6\u626b\u63cf\u548c\u52a0\u8f7d\u987a\u5e8f\uff0c\u8fd9\u5c31\u4f7f\u5f97\u8def\u7531\u5339\u914d\u7684\u987a\u5e8f\u4e0d\u53ef\u63a7\u3002"),(0,l.kt)("p",null,"midway \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"@priority(priority: number)")," \u88c5\u9970\u5668\uff0c\u7528\u4e8e\u4fee\u9970 class\uff0c\u5b9a\u4e49\u8def\u7531\u7684\u4f18\u5148\u7ea7\uff0c\u9ed8\u8ba4\u7684\u8def\u7531\u4f18\u5148\u7ea7\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"0"),"\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u8d1f\u6570\u8ba9\u4f18\u5148\u7ea7\u964d\u4f4e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@provide()\n@priority(-1)\n@controller('/')\nexport class HomeController {\n  @get('/hello')\n  async index(ctx) {\n    ctx.body = 'hello';\n  }\n\n  @get('/*')\n  async all(ctx) {\n    ctx.body = 'world';\n  }\n}\n")),(0,l.kt)("h3",{id:"\u8def\u7531\u4e2d\u95f4\u4ef6"},"\u8def\u7531\u4e2d\u95f4\u4ef6"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u4f1a\u6709\u5728\u7279\u5b9a\u8def\u7531\u4e0a\u52a0\u8f7d\u4e2d\u95f4\u4ef6\u7684\u9700\u6c42\uff0c\u5728\u4e4b\u524d\u7684\u7248\u672c\u53ea\u80fd\u901a\u8fc7\u5b9a\u4e49 ",(0,l.kt)("inlineCode",{parentName:"p"},"router.ts")," \u6587\u4ef6\u6765\u89e3\u51b3\u90e8\u5206\u9700\u6c42\uff0c\u800c\u5728\u65b0\u7248\u672c\u4e2d\uff0c\u6211\u4eec\u6269\u5c55\u4e86\u88c5\u9970\u5668\u7684\u80fd\u529b\uff0c\u4f7f\u4e4b\u53ef\u4ee5\u5728\u7279\u5b9a\u573a\u666f\u4e0b\u589e\u52a0 web \u4e2d\u95f4\u4ef6\u3002"),(0,l.kt)("p",null,"\u73b0\u5728\u53ef\u4ee5\u63d0\u4f9b\u4e00\u4e2a middleware\uff08\u4efb\u610f\u76ee\u5f55\uff09\uff0c\u6bd4\u5982 ",(0,l.kt)("inlineCode",{parentName:"p"},"src/app/middleware/api.ts"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Middleware, WebMiddleware, provide, config } from 'midway';\n\n@provide()\nexport class ApiMiddleware implements WebMiddleware {\n  @config('hello')\n  helloConfig;\n\n  resolve(): Middleware {\n    return async (ctx, next) => {\n      ctx.api = '222' + this.helloConfig.b;\n      await next();\n    };\n  }\n}\n")),(0,l.kt)("p",null,"\u7531\u4e8e\u662f class\uff0c\u4f9d\u65e7\u53ef\u4ee5\u4f7f\u7528 inject/plugin/config \u7b49\u88c5\u9970\u5668\u4fee\u9970\u3002"),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u63a8\u8350\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"WebMiddleware")," \u63a5\u53e3\u6765\u89c4\u8303\u4f60\u7684 web \u4e2d\u95f4\u4ef6\u3002"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@provide()\n@controller('/', { middleware: ['homeMiddleware'] })\nexport class My {\n  @inject()\n  ctx;\n\n  @get('/', { middleware: ['apiMiddleware'] })\n  async index() {\n    this.ctx.body = this.ctx.home + this.ctx.api;\n  }\n}\n")),(0,l.kt)("p",null,"\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"@controller")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@get/post")," \u7b49\u8def\u7531\u88c5\u9970\u5668\u4e0a\u90fd\u63d0\u4f9b\u4e86 middleware \u53c2\u6570\u3002"),(0,l.kt)("p",null,"\u8fd9\u91cc\u7684 middleware \u53c2\u6570\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u53ef\u4ee5\u4f20\u591a\u4e2a\u5b57\u7b26\u4e32\u6216\u8005 ",(0,l.kt)("inlineCode",{parentName:"p"},"koa middleware"),"\uff0c\u5982\u679c\u662f\u5b57\u7b26\u4e32\uff0c\u4f1a\u4ece IoC \u5bb9\u5668\u4e2d\u83b7\u53d6\u5bf9\u5e94\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"WebMiddleware")," \u63a5\u53e3\u5b9e\u4f8b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve")," \u65b9\u6cd5\u7684\u7ed3\u679c\u3002"),(0,l.kt)("p",null,"\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f20\u9012 ",(0,l.kt)("inlineCode",{parentName:"p"},"koa middleware"),"\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const mw: Middleware = async (ctx, next) => {\n  ctx.home = '4444';\n  await next();\n};\n\nconst newMiddleware = (data): Middleware => {\n  return async (ctx, next) => {\n    ctx.api = data;\n    await next();\n  };\n};\n\n@provide()\n@controller('/', { middleware: ['homeMiddleware', mw] })\nexport class My {\n  @inject()\n  ctx;\n\n  @get('/api', { middleware: ['apiMiddleware', newMiddleware('5555')] })\n  async index() {\n    this.ctx.body = this.ctx.home + this.ctx.api;\n  }\n}\n")),(0,l.kt)("p",null,"::: tip\n\u8fd9\u79cd\u65b9\u5f0f\u53ea\u7528\u4e8e\u67d0\u4e2a\u8def\u7531\u4e0b\u7684\u4e2d\u95f4\u4ef6\uff0c\u5982\u679c\u4f60\u5e0c\u671b\u4f7f\u7528\u5168\u5c40\u4e2d\u95f4\u4ef6\uff0c\u90a3\u4e48\u8bf7\u4f9d\u65e7\u4f7f\u7528 egg \u7684\u90a3\u79cd\u5f62\u5f0f\u3002\n:::"),(0,l.kt)("h4",{id:"\u4e2d\u95f4\u4ef6\u6ce8\u5165\u7684\u7279\u6b8a\u6027"},"\u4e2d\u95f4\u4ef6\u6ce8\u5165\u7684\u7279\u6b8a\u6027"),(0,l.kt)("p",null,"\u7531\u4e8e\u4e2d\u95f4\u4ef6\u5728\u751f\u547d\u5468\u671f\u7684\u7279\u6b8a\u6027\uff0c\u4f1a\u5728\u5e94\u7528\u8bf7\u6c42\u524d\u5c31\u88ab\u52a0\u8f7d\uff08\u7ed1\u5b9a\uff09\u5230\u8def\u7531\u4e0a\uff0c\u6240\u4ee5\u65e0\u6cd5\u548c\u4e0a\u4e0b\u6587\u5173\u8054\u3002"),(0,l.kt)("p",null,"\u4e2d\u95f4\u4ef6\u7c7b\u56fa\u5b9a\u4e3a\u5355\u4f8b\uff08Singleton\uff09\uff0c\u6240\u6709\u6ce8\u5165\u7684\u5185\u5bb9\u90fd\u4e3a\u5355\u4f8b\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e @config/@logger/",(0,l.kt)("a",{parentName:"p",href:"/plugin"},"@plugin ")," \u7b49\u3002"),(0,l.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u4f60\u53ef\u4ee5\u6ce8\u5165\u4e00\u4e2a service\uff0c\u4f46\u662f\u8fd9\u4e2a service \u4e2d\u65e0\u6cd5\u6ce8\u5165 ctx \u5c5e\u6027\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c\u4f60\u5fc5\u987b\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"resolve")," \u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"ctx.requestContext.getAsync('xxx')")," \u7684\u65b9\u5f0f\u6765\u521b\u5efa\u8bf7\u6c42\u4f5c\u7528\u57df\u5b9e\u4f8b\uff0c\u548c\u4e0a\u4e0b\u6587\u7ed1\u5b9a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@provide()\nexport class ApiMiddleware implements WebMiddleware {\n  @inject()\n  myService; // \u7531\u4e8e\u4e2d\u95f4\u4ef6\u5b9e\u4f8b\u5c5e\u4e8e\u5355\u4f8b\uff0c\u8fd9\u4e2a\u5b9e\u4f8b\u5373\u4f7f\u6ce8\u5165\u4e5f\u65e0\u6cd5\u83b7\u53d6\u5230 ctx\n\n  resolve(): Middleware {\n    return async (ctx, next) => {\n      // \u5fc5\u987b\u901a\u8fc7\u4ece\u8bf7\u6c42\u4f5c\u7528\u57df\u4e2d\u83b7\u53d6\u5bf9\u8c61\u7684\u65b9\u5f0f\uff0c\u6765\u7ed1\u5b9a\u4e0a\u4e0b\u6587\n      ctx.service = await ctx.requestContext.getAsync('myService');\n      await next();\n    };\n  }\n}\n")),(0,l.kt)("h3",{id:"\u4e00\u4e2a\u65b9\u6cd5\u6302\u8f7d\u591a\u4e2a\u8def\u7531"},"\u4e00\u4e2a\u65b9\u6cd5\u6302\u8f7d\u591a\u4e2a\u8def\u7531"),(0,l.kt)("p",null,"\u65b0\u7248\u672c\u5b9e\u73b0\u4e86\u5728\u540c\u4e00\u65b9\u6cd5\u4e0a\u53ef\u4ee5\u6302\u8f7d\u591a\u4e2a\u8def\u7531\u7684\u80fd\u529b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@provide()\n@controller('/', { middleware: ['homeMiddleware'] })\nexport class My {\n  @inject()\n  ctx;\n\n  @get('/', { middleware: ['apiMiddleware'] })\n  @post('/api/data')\n  async index() {\n    this.ctx.body = this.ctx.home + (this.ctx.api || '');\n  }\n}\n")),(0,l.kt)("p",null,"\u8fd9\u6837\u8bf7\u6c42\u8fdb\u6765\uff0c post \u548c get \u62ff\u5230\u7684\u7ed3\u679c\u662f\u4e0d\u4e00\u6837\u7684\uff08get \u8bf7\u6c42\u6302\u8f7d\u4e86\u989d\u5916\u7684\u4e2d\u95f4\u4ef6\uff09\u3002"))}m.isMDXComponent=!0}}]);