import{j as a}from"./jsx-runtime-BnIj46N_.js";import{T as v,C as w,L as y,E as C}from"./ErrorMessage-JATCi31F.js";import{I as d}from"./Input-Dqji-sXd.js";import{u as c}from"./styled-components.browser.esm-BDDUX98t.js";import{r as u}from"./index-CsdIBAqE.js";import{i as f}from"./isNumericString-BqsgwGh2.js";import{u as I}from"./useBoolean-C4Nz0XNG.js";function R({valueState:e,errorState:s,inputRefs:n,onChange:i}){return u.useEffect(()=>{var m;(m=n[0].current)==null||m.focus()},[]),a.jsxs(j,{children:[a.jsxs("div",{children:[a.jsx(v,{children:"카드 유효기간을 입력해 주세요"}),a.jsx(w,{children:"월/년도(MMYY)를 순서대로 입력해 주세요."})]}),a.jsxs(M,{children:[a.jsx(y,{children:"유효기간"}),a.jsxs(L,{children:[a.jsx(d,{ref:n[0],maxLength:2,placeholder:"MM",value:e.month,isError:s.isError.month,onChange:i("month")}),a.jsx(d,{ref:n[1],maxLength:2,placeholder:"YY",value:e.year,isError:s.isError.year,onChange:i("year")})]}),a.jsx(C,{message:s.errorMessage})]})]})}const j=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,M=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,L=c.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;R.__docgenInfo={description:"",methods:[],displayName:"CardExpirationDateInput",props:{valueState:{required:!0,tsType:{name:"CardExpiration"},description:""},errorState:{required:!0,tsType:{name:"CardExpirationErrorState"},description:""},inputRefs:{required:!0,tsType:{name:"tuple",raw:`[\r
  React.RefObject<HTMLInputElement>,\r
  React.RefObject<HTMLInputElement>,\r
]`,elements:[{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(\r
  targetKey: CardExpirationKeys\r
) => (event: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:"union",raw:'"month" | "year"',elements:[{name:"literal",value:'"month"'},{name:"literal",value:'"year"'}]},name:"targetKey"}],return:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}}}},description:""}}};const Y={month:e=>{if(!f(e))throw new Error("월은 숫자만 입력할 수 있어요")},year:e=>{if(!f(e))throw new Error("년도는 숫자만 입력할 수 있어요")}},b={month:e=>{if(e.length!==2)throw new Error("월은 'MM' 형식으로 입력해 주세요");if(Number(e)<1||Number(e)>12)throw new Error("월은 01 ~ 12 범위로 입력해 주세요")},year:e=>{if(e.length!==2)throw new Error("년도는 'YY' 형식으로 입력해 주세요");if(!H(e))throw new Error("유효한 년도를 입력해 주세요")}},H=e=>{const n=new Date().getFullYear()%100,i=parseInt(e,10);return n<=i},V=()=>{const[e,s]=u.useState({month:"",year:""}),[n,i]=u.useState({isError:{month:!1,year:!1},errorMessage:""}),{flag:m,setTrue:E}=I(),l=[u.useRef(null),u.useRef(null)],h=(t,o)=>{s(r=>({...r,[o]:t}))},p=(t,o,r)=>{i(T=>({isError:{...T.isError,[o]:t},errorMessage:r}))},x=(t,o)=>{var r;t.length<2||o==="year"||o==="month"&&((r=l[1].current)==null||r.focus())},g=t=>o=>{try{const{value:r}=o.target;Y[t](r),h(r,t),b[t](r),p(!1,t,""),x(r,t)}catch(r){r instanceof Error&&p(!0,t,r.message)}};return u.useEffect(()=>{m||e.month===""||e.year===""||n.isError.month||n.isError.year||E()},[e,n]),{isDoneThisStep:m,cardExpirationDateInputProps:{valueState:e,errorState:n,inputRefs:l,onChange:g}}};export{R as C,V as u};
