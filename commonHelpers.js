import{f as h,i as f}from"./assets/vendor-77e16229.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}})();const d=document.getElementById("datetime-picker"),c=document.querySelector("[data-start]"),g=document.querySelector("[data-days]"),b=document.querySelector("[data-hours]"),S=document.querySelector("[data-minutes]"),D=document.querySelector("[data-seconds]");let u=null,l=null;const E={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=t[0];o<=new Date?(f.error({title:"Error",message:"Please choose a date in the future"}),c.disabled=!0):(u=o,c.disabled=!1)}};h(d,E);c.addEventListener("click",()=>{u&&(c.disabled=!0,d.disabled=!0,C(u))});function C(t){l=setInterval(()=>{const s=t-new Date;if(s<=0){clearInterval(l),m(0,0,0,0),f.info({title:"Done",message:"Countdown completed!"}),d.disabled=!1,c.disabled=!0;return}const r=L(s);m(r.days,r.hours,r.minutes,r.seconds)},1e3)}function L(t){const n=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),p=Math.floor(t%36e5/6e4),y=Math.floor(t%6e4/1e3);return{days:n,hours:i,minutes:p,seconds:y}}function m(t,o,s,r){g.textContent=a(t),b.textContent=a(o),S.textContent=a(s),D.textContent=a(r)}function a(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map