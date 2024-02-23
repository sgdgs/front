import{p as I,m as M,a as Y,g as N,u as L,c as a,b as te,d as ae,e as W,f as G,h as J,t as w,i as oe,j as le,k as K,l as ne,n as de,s as B,o as v,q as ve,V as me,r as O,v as E,w as ge,x as Q,y as fe,z as D,A as he,B as be,C as se,D as ye,E as Ve,F as re,G as R,H as xe,I as _e,J as $,K as Se,L as ke,M as Be,N as Ce,O as Te,P as we,Q as Ie,R as Ne,S as Le,T as Pe,U as pe,W as z,X as Ae,_ as Re,Y as Fe,Z as He,$ as Ee,a0 as P,a1 as _,a2 as r,a3 as k,a4 as p,a5 as $e,a6 as ze,a7 as m,a8 as U,a9 as X,aa as S,ab as De,ac as A,ad as Ue,ae as Me,af as Ye,ag as Oe}from"./index-d1bdd577.js";import{V as Xe,a as je}from"./VNavigationDrawer-b8c79771.js";import{u as qe,V as Z}from"./VList-c40c612b.js";import{V as j,a as q}from"./VListItem-f172832d.js";import{V as We}from"./VContainer-676ab56e.js";import{V as Ge}from"./VRow-b831c316.js";import{V as Je}from"./VCol-9a92a4ba.js";import{V as Ke}from"./VMenu-c6609a61.js";import"./VDivider-91ee9831.js";const ie=I({text:String,...M(),...Y()},"VToolbarTitle"),ue=N()({name:"VToolbarTitle",props:ie(),setup(e,d){let{slots:t}=d;return L(()=>{const f=!!(t.default||t.text||e.text);return a(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var l;return[f&&a("div",{class:"v-toolbar-title__placeholder"},[t.text?t.text():e.text,(l=t.default)==null?void 0:l.call(t)])]}})}),{}}}),Qe=[null,"prominent","default","comfortable","compact"],ce=I({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>Qe.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...te(),...M(),...ae(),...W(),...Y({tag:"header"}),...G()},"VToolbar"),ee=N()({name:"VToolbar",props:ce(),setup(e,d){var s;let{slots:t}=d;const{backgroundColorClasses:f,backgroundColorStyles:l}=J(w(e,"color")),{borderClasses:n}=oe(e),{elevationClasses:y}=le(e),{roundedClasses:h}=K(e),{themeClasses:x}=ne(e),{rtlClasses:V}=de(),i=B(!!(e.extended||(s=t.extension)!=null&&s.call(t))),g=v(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),u=v(()=>i.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return ve({VBtn:{variant:"text"}}),L(()=>{var c;const o=!!(e.title||t.title),b=!!(t.image||e.image),C=(c=t.extension)==null?void 0:c.call(t);return i.value=!!(e.extended||C),a(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},f.value,n.value,y.value,h.value,x.value,V.value,e.class],style:[l.value,e.style]},{default:()=>[b&&a("div",{key:"image",class:"v-toolbar__image"},[t.image?a(O,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},t.image):a(me,{key:"image-img",cover:!0,src:e.image},null)]),a(O,{defaults:{VTabs:{height:E(g.value)}}},{default:()=>{var T,F,H;return[a("div",{class:"v-toolbar__content",style:{height:E(g.value)}},[t.prepend&&a("div",{class:"v-toolbar__prepend"},[(T=t.prepend)==null?void 0:T.call(t)]),o&&a(ue,{key:"title",text:e.title},{text:t.title}),(F=t.default)==null?void 0:F.call(t),t.append&&a("div",{class:"v-toolbar__append"},[(H=t.append)==null?void 0:H.call(t)])])]}}),a(O,{defaults:{VTabs:{height:E(u.value)}}},{default:()=>[a(ge,null,{default:()=>[i.value&&a("div",{class:"v-toolbar__extension",style:{height:E(u.value)}},[C])]})]})]})}),{contentHeight:g,extensionHeight:u}}}),Ze=I({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function et(e){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:t}=d;let f=0;const l=Q(null),n=B(0),y=B(0),h=B(0),x=B(!1),V=B(!1),i=v(()=>Number(e.scrollThreshold)),g=v(()=>fe((i.value-n.value)/i.value||0)),u=()=>{const s=l.value;!s||t&&!t.value||(f=n.value,n.value="window"in s?s.pageYOffset:s.scrollTop,V.value=n.value<f,h.value=Math.abs(n.value-i.value))};return D(V,()=>{y.value=y.value||n.value}),D(x,()=>{y.value=0}),he(()=>{D(()=>e.scrollTarget,s=>{var b;const o=s?document.querySelector(s):window;o&&o!==l.value&&((b=l.value)==null||b.removeEventListener("scroll",u),l.value=o,l.value.addEventListener("scroll",u,{passive:!0}))},{immediate:!0})}),be(()=>{var s;(s=l.value)==null||s.removeEventListener("scroll",u)}),t&&D(t,u,{immediate:!0}),{scrollThreshold:i,currentScroll:n,currentThreshold:h,isScrollActive:x,scrollRatio:g,isScrollingUp:V,savedScroll:y}}const tt=I({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...ce(),...se(),...Ze(),height:{type:[Number,String],default:64}},"VAppBar"),at=N()({name:"VAppBar",props:tt(),emits:{"update:modelValue":e=>!0},setup(e,d){let{slots:t}=d;const f=Q(),l=ye(e,"modelValue"),n=v(()=>{var T;const c=new Set(((T=e.scrollBehavior)==null?void 0:T.split(" "))??[]);return{hide:c.has("hide"),inverted:c.has("inverted"),collapse:c.has("collapse"),elevate:c.has("elevate"),fadeImage:c.has("fade-image")}}),y=v(()=>{const c=n.value;return c.hide||c.inverted||c.collapse||c.elevate||c.fadeImage||!l.value}),{currentScroll:h,scrollThreshold:x,isScrollingUp:V,scrollRatio:i}=et(e,{canScroll:y}),g=v(()=>e.collapse||n.value.collapse&&(n.value.inverted?i.value>0:i.value===0)),u=v(()=>e.flat||n.value.elevate&&(n.value.inverted?h.value>0:h.value===0)),s=v(()=>n.value.fadeImage?n.value.inverted?1-i.value:i.value:void 0),o=v(()=>{var F,H;if(n.value.hide&&n.value.inverted)return 0;const c=((F=f.value)==null?void 0:F.contentHeight)??0,T=((H=f.value)==null?void 0:H.extensionHeight)??0;return c+T});Ve(v(()=>!!e.scrollBehavior),()=>{xe(()=>{n.value.hide?n.value.inverted?l.value=h.value>x.value:l.value=V.value||h.value<x.value:l.value=!0})});const{ssrBootStyles:b}=qe(),{layoutItemStyles:C}=re({id:e.name,order:v(()=>parseInt(e.order,10)),position:w(e,"location"),layoutSize:o,elementSize:B(void 0),active:l,absolute:w(e,"absolute")});return L(()=>{const c=ee.filterProps(e);return a(ee,R({ref:f,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":s.value,height:void 0,...b.value},e.style]},c,{collapse:g.value,flat:u.value}),t)}),{}}}),ot=I({..._e({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),lt=N()({name:"VAppBarNavIcon",props:ot(),setup(e,d){let{slots:t}=d;return L(()=>a($,R(e,{class:["v-app-bar-nav-icon"]}),t)),{}}}),nt=N()({name:"VAppBarTitle",props:ie(),setup(e,d){let{slots:t}=d;return L(()=>a(ue,R(e,{class:"v-app-bar-title"}),t)),{}}});const st=I({bordered:Boolean,color:String,content:[Number,String],dot:Boolean,floating:Boolean,icon:Se,inline:Boolean,label:{type:String,default:"$vuetify.badge"},max:[Number,String],modelValue:{type:Boolean,default:!0},offsetX:[Number,String],offsetY:[Number,String],textColor:String,...M(),...ke({location:"top end"}),...W(),...Y(),...G(),...Be({transition:"scale-rotate-transition"})},"VBadge"),rt=N()({name:"VBadge",inheritAttrs:!1,props:st(),setup(e,d){const{backgroundColorClasses:t,backgroundColorStyles:f}=J(w(e,"color")),{roundedClasses:l}=K(e),{t:n}=Ce(),{textColorClasses:y,textColorStyles:h}=Te(w(e,"textColor")),{themeClasses:x}=we(),{locationStyles:V}=Ie(e,!0,i=>(e.floating?e.dot?2:4:e.dot?8:12)+(["top","bottom"].includes(i)?+(e.offsetY??0):["left","right"].includes(i)?+(e.offsetX??0):0));return L(()=>{const i=Number(e.content),g=!e.max||isNaN(i)?e.content:i<=+e.max?i:`${e.max}+`,[u,s]=Ne(d.attrs,["aria-atomic","aria-label","aria-live","role","title"]);return a(e.tag,R({class:["v-badge",{"v-badge--bordered":e.bordered,"v-badge--dot":e.dot,"v-badge--floating":e.floating,"v-badge--inline":e.inline},e.class]},s,{style:e.style}),{default:()=>{var o,b;return[a("div",{class:"v-badge__wrapper"},[(b=(o=d.slots).default)==null?void 0:b.call(o),a(Le,{transition:e.transition},{default:()=>{var C,c;return[Pe(a("span",R({class:["v-badge__badge",x.value,t.value,l.value,y.value],style:[f.value,h.value,e.inline?{}:V.value],"aria-atomic":"true","aria-label":n(e.label,i),"aria-live":"polite",role:"status"},u),[e.dot?void 0:d.slots.badge?(c=(C=d.slots).badge)==null?void 0:c.call(C):e.icon?a(z,{icon:e.icon},null):g]),[[pe,e.modelValue]])]}})])]}})}),{}}});const it=I({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...te(),...M(),...ae(),...se(),...W(),...Y({tag:"footer"}),...G()},"VFooter"),ut=N()({name:"VFooter",props:it(),setup(e,d){let{slots:t}=d;const{themeClasses:f}=ne(e),{backgroundColorClasses:l,backgroundColorStyles:n}=J(w(e,"color")),{borderClasses:y}=oe(e),{elevationClasses:h}=le(e),{roundedClasses:x}=K(e),V=B(32),{resizeRef:i}=Ae(s=>{s.length&&(V.value=s[0].target.clientHeight)}),g=v(()=>e.height==="auto"?V.value:parseInt(e.height,10)),{layoutItemStyles:u}=re({id:e.name,order:v(()=>parseInt(e.order,10)),position:v(()=>"bottom"),layoutSize:g,elementSize:v(()=>e.height==="auto"?void 0:g.value),active:v(()=>e.app),absolute:w(e,"absolute")});return L(()=>a(e.tag,{ref:i,class:["v-footer",f.value,l.value,y.value,h.value,x.value,e.class],style:[n.value,e.app?u.value:{height:E(e.height)},e.style]},t)),{}}});const ct=e=>(Ue("data-v-01179e33"),e=e(),Me(),e),dt=ct(()=>Ye("strong",null,"剪單",-1)),vt={__name:"FrontLayout",setup(e){const{apiAuth:d}=Oe(),t=$e(),f=Fe(),l=He(),{mobile:n}=Ee(),y=v(()=>n.value),h=Q(!1),x=v(()=>[{to:"/serve",text:"服務",icon:"mdi-head-heart",show:l.isLogin||!l.isLogin},{to:"/register",text:"註冊",icon:"mdi-account-plus",show:!l.isLogin},{to:"/login",text:"登入",icon:"mdi-login",show:!l.isLogin},{icon:"mdi-calendar",text:"預約",show:l.isLogin,subItems:[{to:"/reserve",text:"立即預約",icon:"mdi-calendar-plus"},{to:"/check",text:"預約紀錄",icon:"mdi-calendar-text"}]},{icon:"mdi-cart",text:"商品",show:l.isLogin,subItems:[{to:"/buy",text:"商品列表",icon:"mdi-cart"},{to:"/cart",text:"購物車",icon:"mdi-cart"},{to:"/orders",text:"訂單",icon:"mdi-list-box"}]},{to:"/admin",text:"管理",icon:"mdi-cog",show:l.isLogin&&l.isAdmin},{to:"/manage",text:"會員資料",icon:"mdi-account",show:l.isLogin}]),V=async()=>{var g,u;try{await d.delete("/users/logout"),l.logout(),f({text:"登出成功",showCloseButton:!1,snackbarProps:{timeout:2e3,color:"green",location:"bottom"}}),t.push("/")}catch(s){const o=((u=(g=s==null?void 0:s.response)==null?void 0:g.data)==null?void 0:u.message)||"發生錯誤，請稍後再試";f({text:o,showCloseButton:!1,snackbarProps:{timeout:2e3,color:"red",location:"bottom"}})}},i=v(()=>["Home","About Us","Team","Services","Blog","Contact Us"]);return(g,u)=>{const s=ze("RouterView");return m(),P(p,null,[y.value?(m(),_(Xe,{key:0,modelValue:h.value,"onUpdate:modelValue":u[0]||(u[0]=o=>h.value=o),temporary:"",location:"left"},{default:r(()=>[a(Z,{nav:""},{default:r(()=>[(m(!0),P(p,null,U(x.value,o=>(m(),P(p,{key:o.to},[o.show?(m(),_(j,{key:0,to:o.to},{prepend:r(()=>[a(z,{icon:o.icon},null,8,["icon"])]),append:r(()=>[o.to==="/cart"?(m(),_(rt,{key:0,color:"error",content:X(l).cart,inline:""},null,8,["content"])):k("",!0)]),default:r(()=>[a(q,null,{default:r(()=>[S(A(o.text),1)]),_:2},1024)]),_:2},1032,["to"])):k("",!0)],64))),128)),X(l).isLogin?(m(),_(j,{key:0,onClick:V},{prepend:r(()=>[a(z,{icon:"mdi-logout"})]),default:r(()=>[a(q,null,{default:r(()=>[S("登出")]),_:1})]),_:1})):k("",!0)]),_:1})]),_:1},8,["modelValue"])):k("",!0),a(at,null,{default:r(()=>[a(We,{class:"d-flex align-center"},{default:r(()=>[a($,{to:"/",active:!1},{default:r(()=>[a(nt,{style:{"font-size":"2rem"}},{default:r(()=>[S("剪單")]),_:1})]),_:1}),a(De),y.value?(m(),_(lt,{key:0,onClick:u[1]||(u[1]=o=>h.value=!0)})):(m(!0),P(p,{key:1},U(x.value,o=>(m(),_(Ke,{key:o.to,"open-on-hover":""},{activator:r(({props:b})=>[o.show?(m(),_($,R({key:0},b,{text:"",key:o.to,to:o.to}),{default:r(()=>[o.icon?(m(),_(z,{key:0},{default:r(()=>[S(A(o.icon),1)]),_:2},1024)):k("",!0),S(A(o.text),1)]),_:2},1040,["to"])):k("",!0)]),default:r(()=>[o.subItems&&o.subItems.length>0?(m(),_(Z,{key:0},{default:r(()=>[(m(!0),P(p,null,U(o.subItems,b=>(m(),_(j,{key:b.to,to:b.to},{default:r(()=>[a(q,null,{default:r(()=>[a(z,{class:"mx-2",icon:b.icon,size:16},null,8,["icon"]),S(A(b.text),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024)):k("",!0)]),_:2},1024))),128)),X(l).isLogin?(m(),_($,{key:2,"prepend-icon":"mdi-logout",onClick:V},{default:r(()=>[S("登出")]),_:1})):k("",!0)]),_:1})]),_:1}),a(je,null,{default:r(()=>[(m(),_(s,{key:g.$route.path}))]),_:1}),a(ut,null,{default:r(()=>[a(Ge,{justify:"center","no-gutters":""},{default:r(()=>[(m(!0),P(p,null,U(i.value,o=>(m(),_($,{class:"mx-2",key:o,color:"white",variant:"text",rounded:"xl"},{default:r(()=>[S(A(o),1)]),_:2},1024))),128)),a(Je,{class:"text-center mt-4",cols:"12"},{default:r(()=>[S(A(new Date().getFullYear())+" — ",1),dt]),_:1})]),_:1})]),_:1})],64)}}},St=Re(vt,[["__scopeId","data-v-01179e33"]]);export{St as default};