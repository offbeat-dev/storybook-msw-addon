'use strict';

var msw = require('msw');
var browser = require('msw/browser');

var f="__HandlerResponseKeySeparator__",p=o=>[o.info.method,o.info.path].join(f);var d,A=async o=>{d=o;};function v(){throw new Error('[MSW] Failed to retrieve the worker: no active worker found. Did you forget to call "initialize"?');}var O=async o=>{let{parameters:{msw:e},viewMode:t}=o;if(!e||e.originalResponses||window.msw&&t!=="docs")return;let n;if(t==="docs"&&window.msw?n=typeof global.process>"u"&&window.msw:n=typeof global.process>"u"&&browser.setupWorker(),"handlers"in e&&e.handlers){let r=Object.values(e.handlers).filter(Boolean).reduce((s,i)=>s.concat(i),[]);if(t==="docs"){let{handlers:s,context:i}=h(r,o);r=s,o=i;}r.length>0&&n.use(...r),window.msw||await n.start(d||{}),window.msw=n;let a=await w(r);o.parameters.msw={...e,originalResponses:a};}return {}},h=(o,e)=>(o.forEach(t=>{let n=t.info.path.replace(/\/$/,"")+`/${self.crypto.randomUUID()}`;Object.keys(e.args).forEach(r=>{e.args[r]===t.info.path&&(e.args[r]=n);}),Object.keys(e.allArgs).forEach(r=>{e.allArgs[r]===t.info.path&&(e.allArgs[r]=n);}),Object.keys(e.initialArgs).forEach(r=>{e.initialArgs[r]===t.info.path&&(e.initialArgs[r]=n);}),t.info.header=t.info.header.replace(t.info.path,n),t.info.path=n;}),{handlers:o,context:e}),w=async o=>{let e={};for(let t of o){let n=t.info.path,r=t.info.method||msw.HttpMethods.GET;if(typeof n!="string"){console.warn(`[MSW] Failed to retrieve the original response for the given handler. Can only retrieve original responses for handlers with a string path, RegExp is currently not supported. Offending path: ${n}`);continue}if(typeof r!="string"){console.warn(`[MSW] Failed to retrieve the original response for the given handler. Can only retrieve original responses for handlers with a string method, RegExp is currently not supported. Offending path: ${n}`);continue}let a=new Request(n,{method:r}),s=await fetch(a),i;s.ok?i=await s.json():i=null,e[p(t)]={data:i,status:s.status};}return e};

exports.getWorker = v;
exports.initialize = A;
exports.mswLoader = O;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=index.js.map