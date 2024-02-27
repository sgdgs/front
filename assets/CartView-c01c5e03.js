import{_ as P,Y as A,Z as D,x,o as C,A as N,a1 as $,a2 as n,ak as T,a4 as j,a6 as k,c,a0 as g,ac as d,J as p,aa as b,aj as V,ah as E,ai as J}from"./index-55e1d8e3.js";import{V as L}from"./VContainer-a7985239.js";import{V as v}from"./VCol-da2a5a46.js";import{V as M}from"./VDivider-d1e2d646.js";import{V as R}from"./VDataTable-504fb0b8.js";import"./VSelect-8e7f3da9.js";import"./VList-c78d230e.js";import"./VListItem-ee01f886.js";import"./VMenu-4d3f5a01.js";const U=u=>(E("data-v-92372ef9"),u=u(),J(),u),Y=U(()=>V("h1",null,"購物車",-1)),Z={key:0},z={key:1,class:"text-red text-decoration-line-through"},F={__name:"CartView",setup(u){const{apiAuth:m}=T(),r=A(),_=D(),y=j(),o=x([]),w=[{title:"商品名稱",key:"product.name"},{title:"單價",key:"product.price"},{title:"數量",key:"quantity"},{title:"總價",key:"total",value:e=>e.product.price*e.quantity},{title:"操作",key:"action"}],B=C(()=>o.value.reduce((e,a)=>e+a.quantity*a.product.price,0)),q=C(()=>o.value.length>0&&!o.value.some(e=>!e.product.sell)),h=async(e,a)=>{var t,s;if(!_.isLogin){y.push("/login");return}try{const{data:l}=await m.patch("/users/cart",{product:e,quantity:a});_.cart=l.result,r({text:"修改成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}});const i=o.value.findIndex(I=>I.product._id===e);o.value[i].quantity+=a,o.value[i].quantity<=0&&o.value.splice(i,1)}catch(l){const i=((s=(t=l==null?void 0:l.response)==null?void 0:t.data)==null?void 0:s.message)||"發生錯誤，請稍後再試";r({text:i,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},f=x(!1),S=async()=>{var e,a;f.value=!0;try{await m.post("/orders"),_.cart=0,y.push("/orders"),r({text:"結帳成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(t){const s=((a=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";r({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}f.value=!1};return N(async()=>{var e,a;try{const{data:t}=await m.get("/users/cart");o.value.push(...t.result)}catch(t){const s=((a=(e=t==null?void 0:t.response)==null?void 0:e.data)==null?void 0:a.message)||"發生錯誤，請稍後再試";r({text:s,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(e,a)=>(k(),$(L,null,{default:n(()=>[c(v,{cols:"12"},{default:n(()=>[Y]),_:1}),c(M),c(v,{cols:"12"},{default:n(()=>[c(R,{class:"cart",items:o.value,headers:w},{"item.product.name":n(({item:t})=>[t.product.sell?(k(),g("span",Z,d(t.product.name),1)):(k(),g("span",z,d(t.product.name)+" (已下架)",1))]),"item.quantity":n(({item:t})=>[c(p,{variant:"text",icon:"mdi-minus",color:"red",onClick:s=>h(t.product._id,-1)},null,8,["onClick"]),b(d(t.quantity),1),c(p,{variant:"text",icon:"mdi-plus",color:"green",onClick:s=>h(t.product._id,1)},null,8,["onClick"])]),"item.action":n(({item:t})=>[c(p,{variant:"text",icon:"mdi-delete",color:"red",onClick:s=>h(t.product._id,t.quantity*-1)},null,8,["onClick"])]),_:2},1032,["items"])]),_:1}),c(v,{class:"text-center",cols:"12"},{default:n(()=>[V("p",null,"總金額: "+d(B.value),1),c(p,{color:"green",disabled:!q.value,loading:f.value,onClick:S},{default:n(()=>[b("結帳")]),_:1},8,["disabled","loading"])]),_:1})]),_:1}))}},at=P(F,[["__scopeId","data-v-92372ef9"]]);export{at as default};
