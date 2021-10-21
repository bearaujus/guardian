"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[403],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5057:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],u={},s="Contribution Process",c={unversionedId:"contribute/contribution",id:"contribute/contribution",isDocsHomePage:!1,title:"Contribution Process",description:"The following is a set of guidelines for contributing to Guardian. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request. Here are some important resources:",source:"@site/docs/contribute/contribution.md",sourceDirName:"contribute",slug:"/contribute/contribution",permalink:"/guardian/docs/contribute/contribution",editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/contribute/contribution.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Provider Configurations",permalink:"/guardian/docs/reference/provider-config"},next:{title:"Development Guide",permalink:"/guardian/docs/contribute/development"}},l=[{value:"How can I contribute?",id:"how-can-i-contribute",children:[]},{value:"Becoming a maintainer",id:"becoming-a-maintainer",children:[]},{value:"Guidelines",id:"guidelines",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contribution-process"},"Contribution Process"),(0,i.kt)("p",null,"The following is a set of guidelines for contributing to Guardian. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request. Here are some important resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://odpf.gitbook.io/guardian/concepts/architecture"},"Concepts")," section will explain you about Guardian architecture,"),(0,i.kt)("li",{parentName:"ul"},"Our ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/odpf/guardian#readme"},"roadmap")," is the 10k foot view of where we're going, and"),(0,i.kt)("li",{parentName:"ul"},"Github ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/odpf/guardian/issues"},"issues")," track the ongoing and reported issues.")),(0,i.kt)("h2",{id:"how-can-i-contribute"},"How can I contribute?"),(0,i.kt)("p",null,"We use RFCS and GitHub issues to communicate ideas."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can report a bug or suggest a feature enhancement or can just ask questions. Reach out on Github discussions for this purpose."),(0,i.kt)("li",{parentName:"ul"},"You are also welcome to improve error reporting and logging and improve code quality."),(0,i.kt)("li",{parentName:"ul"},"You can help with documenting new features or improve existing documentation."),(0,i.kt)("li",{parentName:"ul"},"You can also review and accept other contributions if you are a maintainer.")),(0,i.kt)("p",null,"Please submit a PR to the main branch of the Guardian repository once you are ready to submit your contribution. Code submission to Guardian ","(","including submission from project maintainers",")"," require review and approval from maintainers or code owners. PRs that are submitted need to pass the build. Once build is passed community members will help to review the pull request."),(0,i.kt)("h2",{id:"becoming-a-maintainer"},"Becoming a maintainer"),(0,i.kt)("p",null,"We are always interested in adding new maintainers. What we look for is a series of contributions, good taste, and an ongoing interest in the project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Maintainers will have write access to the Guardian repository."),(0,i.kt)("li",{parentName:"ul"},"There is no strict protocol for becoming a maintainer. Candidates for new maintainers are typically people that are active contributors and community members."),(0,i.kt)("li",{parentName:"ul"},"Candidates for new maintainers can also be suggested by current maintainers."),(0,i.kt)("li",{parentName:"ul"},"If you would like to become a maintainer, you should start contributing to Guardian in any of the ways mentioned. Youc might also want to talk to other maintainers and ask for their advice and guidance.")),(0,i.kt)("h2",{id:"guidelines"},"Guidelines"),(0,i.kt)("p",null,"Please follow these practices for you change to get merged fast and smoothly:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Contributions can only be accepted if they contain appropriate testing ","(","Unit and Integration Tests",")","."),(0,i.kt)("li",{parentName:"ul"},"If you are introducing a completely new feature or making any major changes in an existing one, we recommend to start with an RFC and get consensus on the basic design first."),(0,i.kt)("li",{parentName:"ul"},"Make sure your local build is running with all the tests and checkstyle passing."),(0,i.kt)("li",{parentName:"ul"},"If your change is related to user-facing protocols / configurations, you need to make the corresponding change in the documentation as well."),(0,i.kt)("li",{parentName:"ul"},"Docs live in the code repo under ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/odpf/guardian/tree/main/docs"},(0,i.kt)("inlineCode",{parentName:"a"},"docs"))," so that changes to that can be done in the same PR as changes to the code.")))}p.isMDXComponent=!0}}]);