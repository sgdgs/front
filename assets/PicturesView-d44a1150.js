import{Y as q,x as s,a0 as z,c as t,a2 as o,aV as K,a4 as j,ag as E,a6 as H,a7 as J,J as w,aa as k,as as D,aW as O,V as W,a9 as u,ar as Y,am as G,an as Q,ac as X,aq as Z,ap as ee,ab as ae,af as te}from"./index-c1328633.js";import{c as le,a as oe,u as se,d as re}from"./index.esm-d9a21ed6.js";import{V as ne}from"./VContainer-dd25e81d.js";import{V as ue}from"./VRow-131c1eee.js";import{V as S}from"./VCol-e88e5278.js";import{V as ie}from"./VDivider-bf99821d.js";import{V as de}from"./VDataTableServer-1e620b84.js";import{V as me}from"./VForm-4cec9d94.js";import"./VDataTable-014e919b.js";import"./VSelect-480fcec3.js";import"./VList-a4873e6d.js";import"./VListItem-eb231abf.js";import"./VMenu-ec5508f7.js";const ce=te("h1",{class:"text-center"},"圖片管理",-1),Se={__name:"PicturesView",setup(pe){const{apiAuth:g}=E(),p=q(),F=s(null),v=s(!1),i=s(""),M=r=>{r?f.value.value=r.name:i.value="",v.value=!0},_=()=>{v.value=!1,R(),F.value.deleteFileRecord()},I=le({name:oe().required("缺少商品名稱")}),{handleSubmit:T,isSubmitting:x,resetForm:R}=se({validationSchema:I,initialValues:{name:""}}),f=re("name"),d=s([]),A=s([]),$=T(async r=>{var a,n,e;if(!((a=d.value[0])!=null&&a.error)&&!(i.value===""&&d.value.length===0))try{const l=new FormData;for(const c in r)l.append(c,r[c]);d.value.length>0&&l.append("image",d.value[0].file),i.value===""?await g.post("/pictures",l):await g.patch("/pictures/"+i.value,l),p({text:i.value===""?"新增成功":"編輯成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),_(),B()}catch(l){console.log(l);const c=((e=(n=l==null?void 0:l.response)==null?void 0:n.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";p({text:c,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),h=s(10),V=s([{key:"createdAt",order:"desc"}]),b=s(1),C=s([]),L=[{title:"圖片",align:"center",sortable:!1,key:"image"},{title:"名稱",align:"center",sortable:!0,key:"name"},{title:"刪除",align:"center",sortable:!1,key:"delete"}],P=s(!0),U=s(0),y=s(""),m=async()=>{var r,a,n,e;P.value=!0;try{const{data:l}=await g.get("/pictures/all",{params:{page:b.value,itemsPerPage:h.value,sortBy:((r=V.value[0])==null?void 0:r.key)||"createdAt",sortOrder:((a=V.value[0])==null?void 0:a.order)==="asc"?1:-1,search:y.value}});C.value.splice(0,C.value.length,...l.result.data),U.value=l.result.total}catch(l){console.log(l);const c=((e=(n=l==null?void 0:l.response)==null?void 0:n.data)==null?void 0:e.message)||"發生錯誤，請稍後再試";p({text:c,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}P.value=!1};m();const B=()=>{b.value=1,m()},N=async r=>{var a,n;try{await g.delete("/pictures/"+r),p({text:"刪除成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),m()}catch(e){console.log(e);const l=((n=(a=e==null?void 0:e.response)==null?void 0:a.data)==null?void 0:n.message)||"發生錯誤，請稍後再試";p({text:l,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return(r,a)=>{const n=H("VueFileAgent");return J(),z(j,null,[t(ne,null,{default:o(()=>[t(ue,null,{default:o(()=>[t(S,{cols:"12"},{default:o(()=>[ce]),_:1}),t(ie),t(S,{cols:"12"},{default:o(()=>[t(w,{color:"green",onClick:a[0]||(a[0]=e=>M())},{default:o(()=>[k("新增圖片")]),_:1})]),_:1}),t(S,{cols:"12"},{default:o(()=>[t(de,{"items-per-page":h.value,"onUpdate:itemsPerPage":[a[2]||(a[2]=e=>h.value=e),m],"sort-by":V.value,"onUpdate:sortBy":[a[3]||(a[3]=e=>V.value=e),m],page:b.value,"onUpdate:page":[a[4]||(a[4]=e=>b.value=e),m],items:C.value,headers:L,loading:P.value,"items-length":U.value,search:y.value,hover:""},{top:o(()=>[t(D,{label:"搜尋","append-icon":"mdi-magnify",modelValue:y.value,"onUpdate:modelValue":a[1]||(a[1]=e=>y.value=e),"onClick:append":B,onKeydown:O(B,["enter"])},null,8,["modelValue"])]),"item.image":o(({item:e})=>[t(W,{src:e.image,height:"50px"},null,8,["src"])]),"item.delete":o(({item:e})=>[t(w,{icon:"mdi-delete",variant:"text",color:"red",onClick:l=>N(e._id)},null,8,["onClick"])]),_:2},1032,["items-per-page","sort-by","page","items","loading","items-length","search"])]),_:1})]),_:1})]),_:1}),t(K,{modelValue:v.value,"onUpdate:modelValue":a[8]||(a[8]=e=>v.value=e),persistent:"",width:"500px"},{default:o(()=>[t(me,{disabled:u(x),onSubmit:Y(u($),["prevent"])},{default:o(()=>[t(G,null,{default:o(()=>[t(Q,null,{default:o(()=>[k(X(i.value===""?"新增商品":"編輯商品"),1)]),_:1}),t(Z,null,{default:o(()=>[t(D,{label:"名稱",modelValue:u(f).value.value,"onUpdate:modelValue":a[5]||(a[5]=e=>u(f).value.value=e),"error-messages":u(f).errorMessage.value},null,8,["modelValue","error-messages"]),t(n,{modelValue:d.value,"onUpdate:modelValue":a[6]||(a[6]=e=>d.value=e),rawModelValue:A.value,"onUpdate:rawModelValue":a[7]||(a[7]=e=>A.value=e),accept:"image/jpeg,image/png/",deletable:"","error-text":{type:"檔案格式不支援",size:"檔案超過 1MB 大小限制"},"help-text":"選擇檔案或拖曳到這裡","max-files":1,"max-size":"1MB",ref_key:"fileAgent",ref:F},null,8,["modelValue","rawModelValue"])]),_:1}),t(ee,null,{default:o(()=>[t(ae),t(w,{color:"red",disabled:u(x),onClick:_},{default:o(()=>[k("取消")]),_:1},8,["disabled"]),t(w,{color:"green",type:"submit",loading:u(x)},{default:o(()=>[k("送出")]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1},8,["disabled","onSubmit"])]),_:1},8,["modelValue"])],64)}}};export{Se as default};
