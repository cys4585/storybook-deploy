import{j as a}from"./jsx-runtime-BnIj46N_.js";import{T as v,C as w,L as C,E as I}from"./ErrorMessage-CSnPlGZt.js";import{I as d}from"./Input-Dqji-sXd.js";import{u as c}from"./styled-components.browser.esm-BDDUX98t.js";import{r as s}from"./index-CsdIBAqE.js";import{i as f}from"./isNumericString-BqsgwGh2.js";import{u as R}from"./useBoolean-C4Nz0XNG.js";function j({valueState:e,errorState:i,inputRefs:t,onChange:u}){return s.useEffect(()=>{var m;(m=t[0].current)==null||m.focus()},[]),a.jsxs(M,{children:[a.jsxs("div",{children:[a.jsx(v,{children:"카드 유효기간을 입력해 주세요"}),a.jsx(w,{children:"월/년도(MMYY)를 순서대로 입력해 주세요."})]}),a.jsxs(L,{children:[a.jsx(C,{children:"유효기간"}),a.jsxs(Y,{children:[a.jsx(d,{ref:t[0],maxLength:2,placeholder:"MM",value:e.month,isError:i.isError.month,onChange:u("month")}),a.jsx(d,{ref:t[1],maxLength:2,placeholder:"YY",value:e.year,isError:i.isError.year,onChange:u("year")})]}),a.jsx(I,{message:i.errorMessage})]})]})}const M=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
`,L=c.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Y=c.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;j.__docgenInfo={description:"",methods:[],displayName:"CardExpirationDateInput",props:{valueState:{required:!0,tsType:{name:"CardExpiration"},description:""},errorState:{required:!0,tsType:{name:"CardExpirationErrorState"},description:""},inputRefs:{required:!0,tsType:{name:"tuple",raw:`[\r
  React.RefObject<HTMLInputElement>,\r
  React.RefObject<HTMLInputElement>,\r
]`,elements:[{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},{name:"ReactRefObject",raw:"React.RefObject<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]}]},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:`(\r
  targetKey: CardExpirationKeys\r
) => (event: React.ChangeEvent<HTMLInputElement>) => void`,signature:{arguments:[{type:{name:"union",raw:'"month" | "year"',elements:[{name:"literal",value:'"month"'},{name:"literal",value:'"year"'}]},name:"targetKey"}],return:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}}}},description:""}}};const b={month:e=>{if(!f(e))throw new Error("월은 숫자만 입력할 수 있어요")},year:e=>{if(!f(e))throw new Error("년도는 숫자만 입력할 수 있어요")}},H={month:e=>{if(e.length!==2)throw new Error("월은 'MM' 형식으로 입력해 주세요");if(Number(e)<1||Number(e)>12)throw new Error("월은 01 ~ 12 범위로 입력해 주세요")},year:e=>{if(e.length!==2)throw new Error("년도는 'YY' 형식으로 입력해 주세요");if(!S(e))throw new Error("유효한 년도를 입력해 주세요")}},S=e=>{const t=new Date().getFullYear()%100,u=parseInt(e,10);return t<=u},_=()=>{const[e,i]=s.useState({month:"",year:""}),[t,u]=s.useState({isError:{month:!1,year:!1},errorMessage:""}),{flag:m,setTrue:E}=R(),l=[s.useRef(null),s.useRef(null)],h=s.useMemo(()=>e.month.length>0&&e.year.length>0&&!t.isError.month&&!t.isError.year,[e,t.isError]),x=(n,o)=>{i(r=>({...r,[o]:n}))},p=(n,o,r)=>{u(T=>({isError:{...T.isError,[o]:n},errorMessage:r}))},g=(n,o)=>{var r;n.length<2||o==="year"||o==="month"&&((r=l[1].current)==null||r.focus())},y=n=>o=>{try{const{value:r}=o.target;b[n](r),x(r,n),H[n](r),p(!1,n,""),g(r,n)}catch(r){r instanceof Error&&p(!0,n,r.message)}};return s.useEffect(()=>{m||e.month===""||e.year===""||t.isError.month||t.isError.year||E()},[e,t]),{isDoneThisStep:m,isValid:h,cardExpirationDateInputProps:{valueState:e,errorState:t,inputRefs:l,onChange:y}}};export{j as C,_ as u};
