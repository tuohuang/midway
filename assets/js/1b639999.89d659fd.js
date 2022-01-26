"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1989],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||l;return n?a.createElement(h,c(c({ref:t},p),{},{components:n})):a.createElement(h,c({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<l;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6003:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),c=["components"],i={},o="\u7f13\u5b58",s={unversionedId:"extensions/cache",id:"extensions/cache",title:"\u7f13\u5b58",description:"Midway Cache \u662f\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u8fdb\u884c\u7f13\u5b58\u64cd\u4f5c\u7684\u7ec4\u4ef6\uff0c\u5b83\u6709\u5229\u4e8e\u6539\u5584\u9879\u76ee\u7684\u6027\u80fd\u3002\u5b83\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6570\u636e\u4e2d\u5fc3\u4ee5\u4fbf\u8fdb\u884c\u9ad8\u6548\u7684\u6570\u636e\u8bbf\u95ee\u3002",source:"@site/docs/extensions/cache.md",sourceDirName:"extensions",slug:"/extensions/cache",permalink:"/docs/extensions/cache",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/extensions/cache.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"HTTP \u8bf7\u6c42",permalink:"/docs/extensions/axios"},next:{title:"\u591a\u8bed\u8a00",permalink:"/docs/extensions/i18n"}},p=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:2},{value:"\u4f7f\u7528 Cache",id:"\u4f7f\u7528-cache",children:[{value:"\u8bbe\u7f6e\u7f13\u5b58",id:"\u8bbe\u7f6e\u7f13\u5b58",children:[],level:3},{value:"\u83b7\u53d6\u7f13\u5b58",id:"\u83b7\u53d6\u7f13\u5b58",children:[],level:3},{value:"\u79fb\u9664\u7f13\u5b58",id:"\u79fb\u9664\u7f13\u5b58",children:[],level:3},{value:"\u6e05\u7a7a\u6574\u4f53store\u6570\u636e\uff08\u6b64\u5904\u662f\u6574\u4f53\u6e05\u9664\uff0c\u9700\u8981\u91cd\u70b9\u26a0\ufe0f\uff09",id:"\u6e05\u7a7a\u6574\u4f53store\u6570\u636e\u6b64\u5904\u662f\u6574\u4f53\u6e05\u9664\u9700\u8981\u91cd\u70b9\ufe0f",children:[],level:3}],level:2},{value:"\u5168\u5c40\u914d\u7f6e",id:"\u5168\u5c40\u914d\u7f6e",children:[],level:2},{value:"\u5176\u4ed6Cache",id:"\u5176\u4ed6cache",children:[],level:2},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",children:[],level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"1\u3001set \u548c get \u65e0\u6cd5\u5f97\u5230\u76f8\u540c\u503c\uff1f",id:"1set-\u548c-get-\u65e0\u6cd5\u5f97\u5230\u76f8\u540c\u503c",children:[],level:3}],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7f13\u5b58"},"\u7f13\u5b58"),(0,l.kt)("p",null,"Midway Cache \u662f\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u8fdb\u884c\u7f13\u5b58\u64cd\u4f5c\u7684\u7ec4\u4ef6\uff0c\u5b83\u6709\u5229\u4e8e\u6539\u5584\u9879\u76ee\u7684\u6027\u80fd\u3002\u5b83\u4e3a\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u6570\u636e\u4e2d\u5fc3\u4ee5\u4fbf\u8fdb\u884c\u9ad8\u6548\u7684\u6570\u636e\u8bbf\u95ee\u3002"),(0,l.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u6807\u51c6\u9879\u76ee"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e Serverless"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u7528\u4e8e\u4e00\u4f53\u5316"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2705")))),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("p",null,"\u9996\u5148\u5b89\u88c5\u76f8\u5173\u7684\u7ec4\u4ef6\u6a21\u5757\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/cache@3 cache-manager --save\n$ npm i @types/cache-manager --save-dev\n")),(0,l.kt)("p",null,"\u6216\u8005\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"package.json")," \u4e2d\u589e\u52a0\u5982\u4e0b\u4f9d\u8d56\u540e\uff0c\u91cd\u65b0\u5b89\u88c5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "@midwayjs/cache": "^3.0.0",\n    "cache-manager": "^3.4.1",\n    // ...\n  },\n  "devDependencies": {\n    "@types/cache-manager": "^3.4.0",\n    // ...\n  }\n}\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528-cache"},"\u4f7f\u7528 Cache"),(0,l.kt)("p",null,"Midway \u4e3a\u4e0d\u540c\u7684 cache \u5b58\u50a8\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684 API\u3002\u9ed8\u8ba4\u5185\u7f6e\u4e86\u4e00\u4e2a\u57fa\u4e8e\u5185\u5b58\u6570\u636e\u5b58\u50a8\u7684\u6570\u636e\u4e2d\u5fc3\u3002\u5982\u679c\u60f3\u8981\u4f7f\u7528\u522b\u7684\u6570\u636e\u4e2d\u5fc3\uff0c\u5f00\u53d1\u8005\u4e5f\u53ef\u4ee5\u5207\u6362\u5230\u4f8b\u5982 mongodb\u3001fs \u7b49\u6a21\u5f0f\u3002"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5f15\u5165 Cache \u7ec4\u4ef6\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"configuration.ts")," \u4e2d\u5bfc\u5165\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Configuration, App } from '@midwayjs/decorator';\nimport { Application } from '@midwayjs/koa';\nimport * as bodyParser from 'koa-bodyparser';\nimport * as cache from '@midwayjs/cache';\nimport { join } from 'path'\n\n@Configuration({\n  imports: [\n    cache       // \u5bfc\u5165 cache \u7ec4\u4ef6\n  ],\n  importConfigs: [\n    join(__dirname, 'config')\n  ]\n})\nexport class ContainerLifeCycle {\n}\n")),(0,l.kt)("p",null,"\u7136\u540e\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u5373\u53ef\u6ce8\u5165\u4f7f\u7528\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Provide } from '@midwayjs/decorator';\nimport { IUserOptions } from '../interface';\nimport { CacheManager } from '@midwayjs/cache';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  cacheManager: CacheManager;               // \u4f9d\u8d56\u6ce8\u5165 CacheManager\n}\n")),(0,l.kt)("p",null,"\u901a\u8fc7\u63d0\u4f9b\u7684 API \u6765\u8bbe\u7f6e\uff0c\u83b7\u53d6\u7f13\u5b58\u6570\u636e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Inject, Provide } from '@midwayjs/decorator';\nimport { IUserOptions } from '../interface';\nimport { CacheManager } from '@midwayjs/cache';\n\n@Provide()\nexport class UserService {\n\n  @Inject()\n  cacheManager: CacheManager;\n\n  async getUser(options: IUserOptions) {\n    // \u8bbe\u7f6e\u7f13\u5b58\u5185\u5bb9\n    await this.cacheManager.set(`name`, 'stone-jin');\n\n    // \u83b7\u53d6\u7f13\u5b58\u5185\u5bb9\n    let result = await this.cacheManager.get(`name`);\n\n    return result;\n  }\n\n  async getUser2(){\n    //\u83b7\u53d6\u7f13\u5b58\u5185\u5bb9\n    let result = await this.cacheManager.get(`name`);\n    return result;\n  }\n\n  async reset(){\n    await this.cacheManager.reset(); // \u6e05\u7a7a\u5bf9\u5e94 store \u7684\u5185\u5bb9\n  }\n}\n")),(0,l.kt)("h3",{id:"\u8bbe\u7f6e\u7f13\u5b58"},"\u8bbe\u7f6e\u7f13\u5b58"),(0,l.kt)("p",null,"\u6211\u4eec\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"await this.cache.set(key, value)")," \u65b9\u6cd5\u8fdb\u884c\u8bbe\u7f6e\uff0c\u6b64\u5904\u9ed8\u8ba4\u8fc7\u671f\u65f6\u95f4\u662f10s\u3002"),(0,l.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u624b\u52a8\u8bbe\u7f6e TTL\uff08\u8fc7\u671f\u65f6\u95f4\uff09\uff0c\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"await this.cacheManager.set(key, value, {ttl: 1000});   // ttl\u7684\u5355\u4f4d\u4e3a\u79d2\n")),(0,l.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u8981\u7981\u6b62 Cache \u4e0d\u8fc7\u671f\uff0c\u5219\u5c06 TTL \u8bbe\u7f6e\u4e3a null \u5373\u53ef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"await this.cacheManager.set(key, value, {ttl: null});\n")),(0,l.kt)("p",null,"\u540c\u65f6\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u5168\u5c40\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.default.ts")," \u4e2d\u8fdb\u884c\u8bbe\u7f6e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  cache: {\n    store: 'memory',\n    options: {\n      max: 100,\n      ttl: 10,      // \u4fee\u6539\u9ed8\u8ba4\u7684ttl\u914d\u7f6e\n    },\n  }\n}\n")),(0,l.kt)("h3",{id:"\u83b7\u53d6\u7f13\u5b58"},"\u83b7\u53d6\u7f13\u5b58"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"const value = await this.cacheManager.get(key);\n")),(0,l.kt)("p",null,"\u5982\u679c\u83b7\u53d6\u4e0d\u5230\uff0c\u5219\u4e3a undefined\u3002"),(0,l.kt)("h3",{id:"\u79fb\u9664\u7f13\u5b58"},"\u79fb\u9664\u7f13\u5b58"),(0,l.kt)("p",null,"\u79fb\u9664\u7f13\u5b58\uff0c\u53ef\u4ee5\u901a\u8fc7 del \u65b9\u6cd5\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"await this.cacheManager.del(key);\n")),(0,l.kt)("h3",{id:"\u6e05\u7a7a\u6574\u4f53store\u6570\u636e\u6b64\u5904\u662f\u6574\u4f53\u6e05\u9664\u9700\u8981\u91cd\u70b9\ufe0f"},"\u6e05\u7a7a\u6574\u4f53store\u6570\u636e\uff08\u6b64\u5904\u662f\u6574\u4f53\u6e05\u9664\uff0c\u9700\u8981\u91cd\u70b9\u26a0\ufe0f\uff09"),(0,l.kt)("p",null,"\u6bd4\u5982\u7528\u6237\u8bbe\u7f6e\u4e86\u67d0\u4e2a redis \u4e3a store\uff0c\u8c03\u7528\u7684\u8bdd\uff0c\u5305\u62ec\u975e cache \u6a21\u5757\u8bbe\u7f6e\u7684\u4e5f\u4f1a\u6e05\u9664\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"await this.cacheManager.reset(); // \u8fd9\u5757\u9700\u8981\u6ce8\u610f\n")),(0,l.kt)("h2",{id:"\u5168\u5c40\u914d\u7f6e"},"\u5168\u5c40\u914d\u7f6e"),(0,l.kt)("p",null,"\u5f53\u6211\u4eec\u5f15\u7528\u4e86\u8fd9\u4e2a cache \u7ec4\u4ef6\u540e\uff0c\u6211\u4eec\u80fd\u5bf9\u5176\u8fdb\u884c\u5168\u5c40\u7684\u914d\u7f6e\u3002\u914d\u7f6e\u65b9\u6cd5\u8ddf\u522b\u7684\u7ec4\u4ef6\u7c7b\u4f3c\u3002"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export default {\n  // ...\n  cache: {\n    store: 'memory',\n    options: {\n      max: 100,\n      ttl: 10,\n    },\n  }\n}\n")),(0,l.kt)("p",null,"\u4f8b\u5982\u7528\u6237\u53ef\u4ee5\u4fee\u6539\u9ed8\u8ba4\u7684 TTL\uff0c\u4e5f\u5c31\u662f\u8fc7\u671f\u65f6\u95f4\u3002"),(0,l.kt)("h2",{id:"\u5176\u4ed6cache"},"\u5176\u4ed6Cache"),(0,l.kt)("p",null,"\u7528\u6237\u4e5f\u53ef\u4ee5\u4fee\u6539  store \u65b9\u5f0f\uff0c\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"config.default.ts")," \u4e2d\u8fdb\u884c\u7ec4\u4ef6\u7684\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import * as redisStore from 'cache-manager-ioredis';\n\nexport default {\n  // ...\n  cache: {\n    store: redisStore,\n    options: {\n      host: 'localhost', // default value\n      port: 6379, // default value\n      password: '',\n      db: 0,\n      keyPrefix: 'cache:',\n      ttl: 100\n    },\n  }\n}\n")),(0,l.kt)("p",null,"\u6216\u8005\u4fee\u6539\u4e3a mongodb \u7684 cache\u3002"),(0,l.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},(0,l.kt)("strong",{parentName:"p"},"\u518d\u6b21\u6ce8\u610f\u26a0\ufe0f\uff1a\u4f7f\u7528 redis \u7684\u4f5c\u4e3a cache \u7684\u65f6\u5019\uff0c\u4ee3\u7801\u91cc\u9762\u614e\u7528 reset \u65b9\u6cd5\uff0c\u56e0\u4e3a\u4f1a\u628a\u6574\u4e2a redis \u7ed9 flushdb\uff0c\u7b80\u79f0\u6570\u636e\u6e05\u7a7a\u3002")))),(0,l.kt)("h2",{id:"\u76f8\u5173\u6587\u6863"},"\u76f8\u5173\u6587\u6863"),(0,l.kt)("p",null,"\u7531\u4e8e Midway Cache \u662f\u57fa\u4e8e cache-manager \u5c01\u88c5\uff0c\u6240\u4ee5\u76f8\u5173\u8d44\u6599\u7528\u6237\u4e5f\u53ef\u4ee5\u67e5\u8be2\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/cache-manager"},"cache-manger"),"\u3002"),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("h3",{id:"1set-\u548c-get-\u65e0\u6cd5\u5f97\u5230\u76f8\u540c\u503c"},"1\u3001set \u548c get \u65e0\u6cd5\u5f97\u5230\u76f8\u540c\u503c\uff1f"),(0,l.kt)("p",null,"\u7528\u6237\u4f7f\u7528\u4e86 cache \u6a21\u5757\uff0c\u9ed8\u8ba4\u662f\u5185\u5b58\u5f0f\u7684\uff0c\u4f8b\u5982\u5728\u672c\u5730\u7528 dev \u6a21\u5f0f\uff0c\u7531\u4e8e\u662f\u5355\u8fdb\u7a0b\u7684\uff0c\u90a3 set \u548c ge t\u6700\u7ec8\u80fd\u8fbe\u5230\u76f8\u540c\u7684\u503c\u3002\u4f46\u662f\u7528\u6237\u90e8\u7f72\u5230\u670d\u52a1\u5668\u4e0a\u9762\u540e\uff0c\u7531\u4e8e\u4f1a\u6709\u591a worker\uff0c\u76f8\u5f53\u4e8e\u7b2c\u4e00\u6b21\u8bf7\u6c42\uff0c\u843d\u5728\u8fdb\u7a0b1\u4e0a\uff0c\u7136\u540e\u7b2c\u4e8c\u6b21\u843d\u5728\u8fdb\u7a0b2\u4e0a\uff0c\u8fd9\u6837\u83b7\u5f97\u5230\u7a7a\u4e86\u3002"),(0,l.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\uff1a\u53c2\u8003 \u5176\u4ed6 Cache \u7684\u7ae0\u8282\uff0c\u914d\u7f6e store \u4e3a\u5206\u5e03\u5f0f\uff0c\u4f8b\u5982 redis \u7684 store \u7b49\u65b9\u5f0f\u3002"))}m.isMDXComponent=!0}}]);