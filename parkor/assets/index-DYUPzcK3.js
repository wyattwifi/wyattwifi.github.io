(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,n){return t[e]===void 0||t[e][14-n]===void 0?0:t[e][14-n]}var t=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,8,0,0,0,10,0,0,0,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,1,0,0,0,1],[1,9,0,0,0,0,0,1,0,0,0,0,0,0,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,10,0,0,0,0,8,7,7,6,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,1,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,10,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,3,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,10,7,7,6,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,10,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,0,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,3,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,9,9,0,0,0,0,0,0,0,0,0,0,0,2],[1,9,1,9,0,0,0,0,0,0,0,0,0,0,2],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,9,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,9,9,0,0,0,0,0,0,1,0,0,0,2],[1,9,0,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,1,0,0,0,0,0,0,0,1,0,0,0,2],[1,9,1,1,1,0,0,0,0,0,1,1,1,1,2],[1,9,9,0,1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,2],[1,9,0,1,1,0,0,0,0,0,0,0,0,0,2],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,2],[1,10,10,10,10,10,10,10,10,10,10,10,1,0,2],[1,10,10,0,10,10,10,0,0,0,0,3,1,0,2],[1,10,0,0,0,10,10,10,0,0,0,0,1,0,2],[1,10,0,0,0,10,10,10,10,10,0,0,1,0,2],[1,9,0,0,0,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,10,10,10,10,10,10,1],[1,9,9,9,0,0,0,0,0,0,0,0,10,10,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,10,1],[1,9,9,0,0,0,0,0,0,0,8,7,7,6,1],[1,9,9,9,9,9,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,9,9,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,1,1,1,1,1,1,1,1,1,1,1],[1,9,0,0,1,1,1,1,1,1,1,1,1,1,1],[1,9,9,9,10,10,10,10,10,10,10,10,10,10,1],[1,1,1,1,1,1,1,1,1,1,10,10,10,10,1],[1,10,10,10,10,10,10,10,10,10,10,10,10,10,1],[1,0,0,0,0,10,10,10,10,10,10,10,10,10,1],[1,0,0,0,0,10,10,10,10,10,10,10,10,10,1],[1,0,0,0,0,10,10,10,10,10,10,10,10,10,1],[1,0,0,0,3,1,10,10,10,10,10,10,10,10,1],[1,0,0,0,0,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,1,1,1,1,1,1,1,1,1,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,1,1,1,1,1,1,1,0,2,2],[1,0,0,0,0,1,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,1,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,1,0,0,0,0,0,0,0,2,2],[1,0,0,0,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,1,1,1,1,1,1,1,1,1,2,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,1,0,0,0,0,1,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,1,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,3,1,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,1,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,2,2],[1,0,0,1,0,0,0,1,0,0,0,0,0,2,2],[1,0,0,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,9,1,0,0,0,0,0,8,7,7,6,1],[1,9,9,9,0,0,0,0,0,0,0,0,0,0,1],[1,9,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,9,9,0,0,1,1,1,1,1,1,1,1,1,1],[1,9,9,0,0,0,0,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,3,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,3,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,3,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1,0,0,1],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,0,0,0,0,0,0,0,0,1],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,3,1,0,0,0,0,0,0,0,0,0,2],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,3,1,1,1,1,1,1,1,0,0,0,2],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,1,1,1,1,0,0,2],[1,0,3,1,1,1,1,1,1,1,1,1,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,3,1,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,1,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,1,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,3,1,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,3,1,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,1,1,1,1,1,1,1,1,1,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,3,1,0,2],[1,3,1,11,11,11,11,11,11,11,11,11,1,0,2],[1,0,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,1,1,1,1,1,1,1,1,1,0,3,1],[1,1,1,1,1,1,1,0,0,0,0,0,0,0,2],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,1,1,0,3,1,1,1,1,1,1,1,0,0,2],[1,1,1,1,1,1,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,3,1,0,0,0,0,0,0,3,1,11,11,1,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,11,11,11,11,11,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,3,1,0,0,0,0,2],[1,11,11,11,1,11,11,11,1,11,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,8,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,3,1,11,11,11,1,11,11,11,1,1,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,11,11,0,0,0,0,0,0,2],[1,0,0,0,0,0,11,1,0,0,0,0,0,0,2],[1,0,0,0,0,0,11,1,0,0,0,0,0,0,2],[1,0,0,0,0,0,11,1,0,0,0,0,0,0,2],[1,0,0,0,0,0,11,1,0,0,0,0,0,0,2],[1,0,0,0,0,0,11,1,1,1,0,0,0,0,2],[1,0,0,0,0,0,11,1,0,0,0,0,0,0,2],[1,0,0,0,11,11,11,1,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,3,1,1,1,0,2],[1,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,3,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,3,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,8,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,8,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,11,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,3,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,1],[1,0,0,0,0,3,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,2],[1,8,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,8,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,8,0,0,11,1,1,1,1,1,1,1,1,1,2],[1,8,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,8,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,3,1,1,1,1,1,1,1,0,0,2],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,11,1,0,2],[1,0,0,0,0,0,0,0,0,0,3,1,0,0,2],[1,1,1,1,1,1,1,1,1,1,1,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,3,1],[1,8,0,0,11,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,1,1,1,1,1,1,1,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,8,0,0,11,1,1,1,1,1,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,1,1,1,1,1,1,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,2],[1,8,0,0,11,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,11,1,0,0,0,0,0,0,0,0,1],[1,0,0,0,11,1,0,0,0,0,8,7,7,6,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],n=t.length,r=t[0].length;window.layout=t;var i=1e3/60,a=class{constructor(e,t,n,r,i){this.x=e,this.y=t,this.w=n,this.h=r,this.name=i,this.img=new Image}draw(){}update(){}moveX(t){var n=this.x%1,r=Math.floor(this.x),i=this.y%1,a=Math.floor(this.y);if(t>0){if(t>.9&&(t=.9),n+this.w+t<1){this.x+=t;return}if(X[e(r+1,a)]||X[e(r+1,a+1)]&&i+this.h>1){this.x=r+1-this.w;return}if(n+this.w+t<2){this.x+=t;return}if(X[e(r+2,a)]||X[e(r+2,a+1)]&&i+this.h>1){this.x=r+2-this.w;return}this.x+=t;return}if(t<0){if(t<-.9&&(t=-.9),n+t>0){this.x+=t;return}if(X[e(r-1,a)]||X[e(r-1,a+1)]&&i+this.h>1){this.x=r;return}this.x+=t;return}}moveY(t){var n=this.x%1,r=Math.floor(this.x),i=this.y%1,a=Math.floor(this.y);if(t>0){if(t>.9&&(t=.9),i+this.h+t<1){this.y+=t;return}if(X[e(r,a+1)]||X[e(r+1,a+1)]&&n+this.w>1){this.y=a+1-this.h;return}if(i+this.h+t<2){this.y+=t;return}if(X[e(r,a+2)]||X[e(r+1,a+2)]&&n+this.w>1){this.y=a+2-this.h;return}this.y+=t;return}if(t<0){if(t<-.9&&(t=-.9),i+t>0){this.y+=t;return}if(X[e(r,a-1)]||X[e(r+1,a-1)]&&n+this.w>1){this.y=a;return}this.y+=t;return}}onFloor(){var t=Math.floor(this.x),n=Math.floor(this.y),r=this.x%1;return this.y%1==0?X[e(t,n-1)]||X[e(t+1,n-1)]&&r+this.w>1:!1}onLWall(){var t=Math.floor(this.x),n=Math.floor(this.y),r=this.x%1,i=this.y%1;return r==0?X[e(t-1,n)]||X[e(t-1,n+1)]&&i+this.h>1:!1}onRWall(){var t=Math.floor(this.x),n=Math.floor(this.y),r=this.x%1,i=this.y%1;return r+this.w==1?X[e(t+1,n)]||X[e(t+1,n+1)]&&i+this.h>1:!1}onRoof(){var t=Math.floor(this.x),n=Math.floor(this.y),r=this.x%1;return this.y%1+this.h==1?X[e(t,n+1)]||X[e(t+1,n+1)]&&r+this.w>1:!1}isCollidingWith(e){return!(this.x>=e.x+e.w||this.y>=e.y+e.h||this.x+this.w<=e.x||this.y+this.h<=e.y)}},o=class extends a{constructor(){super(3,3,20/32,20/32,`player`),this.dx=0,this.dy=0,this.direction=`Right`,this.ddx=.44/32,this.jumpTimeMax=10,this.currentJumpTime=0,this.jumpPowerPerFrame=1.7/32,this.gravity=-.7/32,this.drag=.85,this.bounce=.2,this.spawnXb=Math.floor(this.x),this.spawnYb=Math.floor(this.y),this.canDash=!0,this.dashTimeMax=10,this.dashTime=this.dashTimeMax,this.dashSpeed=15/32,this.wallJumpTimeMax=10,this.wallJumpTimeCurrent=0,this.wallJumpPowerPerFrameX=1.5/32,this.wallJumpPowerPerFrameY=1.4/32,this.wallJumpDdxSign=0,this.closeCall=5/32,this.hitbox={x:this.x+this.closeCall,w:this.w-this.closeCall*2,y:this.y+this.closeCall,h:this.h-this.closeCall*2,update:function(){this.x=p1.x+p1.closeCall,this.y=p1.y+p1.closeCall}},this.jumpKey=`KeyZ`,this.runLeftKey=`ArrowLeft`,this.runRightKey=`ArrowRight`,this.dashKey=`KeyX`,this.restartsUsed=0,this.won=!1,Object.preventExtensions(this),window.p1=this}update(t){this.dashTime>0&&Y[this.dashKey]?(this.dashTime-=t/i*1,this.direction==`Right`&&this.moveX(this.dashSpeed*(t/i)),this.direction==`Left`&&this.moveX(-this.dashSpeed*(t/i)),this.currentJumpTime=0,this.dy=0):(this.dx*=this.drag,(this.onLWall()||this.onRWall())&&(this.dx*=-this.bounce),Y[this.runLeftKey]&&!Y[this.healKey]&&(this.dx-=this.ddx*(t/i),this.direction=`Left`),Y[this.runRightKey]&&!Y[this.healKey]&&(this.dx+=this.ddx*(t/i),this.direction=`Right`),this.wallJumpTimeCurrent>0&&Y[this.jumpKey]&&(this.dx+=this.wallJumpDdxSign*this.wallJumpPowerPerFrameX*(t/i)),this.moveX(this.dx*(t/i)),this.onRoof()&&(this.dy*=-this.bounce),this.dy+=this.gravity,this.onFloor()&&(this.dy=0),this.onFloor()&&Y[this.jumpKey]&&(this.currentJumpTime=this.jumpTimeMax),(this.onRWall()||this.onLWall())&&Y[this.jumpKey]&&this.dy<0&&(this.wallJumpTimeCurrent=this.wallJumpTimeMax,this.dy=0,this.onRWall()&&(this.wallJumpDdxSign=-1),this.onLWall()&&(this.wallJumpDdxSign=1)),this.currentJumpTime>0&&(this.currentJumpTime--,Y[this.jumpKey]&&(this.dy+=this.jumpPowerPerFrame)),this.wallJumpTimeCurrent>0&&(this.wallJumpTimeCurrent--,Y[this.jumpKey]&&(this.dy+=this.wallJumpPowerPerFrameY)),this.moveY(this.dy)),this.onFloor()&&this.canDash&&(this.dashTime=this.dashTimeMax),Y[this.lookUpKey]&&(this.direction=`Up`),Y[this.lookDownKey]&&(this.direction=`Down`),this.hitbox.update();var r=Math.floor(this.hitbox.x),a=Math.floor(this.hitbox.y),o=this.hitbox.x%1,s=this.hitbox.y%1;e(r,a)==3&&(this.spawnXb=r,this.spawnYb=a);let c=(t,n)=>e(t,n)==2||e(t,n)==11,l=!1;if(l||=c(r,a),l||=c(r+1,a)&&o+this.hitbox.w>1,l||=c(r,a+1)&&s+this.hitbox.h>1,l||=c(r+1,a+1)&&o+this.hitbox.w>1&&s+this.hitbox.h>1,l&&this.lose(),this.x>n&&this.y>13&&!this.won){let e=document.createElement(`p`);e.innerHTML=`You Won! Wow!`,document.body.appendChild(e),this.won=!0}}lose(){this.restartsUsed++,this.x=this.spawnXb+(1-this.w)/2,this.y=this.spawnYb*1,this.dx=0,this.dy=0,Y[this.jumpKey]=!1,Y[this.runLeftKey]=!1,Y[this.runRightKey]=!1,Y[this.dashKey]=!1}draw(){}};function s(e,t,n){let r=e.createShader(e.VERTEX_SHADER);e.shaderSource(r,t),e.compileShader(r);let i=e.getShaderInfoLog(r);if(i.length>0)throw console.log(t),i;let a=e.createShader(e.FRAGMENT_SHADER);if(e.shaderSource(a,n),e.compileShader(a),i=e.getShaderInfoLog(a),i.length>0)throw console.log(n),i;let o=e.createProgram();if(e.attachShader(o,r),e.attachShader(o,a),e.linkProgram(o),!e.getProgramParameter(o,e.LINK_STATUS)){let t=e.getProgramInfoLog(o);throw console.error(`Shader program linking failed:`),console.error(t),e.deleteProgram(o),e.deleteShader(r),e.deleteShader(a),Error(t)}return o}function c(e,t,n){let r=e.createTexture();return e.bindTexture(e.TEXTURE_2D,r),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,t,n,0,e.RGBA,e.UNSIGNED_BYTE,null),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),r}function l(e,t){let n=e.createTexture();return e.bindTexture(e.TEXTURE_2D,n),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),n}function u(e,t,n,r){let i=e.getAttribLocation(t,n);e.bindBuffer(e.ARRAY_BUFFER,r),e.vertexAttribPointer(i,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(i),e.bindBuffer(e.ARRAY_BUFFER,null)}function d(e,t,n){n.activeTexture(n.TEXTURE0+e),n.bindTexture(n.TEXTURE_2D,t)}function f(e,t){let n=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,n),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}function p(){M.bindFramebuffer(M.FRAMEBUFFER,null)}var m,h,g=[],_=`
	attribute vec2 coordinatesC; // given in world coordinates
	varying vec2 vCoord; // given in world pixel coordinates
	
	uniform float viewX;
	
	void main( void ){
		
		
		// basically all we do is take the coordinate attribute and scale it to the coord varying. Also, we factor in the view position
		vec2 coord = coordinatesC;
		
		coord.x -= viewX;
		coord.x /= 20.0;
		coord.y /= 15.0;
		
		coord.x *= 2.0;
		coord.y *= 2.0;
		
		coord -= vec2( 1.0, 1.0 );
		
		
		
		gl_Position = vec4( coord, -0.01, 1.0);
		
		
		vCoord = coordinatesC;
		
	}
	`,v=`
	precision mediump float;

	varying vec2 vCoord; // given in world pixel coordinates
	
	uniform float lavaTime;
	
	float rand(vec2 p) {
		p = mod( p, 1000.0); // to prevent errors from it getting too big
		// from https://www.shadertoy.com/view/4djSRW by iq
		p = fract(p * vec2(127.1, 311.7));
		p += dot(p, p + 34.345);
		return fract(p.x * p.y);
	}
	
	
	
	
	float rand3(vec3 p) {
		
		p = mod( p, 1000.0); // to prevent errors from it getting too big
		
		p = fract(p * vec3(127.1, 311.7, 74.7));
		p += dot(p, p.yzx + 19.19);
		return fract((p.x + p.y) * p.z);
	}
	
	
	
	// returns value noise for the vec3.  There is a distance of 1 between corners, so take scaling into account in the imlpementation, it is not taken care of here
	float noise( vec3 x ){
		
		
		vec3 xm = fract( x );
		vec3 xb = x - xm;
		
		return mix(
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z)),
					xm.x
				),
				xm.y
			),
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z + 1.0)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z + 1.0)),
					xm.x
				),
				xm.y
			),
			xm.z
		);
	}
	
	void main(void) {
		
		vec3 x = vec3( 32.0 * vCoord / 15.0, lavaTime / 130.0 );
		
		x.x -= lavaTime / 37.0; // to have the lava slowly move
		
		
		
		float result = noise( x );
		
		// add the second octave
		result *= 0.7;  // to make sure that it does not go over 1
		result += 0.3 * noise( x * 2.0 );
		
		// add the 3rd octave
		result *= 0.7;  // to make sure that it does not go over 1
		result += 0.3 * noise( x * 0.03 );
		
		
		
		
		gl_FragColor = vec4( 1.0, result, 0.0, 1.0 );
		
		
	}
`;function y(){m=s(M,_,v),M.useProgram(m),h=M.createBuffer(),g=[];let t=function(e,t,n,r){let i=e+n,a=t+r;g[g.length]=e,g[g.length]=t,g[g.length]=i,g[g.length]=t,g[g.length]=e,g[g.length]=a,g[g.length]=i,g[g.length]=a,g[g.length]=i,g[g.length]=t,g[g.length]=e,g[g.length]=a};for(let i=0;i<n;i++)for(let n=0;n<r;n++)e(i,n)==2&&t(i,n,1,1);M.bindBuffer(M.ARRAY_BUFFER,h),M.bufferData(M.ARRAY_BUFFER,new Float32Array(g),M.STATIC_DRAW);let i=M.getAttribLocation(m,`coordinatesC`);M.vertexAttribPointer(i,2,M.FLOAT,!1,0,0),M.enableVertexAttribArray(i),M.bindBuffer(M.ARRAY_BUFFER,null)}function b(e,t){M.useProgram(m),u(M,m,`coordinatesC`,h),M.uniform1f(M.getUniformLocation(m,`lavaTime`),t),M.uniform1f(M.getUniformLocation(m,`viewX`),e),M.drawArrays(M.TRIANGLES,0,g.length/2)}var x=32;function ee(e){let r=t.map(e=>e.map(e=>e==1)),i=[];for(let t=0;t<n/20;t++)i.push(S(e,r.slice(t*20,(t+1)*20),0,0));return i}function te(e,t){let n=t.length,r=t[0].length,i=document.createElement(`canvas`);i.width=n,i.height=r;let a=i.getContext(`2d`);for(let e=0;e<n;e++)for(let n=0;n<r;n++)a.fillStyle=t[e][n]?`rgb(255,255,255)`:`rgb(0,0,0)`,a.fillRect(e,n,1,1);return l(e,i)}function S(e,t,n,r){let i=te(e,t),a=t.length*x,o=t[0].length*x,l=c(e,a,o);f(e,l),e.viewport(0,0,a,o),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);let u=s(e,`
	attribute vec2 coordIn; // spans the whole thing in clip coords
	
	varying vec2 vCoord; // spans the whole thing in uv coords
	
	void main ( void ){
		
		gl_Position = vec4( coordIn, -0.1, 1.0);
		vCoord = (coordIn / 2.0) + vec2( 0.5, 0.5);
	}
	`,`
	precision mediump float;
	
	uniform sampler2D uLayoutDataTex;
	
	uniform float texWidth;
	
	
	uniform float foggyness;
	
	uniform float noiseXOffset; // measured in pixels relative to world
	
	varying vec2 vCoord;
	
	
	float rand(vec2 co){
		return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
	}
	
	
	float werlin( float x) {
		
		
		float xm = fract( x );
		
		float xb = x - xm;
		float bottom = rand( vec2( xb, 1.0 ));
		float top = rand( vec2( xb + 1.0, 1.0 ));
		
		return mix( bottom, top, xm );
		
		
	}
	
	
	
	
	
	float rand3( vec3 inputVar ){
		
		return rand( vec2( inputVar.x + 17.0 * inputVar.z, inputVar.y + 13.0 * inputVar.z ));
	}
	
	
	
	// returns value noise for the vec3.  There is a distance of 1 between corners, so take scaling into account in the imlpementation, it is not taken care of here
	float noise( vec3 x ){
		
		
		vec3 xm = fract( x );
		vec3 xb = x - xm;
		
		return mix(
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z)),
					xm.x
				),
				xm.y
			),
				mix(
					mix(
						rand3( vec3(xb.x, xb.y, xb.z + 1.0) ),
						rand3( vec3(xb.x + 1.0, xb.y, xb.z + 1.0)),
						xm.x
					),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z + 1.0)),
					xm.x
				),
				xm.y
			 ),
			 xm.z
		);
	}
	
	
	void main ( void ){
		
		
		vec2 locInPixels = vCoord;
		locInPixels.x *= texWidth;
		locInPixels.x += noiseXOffset;
		locInPixels.y *= 480.0;
		// now that we have multiplied in those numbers locInPixels actually lives up to its name. It is measured relative to the world
		
		
		float isInUpperStalagtites = step( 0.0, 100.0 * werlin( locInPixels.x / 5.0 ) + 200.0 *werlin( locInPixels.x / 50.0 ) - 100.0  - (480.0 - locInPixels.y) );// for some unknown reason I need that 480-y part to flip the y
		
		vec2 offset = vec2( noise( vec3(locInPixels / 30.0, 1.0)), noise( vec3(locInPixels / 30.0, 2.0))) - vec2(0.5, 0.5);
		
		locInPixels += offset * 10.0;
		
		vec2 bottomLeftCorner = locInPixels - mod( locInPixels, 32.0);
		
		// vec4 stone = vec4( texture2D( uLayoutDataTex, vCoord ) );
		vec4 stone = vec4( texture2D( uLayoutDataTex, (bottomLeftCorner+ vec2(16.0,16.0) ) / vec2( texWidth,480.0) ) ); // we need to add the 16s because that put it in the center of the block, instead of at the corner (16 is half of 32). That is important so that it samples from the middle of the pixel, not the corner where it may be blended with other stuff
		
		
		
		if( stone.x + isInUpperStalagtites < 0.5){ // if it is not stone at all nor stalagtite
			discard;
		}
		
		
		
		
		float color = 0.0; // the basic stone color
		color = noise( vec3( locInPixels /100.0, 7.0 ) ); // base stone octave 1
		
		color *= 0.8;
		color += 0.2 * noise( vec3( locInPixels / 10.0, 8.0 ) ); // add base stone octave 2
		
		// make color be a variation of grey, not 0 to 1
		color *= 0.4;
		color += 0.3;
		
		float mossness = 0.7 * noise( vec3( locInPixels * 0.07, 9.0 ) ) + 0.3 * noise( vec3( locInPixels * 0.2, 10.0 ) );
		mossness *= 0.6;
		mossness = smoothstep( 0.25, 0.6, mossness );
		
		vec4 stoneColor = vec4( color, color, color, 1.0 );
		
		float msClrFlt = noise( vec3( locInPixels * 0.1, 11.0 ) );
		vec4 mossColor = vec4( 0.0, msClrFlt, 0.0, 1.0 );
		
		vec4 endColor = mix( stoneColor, mossColor, mossness );
		
		
		vec4 fogColor = vec4( 0.9, 0.9, 1.0, 1.0);
		
		gl_FragColor = mix( endColor, fogColor, foggyness);
		
		
		if( isInUpperStalagtites > 0.5){ // if it is in the upper stalagtites, that takes priority, so overwrite our previous work
			gl_FragColor = vec4( 0.5, 0.5, 0.5, 1 );
		}
		
	}
	
	
	`);e.useProgram(u);let d=[-1,-1,-1,1,1,1,-1,-1,1,-1,1,1],p=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,new Float32Array(d),e.STATIC_DRAW);let m=e.getAttribLocation(u,`coordIn`);e.vertexAttribPointer(m,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(m),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,i);let h=e.getUniformLocation(u,`foggyness`);return e.uniform1f(h,n),e.uniform1f(e.getUniformLocation(u,`texWidth`),a),e.uniform1f(e.getUniformLocation(u,`noiseXOffset`),r),e.drawArrays(e.TRIANGLES,0,d.length/2),e.bindFramebuffer(e.FRAMEBUFFER,null),l}var C=`
attribute vec2 clipSpaceSpanningVertLoc;

// all of these are measured in pixels
uniform float xDrawingAreaStart; // relative to screen, can be negative, in pixels
uniform float xOfTexStart; // relative to tex, in pixels
uniform float widthOfTexToUse; // in pixels
uniform float texTotalWidth; // in pixels
uniform float xOfLightmapStart; // relative to lightmap tex, in pixels

uniform float depth;


//uniform float textureWidth;
//uniform float xPositionOfTexture;// in pixels relative to the screen, usually or always a negative number


varying vec2 uvOfParalaxTexture;
varying vec2 uvOfLightmap;


void main(void){
	
	// first we will figure out the clip space location on the screen
	vec2 position = clipSpaceSpanningVertLoc * 0.5 + vec2(0.5,0.5);
	position *= vec2( widthOfTexToUse, 480.0);
	position.x += xDrawingAreaStart;
	position /= vec2( 640.0, 480.0);
	gl_Position = vec4( position * 2.0 - vec2( 1.0, 1.0), depth, 1.0);
	
	// now, we figure out the uv for the paralax texture
	vec2 texUV = clipSpaceSpanningVertLoc * 0.5 + vec2(0.5,0.5);
	texUV.x *= widthOfTexToUse / texTotalWidth; // it is 0 or 1 to start, this puts it to 0 or widthOfTexToUse/texTotalWidth
	texUV.x += xOfTexStart / texTotalWidth; // this should get us to the result we want
	uvOfParalaxTexture = texUV;
	
	
	// now, figure out the lightmap UV
	vec2 lightmapUV = clipSpaceSpanningVertLoc * 0.5 + vec2(0.5,0.5);
	lightmapUV.x *= widthOfTexToUse / 640.0; // it is 0 or 1 to start, this puts it to 0 or widthOfTexToUse/texTotalWidth
	lightmapUV.x += xOfLightmapStart / 640.0; // this should get us to the result we want
	lightmapUV.y = 1.0 - lightmapUV.y; // for whatever unknown reason, flip the y
	uvOfLightmap = lightmapUV;
	
	
}
`,w=`
precision mediump float;

uniform sampler2D utexture;
uniform sampler2D lightmap;

varying vec2 vCoord; // location in clip space

varying vec2 uvOfParalaxTexture;
varying vec2 uvOfLightmap;

void main ( void ){
	
	
	vec4 resultWithoutLighting = texture2D( utexture, uvOfParalaxTexture);
	if( resultWithoutLighting.a < 1.0){
		discard;
	}
	
	vec4 lighting = texture2D( lightmap, uvOfLightmap);
	
	gl_FragColor = lighting * resultWithoutLighting;
}


`;function T(e,t,n,r,i){let a=t,o=[-1,-1,-1,1,1,1,-1,-1,1,-1,1,1],l=c(e,a,480);f(e,l),e.viewport(0,0,a,480),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT);let u=s(e,`
	precision lowp float;
	
	
	attribute vec2 coordIn;
	
	
	uniform float textureWidth;
	
	varying vec2 vCoord;
	
	void main ( void ){
		
		
		gl_Position = vec4( coordIn, 0.0, 1.0);
		
		
		
		// for now just shifts from clipspace to pixels
		
		
		vCoord = coordIn;
		vCoord /= 2.0;
		vCoord += vec2( 0.5, 0.5 );
		// now x and y both range from 0 to 1
		
		vCoord.x *= textureWidth;
		vCoord.y *= 480.0;
	}
	
	
	
	`,`
	precision lowp float;
	
	varying vec2 vCoord;
	
	
	uniform float stoneHeight;
	uniform float textureWidth;
	uniform float fogAmount;
	uniform float noiseStartSpot; // this is the place that the noise will be treated as starting
	
	// at least some code from other places, including https://gist.github.com/patriciogonzalezvivo/670c22f3966e662d2f83
	
	float rand(float n){return fract(sin(n) * 43758.5453123);}
	
	
	float noise1D(float p){
		float fl = floor(p);
		float fc = fract(p);
		return mix(rand(fl), rand(fl + 1.0), fc);
	}
	
	
	float rand(vec2 co){
	    return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
	}


	float rand3( vec3 inputVar ){
		
		return rand( vec2( inputVar.x + 17.0 * inputVar.z, inputVar.y + 13.0 * inputVar.z ));
	}
	
	
	
	// returns value noise for the vec3.  There is a distance of 1 between corners, so take scaling into account in the imlpementation, it is not taken care of here
	float noise( vec3 x ){
		
		
		vec3 xm = fract( x );
		vec3 xb = x - xm;
		
		return mix(
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z)),
					xm.x
				),
				xm.y
			),
			mix(
				mix(
					rand3( vec3(xb.x, xb.y, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y, xb.z + 1.0)),
					xm.x
				),
				mix(
					rand3( vec3(xb.x, xb.y + 1.0, xb.z + 1.0) ),
					rand3( vec3(xb.x + 1.0, xb.y + 1.0, xb.z + 1.0)),
					xm.x
				),
				xm.y
			),
			xm.z
		);
	}

	
	
	void main(void) {
		
		// coord is in pixels
		vec2 coord = vCoord;
		coord.x += noiseStartSpot; // this makes it so that all the noises start at a different spot. That also makes it so that texture sections generated at different times line up with each other
		
		float TOP_THICKNESS = stoneHeight; // 0 < this < 1; this < .5 for no overlap
		float BOTTOM_THICKNESS = TOP_THICKNESS;
		
		float stalagtiteThickness = noise1D( coord.x / 50.0 );
		stalagtiteThickness += noise1D( coord.x / 10.0) * 0.2;
		stalagtiteThickness += noise1D( coord.x / 5.0) * 0.1;
		
		
		float stalagmiteThickness = noise1D( (coord.x + textureWidth + 50.0) / 50.0 );
		stalagmiteThickness += noise1D( (coord.x + textureWidth + 50.0) / 10.0) * 0.2;
		stalagmiteThickness += noise1D( (coord.x + textureWidth + 50.0) / 5.0) * 0.1;
		
		float stoneness = 0.0;
		
		float topStoneness = step( 0.0, coord.y / 480.0 - ( TOP_THICKNESS * stalagtiteThickness + ( 1.0 - TOP_THICKNESS ) ) );
		
		
		float bottomStoneness = step( 0.0, BOTTOM_THICKNESS * stalagmiteThickness  - coord.y / 480.0 );
		
		
		stoneness = max( bottomStoneness, topStoneness); // if it is bottom || top
		
		// now stoneness has 0 if it is air, and 1 if it is stone
		
		// now, add variations to the stone's greyness
		
		float stoneColorFloat = noise( vec3( vCoord / 50.0, 1.0 ));
		stoneColorFloat = stoneColorFloat * 0.2 + 0.4;
		// octive 2
		stoneColorFloat = stoneColorFloat * 0.91 + 0.09 * noise( vec3( vCoord / 1.0, 2.0 ));
		
		
		
		vec4 stoneColor = vec4( stoneColorFloat, stoneColorFloat, stoneColorFloat, 1.0 );
		vec4 fogColor = vec4( 0.9, 0.9, 1.0, 1.0 );
		
		
		vec4 color = mix( stoneColor, fogColor, fogAmount );
		
		
		gl_FragColor = vec4( color.rgb, stoneness);
		
		
		
	}
	`);e.useProgram(u);let d=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,d),e.bufferData(e.ARRAY_BUFFER,new Float32Array(o),e.STATIC_DRAW);let p=e.getAttribLocation(u,`coordIn`);return e.vertexAttribPointer(p,2,e.FLOAT,!1,0,0),e.enableVertexAttribArray(p),e.uniform1f(e.getUniformLocation(u,`stoneHeight`),n),e.uniform1f(e.getUniformLocation(u,`textureWidth`),a),e.uniform1f(e.getUniformLocation(u,`fogAmount`),r),e.uniform1f(e.getUniformLocation(u,`noiseStartSpot`),i),e.drawArrays(e.TRIANGLES,0,o.length/2),e.bindFramebuffer(e.FRAMEBUFFER,null),l}var E=`
<svg
   width="32mm"
   height="32mm"
   viewBox="0 0 32 32"
   version="1.1"
   id="air"
   inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
   sodipodi:docname="transparent.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#111111"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="3.3923681"
     inkscape:cx="53.207669"
     inkscape:cy="53.207669"
     inkscape:window-width="1314"
     inkscape:window-height="704"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2">
    <inkscape:path-effect
       effect="bspline"
       id="path-effect16002"
       is_visible="true"
       lpeversion="1"
       weight="33.333333"
       steps="2"
       helper_size="0"
       apply_no_weight="true"
       apply_with_weight="true"
       only_selected="false" />
  </defs>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1" />
</svg>
`,ne=`
<svg
   width="32mm"
   height="32mm"
   viewBox="0 0 32 32"
   version="1.1"
   id="save"
   inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
   sodipodi:docname="save.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#111111"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="3.3923681"
     inkscape:cx="53.207669"
     inkscape:cy="53.207669"
     inkscape:window-width="1314"
     inkscape:window-height="704"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2">
    <inkscape:path-effect
       effect="bspline"
       id="path-effect16002"
       is_visible="true"
       lpeversion="1"
       weight="33.333333"
       steps="2"
       helper_size="0"
       apply_no_weight="true"
       apply_with_weight="true"
       only_selected="false" />
  </defs>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       style="fill:none;stroke:#18ff00;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-dasharray:none"
       d="M 31.737072,0.43795247 C 21.205777,4.8338429 10.674156,9.2298696 9.9874192,12.679698 c -0.6867371,3.449828 8.4708038,5.953068 8.4593398,8.971844 -0.01146,3.018776 -9.1915218,6.553182 -18.37210774,10.087792"
       id="path16000"
       inkscape:path-effect="#path-effect16002"
       inkscape:original-d="M 31.737072,0.43795247 C 21.205971,4.8343071 10.67435,9.2303334 0.14221009,13.626032 9.3006349,16.129699 18.458176,18.632939 27.61538,21.135901 18.435472,24.670776 9.2554138,28.205183 0.07465126,31.739334" />
  </g>
</svg>
`,re=`
<svg
   width="32mm"
   height="32mm"
   viewBox="0 0 32 32"
   version="1.1"
   id="spike"
   inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
   sodipodi:docname="spike.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#111111"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="3.3923681"
     inkscape:cx="53.207669"
     inkscape:cy="53.207669"
     inkscape:window-width="1318"
     inkscape:window-height="704"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2">
    <inkscape:path-effect
       effect="bspline"
       id="path-effect16002"
       is_visible="true"
       lpeversion="1"
       weight="33.333333"
       steps="2"
       helper_size="0"
       apply_no_weight="true"
       apply_with_weight="true"
       only_selected="false" />
  </defs>
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-dasharray:none"
       d="M -0.22392722,15.353486 32.145284,15.217301"
       id="path4348" />
    <path
       style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-dasharray:none"
       d="M 15.981091,0.66660238 16.281793,32.282384"
       id="path4350" />
    <path
       style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-dasharray:none"
       d="M 6.9694681,7.516338 24.834899,24.348353"
       id="path4352" />
    <path
       style="fill:none;stroke:#000000;stroke-width:3;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;stroke-dasharray:none"
       d="M 25.863441,6.2072014 6.4884053,25.401268"
       id="path4354" />
  </g>
</svg>
`,ie=`
<svg
   width="32"
   height="32"
   viewBox="0 0 32 32"
   version="1.1"
   id="vine"
   inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
   sodipodi:docname="vine.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#111111"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="px"
     showgrid="false"
     inkscape:zoom="13.569472"
     inkscape:cx="19.787063"
     inkscape:cy="14.481035"
     inkscape:window-width="1314"
     inkscape:window-height="704"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <path
       style="fill:none;stroke:#00d300;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 7.3156515,0.18135838 c 2.0899999,1.21731242 0.3675632,0.1609117 2.3835672,1.55133382 1.0766053,0.742526 0.3984013,0.1315496 1.4258223,1.1016801 0.250245,0.2362915 0.563508,0.5142539 0.712767,0.8425968 0.0456,0.100323 0.03832,0.2172338 0.06506,0.3241421 0.05976,0.2388992 0.128433,0.4754832 0.194312,0.7127672 0.105122,0.3786231 0.257574,0.8654078 0.324143,1.2315098 0.08198,0.4508909 0.119014,0.9089956 0.194312,1.3610514 0.131661,0.7904328 0.18412,0.4865941 0.259371,1.4258223 0.02071,0.2584471 0,0.5185506 0,0.7778259 0,0.4622412 0.03053,0.6735752 -0.06477,1.1016802 -0.03839,0.172471 -0.271111,0.310261 -0.388913,0.388913 -0.03969,0.0265 -0.11037,0.01961 -0.128103,0.06391 -0.07302,0.182422 -0.08521,0.383636 -0.127814,0.575453 -0.37372,1.682576 0.07566,-0.427123 -0.194313,1.10168 -0.03465,0.196225 -0.07506,0.391927 -0.129829,0.583514 -0.03195,0.111789 -0.08638,0.215896 -0.129542,0.323854 -0.0432,0.108041 -0.08777,0.215544 -0.129542,0.324142 -0.06628,0.172283 -0.12188,0.348792 -0.1946,0.518455 -0.05709,0.133198 -0.129516,0.259288 -0.194313,0.388913 -0.129612,0.259288 -0.254431,0.521029 -0.388913,0.777826 -0.103162,0.196991 -0.194621,0.402264 -0.323854,0.583225 -0.0888,0.124348 -0.216095,0.216095 -0.324142,0.324142 -0.1728183,0.172819 -0.3526767,0.338872 -0.5184547,0.518455 -0.058512,0.06338 -0.3856504,0.482612 -0.4536838,0.583225 -0.026133,0.03865 -0.031782,0.09108 -0.064771,0.124073 -0.050491,0.05049 -0.1241737,0.07219 -0.1781918,0.11889 -0.086227,0.07454 -0.2852668,0.235139 -0.3232785,0.387186 -0.031427,0.125709 -0.04355,0.255475 -0.063907,0.383443 -0.1296377,0.821007 -0.2592753,1.642013 -0.388913,2.46302 -0.02159,0.194408 -0.037126,0.389585 -0.064771,0.583225 -0.068299,0.478397 -0.085807,0.208889 -0.1295417,0.777826 -0.00994,0.129257 0,0.259276 0,0.388913 0,0.129542 0,0.259084 0,0.388625 0,0.410504 0,0.821007 0,1.23151 0,0.08646 -0.00616,0.173134 0,0.259371 0.015456,0.216524 0.053367,0.431221 0.064771,0.647997 0.010213,0.19414 0,0.388817 0,0.583225 0,0.583322 0,1.166643 0,1.749965 0,0.232924 -0.018795,0.532643 0,0.751917 0.011216,0.130849 0.043181,0.259084 0.064771,0.388625 0.02159,0.237685 0.047778,0.474997 0.064771,0.713055 0.01206,0.168943 0,0.349055 0,0.518455 0,0.02159 -0.00468,0.04369 0,0.06477 0.038622,0.173798 0.090609,0.344438 0.1295417,0.518167 0.017479,0.078 -0.016361,0.161556 0,0.239796 0.0099,0.04734 0.049395,0.08397 0.064771,0.129829 0.028035,0.08361 0.045864,0.170362 0.064771,0.256493 0.00938,0.04272 0,0.105506 0,0.148253 0,0.129638 0.029678,0.262718 0,0.388913 -0.057872,0.246085 -0.1741061,0.47468 -0.2590834,0.712767 -0.071559,0.200492 -0.064771,0.130795 -0.064771,0.259084"
       id="path2977" />
    <path
       style="fill:none;stroke:#008c00;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 21.401728,-0.06448298 c 0.04107,0.10161827 0.0694,0.20936986 0.123208,0.3048548 0.05303,0.0940956 0.131811,0.17120038 0.194601,0.25908339 0.0453,0.0634045 0.08632,0.12976017 0.129541,0.19460042 0.172779,0.25920592 0.386728,0.49524747 0.518455,0.77753807 0.173571,0.3719617 0.306993,0.7660875 0.389489,1.1681782 0.261994,1.2769848 0.449203,2.5684535 0.641663,3.8577518 0.04489,0.3006913 0.04663,0.6062551 0.06995,0.9093827 0.0902,0.6298605 0.158642,1.2632222 0.270598,1.8895816 0.273054,1.527648 0.120145,-0.030604 0.324142,1.296281 0.01314,0.08545 -0.01222,0.173782 0,0.259371 0.05039,0.352955 0.437085,0.607974 0.647996,0.842309 0.07231,0.08034 0.12978,0.172879 0.194601,0.259371 0.06462,0.08623 0.118932,0.18123 0.193736,0.258796 0.01292,0.0134 0.05315,-0.01842 0.05585,0 0.01842,0.125704 -0.0091,0.254418 0,0.38114 0.109532,1.528021 0.06391,-1.060162 0.06391,1.612074 0,0.324047 0,0.648093 0,0.972139 0,0.324046 0.02588,0.649127 0,0.972138 -0.01417,0.176833 -0.305604,1.419775 -0.324143,1.490881 -0.04169,0.15989 -0.315152,1.056114 -0.388913,1.231222 -0.09379,0.222655 -0.211125,0.434747 -0.324142,0.648284 -0.244773,0.462485 -0.2249,0.377136 -0.453683,0.777539 -0.110362,0.193147 -0.236273,0.379026 -0.323855,0.583513 -0.04334,0.101198 -0.02993,0.219425 -0.06477,0.323854 -0.0306,0.09171 -0.08931,0.171588 -0.129829,0.259371 -0.08915,0.193146 -0.168502,0.390747 -0.259083,0.583226 -0.08228,0.174844 -0.167761,0.348312 -0.259372,0.518455 -0.201276,0.373817 -0.215695,0.297393 -0.388913,0.713055 -0.05256,0.126126 -0.08159,0.260964 -0.129541,0.388913 -0.01694,0.04521 -0.04951,0.08374 -0.06477,0.129541 -0.468581,1.406437 -0.03971,0.04622 -0.129542,0.583226 -0.02052,0.122676 -0.18668,0.684002 -0.1946,0.713055 -0.02341,0.08588 -0.02972,0.177254 -0.06477,0.259083 -0.03068,0.07163 -0.09886,0.12297 -0.129542,0.194601 -0.03505,0.08183 -0.04028,0.173499 -0.06477,0.259083 -0.01882,0.06576 -0.05163,0.127536 -0.06506,0.194601 -0.03,0.149787 -0.03746,0.303384 -0.06477,0.453683 -0.01592,0.08759 -0.05672,0.17043 -0.06477,0.259084 -0.01369,0.150607 0,0.302456 0,0.453684 0,0.367322 0,0.734645 0,1.101968 0,0.08636 0.0086,0.17315 0,0.259083 -0.07124,0.71274 -0.03847,0.101435 -0.129542,0.648284 -0.0071,0.04259 0.0081,0.08712 0,0.129542 -0.01249,0.06552 -0.05019,0.124756 -0.06103,0.19057 -0.0097,0.05918 0.0088,0.120588 0,0.179919 -0.01299,0.08807 -0.04136,0.173199 -0.06477,0.259084 -0.09265,0.339858 -0.189252,0.648737 -0.324142,0.972426 -0.06328,0.151857 -0.127949,0.303148 -0.194313,0.453684 -0.01877,0.04257 -0.0356,0.08656 -0.06103,0.125511 -0.03242,0.04966 -0.08675,0.08117 -0.1258,0.1258 -0.131131,0.149852 -0.264258,0.298172 -0.388625,0.453683 -0.0487,0.0609 -0.07469,0.139462 -0.12983,0.194601 -0.05504,0.05504 -0.130953,0.08431 -0.194312,0.129542 -0.343452,0.245167 -0.14282,0.136036 -0.377974,0.253613"
       id="path2981" />
    <path
       style="fill:none;stroke:#00ff00;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 19.26285,-0.52306059 C 17.856987,1.1083971 15.71231,2.323594 15.045261,4.3713126 c -0.477163,1.4648032 0.735086,2.9931294 1.166451,4.4720673 0.02567,0.088001 0.139593,0.1209833 0.1946,0.1943125 0.07559,0.1007727 0.129485,0.2161286 0.194313,0.3241422 0.0035,0.00589 0.385863,0.6418914 0.388913,0.6479964 0.284861,0.570228 0.0078,0.08623 0.194312,0.583225 0.03398,0.09052 0.08657,0.172908 0.12983,0.259372 0.06481,0.129523 0.129426,0.25914 0.194312,0.388625 0.02163,0.04316 0.04934,0.0838 0.06477,0.129541 0.0067,0.01973 -0.0077,0.04314 0,0.06247 0.0073,0.01827 0.02783,0.02783 0.04174,0.04174 0.07903,0.07903 0.184403,0.162579 0.249872,0.249871 0.0084,0.01121 0.0051,0.02897 0,0.04203 -0.111599,0.287856 -0.241889,0.568118 -0.36502,0.851233 -0.07226,0.166147 -0.49244,1.039681 -0.583225,1.425822 -0.115426,0.490944 -0.143796,0.999685 -0.259372,1.490594 -0.02667,0.113259 -0.0823,0.217805 -0.129541,0.324142 -0.131538,0.296106 -0.368788,0.667913 -0.518455,0.907367 -0.08259,0.132136 -0.177713,0.256201 -0.259371,0.388913 -0.09126,0.148322 -0.169491,0.304348 -0.259084,0.453684 -0.163719,0.322043 -0.396862,0.599889 -0.583225,0.907368 -0.04328,0.08425 -0.08655,0.1685 -0.12983,0.25275 0.01718,0.01718 0.05283,0.02727 0.05153,0.05153 -0.0037,0.06827 -0.04142,0.130345 -0.06477,0.1946 -0.06303,0.173462 -0.130502,0.345279 -0.194312,0.518455 -0.0878,0.238292 -0.150665,0.486971 -0.260523,0.715934 -0.884433,1.843302 -0.0923,0.115022 -1.102544,1.492608 -0.315546,0.430285 -0.562971,0.906602 -0.842597,1.361051 -0.06602,0.107291 -0.131789,0.214779 -0.194312,0.324142 -0.02398,0.04195 -0.05329,0.08268 -0.06506,0.129542 -0.01046,0.04168 0.01916,0.204993 0,0.249008 -0.0578,0.132752 -0.134958,0.256432 -0.194025,0.388625 -0.163862,0.366731 -0.238107,1.036572 -0.190858,1.414883 0.0455,0.364293 0.219148,0.786386 0.388913,1.10168 0.05121,0.09512 0.129488,0.172955 0.194313,0.259372 0.200391,0.267139 0.239859,0.344157 0.518742,0.583225 0.03665,0.03142 0.08813,0.03995 0.129542,0.06477 0.458621,0.274846 -0.134925,-0.0027 0.711328,0.388337 0.105627,0.0488 0.222438,0.07302 0.324142,0.129542 0.09441,0.05247 0.170605,0.132653 0.259083,0.1946 0.127604,0.08934 0.259286,0.172708 0.388913,0.259084 0.06478,0.04317 0.135211,0.07888 0.194313,0.129542 0.09283,0.07958 0.172914,0.172914 0.259371,0.259371 0.284903,0.284902 0.287416,0.245036 0.453684,0.518454 0.136183,0.223945 -0.0017,0.123075 0.06477,0.282689 0.02994,0.07186 0.112663,0.11832 0.129542,0.194313 0.02811,0.126553 0,0.259275 0,0.388913 0,0.06487 0,0.129733 0,0.1946 0,0.268441 0.03097,0.278537 -0.04836,0.48535 -0.01589,0.04143 -0.04294,0.07793 -0.0593,0.119178 -0.02519,0.06349 -0.04842,0.128064 -0.06506,0.194313 -0.04119,0.164045 0.126084,-0.06131 -0.123208,0.187979"
       id="path2983" />
    <path
       style="fill:none;stroke:#00e800;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="m 4.1456222,-0.96062366 c 0.3626767,0.7844855 0.2119958,0.5104123 0.5771802,1.14111843 0.150401,0.25975589 0.2845965,0.52982784 0.4536838,0.77782592 0.1558319,0.22855641 0.3504015,0.42826981 0.5184547,0.64799641 0.1129124,0.1476309 0.218362,0.3008613 0.3241421,0.4536838 0.1442628,0.208419 0.3710249,0.5298492 0.4536838,0.7778259 0.2148759,0.6446275 0.2353392,0.996188 0.2590834,1.6851935 0.011161,0.323854 -0.03455,0.6499395 0,0.9721385 0.030735,0.2866157 0.1507503,0.5576927 0.1946004,0.8425968 0.1190838,0.773714 0.048407,1.5582441 0,2.3331899 -0.012195,0.1952232 -0.030746,0.3906038 -0.064771,0.5832255 -0.080585,0.4562141 -0.4478504,1.507867 -0.5184547,1.749964 -0.030854,0.105795 -0.032637,0.218817 -0.065059,0.324143 -0.054297,0.176389 -0.1318016,0.344806 -0.1943125,0.518454 -0.1319054,0.366418 -0.2734966,0.729739 -0.388913,1.10168 -0.079202,0.255237 -0.1227767,0.520335 -0.1943125,0.777826 -0.036584,0.131683 -0.098511,0.25588 -0.1298296,0.388913 -0.055246,0.234671 -0.089658,0.473804 -0.1292538,0.711616 -0.02509,0.150687 -0.02938,0.305079 -0.064771,0.453684 -0.1643925,0.690273 -0.3261203,1.004693 -0.4536838,1.684905 -0.080537,0.429449 -0.1177724,0.866153 -0.1946004,1.296281 -0.031322,0.175356 -0.094627,0.343779 -0.1295417,0.518455 -0.029942,0.149798 -0.034838,0.303884 -0.064771,0.453684 -0.013396,0.06704 -0.057228,0.126652 -0.064771,0.1946 -0.032639,0.294037 0.020138,0.552385 0.064771,0.842597 0.065885,0.428398 0.071203,0.445809 0.1943126,0.907367 0.040538,0.151985 0.1016417,0.298932 0.1298295,0.453684 0.015476,0.08496 -0.027298,0.17715 0,0.259084 0.039819,0.119515 0.1169651,0.224709 0.1943126,0.324142 0.075031,0.09645 0.2258198,0.141578 0.2593713,0.259083 0.02141,0.07498 -0.1051599,0.120628 -0.1298296,0.1946 -0.041578,0.124673 -0.028687,0.262541 -0.064771,0.388913 -0.093777,0.328429 -0.2197546,0.646835 -0.3238542,0.972139 -0.089567,0.279889 -0.1502302,0.569744 -0.2593713,0.842597 -0.017898,0.04474 -0.04947,0.08355 -0.064771,0.129254 -0.00679,0.02029 0.01338,0.04749 0,0.06419 -0.076284,0.09521 -0.1807016,0.165068 -0.2587955,0.258795 -0.030904,0.03709 -0.039949,0.08813 -0.064771,0.129542 -0.2734258,0.456115 0.017377,-0.09957 -0.2593713,0.453684 -0.2670877,0.533938 -0.1381138,0.258132 -0.388625,0.842596 -0.064826,0.151246 -0.1330042,0.301095 -0.1946005,0.453684 -0.02491,0.06171 -0.054782,0.12305 -0.064771,0.188843 -0.011897,0.07836 0,0.158521 0,0.237781 0,0.191914 0,0.383827 0,0.575741 0,0.108047 0,0.216095 0,0.324142 0,0.04318 0,0.08636 0,0.129542 0,0.04011 -0.00973,0.08142 0,0.12033 0.010876,0.0435 0.042561,0.07908 0.060165,0.12033 0.045676,0.107016 0.077506,0.220069 0.1295417,0.324142 0.056359,0.112719 0.1583534,0.203444 0.1946004,0.324142 0.015945,0.0531 0,0.493238 0,0.612876 0,0.171283 0,0.342566 0,0.513849 0,0.129541 0.016059,0.260082 0,0.388625 -0.043181,0.216095 -0.086361,0.432189 -0.1295417,0.648284 0.020535,0.02053 0.055287,0.03326 0.061604,0.0616 0.0011,0.0049 -0.2280227,0.20857 -0.2282813,0.227994 -6.387e-4,0.04798 0.047397,0.08418 0.06218,0.129829 0.079414,0.245228 -0.1005085,-0.100796 0.062468,0.06218 0.014724,0.01472 0,0.04165 0,0.06247 0.1233045,0 0.2466091,0 0.3699136,0"
       id="path2987" />
    <path
       style="fill:none;stroke:#00cf00;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       d="M 29.893042,0.42115445 C 27.935276,3.6582937 28.100958,2.8070217 27.378206,7.4017247 c -0.03302,0.2099059 0.13728,1.2571957 0.194313,1.6851936 0.023,0.1726357 0.03448,0.3469481 0.06477,0.5184546 0.03465,0.1961308 0.09074,0.3879328 0.12983,0.5832251 0.0258,0.128867 0.04128,0.259607 0.06477,0.388913 0.02159,0.108048 0.04318,0.216095 0.06477,0.324143 0.02159,0.06477 0.05138,0.127363 0.06477,0.194312 0.0085,0.04234 -0.01929,0.09091 0,0.129542 0.02732,0.05469 0.09285,0.08093 0.129541,0.129829 0.09345,0.124559 0.134175,0.317659 0.194601,0.453684 0.0588,0.13236 0.12249,0.262856 0.194312,0.388625 0.01517,0.02657 0.04318,0.04337 0.06477,0.06506 0.04328,0.06477 0.09498,0.124646 0.12983,0.194313 0.280204,0.560097 -0.01778,0.09867 0.259083,0.583225 0.125018,0.2188 0.255349,0.434594 0.388913,0.648284 0.08259,0.132136 0.19691,0.246157 0.259371,0.388913 0.06477,0.215999 0.129542,0.431998 0.194313,0.647997 0,0.04318 -0.01046,0.08765 0,0.129541 0.01172,0.04692 0.05278,0.08298 0.06477,0.12983 0.01524,0.05953 0,0.336779 0,0.403594 0,0.137488 0.09514,0.246557 0.06477,0.388337 -0.268877,1.255162 -0.09652,0.319658 -0.518454,1.620423 -0.166632,0.513711 -0.303121,1.036716 -0.453684,1.555364 -0.04385,0.151037 -0.08437,0.303039 -0.129542,0.453684 -0.01961,0.0654 -0.05138,0.127364 -0.06477,0.194312 -0.0085,0.04234 0.0179,0.09025 0,0.129542 -0.0082,0.0179 -0.04035,-0.0062 -0.05901,0 -0.02421,0.0081 -0.229378,0.11917 -0.247856,0.123784 -0.06284,0.01569 -0.129542,0 -0.194313,0 -0.129254,0 -0.258508,0 -0.387761,0 -0.04174,0 -0.08454,0.0093 -0.125224,0 -0.03857,-0.0088 -0.08352,-0.08537 -0.106224,-0.05297 -0.09057,0.129242 -0.04415,0.462546 -0.05757,0.595892 -0.05451,0.541273 -0.131998,1.079993 -0.194313,1.620423 -0.0072,0.06238 0,0.131185 0,0.194024 0,0.30236 0,0.60472 0,0.90708 0,0.151132 0,0.302264 0,0.453396 0,0.08646 -0.02732,0.177345 0,0.259371 0.0193,0.05794 0.09452,0.07952 0.129542,0.129542 0.116895,0.166961 0.221454,0.342399 0.324142,0.518455 0.04869,0.08348 0.08162,0.175451 0.129542,0.259371 0.215532,0.377422 0.55455,0.70336 0.972138,0.842597 0.188921,0.06299 0.390017,0.08128 0.583226,0.129542 0.06633,0.01657 0.127562,0.05136 0.1946,0.06477 0.04225,0.0084 0.08837,-0.01359 0.129254,0 0.02891,0.0096 0.04862,0.03865 0.06477,0.06448 0.0923,0.147679 0.186145,0.295544 0.259083,0.453684 0.16189,0.351002 0.115836,0.410571 0.1946,0.777826 0.03735,0.174171 0.11476,0.340938 0.129542,0.518455 0.0074,0.0888 -0.04314,0.172923 -0.06477,0.259371 -0.309574,1.237382 0.07597,-0.248846 -0.324142,1.10168 -0.114659,0.387015 -0.20545,0.780941 -0.324142,1.166739 -0.08923,0.290038 -0.217675,0.559583 -0.323854,0.842309 -0.02401,0.06394 -0.04839,0.128073 -0.06506,0.194313 -0.01045,0.0415 0.02375,0.09279 0,0.12839 -0.07667,0.114964 -0.18149,0.209315 -0.258795,0.323854 -0.01111,0.01646 0.0089,0.04183 0,0.05959 -0.01256,0.02505 -0.04421,0.03588 -0.05959,0.0593 -0.0264,0.04021 -0.03759,0.08917 -0.06419,0.129253 -0.01673,0.02521 -0.05024,0.03735 -0.0642,0.0642 -0.01425,0.02742 0.01515,0.06577 0,0.0927 -0.154097,0.273827 -0.193352,0.197123 -0.379413,0.568832 -0.0051,0.01015 0,0.299632 0,0.319248"
       id="path2989" />
  </g>
</svg>
`,ae=`
<svg
   width="32mm"
   height="32mm"
   viewBox="0 0 32 32"
   version="1.1"
   id="light-base"
   inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
   sodipodi:docname="light-base.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#111111"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="3.3923681"
     inkscape:cx="70.894429"
     inkscape:cy="57.629359"
     inkscape:window-width="1314"
     inkscape:window-height="704"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <rect
       style="fill:#877e7e;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="rect3692"
       width="25.999998"
       height="5.999999"
       x="3.0000005"
       y="26" />
    <rect
       style="fill:#877e7e;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="rect8790"
       width="5.999999"
       height="31.999998"
       x="13.000001"
       y="5.1697691e-07" />
    <ellipse
       style="fill:#877e7e;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="path8898"
       cx="16"
       cy="26"
       rx="12.999999"
       ry="2.9999993" />
    <ellipse
       style="fill:#877e7e;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="path8900"
       cx="16"
       cy="1.033"
       rx="3.9999995"
       ry="1.0329995" />
  </g>
</svg>
`,oe=`
<svg
   width="32mm"
   height="32mm"
   viewBox="0 0 32 32"
   version="1.1"
   id="light-mid"
   inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
   sodipodi:docname="light-mid.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#111111"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="3.3923681"
     inkscape:cx="53.207669"
     inkscape:cy="57.629359"
     inkscape:window-width="1314"
     inkscape:window-height="704"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <rect
       style="fill:#877e7e;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="rect8790"
       width="5.999999"
       height="31.999998"
       x="13.000001"
       y="5.1697691e-07" />
    <ellipse
       style="fill:#877e7e;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="path8900"
       cx="16"
       cy="1.033"
       rx="3.9999995"
       ry="1.0329995" />
    <ellipse
       style="fill:#877e7e;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="path8900-3"
       cx="16"
       cy="31"
       rx="3.9999995"
       ry="0.99999952" />
  </g>
</svg>
`,se=`
<svg
   width="32mm"
   height="32mm"
   viewBox="0 0 32 32"
   version="1.1"
   id="light-top"
   inkscape:version="1.2.2 (b0a8486, 2022-12-01)"
   sodipodi:docname="light-top.svg"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <sodipodi:namedview
     id="namedview7"
     pagecolor="#ffffff"
     bordercolor="#111111"
     borderopacity="1"
     inkscape:showpageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="1"
     inkscape:deskcolor="#d1d1d1"
     inkscape:document-units="mm"
     showgrid="false"
     inkscape:zoom="3.3923681"
     inkscape:cx="53.207669"
     inkscape:cy="53.207669"
     inkscape:window-width="1314"
     inkscape:window-height="704"
     inkscape:window-x="0"
     inkscape:window-y="0"
     inkscape:window-maximized="1"
     inkscape:current-layer="layer1" />
  <defs
     id="defs2" />
  <g
     inkscape:label="Layer 1"
     inkscape:groupmode="layer"
     id="layer1">
    <rect
       style="fill:#877e7e;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="rect8790"
       width="5.9999995"
       height="4.9999995"
       x="12.952474"
       y="26.552589"
       inkscape:transform-center-x="0.15172211"
       inkscape:transform-center-y="-1.478529" />
    <ellipse
       style="fill:#877e7e;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="path8900-3"
       cx="16"
       cy="31"
       rx="3.9999995"
       ry="0.99999952" />
    <rect
       style="fill:#93e1e2;fill-opacity:1;stroke:#000000;stroke-width:0;stroke-dasharray:none"
       id="rect8976"
       width="26.353949"
       height="20.795982"
       x="4.1315331"
       y="5.0174928" />
  </g>
</svg>
`,D=[];async function ce(){for(let e=0;e<O.length;e++)D[e]=await le(O[e])}function le(e,t){return new Promise(t=>{let n=new Blob([e],{type:`image/svg+xml;charset=utf-8`}),r=URL.createObjectURL(n),i=new Image;i.onload=()=>{URL.revokeObjectURL(r),t(i)},i.src=r})}var O=[E,E,E,ne,E,E,ae,oe,se,ie,E,re,E,E,E,E,E,E,E,E,E];function ue(t){let i=[],a=document.createElement(`canvas`);a.width=640,a.height=480;let o=a.getContext(`2d`);for(let s=0;s<n/20;s++){o.clearRect(0,0,640,480);for(let t=0;t<20;t++)for(let n=0;n<r;n++)o.drawImage(D[e(t+s*20,n)],t*32,(14-n)*32,32,32);i.push(l(t,a))}return i}var de=`
uniform vec2 p1Coord;

attribute vec2 coordIn;

uniform float viewX;

void main ( void ){

	// p1Coord and viewX are both in tiles with y == 0 at the bottom
	// coordIn values are -1,-1; 1,1; -1,1; and 1,-1


	vec2 normalizedCoordIn = 0.5 * ( coordIn + 1.0 );

	vec2 bottomLeftInTiles = vec2( p1Coord.x - viewX, p1Coord.y ); // relative to the screen in view

	vec2 thisCoordInTiles = bottomLeftInTiles + normalizedCoordIn * 20.0 / 32.0;

	vec2 result = thisCoordInTiles / vec2( 20.0, 15.0 );
	result *= 2.0;
	result -= 1.0;

	gl_Position = vec4( result, 0.0, 1.0);

}
`,fe=`
precision mediump float;


void main ( void ){
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0);

}
`,pe=`
attribute vec2 coordIn;
varying vec2 vCoord;
void main(void){
	vCoord = coordIn;
	gl_Position = vec4( coordIn, 0.0, 1.0);
}`,me=`
precision mediump float;
varying vec2 vCoord;
uniform vec3 centerColor;
void main(void){
	
	gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0);
	float distanceFromCenter = sqrt( dot( vCoord, vCoord) );
	float midCalculationValue = max( 0.0, 1.0 - distanceFromCenter);
	float brightness = midCalculationValue * midCalculationValue;
	gl_FragColor = vec4( centerColor * brightness, 1.0);
	
	
	// the alpha records the amount of lack of shadow
	
}
`,he=`
attribute vec4 coordIn;
uniform float lightRadius;
varying vec2 vShadowCoord;
void main(void){
	// the x and y of coordIn is the x and y of the point on this wall
	// the w coordinate is the w coordinate
	
	// the z of coordIn (only important if w==0) is ...
	// <.5 for go off counterclockwise part of light
	// >.5 for go off clockwise part of light
	// .25 < z < .75 this is not shaded, otherwise shaded
	
	// if w is 1, then just return the original x and y
	// if w is 0, find the vector from the correct side of the light to this point and set w to 0
	
	
	if( coordIn.w == 1.0){
		gl_Position = vec4( coordIn.x, coordIn.y, 0.0, 1.0);
	} else {
		// find the vec from the appropriate edje of the light to this point
		// use the approximation of taking the normalization of the vec from the light to here (eazy since the light is centered at 0,0)...
		vec2 fromLightToPointNormalized = normalize( coordIn.xy);
		//... and then rotating it 90 degrees
		vec2 edgeOfLight;
		if( coordIn.z < 0.5){ // todo do it right (or is it right?)
			edgeOfLight = vec2( -fromLightToPointNormalized.y, fromLightToPointNormalized.x) * lightRadius; // counterclockwise
		} else {
			edgeOfLight = vec2( fromLightToPointNormalized.y, -fromLightToPointNormalized.x) * lightRadius; //clockwise
		}
		gl_Position = vec4( coordIn.xy - edgeOfLight, 0.0, 0.0);
	}
	
	vShadowCoord.x = 1.0 - coordIn.w;
	vShadowCoord.y = 0.0;
	
	// set it to 1 if it is shaded
	if( coordIn.z < 0.25){
		vShadowCoord.y = 1.0;
	}
	if( coordIn.z > 0.75){
		vShadowCoord.y = 1.0;
	}
	
	
	if( coordIn.w == 1.0){
		vShadowCoord.y = 0.0;
	}
	
	
	
	
}`,ge=`
precision mediump float;
varying vec2 vShadowCoord;
// imagine a triangle on the coordinate plane w/ points @ 0,0 1,0 and 1,1
// then imagine it shaded based on y/x with 1 being completely black and 0 all white
// that is kind of what is given in vShadowCoord, this then shades it

void main(void){
	// remember, this uses reverse subtract blending, so white blocks the light
	
	
	float inverseBrightness = vShadowCoord.y / vShadowCoord.x;
	
	gl_FragColor = vec4( inverseBrightness, inverseBrightness, inverseBrightness, 1.0);
	
	// the alpha records the amount of lack of shadow
	gl_FragColor = vec4( 0.0, 0.0, 0.0, inverseBrightness);
	
}
`,_e=`
attribute vec2 coordIn;
attribute vec2 aUV;
varying vec2 uv;
void main(void){
	uv = aUV;
	vec2 clipCoords = vec2(0.0,0.0);
	clipCoords.x = coordIn.x / (640.0);
	clipCoords.y = coordIn.y / 480.0;
	clipCoords *= 2.0;
	clipCoords -= vec2( 1.0, 1.0);
	
	gl_Position = vec4( clipCoords, 0.0, 1.0);
}
`,k=`
precision mediump float;
varying vec2 uv;
uniform sampler2D utexture;
void main(void){
	
	// the alpha records the amount of lack of shadow
	// so, if it is completely shadowed, alpha is 0
	// this uses additive blending
	vec4 texInfo = texture2D( utexture, uv);
	
	gl_FragColor = vec4( texInfo.rgb * texInfo.a, 1.0);
	
}
`,A=32;function j(t){let i=performance.now(),a=[];for(let t=0;t<n;t++)for(let n=0;n<r;n++)e(t,14-n)==1&&a.push({x:t*A+4,y:n*A+4,w:24,h:24});let o=[];for(let e=0;e<a.length;e++){let t=a[e],n={x:t.x,y:t.y+t.h},r={x:t.x+t.w,y:t.y+t.h},i={x:t.x,y:t.y},s={x:t.x+t.w,y:t.y};o.push({x1:n.x,y1:n.y,x2:r.x,y2:r.y}),o.push({x1:r.x,y1:r.y,x2:s.x,y2:s.y}),o.push({x1:s.x,y1:s.y,x2:i.x,y2:i.y}),o.push({x1:i.x,y1:i.y,x2:n.x,y2:n.y})}console.log(`build shadow information`,performance.now()-i),i=performance.now();let l=[];for(let t=0;t<n;t++)for(let n=0;n<r;n++)e(t,14-n)==2&&(l.push({x:(t+.5)*A,y:(n+.5)*A,r:.15,g:.075,b:0,reachRadius:200,bulbRadius:18}),l.push({x:(t+.5)*A,y:(n+.5)*A,r:.05,g:.025,b:0,reachRadius:600,bulbRadius:18})),(e(t,14-n)==3||e(t,14-n)==8)&&l.push({x:(t+.5)*A,y:(n+.5)*A,r:1,g:1,b:1,reachRadius:288,bulbRadius:10});console.log(`build light raw data`,performance.now()-i),i=performance.now();let m=[],h=s(t,pe,me);t.useProgram(h);let g=s(t,he,ge);for(let e=0;e<l.length;e++){let n=l[e],r=c(t,n.reachRadius*2,n.reachRadius*2);f(t,r),t.viewport(0,0,n.reachRadius*2,n.reachRadius*2),t.useProgram(h);let i=[-1,-1,-1,1,1,1,-1,-1,1,-1,1,1],a=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,a),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);let s=t.getAttribLocation(h,`coordIn`);t.vertexAttribPointer(s,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(s),t.uniform3f(t.getUniformLocation(h,`centerColor`),n.r,n.g,n.b),t.drawArrays(t.TRIANGLES,0,i.length/2),t.useProgram(g);let u=[];for(let e=0;e<o.length;e++){let t=o[e],r,i,a,s,c=Math.atan2(t.y1-n.y,t.x1-n.x),l=Math.atan2(t.y2-n.y,t.x2-n.x);if(c<l&&(l-=2*Math.PI),c-l<=Math.PI)continue;r=(t.x1-n.x)/n.reachRadius,i=(t.y1-n.y)/n.reachRadius,a=(t.x2-n.x)/n.reachRadius,s=(t.y2-n.y)/n.reachRadius;let d=(e,t)=>t?e?1/8:3/8:e?7/8:5/8;u.push(r,i,d(!1,!0),0),u.push(r,i,d(!0,!1),0),u.push(r,i,d(!1,!0),1),u.push(a,s,d(!0,!0),0),u.push(a,s,d(!1,!1),0),u.push(a,s,d(!1,!0),1),u.push(r,i,d(!0,!0),1),u.push(r,i,d(!0,!1),0),u.push(a,s,d(!0,!0),0),u.push(r,i,d(!0,!0),1),u.push(a,s,d(!0,!0),1),u.push(a,s,d(!0,!0),0)}let d=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,d),t.bufferData(t.ARRAY_BUFFER,new Float32Array(u),t.STATIC_DRAW);let _=t.getAttribLocation(g,`coordIn`);t.vertexAttribPointer(_,4,t.FLOAT,!1,0,0),t.enableVertexAttribArray(_),t.blendFunc(t.ONE,t.ONE),t.blendEquation(t.FUNC_REVERSE_SUBTRACT);let v=n.bulbRadius/n.reachRadius;t.uniform1f(t.getUniformLocation(g,`lightRadius`),v),t.drawArrays(t.TRIANGLES,0,u.length/2),p(),t.blendEquation(t.FUNC_ADD),m.push(r)}console.log(`draw shadow gradient texes`,performance.now()-i),i=performance.now();let _=[];for(let e=0;e<n*A/640;e++)_.push(c(t,640,480));for(let e=0;e<_.length;e++){f(t,_[e]),t.viewport(0,0,640,480),t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE);let n=(e,n,i,a)=>{let o=i*2,s=e-i,c=n-i,l=[s,c,s+o,c,s+o,c+o,s,c,s,c+o,s+o,c+o],f=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,f),t.bufferData(t.ARRAY_BUFFER,new Float32Array(l),t.STATIC_DRAW),u(t,r,`coordIn`,f);let p=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,p),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,1,0,1,1,0,0,0,1,1,1]),t.STATIC_DRAW),u(t,r,`aUV`,p),d(0,a,t),t.drawArrays(t.TRIANGLES,0,l.length/2)},r=s(t,_e,k);t.useProgram(r),t.uniform1i(t.getUniformLocation(r,`utexture`),0);for(let t=0;t<m.length;t++)n(l[t].x-e*640,l[t].y,l[t].reachRadius,m[t]);console.log(`draw lights to map`,performance.now()-i),i=performance.now(),p(),t.blendFunc(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA)}return _}var M,N,P,F,I,L,R=[],z,B,V,H,U,W=640,ve=[-1,-1,-1,1,1,1,-1,-1,1,-1,1,1];function ye(){if(M=document.getElementById(`canvasId`).getContext(`webgl`,{antialias:!1}),!M)throw document.getElementById(`time`).innerHTML=`Sorry, it looks like your browser does not support WebGL, which this game requires`,`noWebgl`;P=M.createBuffer(),M.bindBuffer(M.ARRAY_BUFFER,P),M.bufferData(M.ARRAY_BUFFER,new Float32Array(ve),M.STATIC_DRAW),M.bindBuffer(M.ARRAY_BUFFER,null),M.enable(M.DEPTH_TEST),M.enable(M.BLEND),M.blendFunc(M.SRC_ALPHA,M.ONE_MINUS_SRC_ALPHA),N=s(M,de,fe),I=ee(M);for(let e=0;e<4;e++){let t=e/3,r=.2+.8*e/3,i=(n*32-640)*(1-e/3)+640;R.push({totalWidth:i,depth:.8+.1*e/3,height:r,fogAmount:t,segments:[]});let a=(n*32-640)*(1-e/3)+640,o=0,s=0;for(;a>W;)R[R.length-1].segments.push({x:o,width:W,texture:T(M,W,r,t,o),id:s}),o+=W,a-=W,s++;R[R.length-1].segments.push({x:o,width:a,texture:T(M,a,r,t,o)})}R.push({totalWidth:640,depth:.95,height:480,fogAmount:1,segments:[{x:0,width:640,texture:T(M,640,1e6,1,0)}]}),R.push({totalWidth:32*n,depth:.7,height:480,fogAmount:0,segments:ue(M).map(e=>({x:`TODO`,width:640,texture:e}))}),z=j(M),M.viewport(0,0,640,480),y(),F=s(M,C,w),M.useProgram(F),u(M,F,`clipSpaceSpanningVertLoc`,P),M.getUniformLocation(F,`depth`),M.getUniformLocation(F,`xPositionOfTexture`),B=M.getUniformLocation(F,`utexture`),V=M.getUniformLocation(F,`lightmap`),M.getUniformLocation(F,`textureWidth`),H=M.getUniformLocation(N,`viewX`),U=M.getUniformLocation(N,`p1Coord`),L=c(M,1,1);let e=new Image;e.src=`src/white.png`,e.onload=()=>{L=l(M,e),console.log(`done`)}}function be(){for(let e=0;e<R.length;e++){let t=n*32,r=Z.x*32/(t-640)*(t-R[e].totalWidth)-Z.x*32,i=0;for(;r<=-640;)i++,r+=W;G(R[e].segments[i].texture,r+Z.x*32,R[e].segments[i].width,R[e].depth),R[e].segments[i+1]&&G(R[e].segments[i+1].texture,r+W+Z.x*32,R[e].segments[i+1].width,R[e].depth)}}function G(e,t,n,r,i=!0){M.useProgram(F),M.disable(M.BLEND),M.uniform1i(B,0),M.uniform1i(V,1);let a=Math.floor(t/640);M.activeTexture(M.TEXTURE0+1),i?M.bindTexture(M.TEXTURE_2D,z[a]):M.bindTexture(M.TEXTURE_2D,L),u(M,F,`clipSpaceSpanningVertLoc`,P),M.activeTexture(M.TEXTURE0),M.bindTexture(M.TEXTURE_2D,e);let o=(a+1)*640;M.uniform1f(M.getUniformLocation(F,`xDrawingAreaStart`),t-Z.x*32),M.uniform1f(M.getUniformLocation(F,`xOfTexStart`),0),M.uniform1f(M.getUniformLocation(F,`widthOfTexToUse`),o-t),M.uniform1f(M.getUniformLocation(F,`texTotalWidth`),n),M.uniform1f(M.getUniformLocation(F,`xOfLightmapStart`),t-a*640),M.uniform1f(M.getUniformLocation(F,`depth`),r),M.drawArrays(M.TRIANGLES,0,6),o<t+n&&(M.uniform1f(M.getUniformLocation(F,`xDrawingAreaStart`),o-Z.x*32),M.uniform1f(M.getUniformLocation(F,`xOfTexStart`),o-t),M.uniform1f(M.getUniformLocation(F,`widthOfTexToUse`),n+t-o),M.uniform1f(M.getUniformLocation(F,`texTotalWidth`),n),M.uniform1f(M.getUniformLocation(F,`xOfLightmapStart`),0),M.uniform1f(M.getUniformLocation(F,`depth`),r),M.activeTexture(M.TEXTURE0+1),i?M.bindTexture(M.TEXTURE_2D,z[a+1]):M.bindTexture(M.TEXTURE_2D,L),M.drawArrays(M.TRIANGLES,0,6)),M.enable(M.BLEND)}function K(){M.clearColor(.9,.9,1,1),M.clear(M.COLOR_BUFFER_BIT|M.DEPTH_BUFFER_BIT),be(),M.useProgram(N),u(M,N,`coordIn`,P),M.uniform1f(H,Z.x),M.uniform2f(U,J.x,J.y),M.drawArrays(M.TRIANGLES,0,6),b(Z.x,Q);let e=n*32;Z.x*32/(e-640)*(e-5120);let t=-Z.x*32,r=0;for(;t<=-640;)r++,t+=640;G(I[r],t+Z.x*32,640,-.1,!1),I[r+1]&&G(I[r+1],t+640+Z.x*32,640,-.1,!1)}var q=document.getElementById(`canvasId`),J=new o,Y=[],X=[!1,!0,!1];async function xe(){await ce(),window.addEventListener(`keydown`,e=>Y[e.code]=!0),window.addEventListener(`keyup`,e=>Y[e.code]=!1),Z.setRealSize(q.width,q.height),ye(),window.requestAnimationFrame($)}window.addEventListener(`load`,()=>{xe()});var Z={x:0,y:0,width:20,height:15,setRealSize:function(e,t){"TODO";},update:function(){this.x+=(J.x-10-this.x)*.1,this.x=Math.max(this.x,0),this.x=Math.min(this.x,n-this.width)}},Q=0;function $(e){performance.now(),Q++,J.update(1e3/60*1),Z.update(),K(),window.requestAnimationFrame($)}