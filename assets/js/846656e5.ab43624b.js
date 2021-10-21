"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[635],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return t?n.createElement(y,c(c({ref:r},s),{},{components:t})):n.createElement(y,c({ref:r},s))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5436:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],i={},l="Glossary",u={unversionedId:"reference/glossary",id:"reference/glossary",isDocsHomePage:!1,title:"Glossary",description:"* Policy: Configurable approval flow for request approval",source:"@site/docs/reference/glossary.md",sourceDirName:"reference",slug:"/reference/glossary",permalink:"/guardian/docs/reference/glossary",editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/reference/glossary.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/guardian/docs/concepts/architecture"},next:{title:"Policy Configurations",permalink:"/guardian/docs/reference/policy-config"}},s=[],p={toc:s};function f(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"glossary"},"Glossary"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Policy: Configurable approval flow for request approval"),(0,a.kt)("li",{parentName:"ul"},"Provider: Third-party service that stores our data e.g. BigQuery, Metabase, Grafana, etc."),(0,a.kt)("li",{parentName:"ul"},"Resource: Actual data resource that the user will request the access to."),(0,a.kt)("li",{parentName:"ul"},"Appeal: An access request created by users who want to get access to data resources."),(0,a.kt)("li",{parentName:"ul"},"Approval Steps: Series of approvals required for an appeal to get approved."),(0,a.kt)("li",{parentName:"ul"},"User Profile: User information provided by an external identity manager service")))}f.isMDXComponent=!0}}]);