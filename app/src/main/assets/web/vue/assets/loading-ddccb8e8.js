import{u as M}from"./index-3dbb2f78.js";import{z as S,J as L,a7 as p,af as w,u as D}from"./vendor-0c9d4c13.js";const Y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a{1,2}|A{1,2}|m{1,2}|s{1,2}|Z{1,2}|SSS/g;function v(t,i,e,a){let o=t<12?"AM":"PM";return a&&(o=o.split("").reduce((n,l)=>n+=`${l}.`,"")),e?o.toLowerCase():o}function y(t,i,e={}){var a;const o=t.getFullYear(),n=t.getMonth(),l=t.getDate(),s=t.getHours(),r=t.getMinutes(),g=t.getSeconds(),d=t.getMilliseconds(),m=t.getDay(),c=(a=e.customMeridiem)!=null?a:v,u={YY:()=>String(o).slice(-2),YYYY:()=>o,M:()=>n+1,MM:()=>`${n+1}`.padStart(2,"0"),MMM:()=>t.toLocaleDateString(e.locales,{month:"short"}),MMMM:()=>t.toLocaleDateString(e.locales,{month:"long"}),D:()=>String(l),DD:()=>`${l}`.padStart(2,"0"),H:()=>String(s),HH:()=>`${s}`.padStart(2,"0"),h:()=>`${s%12||12}`.padStart(1,"0"),hh:()=>`${s%12||12}`.padStart(2,"0"),m:()=>String(r),mm:()=>`${r}`.padStart(2,"0"),s:()=>String(g),ss:()=>`${g}`.padStart(2,"0"),SSS:()=>`${d}`.padStart(3,"0"),d:()=>m,dd:()=>t.toLocaleDateString(e.locales,{weekday:"narrow"}),ddd:()=>t.toLocaleDateString(e.locales,{weekday:"short"}),dddd:()=>t.toLocaleDateString(e.locales,{weekday:"long"}),A:()=>c(s,r),AA:()=>c(s,r,!1,!0),a:()=>c(s,r,!0),aa:()=>c(s,r,!0,!0)};return i.replace(Y,(f,h)=>h||u[f]())}const H=t=>/,\s*\{/.test(t)||!(t.startsWith("http")||t.startsWith("data:")||t.startsWith("blob:"));function b(t){return location.origin+"/image?path="+encodeURIComponent(t)+"&url="+encodeURIComponent(sessionStorage.getItem("bookUrl"))+"&width="+M().config.readWidth}const A=t=>{let i=new Date().getTime(),e=Math.floor((i-t)/1e3),a="";return e<=30?a="刚刚":e<60?a=e+"秒前":e<3600?a=Math.floor(e/60)+"分钟前":e<86400?a=Math.floor(e/3600)+"小时前":e<2592e3?a=Math.floor(e/86400)+"天前":a=y(new Date(t),"YYYY-MM-DD"),a},z='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"/></svg>';const W=(t,i,e=z)=>{const a=S(!1);let o=null;const n=()=>a.value=!1,l=()=>a.value=!0;L(a,r=>{if(!r)return o==null?void 0:o.close();o=w.service({target:D(t),spinner:e,text:i,lock:!0,background:"rgba(0, 0, 0, 0)"})});const s=r=>{if(!(r instanceof Promise))throw TypeError("loadingWrapper argument must be Promise");return l(),r.finally(n)};return p(()=>{n()}),{isLoading:a,showLoading:l,closeLoading:n,loadingWrapper:s}};export{A as d,b as g,H as i,W as u};