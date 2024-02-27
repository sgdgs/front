import{_ as k,Y as B,Z as C,a2 as I,a3 as s,ak as F,a6 as L,a8 as N,c as e,aa as a,av as M,aw as _,J as U,ab as q,ae as P,af as R,a1 as m}from"./index-b165e33f.js";import{_ as T}from"./dog-10f6f195.js";import{c as $,a as f,u as A,d as V}from"./index.esm-9ba7d807.js";import{V as D}from"./VContainer-ff0ca106.js";import{V as i}from"./VCol-030c10d2.js";import{V as G}from"./VDivider-e41fb7b6.js";import{V as J}from"./VForm-456cee08.js";import{V as O}from"./VRow-e917330c.js";const d=l=>(P("data-v-fc217ce8"),l=l(),R(),l),Y=d(()=>m("h1",null,"LOGIN",-1)),Z=d(()=>m("p",null,"login your account with username and password",-1)),j=d(()=>m("img",{src:T,width:"100%"},null,-1)),z={__name:"LoginView",setup(l){const{api:g}=F(),w=L(),p=B(),h=C(),b=$({account:f().required("帳號為必填欄位").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符"),password:f().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符")}),{handleSubmit:v,isSubmitting:x}=A({validationSchema:b}),n=V("account"),u=V("password"),S=v(async c=>{var o,t;try{const{data:r}=await g.post("/users/login",{account:c.account,password:c.password});h.login(r.result),p({text:"登入成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),w.push("/")}catch(r){console.log(r);const y=((t=(o=r==null?void 0:r.response)==null?void 0:o.data)==null?void 0:t.message)||"發生錯誤，請稍後再試";p({text:y,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(c,o)=>(N(),I(D,null,{default:s(()=>[e(O,null,{default:s(()=>[e(i,{cols:"12",sm:"6"},{default:s(()=>[Y,Z]),_:1}),e(G),e(i,{cols:"12",sm:"6"},{default:s(()=>[e(J,{disabled:a(x),onSubmit:M(a(S),["prevent"])},{default:s(()=>[e(_,{label:"帳號",minlength:"4",maxlength:"20",counter:"",modelValue:a(n).value.value,"onUpdate:modelValue":o[0]||(o[0]=t=>a(n).value.value=t),"error-messages":a(n).errorMessage.value},null,8,["modelValue","error-messages"]),e(_,{label:"密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:a(u).value.value,"onUpdate:modelValue":o[1]||(o[1]=t=>a(u).value.value=t),"error-messages":a(u).errorMessage.value},null,8,["modelValue","error-messages"]),e(U,{type:"submit",color:"brown-lighten-2"},{default:s(()=>[q("登入")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:s(()=>[j]),_:1})]),_:1})]),_:1}))}},oe=k(z,[["__scopeId","data-v-fc217ce8"]]);export{oe as default};