import{j as t}from"./jsx-runtime-BnIj46N_.js";import{r as u}from"./index-CsdIBAqE.js";import{u as c}from"./styled-components.browser.esm-BDDUX98t.js";const p=u.forwardRef(({placeholder:e,defaultValue:a="",options:d,isError:o,onChange:s,onBlur:l},i)=>t.jsxs(n,{ref:i,defaultValue:a,isError:o,onChange:s,onBlur:l,children:[e&&t.jsx("option",{value:a,disabled:!0,hidden:!0,children:e}),d.map(r=>t.jsx("option",{value:r.value,children:r.label},r.value))]})),n=c.select`
  padding: 8px;
  background: white;
  color: black;
  border: 1px solid
    ${e=>e.isError?"red":"rgba(172, 172, 172, 1)"};
  border-radius: 4px;
  width: 100%;
`;p.__docgenInfo={description:"",methods:[],displayName:"Select",props:{defaultValue:{defaultValue:{value:'""',computed:!1},required:!1}}};export{p as S};
