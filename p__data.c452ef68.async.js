(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{VBCv:function(e,t,n){"use strict";n.r(t);n("jlqO");var a=n("Hbi4"),l=(n("cctN"),n("4Aw8")),r=n("cO38"),i=n.n(r),c=(n("QbtF"),n("5Ekc")),o=n("ZZRV"),s=n.n(o),u=n("Uhyw"),d=c["a"].TextArea;t["default"]=function(){var e=Object(o["useState"])(),t=i()(e,2),n=t[0],r=t[1];Object(o["useEffect"])(()=>{window.addEventListener("message",e=>{console.log(e),console.log("\u6570\u636e\u4ea4\u4e92B"),setTimeout(()=>{window.parent.postMessage({refresh:"id"},"666")},5e3)})},[]);var c=()=>{var e=["fish","fish_model","insect","insect_model","seafood","fossil","disc","artwork","furniture","face"];if(n)try{var t=JSON.parse(n);if("object"==typeof t){for(var a in t)"furniture"===a?e.includes(a)&&"[object Object]"===Object.prototype.toString.call(t[a])&&Object(u["k"])(t[a],"mango_".concat(a)):e.includes(a)&&Array.isArray(t[a])&&Object(u["k"])(t[a],"mango_".concat(a));l["a"].success("\u5bfc\u5165\u6210\u529f")}}catch(e){l["a"].warning("\u65e0\u6548\u7684\u6570\u636e")}},f=()=>{var e={fish:null,fish_model:null,insect:null,insect_model:null,seafood:null,fossil:null,disc:null,artwork:null,furniture:null,face:null};for(var t in e){var n=Object(u["b"])("mango_".concat(t));"furniture"===t?n&&"{}"!==JSON.stringify(n)?e[t]=n:delete e[t]:n&&n.length>0?e[t]=n:delete e[t]}r(JSON.stringify(e))};return s.a.createElement("div",{style:{padding:8}},s.a.createElement("div",null,s.a.createElement(d,{value:n,onChange:e=>{var t=e.target;return r(t.value)},autoSize:{minRows:5},style:{resize:"none",maxWidth:600},placeholder:"\u70b9\u51fb\u6309\u94ae\u5bfc\u5165/\u5bfc\u51fa\u6807\u8bb0\u6570\u636e"})),s.a.createElement("div",{style:{marginTop:12}},s.a.createElement(a["a"],{style:{marginRight:12},onClick:()=>c()},"\u5bfc\u5165"),s.a.createElement(a["a"],{onClick:()=>f()},"\u5bfc\u51fa")))}}}]);