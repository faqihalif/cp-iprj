import{j as e}from"./app-e1a3b5ee.js";import{B as a}from"./button-626b7d42.js";import{C as i,a as n,b as s,d,c as r}from"./card-ebf61cd2.js";function m(t){return e.jsxs(i,{children:[e.jsxs(n,{children:[e.jsxs("div",{className:"flex items-center justify-between space-x-4",children:[e.jsx(s,{className:"truncate",children:t.data.job_title}),e.jsxs(s,{className:"truncate",children:[t.data.from," - ",t.data.to]})]}),e.jsx(d,{className:"truncate",children:t.data.company})]}),e.jsxs(r,{className:"flex items-center justify-end space-x-4",children:[e.jsx(a,{variant:"secondary",type:"button",onClick:()=>t.edit(t.data.id),children:"Edit"}),e.jsx(a,{variant:"destructive",type:"button",onClick:()=>t.delete(t.data.id),children:"Delete"})]})]})}export{m as default};