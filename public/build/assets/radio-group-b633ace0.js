import{r as i,j as t}from"./app-35676c4a.js";import{c as w,a as h,P as K,u as V,b as T,d as B}from"./react-icons.esm-ab02deca.js";import{u as C,c as g}from"./button-29efbe2c.js";import{P as x}from"./index-7cec629b.js";import{c as I,u as U,R as z,I as H}from"./index-3b2bed7c.js";import{u as $}from"./index-9df92af7.js";var y="Radio",[W,P]=w(y),[X,Y]=W(y),E=i.forwardRef((o,s)=>{const{__scopeRadio:e,name:c,checked:r=!1,required:a,disabled:d,value:l="on",onCheck:u,...R}=o,[m,p]=i.useState(null),f=C(s,b=>p(b)),n=i.useRef(!1),v=m?!!m.closest("form"):!0;return t.jsxs(X,{scope:e,checked:r,disabled:d,children:[t.jsx(x.button,{type:"button",role:"radio","aria-checked":r,"data-state":N(r),"data-disabled":d?"":void 0,disabled:d,value:l,...R,ref:f,onClick:h(o.onClick,b=>{r||u==null||u(),v&&(n.current=b.isPropagationStopped(),n.current||b.stopPropagation())})}),v&&t.jsx(J,{control:m,bubbles:!n.current,name:c,value:l,checked:r,required:a,disabled:d,style:{transform:"translateX(-100%)"}})]})});E.displayName=y;var j="RadioIndicator",G=i.forwardRef((o,s)=>{const{__scopeRadio:e,forceMount:c,...r}=o,a=Y(j,e);return t.jsx(K,{present:c||a.checked,children:t.jsx(x.span,{"data-state":N(a.checked),"data-disabled":a.disabled?"":void 0,...r,ref:s})})});G.displayName=j;var J=o=>{const{control:s,checked:e,bubbles:c=!0,...r}=o,a=i.useRef(null),d=$(e),l=V(s);return i.useEffect(()=>{const u=a.current,R=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(R,"checked").set;if(d!==e&&p){const f=new Event("click",{bubbles:c});p.call(u,e),u.dispatchEvent(f)}},[d,e,c]),t.jsx("input",{type:"radio","aria-hidden":!0,defaultChecked:e,...r,tabIndex:-1,ref:a,style:{...o.style,...l,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})};function N(o){return o?"checked":"unchecked"}var Q=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],k="RadioGroup",[Z,pe]=w(k,[I,P]),S=I(),_=P(),[ee,oe]=Z(k),A=i.forwardRef((o,s)=>{const{__scopeRadioGroup:e,name:c,defaultValue:r,value:a,required:d=!1,disabled:l=!1,orientation:u,dir:R,loop:m=!0,onValueChange:p,...f}=o,n=S(e),v=U(R),[b,L]=T({prop:a,defaultProp:r,onChange:p});return t.jsx(ee,{scope:e,name:c,required:d,disabled:l,value:b,onValueChange:L,children:t.jsx(z,{asChild:!0,...n,orientation:u,dir:v,loop:m,children:t.jsx(x.div,{role:"radiogroup","aria-required":d,"aria-orientation":u,"data-disabled":l?"":void 0,dir:v,...f,ref:s})})})});A.displayName=k;var D="RadioGroupItem",M=i.forwardRef((o,s)=>{const{__scopeRadioGroup:e,disabled:c,...r}=o,a=oe(D,e),d=a.disabled||c,l=S(e),u=_(e),R=i.useRef(null),m=C(s,R),p=a.value===r.value,f=i.useRef(!1);return i.useEffect(()=>{const n=b=>{Q.includes(b.key)&&(f.current=!0)},v=()=>f.current=!1;return document.addEventListener("keydown",n),document.addEventListener("keyup",v),()=>{document.removeEventListener("keydown",n),document.removeEventListener("keyup",v)}},[]),t.jsx(H,{asChild:!0,...l,focusable:!d,active:p,children:t.jsx(E,{disabled:d,required:a.required,checked:p,...u,...r,name:a.name,ref:m,onCheck:()=>a.onValueChange(r.value),onKeyDown:h(n=>{n.key==="Enter"&&n.preventDefault()}),onFocus:h(r.onFocus,()=>{var n;f.current&&((n=R.current)==null||n.click())})})})});M.displayName=D;var re="RadioGroupIndicator",O=i.forwardRef((o,s)=>{const{__scopeRadioGroup:e,...c}=o,r=_(e);return t.jsx(G,{...r,...c,ref:s})});O.displayName=re;var F=A,q=M,ae=O;const te=i.forwardRef(({className:o,...s},e)=>t.jsx(F,{className:g("grid gap-2",o),...s,ref:e}));te.displayName=F.displayName;const se=i.forwardRef(({className:o,...s},e)=>t.jsx(q,{ref:e,className:g("aspect-square h-4 w-4 rounded-full border border-slate-200 border-slate-900 text-slate-900 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-50 dark:text-slate-50 dark:focus-visible:ring-slate-300",o),...s,children:t.jsx(ae,{className:"flex items-center justify-center",children:t.jsx(B,{className:"h-3.5 w-3.5 fill-primary"})})}));se.displayName=q.displayName;export{te as R,se as a};