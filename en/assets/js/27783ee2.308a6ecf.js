"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8796],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,k=m["".concat(o,".").concat(c)]||m[c]||d[c]||l;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<l;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9366:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),l=(t(7294),t(3905)),i=["components"],p={},o="\u53c2\u6570\u6821\u9a8c",s={unversionedId:"extensions/validate",id:"extensions/validate",title:"\u53c2\u6570\u6821\u9a8c",description:"\u6211\u4eec\u7ecf\u5e38\u8981\u5728\u65b9\u6cd5\u8c03\u7528\u65f6\u6267\u884c\u4e00\u4e9b\u7c7b\u578b\u68c0\u67e5\uff0c\u53c2\u6570\u8f6c\u6362\u7684\u64cd\u4f5c\uff0cMidway \u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u7684\u80fd\u529b\u6765\u5feb\u901f\u68c0\u67e5\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u8fd9\u4e2a\u80fd\u529b\u6765\u6e90\u4e8e joi \u3002",source:"@site/docs/extensions/validate.md",sourceDirName:"extensions",slug:"/extensions/validate",permalink:"/en/docs/next/extensions/validate",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/extensions/validate.md",tags:[],version:"current",frontMatter:{},sidebar:"component",previous:{title:"Information",permalink:"/en/docs/next/extensions/info"},next:{title:"Swagger \u7ec4\u4ef6",permalink:"/en/docs/next/extensions/swagger"}},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:2},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",children:[],level:2},{value:"\u5b9a\u4e49\u68c0\u67e5\u89c4\u5219",id:"\u5b9a\u4e49\u68c0\u67e5\u89c4\u5219",children:[],level:2},{value:"\u6821\u9a8c\u53c2\u6570",id:"\u6821\u9a8c\u53c2\u6570",children:[],level:2},{value:"\u5e38\u89c1\u7684\u6821\u9a8c\u5199\u6cd5",id:"\u5e38\u89c1\u7684\u6821\u9a8c\u5199\u6cd5",children:[],level:2},{value:"\u7ea7\u8054\u6821\u9a8c",id:"\u7ea7\u8054\u6821\u9a8c",children:[],level:2},{value:"\u7ee7\u627f\u6821\u9a8c",id:"\u7ee7\u627f\u6821\u9a8c",children:[],level:2},{value:"\u4ece\u539f\u6709 DTO \u521b\u5efa\u65b0 DTO",id:"\u4ece\u539f\u6709-dto-\u521b\u5efa\u65b0-dto",children:[],level:2},{value:"\u590d\u7528\u6821\u9a8c\u89c4\u5219",id:"\u590d\u7528\u6821\u9a8c\u89c4\u5219",children:[],level:2},{value:"\u9ed8\u8ba4\u914d\u7f6e",id:"\u9ed8\u8ba4\u914d\u7f6e",children:[],level:2},{value:"\u5176\u4ed6\u8bed\u8a00\u7684\u7ffb\u8bd1",id:"\u5176\u4ed6\u8bed\u8a00\u7684\u7ffb\u8bd1",children:[],level:2},{value:"\u72ec\u7acb\u7684\u6821\u9a8c\u670d\u52a1",id:"\u72ec\u7acb\u7684\u6821\u9a8c\u670d\u52a1",children:[],level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"1\u3001\u5141\u8bb8\u672a\u5b9a\u4e49\u7684\u5b57\u6bb5",id:"1\u5141\u8bb8\u672a\u5b9a\u4e49\u7684\u5b57\u6bb5",children:[],level:3}],level:2}],d={toc:u};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u53c2\u6570\u6821\u9a8c"},"\u53c2\u6570\u6821\u9a8c"),(0,l.kt)("p",null,"\u6211\u4eec\u7ecf\u5e38\u8981\u5728\u65b9\u6cd5\u8c03\u7528\u65f6\u6267\u884c\u4e00\u4e9b\u7c7b\u578b\u68c0\u67e5\uff0c\u53c2\u6570\u8f6c\u6362\u7684\u64cd\u4f5c\uff0cMidway \u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u5355\u7684\u80fd\u529b\u6765\u5feb\u901f\u68c0\u67e5\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u8fd9\u4e2a\u80fd\u529b\u6765\u6e90\u4e8e ",(0,l.kt)("a",{parentName:"p",href:"https://joi.dev/api/"},"joi")," \u3002"),(0,l.kt)("p",null,"\u76f8\u5173\u4fe1\u606f\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"),(0,l.kt)("th",{parentName:"tr",align:null}))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u4f5c\u4e3a\u4e3b\u6846\u67b6\u72ec\u7acb\u4f7f\u7528"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542b\u81ea\u5b9a\u4e49\u65e5\u5fd7"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u72ec\u7acb\u6dfb\u52a0\u4e2d\u95f4\u4ef6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u274c")))),(0,l.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,l.kt)("p",null,"\u6700\u5e38\u7528\u53c2\u6570\u6821\u9a8c\u7684\u5730\u65b9\u662f \u63a7\u5236\u5668\uff08Controller\uff09\uff0c\u540c\u65f6\u4f60\u4e5f\u53ef\u4ee5\u5728\u4efb\u610f\u7684 Class \u4e2d\u4f7f\u7528\u8fd9\u4e2a\u80fd\u529b\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4ee5\u63a7\u5236\u5668\uff08Controller\uff09\u4e2d\u4f7f\u7528\u4e3a\u4f8b\uff0c\u8fd8\u662f\u90a3\u4e2a user\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"\u279c  my_midway_app tree\n.\n\u251c\u2500\u2500 src\n\u2502   \u251c\u2500\u2500 controller\n\u2502   \u2502   \u2514\u2500\u2500 user.ts\n\u2502   \u251c\u2500\u2500 interface.ts\n\u2502   \u2514\u2500\u2500 service\n\u2502       \u2514\u2500\u2500 user.ts\n\u251c\u2500\u2500 test\n\u251c\u2500\u2500 package.json  \n\u2514\u2500\u2500 tsconfig.json\n")),(0,l.kt)("p",null,"\u666e\u901a\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"body")," \u4e0a\u62ff\u5230\u6240\u6709 Post \u7ed3\u679c\uff0c\u5e76\u8fdb\u884c\u4e00\u4e9b\u6821\u9a8c\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/interface.ts\nexport interface User {\n  id: number;\n  firstName: string;\n  lastName: string;\n  age: number;\n}\n\n// src/controller/home.ts\nimport { Controller, Get, Provide } from '@midwayjs/decorator';\n\n@Controller('/api/user')\nexport class HomeController {\n\n  @Post('/')\n  async updateUser(@Body() user: User ) {\n    if (!user.id || typeof user.id !== 'number') {\n        throw new Error('id error');\n    }\n    \n    if (user.age <= 30) {\n        throw new Error('age not match');\n    }\n    // xxx\n  }\n}\n")),(0,l.kt)("p",null,"\u5982\u679c\u6bcf\u4e2a\u65b9\u6cd5\u90fd\u9700\u8981\u8fd9\u4e48\u6821\u9a8c\uff0c\u4f1a\u975e\u5e38\u7684\u7e41\u7410\u3002"),(0,l.kt)("p",null,"\u9488\u5bf9\u8fd9\u79cd\u60c5\u51b5\uff0cMidway \u63d0\u4f9b\u4e86 Validate \u7ec4\u4ef6\u3002 \u914d\u5408 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Validate")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@Rule")," \u88c5\u9970\u5668\uff0c\u7528\u6765",(0,l.kt)("strong",{parentName:"p"},"\u5feb\u901f\u5b9a\u4e49\u6821\u9a8c\u7684\u89c4\u5219"),"\uff0c\u5e2e\u52a9\u7528\u6237",(0,l.kt)("strong",{parentName:"p"},"\u51cf\u5c11\u8fd9\u4e9b\u91cd\u590d\u7684\u4ee3\u7801"),"\u3002"),(0,l.kt)("p",null,"\u6ce8\u610f\uff0c\u4ece v3 \u5f00\u59cb\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"@Rule")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"@Validate")," \u88c5\u9970\u5668\u4ece ",(0,l.kt)("inlineCode",{parentName:"p"},"@midwayjs/validate")," \u4e2d\u5bfc\u51fa\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @midwayjs/validate@beta --save\n")),(0,l.kt)("h2",{id:"\u5b9a\u4e49\u68c0\u67e5\u89c4\u5219"},"\u5b9a\u4e49\u68c0\u67e5\u89c4\u5219"),(0,l.kt)("p",null,"\u6309\u7167\u4e0a\u9762\u7684\u903b\u8f91\uff0c\u6211\u4eec\u9700\u8981 ",(0,l.kt)("strong",{parentName:"p"},"\u91cd\u65b0\u5b9a\u4e49\u4e00\u4e2a\u65b0\u7684 Class"),"\uff0c\u56e0\u4e3a\u88c5\u9970\u5668\u53ea\u80fd\u88c5\u9970\u5728\u5b9e\u9645\u7684 Class \u4e0a\uff0c\u800c\u4e0d\u662f interface\u3002"),(0,l.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u540e\u7eed\u5904\u7406\uff0c\u6211\u4eec\u5c06 user \u653e\u5230\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"src/dto"),"  \u76ee\u5f55\u4e2d\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Data Transfer Object\uff08\u6570\u636e\u4f20\u8f93\u5bf9\u8c61\uff09DTO \u662f\u4e00\u7ec4\u9700\u8981\u8de8\u8fdb\u7a0b\u6216\u7f51\u7edc\u8fb9\u754c\u4f20\u8f93\u7684\u805a\u5408\u6570\u636e\u7684\u7b80\u5355\u5bb9\u5668\u3002\u5b83\u4e0d\u5e94\u8be5\u5305\u542b\u4e1a\u52a1\u903b\u8f91\uff0c\u5e76\u5c06\u5176\u884c\u4e3a\u9650\u5236\u4e3a\u8bf8\u5982\u5185\u90e8\u4e00\u81f4\u6027\u68c0\u67e5\u548c\u57fa\u672c\u9a8c\u8bc1\u4e4b\u7c7b\u7684\u6d3b\u52a8\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// src/dto/user.ts\nimport { Rule, RuleType } from "@midwayjs/validate";\n\nexport class UserDTO {\n  @Rule(RuleType.number().required())\n  id: number;\n  \n  @Rule(RuleType.string().required())\n  firstName: string;\n\n  @Rule(RuleType.string().max(10))\n  lastName: string;\n  \n  @Rule(RuleType.number().max(60))\n  age: number;\n}\n')),(0,l.kt)("p",null,"\u7531\u4e8e\u8fd9\u4e2a\u7c7b\u5c5e\u4e8e\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"PlainObject")," \uff0c\u4e5f\u4e0d\u9700\u8981\u88ab\u4f9d\u8d56\u6ce8\u5165\u7ba1\u7406\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u63d0\u4f9b ",(0,l.kt)("inlineCode",{parentName:"p"},"@Provide")," \u88c5\u9970\u5668\u3002"),(0,l.kt)("p",null,"\u8fd9\u4e2a User Class \u63d0\u4f9b\u4e86\u4e09\u4e2a\u5c5e\u6027\u548c\u4ed6\u4eec\u5bf9\u5e94\u7684\u6821\u9a8c\u89c4\u5219\u3002"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"id")," \u4e00\u4e2a\u5fc5\u586b\u7684\u6570\u5b57\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"firstName")," \u4e00\u4e2a\u5fc5\u586b\u7684\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"lastName")," \u4e00\u4e2a\u53ef\u9009\u7684\u6700\u957f\u4e3a 10 \u7684\u5b57\u7b26\u4e32\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"age")," \u4e00\u4e2a\u6700\u5927\u4e0d\u8d85\u8fc7 60 \u7684\u6570\u5b57")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"@Rule")," \u88c5\u9970\u5668\u7528\u4e8e ",(0,l.kt)("strong",{parentName:"p"},"\u4fee\u9970\u9700\u8981\u88ab\u6821\u9a8c\u7684\u5c5e\u6027"),"\uff0c\u5b83\u7684\u53c2\u6570\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"RuleType")," \u5bf9\u8c61\u63d0\u4f9b\u7684\u6821\u9a8c\u89c4\u5219\u7684\u94fe\u5f0f\u65b9\u6cd5\u3002"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u8fd9\u91cc\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"RuleType")," \u5373\u4e3a joi \u5bf9\u8c61\u672c\u8eab\u3002"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://joi.dev/api/"},"joi")," \u63d0\u4f9b\u4e86\u975e\u5e38\u591a\u7684\u6821\u9a8c\u7c7b\u578b\uff0c\u8fd8\u53ef\u4ee5\u5bf9\u5bf9\u8c61\u548c\u6570\u7ec4\u4e2d\u7684\u5b57\u6bb5\u505a\u6821\u9a8c\uff0c\u8fd8\u6709\u4f8b\u5982\u5b57\u7b26\u4e32\u5e38\u7528\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"RuleType.string().email()")," \uff0c\u4ee5\u53ca ",(0,l.kt)("inlineCode",{parentName:"p"},"RuleType.string().pattern(/xxxx/)"),"  \u6b63\u5219\u6821\u9a8c\u7b49\uff0c\u5177\u4f53\u53ef\u4ee5\u67e5\u8be2 ",(0,l.kt)("a",{parentName:"p",href:"https://joi.dev/api/"},"joi")," \u7684 API \u6587\u6863\u3002"),(0,l.kt)("h2",{id:"\u6821\u9a8c\u53c2\u6570"},"\u6821\u9a8c\u53c2\u6570"),(0,l.kt)("p",null,"\u5b9a\u4e49\u5b8c\u7c7b\u578b\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u76f4\u63a5\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u4f7f\u7528\u4e86\uff0c\u5f00\u542f\u6821\u9a8c\u80fd\u529b\u8fd8\u9700\u8981 ",(0,l.kt)("inlineCode",{parentName:"p"},"@Validate")," \u88c5\u9970\u5668\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/controller/home.ts\nimport { Controller, Get, Provide } from \"@midwayjs/decorator\";\nimport { UserDTO } from './dto/user';\n\n@Controller('/api/user')\nexport class HomeController {\n\n  @Post('/')\n  @Validate()\n  async updateUser(@Body() user: UserDTO ) {\n    // user.id\n  }\n}\n")),(0,l.kt)("p",null,"\u6240\u6709\u7684\u6821\u9a8c\u4ee3\u7801\u90fd\u901a\u901a\u4e0d\u89c1\u4e86\uff0c\u4e1a\u52a1\u53d8\u7684\u66f4\u7eaf\u7cb9\u4e86\uff0c\u5f53\u7136\uff0c\u8bb0\u5f97\u8981\u628a\u539f\u6765\u7684 user interface \u6362\u6210 Class\u3002"),(0,l.kt)("p",null,"\u4e00\u65e6\u6821\u9a8c\u5931\u8d25\uff0c\u6d4f\u89c8\u5668\u6216\u8005\u63a7\u5236\u53f0\u5c31\u4f1a\u62a5\u51fa\u7c7b\u4f3c\u7684\u9519\u8bef\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'ValidationError: "id" is required\n')),(0,l.kt)("p",null,"\u540c\u65f6\uff0c\u7531\u4e8e\u5b9a\u4e49\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"id")," \u7684\u7c7b\u578b\uff0c\u5728\u62ff\u5230\u5b57\u7b26\u4e32\u7684\u60c5\u51b5\u4e0b\uff0c\u4f1a\u81ea\u52a8\u5c06 id \u53d8\u4e3a\u6570\u5b57\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Validate()\nasync updateUser(@Body() user: UserDTO ) {\n  // typeof user.id === 'number'\n}\n")),(0,l.kt)("h2",{id:"\u5e38\u89c1\u7684\u6821\u9a8c\u5199\u6cd5"},"\u5e38\u89c1\u7684\u6821\u9a8c\u5199\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"RuleType.number().required();                               // \u6570\u5b57\uff0c\u5fc5\u586b\nRuleType.string().empty('')                 // \u5b57\u7b26\u4e32\u975e\u5fc5\u586b\nRuleType.number().max(10).min(1);                   // \u6570\u5b57\uff0c\u6700\u5927\u503c\u548c\u6700\u5c0f\u503c\nRuleType.number().greater(10).less(50);         // \u6570\u5b57\uff0c\u5927\u4e8e 10\uff0c\u5c0f\u4e8e 50\n\nRuleType.string().max(10).min(5);                       // \u5b57\u7b26\u4e32\uff0c\u957f\u5ea6\u6700\u5927 10\uff0c\u6700\u5c0f 5\nRuleType.string().length(20);                               // \u5b57\u7b26\u4e32\uff0c\u957f\u5ea6 20\nRuleType.string().pattern(/^[abc]+$/);          // \u5b57\u7b26\u4e32\uff0c\u5339\u914d\u6b63\u5219\u683c\u5f0f\n\nRuleType.object().length(5);                                // \u5bf9\u8c61\uff0ckey \u6570\u91cf\u7b49\u4e8e 5\n\n\nRuleType.array().items(RuleType.string());  // \u6570\u7ec4\uff0c\u6bcf\u4e2a\u5143\u7d20\u662f\u5b57\u7b26\u4e32\nRuleType.array().max(10);                                       // \u6570\u7ec4\uff0c\u6700\u5927\u957f\u5ea6\u4e3a 10\nRuleType.array().min(10);                                       // \u6570\u7ec4\uff0c\u6700\u5c0f\u957f\u5ea6\u4e3a 10\nRuleType.array().length(10);                                // \u6570\u7ec4\uff0c\u957f\u5ea6\u4e3a 10\n\nRuleType.string().allow('')                                 // \u975e\u5fc5\u586b\u5b57\u6bb5\u4f20\u5165\u7a7a\u5b57\u7b26\u4e32\n")),(0,l.kt)("h2",{id:"\u7ea7\u8054\u6821\u9a8c"},"\u7ea7\u8054\u6821\u9a8c"),(0,l.kt)("p",null,"Midway \u652f\u6301\u6bcf\u4e2a\u6821\u9a8c\u7684 Class \u4e2d\u7684\u5c5e\u6027\u4f9d\u65e7\u662f\u4e00\u4e2a\u5bf9\u8c61\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u7ed9 ",(0,l.kt)("inlineCode",{parentName:"p"},"UserDTO")," \u589e\u52a0\u4e00\u4e2a\u5c5e\u6027 ",(0,l.kt)("inlineCode",{parentName:"p"},"school")," \uff0c\u5e76\u4e14\u8d4b\u4e88\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"SchoolDTO")," \u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Rule, RuleType } from "@midwayjs/validate";\n\nexport class SchoolDTO {\n  @Rule(RuleType.string().required())\n    name: string;\n  @Rule(RuleType.string())\n  address: string;\n}\n\nexport class UserDTO {\n  @Rule(RuleType.number().required())\n  id: number;\n  \n  @Rule(RuleType.string().required())\n  firstName: string;\n\n  @Rule(RuleType.string().max(10))\n  lastName: string;\n  \n  // \u8fd9\u91cc\u4f20\u5165 SchoolDTO \u4f5c\u4e3a\u6821\u9a8c\u53c2\u6570\uff0c\u6b64\u65f6\u4f1a\u9ed8\u8ba4\u662frequired\u5b57\u6bb5\uff0c\n  // \u5982\u679c\u7528\u6237\u4e0d\u60f3\u8981required\uff0c\u5219@Rule(SchoolDTO, {required: false})\n  @Rule(SchoolDTO)                   \n  school: SchoolDTO;\n  \n  // \u5982\u679c\u662f\u6570\u7ec4\uff0c\u5219\u4e5f\u53ea\u8981\u4e0b\u9762\u8fd9\u6837\u5199\uff0c\u8fd9\u8fb9\u88c5\u9970\u5668\u4f1a\u5224\u65ad\u7c7b\u578b\u662f\u5426\u662f\u6570\u7ec4\uff0c\u53ea\u80fd\u9002\u7528\u8fd9\u79cdclass\u7c7b\u578b\n  @Rule(SchoolDTO)\n  xxxx: SchoolDTO[];\n}\n')),(0,l.kt)("p",null,"\u8fd9\u4e2a\u65f6\u5019\uff0c ",(0,l.kt)("inlineCode",{parentName:"p"},"@Rule")," \u88c5\u9970\u5668\u7684\u53c2\u6570\u53ef\u4ee5\u4e3a\u9700\u8981\u6821\u9a8c\u7684\u8fd9\u4e2a\u7c7b\u578b\u672c\u8eab\u3002"),(0,l.kt)("h2",{id:"\u7ee7\u627f\u6821\u9a8c"},"\u7ee7\u627f\u6821\u9a8c"),(0,l.kt)("p",null,"Midway \u652f\u6301\u6821\u9a8c\u7ee7\u627f\u65b9\u5f0f\uff0c\u6ee1\u8db3\u5f00\u53d1\u8005\u62bd\u79bb\u901a\u7528\u7684\u5bf9\u8c61\u5c5e\u6027\u7684\u65f6\u5019\u505a\u53c2\u6570\u6821\u9a8c\u3002"),(0,l.kt)("p",null,"\u4f8b\u5982\u6211\u4eec\u4e0b\u9762  ",(0,l.kt)("inlineCode",{parentName:"p"},"CommonUserDTO")," \u62bd\u79bb\u63a5\u53e3\u7684\u901a\u7528\u7684\u4e00\u4e9b\u5c5e\u6027\uff0c\u7136\u540e ",(0,l.kt)("inlineCode",{parentName:"p"},"UserDTO")," \u4f5c\u4e3a\u7279\u6b8a\u63a5\u53e3\u9700\u8981\u7684\u7279\u5b9a\u53c2\u6570\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Rule, RuleType } from "@midwayjs/validate";\n\nexport class CommonUserDTO {\n  @Rule(RuleType.string().required())\n    token: string;\n  @Rule(RuleType.string())\n  workId: string;\n}\n\nexport class UserDTO extends CommonUserDTO {\n  \n  @Rule(RuleType.string().required())                 \n  name: string;\n}\n')),(0,l.kt)("p",null,"\u8001\u7248\u672c\u9700\u8981\u5728\u5b50\u7c7b\u4e0a\u9762\u52a0\uff0c\u65b0\u7248\u672c\u4e0d\u9700\u8981\u5566\uff5e"),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5982\u679c\u5c5e\u6027\u540d\u76f8\u540c\uff0c\u5219\u53d6\u5f53\u524d\u5c5e\u6027\u7684\u89c4\u5219\u8fdb\u884c\u6821\u9a8c\uff0c\u4e0d\u4f1a\u548c\u7236\u7c7b\u5408\u5e76\u3002"))),(0,l.kt)("h2",{id:"\u4ece\u539f\u6709-dto-\u521b\u5efa\u65b0-dto"},"\u4ece\u539f\u6709 DTO \u521b\u5efa\u65b0 DTO"),(0,l.kt)("p",null,"\u6709\u65f6\u5019\uff0c\u6211\u4eec\u4f1a\u5e0c\u671b\u4ece\u67d0\u4e2a DTO \u4e2d\u83b7\u53d6\u4e00\u90e8\u5206\u5c5e\u6027\uff0c\u53d8\u6210\u4e00\u4e2a\u65b0\u7684 DTO \u7c7b\u3002"),(0,l.kt)("p",null,"Midway \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"PickDto")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"OmitDto")," \u4e24\u4e2a\u65b9\u6cd5\u6839\u636e\u73b0\u6709\u7684\u7684 DTO \u7c7b\u578b\u521b\u5efa\u65b0\u7684 DTO\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"PickDto")," \u7528\u4e8e\u4ece\u73b0\u6709\u7684 DTO \u4e2d\u83b7\u53d6\u4e00\u4e9b\u5c5e\u6027\uff0c\u53d8\u6210\u65b0\u7684 DTO\uff0c\u800c ",(0,l.kt)("inlineCode",{parentName:"p"},"OmitDto")," \u7528\u4e8e\u5c06\u5176\u4e2d\u67d0\u4e9b\u5c5e\u6027\u5254\u9664\uff0c\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/dto/user.ts\nimport { Rule, RuleType, PickDto } from \"@midwayjs/validate\";\n\nexport class UserDTO {\n  @Rule(RuleType.number().required())\n  id: number;\n  \n  @Rule(RuleType.string().required())\n  firstName: string;\n\n  @Rule(RuleType.string().max(10))\n  lastName: string;\n  \n  @Rule(RuleType.number().max(60))\n  age: number;\n}\n\nconst SimpleUserDTO = PickDto(UserDTO, ['firstName', 'lastName']);\n\n// const simpleUser = new SimpleUserDTO();\n// \u53ea\u5305\u542b\u4e86 firstName \u548c lastName \u5c5e\u6027\n// simpleUser.firstName = xxx\n\nconst NewUserDTO = OmitDto(UserDTO, ['age']);\n\n// const newUser = new NewUserDTO();\n// newUser.age \u5b9a\u4e49\u548c\u5c5e\u6027\u90fd\u4e0d\u5b58\u5728\n\n// \u4f7f\u7528\nasync login(@Body() user: typeof NewUserDTO) {\n  // ...\n}\n\n")),(0,l.kt)("h2",{id:"\u590d\u7528\u6821\u9a8c\u89c4\u5219"},"\u590d\u7528\u6821\u9a8c\u89c4\u5219"),(0,l.kt)("p",null,"\u6709\u4eba\u5982\u679c\u6211\u5f88\u591a\u90fd\u662f\u5b57\u7b26\u4e32\u5fc5\u586b\uff0c\u6216\u8005\u7c7b\u4f3c\u9700\u6c42\uff0c\u5199 ",(0,l.kt)("inlineCode",{parentName:"p"},"RuleType.string().required()")," \u6709\u70b9\u957f\uff0c\u6709\u70b9\u70e6\uff0c\u90a3\u5e94\u8be5\u600e\u4e48\u529e\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"\nconst requiredString = RuleType.string().required(); // \u81ea\u5df1\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e0b\u4f60\u4eec\u90e8\u95e8\u7684\u89c4\u8303\u6216\u5e38\u7528\u7684\u3002\n\nexport class UserDTO{\n  \n  @Rule(requiredString)                 // \u8fd9\u6837\u5c31\u4e0d\u7528\u5199\u4e0a\u9762\u8fd9\u4e48\u957f\u7684\u4e86\n  name: string;\n  \n  @Rule(requiredString)                                 // \u540c\u4e0a\n  nickName: string;\n  \n  @Rule(requiredString)                               // \u540c\u4e0a\n  description: string;\n}\n\nconst maxString = (length)=> RuleType.string().max(length);  // \u81ea\u5df1\u5728\u4e00\u4e2a\u6587\u4ef6\u4e2d\u5b9a\u4e49\u4e00\u4e0b\u4f60\u4eec\u90e8\u95e8\u7684\u89c4\u8303\u6216\u5e38\u7528\u7684\u3002\n\nexport class UserDTO{\n  \n  @Rule(requiredString)                // \u540c\u4e0a  \n  name: string;\n  \n  @Rule(requiredString)                // \u540c\u4e0a\n  nickName: string;\n  \n  @Rule(requiredString)                // \u540c\u4e0a\n  description: string;\n  \n  @Rule(maxString(50))                              // \u8fd9\u6837\u901a\u8fc7\u6362\u4e2a\u53c2\u6570\u5373\u53ef\n  info: string;\n  \n  @Rule(maxString(50).required())     //\u8fd9\u6837\u4e5f\u884c\n  info2: string;\n}\n")),(0,l.kt)("p",null,"\u76f8\u5f53\u4e8e\u901a\u8fc7\u5b9a\u4e49\u5e38\u7528\u65b9\u6cd5\u6216\u53d8\u91cf\u3002"),(0,l.kt)("h2",{id:"\u9ed8\u8ba4\u914d\u7f6e"},"\u9ed8\u8ba4\u914d\u7f6e"),(0,l.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u5bf9 validate \u7ec4\u4ef6\u505a\u4e00\u4e9b\u914d\u7f6e\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u9879"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"errorStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u6821\u9a8c\u51fa\u9519\u65f6\uff0c\u8fd4\u56de\u7684 Http \u72b6\u6001\u7801\uff0c\u5728 http \u573a\u666f\u751f\u6548\uff0c\u9ed8\u8ba4 422")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locale"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6821\u9a8c\u51fa\u9519\u6587\u672c\u7684\u9ed8\u8ba4\u8bed\u8a00\uff0c\u5f53\u524d\u6709 ",(0,l.kt)("inlineCode",{parentName:"td"},"en_US")," \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"zh_CN")," \u4e24\u79cd\uff0c\u9ed8\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"en_US"),"\uff0c\u4f1a\u6839\u636e i18n \u7ec4\u4ef6\u7684\u89c4\u5219\u5207\u6362")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"validationOptions"),(0,l.kt)("td",{parentName:"tr",align:null},"joi \u7684 ValidationOptions \u9009\u9879"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e38\u7528\u7684\u6709 allowUnknown \u9009\u9879\uff0c\u5982\u679c\u914d\u7f6e\uff0c\u90a3\u4e48\u5168\u5c40\u7684\u6821\u9a8c\u90fd\u5141\u8bb8\u51fa\u73b0\u6ca1\u6709\u5b9a\u4e49\u7684\u5b57\u6bb5")))),(0,l.kt)("h2",{id:"\u5176\u4ed6\u8bed\u8a00\u7684\u7ffb\u8bd1"},"\u5176\u4ed6\u8bed\u8a00\u7684\u7ffb\u8bd1"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cMidway \u63d0\u4f9b\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"en_US")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"zh_CN")," \u4e24\u79cd\u6821\u9a8c\u7684\u7ffb\u8bd1\u6587\u672c\uff0c\u5982\u679c\u8fd8\u9700\u8981\u989d\u5916\u7684\u7ffb\u8bd1\uff0c\u53ef\u4ee5\u914d\u7f6e\u5728 i18n \u4e2d\u3002"),(0,l.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"export const i18n = {\n  localeTable: {\n    // \u589e\u52a0\u7ffb\u8bd1\n    zh_TW: {\n      validate: require('../../locales/zh_TW.json'),\n    },\n  },\n};\n")),(0,l.kt)("p",null,"\u5982\u679c\u53ef\u4ee5\u7684\u8bdd\uff0c\u6211\u4eec\u5e0c\u671b\u4f60\u5c06\u7ffb\u8bd1\u63d0\u4ea4\u7ed9 Midway \u5b98\u65b9\uff0c\u8ba9\u5927\u5bb6\u90fd\u80fd\u4f7f\u7528\u3002"),(0,l.kt)("h2",{id:"\u72ec\u7acb\u7684\u6821\u9a8c\u670d\u52a1"},"\u72ec\u7acb\u7684\u6821\u9a8c\u670d\u52a1"),(0,l.kt)("p",null,"\u7ec4\u4ef6\u5e95\u5c42\u63d0\u4f9b\u4e86\u5355\u4f8b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"ValidateService")," \u6821\u9a8c\u670d\u52a1\u7c7b\uff0c\u5982\u6709\u5fc5\u8981\uff0c\u53ef\u4ee5\u5728\u4e2d\u95f4\u4ef6\u6216\u8005\u72ec\u7acb\u7684\u670d\u52a1\u4e2d\u4f7f\u7528\u3002\u4e8b\u5b9e\u4e0a\uff0c\u6240\u6709\u7684\u6821\u9a8c\u88c5\u9970\u5668\uff0c\u6700\u7ec8\u90fd\u4f1a\u8d70\u5230\u8fd9\u4e2a\u65b9\u6cd5\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"ValidateService")," \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"validate")," \u65b9\u6cd5\uff0c\u7528\u4e8e\u6821\u9a8c DTO\u3002"),(0,l.kt)("p",null,"\u6211\u4eec\u4ee5\u4e0a\u9762\u5b9a\u4e49\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"UserDTO")," \u4e3a\u4f8b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"import { ValidateService } from '@midwayjs/validate';\n\nexport class UserService {\n  \n  @Inject()\n  validateService: ValidateService;\n  \n  async inovke() {\n    \n    // ...\n    const result = this.validateService.validate(UserDTO, {\n      name: 'harry',\n      nickName: 'harry'\n    });\n    \n    // \u5931\u8d25\u8fd4\u56de resut.error\n    // \u6210\u529f\u8fd4\u56de resut.value\n  }\n}\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"validate")," \u65b9\u6cd5\u8fd4\u56de\u7684 result \u5305\u542b ",(0,l.kt)("inlineCode",{parentName:"p"},"error")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),"  \u4e24\u4e2a\u5c5e\u6027\u3002\u5931\u8d25\u4f1a\u8fd4\u56de ",(0,l.kt)("inlineCode",{parentName:"p"},"MidwayValidationError")," \u9519\u8bef\uff0c\u6210\u529f\u4f1a\u8fd4\u56de\u683c\u5f0f\u5316\u597d\u7684 DTO \u5bf9\u8c61\u3002"),(0,l.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,l.kt)("h3",{id:"1\u5141\u8bb8\u672a\u5b9a\u4e49\u7684\u5b57\u6bb5"},"1\u3001\u5141\u8bb8\u672a\u5b9a\u4e49\u7684\u5b57\u6bb5"),(0,l.kt)("p",null,"1\u3001\u7531\u4e8e\u90e8\u5206\u7528\u6237\u5728\u53c2\u6570\u6821\u9a8c\u7684\u65f6\u5019\uff0c\u5e0c\u671b\u5141\u8bb8\u51fa\u73b0\u6ca1\u6709\u5b9a\u4e49\u7684\u5b57\u6bb5\uff0c\u53ef\u4ee5\u5728\u5168\u5c40\u914d\u7f6e\uff0c\u4ee5\u53ca\u88c5\u9970\u5668\u4e0a\u5206\u522b\u8bbe\u7f6e\uff0c\u524d\u8005\u5bf9\u5168\u5c40\u751f\u6548\uff0c\u540e\u8005\u5bf9\u5355\u4e2a\u6821\u9a8c\u751f\u6548\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// src/config/config.default\xa0\nexport const validate = {\n   validationOptions: {\n     allowUnknown: true,        // \u5168\u5c40\u751f\u6548\n   }\n };\n")),(0,l.kt)("p",null,"\u6216\u8005\u5728\u88c5\u9970\u5668\u4e0a\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"@Controller('/api/user')\nexport class HomeController {\n\n  @Post('/')\n  @Validate({\n    validationOptions: {\n      allowUnknown: true,\n    }\n  })\n  async updateUser(@Body() user: UserDTO ) {\n    // user.id\n  }\n}\n")))}m.isMDXComponent=!0}}]);