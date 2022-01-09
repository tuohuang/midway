"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[677],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),m=r,d=f["".concat(s,".").concat(m)]||f[m]||l[m]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7344:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"\u8fd0\u884c\u65f6\u914d\u7f6e & Hooks \u7ec4\u4ef6"},s=void 0,p={unversionedId:"hooks/hooks_component",id:"hooks/hooks_component",title:"\u8fd0\u884c\u65f6\u914d\u7f6e & Hooks \u7ec4\u4ef6",description:"\u200b2.0 \u7248",source:"@site/docs/hooks/hooks_component.md",sourceDirName:"hooks",slug:"/hooks/hooks_component",permalink:"/docs/next/hooks/hooks_component",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/docs/hooks/hooks_component.md",tags:[],version:"current",frontMatter:{title:"\u8fd0\u884c\u65f6\u914d\u7f6e & Hooks \u7ec4\u4ef6"},sidebar:"hooks",previous:{title:"Web \u4e2d\u95f4\u4ef6",permalink:"/docs/next/hooks/hooks_middleware"},next:{title:"\u672c\u5730\u8c03\u8bd5",permalink:"/docs/next/hooks/hooks_debug"}},u=[],l={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u200b2.0 \u7248\n\u200b"),(0,i.kt)("p",null,"\u5728 2.0 \u4e2d\uff0c\u6211\u4eec\u5c06 Midway Hooks \u53d8\u4e3a\u4e86 Midway \u7684 Component\u3002\n\u200b"),(0,i.kt)("p",null,"\u540c\u65f6\u6211\u4eec\u4e5f\u652f\u6301\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"createConfiguration"),"\uff0c\u652f\u6301\u4ee5\u51fd\u6570\u7684\u65b9\u5f0f\u521b\u5efa ",(0,i.kt)("inlineCode",{parentName:"p"},"Midway Configuration"),"\uff0c\u51cf\u5c11 Class \u4e0e\u51fd\u6570\u5f0f\u6df7\u7528\u6240\u5e26\u6765\u7684\u8ff7\u60d1\u611f\u3002\n\u200b"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"./src/apis/configuration.ts")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { hooks, createConfiguration } from '@midwayjs/hooks';\n\nexport default createConfiguration({\n  imports: [hooks()],\n});\n")),(0,i.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u65b9\u5f0f\u5373\u53ef\u542f\u7528 Hooks \u529f\u80fd\u3002"))}f.isMDXComponent=!0}}]);