import{j as r}from"./jsx-runtime-BnIj46N_.js";import{u as w,C as S}from"./useCardCvc-6vlGOTFk.js";import{u as T,C as N}from"./useCardExpiration-D9REmbOg.js";import{u as E,C as j}from"./useCardIssuer-BUNZUBbp.js";import{u as F,C as V}from"./useCardNumbers-CtAmIm1N.js";import{u as b,C as g}from"./useCardOwnerName-D9-jv47K.js";import{u as h,C as D}from"./useCardPassword-Ddt3bxiU.js";import{C as O}from"./CardPreview-Bok9FFRP.js";import{F as U}from"./FormSubmitButton-z8D7wHvG.js";import{u as I}from"./styled-components.browser.esm-BDDUX98t.js";import{r as _}from"./index-CsdIBAqE.js";import{u as k}from"./index-C_MVF1Lj.js";const B=e=>_.useMemo(()=>e.every(a=>a),[e]),M=()=>{const{isValid:e,cardPasswordInputProps:a}=h(),{isFocused:i,isDoneThisStep:t,isValid:s,cardCvcInputProps:o}=w(),{isDoneThisStep:n,isValid:p,cardOwnerNameInputProps:d}=b(),{isDoneThisStep:u,isValid:c,cardExpirationDateInputProps:m}=T(),{isDoneThisStep:x,isValid:R,cardIssuerSelectProps:C}=E(),{isDoneThisStep:f,isValid:v,cardNumbersInputProps:l}=F(),P=B([e,s,p,c,R,v]),y={cardPassword:a.valueState,cardCvc:o.valueState,cardOwnerName:d.valueState,cardExpiration:m.valueState,cardIssuer:C.valueState,cardNumbers:l.valueState};return{isReadyToSubmit:P,cardInformation:y,isCardCvcInputFocused:i,dynamicInputUiFlag:{isReadyToRenderCardIssuer:f,isReadyToRenderCardExpiration:x,isReadyToRenderCardOwnerName:u,isReadyToRenderCardCvc:n,isReadyToRenderCardPassword:t},cardPasswordInputProps:a,cardCvcInputProps:o,cardOwnerNameInputProps:d,cardExpirationDateInputProps:m,cardIssuerSelectProps:C,cardNumbersInputProps:l}};function q(){const e=k(),{cardInformation:a,isCardCvcInputFocused:i,isReadyToSubmit:t,dynamicInputUiFlag:s,cardPasswordInputProps:o,cardCvcInputProps:n,cardOwnerNameInputProps:p,cardExpirationDateInputProps:d,cardIssuerSelectProps:u,cardNumbersInputProps:c}=M();return r.jsxs(z,{children:[r.jsx(O,{cardInformation:a,isFlipped:i}),r.jsxs(A,{children:[s.isReadyToRenderCardPassword&&r.jsx(D,{...o}),s.isReadyToRenderCardCvc&&r.jsx(S,{...n}),s.isReadyToRenderCardOwnerName&&r.jsx(g,{...p}),s.isReadyToRenderCardExpiration&&r.jsx(N,{...d}),s.isReadyToRenderCardIssuer&&r.jsx(j,{...u}),r.jsx(V,{...c})]}),t&&r.jsx(U,{onClick:()=>e("/card-enroll-complete",{state:{cardInformation:a}})})]})}const z=I.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 77px;
`,A=I.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 376px;
  padding: 45px 30px;
  gap: 16px;
`;q.__docgenInfo={description:"",methods:[],displayName:"CardEnrollForm"};export{q as C};
