import{Y as _,x as f,A as h,a1 as v,a2 as e,ag as g,a7 as V,c as o,aa as n,ac as l,J as k,W as w,af as x}from"./index-d1bdd577.js";import{V as C}from"./VContainer-676ab56e.js";import{V as i}from"./VCol-9a92a4ba.js";import{V as b}from"./VDataTable-a6a4a97f.js";import"./VSelect-f8e1a595.js";import"./VList-c40c612b.js";import"./VListItem-f172832d.js";import"./VDivider-91ee9831.js";import"./VMenu-c6609a61.js";const B=x("h1",{style:{"text-align":"center"}},"預約管理",-1),J={__name:"CheckView",setup(S){const{api:u,apiAuth:d}=g(),c=_(),r=f([]),m=[{title:"預約日期",value:"date"},{title:"手機",value:"phone"},{title:"姓名",value:"name"},{title:"服務項目",value:"service"},{title:"刪除預約",value:"action"}],p=async t=>{try{await d.delete(`/reserve/${t}`),r.value.result=r.value.result.filter(s=>s._id!==t),c({text:"刪除成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(s){console.log(s),c({text:"刪除失敗",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return h(async()=>{try{const{data:t}=await u.get("/reserve/");r.value.result=t.result}catch(t){console.log(t),c({text:"取得預約紀錄失敗",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(t,s)=>(V(),v(C,null,{default:e(()=>[o(i,{cols:"12"},{default:e(()=>[B]),_:1}),o(i,{cols:"12"},{default:e(()=>[o(b,{items:r.value.result,headers:m},{"item.date":e(({item:a})=>[n(l(new Date(a.date).toLocaleDateString())+" "+l(new Date(a.date).getHours().toString().padStart(2,"0"))+":"+l(new Date(a.date).getMinutes().toString().padStart(2,"0")),1)]),"item.action":e(({item:a})=>[o(k,{variant:"text",icon:"",color:"red",onClick:y=>p(a._id)},{default:e(()=>[o(w,null,{default:e(()=>[n("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),"item.service":e(({item:a})=>[n(l(a.service),1)]),_:2},1032,["items"])]),_:1})]),_:1}))}};export{J as default};