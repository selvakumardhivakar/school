(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();let m=document.getElementById("start");m.addEventListener("click",v);let p=document.getElementById("stop");p.addEventListener("click",I);let y=document.getElementById("reset");y.addEventListener("click",L);let h=document.getElementById("lap");h.addEventListener("click",g);let s=document.getElementById("display");var u=document.getElementById("list");let f,d;function E(){f=Date.now()}function v(){d||a(),E(),d=setInterval(()=>{let t=Date.now()-f,r=Math.floor(t/1e3),o=Math.floor(r/60),i=Math.floor(o/60);s.innerHTML=`${c(i%24)}:${c(o%60)}:${c(r%60)}`},1e3)}function I(){a()}function g(){var t=document.createElement("li");t.appendChild(document.createTextNode(s.innerText)),u.appendChild(t)}function L(){a(),s.innerHTML="00:00:00",u.innerHTML=""}function c(t){return t<10?"0"+t:t}function a(){const t=window.setInterval(function(){},Number.MAX_SAFE_INTEGER);for(let r=1;r<t;r++)window.clearInterval(r)}
