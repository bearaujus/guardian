"use strict";(self.webpackChunkguardian=self.webpackChunkguardian||[]).push([[182],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8591:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=n(3117),a=(n(7294),n(3905));const i={},o="Setup server",l={unversionedId:"tour/configuration",id:"tour/configuration",title:"Setup server",description:"Guardian binary contains both the CLI client and the server itself. Each has it's own configuration in order to run. Server configuration contains information such as database credentials, log severity, etc. while CLI client configuration only has configuration about which server to connect.",source:"@site/docs/tour/configuration.md",sourceDirName:"tour",slug:"/tour/configuration",permalink:"/guardian/docs/tour/configuration",draft:!1,editUrl:"https://github.com/odpf/guardian/edit/master/docs/docs/tour/configuration.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Introduction",permalink:"/guardian/docs/tour/introduction"},next:{title:"Create a policy",permalink:"/guardian/docs/tour/create-policy"}},u={},s=[{value:"Server",id:"server",level:2},{value:"Pre-requisites",id:"pre-requisites",level:4},{value:"Initialization",id:"initialization",level:4},{value:"Starting the server",id:"starting-the-server",level:4},{value:"Using <code>--config</code> flag",id:"using---config-flag",level:5},{value:"Using environment variables",id:"using-environment-variables",level:5},{value:"CLI Client",id:"cli-client",level:2},{value:"Initialization",id:"initialization-1",level:3}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"setup-server"},"Setup server"),(0,a.kt)("p",null,"Guardian binary contains both the CLI client and the server itself. Each has it's own configuration in order to run. Server configuration contains information such as database credentials, log severity, etc. while CLI client configuration only has configuration about which server to connect."),(0,a.kt)("h2",{id:"server"},"Server"),(0,a.kt)("h4",{id:"pre-requisites"},"Pre-requisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Postgres"),(0,a.kt)("li",{parentName:"ul"},"Slackbot access token for notification (optional)")),(0,a.kt)("h4",{id:"initialization"},"Initialization"),(0,a.kt)("p",null,"Create a config.yaml file (",(0,a.kt)("inlineCode",{parentName:"p"},"touch config.yaml"),") in the root folder of guardian project or ",(0,a.kt)("a",{parentName:"p",href:"#using---config-flag"},"use ",(0,a.kt)("inlineCode",{parentName:"a"},"--config")," flag")," to customize to config file location, or you can also ",(0,a.kt)("a",{parentName:"p",href:"#using-environment-variables"},"use environment variables")," to provide the server config. Setup up a database in postgres and provide the details in the DB field as given in the example below. For the purpose of this tutorial, we'll assume that the username is ",(0,a.kt)("inlineCode",{parentName:"p"},"your_user"),", database name is ",(0,a.kt)("inlineCode",{parentName:"p"},"guardian"),", host and port are ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"5432"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you're new to YAML and want to learn more, see ",(0,a.kt)("a",{parentName:"p",href:"https://learnxinyminutes.com/docs/yaml/"},"Learn YAML in Y minutes."))),(0,a.kt)("p",null,"Following is a sample server configuration yaml:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"PORT: 3000\nLOG:\n  LEVEL: info # debug|info|warning|error|fatal - default: info\nDB:\n  HOST: localhost\n  USER: your_user\n  PASSWORD: your_password\n  NAME: guardian\n  PORT: 5432\nNOTIFIER:\n  PROVIDER: slack\n  ACCESS_TOKEN: <slack-access-token>\n  ...\nAUTHENTICATED_USER_HEADER_KEY: X-Auth-Email\nJOBS:\n  FETCH_RESOURCES:\n    ENABLED: true\n    INTERVAL: '0 */2 * * *'  #\"At minute 0 past every 2nd hour\"\n  REVOKE_EXPIRED_ACCESS:\n    ENABLED: true\n    INTERVAL: '*/20 * * * *'  #\u201cAt every 20th minute\"\n  EXPIRING_ACCESS_NOTIFICATION:\n    ENABLED: true\n    INTERVAL: '0 9 * * *' #\"At minute 0 past hour 9\"\n")),(0,a.kt)("h4",{id:"starting-the-server"},"Starting the server"),(0,a.kt)("p",null,"Database migration is required during the first server initialization. In addition, re-running the migration command might be needed in a new release to apply the new schema changes (if any). It's safer to always re-run the migration script before deploying/starting a new release."),(0,a.kt)("p",null,"To initialize the database schema, Run Migrations with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ guardian server migrate\n")),(0,a.kt)("p",null,"To run the Guardian server use command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ guardian server start\n")),(0,a.kt)("h5",{id:"using---config-flag"},"Using ",(0,a.kt)("inlineCode",{parentName:"h5"},"--config")," flag"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ guardian server migrate --config=<path-to-file>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ guardian server start --config=<path-to-file>\n")),(0,a.kt)("h5",{id:"using-environment-variables"},"Using environment variables"),(0,a.kt)("p",null,"All the configs can be passed as environment variables using underscore ",(0,a.kt)("inlineCode",{parentName:"p"},"_")," as the delimiter between nested keys. See the following examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"PORT: 8080\nDB:\n  HOST: localhost\n  USER: test\n")),(0,a.kt)("p",null,"Here is the corresponding environment variable for the above"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Configuration key"),(0,a.kt)("th",{parentName:"tr",align:null},"Environment variable"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PORT"),(0,a.kt)("td",{parentName:"tr",align:null},"PORT")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DB.HOST"),(0,a.kt)("td",{parentName:"tr",align:null},"DB_HOST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DB.USER"),(0,a.kt)("td",{parentName:"tr",align:null},"DB_USER")))),(0,a.kt)("p",null,"Set the env variable using export"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ export PORT=8080\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"cli-client"},"CLI Client"),(0,a.kt)("h3",{id:"initialization-1"},"Initialization"),(0,a.kt)("p",null,"Guardian CLI supports CLI client to communicate with a Guardian server. To initialize the client configuration, run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ guardian config init\n")),(0,a.kt)("p",null,"A yaml file will be created in the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.config/odpf/guardian.yaml")," directory. Open this file to configure the host for Guardian server as in the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'host: "localhost:8080"\n')))}p.isMDXComponent=!0}}]);