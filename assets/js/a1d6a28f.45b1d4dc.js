"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[351],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},N=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),N=o(a),c=r,s=N["".concat(p,".").concat(c)]||N[c]||k[c]||i;return a?n.createElement(s,l(l({ref:t},m),{},{components:a})):n.createElement(s,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=N;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:r,l[1]=d;for(var o=2;o<i;o++)l[o]=a[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},3176:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return o}});var n=a(3117),r=(a(7294),a(3905));const i={},l="Appeal",d={unversionedId:"reference/appeal",id:"reference/appeal",title:"Appeal",description:"JSON Representation",source:"@site/docs/reference/appeal.md",sourceDirName:"reference",slug:"/reference/appeal",permalink:"/guardian/docs/reference/appeal",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/reference/appeal.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"CLI",permalink:"/guardian/docs/reference/cli"},next:{title:"Policy",permalink:"/guardian/docs/reference/policy"}},p={},o=[{value:"JSON Representation",id:"json-representation",level:4},{value:"<code>Appeal</code>",id:"appeal-1",level:3},{value:"<code>Approval</code>",id:"approval",level:3}],m={toc:o};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"appeal"},"Appeal"),(0,r.kt)("h4",{id:"json-representation"},"JSON Representation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "resource_id": 1,\n  "resource": {\n    "id": 1,\n    "provider_type": "bigquery",\n    "provider_urn": "gcp-project-id",\n    "type": "dataset",\n    "urn": "gcp-project-id:dataset_name",\n    "name": "dataset_name",\n    "details": {\n      "owners": [\n        "owner@email.com",\n        "another.owner@email.com"\n      ],\n      ...\n    },\n    "labels": {\n      "key": "value"\n    },\n    "created_at": "2021-01-01T00:00:05.36851+07:00",\n    "updated_at": "2021-01-01T00:00:05.36851+07:00"\n  },\n  "role": "roles/viewer",\n  "options": {\n    "duration": "24h"\n  },\n  "details": {},\n  "approvals": [\n    {\n      "id": 1,\n      "name": "owner_approval",\n      "appeal_id": 1,\n      "status": "pending",\n      "policy_id": "test-policy",\n      "policy_version": 1,\n      "approvers": [\n        "john.doe@example.com"\n      ],\n      "created_at": "2021-10-26T09:29:48.838203Z",\n      "updated_at": "2021-10-26T09:29:48.838203Z"\n    }\n  ],\n  "policy_id": "test-policy",\n  "policy_version": 1,\n  "status": "pending",\n  "account_id": "user@email.com",\n  "account_type": "user",\n  "created_by": "user@email.com",\n  "creator": {\n    "id": 1,\n    "email": "user@email.com",\n    "full_name": "John Doe",\n    "manager_email": "manager@email.com",\n    ...\n  },\n  "created_at": "2021-10-26T09:29:48.838203Z",\n  "updated_at": "2021-10-26T09:29:48.838203Z",\n  "revoked_at": "0001-01-01T00:00:00Z"\n}\n')),(0,r.kt)("h3",{id:"appeal-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"Appeal")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unique identifier of appeal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resource_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Resource identifier.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"resource")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"/guardian/docs/reference/resource#resource-1"},(0,r.kt)("inlineCode",{parentName:"a"},"object(Resource)"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Complete resource information.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"role")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Permission type chosen by the creator to access the resource.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Options for the appeal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.duration")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"This field is for specifying how long the access would be granted until it automatically gets revoked by the system. Only time units like ",(0,r.kt)("inlineCode",{parentName:"td"},"h"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"m"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"s"),", and ",(0,r.kt)("inlineCode",{parentName:"td"},"ms")," are supported. Examples: ",(0,r.kt)("inlineCode",{parentName:"td"},"48h"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"48h30m"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"20m"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"options.expiration_date")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp for when the appeal will expire. This field is automatically filled by Guardian by calculating the activation time plus the ",(0,r.kt)("inlineCode",{parentName:"td"},"duration"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"details")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Additional information for the appeal. Details can be added from the appeal creation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"approvals")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#approval"},(0,r.kt)("inlineCode",{parentName:"a"},"[]object(Approval)"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Approval steps applied for current appeal based on the applicable policy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"policy_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Policy identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"policy_version")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Policy version identifier. Used together with ",(0,r.kt)("inlineCode",{parentName:"td"},"policy_id")," to reference to a policy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current status of the appeal. The initial status is ",(0,r.kt)("inlineCode",{parentName:"td"},"pending"),". If the appeal creator canceled/removed the appeal while its on pending, the status is become ",(0,r.kt)("inlineCode",{parentName:"td"},"canceled"),". After the approval steps completed, the status either become ",(0,r.kt)("inlineCode",{parentName:"td"},"active")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"rejected"),". And if it gets expired or an admin revoked the status become ",(0,r.kt)("inlineCode",{parentName:"td"},"terminated"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account_type")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Type of the account based on the Provider of the selected ",(0,r.kt)("inlineCode",{parentName:"td"},"resource"),". Default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"user"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"account_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"An account identifier related to ",(0,r.kt)("inlineCode",{parentName:"td"},"account_type")," that will get the permission to the targetted resource once the appeal is approved.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"created_by")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Email address of the appeal creator.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"creator")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"object")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Creator user details information fetched from the configured identity manager as in the ",(0,r.kt)("a",{parentName:"td",href:"/guardian/docs/reference/policy"},"Policy Config"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp when the appeal created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"updated_at")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp when the appeal last modified.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"revoked_at")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp when the appeal gets revoked.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"revoked_by")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Email address of the user who revoke the appeal.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"revoke_reason")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reason filled by the revoking user to inform the appeal creator why the appeal gets revoked.")))),(0,r.kt)("h3",{id:"approval"},(0,r.kt)("inlineCode",{parentName:"h3"},"Approval")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Approval step unique identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unique approval step name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"appeal_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Appeal identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"status")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"policy_id")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Policy identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"policy_version")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"uint")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Policy version identifier. Used together with ",(0,r.kt)("inlineCode",{parentName:"td"},"policy_id")," to reference to a policy.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"approvers")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"[]string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"List of email address of eligible approvers if require manual approval.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"actor")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Email address of the approver who resolve the status of current approval step.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"reason")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Rejection reason filled by the actor if they rejecting current approval step.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"created_at")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp when the appeal created.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"updated_at")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp when the appeal last modified.")))))}k.isMDXComponent=!0}}]);