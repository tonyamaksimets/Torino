import{x as te,y as le,W as ne,Y as oe,aT as se,Z as x,j as g,$ as D,aZ as ae,a_ as L,ag as ie,z as re,f as p,aU as ue,E as ce,a$ as fe,A as ve,O as $,b0 as de,b1 as q,P as B}from"./index-ZXjqcPJy.js";function he(l){let{selectedElement:s,containerElement:o,isRtl:i,isHorizontal:v}=l;const d=b(v,o),a=U(v,i,o),h=b(v,s),c=K(v,s),S=h*.4;return a>c?c-S:a+d<c+h?c-d+h+S:a}function pe(l){let{selectedElement:s,containerElement:o,isHorizontal:i}=l;const v=b(i,o),d=K(i,s),a=b(i,s);return d-v/2+a/2}function N(l,s){const o=l?"scrollWidth":"scrollHeight";return(s==null?void 0:s[o])||0}function ge(l,s){const o=l?"clientWidth":"clientHeight";return(s==null?void 0:s[o])||0}function U(l,s,o){if(!o)return 0;const{scrollLeft:i,offsetWidth:v,scrollWidth:d}=o;return l?s?d-v+i:i:o.scrollTop}function b(l,s){const o=l?"offsetWidth":"offsetHeight";return(s==null?void 0:s[o])||0}function K(l,s){const o=l?"offsetLeft":"offsetTop";return(s==null?void 0:s[o])||0}const Se=Symbol.for("vuetify:v-slide-group"),ye=le({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:Se},nextIcon:{type:$,default:"$next"},prevIcon:{type:$,default:"$prev"},showArrows:{type:[Boolean,String],validator:l=>typeof l=="boolean"||["always","desktop","mobile"].includes(l)},...ve(),...fe({mobile:null}),...ce(),...ue({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),be=te()({name:"VSlideGroup",props:ye(),emits:{"update:modelValue":l=>!0},setup(l,s){let{slots:o}=s;const{isRtl:i}=ne(),{displayClasses:v,mobile:d}=oe(l),a=se(l,l.symbol),h=x(!1),c=x(0),S=x(0),W=x(0),r=g(()=>l.direction==="horizontal"),{resizeRef:u,contentRect:k}=D(),{resizeRef:f,contentRect:w}=D(),C=ae(),V=g(()=>({container:u.el,duration:200,easing:"easeOutQuart"})),Z=g(()=>a.selected.value.length?a.items.value.findIndex(t=>t.id===a.selected.value[0]):-1),j=g(()=>a.selected.value.length?a.items.value.findIndex(t=>t.id===a.selected.value[a.selected.value.length-1]):-1);if(L){let t=-1;ie(()=>[a.selected.value,k.value,w.value,r.value],()=>{cancelAnimationFrame(t),t=requestAnimationFrame(()=>{if(k.value&&w.value){const e=r.value?"width":"height";S.value=k.value[e],W.value=w.value[e],h.value=S.value+1<W.value}if(Z.value>=0&&f.el){const e=f.el.children[j.value];M(e,l.centerActive)}})})}const m=x(!1);function M(t,e){let n=0;e?n=pe({containerElement:u.el,isHorizontal:r.value,selectedElement:t}):n=he({containerElement:u.el,isHorizontal:r.value,isRtl:i.value,selectedElement:t}),H(n)}function H(t){if(!L||!u.el)return;const e=b(r.value,u.el),n=U(r.value,i.value,u.el);if(!(N(r.value,u.el)<=e||Math.abs(t-n)<16)){if(r.value&&i.value&&u.el){const{scrollWidth:I,offsetWidth:O}=u.el;t=I-O-t}r.value?C.horizontal(t,V.value):C(t,V.value)}}function Q(t){const{scrollTop:e,scrollLeft:n}=t.target;c.value=r.value?n:e}function Y(t){if(m.value=!0,!(!h.value||!f.el)){for(const e of t.composedPath())for(const n of f.el.children)if(n===e){M(n);return}}}function J(t){m.value=!1}let E=!1;function X(t){var e;!E&&!m.value&&!(t.relatedTarget&&((e=f.el)!=null&&e.contains(t.relatedTarget)))&&y(),E=!1}function G(){E=!0}function ee(t){if(!f.el)return;function e(n){t.preventDefault(),y(n)}r.value?t.key==="ArrowRight"?e(i.value?"prev":"next"):t.key==="ArrowLeft"&&e(i.value?"next":"prev"):t.key==="ArrowDown"?e("next"):t.key==="ArrowUp"&&e("prev"),t.key==="Home"?e("first"):t.key==="End"&&e("last")}function z(t,e){if(!t)return;let n=t;do n=n==null?void 0:n[e==="next"?"nextElementSibling":"previousElementSibling"];while(n!=null&&n.hasAttribute("disabled"));return n}function y(t){if(!f.el)return;let e;if(!t)e=de(f.el)[0];else if(t==="next"){if(e=z(f.el.querySelector(":focus"),t),!e)return y("first")}else if(t==="prev"){if(e=z(f.el.querySelector(":focus"),t),!e)return y("last")}else t==="first"?(e=f.el.firstElementChild,e!=null&&e.hasAttribute("disabled")&&(e=z(e,"next"))):t==="last"&&(e=f.el.lastElementChild,e!=null&&e.hasAttribute("disabled")&&(e=z(e,"prev")));e&&e.focus({preventScroll:!0})}function R(t){const e=r.value&&i.value?-1:1,n=(t==="prev"?-e:e)*S.value;let _=c.value+n;if(r.value&&i.value&&u.el){const{scrollWidth:I,offsetWidth:O}=u.el;_+=I-O}H(_)}const A=g(()=>({next:a.next,prev:a.prev,select:a.select,isSelected:a.isSelected})),T=g(()=>{switch(l.showArrows){case"always":return!0;case"desktop":return!d.value;case!0:return h.value||Math.abs(c.value)>0;case"mobile":return d.value||h.value||Math.abs(c.value)>0;default:return!d.value&&(h.value||Math.abs(c.value)>0)}}),F=g(()=>Math.abs(c.value)>1),P=g(()=>{if(!u.value)return!1;const t=N(r.value,u.el),e=ge(r.value,u.el);return t-e-Math.abs(c.value)>1});return re(()=>p(l.tag,{class:["v-slide-group",{"v-slide-group--vertical":!r.value,"v-slide-group--has-affixes":T.value,"v-slide-group--is-overflowing":h.value},v.value,l.class],style:l.style,tabindex:m.value||a.selected.value.length?-1:0,onFocus:X},{default:()=>{var t,e,n;return[T.value&&p("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!F.value}],onMousedown:G,onClick:()=>F.value&&R("prev")},[((t=o.prev)==null?void 0:t.call(o,A.value))??p(q,null,{default:()=>[p(B,{icon:i.value?l.nextIcon:l.prevIcon},null)]})]),p("div",{key:"container",ref:u,class:"v-slide-group__container",onScroll:Q},[p("div",{ref:f,class:"v-slide-group__content",onFocusin:Y,onFocusout:J,onKeydown:ee},[(e=o.default)==null?void 0:e.call(o,A.value)])]),T.value&&p("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!P.value}],onMousedown:G,onClick:()=>P.value&&R("next")},[((n=o.next)==null?void 0:n.call(o,A.value))??p(q,null,{default:()=>[p(B,{icon:i.value?l.prevIcon:l.nextIcon},null)]})])]}})),{selected:a.selected,scrollTo:R,scrollOffset:c,focus:y,hasPrev:F,hasNext:P}}});export{be as V,ye as m};
