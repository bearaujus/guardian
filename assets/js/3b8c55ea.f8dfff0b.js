"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[217],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9803:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return o},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const i={},l="Installation",o={unversionedId:"installation",id:"installation",title:"Installation",description:"There are several approaches to install Guardian.",source:"@site/docs/installation.md",sourceDirName:".",slug:"/installation",permalink:"/guardian/docs/installation",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/guardian/docs/introduction"},next:{title:"Roadmap",permalink:"/guardian/docs/roadmap"}},u={},p=[{value:"Binary (Cross-platform)",id:"binary-cross-platform",level:4},{value:"macOS",id:"macos",level:4},{value:"Linux",id:"linux",level:4},{value:"Windows",id:"windows",level:4},{value:"Building from source",id:"building-from-source",level:3},{value:"Prerequisites",id:"prerequisites",level:4},{value:"Build",id:"build",level:4},{value:"Use the Docker image",id:"use-the-docker-image",level:3},{value:"Verifying the installation\u200b",id:"verifying-the-installation",level:3},{value:"What&#39;s next",id:"whats-next",level:3}],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installation"},"Installation"),(0,r.kt)("p",null,"There are several approaches to install Guardian."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#binary-cross-platform"},"Using a pre-compiled binary")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#macOS"},"Installing with package manager")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#building-from-source"},"Installing from source")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#use-the-docker-image"},"Using the Docker image"))),(0,r.kt)("h4",{id:"binary-cross-platform"},"Binary (Cross-platform)"),(0,r.kt)("p",null,"Download the appropriate version for your platform from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odpf/guardian/releases"},"releases")," page. Once downloaded, the binary can be run from anywhere.\nYou don\u2019t need to install it into a global location. This works well for shared hosts and other systems where you don\u2019t have a privileged account.\nIdeally, you should install it somewhere in your PATH for easy use. ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," is the most probable location."),(0,r.kt)("h4",{id:"macos"},"macOS"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"guardian")," is available via a Homebrew Tap, and as downloadable binary from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odpf/guardian/releases/latest"},"releases")," page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install odpf/tap/guardian\n")),(0,r.kt)("p",null,"To upgrade to the latest version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew upgrade guardian\n")),(0,r.kt)("p",null,"Check for installed guardian version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"guardian version\n")),(0,r.kt)("h4",{id:"linux"},"Linux"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"guardian")," is available as downloadable binaries from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odpf/guardian/releases/latest"},"releases")," page. Download the ",(0,r.kt)("inlineCode",{parentName:"p"},".deb")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".rpm")," from the releases page and install with ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo dpkg -i")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo rpm -i")," respectively."),(0,r.kt)("h4",{id:"windows"},"Windows"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"guardian")," is available via ",(0,r.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"scoop"),", and as a downloadable binary from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/odpf/guardian/releases/latest"},"releases")," page:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop bucket add guardian https://github.com/odpf/scoop-bucket.git\n")),(0,r.kt)("p",null,"To upgrade to the latest version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"scoop update guardian\n")),(0,r.kt)("h3",{id:"building-from-source"},"Building from source"),(0,r.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Guardian requires the following dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Golang (version 1.17 or above)"),(0,r.kt)("li",{parentName:"ul"},"Git")),(0,r.kt)("h4",{id:"build"},"Build"),(0,r.kt)("p",null,"Run either of the following commands to clone and compile Guardian from source"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ git clone git@github.com:odpf/guardian.git  (Using SSH Protocol) Or\n$ git clone https://github.com/odpf/guardian.git (Using HTTPS Protocol)\n")),(0,r.kt)("p",null,"Install all the golang dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make setup\n")),(0,r.kt)("p",null,"Build guardian binary file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make build\n")),(0,r.kt)("p",null,"Init server config. Customise with your local configurations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"make config\n")),(0,r.kt)("p",null,"Run database migrations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./guardian server migrate -c config.yaml\n")),(0,r.kt)("p",null,"Start guardian server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./guardian server start -c config.yaml\n")),(0,r.kt)("p",null,"Initialise client configurations"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./guardian config init\n")),(0,r.kt)("h3",{id:"use-the-docker-image"},"Use the Docker image"),(0,r.kt)("p",null,"We provide ready to use Docker container images. To pull the latest image:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker pull odpf/guardian:latest\n")),(0,r.kt)("p",null,"To pull a specific version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker pull odpf/guardian:v0.3.2\n")),(0,r.kt)("h3",{id:"verifying-the-installation"},"Verifying the installation\u200b"),(0,r.kt)("p",null,"To verify if Guardian is properly installed, run ",(0,r.kt)("inlineCode",{parentName:"p"},"guardian --help")," on your system. You should see help output. If you are executing it from the command line, make sure it is on your PATH or you may get an error about Guardian not being found."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ guardian --help\n")),(0,r.kt)("h3",{id:"whats-next"},"What's next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/cli"},"CLI Reference")," for a complete list of commands and options."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"/guardian/docs/guides/deployment"},"deployment guide")," on how to setup Guardian server.")))}d.isMDXComponent=!0}}]);