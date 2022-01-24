"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[635],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,y=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return t?n.createElement(y,c(c({ref:r},s),{},{components:t})):n.createElement(y,c({ref:r},s))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5436:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),c=["components"],i={},l="Glossary",u={unversionedId:"reference/glossary",id:"reference/glossary",isDocsHomePage:!1,title:"Glossary",description:"* Policy: Configurable approval flow for request approval",source:"@site/docs/reference/glossary.md",sourceDirName:"reference",slug:"/reference/glossary",permalink:"/guardian/docs/reference/glossary",editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/reference/glossary.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Architecture",permalink:"/guardian/docs/concepts/architecture"},next:{title:"Appeal",permalink:"/guardian/docs/reference/appeal"}},s=[],p={toc:s};function f(e){var r=e.components,t=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"glossary"},"Glossary"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Policy: Configurable approval flow for request approval"),(0,o.kt)("li",{parentName:"ul"},"Provider: Third-party service that stores our data e.g. BigQuery, Metabase, Grafana, etc."),(0,o.kt)("li",{parentName:"ul"},"Resource: Actual data resource that the user will request the access to."),(0,o.kt)("li",{parentName:"ul"},"Appeal: An access request created by users who want to get access to data resources."),(0,o.kt)("li",{parentName:"ul"},"Approval Steps: Series of approvals required for an appeal to get approved."),(0,o.kt)("li",{parentName:"ul"},"User Profile: User information provided by an external identity manager service")))}f.isMDXComponent=!0}}]);