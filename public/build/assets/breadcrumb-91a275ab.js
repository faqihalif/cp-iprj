import{r as t,j as s}from"./app-35676c4a.js";import{C as d}from"./react-icons.esm-ab02deca.js";import{c as m,S as l}from"./button-29efbe2c.js";const i=t.forwardRef(({...a},e)=>s.jsx("nav",{ref:e,"aria-label":"breadcrumb",...a}));i.displayName="Breadcrumb";const n=t.forwardRef(({className:a,...e},r)=>s.jsx("ol",{ref:r,className:m("flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5 dark:text-slate-400",a),...e}));n.displayName="BreadcrumbList";const p=t.forwardRef(({className:a,...e},r)=>s.jsx("li",{ref:r,className:m("inline-flex items-center gap-1.5",a),...e}));p.displayName="BreadcrumbItem";const x=t.forwardRef(({asChild:a,className:e,...r},o)=>{const c=a?l:"a";return s.jsx(c,{ref:o,className:m("transition-colors hover:text-slate-950 dark:hover:text-slate-50",e),...r})});x.displayName="BreadcrumbLink";const b=t.forwardRef(({className:a,...e},r)=>s.jsx("span",{ref:r,role:"link","aria-disabled":"true","aria-current":"page",className:m("font-normal text-slate-950 dark:text-slate-50",a),...e}));b.displayName="BreadcrumbPage";const u=({children:a,className:e,...r})=>s.jsx("li",{role:"presentation","aria-hidden":"true",className:m("[&>svg]:size-3.5",e),...r,children:a??s.jsx(d,{})});u.displayName="BreadcrumbSeparator";export{i as B,n as a,p as b,u as c,b as d};