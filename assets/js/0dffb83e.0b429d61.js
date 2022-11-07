"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[75],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(h,i(i({ref:t},p),{},{components:a})):r.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<n;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3208:function(e,t,a){a.r(t),a.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return c},frontMatter:function(){return n},metadata:function(){return s},toc:function(){return u}});var r=a(3117),o=(a(7294),a(3905));const n={},i="Roadmap",s={unversionedId:"roadmap",id:"roadmap",title:"Roadmap",description:"In the following section, you can learn about what features we're working on, what stage they're in, and when we expect to bring them to you. Have any questions or comments about items on the roadmap? Join the discussions on the Guardian Github forum.",source:"@site/docs/roadmap.md",sourceDirName:".",slug:"/roadmap",permalink:"/guardian/docs/roadmap",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/roadmap.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Server Installation",permalink:"/guardian/docs/installation/server"},next:{title:"Overview",permalink:"/guardian/docs/concepts/overview"}},l={},u=[{value:"Appeal approval outside Guardian",id:"appeal-approval-outside-guardian",level:2},{value:"Role based auto appeal to multiple resources",id:"role-based-auto-appeal-to-multiple-resources",level:2},{value:"Data access monitoring",id:"data-access-monitoring",level:2},{value:"Add support for Postgres provider",id:"add-support-for-postgres-provider",level:2},{value:"CLI authentication",id:"cli-authentication",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"roadmap"},"Roadmap"),(0,o.kt)("p",null,"In the following section, you can learn about what features we're working on, what stage they're in, and when we expect to bring them to you. Have any questions or comments about items on the roadmap? Join the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/odpf/discussions"},"discussions")," on the Guardian Github forum."),(0,o.kt)("p",null,"We\u2019re planning to iterate on the format of the roadmap itself, and we see the potential to engage more in discussions about the future of Firehose features. If you have feedback about this roadmap section itself, such as how the issues are presented, let us know through ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/odpf/discussions"},"discussions"),"."),(0,o.kt)("p",null,"Guardian roadmap can be tracked on this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/odpf/projects/10/views/4"},"project"),". The roadmap is arranged on a project board to give a sense for how far out each item is on the horizon. Every product or feature is added to a particular project board column according to the quarter in which it is expected to ship next."),(0,o.kt)("p",null,"Here, we outline some (but not all!) of the products on our roadmap. We'd love your input and feedback, Contact us to discuss any of the below, or any other products you'd like to see."),(0,o.kt)("h2",{id:"appeal-approval-outside-guardian"},"Appeal approval outside Guardian"),(0,o.kt)("p",null,"Complex appeal approval flow can't be modelled using policy config YAML file so in that case, Guardian should be able to integrate with existing complex approval flow like ",(0,o.kt)("inlineCode",{parentName:"p"},"bpmn"),"."),(0,o.kt)("p",null,"Proposed solution is Guardian can integrate with exiting approval flow either by webhook or subscribe to events."),(0,o.kt)("h2",{id:"role-based-auto-appeal-to-multiple-resources"},"Role based auto appeal to multiple resources"),(0,o.kt)("p",null,"Provide a user to have pre-defined access based on their role. For example, if a developer/analyst joins a team then they will have access of certain Metabase Collection, BigQuery dataset etc."),(0,o.kt)("p",null,"There are two ways to approach this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a role-resource mapping table, Api to crud operation on this table. Cronjob or a request flow to trigger default appeals based on role and role-resource mapping table."),(0,o.kt)("li",{parentName:"ul"},"Able to tag resources and create a role-tag table. Cronjob or a request flow to trigger default appeals based on role and role-tag mapping table.")),(0,o.kt)("h2",{id:"data-access-monitoring"},"Data access monitoring"),(0,o.kt)("p",null,"Guardian can manage access across multiple providers. But it is still hard for data governance managers to monitor the different aspects of data access."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Goal"),":",(0,o.kt)("br",null),"\nWith data access monitoring in Guardian, we aim to provide answers to the following questions."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How many users have access to sensitive data?"),(0,o.kt)("li",{parentName:"ul"},"How many appeals are pending?"),(0,o.kt)("li",{parentName:"ul"},"How many appeals are about to expire?"),(0,o.kt)("li",{parentName:"ul"},"What kind of data authorized users are accessing?"),(0,o.kt)("li",{parentName:"ul"},"When was a resource accessed, by whom, and for what purpose?"),(0,o.kt)("li",{parentName:"ul"},"Answers to these questions are very important to be proactive in managing security and compliance.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scope"),":",(0,o.kt)("br",null),"\nAccess monitoring can be tracked across different sections"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Appeals: Analytics about appeals and their status."),(0,o.kt)("li",{parentName:"ul"},"Access Logs: Analytics about what resources are being actually queried and how frequently."),(0,o.kt)("li",{parentName:"ul"},"Users: Analytics about how many users are active, and have access across resources."),(0,o.kt)("li",{parentName:"ul"},"Resources: Analytics about how many resources are available and of what type.")),(0,o.kt)("h2",{id:"add-support-for-postgres-provider"},"Add support for Postgres provider"),(0,o.kt)("p",null,"We need to support access management of Postgres. The proposed solution:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Provider configuration for Postgres"),(0,o.kt)("li",{parentName:"ul"},"Postgres client"),(0,o.kt)("li",{parentName:"ul"},"Postgres resource & access management (TODO: figure out what resources that need to be granted & revoked)"),(0,o.kt)("li",{parentName:"ul"},"Documentation")),(0,o.kt)("h2",{id:"cli-authentication"},"CLI authentication"),(0,o.kt)("p",null,"some APIs expect an authorized user email to be present in the request header (metadata for GRPC). For example approve/reject approval API. On web, rely on the auth proxy to provide this header. But for guardian CLI we haven't had an auth mechanism for accessing those APIs."),(0,o.kt)("p",null,"Need to provide configurable authentication method in the CLI"))}c.isMDXComponent=!0}}]);