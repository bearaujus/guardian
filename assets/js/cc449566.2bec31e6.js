"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[607],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4140:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const i={},o="Big Query",s={unversionedId:"providers/bigquery",id:"providers/bigquery",title:"Big Query",description:"BigQuery is an enterprise data warehouse tool for storing and querying massive datasets with super-fast SQL queries using the processing power of Google's infrastructure.",source:"@site/docs/providers/bigquery.md",sourceDirName:"providers",slug:"/providers/bigquery",permalink:"/guardian/docs/providers/bigquery",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/providers/bigquery.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"GCP",permalink:"/guardian/docs/providers/gcloud_iam"},next:{title:"Tableau",permalink:"/guardian/docs/providers/tableau"}},l={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Access Management",id:"access-management",level:2},{value:"Config",id:"config",level:2},{value:"YAML Representation",id:"yaml-representation",level:4},{value:"<code>BigQueryAccountType</code>",id:"bigqueryaccounttype",level:3},{value:"<code>BigQueryCredentials</code>",id:"bigquerycredentials",level:3},{value:"<code>BigQueryResourceType</code>",id:"bigqueryresourcetype",level:3},{value:"<code>BigQueryResourcePermission</code>",id:"bigqueryresourcepermission",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"big-query"},"Big Query"),(0,a.kt)("p",null,"BigQuery is an enterprise data warehouse tool for storing and querying massive datasets with super-fast SQL queries using the processing power of Google's infrastructure."),(0,a.kt)("p",null,"BigQuery has ",(0,a.kt)("strong",{parentName:"p"},"datasets")," that each one contains multiple ",(0,a.kt)("strong",{parentName:"p"},"tables")," which are used for storing the data. User also can run queries to read or even transform those data."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A service account with ",(0,a.kt)("inlineCode",{parentName:"li"},"roles/bigquery.dataOwner")," role at the project level")),(0,a.kt)("h2",{id:"access-management"},"Access Management"),(0,a.kt)("p",null,"Access can be given at the dataset level or table level as those allowed to be managed through these BigQuery APIs:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/dataset-access-controls"},"Dataset Access Control")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/table-access-controls-intro"},"Table Access Control"))),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("h4",{id:"yaml-representation"},"YAML Representation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'type: bigquery\nurn: my-bigquery\nallowed_account_types:\n  - user\n  - serviceAccount\ncredentials:\n  service_account_key: <base64 encoded service account key json>\n  resource_name: projects/gcp-project-id\nappeal:\n  allow_active_access_extension_in: "7d"\nresources:\n  - type: dataset\n    policy:\n      id: my_policy\n      version: 1\n    roles:\n      - id: viewer\n        name: Viewer\n        permissions:\n          - READER\n      - id: editor\n        name: Editor\n        permissions:\n          - WRITER\n  - type: table\n    policy:\n      id: my_policy\n      version: 1\n    roles:\n      - id: viewer\n        name: Viewer\n        permissions:\n          - roles/bigquery.dataViewer\n          - roles/bigquery.jobUser\n')),(0,a.kt)("h3",{id:"bigqueryaccounttype"},(0,a.kt)("inlineCode",{parentName:"h3"},"BigQueryAccountType")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"serviceAccount"))),(0,a.kt)("h3",{id:"bigquerycredentials"},(0,a.kt)("inlineCode",{parentName:"h3"},"BigQueryCredentials")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Fields"),(0,a.kt)("th",{parentName:"tr",align:"left"}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"resource_name")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," GCP Project ID in resource name format. Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"projects/my-project-id"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"service_account_key")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," Service account key JSON that has ",(0,a.kt)("a",{parentName:"td",href:"#prerequisites"},"prerequisites permissions"),". On provider creation, the value should be an base64 encoded JSON key.")))),(0,a.kt)("h3",{id:"bigqueryresourcetype"},(0,a.kt)("inlineCode",{parentName:"h3"},"BigQueryResourceType")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dataset")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"table"))),(0,a.kt)("h3",{id:"bigqueryresourcepermission"},(0,a.kt)("inlineCode",{parentName:"h3"},"BigQueryResourcePermission")),(0,a.kt)("p",null,"A Google Cloud predefined role name. For ",(0,a.kt)("inlineCode",{parentName:"p"},"dataset")," resource type, we are using legacy roles ","(",(0,a.kt)("inlineCode",{parentName:"p"},"READER"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WRITER"),", or ",(0,a.kt)("inlineCode",{parentName:"p"},"OWNER"),")",". ",(0,a.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/reference/rest/v2/datasets#:~:text=Required.%20An%20IAM,back%20as%20%22OWNER%22."},"Read more...")))}p.isMDXComponent=!0}}]);