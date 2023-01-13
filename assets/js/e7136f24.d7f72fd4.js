"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[58],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8242:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const o={},i="Dataplex Policy tag",l={unversionedId:"providers/dataplex",id:"providers/dataplex",title:"Dataplex Policy tag",description:"Policy tags enable you to control who can view sensitive columns in BigQuery tables. In Dataplex, you can add or remove policy tags to columns directly on the table entry details page.",source:"@site/docs/providers/dataplex.md",sourceDirName:"providers",slug:"/providers/dataplex",permalink:"/guardian/docs/providers/dataplex",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/providers/dataplex.md",tags:[],version:"current",frontMatter:{}},c={},s=[{value:"Policy tag Resources",id:"policy-tag-resources",level:3},{value:"BigQuery Users",id:"bigquery-users",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Authentication",id:"authentication",level:3},{value:"Access Management",id:"access-management",level:2},{value:"Config",id:"config",level:2},{value:"YAML Representation",id:"yaml-representation",level:4},{value:"<code>AccountType</code>",id:"accounttype",level:3},{value:"<code>Credentials</code>",id:"credentials",level:3},{value:"<code>ResourceType</code>",id:"resourcetype",level:3},{value:"<code>PolicyTagResourcePermission</code>",id:"policytagresourcepermission",level:3}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dataplex-policy-tag"},"Dataplex Policy tag"),(0,a.kt)("p",null,"Policy tags enable you to control who can view sensitive columns in BigQuery tables. In Dataplex, you can add or remove policy tags to columns directly on the table entry details page."),(0,a.kt)("h3",{id:"policy-tag-resources"},"Policy tag Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tag"),": Users that need access to columns protected with policy tags need the Fine-Grained Reader role. This role is assigned individually on every policy tag.")),(0,a.kt)("h3",{id:"bigquery-users"},"BigQuery Users"),(0,a.kt)("p",null,"BigQuery allows users, groups, and service accounts allowed to access the Fine-Grained Reader role on policy-tag. Currently, Guardian only supports ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"user"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"service account"))," as account types."),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"If a user/administrator wants to access to columns protected with policy tags need the Fine-Grained Reader role, the user must have ",(0,a.kt)("inlineCode",{parentName:"p"},"Fine-Grained Reader")," permissions for the policy-tag associated with column."),(0,a.kt)("p",null,"For registering Dataplex Policy tag as a provider on Guardian, users must have a service account with IAM roles: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"roles/bigquery.dataOwner, roles/datacatalog.categoryAdmin"))," at the project level."),(0,a.kt)("h3",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Guardian requires ",(0,a.kt)("strong",{parentName:"p"},"service account key")," and the ",(0,a.kt)("strong",{parentName:"p"},"resource name")," of an administrator user in BigQuery. The Service Account key should be base64 encoded value."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"credentials:\n  service_account_key: <base64 encoded service account key json>\n  resource_name: projects/gcp-project-id/locations/taxonomy-location\n")),(0,a.kt)("h2",{id:"access-management"},"Access Management"),(0,a.kt)("p",null,"Access can be given at the policy-tag level as those allowed to be managed through these DataCatalog APIs:"),(0,a.kt)("h2",{id:"config"},"Config"),(0,a.kt)("h4",{id:"yaml-representation"},"YAML Representation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'type: dataplex\nurn: my-policy_tag\nallowed_account_types:\n  - user\n  - serviceAccount\ncredentials:\n  service_account_key: <base64 encoded service account key json>\n  resource_name: projects/gcp-project-id/locations/us\nappeal:\n  allow_active_access_extension_in: "7d"\nresources:\n  - type: tag\n    policy:\n      id: my_policy\n      version: 1\n    roles:\n      - id: fineGrainReader\n        name: Fine Grain Reader\n        permissions:\n          - roles/datacatalog.categoryFineGrainedReader\n')),(0,a.kt)("h3",{id:"accounttype"},(0,a.kt)("inlineCode",{parentName:"h3"},"AccountType")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"serviceAccount"))),(0,a.kt)("h3",{id:"credentials"},(0,a.kt)("inlineCode",{parentName:"h3"},"Credentials")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Fields"),(0,a.kt)("th",{parentName:"tr",align:"left"}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"resource_name")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," This field contains the Project ID of the project containing the resources.",(0,a.kt)("br",null)," Example: ",(0,a.kt)("inlineCode",{parentName:"td"},"projects/my-project-id"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"service_account_key")),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"string")," Service account key JSON that has ",(0,a.kt)("a",{parentName:"td",href:"#prerequisites"},"prerequisites permissions"),". On provider creation, the value should be an base64 encoded JSON key.")))),(0,a.kt)("h3",{id:"resourcetype"},(0,a.kt)("inlineCode",{parentName:"h3"},"ResourceType")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tag"))),(0,a.kt)("h3",{id:"policytagresourcepermission"},(0,a.kt)("inlineCode",{parentName:"h3"},"PolicyTagResourcePermission")),(0,a.kt)("p",null,"A Google Cloud predefined role name. "),(0,a.kt)("p",null,"For ",(0,a.kt)("inlineCode",{parentName:"p"},"tag")," resource type and column access we are using following permission"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"roles/datacatalog.categoryFineGrainedReader"))))}p.isMDXComponent=!0}}]);