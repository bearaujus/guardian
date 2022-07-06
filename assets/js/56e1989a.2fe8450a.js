"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[212],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(6010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(3117),a=n(7294),o=n(6010),l=n(2389),i=n(7392),u=n(7094),c=n(2466),s="tabList__CuJ",p="tabItem_LNqP";function d(e){var t,n;const{lazy:l,block:d,defaultValue:m,values:f,groupId:y,className:v}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=f?f:g.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),b=(0,i.l)(h,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(n=g.find((e=>e.props.default)))?void 0:n.props.value)?t:g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,u.U)(),[O,T]=(0,a.useState)(k),P=[],{blockElementScrollPositionUntilNextRender:C}=(0,c.o5)();if(null!=y){const e=w[y];null!=e&&e!==O&&h.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=P.indexOf(t),r=h[n].value;r!==O&&(C(t),T(r),null!=y&&N(y,String(r)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var r;const t=P.indexOf(e.currentTarget)+1;n=null!=(r=P[t])?r:P[0];break}case"ArrowLeft":{var a;const t=P.indexOf(e.currentTarget)-1;n=null!=(a=P[t])?a:P[P.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":d},v)},h.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>P.push(e),onKeyDown:x,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),l?(0,a.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},6624:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p}});var r=n(3117),a=(n(7294),n(3905)),o=n(5488),l=n(5162);const i={},u="Create a policy",c={unversionedId:"guides/create-policy",id:"guides/create-policy",title:"Create a policy",description:"Pre-Requisites",source:"@site/docs/guides/create-policy.md",sourceDirName:"guides",slug:"/guides/create-policy",permalink:"/guardian/docs/guides/create-policy",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/guides/create-policy.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Configure client",permalink:"/guardian/docs/guides/configuration"},next:{title:"Create a provider",permalink:"/guardian/docs/guides/create-provider"}},s={},p=[{value:"Pre-Requisites",id:"pre-requisites",level:3},{value:"Example Policy",id:"example-policy",level:3},{value:"Policies can be created in the following ways:",id:"policies-can-be-created-in-the-following-ways",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-a-policy"},"Create a policy"),(0,a.kt)("h3",{id:"pre-requisites"},"Pre-Requisites"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guardian/docs/guides/configuration#starting-the-server"},"Setting up server")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/guardian/docs/guides/configuration#client-configuration"},"Setting up the CLI")," (if you want to create policy using CLI)")),(0,a.kt)("h3",{id:"example-policy"},"Example Policy"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"id: my-first-policy\nsteps:\n  - name: resource_owner_approval\n    description: approval from resource owner\n    strategy: manual\n    approvers:\n      - $appeal.resource.details.owner\n  - name: admin_approval\n    description: approval from admin (John Doe)\n    strategy: manual\n    approvers:\n      - john.doe@company.com\n")),(0,a.kt)("p",null,"Check ",(0,a.kt)("a",{parentName:"p",href:"/guardian/docs/reference/policy"},"policy reference")," for more details on the policy configuration.",(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Explanation of this Policy example"),(0,a.kt)("br",null),"\nWhen a Guardian user creates an appeal to the BigQuery resource (Playground here), this policy will applied, and the approvals required to approve that appeal are in the order as follows: ",(0,a.kt)("br",null)),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Approval from the resource owner ( this information is contained in the resource details object), and"),(0,a.kt)("li",{parentName:"ol"},"Approval from John Doe as an admin")),(0,a.kt)("h4",{id:"policies-can-be-created-in-the-following-ways"},"Policies can be created in the following ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Using ",(0,a.kt)("inlineCode",{parentName:"li"},"guardian policy create")," CLI command"),(0,a.kt)("li",{parentName:"ol"},"Calling to ",(0,a.kt)("inlineCode",{parentName:"li"},"POST /api/v1beta1/policies")," API")),(0,a.kt)(o.Z,{groupId:"api",mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"cli",label:"CLI",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ guardian policy create --file=<path to the policy.yaml file>\n"))),(0,a.kt)(l.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl --request POST \'{{HOST}}/api/v1beta1/policies\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n  "id": "my-first-policy",\n  "steps": [\n    {\n      "name": "resource_owner_approval",\n      "description": "Approval from Resource owner",\n      "strategy": "manual",\n      "approvers": [\n        "$appeal.resource.details.owner"\n      ]\n    },\n    {\n      "name": "admin_approval",\n      "description": "Approval from the Admin (John Doe)",\n      "strategy": "manual",\n      "approvers": [\n        "john.doe@company.com"\n      ]\n    }\n  ]\n}\'\n')))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," : For using the CLI tool, create a Policy.yaml file using the example configurations shown above and provide the path to it here."))}m.isMDXComponent=!0}}]);