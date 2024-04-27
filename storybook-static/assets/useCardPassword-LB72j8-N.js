import{j as e}from"./jsx-runtime-BnIj46N_.js";import{T as d,C as l,L as m,E as g}from"./ErrorMessage-JATCi31F.js";import{I as E}from"./Input-Dqji-sXd.js";import{u as p}from"./styled-components.browser.esm-BDDUX98t.js";import{r as i}from"./index-CsdIBAqE.js";import{i as f}from"./isNumericString-BqsgwGh2.js";function x({valueState:r,errorState:n,inputRef:a,onChange:t,onBlur:u}){return i.useEffect(()=>{var c;(c=a.current)==null||c.focus()},[]),e.jsxs(v,{children:[e.jsxs("div",{children:[e.jsx(d,{children:"비밀번호를 입력해 주세요"}),e.jsx(l,{children:"앞의 2자리를 입력해주세요"})]}),e.jsxs(h,{children:[e.jsx(m,{children:"비밀번호 앞 2자리"}),e.jsx(C,{children:e.jsx(E,{ref:a,maxLength:2,type:"password",value:r,isError:n.isError,onChange:t,onBlur:u})}),n.isError&&e.jsx(g,{message:n.errorMessage})]})]})}const v=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,h=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,C=p.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;x.__docgenInfo={description:"",methods:[],displayName:"CardPasswordInput",props:{valueState:{required:!0,tsType:{name:"string"},description:""},errorState:{required:!0,tsType:{name:"CardPasswordErrorState"},description:""},inputRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const T=r=>{if(!f(r))throw new Error("비밀번호는 숫자만 입력할 수 있어요")},w=r=>{if(r.length!==2)throw new Error("비밀번호는 두 자리 숫자로 입력해 주세요")},S=()=>{const[r,n]=i.useState(""),[a,t]=i.useState({isError:!1,errorMessage:""}),u=i.useRef(null);return{valueState:r,errorState:a,inputRef:u,onChange:o=>{try{T(o.target.value),n(o.target.value),t({isError:!1,errorMessage:""})}catch(s){if(!(s instanceof Error))return;t({isError:!0,errorMessage:s.message})}},onBlur:o=>{try{w(o.target.value),t({isError:!1,errorMessage:""})}catch(s){if(!(s instanceof Error))return;t({isError:!0,errorMessage:s.message})}}}};export{x as C,S as u};
