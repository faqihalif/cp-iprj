import{r,j as e}from"./app-56d17ed0.js";import{a as p}from"./front-4761694b.js";import x from"./index-9e8d4f02.js";import"./data-table-155aa94d.js";import{B as b}from"./badge-6267a572.js";import{c as l,B as h}from"./button-c0b2e852.js";import j from"./new-application-c1c7f4ea.js";import"./loading-ee1c3649.js";import"./use-tab-direction-2297785c.js";import"./createLucideIcon-3157ba97.js";import"./background-bcef12a6.js";import"./chevron-right-62deff18.js";import"./input-e9b6d75e.js";import"./checkbox-7ea67cee.js";import"./react-icons.esm-ce74f144.js";import"./index-e0a3f88c.js";import"./index-fa6ec8e9.js";import"./dialog-scroll-dd98ddff.js";import"./use-is-mounted-093d7ada.js";import"./radio-group-e1fc4509.js";import"./index-38a96736.js";import"./card-fae5f676.js";import"./index.esm-2e548c42.js";import"./detail-closed-87e789bc.js";const c=r.forwardRef(({className:t,...a},s)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:s,className:l("w-full caption-bottom text-sm",t),...a})}));c.displayName="Table";const n=r.forwardRef(({className:t,...a},s)=>e.jsx("thead",{ref:s,className:l("[&_tr]:border-b",t),...a}));n.displayName="TableHeader";const m=r.forwardRef(({className:t,...a},s)=>e.jsx("tbody",{ref:s,className:l("[&_tr:last-child]:border-0",t),...a}));m.displayName="TableBody";const f=r.forwardRef(({className:t,...a},s)=>e.jsx("tfoot",{ref:s,className:l("border-t bg-slate-100/50 font-medium [&>tr]:last:border-b-0 dark:bg-slate-800/50",t),...a}));f.displayName="TableFooter";const d=r.forwardRef(({className:t,...a},s)=>e.jsx("tr",{ref:s,className:l("border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800",t),...a}));d.displayName="TableRow";const o=r.forwardRef(({className:t,...a},s)=>e.jsx("th",{ref:s,className:l("h-10 px-2 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px] dark:text-slate-400",t),...a}));o.displayName="TableHead";const i=r.forwardRef(({className:t,...a},s)=>e.jsx("td",{ref:s,className:l("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",t),...a}));i.displayName="TableCell";const N=r.forwardRef(({className:t,...a},s)=>e.jsx("caption",{ref:s,className:l("mt-4 text-sm text-slate-500 dark:text-slate-400",t),...a}));N.displayName="TableCaption";function w(t){const[a,s]=r.useState(!1);return e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between pb-4",children:[e.jsx("div",{children:e.jsx("p",{className:"text-lg font-bold text-gray-700",children:"Application List"})}),e.jsx("div",{children:e.jsx(h,{type:"button",onClick:()=>s(!0),children:"New Application"})})]}),e.jsx("div",{children:e.jsxs(c,{children:[e.jsx(n,{children:e.jsxs(d,{children:[e.jsx(o,{children:"Program Category"}),e.jsx(o,{children:"Subspecialties"}),e.jsx(o,{children:"Submit Date"}),e.jsx(o,{children:"Status"}),e.jsx(o,{className:"text-right"})]})}),e.jsx(m,{children:e.jsxs(d,{children:[e.jsx(i,{children:"Fellowship"}),e.jsx(i,{children:"Glaucoma Management"}),e.jsx(i,{children:"2024-09-10"}),e.jsx(i,{children:e.jsx(b,{className:"bg-blue-600",children:"On Review"})}),e.jsx(i,{className:"text-right",children:"$250.00"})]})})]})}),a&&e.jsx(j,{show:a,setShow:s,programApplication:t.program_application})]})}w.layout=t=>e.jsx(p,{children:e.jsx(x,{children:t})});export{w as default};