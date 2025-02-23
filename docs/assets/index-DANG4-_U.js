import{C as ye}from"./ClothesMenu-9qYDQT_c.js";import{i as ge,_ as be}from"./ideas-BSkg10a9.js";import{d as S,h as xe,g as we,p as _e,u as Se,a as ke,b as Pe,s as P,c as x,e as X,f as Te,I as Y,w as Ee,i as Ie,j as m,m as ze,k as $e,l as Ce,n as Oe,o as J,q as Ae,V as Q,r as Z,_ as Fe,t as Ve,v as $,x as _,y as T,z as ae,F as oe,A as Me,B as j,C as De,D as W,E as Re,G as qe,H as Be,J as We,K as je,L as He,M as Ne,N as Ge,O as Ue}from"./index-DW0lKt0u.js";import"./catalog-ZFNGNNYy.js";import"./VDivider-JbI1uuFc.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var b=function(){return b=Object.assign||function(n){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},b.apply(this,arguments)};function Le(e,n){var t={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(e);s<i.length;s++)n.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(e,i[s])&&(t[i[s]]=e[i[s]]);return t}function ee(e,n,t,i){function s(r){return r instanceof t?r:new t(function(l){l(r)})}return new(t||(t=Promise))(function(r,l){function d(v){try{o(i.next(v))}catch(f){l(f)}}function c(v){try{o(i.throw(v))}catch(f){l(f)}}function o(v){v.done?r(v.value):s(v.value).then(d,c)}o((i=i.apply(e,[])).next())})}function te(e,n){var t={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,s,r,l;return l={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function d(o){return function(v){return c([o,v])}}function c(o){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,s&&(r=o[0]&2?s.return:o[0]?s.throw||((r=s.return)&&r.call(s),0):s.next)&&!(r=r.call(s,o[1])).done)return r;switch(s=0,r&&(o=[o[0]&2,r.value]),o[0]){case 0:case 1:r=o;break;case 4:return t.label++,{value:o[1],done:!1};case 5:t.label++,s=o[1],o=[0];continue;case 7:o=t.ops.pop(),t.trys.pop();continue;default:if(r=t.trys,!(r=r.length>0&&r[r.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!r||o[1]>r[0]&&o[1]<r[3])){t.label=o[1];break}if(o[0]===6&&t.label<r[1]){t.label=r[1],r=o;break}if(r&&t.label<r[2]){t.label=r[2],t.ops.push(o);break}r[2]&&t.ops.pop(),t.trys.pop();continue}o=n.call(e,t)}catch(v){o=[6,v],s=0}finally{i=r=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}var Ke=function(e){return e?Object.entries(e).reduce(function(n,t){var i,s=t[0],r=t[1];return s=s.charAt(0).toUpperCase()+s.slice(1),s="on"+s,b(b({},n),(i={},i[s]=r,i))},{}):null},g=function(e,n,t){n===void 0&&(n={});var i=n.props,s=n.domProps,r=n.on,l=Le(n,["props","domProps","on"]),d=Ke(r),c=b(b(b(b({},l),i),s),d);return xe(e,c,t)},H=function(e,n){return typeof e=="function"?e(n):e},Xe=S({props:{story:{type:Object,required:!0}},render:function(){var e={width:"auto",maxWidth:"100%",maxHeight:"100%",margin:"auto"},n={style:e,domProps:{src:this.story.url}};return g("img",n)}}),Ye=S({props:{story:{type:Object,required:!0},isPaused:{type:Boolean,required:!0}},watch:{isPaused:function(e){e?this.vid.pause():this.vid.play()}},data:function(){return{muted:!1}},computed:{vid:function(){return this.$el}},render:function(){var e=this,n={width:"auto",maxWidth:"100%",maxHeight:"100%",margin:"auto"},t={controls:!0,autoPlay:!0,playsInline:!0,muted:this.muted,"webkit-playsinline":!0},i=function(){return ee(e,void 0,void 0,function(){var l=this;return te(this,function(d){switch(d.label){case 0:this.$emit("action","duration",this.vid.duration*1e3),d.label=1;case 1:return d.trys.push([1,3,,4]),[4,this.vid.play()];case 2:return d.sent(),[3,4];case 3:return d.sent(),this.muted=!0,this.$nextTick(function(){return ee(l,void 0,void 0,function(){return te(this,function(c){switch(c.label){case 0:return[4,this.vid.play()];case 1:return[2,c.sent()]}})})}),[3,4];case 4:return[2]}})})};this.$emit("action","pause");var s=function(){e.$emit("action","play")},r={style:n,domProps:b({src:this.story.url},t),on:{loadeddata:i,playing:s}};return g("video",r)}}),Je=function(e){switch(e){case"image":return Xe;case"video":return Ye;default:throw new Error("Did not find a render for type "+e)}},Qe=function(e,n){var t=e.story,i=e.isPaused,s=e.onAction,r={props:{story:t,isPaused:i},on:{action:s}},l=t.type,d=t.template;if(d){var c=n[d];if(!c)throw new Error("unable to find the template '"+d+"'");return H(c,r)}return g(Je(l),r)};function Ze(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css",t==="top"&&i.firstChild?i.insertBefore(s,i.firstChild):i.appendChild(s),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(document.createTextNode(e))}}var et=`.vue-insta-stories {
  z-index: 1;
  display: flex;
  flex-direction: column;
  background: #111;
}

.vue-insta-stories-full {
  position: absolute;
  height: 100vh;
  height: -webkit-fill-available;
  width: 100vw;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.vue-insta-stories-page {
 position: relative;
 height: 730px default;
 width: 420px default;
}

.vue-insta-stories .header {
  position: absolute;
  z-index: 10;
  top: 22px;
  left: 16px;
}

.vue-insta-stories .timeline {
  position: absolute;
  display: flex;
  flex-grow: 0;
  width: 100%;
  background: -webkit-gradient(
    linear,
    top,
    bottom,
    from(rgba(0, 0, 0, 0.2)),
    to(rgba(0, 0, 0, 0))
  );
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  padding-bottom: 8px; /* To add more space for gradient */
  z-index: 10;
}

.vue-insta-stories .timeline > .slice {
  background: rgba(255, 255, 255, 0.5);
  height: 2px;
  border-radius: 2px;
  margin: 6px 3px;
  width: 100%;
}

.vue-insta-stories .timeline > .slice > .progress {
  background: #fff;
  height: 2px;
  border-radius: 2px;
  width: 0%;
}

.see-more-wrapper {
  flex-grow: 1;
  display: flex;
  position: relative;
}

.see-more-wrapper .see-more {
  position: absolute;
  height: 10vh;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));
  display: flex;
  align-items: center;
  justify-content: flex-end;
  bottom: 0;
  z-index: 10;
}

.see-more-wrapper .see-more-text, .see-more-wrapper .see-more-icon {
  color: white;
  letter-spacing: 0.1em;
  font-weight: bold;
  font-size: 1rem;
  transition: opacity 300ms ease-in-out;
}
.see-more-wrapper .see-more-text {
  letter-spacing: 0.1em;
  margin-bottom: 2.2vh;
}`;Ze(et);var tt=S({props:{progress:{type:Number,required:!0}},render:function(){var e={width:this.progress+"%"};return g("div",{class:"slice"},[g("div",{class:"progress",style:e})])}}),nt=S({props:{stories:{type:Array,required:!0},currentIndex:{type:Number,required:!0},isPaused:{type:Boolean,required:!0}},data:function(){return{count:0,startTime:0,savedTimeStamp:0,deltaPaused:0,lastPaused:0,animFrameId:-1}},watch:{currentIndex:{immediate:!0,handler:function(){this.count=0,this.startTime=0,this.deltaPaused=0,cancelAnimationFrame(this.animFrameId),this.animFrameId=requestAnimationFrame(this.incrementCount)}},isPaused:{immediate:!0,handler:function(e){cancelAnimationFrame(this.animFrameId),e?this.lastPaused=performance.now():(this.lastPaused&&(this.deltaPaused+=performance.now()-this.lastPaused),this.animFrameId=requestAnimationFrame(this.incrementCount))}}},computed:{currentStory:function(){return this.stories[this.currentIndex]}},emits:["storyEnd"],methods:{storyEnd:function(){this.$emit("storyEnd",this.currentIndex)},incrementCount:function(e){this.startTime||(this.startTime=e);var n=e-this.startTime-this.deltaPaused;this.count=n/this.currentStory.duration*100,this.count<100?this.animFrameId=requestAnimationFrame(this.incrementCount):(this.storyEnd(),cancelAnimationFrame(this.animFrameId))}},render:function(){var e=this.currentIndex,n=this.count,t=this.stories.map(function(i,s){var r=s==e?n:s<e?100:0,l=s;return g(tt,{key:l,props:{progress:r}})});return g("div",{class:"timeline",ref:"timeline"},t)}}),rt=S({name:"WithSeeMore",props:{enabled:{type:Boolean,default:!0},label:{type:String,required:!1}},data:function(){return{opacity:0,yDown:void 0}},methods:{emit:function(){this.$emit("action")}},mounted:function(){this.opacity=.9},render:function(){var e=this,n=function(c){var o;if(c.stopPropagation(),c instanceof TouchEvent){var v=(o=c.touches[0])!==null&&o!==void 0?o:c.changedTouches[0];e.yDown=v.clientY}},t=function(c){c.stopPropagation(),e.emit()},i=function(c){var o;if(c.stopPropagation(),!!e.yDown){var v=(o=c.touches[0])!==null&&o!==void 0?o:c.changedTouches[0],f=e.yDown-v.clientY;f>0&&e.emit(),e.yDown=void 0}},s={mouseup:t,touchend:t,touchstart:n,mousedown:n,touchmove:i},r={opacity:this.opacity},l=this.label||"See more",d=g("div",{class:"see-more",on:s},[g("span",{class:"see-more-icon",style:r},"^"),g("span",{class:"see-more-text",style:r},l)]);return g("div",{class:"see-more-wrapper"},[H(this.$slots.default),d])}}),st=function(e,n,t){if(!n)return e;var i={default:function(){return e}},s=n===!0?void 0:n.label;return g(rt,{props:{label:s},on:{action:t}},i)},ne=function(e){e.animate([{opacity:0}],{duration:200,fill:"forwards"})},re=function(e){e.animate([{opacity:1}],{duration:200,fill:"forwards"})},it=function(e){var n;if(e instanceof MouseEvent)return e.offsetX;var t=(n=e.touches[0])!==null&&n!==void 0?n:e.changedTouches[0];return t.clientX},at=S({name:"Stories",props:{stories:{type:Array,required:!0},interval:{type:Number,default:2e3},currentIndex:{type:Number,default:0},isPaused:{type:Boolean,required:!1},loop:{type:Boolean,default:!1,required:!1}},emits:["storyStart","storyEnd","allStoriesEnd","update:currentIndex","update:isPaused","seeMore","next","prev"],watch:{currentIndex:function(e){this.index=e},index:{immediate:!0,handler:function(e){this.$emit("update:currentIndex",e),this.$emit("storyStart",e)}},isPaused:{immediate:!0,handler:function(e){this.paused=e}},paused:function(e){e?this.pause():this.play(),this.$emit("update:isPaused",e)},stories:{immediate:!0,handler:function(e){var n=this;this.items=e.map(function(t){var i={duration:n.interval,type:"image"};return typeof t=="string"?b(b({},i),{url:t}):b(b({},i),t)})}}},data:function(){return{index:this.currentIndex,paused:!1,mouseDownTimeout:void 0,items:[]}},methods:{nextSlide:function(e){e===void 0&&(e=!0),e&&this.$emit("next"),this.index<this.stories.length-1?this.index++:this.loop&&(this.index=0)},previousSlide:function(){this.$emit("prev"),this.index>0&&this.index--},togglePause:function(){this.paused=!this.paused},pause:function(){ne(this.$refs.timeline.$el),this.$refs.header&&ne(this.$refs.header)},play:function(){re(this.$refs.timeline.$el),this.$refs.header&&re(this.$refs.header)},storyEnd:function(e){this.$emit("storyEnd",e),this.nextSlide(!1),e===this.stories.length-1&&(this.loop?this.index=0:this.$emit("allStoriesEnd"))}},render:function(){var e=this,n=this.items[this.index],t={props:{stories:this.items,currentIndex:this.index,isPaused:this.paused},on:{storyEnd:this.storyEnd}},i=function(f,p){switch(f){case"play":break;case"pause":break;case"duration":var w=p;e.items[e.index].duration=w;break;default:console.log(f,p)}},s=function(f){f.preventDefault(),e.mouseDownTimeout=setTimeout(function(){return e.togglePause()},150)},r=function(f){if(f.preventDefault(),e.mouseDownTimeout&&clearTimeout(e.mouseDownTimeout),e.paused)e.paused=!1;else{var p=it(f),w=e.$refs.stories.getBoundingClientRect().width,y=w/3;p>y?e.nextSlide():e.previousSlide()}},l={touchstart:s,touchend:r,mousedown:s,mouseup:r},d=function(){e.paused=!0,e.$emit("seeMore",n)},c={story:n,onAction:i,isPaused:this.paused},o=this.$slots.header,v=Qe(c,this.$slots);return g("div",{ref:"stories",class:"vue-insta-stories",on:l},[g(nt,b({ref:"timeline"},t)),o?g("div",{class:"header",ref:"header"},H(o,{story:n})):null,st(v,n.seeMore,d)])}});const se=[{header:"Образы под Ваш стиль",items:["/Torino/assets/images/stories/1.png","/Torino/assets/images/stories/2.png"]},{header:"Новинки и идеи",items:["/Torino/assets/images/stories/3.png"]},{header:"Узнайте о модных показах первым",items:["/Torino/assets/images/stories/4.png","/Torino/assets/images/stories/5.png","/Torino/assets/images/stories/6.png"]},{header:"Образы на все случаи",items:["/Torino/assets/images/stories/7.png","/Torino/assets/images/stories/8.png"]}];function ot(e){let{selectedElement:n,containerElement:t,isRtl:i,isHorizontal:s}=e;const r=E(s,t),l=ue(s,i,t),d=E(s,n),c=le(s,n),o=d*.4;return l>c?c-o:l+r<c+d?c-r+d+o:l}function ut(e){let{selectedElement:n,containerElement:t,isHorizontal:i}=e;const s=E(i,t),r=le(i,n),l=E(i,n);return r-s/2+l/2}function ie(e,n){const t=e?"scrollWidth":"scrollHeight";return(n==null?void 0:n[t])||0}function lt(e,n){const t=e?"clientWidth":"clientHeight";return(n==null?void 0:n[t])||0}function ue(e,n,t){if(!t)return 0;const{scrollLeft:i,offsetWidth:s,scrollWidth:r}=t;return e?n?r-s+i:i:t.scrollTop}function E(e,n){const t=e?"offsetWidth":"offsetHeight";return(n==null?void 0:n[t])||0}function le(e,n){const t=e?"offsetLeft":"offsetTop";return(n==null?void 0:n[t])||0}const ct=Symbol.for("vuetify:v-slide-group"),dt=_e({centerActive:Boolean,direction:{type:String,default:"horizontal"},symbol:{type:null,default:ct},nextIcon:{type:J,default:"$next"},prevIcon:{type:J,default:"$prev"},showArrows:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["always","desktop","mobile"].includes(e)},...Oe(),...Ce({mobile:null}),...$e(),...ze({selectedClass:"v-slide-group-item--active"})},"VSlideGroup"),ft=we()({name:"VSlideGroup",props:dt(),emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:t}=n;const{isRtl:i}=Se(),{displayClasses:s,mobile:r}=ke(e),l=Pe(e,e.symbol),d=P(!1),c=P(0),o=P(0),v=P(0),f=x(()=>e.direction==="horizontal"),{resizeRef:p,contentRect:w}=X(),{resizeRef:y,contentRect:C}=X(),N=Te(),G=x(()=>({container:p.el,duration:200,easing:"easeOutQuart"})),ce=x(()=>l.selected.value.length?l.items.value.findIndex(u=>u.id===l.selected.value[0]):-1),de=x(()=>l.selected.value.length?l.items.value.findIndex(u=>u.id===l.selected.value[l.selected.value.length-1]):-1);if(Y){let u=-1;Ee(()=>[l.selected.value,w.value,C.value,f.value],()=>{cancelAnimationFrame(u),u=requestAnimationFrame(()=>{if(w.value&&C.value){const a=f.value?"width":"height";o.value=w.value[a],v.value=C.value[a],d.value=o.value+1<v.value}if(ce.value>=0&&y.el){const a=y.el.children[de.value];U(a,e.centerActive)}})})}const I=P(!1);function U(u,a){let h=0;a?h=ut({containerElement:p.el,isHorizontal:f.value,selectedElement:u}):h=ot({containerElement:p.el,isHorizontal:f.value,isRtl:i.value,selectedElement:u}),L(h)}function L(u){if(!Y||!p.el)return;const a=E(f.value,p.el),h=ue(f.value,i.value,p.el);if(!(ie(f.value,p.el)<=a||Math.abs(u-h)<16)){if(f.value&&i.value&&p.el){const{scrollWidth:q,offsetWidth:B}=p.el;u=q-B-u}f.value?N.horizontal(u,G.value):N(u,G.value)}}function fe(u){const{scrollTop:a,scrollLeft:h}=u.target;c.value=f.value?h:a}function he(u){if(I.value=!0,!(!d.value||!y.el)){for(const a of u.composedPath())for(const h of y.el.children)if(h===a){U(h);return}}}function ve(u){I.value=!1}let O=!1;function pe(u){var a;!O&&!I.value&&!(u.relatedTarget&&((a=y.el)!=null&&a.contains(u.relatedTarget)))&&k(),O=!1}function K(){O=!0}function me(u){if(!y.el)return;function a(h){u.preventDefault(),k(h)}f.value?u.key==="ArrowRight"?a(i.value?"prev":"next"):u.key==="ArrowLeft"&&a(i.value?"next":"prev"):u.key==="ArrowDown"?a("next"):u.key==="ArrowUp"&&a("prev"),u.key==="Home"?a("first"):u.key==="End"&&a("last")}function z(u,a){if(!u)return;let h=u;do h=h==null?void 0:h[a==="next"?"nextElementSibling":"previousElementSibling"];while(h!=null&&h.hasAttribute("disabled"));return h}function k(u){if(!y.el)return;let a;if(!u)a=Ae(y.el)[0];else if(u==="next"){if(a=z(y.el.querySelector(":focus"),u),!a)return k("first")}else if(u==="prev"){if(a=z(y.el.querySelector(":focus"),u),!a)return k("last")}else u==="first"?(a=y.el.firstElementChild,a!=null&&a.hasAttribute("disabled")&&(a=z(a,"next"))):u==="last"&&(a=y.el.lastElementChild,a!=null&&a.hasAttribute("disabled")&&(a=z(a,"prev")));a&&a.focus({preventScroll:!0})}function A(u){const a=f.value&&i.value?-1:1,h=(u==="prev"?-a:a)*o.value;let R=c.value+h;if(f.value&&i.value&&p.el){const{scrollWidth:q,offsetWidth:B}=p.el;R+=q-B}L(R)}const F=x(()=>({next:l.next,prev:l.prev,select:l.select,isSelected:l.isSelected})),V=x(()=>{switch(e.showArrows){case"always":return!0;case"desktop":return!r.value;case!0:return d.value||Math.abs(c.value)>0;case"mobile":return r.value||d.value||Math.abs(c.value)>0;default:return!r.value&&(d.value||Math.abs(c.value)>0)}}),M=x(()=>Math.abs(c.value)>1),D=x(()=>{if(!p.value)return!1;const u=ie(f.value,p.el),a=lt(f.value,p.el);return u-a-Math.abs(c.value)>1});return Ie(()=>m(e.tag,{class:["v-slide-group",{"v-slide-group--vertical":!f.value,"v-slide-group--has-affixes":V.value,"v-slide-group--is-overflowing":d.value},s.value,e.class],style:e.style,tabindex:I.value||l.selected.value.length?-1:0,onFocus:pe},{default:()=>{var u,a,h;return[V.value&&m("div",{key:"prev",class:["v-slide-group__prev",{"v-slide-group__prev--disabled":!M.value}],onMousedown:K,onClick:()=>M.value&&A("prev")},[((u=t.prev)==null?void 0:u.call(t,F.value))??m(Q,null,{default:()=>[m(Z,{icon:i.value?e.nextIcon:e.prevIcon},null)]})]),m("div",{key:"container",ref:p,class:"v-slide-group__container",onScroll:fe},[m("div",{ref:y,class:"v-slide-group__content",onFocusin:he,onFocusout:ve,onKeydown:me},[(a=t.default)==null?void 0:a.call(t,F.value)])]),V.value&&m("div",{key:"next",class:["v-slide-group__next",{"v-slide-group__next--disabled":!D.value}],onMousedown:K,onClick:()=>D.value&&A("next")},[((h=t.next)==null?void 0:h.call(t,F.value))??m(Q,null,{default:()=>[m(Z,{icon:i.value?e.prevIcon:e.nextIcon},null)]})])]}})),{selected:l.selected,scrollTo:A,scrollOffset:c,focus:k,hasPrev:M,hasNext:D}}}),ht={class:"stories__preview"},vt={style:{"font-size":"0.8rem","text-align":"center",width:"90px"}},pt={class:"modal"},mt={name:"Stories"},yt=Object.assign(mt,{setup(e){const n=Ve(se.map(t=>!1));return(t,i)=>(_(),$(ft,{class:"stories"},{default:T(()=>[(_(!0),ae(oe,null,Me(j(se),(s,r)=>(_(),$(De,{key:r,modelValue:n.value[r],"onUpdate:modelValue":l=>n.value[r]=l,transition:"dialog-bottom-transition"},{activator:T(({})=>[W("div",ht,[m(qe,{style:{"border-radius":"50%","flex-grow":"0"},cover:"",height:"90px",width:"90px",src:s.items[0],onClick:l=>n.value[r]=!0},null,8,["src","onClick"]),W("span",vt,Be(s.header),1)])]),default:T(()=>[W("div",pt,[m(Re,{class:"modal__button",variant:"flat",icon:"mdi-close",onClick:l=>n.value[r]=!1},null,8,["onClick"]),m(j(at),{stories:s.items},null,8,["stories"])])]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),_:1}))}}),gt=Fe(yt,[["__scopeId","data-v-6dbf0e30"]]),bt={name:"Main"},xt=Object.assign(bt,{setup(e){const n=We(),t=x(()=>n.state.currentUser);return(i,s)=>(_(),ae(oe,null,[m(Ge,{variant:"tonal",color:"var(--primary-color)",style:{"font-size":"1rem",margin:"10px"}},{default:T(()=>[m(He,{style:{"font-size":"1rem"}},{default:T(()=>s[0]||(s[0]=[Ne(" Torino - от людей людям. Мы заботимся о том, чтобы каждый человек смог выглядеть стильно и чувствовать себя при этом комфортно. ")])),_:1})]),_:1}),m(gt),t.value?je("",!0):(_(),$(Ue,{key:0})),m(ye),m(be,{ideas:j(ge)},null,8,["ideas"])],64))}}),wt={name:"Main"},Et=Object.assign(wt,{setup(e){return(n,t)=>(_(),$(xt))}});export{Et as default};
