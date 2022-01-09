"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6884],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4183:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={title:"API \u7f51\u5173\uff08HTTP\uff09"},s=void 0,l={unversionedId:"serverless/tencent_trigger_apigw",id:"version-2.0.0/serverless/tencent_trigger_apigw",title:"API \u7f51\u5173\uff08HTTP\uff09",description:"API \u7f51\u5173\u5728\u817e\u8baf\u4e91\u51fd\u6570\u4f53\u7cfb\u4e2d\u7c7b\u4f3c\u4e8e HTTP \u51fd\u6570\uff0c\u6211\u4eec\u901a\u8fc7\u5b83\u5c06\u51fd\u6570\u53d1\u5e03\u4e3a HTTP \u670d\u52a1\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/tencent_trigger_apigw.md",sourceDirName:"serverless",slug:"/serverless/tencent_trigger_apigw",permalink:"/docs/serverless/tencent_trigger_apigw",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/versioned_docs/version-2.0.0/serverless/tencent_trigger_apigw.md",tags:[],version:"2.0.0",frontMatter:{title:"API \u7f51\u5173\uff08HTTP\uff09"},sidebar:"Serverless",previous:{title:"\u963f\u91cc\u4e91\u53d1\u5e03 FAQ",permalink:"/docs/serverless/deploy_aliyun_faq"},next:{title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09",permalink:"/docs/serverless/tencent_trigger_timer"}},p=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[],level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"API \u7f51\u5173\u5728\u817e\u8baf\u4e91\u51fd\u6570\u4f53\u7cfb\u4e2d\u7c7b\u4f3c\u4e8e HTTP \u51fd\u6570\uff0c\u6211\u4eec\u901a\u8fc7\u5b83\u5c06\u51fd\u6570\u53d1\u5e03\u4e3a HTTP \u670d\u52a1\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';\nimport { Context } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloTencentService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.API_GATEWAY, {\n    path: '/api_gateway_tencent',\n    method: 'post',\n  })\n  async handleAPIGatewayEvent(@Body() name) {\n    return `hello ${name}`;\n  }\n}\n")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u540e\u5373\u53ef\u901a\u8fc7\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u94fe\u63a5\u8bbf\u95ee\u3002"),(0,o.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u548c\u4f20\u7edf\u5e94\u7528 HTTP \u6d4b\u8bd5\u76f8\u540c\uff0c\u901a\u8fc7 createFunctionApp \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 createHttpRequest \u65b9\u5f0f\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Framework } from '@midwayjs/serverless-app';\nimport { createFunctionApp, createHttpRequest } from '@midwayjs/mock';\n\ndescribe('test/hello_tencent.test.ts', () => {\n  let app: Application;\n  let instance: HelloTencentService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from http trigger', async () => {\n    const result = await createHttpRequest(app).post('api_gateway_tencent').send({\n      name: 'zhangting',\n    });\n\n    expect(result.text).toEqual('hello zhangting');\n  });\n});\n")))}m.isMDXComponent=!0}}]);