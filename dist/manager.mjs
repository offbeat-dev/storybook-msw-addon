import { addons, types, useAddonState, useChannel } from '@storybook/manager-api';
import e from 'react';
import { Button, Form, AddonPanel, ScrollArea } from '@storybook/components';
import { RangeControl, ObjectControl } from '@storybook/blocks';
import { styled } from '@storybook/theming';

var s="storybook/msw-vite-addon",S=`${s}/panel`;var d={SEND:`${s}/send`,UPDATE:`${s}/update`,UPDATE_RESPONSES:`${s}/update-responses`,RESET:`${s}/reset`};var P={200:"OK",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error"},u=P;var A="__HandlerResponseKeySeparator__";var c=n=>{let[o,p]=n.split(A);return {method:o,path:p}};var L=Object.keys(u),{Select:H}=Form,f=styled.div`
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px;

  & > div:not(:first-child) {
    border-block-start: 1px solid ${({theme:n})=>n.appBorderColor};
  }

  & > div:last-child {
    border-block-end: 1px solid ${({theme:n})=>n.appBorderColor};
  }

  & > div {
    padding-block: 2rem;
    padding-inline: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  h3 {
    margin-block-end: 0.5rem;
  }
`,M=styled.div`
  border: 1px solid ${({theme:n})=>n.appBorderColor};
  border-radius: 5px;
  padding: 1rem;

  &:not(:first-child) {
    margin-block-start: 1rem;
  }
`,I=styled(H)`
  inline-size: 100%;
`,i=styled.div`
  margin-bottom: 1rem;
  flex: 1 0 50%;
`,K=styled.div`
  flex: 1 1 50%;
`,U=styled(Button)`
  margin-block-start: 1rem;
`,g=n=>{let[o,p]=useAddonState(s,{}),[v,h]=e.useState(!1),l=useChannel({[d.SEND]:t=>{p({...o,...t});}}),C=()=>{l(d.RESET),h(!1);},b=(t,a)=>{l(d.UPDATE,{key:t,value:a});},E=(t,a,m)=>{h(!0),l(d.UPDATE_RESPONSES,{key:t,objectKey:a,objectValue:m});},y=()=>o.delay!==void 0&&o.status!==void 0&&o.responses!==void 0?e.createElement(ScrollArea,null,e.createElement(f,null,e.createElement("div",null,e.createElement(i,null,e.createElement("h3",null,"Response Delay : ",o.delay," ms"),e.createElement("p",null,"Set a mock response delay")),e.createElement(RangeControl,{name:"delay",value:o.delay,onChange:t=>b("delay",t),min:0,max:1e4,step:500})),e.createElement("div",null,e.createElement(i,null,e.createElement("h3",null,"Response Status : ",o.status),e.createElement("p",null,"Select a mock response status")),e.createElement(I,{onChange:t=>b("status",t.target.value),value:o.status,name:"status"},L.map(t=>e.createElement("option",{key:t,value:t},t," - ",u[t])))),e.createElement("div",null,e.createElement(i,null,e.createElement("h3",null,"Response Data"),e.createElement("p",null,"Edit the mock response data")),e.createElement(K,null,o.responses&&Object.keys(o.responses).length>0&&Object.keys(o.responses).map(t=>{let{method:a,path:m}=c(t);return e.createElement(M,{key:t},e.createElement(ObjectControl,{name:`${a} ${m}`,value:o.responses[t].data,onChange:D=>E("responses",t,D),theme:void 0}))}))),e.createElement("div",null,e.createElement(i,null,e.createElement("h3",null,"Reset"),e.createElement("p",null,"Reset the original mock response data")),e.createElement(U,{primary:!0,onClick:C,disabled:!v},"Reset Mock Data")))):e.createElement(f,null,e.createElement(i,null,"No mock data."));return e.createElement(AddonPanel,{...n},e.createElement("div",null,y()))};addons.register(s,()=>{addons.add(S,{type:types.PANEL,title:"MSW",match:({viewMode:n})=>n==="story",render:g});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.mjs.map