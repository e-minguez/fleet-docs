"use strict";(self.webpackChunkfleet_docs=self.webpackChunkfleet_docs||[]).push([[9246],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,d=u["".concat(c,".").concat(g)]||u[g]||p[g]||l;return n?r.createElement(d,o(o({ref:t},f),{},{components:n})):r.createElement(d,o({ref:t},f))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={title:"",sidebar_label:"fleet-agent"},o=void 0,i={unversionedId:"cli/fleet-agent/fleet-agent",id:"cli/fleet-agent/fleet-agent",title:"",description:"fleet-agent",source:"@site/docs/cli/fleet-agent/fleet-agent.md",sourceDirName:"cli/fleet-agent",slug:"/cli/fleet-agent/",permalink:"/next/cli/fleet-agent/",draft:!1,editUrl:"https://github.com/rancher/fleet-docs/edit/main/docs/cli/fleet-agent/fleet-agent.md",tags:[],version:"current",lastUpdatedAt:1669632380,formattedLastUpdatedAt:"Nov 28, 2022",frontMatter:{title:"",sidebar_label:"fleet-agent"},sidebar:"docs",previous:{title:"Registration",permalink:"/next/ref-registration"},next:{title:"fleet",permalink:"/next/cli/fleet-cli/fleet"}},c={},s=[{value:"fleet-agent",id:"fleet-agent",level:2},{value:"Options",id:"options",level:3}],f={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fleet-agent"},"fleet-agent"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"fleet-agent [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --agent-scope string        An identifier used to scope the agent bundleID names, typically the same as namespace\n      --checkin-interval string   How often to post cluster status\n      --debug                     Turn on debug logging\n      --debug-level int           If debugging is enabled, set klog -v=X\n  -h, --help                      help for fleet-agent\n      --kubeconfig string         kubeconfig file\n      --namespace string          namespace to watch\n      --simulators int            Numbers of simulators to run\n")))}p.isMDXComponent=!0}}]);