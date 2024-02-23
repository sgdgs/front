import{Y as f,x as y,A as V,a1 as k,a2 as e,ag as h,a7 as c,c as s,aa as g,ac as l,af as d,a0 as n,a8 as x,a4 as w}from"./index-c1328633.js";import{V as A}from"./VContainer-dd25e81d.js";import{V as u}from"./VCol-e88e5278.js";import{V as b}from"./VDataTable-014e919b.js";import{V as B}from"./VRow-131c1eee.js";import"./VSelect-480fcec3.js";import"./VList-a4873e6d.js";import"./VListItem-eb231abf.js";import"./VDivider-bf99821d.js";import"./VMenu-ec5508f7.js";const C=d("h1",{style:{"text-align":"center"}},"訂單管理",-1),P={__name:"OrdersView",setup(v){const{apiAuth:m}=h(),p=f(),i=y([]),_=[{title:"訂單編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt"},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:a=>a.cart.reduce((r,t)=>r+t.quantity*t.product.price,0)}];return V(async()=>{var a,r;try{const{data:t}=await m.get("/orders/all");i.value.push(...t.result)}catch(t){const o=((r=(a=t==null?void 0:t.response)==null?void 0:a.data)==null?void 0:r.message)||"發生錯誤，請稍後再試";p({text:o,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(a,r)=>(c(),k(A,null,{default:e(()=>[s(B,null,{default:e(()=>[s(u,{cols:"12"},{default:e(()=>[C]),_:1}),s(u,{cols:"12"},{default:e(()=>[s(b,{items:i.value,headers:_},{"item.createdAt":e(({item:t})=>[g(l(new Date(t.createdAt).toLocaleString()),1)]),"item.cart":e(({item:t})=>[d("ul",null,[(c(!0),n(w,null,x(t.cart,o=>(c(),n("li",{key:o._id},l(o.product.name)+" * "+l(o.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};export{P as default};
