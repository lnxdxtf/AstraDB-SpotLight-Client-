import{k as d,A as p}from"./AstraLoader-5261a72d.js";import{_ as u,o as s,c as t,a as e,F as r,r as c,b as _,t as l,d as f}from"./index-43c54b6c.js";const m={mixins:[d],components:{AstraLoader:p}},x={key:0,class:"w-full-h-full flex flex-col gap-10"},h=e("div",{class:"w-full flex justify-center text-white font-bold text-3xl p-4"},"KEYSPACES",-1),g={class:"grid grid-cols-4 p-4 gap-4 rounded-md text-white"},v=["onClick"],y={class:"flex w-full justify-center text-xl font-bold"},k={class:"flex flex-col gap-2 rounded-md p-2 bg-astra-quaternary"},A={class:"w-full flex gap-5 items-center"},C=e("span",null,"DATACENTER",-1),w={class:"w-full flex gap-5 items-center"},$=e("span",null,"REPLICAS",-1);function b(a,E,S,L,B,K){const i=f("AstraLoader");return s(),t("div",null,[a.$astraClient.loading?(s(),_(i,{key:1})):(s(),t("div",x,[h,e("div",g,[(s(!0),t(r,null,c(a.$astraClient.keySpaces,o=>(s(),t("div",{onClick:n=>a.setKeySpace(o.name),class:"flex flex-col gap-4 p-4 rounded-md bg-astra-tertiary hover:scale-105 hover:bg-astra-secondary cursor-pointer"},[e("div",y,l(o.name),1),(s(!0),t(r,null,c(o.datacenters,n=>(s(),t("div",k,[e("div",A,[C,e("span",null,l(n.name),1)]),e("div",w,[$,e("span",null,l(n.replicas),1)])]))),256))],8,v))),256))])]))])}const F=u(m,[["render",b]]);export{F as default};
