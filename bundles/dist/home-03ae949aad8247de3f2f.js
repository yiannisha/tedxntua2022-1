!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=34)}({34:function(e,t){document.querySelectorAll(".header-text span").forEach((e,t)=>{e.addEventListener("click",e=>{e.target.classList.add("active")}),e.addEventListener("animationend",e=>{e.target.classList.remove("active")}),setInterval(()=>{e.classList.add("active")},5600*(t+1))});document.getElementById("event_stats");const n=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.remove("isnotVisible"),e.target.classList.add("isVisible"))})});n.observe(document.querySelector(".stat1")),n.observe(document.querySelector(".stat2")),n.observe(document.querySelector(".stat3")),n.observe(document.querySelector(".stat4")),n.observe(document.querySelector(".stat5")),n.observe(document.querySelector(".stat6"));let r=document.querySelectorAll("[ending-time]");for(i=0;i<r.length;i++){let e=new Date("2022/05/21"),t=new Date(Date.now()),n=e.getTime()-t.getTime(),o=Math.floor(n/864e5);r[i].innerHTML="<span>"+o+"</span><span> Days <strong> Left </strong> </span>",1===o&&(r[i].innerHTML="<span>"+o+"</span><span> Day <strong> Left </strong> </span>"),0===o&&(r[i].innerHTML="<span> Ending Soon </span>"),o<0&&(r[i].innerHTML="00")}window.addEventListener("scroll",(function(){socialContainer=document.querySelector("#social-container"),footerOffsetY=document.querySelector("#footer").offsetTop,null!=socialContainer&&(window.pageYOffset>500&&window.pageYOffset<footerOffsetY-800?socialContainer.classList.add("scrolled"):socialContainer.classList.remove("scrolled"))}))}});