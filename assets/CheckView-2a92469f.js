import{Y as p,x as _,A as f,a1 as h,a2 as e,aj as v,a7 as V,c as o,aa as n,ac as l,J as g,W as k,ai as w}from"./index-80d7f52a.js";import{V as x}from"./VContainer-8ac70d2b.js";import{V as u}from"./VCol-f52f2bcb.js";import{V as C}from"./VDataTable-5da4998a.js";import"./VSelect-083c81c9.js";import"./VList-e21809c3.js";import"./VListItem-a6cca2a6.js";import"./VDivider-07b494a9.js";import"./VMenu-9cdfd628.js";const b=w("h1",{style:{"text-align":"center"}},"預約紀錄",-1),H={__name:"CheckView",setup(B){const{apiAuth:i}=v(),c=p(),r=_([]),d=[{title:"預約日期",value:"date"},{title:"手機",value:"phone"},{title:"姓名",value:"name"},{title:"服務項目",value:"service"},{title:"取消預約",value:"action"}],m=async t=>{try{await i.delete(`/reserve/${t}`),r.value.result=r.value.result.filter(s=>s._id!==t),c({text:"刪除成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}})}catch(s){console.log(s),c({text:"刪除失敗",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}};return f(async()=>{try{const{data:t}=await i.get("/reserve/me");r.value.result=t.result}catch(t){console.log(t),c({text:"取得預約紀錄失敗",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}}),(t,s)=>(V(),h(x,null,{default:e(()=>[o(u,{cols:"12"},{default:e(()=>[b]),_:1}),o(u,{cols:"12"},{default:e(()=>[o(C,{items:r.value.result,headers:d},{"item.date":e(({item:a})=>[n(l(new Date(a.date).toLocaleDateString())+" "+l(new Date(a.date).getHours().toString().padStart(2,"0"))+":"+l(new Date(a.date).getMinutes().toString().padStart(2,"0")),1)]),"item.action":e(({item:a})=>[o(g,{variant:"text",icon:"",color:"red",onClick:S=>m(a._id)},{default:e(()=>[o(k,null,{default:e(()=>[n("mdi-delete")]),_:1})]),_:2},1032,["onClick"])]),"item.service":e(({item:a})=>[n(l(a.service),1)]),_:2},1032,["items"])]),_:1})]),_:1}))}};export{H as default};