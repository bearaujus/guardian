"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[551],{3905:function(e,n,r){r.d(n,{Zo:function(){return s},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),c=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},s=function(e){var n=c(e.components);return t.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(f,i(i({ref:n},s),{},{components:r})):t.createElement(f,i({ref:n},s))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5450:function(e,n,r){r.r(n),r.d(n,{assets:function(){return u},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var t=r(3117),a=(r(7294),r(3905));const o={},i="Introduction",l={unversionedId:"guides/introduction",id:"guides/introduction",title:"Introduction",description:"This tour introduces you to Guardian. Along the way you will learn how to manage create policies, resources and manage appeals.",source:"@site/docs/guides/introduction.md",sourceDirName:"guides",slug:"/guides/introduction",permalink:"/guardian/docs/guides/introduction",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/guides/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/guardian/docs/concepts/overview"},next:{title:"Configure client",permalink:"/guardian/docs/guides/configuration"}},u={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Help",id:"help",level:3},{value:"Background for this tutorial",id:"background-for-this-tutorial",level:3}],s={toc:c};function p(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This tour introduces you to Guardian. Along the way you will learn how to manage create policies, resources and manage appeals."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"This tour requires you to have Guardian CLI tool installed on your local machine. You can run ",(0,a.kt)("inlineCode",{parentName:"p"},"guardian version")," to verify the installation. Please follow ",(0,a.kt)("a",{parentName:"p",href:"../installation"},"installation")," and ",(0,a.kt)("a",{parentName:"p",href:"./configuration"},"configuration")," guides if you do not have it installed already."),(0,a.kt)("p",null,"Guardian CLI and clients talks to Guardian server to publish and fetch policies, appeals and resources. Please make sure you also have a Guardian server running. You can also run server locally with ",(0,a.kt)("inlineCode",{parentName:"p"},"Guardian server start")," command. For more details check deployment guide."),(0,a.kt)("h3",{id:"help"},"Help"),(0,a.kt)("p",null,"At any time you can run the following commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Check the installed version for Guardian cli tool\n$ guardian version\n\n# See the help for a command\n$ guardian --help\n")),(0,a.kt)("p",null,"The list of all availiable commands are as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"CORE COMMANDS\n  appeal      Manage appeals\n  policy      Manage policies\n  provider    Manage providers\n  resource    Manage resources\n\nADDITIONAL COMMANDS\n  completion  Generate shell completion scripts\n  config      Manage client configurations\n  help        Help about any command\n  job         Manage jobs\n  reference   Show command reference\n  server      Server management\n  version     Print version information\n")),(0,a.kt)("p",null,"Help command can also be run on any sub command with syntax ",(0,a.kt)("inlineCode",{parentName:"p"},"guardian <command> <subcommand> --help")," Here is an example for the same."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ guardian policy --help\n")),(0,a.kt)("p",null,"Check the reference for Guardian cli commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ guardian reference\n")),(0,a.kt)("h3",{id:"background-for-this-tutorial"},"Background for this tutorial"),(0,a.kt)("p",null,"We have 1 BigQuery project named ",(0,a.kt)("inlineCode",{parentName:"p"},"my-bq-project")," and we want to manage user access using Guardian. We allow user to have access to datasets and tables with either ",(0,a.kt)("inlineCode",{parentName:"p"},"Viewer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Editor"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"Owner")," roles. We will also be defining certain rules to manage the approval, updating resource metadata, creating an appeal, approving and rejecting the appeal in this example guide."))}p.isMDXComponent=!0}}]);