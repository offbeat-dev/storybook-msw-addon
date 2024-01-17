'use strict';

var previewApi = require('@storybook/preview-api');
var coreEvents = require('@storybook/core-events');
var msw = require('msw');

var p="storybook/msw-vite-addon",T="msw",n={SEND:`${p}/send`,UPDATE:`${p}/update`,UPDATE_RESPONSES:`${p}/update-responses`,RESET:`${p}/reset`};var a=previewApi.addons.getChannel(),A=!0,S=!1,l=0,m=200,t={},D,I=(r,e,s)=>r[e]||s,E=r=>{if(!r||!t)return;let e=window.msw;r?.forEach(s=>{let o=t[s.info.path];m=o.status,e.use(msw.http.get(s.info.path,async()=>(await msw.delay(l),msw.HttpResponse.json(o.data,{status:o.status}))));});},P=(r,e)=>{let s,o,i,R=window.msw;s=e.parameters,s&&(o=I(s,T,[]));let y=previewApi.useChannel({[n.UPDATE]:({key:u,value:d})=>{u==="delay"&&(clearTimeout(D),l=d,E(i),D=setTimeout(()=>{a.emit(coreEvents.FORCE_REMOUNT,{storyId:e.id});},300)),u==="status"&&(m=d,Object.keys(t).forEach(w=>{t[w].status=d;}),E(i),a.emit(coreEvents.FORCE_REMOUNT,{storyId:e.id}));let f={delay:l,status:m,responses:t};y(n.SEND,f);},[n.UPDATE_RESPONSES]:({key:u,objectKey:d,objectValue:f})=>{if(u==="responses"){t[d].data=f;let w={delay:l,status:m,responses:t};E(i),y(n.SEND,w),a.emit(coreEvents.FORCE_REMOUNT,{storyId:e.id});}},[n.RESET]:()=>{delete window.msw.originalResponses,R.stop(),location.reload();}});return !o||!R?(y(n.SEND,{status:void 0,delay:void 0,responses:void 0}),r()):(A&&(i=o.handlers,t=o.originalResponses,E(i),y(n.SEND,{status:m,delay:l,responses:t}),a.on(coreEvents.STORY_ARGS_UPDATED,()=>{e.viewMode!=="docs"&&(delete window.msw.originalResponses,location.reload());}),a.on(coreEvents.STORY_CHANGED,()=>{delete window.msw.originalResponses,R.stop(),S=!0,location.reload();}),A=!1),S&&(S=!1,a.emit(coreEvents.FORCE_REMOUNT,{storyId:e.id})),r())};var C={decorators:[P]},q=C;

module.exports = q;
//# sourceMappingURL=out.js.map
//# sourceMappingURL=preview.js.map