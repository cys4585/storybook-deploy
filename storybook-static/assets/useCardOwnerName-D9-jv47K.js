import{j as t}from"./jsx-runtime-BnIj46N_.js";import{T as d,L as g,E}from"./ErrorMessage-CSnPlGZt.js";import{I as f}from"./Input-Dqji-sXd.js";import{u as p}from"./styled-components.browser.esm-BDDUX98t.js";import{r as o}from"./index-CsdIBAqE.js";import{u as h}from"./useBoolean-C4Nz0XNG.js";function x({valueState:e,errorState:n,inputRef:a,onChange:s,onBlur:c}){return o.useEffect(()=>{var i;(i=a.current)==null||i.focus()},[]),t.jsxs(v,{children:[t.jsx(d,{children:"카드 소유자 이름을 입력해 주세요"}),t.jsxs(w,{children:[t.jsx(g,{children:"소유자 이름"}),t.jsx(T,{children:t.jsx(f,{ref:a,maxLength:15,placeholder:"JOHN DOE",value:e,isError:n.isError,onChange:s,onBlur:c})}),n.isError&&t.jsx(E,{message:n.errorMessage})]})]})}const v=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,w=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,T=p.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;x.__docgenInfo={description:"",methods:[],displayName:"CardOwnerNameInput",props:{valueState:{required:!0,tsType:{name:"string"},description:""},errorState:{required:!0,tsType:{name:"CardOwnerNameErrorState"},description:""},inputRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const C=e=>/^[a-zA-Z\s]*$/.test(e),M=e=>{if(!C(e))throw new Error("영문자만 입력할 수 있어요")},O=e=>{if(e.length===0)throw new Error("카드 소유자 이름을 입력해 주세요")},B=()=>{const[e,n]=o.useState(""),[a,s]=o.useState({isError:!1,errorMessage:""}),{flag:c,setTrue:i}=h(),m=o.useRef(null),l=o.useMemo(()=>e.length>0&&!a.isError,[e,a.isError]);return{isDoneThisStep:c,isValid:l,cardOwnerNameInputProps:{valueState:e,errorState:a,inputRef:m,onChange:u=>{try{M(u.target.value);const r=u.target.value.toUpperCase();n(r),s({isError:!1,errorMessage:""})}catch(r){r instanceof Error&&s({isError:!0,errorMessage:r.message})}},onBlur:u=>{try{O(u.target.value),s({isError:!1,errorMessage:""}),i()}catch(r){r instanceof Error&&s({isError:!0,errorMessage:r.message})}}}}};export{x as C,B as u};
