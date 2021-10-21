"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[978],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,b=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(b,o(o({ref:t},p),{},{components:a})):n.createElement(b,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2048:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={},l="Metabase",d={unversionedId:"providers/metabase",id:"providers/metabase",isDocsHomePage:!1,title:"Metabase",description:"Metabase is a data visualization tool that lets you connect to external databases and create charts and dashboards based on the data from the databases. Guardian supports access management to the following resources in Metabase:",source:"@site/docs/providers/metabase.md",sourceDirName:"providers",slug:"/providers/metabase",permalink:"/guardian/docs/providers/metabase",editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/providers/metabase.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Tableau",permalink:"/guardian/docs/providers/tableau"},next:{title:"Grafana",permalink:"/guardian/docs/providers/grafana"}},p=[{value:"Authentication",id:"authentication",children:[]},{value:"Metabase Access Creation",id:"metabase-access-creation",children:[]},{value:"1. Config",id:"1-config",children:[{value:"<code>MetabaseCredentials</code>",id:"metabasecredentials",children:[]},{value:"<code>MetabaseResourceType</code>",id:"metabaseresourcetype",children:[]},{value:"<code>MetabaseResourcePermission</code>",id:"metabaseresourcepermission",children:[]}]}],c={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"metabase"},"Metabase"),(0,i.kt)("p",null,"Metabase is a data visualization tool that lets you connect to external databases and create charts and dashboards based on the data from the databases. Guardian supports access management to the following resources in Metabase:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Database"),(0,i.kt)("li",{parentName:"ol"},"Collection")),(0,i.kt)("p",null,"Metabase itself manages its user access on group-based permissions, while Guardian lets each individual user have access directly to the resources."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"Guardian requires ",(0,i.kt)("strong",{parentName:"p"},"email")," and ",(0,i.kt)("strong",{parentName:"p"},"password")," of an administrator user in Metabase."),(0,i.kt)("p",null,"Example provider config for metabase:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"---\ncredentials:\n  host: http://localhost:12345\n  user: administrator@email.com\n  password: password123\n")),(0,i.kt)("h2",{id:"metabase-access-creation"},"Metabase Access Creation"),(0,i.kt)("p",null,"Guardian creates a group that has only one permission type to one resource in Metabase Example: If a user wants to have ",(0,i.kt)("strong",{parentName:"p"},"view")," access to ",(0,i.kt)("strong",{parentName:"p"},"database X")," ","(","id=1",")",", Guardian will create a group called ",(0,i.kt)("strong",{parentName:"p"},"database_1_view"),", grant it with ",(0,i.kt)("strong",{parentName:"p"},"view")," permission only to ",(0,i.kt)("strong",{parentName:"p"},"database X"),", and then add the user to that group."),(0,i.kt)("p",null,"The group naming convention is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"<resource_type>_<resource_id>_<permission_type/role>\n")),(0,i.kt)("h2",{id:"1-config"},"1. Config"),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'type: metabase\nurn: my-metabase\ncredentials:\n  host: http://localhost:12345\n  user: administrator@email.com\n  password: password123\nappeal:\n  allow_active_access_extension_in: "7d"\nresources:\n  - type: database\n    policy:\n      id: policy_id\n      version: 1\n    roles:\n      - id: read\n        name: Read\n        permissions:\n          - schemas:all\n      - id: query\n        name: SQL Query\n        permissions:\n          - schemas:all\n          - native:write\n  - type: collection\n    policy:\n      id: policy_id\n      version: 1\n    roles:\n      - id: viewer\n        name: Viewer\n        permissions:\n          - read\n      - id: editor\n        name: Editor\n        permissions:\n          - write\n')),(0,i.kt)("h3",{id:"metabasecredentials"},(0,i.kt)("inlineCode",{parentName:"h3"},"MetabaseCredentials")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Fields"),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"host")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," Required. Metabase instance host Example: ",(0,i.kt)("inlineCode",{parentName:"td"},"http://localhost:12345"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"username")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"email")," Required. Email address of an account that has Administration permission")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")," Required. Account's password")))),(0,i.kt)("h3",{id:"metabaseresourcetype"},(0,i.kt)("inlineCode",{parentName:"h3"},"MetabaseResourceType")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"database")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"collection"))),(0,i.kt)("h3",{id:"metabaseresourcepermission"},(0,i.kt)("inlineCode",{parentName:"h3"},"MetabaseResourcePermission")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Details"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Required. ",(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Metabase permission mapping ",(0,i.kt)("strong",{parentName:"td"},"Possible values:")," - ",(0,i.kt)("inlineCode",{parentName:"td"},"database"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"schemas:all")," ","(","read table",")",", ",(0,i.kt)("inlineCode",{parentName:"td"},"native:write")," ","(","run SQL query",")"," ",(0,i.kt)("strong",{parentName:"td"},"Note"),": Metabase requires ",(0,i.kt)("inlineCode",{parentName:"td"},"schemas:all")," permission for ",(0,i.kt)("inlineCode",{parentName:"td"},"native:write")," to be able to work - ",(0,i.kt)("inlineCode",{parentName:"td"},"collection"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"read"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"write"))))))}m.isMDXComponent=!0}}]);