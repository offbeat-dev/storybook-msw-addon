'use strict';

var managerApi = require('@storybook/manager-api');
var e = require('react');
var components = require('@storybook/components');
var blocks = require('@storybook/blocks');
var theming = require('@storybook/theming');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var e__default = /*#__PURE__*/_interopDefault(e);

var s="storybook/msw-vite-addon",b=`${s}/panel`;var d={SEND:`${s}/send`,UPDATE:`${s}/update`,UPDATE_RESPONSES:`${s}/update-responses`,RESET:`${s}/reset`};var D={200:"OK",401:"Unauthorized",403:"Forbidden",404:"Not Found",500:"Internal Server Error"},l=D;var j=Object.keys(l),{Select:L}=components.Form,S=theming.styled.div`
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
`,_=theming.styled.div`
  border: 1px solid ${({theme:n})=>n.appBorderColor};
  border-radius: 5px;
  padding: 1rem;

  &:not(:first-child) {
    margin-block-start: 1rem;
  }
`,$=theming.styled(L)`
  inline-size: 100%;
`,i=theming.styled.div`
  margin-bottom: 1rem;
  flex: 1 0 50%;
`,M=theming.styled.div`
  flex: 1 1 50%;
`,I=theming.styled(components.Button)`
  margin-block-start: 1rem;
`,g=n=>{let[o,h]=managerApi.useAddonState(s,{}),[c,m]=e__default.default.useState(!1),p=managerApi.useChannel({[d.SEND]:t=>{h({...o,...t});}}),v=()=>{p(d.RESET),m(!1);},u=(t,a)=>{p(d.UPDATE,{key:t,value:a});},C=(t,a,E)=>{m(!0),p(d.UPDATE_RESPONSES,{key:t,objectKey:a,objectValue:E});},x=()=>o.delay!==void 0&&o.status!==void 0&&o.responses!==void 0?e__default.default.createElement(components.ScrollArea,null,e__default.default.createElement(S,null,e__default.default.createElement("div",null,e__default.default.createElement(i,null,e__default.default.createElement("h3",null,"Response Delay : ",o.delay," ms"),e__default.default.createElement("p",null,"Set a mock response delay")),e__default.default.createElement(blocks.RangeControl,{name:"delay",value:o.delay,onChange:t=>u("delay",t),min:0,max:1e4,step:500})),e__default.default.createElement("div",null,e__default.default.createElement(i,null,e__default.default.createElement("h3",null,"Response Status : ",o.status),e__default.default.createElement("p",null,"Select a mock response status")),e__default.default.createElement($,{onChange:t=>u("status",t.target.value),value:o.status,name:"status"},j.map(t=>e__default.default.createElement("option",{key:t,value:t},t," - ",l[t])))),e__default.default.createElement("div",null,e__default.default.createElement(i,null,e__default.default.createElement("h3",null,"Response Data"),e__default.default.createElement("p",null,"Edit the mock response data")),e__default.default.createElement(M,null,o.responses&&Object.keys(o.responses).length>0&&Object.keys(o.responses).map(t=>e__default.default.createElement(_,{key:t},e__default.default.createElement(blocks.ObjectControl,{name:t,value:o.responses[t].data,onChange:a=>C("responses",t,a),theme:void 0}))))),e__default.default.createElement("div",null,e__default.default.createElement(i,null,e__default.default.createElement("h3",null,"Reset"),e__default.default.createElement("p",null,"Reset the original mock response data")),e__default.default.createElement(I,{primary:!0,onClick:v,disabled:!c},"Reset Mock Data")))):e__default.default.createElement(S,null,e__default.default.createElement(i,null,"No mock data."));return e__default.default.createElement(components.AddonPanel,{...n},e__default.default.createElement("div",null,x()))};managerApi.addons.register(s,()=>{managerApi.addons.add(b,{type:managerApi.types.PANEL,title:"MSW",match:({viewMode:n})=>n==="story",render:g});});
//# sourceMappingURL=out.js.map
//# sourceMappingURL=manager.js.map