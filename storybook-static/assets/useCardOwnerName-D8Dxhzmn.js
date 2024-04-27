import{j as t}from"./jsx-runtime-BnIj46N_.js";import{T as l,L as d,E as g}from"./ErrorMessage-JATCi31F.js";import{I as E}from"./Input-Dqji-sXd.js";import{u as p}from"./styled-components.browser.esm-BDDUX98t.js";import{r as u}from"./index-CsdIBAqE.js";import{u as f}from"./useBoolean-C4Nz0XNG.js";function h({valueState:e,errorState:n,inputRef:s,onChange:a,onBlur:c}){return u.useEffect(()=>{var o;(o=s.current)==null||o.focus()},[]),t.jsxs(x,{children:[t.jsx(l,{children:"카드 소유자 이름을 입력해 주세요"}),t.jsxs(v,{children:[t.jsx(d,{children:"소유자 이름"}),t.jsx(w,{children:t.jsx(E,{ref:s,maxLength:15,placeholder:"JOHN DOE",value:e,isError:n.isError,onChange:a,onBlur:c})}),n.isError&&t.jsx(g,{message:n.errorMessage})]})]})}const x=p.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,v=p.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,w=p.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;h.__docgenInfo={description:"",methods:[],displayName:"CardOwnerNameInput",props:{valueState:{required:!0,tsType:{name:"string"},description:""},errorState:{required:!0,tsType:{name:"CardOwnerNameErrorState"},description:""},inputRef:{required:!0,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!0,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:""}}};const T=e=>/^[a-zA-Z\s]*$/.test(e),C=e=>{if(!T(e))throw new Error("영문자만 입력할 수 있어요")},O=e=>{if(e.length===0)throw new Error("카드 소유자 이름을 입력해 주세요")},S=()=>{const[e,n]=u.useState(""),[s,a]=u.useState({isError:!1,errorMessage:""}),{flag:c,setTrue:o}=f(),m=u.useRef(null);return{isDoneThisStep:c,cardOwnerNameInputProps:{valueState:e,errorState:s,inputRef:m,onChange:i=>{try{C(i.target.value);const r=i.target.value.toUpperCase();n(r),a({isError:!1,errorMessage:""})}catch(r){r instanceof Error&&a({isError:!0,errorMessage:r.message})}},onBlur:i=>{try{O(i.target.value),a({isError:!1,errorMessage:""}),o()}catch(r){r instanceof Error&&a({isError:!0,errorMessage:r.message})}}}}};export{h as C,S as u};
