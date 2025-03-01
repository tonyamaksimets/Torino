import{C as V}from"./ClothesMenu-C6sibF8f.js";import{_ as A,i as D}from"./ideas-BVA2kmd7.js";import{d as p,h as q,_ as F,r as j,c as w,w as v,a as C,b as B,u as _,F as E,o as y,V as M,e as x,f as h,g as z,i as N,t as U,j as W,k as X,l as G,m as H,n as R,p as Y,q as L}from"./index-DwuSxxni.js";import{V as J}from"./VSlideGroup-CILZHkIi.js";import"./catalog-ZFNGNNYy.js";import"./VDivider-DF3VGiTT.js";import"./VExpansionPanels-D8O1AitV.js";/*! *****************************************************************************
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
***************************************************************************** */var f=function(){return f=Object.assign||function(i){for(var t,s=1,r=arguments.length;s<r;s++){t=arguments[s];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(i[n]=t[n])}return i},f.apply(this,arguments)};function K(e,i){var t={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&i.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(e);r<s.length;r++)i.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(t[s[r]]=e[s[r]]);return t}function T(e,i,t,s){function r(n){return n instanceof t?n:new t(function(o){o(n)})}return new(t||(t=Promise))(function(n,o){function d(l){try{a(s.next(l))}catch(m){o(m)}}function u(l){try{a(s.throw(l))}catch(m){o(m)}}function a(l){l.done?n(l.value):r(l.value).then(d,u)}a((s=s.apply(e,[])).next())})}function $(e,i){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},s,r,n,o;return o={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function d(a){return function(l){return u([a,l])}}function u(a){if(s)throw new TypeError("Generator is already executing.");for(;t;)try{if(s=1,r&&(n=a[0]&2?r.return:a[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,a[1])).done)return n;switch(r=0,n&&(a=[a[0]&2,n.value]),a[0]){case 0:case 1:n=a;break;case 4:return t.label++,{value:a[1],done:!1};case 5:t.label++,r=a[1],a=[0];continue;case 7:a=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){t=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){t.label=a[1];break}if(a[0]===6&&t.label<n[1]){t.label=n[1],n=a;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(a);break}n[2]&&t.ops.pop(),t.trys.pop();continue}a=i.call(e,t)}catch(l){a=[6,l],r=0}finally{s=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}}var Q=function(e){return e?Object.entries(e).reduce(function(i,t){var s,r=t[0],n=t[1];return r=r.charAt(0).toUpperCase()+r.slice(1),r="on"+r,f(f({},i),(s={},s[r]=n,s))},{}):null},c=function(e,i,t){i===void 0&&(i={});var s=i.props,r=i.domProps,n=i.on,o=K(i,["props","domProps","on"]),d=Q(n),u=f(f(f(f({},o),s),r),d);return q(e,u,t)},P=function(e,i){return typeof e=="function"?e(i):e},Z=p({props:{story:{type:Object,required:!0}},render:function(){var e={width:"auto",maxWidth:"100%",maxHeight:"100%",margin:"auto"},i={style:e,domProps:{src:this.story.url}};return c("img",i)}}),ee=p({props:{story:{type:Object,required:!0},isPaused:{type:Boolean,required:!0}},watch:{isPaused:function(e){e?this.vid.pause():this.vid.play()}},data:function(){return{muted:!1}},computed:{vid:function(){return this.$el}},render:function(){var e=this,i={width:"auto",maxWidth:"100%",maxHeight:"100%",margin:"auto"},t={controls:!0,autoPlay:!0,playsInline:!0,muted:this.muted,"webkit-playsinline":!0},s=function(){return T(e,void 0,void 0,function(){var o=this;return $(this,function(d){switch(d.label){case 0:this.$emit("action","duration",this.vid.duration*1e3),d.label=1;case 1:return d.trys.push([1,3,,4]),[4,this.vid.play()];case 2:return d.sent(),[3,4];case 3:return d.sent(),this.muted=!0,this.$nextTick(function(){return T(o,void 0,void 0,function(){return $(this,function(u){switch(u.label){case 0:return[4,this.vid.play()];case 1:return[2,u.sent()]}})})}),[3,4];case 4:return[2]}})})};this.$emit("action","pause");var r=function(){e.$emit("action","play")},n={style:i,domProps:f({src:this.story.url},t),on:{loadeddata:s,playing:r}};return c("video",n)}}),te=function(e){switch(e){case"image":return Z;case"video":return ee;default:throw new Error("Did not find a render for type "+e)}},ne=function(e,i){var t=e.story,s=e.isPaused,r=e.onAction,n={props:{story:t,isPaused:s},on:{action:r}},o=t.type,d=t.template;if(d){var u=i[d];if(!u)throw new Error("unable to find the template '"+d+"'");return P(u,n)}return c(te(o),n)};function re(e,i){i===void 0&&(i={});var t=i.insertAt;if(!(typeof document>"u")){var s=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&s.firstChild?s.insertBefore(r,s.firstChild):s.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var ie=`.vue-insta-stories {
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
}`;re(ie);var se=p({props:{progress:{type:Number,required:!0}},render:function(){var e={width:this.progress+"%"};return c("div",{class:"slice"},[c("div",{class:"progress",style:e})])}}),ae=p({props:{stories:{type:Array,required:!0},currentIndex:{type:Number,required:!0},isPaused:{type:Boolean,required:!0}},data:function(){return{count:0,startTime:0,savedTimeStamp:0,deltaPaused:0,lastPaused:0,animFrameId:-1}},watch:{currentIndex:{immediate:!0,handler:function(){this.count=0,this.startTime=0,this.deltaPaused=0,cancelAnimationFrame(this.animFrameId),this.animFrameId=requestAnimationFrame(this.incrementCount)}},isPaused:{immediate:!0,handler:function(e){cancelAnimationFrame(this.animFrameId),e?this.lastPaused=performance.now():(this.lastPaused&&(this.deltaPaused+=performance.now()-this.lastPaused),this.animFrameId=requestAnimationFrame(this.incrementCount))}}},computed:{currentStory:function(){return this.stories[this.currentIndex]}},emits:["storyEnd"],methods:{storyEnd:function(){this.$emit("storyEnd",this.currentIndex)},incrementCount:function(e){this.startTime||(this.startTime=e);var i=e-this.startTime-this.deltaPaused;this.count=i/this.currentStory.duration*100,this.count<100?this.animFrameId=requestAnimationFrame(this.incrementCount):(this.storyEnd(),cancelAnimationFrame(this.animFrameId))}},render:function(){var e=this.currentIndex,i=this.count,t=this.stories.map(function(s,r){var n=r==e?i:r<e?100:0,o=r;return c(se,{key:o,props:{progress:n}})});return c("div",{class:"timeline",ref:"timeline"},t)}}),oe=p({name:"WithSeeMore",props:{enabled:{type:Boolean,default:!0},label:{type:String,required:!1}},data:function(){return{opacity:0,yDown:void 0}},methods:{emit:function(){this.$emit("action")}},mounted:function(){this.opacity=.9},render:function(){var e=this,i=function(u){var a;if(u.stopPropagation(),u instanceof TouchEvent){var l=(a=u.touches[0])!==null&&a!==void 0?a:u.changedTouches[0];e.yDown=l.clientY}},t=function(u){u.stopPropagation(),e.emit()},s=function(u){var a;if(u.stopPropagation(),!!e.yDown){var l=(a=u.touches[0])!==null&&a!==void 0?a:u.changedTouches[0],m=e.yDown-l.clientY;m>0&&e.emit(),e.yDown=void 0}},r={mouseup:t,touchend:t,touchstart:i,mousedown:i,touchmove:s},n={opacity:this.opacity},o=this.label||"See more",d=c("div",{class:"see-more",on:r},[c("span",{class:"see-more-icon",style:n},"^"),c("span",{class:"see-more-text",style:n},o)]);return c("div",{class:"see-more-wrapper"},[P(this.$slots.default),d])}}),ue=function(e,i,t){if(!i)return e;var s={default:function(){return e}},r=i===!0?void 0:i.label;return c(oe,{props:{label:r},on:{action:t}},s)},S=function(e){e.animate([{opacity:0}],{duration:200,fill:"forwards"})},k=function(e){e.animate([{opacity:1}],{duration:200,fill:"forwards"})},de=function(e){var i;if(e instanceof MouseEvent)return e.offsetX;var t=(i=e.touches[0])!==null&&i!==void 0?i:e.changedTouches[0];return t.clientX},le=p({name:"Stories",props:{stories:{type:Array,required:!0},interval:{type:Number,default:2e3},currentIndex:{type:Number,default:0},isPaused:{type:Boolean,required:!1},loop:{type:Boolean,default:!1,required:!1}},emits:["storyStart","storyEnd","allStoriesEnd","update:currentIndex","update:isPaused","seeMore","next","prev"],watch:{currentIndex:function(e){this.index=e},index:{immediate:!0,handler:function(e){this.$emit("update:currentIndex",e),this.$emit("storyStart",e)}},isPaused:{immediate:!0,handler:function(e){this.paused=e}},paused:function(e){e?this.pause():this.play(),this.$emit("update:isPaused",e)},stories:{immediate:!0,handler:function(e){var i=this;this.items=e.map(function(t){var s={duration:i.interval,type:"image"};return typeof t=="string"?f(f({},s),{url:t}):f(f({},s),t)})}}},data:function(){return{index:this.currentIndex,paused:!1,mouseDownTimeout:void 0,items:[]}},methods:{nextSlide:function(e){e===void 0&&(e=!0),e&&this.$emit("next"),this.index<this.stories.length-1?this.index++:this.loop&&(this.index=0)},previousSlide:function(){this.$emit("prev"),this.index>0&&this.index--},togglePause:function(){this.paused=!this.paused},pause:function(){S(this.$refs.timeline.$el),this.$refs.header&&S(this.$refs.header)},play:function(){k(this.$refs.timeline.$el),this.$refs.header&&k(this.$refs.header)},storyEnd:function(e){this.$emit("storyEnd",e),this.nextSlide(!1),e===this.stories.length-1&&(this.loop?this.index=0:this.$emit("allStoriesEnd"))}},render:function(){var e=this,i=this.items[this.index],t={props:{stories:this.items,currentIndex:this.index,isPaused:this.paused},on:{storyEnd:this.storyEnd}},s=function(m,g){switch(m){case"play":break;case"pause":break;case"duration":var b=g;e.items[e.index].duration=b;break;default:console.log(m,g)}},r=function(m){m.preventDefault(),e.mouseDownTimeout=setTimeout(function(){return e.togglePause()},150)},n=function(m){if(m.preventDefault(),e.mouseDownTimeout&&clearTimeout(e.mouseDownTimeout),e.paused)e.paused=!1;else{var g=de(m),b=e.$refs.stories.getBoundingClientRect().width,O=b/3;g>O?e.nextSlide():e.previousSlide()}},o={touchstart:r,touchend:n,mousedown:r,mouseup:n},d=function(){e.paused=!0,e.$emit("seeMore",i)},u={story:i,onAction:s,isPaused:this.paused},a=this.$slots.header,l=ne(u,this.$slots);return c("div",{ref:"stories",class:"vue-insta-stories",on:o},[c(ae,f({ref:"timeline"},t)),a?c("div",{class:"header",ref:"header"},P(a,{story:i})):null,ue(l,i.seeMore,d)])}});const I=[{header:"Образы под Ваш стиль",items:["/Torino/assets/images/stories/1.png","/Torino/assets/images/stories/2.png"]},{header:"Новинки и идеи",items:["/Torino/assets/images/stories/3.png"]},{header:"Узнайте о модных показах первым",items:["/Torino/assets/images/stories/4.png","/Torino/assets/images/stories/5.png","/Torino/assets/images/stories/6.png"]},{header:"Образы на все случаи",items:["/Torino/assets/images/stories/7.png","/Torino/assets/images/stories/8.png"]}],ce={class:"stories__preview"},fe={style:{"font-size":"0.8rem","text-align":"center",width:"90px"}},me={class:"modal"},he={name:"Stories"},pe=Object.assign(he,{setup(e){const i=j(I.map(t=>!1));return(t,s)=>(y(),w(J,{class:"stories"},{default:v(()=>[(y(!0),C(E,null,B(_(I),(r,n)=>(y(),w(M,{key:n,modelValue:i.value[n],"onUpdate:modelValue":o=>i.value[n]=o,transition:"dialog-bottom-transition"},{activator:v(({})=>[x("div",ce,[h(N,{style:{"border-radius":"50%","flex-grow":"0"},cover:"",height:"90px",width:"90px",src:r.items[0],onClick:o=>i.value[n]=!0},null,8,["src","onClick"]),x("span",fe,U(r.header),1)])]),default:v(()=>[x("div",me,[h(z,{class:"modal__button",variant:"flat",icon:"mdi-close",onClick:o=>i.value[n]=!1},null,8,["onClick"]),h(_(le),{stories:r.items},null,8,["stories"])])]),_:2},1032,["modelValue","onUpdate:modelValue"]))),128))]),_:1}))}}),ve=F(pe,[["__scopeId","data-v-6dbf0e30"]]),ye={name:"Main"},$e=Object.assign(ye,{setup(e){const i=X(),t=W(()=>i.state.currentUser);return(s,r)=>(y(),C(E,null,[h(H,{variant:"tonal",color:"var(--primary-color)",style:{"font-size":"1rem",margin:"10px"}},{default:v(()=>[h(R,{style:{"font-size":"1rem"}},{default:v(()=>r[0]||(r[0]=[Y(" Torino - от людей людям. Мы заботимся о том, чтобы каждый человек смог выглядеть стильно и чувствовать себя при этом комфортно. ")])),_:1})]),_:1}),h(ve),t.value?G("",!0):(y(),w(L,{key:0})),h(V),h(A,{ideas:_(D)},null,8,["ideas"])],64))}});export{$e as default};
