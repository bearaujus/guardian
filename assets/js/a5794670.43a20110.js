"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[405],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(r),m=n,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?a.createElement(f,l(l({ref:t},c),{},{components:r})):a.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=p;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,l[1]=u;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return l}});var a=r(7294),n=r(6010),o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(3117),n=r(7294),o=r(6010),l=r(2389),u=r(7392),i=r(7094),s=r(2466),c="tabList__CuJ",d="tabItem_LNqP";function p(e){var t,r;const{lazy:l,block:p,defaultValue:m,values:f,groupId:g,className:b}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:h.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),y=(0,u.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const k=null===m?m:null!=(t=null!=m?m:null==(r=h.find((e=>e.props.default)))?void 0:r.props.value)?t:h[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:w}=(0,i.U)(),[N,C]=(0,n.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,s.o5)();if(null!=g){const e=T[g];null!=e&&e!==N&&v.some((t=>t.value===e))&&C(e)}const E=e=>{const t=e.currentTarget,r=O.indexOf(t),a=v[r].value;a!==N&&(x(t),C(a),null!=g&&w(g,String(a)))},I=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;r=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var n;const t=O.indexOf(e.currentTarget)-1;r=null!=(n=O[t])?n:O[O.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":p},b)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:E,onClick:E},l,{className:(0,o.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":N===t})}),null!=r?r:t)}))),l?(0,n.cloneElement)(h.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,l.Z)();return n.createElement(p,(0,a.Z)({key:String(t)},e))}},6155:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return d}});var a=r(3117),n=(r(7294),r(3905)),o=r(5488),l=r(5162);const u={},i="Update Resource Metadata",s={unversionedId:"guides/update-resource",id:"guides/update-resource",title:"Update Resource Metadata",description:"We will try to update a resource information in this example exercise. Let's say we want to add owner's information to the playground dataset.",source:"@site/docs/guides/update-resource.md",sourceDirName:"guides",slug:"/guides/update-resource",permalink:"/guardian/docs/guides/update-resource",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/guides/update-resource.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Create BigQuery Provider",permalink:"/guardian/docs/guides/create-provider"},next:{title:"Create Your First Appeal",permalink:"/guardian/docs/guides/create-appeal"}},c={},d=[{value:"Getting the <code>resource_id</code> for the resource:",id:"getting-the-resource_id-for-the-resource",level:4}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"update-resource-metadata"},"Update Resource Metadata"),(0,n.kt)("p",null,"We will try to update a resource information in this example exercise. Let's say we want to add owner's information to the ",(0,n.kt)("inlineCode",{parentName:"p"},"playground")," dataset."),(0,n.kt)("p",null,"To update the resource metadata we will need it's id which is generated when the Provider registered it on the Guardian. First we need to check the ",(0,n.kt)("inlineCode",{parentName:"p"},"resource_id")," of that ",(0,n.kt)("inlineCode",{parentName:"p"},"playground")," dataset."),(0,n.kt)("p",null,"To get the list of all the resources use any of the following methods:"),(0,n.kt)("h4",{id:"getting-the-resource_id-for-the-resource"},"Getting the ",(0,n.kt)("inlineCode",{parentName:"h4"},"resource_id")," for the resource:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using ",(0,n.kt)("inlineCode",{parentName:"li"},"guardian resource list")," CLI command"),(0,n.kt)("li",{parentName:"ol"},"Calling to ",(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/v1beta1/resources")," API")),(0,n.kt)(o.Z,{groupId:"api",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"cli",label:"CLI",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ guardian resource list --output=yaml\n"))),(0,n.kt)(l.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl --request GET '{{HOST}}/api/v1beta1/resources'\n")))),(0,n.kt)("p",null,"You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"resource_id")," to get the resource details by any of the following commands:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using ",(0,n.kt)("inlineCode",{parentName:"li"},"guardian resource view")," CLI command"),(0,n.kt)("li",{parentName:"ol"},"Calling to ",(0,n.kt)("inlineCode",{parentName:"li"},"GET /api/v1beta1/resources/:id")," API")),(0,n.kt)(o.Z,{groupId:"api",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"cli",label:"CLI",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ guardian resource view {{resource_id}}\n"))),(0,n.kt)(l.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl --request GET '{{HOST}}/api/v1beta1/resources/{{resource_id}}'\n")))),(0,n.kt)("p",null,"To update the resource metadata with this information add this to the resource file or request body"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"details:\n  owner: owner.guy@company.com\n")),(0,n.kt)("p",null,"Use any of these commands to update the owner details:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Using ",(0,n.kt)("inlineCode",{parentName:"li"},"guardian resource set")," CLI command"),(0,n.kt)("li",{parentName:"ol"},"Calling to ",(0,n.kt)("inlineCode",{parentName:"li"},"PUT /api/v1beta1/resources/:id")," API")),(0,n.kt)(o.Z,{groupId:"api",mdxType:"Tabs"},(0,n.kt)(l.Z,{value:"cli",label:"CLI",default:!0,mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ guardian resource set <resource_id> -f resource.yaml\n"))),(0,n.kt)(l.Z,{value:"http",label:"HTTP",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl --request PUT '{{HOST}}/api/v1beta1/resources/{{resource_id}}' \\\n--header 'Content-Type: application/json' \\\n--data-raw '{\n    \"details\": {\n        \"owner\": \"owner.guy@company.com\"\n    }\n}'\n")))))}m.isMDXComponent=!0}}]);