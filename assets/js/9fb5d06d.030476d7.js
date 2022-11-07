"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[837],{3905:function(e,a,t){t.d(a,{Zo:function(){return c},kt:function(){return m}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=r.createContext({}),i=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},c=function(e){var a=i(e.components);return r.createElement(u.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},d=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=i(t),m=n,v=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return t?r.createElement(v,p(p({ref:a},c),{},{components:t})):r.createElement(v,p({ref:a},c))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,p=new Array(l);p[0]=d;var o={};for(var u in a)hasOwnProperty.call(a,u)&&(o[u]=a[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var i=2;i<l;i++)p[i]=t[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:function(e,a,t){t.d(a,{Z:function(){return p}});var r=t(7294),n=t(6010),l="tabItem_Ymn6";function p(e){let{children:a,hidden:t,className:p}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,p),hidden:t},a)}},5488:function(e,a,t){t.d(a,{Z:function(){return m}});var r=t(3117),n=t(7294),l=t(6010),p=t(2389),o=t(7392),u=t(7094),i=t(2466),c="tabList__CuJ",s="tabItem_LNqP";function d(e){var a,t;const{lazy:p,block:d,defaultValue:m,values:v,groupId:f,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=v?v:h.map((e=>{let{props:{value:a,label:t,attributes:r}}=e;return{value:a,label:t,attributes:r}})),y=(0,o.l)(g,((e,a)=>e.value===a.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const j=null===m?m:null!=(a=null!=m?m:null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)?a:h[0].props.value;if(null!==j&&!g.some((e=>e.value===j)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+j+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:w}=(0,u.U)(),[O,T]=(0,n.useState)(j),N=[],{blockElementScrollPositionUntilNextRender:E}=(0,i.o5)();if(null!=f){const e=k[f];null!=e&&e!==O&&g.some((a=>a.value===e))&&T(e)}const _=e=>{const a=e.currentTarget,t=N.indexOf(a),r=g[t].value;r!==O&&(E(a),T(r),null!=f&&w(f,String(r)))},A=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{var r;const a=N.indexOf(e.currentTarget)+1;t=null!=(r=N[a])?r:N[0];break}case"ArrowLeft":{var n;const a=N.indexOf(e.currentTarget)-1;t=null!=(n=N[a])?n:N[N.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},g.map((e=>{let{value:a,label:t,attributes:p}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===a?0:-1,"aria-selected":O===a,key:a,ref:e=>N.push(e),onKeyDown:A,onFocus:_,onClick:_},p,{className:(0,l.Z)("tabs__item",s,null==p?void 0:p.className,{"tabs__item--active":O===a})}),null!=t?t:a)}))),p?(0,n.cloneElement)(h.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==O})))))}function m(e){const a=(0,p.Z)();return n.createElement(d,(0,r.Z)({key:String(a)},e))}},3721:function(e,a,t){t.r(a),t.d(a,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return s}});var r=t(3117),n=(t(7294),t(3905)),l=t(5488),p=t(5162);const o={},u="Manage appeal",i={unversionedId:"tour/approve-reject-appeal",id:"tour/approve-reject-appeal",title:"Manage appeal",description:"Note: Approve/reject still not supported from the CLI currently.",source:"@site/docs/tour/approve-reject-appeal.md",sourceDirName:"tour",slug:"/tour/approve-reject-appeal",permalink:"/guardian/docs/tour/approve-reject-appeal",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/tour/approve-reject-appeal.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Create an appeal",permalink:"/guardian/docs/tour/create-appeal"},next:{title:"Update policy rules",permalink:"/guardian/docs/tour/complex-use-case"}},c={},s=[{value:"Appeals can be approved/rejected in the following ways:",id:"appeals-can-be-approvedrejected-in-the-following-ways",level:4},{value:"Approve an Appeal",id:"approve-an-appeal",level:4},{value:"Reject an Appeal",id:"reject-an-appeal",level:4},{value:"Approve an Appeal",id:"approve-an-appeal-1",level:4},{value:"Reject an Appeal",id:"reject-an-appeal-1",level:4}],d={toc:s};function m(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"manage-appeal"},"Manage appeal"),(0,n.kt)("p",null,"Note: Approve/reject still not supported from the CLI currently."),(0,n.kt)("h4",{id:"appeals-can-be-approvedrejected-in-the-following-ways"},"Appeals can be approved/rejected in the following ways:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using ",(0,n.kt)("inlineCode",{parentName:"li"},"guardian appeal approve/reject")," CLI command"),(0,n.kt)("li",{parentName:"ol"},"Calling to ",(0,n.kt)("inlineCode",{parentName:"li"},"POST /api/v1beta1/appeals/:id/approvals/:approval_step_name/")," API")),(0,n.kt)(l.Z,{groupId:"api",mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"cli",label:"CLI",default:!0,mdxType:"TabItem"},(0,n.kt)("h4",{id:"approve-an-appeal"},"Approve an Appeal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ guardian appeal approve --id={{appeal_id}} --step={{approval_step_name}}\n")),(0,n.kt)("h4",{id:"reject-an-appeal"},"Reject an Appeal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ guardian appeal reject --id={{appeal_id}} --step={{approval_step_name}} --reason={{rejection_message}}\n"))),(0,n.kt)(p.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,n.kt)("h4",{id:"approve-an-appeal-1"},"Approve an Appeal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl --request POST '{{HOST}}/api/v1beta1/appeals/{{appeal_id}}/approvals/{{approval_step_name}}' \\\n--header 'X-Auth-Email: user@example.com' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"action\": \"approve\"\n}'\n")),(0,n.kt)("h4",{id:"reject-an-appeal-1"},"Reject an Appeal"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl --request POST '{{HOST}}/api/v1beta1/appeals/{{appeal_id}}/approvals/{{approval_step_name}}' \\\n--header 'X-Auth-Email: user@example.com' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"action\": \"reject\",\n    \"reason\": \"{{rejection_message}}\"\n}'\n")))))}m.isMDXComponent=!0}}]);