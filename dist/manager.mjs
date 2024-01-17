import { addons, types, useAddonState, useChannel } from '@storybook/manager-api';
import e from 'react';
import { Button, Form, AddonPanel, ScrollArea } from '@storybook/components';
import { RangeControl, ObjectControl } from '@storybook/blocks';
import { styled } from '@storybook/theming';

var s="storybook/msw-vite-addon",b=`${s}/panel`;var d={SEND:`${s}/send`,UPDATE:`${s}/update`,UPDATE_RESPONSES:`${s}/update-responses`,RESET:`${s}/reset`};var D={200:"OK",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error"},l=D;var j=Object.keys(l),{Select:L}=Form,S=styled.div`
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
`,_=styled.div`
  border: 1px solid ${({theme:n})=>n.appBorderColor};
  border-radius: 5px;
  padding: 1rem;

  &:not(:first-child) {
    margin-block-start: 1rem;
  }
`,$=styled(L)`
  inline-size: 100%;
`,i=styled.div`
  margin-bottom: 1rem;
  flex: 1 0 50%;
`,M=styled.div`
  flex: 1 1 50%;
`,I=styled(Button)`
  margin-block-start: 1rem;
`,g=n=>{let[o,h]=useAddonState(s,{}),[c,m]=e.useState(!1),p=useChannel({[d.SEND]:t=>{h({...o,...t});}}),v=()=>{p(d.RESET),m(!1);},u=(t,a)=>{p(d.UPDATE,{key:t,value:a});},C=(t,a,E)=>{m(!0),p(d.UPDATE_RESPONSES,{key:t,objectKey:a,objectValue:E});},x=()=>o.delay!==void 0&&o.status!==void 0&&o.responses!==void 0?e.createElement(ScrollArea,null,e.createElement(S,null,e.createElement("div",null,e.createElement(i,null,e.createElement("h3",null,"Response Delay : ",o.delay," ms"),e.createElement("p",null,"Set a mock response delay")),e.createElement(RangeControl,{name:"delay",value:o.delay,onChange:t=>u("delay",t),min:0,max:1e4,step:500})),e.createElement("div",null,e.createElement(i,null,e.createElement("h3",null,"Response Status : ",o.status),e.createElement("p",null,"Select a mock response status")),e.createElement($,{onChange:t=>u("status",t.target.value),value:o.status,name:"status"},j.map(t=>e.createElement("option",{key:t,value:t},t," - ",l[t])))),e.createElement("div",null,e.createElement(i,null,e.createElement("h3",null,"Response Data"),e.createElement("p",null,"Edit the mock response data")),e.createElement(M,null,o.responses&&Object.keys(o.responses).length>0&&Object.keys(o.responses).map(t=>e.createElement(_,{key:t},e.createElement(ObjectControl,{name:t,value:o.responses[t].data,onChange:a=>C("responses",t,a),theme:void 0}))))),e.createElement("div",null,e.createElement(i,null,e.createElement("h3",null,"Reset"),e.createElement("p",null,"Reset the original mock response data")),e.createElement(I,{primary:!0,onClick:v,disabled:!c},"Reset Mock Data")))):e.createElement(S,null,e.createElement(i,null,"No mock data."));return e.createElement(AddonPanel,{...n},e.createElement("div",null,x()))};addons.register(s,()=>{addons.add(b,{type:types.PANEL,title:"MSW",match:({viewMode:n})=>n==="story",render:g});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.mjs.map