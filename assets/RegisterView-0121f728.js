import{_ as R,Y as k,a1 as B,a2 as t,ak as I,a4 as M,a6 as q,c as s,a9 as e,av as E,aw as n,J as F,aa as U,ah as N,ai as T,aj as g}from"./index-55e1d8e3.js";import{_ as $}from"./dog-10f6f195.js";import{v as P}from"./index-613389ce.js";import{c as j,a as m,b as A,u as D,d as i}from"./index.esm-0a7be430.js";import{V as G}from"./VContainer-a7985239.js";import{V as f}from"./VCol-da2a5a46.js";import{V as J}from"./VDivider-d1e2d646.js";import{V as O}from"./VForm-267f3c06.js";import{V as Y}from"./VRow-6cc5406a.js";const V=l=>(N("data-v-b8880f0c"),l=l(),T(),l),z=V(()=>g("h1",null,"REGISTER",-1)),H=V(()=>g("p",null,"Register your account with username, email and password",-1)),K=V(()=>g("img",{src:$,alt:"註冊圖片",width:"100%"},null,-1)),L={__name:"RegisterView",setup(l){const{api:w}=I(),b=M(),v=k(),h=j({account:m().required("帳號為必填欄位").min(4,"使用者帳號長度不符").max(20,"使用者帳號長度不符"),email:m().required("信箱為必填欄位").test("isEmail","信箱格式錯誤",r=>P.isEmail(r)),password:m().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符"),passwordConfirm:m().required("密碼為必填欄位").min(4,"密碼長度不符").max(20,"密碼長度不符").oneOf([A("password")],"密碼不一致")}),{handleSubmit:x,isSubmitting:S}=D({validationSchema:h}),d=i("account"),c=i("email"),p=i("password"),_=i("passwordConfirm"),y=x(async r=>{var a,o;try{await w.post("/users",{account:r.account,email:r.email,password:r.password}),v({text:"註冊成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),b.push("/login")}catch(u){console.log(u);const C=((o=(a=u==null?void 0:u.response)==null?void 0:a.data)==null?void 0:o.message)||"發生錯誤，請稍後再試";v({text:C,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}});return(r,a)=>(q(),B(G,null,{default:t(()=>[s(Y,null,{default:t(()=>[s(f,{cols:"12",sm:"6"},{default:t(()=>[z,H]),_:1}),s(J),s(f,{cols:"12",sm:"6"},{default:t(()=>[s(O,{disabled:e(S),onSubmit:E(e(y),["prevent"])},{default:t(()=>[s(n,{label:"帳號",minlength:"4",maxlength:"20",counter:"",modelValue:e(d).value.value,"onUpdate:modelValue":a[0]||(a[0]=o=>e(d).value.value=o),"error-messages":e(d).errorMessage.value},null,8,["modelValue","error-messages"]),s(n,{label:"信箱",type:"email",modelValue:e(c).value.value,"onUpdate:modelValue":a[1]||(a[1]=o=>e(c).value.value=o),"error-messages":e(c).errorMessage.value},null,8,["modelValue","error-messages"]),s(n,{label:"密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:e(p).value.value,"onUpdate:modelValue":a[2]||(a[2]=o=>e(p).value.value=o),"error-messages":e(p).errorMessage.value},null,8,["modelValue","error-messages"]),s(n,{label:"確認密碼",type:"password",minlength:"4",maxlength:"20",counter:"",modelValue:e(_).value.value,"onUpdate:modelValue":a[3]||(a[3]=o=>e(_).value.value=o),"error-messages":e(_).errorMessage.value},null,8,["modelValue","error-messages"]),s(F,{type:"submit",color:"brown-lighten-2"},{default:t(()=>[U("註冊")]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1}),s(f,{cols:"12",sm:"6"},{default:t(()=>[K]),_:1})]),_:1})]),_:1}))}},re=R(L,[["__scopeId","data-v-b8880f0c"]]);export{re as default};
