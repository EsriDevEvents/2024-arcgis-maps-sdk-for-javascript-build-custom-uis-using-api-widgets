"use strict";(self.webpackChunkcoordinate=self.webpackChunkcoordinate||[]).push([[5178],{93582:(t,n,e)=>{e.d(n,{N:()=>_,a:()=>q,b:()=>b,c:()=>M,d:()=>v,f:()=>w,g:()=>N,i:()=>T,n:()=>L,u:()=>F,w:()=>I});e(81806);var r=e(76460),i=e(15941),o=e(34761),s=e(20664),c=e(9392),u=e(43047),a=e(55855),h=e(53494),d=e(5568),f=e(95925),g=e(96190),l=e(75762);const _=v();function v(){return(0,a.vt)()}const m=u.e,p=u.e;function M(t,n){return(0,u.c)(n,t)}function b(t,n){return(0,a.fA)(t[0],t[1],t[2],n)}function I(t){return t}function q(t){return t[3]}function N(t){return t}function w(t,n,e,r){return(0,a.fA)(t,n,e,r)}function E(t,n,e){if(null==n)return!1;if(!P(t,n,C))return!1;let{t0:r,t1:i}=C;if((r<0||i<r&&i>0)&&(r=i),r<0)return!1;if(e){const{origin:t,direction:i}=n;e[0]=t[0]+i[0]*r,e[1]=t[1]+i[1]*r,e[2]=t[2]+i[2]*r}return!0}const C={t0:0,t1:0};function P(t,n,e){const{origin:r,direction:i}=n,o=A;o[0]=r[0]-t[0],o[1]=r[1]-t[1],o[2]=r[2]-t[2];const s=i[0]*i[0]+i[1]*i[1]+i[2]*i[2];if(0===s)return!1;const c=2*(i[0]*o[0]+i[1]*o[1]+i[2]*o[2]),u=c*c-4*s*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(u<0)return!1;const a=Math.sqrt(u);return e.t0=(-c-a)/(2*s),e.t1=(-c+a)/(2*s),!0}const A=(0,c.vt)();function T(t,n){return E(t,n,null)}function y(t,n,e){const r=l.rq.get(),i=l.Rc.get();(0,s.b)(r,n.origin,n.direction);const c=q(t);(0,s.b)(e,r,n.origin),(0,s.h)(e,e,1/(0,s.l)(e)*c);const u=k(t,n.origin),a=(0,g.g7)(n.origin,e);return(0,o.$0)(i,a+u,r),(0,s.e)(e,e,i),e}function V(t,n,e){const r=(0,s.f)(l.rq.get(),n,t),i=(0,s.h)(l.rq.get(),r,t[3]/(0,s.l)(r));return(0,s.g)(e,i,t)}function k(t,n){const e=(0,s.f)(l.rq.get(),n,t),r=(0,s.l)(e),o=q(t),c=o+Math.abs(o-r);return(0,i.XM)(o/c)}const j=(0,c.vt)();function S(t,n,e,r){const o=(0,s.f)(j,n,t);switch(e){case d._.X:{const t=(0,i.jU)(o,j)[2];return(0,s.s)(r,-Math.sin(t),Math.cos(t),0)}case d._.Y:{const t=(0,i.jU)(o,j),n=t[1],e=t[2],c=Math.sin(n);return(0,s.s)(r,-c*Math.cos(e),-c*Math.sin(e),Math.cos(n))}case d._.Z:return(0,s.n)(r,o);default:return}}function x(t,n){const e=(0,s.f)(O,n,t);return(0,s.l)(e)-t[3]}function L(t,n){const e=(0,s.a)(t,n),r=q(t);return e<=r*r}function F(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,a.vt)();const r=(0,s.q)(t,n),i=t[3],o=n[3];return r+o<i?((0,u.c)(e,t),e):r+i<o?((0,u.c)(e,n),e):((0,s.m)(e,t,n,(r+o-i)/(2*r)),e[3]=(r+i+o)/2,e)}const O=(0,c.vt)(),R=v();Object.freeze(Object.defineProperty({__proto__:null,NullSphere:_,altitudeAt:x,angleToSilhouette:k,axisAt:S,clear:function(t){t[0]=t[1]=t[2]=t[3]=0},closestPoint:function(t,n,e){return E(t,n,e)?e:((0,f.oC)(n,t,e),V(t,e,e))},closestPointOnSilhouette:y,containsPoint:L,copy:M,create:v,distanceToSilhouette:function(t,n){const e=(0,s.f)(l.rq.get(),n,t),r=(0,s.p)(e),i=t[3]*t[3];return Math.sqrt(Math.abs(r-i))},elevate:function(t,n,e){return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2]),e[3]=t[3]+n,e},equals:p,exactEquals:m,fromCenterAndRadius:b,fromRadius:function(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t},fromValues:w,getCenter:N,getRadius:q,intersectLine:function(t,n,e){const r=(0,f.Cr)(n,e);if(!P(t,r,C))return[];const{origin:i,direction:o}=r,{t0:u,t1:a}=C,d=n=>{const e=(0,c.vt)();return(0,s.r)(e,i,o,n),V(t,e,e)};return Math.abs(u-a)<(0,h.FD)()?[d(u)]:[d(u),d(a)]},intersectRay:E,intersectRayClosestSilhouette:function(t,n,e){if(E(t,n,e))return e;const r=y(t,n,l.rq.get());return(0,s.g)(e,n.origin,(0,s.h)(l.rq.get(),n.direction,(0,s.q)(n.origin,r)/(0,s.l)(n.direction))),e},intersectsRay:T,projectPoint:V,setAltitudeAt:function(t,n,e,r){const i=x(t,n),o=S(t,n,d._.Z,O),c=(0,s.h)(O,o,e-i);return(0,s.g)(r,n,c)},setExtent:function(t,n,e){return r.A.getLogger("esri.geometry.support.sphere").error("sphere.setExtent is not yet supported"),t!==e&&M(t,e),e},tmpSphere:R,union:F,wrap:I},Symbol.toStringTag,{value:"Module"}))},97467:(t,n,e)=>{e.d(n,{I:()=>i});var r=e(77944);class i{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*o);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,o));t++)this._items.push(this._allocator())}}const o=1024},44680:(t,n,e)=>{function r(){return[1,0,0,0,1,0,0,0,1]}function i(t,n,e,r,i,o,s,c,u){return[t,n,e,r,i,o,s,c,u]}e.d(n,{fA:()=>i,vt:()=>r,zK:()=>o});const o=[1,0,0,0,1,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:function(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8]]},create:r,createView:function(t,n){return new Float64Array(t,n,9)},fromValues:i},Symbol.toStringTag,{value:"Module"}))},13191:(t,n,e)=>{function r(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7],t[8],t[9],t[10],t[11],t[12],t[13],t[14],t[15]]}e.d(n,{o8:()=>i,vt:()=>r,zK:()=>o});const o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:r,createView:function(t,n){return new Float64Array(t,n,16)},fromValues:function(t,n,e,r,i,o,s,c,u,a,h,d,f,g,l,_){return[t,n,e,r,i,o,s,c,u,a,h,d,f,g,l,_]}},Symbol.toStringTag,{value:"Module"}))},4336:(t,n,e)=>{function r(){return[0,0,0,1]}function i(t){return[t[0],t[1],t[2],t[3]]}e.d(n,{o8:()=>i,vt:()=>r,zK:()=>o});const o=[0,0,0,1];Object.freeze(Object.defineProperty({__proto__:null,IDENTITY:o,clone:i,create:r,createView:function(t,n){return new Float64Array(t,n,4)},fromValues:function(t,n,e,r){return[t,n,e,r]}},Symbol.toStringTag,{value:"Module"}))},44230:(t,n,e)=>{e.d(n,{Cr:()=>a,H6:()=>f,_I:()=>d,kb:()=>h,ld:()=>g,vt:()=>u});var r=e(15941),i=e(97467),o=e(20664),s=e(9392),c=e(75762);function u(t){return t?{origin:(0,s.o8)(t.origin),vector:(0,s.o8)(t.vector)}:{origin:(0,s.vt)(),vector:(0,s.vt)()}}function a(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u();return(0,o.c)(e.origin,t),(0,o.f)(e.vector,n,t),e}function h(t,n){const e=(0,o.f)(c.rq.get(),n,t.origin),i=(0,o.k)(t.vector,e),s=(0,o.k)(t.vector,t.vector),u=(0,r.qE)(i/s,0,1),a=(0,o.f)(c.rq.get(),(0,o.h)(c.rq.get(),t.vector,u),e);return(0,o.k)(a,a)}function d(t,n,e){return f(t,n,0,1,e)}function f(t,n,e,i,s){const{vector:u,origin:a}=t,h=(0,o.f)(c.rq.get(),n,a),d=(0,o.k)(u,h)/(0,o.p)(u);return(0,o.h)(s,u,(0,r.qE)(d,e,i)),(0,o.g)(s,s,t.origin)}function g(t,n,e){return!!l(t,n,!0,_)&&((0,o.c)(e,_.pA),!0)}function l(t,n,e,i){const s=1e-6,u=t.origin,a=(0,o.g)(c.rq.get(),u,t.vector),h=n.origin,d=(0,o.g)(c.rq.get(),h,n.vector),f=c.rq.get(),g=c.rq.get();if(f[0]=u[0]-h[0],f[1]=u[1]-h[1],f[2]=u[2]-h[2],g[0]=d[0]-h[0],g[1]=d[1]-h[1],g[2]=d[2]-h[2],Math.abs(g[0])<s&&Math.abs(g[1])<s&&Math.abs(g[2])<s)return!1;const l=c.rq.get();if(l[0]=a[0]-u[0],l[1]=a[1]-u[1],l[2]=a[2]-u[2],Math.abs(l[0])<s&&Math.abs(l[1])<s&&Math.abs(l[2])<s)return!1;const _=f[0]*g[0]+f[1]*g[1]+f[2]*g[2],v=g[0]*l[0]+g[1]*l[1]+g[2]*l[2],m=f[0]*l[0]+f[1]*l[1]+f[2]*l[2],p=g[0]*g[0]+g[1]*g[1]+g[2]*g[2],M=(l[0]*l[0]+l[1]*l[1]+l[2]*l[2])*p-v*v;if(Math.abs(M)<s)return!1;let b=(_*v-m*p)/M,I=(_+v*b)/p;e&&(b=(0,r.qE)(b,0,1),I=(0,r.qE)(I,0,1));const q=c.rq.get(),N=c.rq.get();return q[0]=u[0]+b*l[0],q[1]=u[1]+b*l[1],q[2]=u[2]+b*l[2],N[0]=h[0]+I*g[0],N[1]=h[1]+I*g[1],N[2]=h[2]+I*g[2],i.tA=b,i.tB=I,i.pA=q,i.pB=N,i.distance2=(0,o.a)(q,N),!0}const _={tA:0,tB:0,pA:(0,s.vt)(),pB:(0,s.vt)(),distance2:0};new i.I((()=>u()))},13927:(t,n,e)=>{e.d(n,{C:()=>a,Cr:()=>g,LV:()=>u,O_:()=>f,Qj:()=>h,T7:()=>C,Tj:()=>A,Ui:()=>E,_I:()=>T,ci:()=>_,fA:()=>d,gv:()=>P,lU:()=>l,mN:()=>y,mP:()=>q,mR:()=>w,vt:()=>c,ze:()=>N});var r=e(15941),i=e(20664),o=e(9392),s=(e(43047),e(96190),e(75762));e(94966);function c(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k;return[t[0],t[1],t[2],t[3]]}function u(){return d(arguments.length>0&&void 0!==arguments[0]?arguments[0]:k[0],arguments.length>1&&void 0!==arguments[1]?arguments[1]:k[1],arguments.length>2&&void 0!==arguments[2]?arguments[2]:k[2],arguments.length>3&&void 0!==arguments[3]?arguments[3]:k[3],s.Km.get())}function a(t,n){return d(n[0],n[1],n[2],n[3],t)}function h(t){return t}function d(t,n,e,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:c();return i[0]=t,i[1]=n,i[2]=e,i[3]=r,i}function f(t,n,e){const r=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],i=Math.abs(r-1)>1e-5&&r>1e-12?1/Math.sqrt(r):1;return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=-(e[0]*t[0]+e[1]*t[1]+e[2]*t[2]),e}function g(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:c();const i=e[0]-n[0],o=e[1]-n[1],s=e[2]-n[2],u=t[0]-n[0],a=t[1]-n[1],h=t[2]-n[2],d=o*h-s*a,f=s*u-i*h,g=i*a-o*u,l=d*d+f*f+g*g,_=Math.abs(l-1)>1e-5&&l>1e-12?1/Math.sqrt(l):1;return r[0]=d*_,r[1]=f*_,r[2]=g*_,r[3]=-(r[0]*t[0]+r[1]*t[1]+r[2]*t[2]),r}function l(t,n,e){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:Math.floor(e*(1/3)),s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:Math.floor(e*(2/3));if(e<3)return!1;n(m,r);let c=o,u=!1;for(;c<e-1&&!u;)n(p,c),c++,u=!(0,i.j)(m,p);if(!u)return!1;for(c=Math.max(c,s),u=!1;c<e&&!u;)n(M,c),c++,(0,i.f)(b,m,p),(0,i.n)(b,b),(0,i.f)(I,p,M),(0,i.n)(I,I),u=!(0,i.j)(m,M)&&!(0,i.j)(p,M)&&Math.abs((0,i.k)(b,I))<v;return u?(g(m,p,M,t),!0):(0!==r||1!==o||2!==s)&&l(t,n,e,0,1,2)}function _(t,n){let e=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const r=n.length/3;return l(t,((t,e)=>(0,i.s)(t,n[3*e+0],n[3*e+1],n[3*e+2])),e?r-1:r)}const v=.99619469809,m=(0,o.vt)(),p=(0,o.vt)(),M=(0,o.vt)(),b=(0,o.vt)(),I=(0,o.vt)();function q(t,n,e){return n!==t&&a(t,n),t[3]=-(0,i.k)(t,e),t}function N(t,n){return n[0]=-t[0],n[1]=-t[1],n[2]=-t[2],n[3]=-t[3],n}function w(t,n,e,r){return(0,i.b)(M,n,t),f(e,M,r)}function E(t,n,e){return null!=n&&V(t,n.origin,n.direction,S,e)}function C(t,n,e){return V(t,n.origin,n.vector,j.NONE,e)}function P(t,n,e){return V(t,n.origin,n.vector,j.CLAMP,e)}function A(t,n){return y(t,n)>=0}function T(t,n,e){const r=(0,i.h)(s.rq.get(),t,-t[3]),o=function(t,n,e){const r=(0,i.h)(s.rq.get(),t,(0,i.k)(t,n));return(0,i.f)(e,n,r),e}(t,(0,i.f)(s.rq.get(),n,r),s.rq.get());return(0,i.g)(e,o,r),e}function y(t,n){return(0,i.k)(t,n)+t[3]}function V(t,n,e,o,s){const c=(0,i.k)(t,e);if(0===c)return!1;let u=-((0,i.k)(t,n)+t[3])/c;return o&j.CLAMP&&(u=(0,r.qE)(u,0,1)),!(!(o&j.INFINITE_MIN)&&u<0||!(o&j.INFINITE_MAX)&&u>1)&&((0,i.g)(s,n,(0,i.h)(s,e,u)),!0)}const k=[0,0,1,0];var j;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(j||(j={}));j.INFINITE_MIN,j.INFINITE_MAX;const S=j.INFINITE_MAX},95925:(t,n,e)=>{e.d(n,{C:()=>h,Cr:()=>d,LV:()=>a,kb:()=>f,oC:()=>g,vt:()=>c});e(18690);var r=e(97467),i=e(20664),o=e(9392),s=e(75762);function c(t){return t?u((0,o.o8)(t.origin),(0,o.o8)(t.direction)):u((0,o.vt)(),(0,o.vt)())}function u(t,n){return{origin:t,direction:n}}function a(t,n){const e=l.get();return e.origin=t,e.direction=n,e}function h(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c();return function(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,i.c)(e.origin,t),(0,i.c)(e.direction,n),e}(t.origin,t.direction,n)}function d(t,n){let e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c();return(0,i.c)(e.origin,t),(0,i.f)(e.direction,n,t),e}function f(t,n){const e=(0,i.b)(s.rq.get(),(0,i.n)(s.rq.get(),t.direction),(0,i.f)(s.rq.get(),n,t.origin));return(0,i.k)(e,e)}function g(t,n,e){const r=(0,i.k)(t.direction,(0,i.f)(e,n,t.origin));return(0,i.g)(e,t.origin,(0,i.h)(e,t.direction,r)),e}const l=new r.I((()=>c()))},96190:(t,n,e)=>{e.d(n,{g7:()=>c,gr:()=>s});var r=e(15941),i=e(20664),o=e(9392);function s(t,n){return(0,i.k)(t,n)/(0,i.l)(t)}function c(t,n){const e=(0,i.k)(t,n)/((0,i.l)(t)*(0,i.l)(n));return-(0,r.XM)(e)}(0,o.vt)(),(0,o.vt)()},75762:(t,n,e)=>{e.d(n,{Rc:()=>g,J8:()=>l,rq:()=>d,Km:()=>f});var r=e(77944),i=e(44680),o=e(13191),s=e(4336),c=e(72745),u=e(9392),a=e(55855);class h{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&(0,r.d)((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new h(c.vt)}static createVec3f64(){return new h(u.vt)}static createVec4f64(){return new h(a.vt)}static createMat3f64(){return new h(i.vt)}static createMat4f64(){return new h(o.vt)}static createQuatf64(){return new h(s.vt)}get test(){return{length:this._items.length}}}h.createVec2f64();const d=h.createVec3f64(),f=h.createVec4f64(),g=(h.createMat3f64(),h.createMat4f64()),l=h.createQuatf64()},94966:(t,n,e)=>{e.d(n,{hG:()=>o,wp:()=>s});e(15941);var r=e(20664),i=e(9392);function o(t){const n=t[0]*t[0]+t[4]*t[4]+t[8]*t[8],e=t[1]*t[1]+t[5]*t[5]+t[9]*t[9],r=t[2]*t[2]+t[6]*t[6]+t[10]*t[10];return Math.sqrt(Math.max(n,e,r))}function s(t,n){const e=Math.sqrt(n[0]*n[0]+n[4]*n[4]+n[8]*n[8]),i=Math.sqrt(n[1]*n[1]+n[5]*n[5]+n[9]*n[9]),o=Math.sqrt(n[2]*n[2]+n[6]*n[6]+n[10]*n[10]);return(0,r.s)(t,e,i,o),t}(0,i.vt)(),(0,i.vt)(),(0,i.vt)(),(0,i.vt)(),(0,i.vt)()},51264:(t,n,e)=>{e.r(n),e.d(n,{default:()=>l});var r=e(35143),i=e(50346),o=(e(76460),e(81806),e(47249),e(50076),e(85842)),s=e(20664),c=e(9392),u=e(44230),a=e(93582),h=e(94536),d=e(2259);function f(t,n,e){const r=(0,a.d)(),i=(0,a.g)(r);return(0,s.r)(i,i,t,.5),(0,s.r)(i,i,n,.5),r[3]=(0,s.q)(i,t),(0,s.g)(i,i,e),r}let g=class{constructor(){this._idToComponent=new Map,this._components=new h.A((t=>t.bounds)),this._edges=new h.A((t=>t.bounds)),this._tmpLineSegment=(0,u.vt)(),this._tmpP1=(0,c.vt)(),this._tmpP2=(0,c.vt)(),this._tmpP3=(0,c.vt)(),this.remoteClient=null}async fetchCandidates(t,n){await Promise.resolve(),(0,i.Te)(n),await this._ensureEdgeLocations(t,n);const e=[];return this._edges.forEachNeighbor((n=>(this._addCandidates(t,n,e),e.length<1e3)),t.bounds),{result:{candidates:e}}}async _ensureEdgeLocations(t,n){const e=[];if(this._components.forEachNeighbor((t=>{if(null==t.info){const{id:n,uid:r}=t;e.push({id:n,uid:r})}return!0}),t.bounds),!e.length)return;const r={components:e},i=await this.remoteClient.invoke("fetchAllEdgeLocations",r,null!==n&&void 0!==n?n:{});for(const o of i.components)this._setFetchEdgeLocations(o)}async add(t){const n=new _(t.id,t.bounds);return this._idToComponent.set(n.id,n),this._components.add([n]),{result:{}}}async remove(t){const n=this._idToComponent.get(t.id);if(n){const t=[];this._edges.forEachNeighbor((e=>(e.component===n&&t.push(e),!0)),n.bounds),this._edges.remove(t),this._components.remove([n]),this._idToComponent.delete(n.id)}return{result:{}}}_setFetchEdgeLocations(t){const n=this._idToComponent.get(t.id);if(null==n||t.uid!==n.uid)return;const e=d.HY.createView(t.locations),r=new Array(e.count),i=(0,c.vt)(),o=(0,c.vt)();for(let c=0;c<e.count;c++){e.position0.getVec(c,i),e.position1.getVec(c,o);const s=f(i,o,t.origin),u=new v(n,c,s);r[c]=u}this._edges.add(r);const{objectIds:s,origin:u}=t;n.info={locations:e,objectIds:s,origin:u}}_addCandidates(t,n,e){const{info:r}=n.component,{origin:i,objectIds:o}=r,c=r.locations,u=c.position0.getVec(n.index,this._tmpP1),a=c.position1.getVec(n.index,this._tmpP2);(0,s.g)(u,u,i),(0,s.g)(a,a,i);const h=o[c.componentIndex.get(n.index)];this._addEdgeCandidate(t,h,u,a,e),this._addVertexCandidate(t,h,u,e),this._addVertexCandidate(t,h,a,e)}_addEdgeCandidate(t,n,e,r,i){if(!t.returnEdge)return;const o=(0,a.g)(t.bounds),h=(0,u.Cr)(e,r,this._tmpLineSegment),d=(0,u._I)(h,o,this._tmpP3);(0,a.n)(t.bounds,d)&&i.push({type:"edge",objectId:n,target:(0,c.o8)(d),distance:(0,s.q)(o,d),start:(0,c.o8)(e),end:(0,c.o8)(r)})}_addVertexCandidate(t,n,e,r){if(!t.returnVertex||!(0,a.n)(t.bounds,e))return;const i=(0,a.g)(t.bounds);r.push({type:"vertex",objectId:n,target:(0,c.o8)(e),distance:(0,s.q)(i,e)})}};g=(0,r._)([(0,o.$)("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],g);const l=g;class _{constructor(t,n){this.id=t,this.bounds=n,this.info=null,this.uid=++_.uid}}_.uid=0;class v{constructor(t,n,e){this.component=t,this.index=n,this.bounds=e}}}}]);
//# sourceMappingURL=5178.0f49f9d5.chunk.js.map