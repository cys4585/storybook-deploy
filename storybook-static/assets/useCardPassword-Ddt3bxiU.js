import{j as r}from"./jsx-runtime-BnIj46N_.js";import{T as d,C as l,L as m,E as g}from"./ErrorMessage-CSnPlGZt.js";import{I as E}from"./Input-Dqji-sXd.js";import{u as p}from"./styled-components.browser.esm-BDDUX98t.js";import{r as o}from"./index-CsdIBAqE.js";import{i as f}from"./isNumericString-BqsgwGh2.js";function x({valueState:e,errorState:s,inputRef:t,onChange:n,onBlur:u}){return o.useEffect(()=>{var c;(c=t.current)==null||c.focus()},[]),r.jsxs(v,{children:[r.jsxs("div",{children:[r.jsx(d,{children:"비밀번호를 입력해 주세요"}),r.jsx(l,{children:"앞의 2자리를 입력해주세요"})]}),r.jsxs(h,{children:[r.jsx(m,{children:"비밀번호 앞 2자리"}),r.jsx(w,{children:r.jsx(E,{ref:t,maxLength:2,type:"password",value:e,isError:s.isError,onChange:n,onBlur:u})}),s.isError&&r.jsx(g,{message:s.errorMessage})]})]})}const v=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,h=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,w=p.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;x.__docgenInfo={description:"",methods:[],displayName:"CardPasswordInput",props:{valueState:{required:!0,tsType:{name:"string"},description:""},errorState:{required:!0,tsType:{name:"CardPasswordErrorState"},description:""},inputRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const C=e=>{if(!f(e))throw new Error("비밀번호는 숫자만 입력할 수 있어요")},T=e=>{if(e.length!==2)throw new Error("비밀번호는 두 자리 숫자로 입력해 주세요")},S=()=>{const[e,s]=o.useState(""),[t,n]=o.useState({isError:!1,errorMessage:""}),u=o.useRef(null);return{isValid:o.useMemo(()=>e.length>0&&!t.isError,[e,t.isError]),cardPasswordInputProps:{valueState:e,errorState:t,inputRef:u,onChange:i=>{try{C(i.target.value),s(i.target.value),n({isError:!1,errorMessage:""})}catch(a){if(!(a instanceof Error))return;n({isError:!0,errorMessage:a.message})}},onBlur:i=>{try{T(i.target.value),n({isError:!1,errorMessage:""})}catch(a){if(!(a instanceof Error))return;n({isError:!0,errorMessage:a.message})}}}}};export{x as C,S as u};
