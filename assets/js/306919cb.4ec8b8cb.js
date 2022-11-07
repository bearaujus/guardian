"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[825],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return s}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,g=u["".concat(d,".").concat(s)]||u[s]||k[s]||l;return n?a.createElement(g,i(i({ref:t},m),{},{components:n})):a.createElement(g,i({ref:t},m))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4480:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return l},metadata:function(){return o},toc:function(){return p}});var a=n(3117),r=(n(7294),n(3905));const l={},i="Configuration Reference",o={unversionedId:"reference/configuration",id:"reference/configuration",title:"Configuration Reference",description:"Client Configuration",source:"@site/docs/reference/configuration.md",sourceDirName:"reference",slug:"/reference/configuration",permalink:"/guardian/docs/reference/configuration",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/reference/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Glossary",permalink:"/guardian/docs/reference/glossary"},next:{title:"Architecture",permalink:"/guardian/docs/contribute/architecture"}},d={},p=[{value:"Client Configuration",id:"client-configuration",level:2},{value:"Server Configuration",id:"server-configuration",level:2},{value:"Config",id:"config",level:3},{value:"NotifierConfig",id:"notifierconfig",level:3},{value:"NotificationMessages",id:"notificationmessages",level:3},{value:"DatabaseConfig",id:"databaseconfig",level:3},{value:"Jobs",id:"jobs",level:3},{value:"JobConfig",id:"jobconfig",level:3},{value:"Using environment variables",id:"using-environment-variables",level:2}],m={toc:p};function k(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-reference"},"Configuration Reference"),(0,r.kt)("h2",{id:"client-configuration"},"Client Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'host: "localhost:8080"\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Guardian server host (",(0,r.kt)("inlineCode",{parentName:"td"},"<host>:<port>"),")")))),(0,r.kt)("h2",{id:"server-configuration"},"Server Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'port: 8080\nencryption_secret_key: "<secret-key>"\nnotifier:\n    provider: "slack"\n    access_token: "<slack-access-token>"\n    messages:\n        expiration_reminder: "Your access to {{.resource_name}} with role {{.role}} will expire at {{.expiration_date}}. Extend the access if it\'s still needed"\n        appeal_approved: "Your appeal to {{.resource_name}} with role {{.role}} has been approved"\n        appeal_rejected: "Your appeal to {{.resource_name}} with role {{.role}} has been rejected"\n        access_revoked: "Your access to {{.resource_name}}} with role {{.role}} has been revoked"\n        approver_notification: "You have an appeal created by {{.requestor}} requesting access to {{.resource_name}} with role {{.role}}. Appeal ID: {{.appeal_id}}"\n        others_appeal_approved: "Your appeal to {{.resource_name}} with role {{.role}} created by {{.requestor}} has been approved"\nlog_level: "info"\ndb:\n    host: "localhost"\n    user: "postgres"\n    password: ""\n    name: "postgres"\n    port: "5432"\n    sslmode: "disable"\n    log_level: "info"\nauthenticated_user_header_key: "X-Auth-Email"\naudit_log_trace_id_header_key: "X-Trace-Id"\njobs:\n    fetch_resources:\n        enabled: true\n        interval: "0 */2 * * *"\n    revoke_expired_grants:\n        enabled: true\n        interval: "*/20 * * * *"\n    expiring_grant_notification:\n        enabled: true\n        interval: "0 9 * * *"\n')),(0,r.kt)("h3",{id:"config"},"Config"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int")),(0,r.kt)("td",{parentName:"tr",align:null},"Server Listen Port  (eg: ",(0,r.kt)("inlineCode",{parentName:"td"},"8080"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"encryption_secret_key")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Encryption secret key encrypt and decrypt credentials")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"notifier")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#notifierconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"Object(NotifierConfig)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Notification Configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"log_level")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Log level (default: ",(0,r.kt)("inlineCode",{parentName:"td"},"info"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"db")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#databaseconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"Object(DatabaseConfig)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Database configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"authenticated_user_header_key")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Header key name for authenticated user (eg: ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Auth-Email"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"audit_log_trace_id_header_key")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Header key name for trace id (eg: ",(0,r.kt)("inlineCode",{parentName:"td"},"X-Trace-Id"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"jobs")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#jobs"},(0,r.kt)("inlineCode",{parentName:"a"},"Object(Jobs)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Server Jobs Configuration")))),(0,r.kt)("h3",{id:"notifierconfig"},"NotifierConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"provider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Provider for notification (Only ",(0,r.kt)("inlineCode",{parentName:"td"},"slack")," supported for now)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"access_token")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Access Token for notification provider (eg: slack access token)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"messages")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#notificationmessages"},(0,r.kt)("inlineCode",{parentName:"a"},"Object(NotificationMessages)"))),(0,r.kt)("td",{parentName:"tr",align:null},"Message templates configuration")))),(0,r.kt)("h3",{id:"notificationmessages"},"NotificationMessages"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expiration_reminder")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Message template for expiration reminder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appeal_approved")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Message template for appeal approved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"appeal_rejected")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Message template for appeal rejected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"access_revoked")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Message template for access revoked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"approver_notification")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Message template for approver notification")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"others_appeal_approved")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Message template for other appeal approved")))),(0,r.kt)("h3",{id:"databaseconfig"},"DatabaseConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"host")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Database host")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"user")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Database user")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"password")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Database password")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"name")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Database name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"port")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Database port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sslmode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Database sslmode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"log_level")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Database log_level")))),(0,r.kt)("h3",{id:"jobs"},"Jobs"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fetch_resources")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#jobconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"Object(JobConfig)"))),(0,r.kt)("td",{parentName:"tr",align:null},"When Enabled, the Guardian server fetches resources from the providers and updated the database.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"revoke_expired_grants")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#jobconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"Object(JobConfig)"))),(0,r.kt)("td",{parentName:"tr",align:null},"When Enabled, the Guardian server will revoke the user permissions for the resource")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"expiring_grant_notification")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"#jobconfig"},(0,r.kt)("inlineCode",{parentName:"a"},"Object(JobConfig)"))),(0,r.kt)("td",{parentName:"tr",align:null},"When Enabled, the Guardian server will notify the user on the notifier (currently slack only) before the user appeal is about to expire. The user gets notified before 7 days, 3 days and 1 day of appeal expiry")))),(0,r.kt)("h3",{id:"jobconfig"},"JobConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Job Enabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"interval")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Job interval (",(0,r.kt)("a",{parentName:"td",href:"https://crontab.guru"},"cron format"),", eg: ",(0,r.kt)("inlineCode",{parentName:"td"},"0 */2 * * *"),")")))),(0,r.kt)("h2",{id:"using-environment-variables"},"Using environment variables"),(0,r.kt)("p",null,"All the configs can be passed as environment variables using underscore _ as the delimiter between nested keys. See the following examples"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Configuration key"),(0,r.kt)("th",{parentName:"tr",align:null},"Environment variable"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"notifier.provider")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"NOTIFIER_PROVIDER"))))),(0,r.kt)("p",null,"Set the env variable using export"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export NOTIFIER_PROVIDER=slack\n")))}k.isMDXComponent=!0}}]);