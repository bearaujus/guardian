"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[217],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return t?r.createElement(f,o(o({ref:n},c),{},{components:t})):r.createElement(f,o({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9803:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=t(3117),a=(t(7294),t(3905));const i={},o="Installation",l={unversionedId:"installation",id:"installation",title:"Installation",description:"There are several approaches to install Guardian CLI",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/guardian/docs/installation",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/guardian/docs/introduction"},next:{title:"Roadmap",permalink:"/guardian/docs/roadmap"}},u={},s=[{value:"Binary (Cross-platform)",id:"binary-cross-platform",level:3},{value:"Homebrew Installation",id:"homebrew-installation",level:3},{value:"Building from source",id:"building-from-source",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Build",id:"build",level:4},{value:"Verifying the installation\u200b",id:"verifying-the-installation",level:3}],c={toc:s};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"There are several approaches to install Guardian CLI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#binary-cross-platform"},"Using a pre-compiled binary")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#homebrew-installation"},"Installing with package manager")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"#building-from-source"},"Installing from source"))),(0,a.kt)("h3",{id:"binary-cross-platform"},"Binary (Cross-platform)"),(0,a.kt)("p",null,"Guardian binaries are downloadable on the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/odpf/guardian/releases"},"Releases page"),". Currently, the installer is not available. Once downloaded, the binary can be run from anywhere. You don\u2019t need to install it in a global location. This works well for shared hosts and other systems where you don\u2019t have a privileged account. Ideally, you should install it somewhere in your PATH for easy use. ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," is the most probable location."),(0,a.kt)("h3",{id:"homebrew-installation"},"Homebrew Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# Install guardian (requires homebrew installed)\n$ brew install odpf/tap/guardian\n\n# Upgrade guardian (requires homebrew installed)\n$ brew upgrade guardian\n\n# Check for installed guardian version\n$ guardian version\n")),(0,a.kt)("h3",{id:"building-from-source"},"Building from source"),(0,a.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Guardian requires the following dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Golang (version 1.17 or above)"),(0,a.kt)("li",{parentName:"ul"},"Git")),(0,a.kt)("h4",{id:"build"},"Build"),(0,a.kt)("p",null,"Run either of the following commands to clone and compile Guardian from source"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone git@github.com:odpf/guardian.git  (Using SSH Protocol) Or\n$ git clone https://github.com/odpf/guardian.git (Using HTTPS Protocol)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# Install all the golang dependencies\n$ make install\n\n# Check all build commands available\n$ make help\n\n# Build Guardian binary file\n$ make build\n")),(0,a.kt)("h3",{id:"verifying-the-installation"},"Verifying the installation\u200b"),(0,a.kt)("p",null,"To verify if Guardian is properly installed, run ",(0,a.kt)("inlineCode",{parentName:"p"},"guardian --help")," on your system. You should see help output. If you are executing it from the command line, make sure it is on your PATH or you may get an error about Guardian not being found."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ guardian --help\n")))}d.isMDXComponent=!0}}]);