"use strict";(self.webpackChunkcoordinate=self.webpackChunkcoordinate||[]).push([[7623],{14509:(e,t,i)=>{i.d(t,{l:()=>o});var s=i(69139),a=i(61551),r=i(36201);class o extends r.A{constructor(){super(...arguments),this._hasCrossfade=!1}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade()}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap",brushes:[s.d.bitmap],target:()=>this.children,drawPhase:a.S5.MAP});return[...super.prepareRenderPasses(e),t]}_manageFade(){this.children.reduce(((e,t)=>e+(t.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1)}}},17623:(e,t,i)=>{i.r(t),i.d(t,{default:()=>m});var s=i(35143),a=i(76460),r=i(50346),o=i(46053),n=(i(81806),i(47249),i(85842)),h=i(14509),d=i(90104),p=i(4176),c=i(91196),l=i(771);let u=class extends((0,l.A)((0,d.e)(c.A))){update(e){this._strategy.update(e).catch((e=>{(0,r.zf)(e)||a.A.getLogger(this).error(e)})),this.notifyChange("updating")}attach(){this._bitmapContainer=new h.l,this.container.addChild(this._bitmapContainer),this._strategy=new p.A({container:this._bitmapContainer,fetchSource:this.fetchBitmapData.bind(this),requestUpdate:this.requestUpdate.bind(this)})}detach(){this._strategy.destroy(),this._strategy=null,this.container.removeChild(this._bitmapContainer),this._bitmapContainer.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}fetchBitmapData(e,t,i){return this.layer.fetchImageBitmap(e,t,i)}async doRefresh(){this.requestUpdate()}isUpdating(){return this._strategy.updating||this.updateRequested}};(0,s._)([(0,o.MZ)()],u.prototype,"_strategy",void 0),(0,s._)([(0,o.MZ)()],u.prototype,"updating",void 0),u=(0,s._)([(0,n.$)("esri.views.2d.layers.BaseDynamicLayerView2D")],u);const m=u},4176:(e,t,i)=>{i.d(t,{A:()=>S});var s=i(35143),a=i(91967),r=(i(81806),i(50346)),o=i(46053),n=(i(76460),i(47249),i(85842)),h=i(2413),d=i(80963),p=i(88235);const c=Math.PI/180;function l(e){return e*c}function u(e,t){const i=l(t.rotation),s=Math.abs(Math.cos(i)),a=Math.abs(Math.sin(i)),[r,o]=t.size;return e[0]=Math.round(o*a+r*s),e[1]=Math.round(o*s+r*a),e}var m=i(16060),g=i(40181),f=i(93453);const _=(0,h.vt)(),y=[0,0],v=new f.A(0,0,0,0),x=2048,M=2048,w=!1,b=!1,R=!1;let P=class extends a.A{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=R,this.imageMaxWidth=x,this.imageMaxHeight=M,this.imageRotationSupported=w,this.imageNormalizationSupported=b,this.update=(0,r.sg)((async(e,t)=>{var i,s;if((0,r.Te)(t),!e.stationary||this.destroyed)return;const a=e.state,o=(0,d.Vp)(a.spatialReference),n=this.hidpi?e.pixelRatio:1,h=this.imageNormalizationSupported&&a.worldScreenWidth&&a.worldScreenWidth<a.size[0],p=null!==(i=this.imageMaxWidth)&&void 0!==i?i:0,c=null!==(s=this.imageMaxHeight)&&void 0!==s?s:0;h?(y[0]=a.worldScreenWidth,y[1]=a.size[1]):this.imageRotationSupported?(y[0]=a.size[0],y[1]=a.size[1]):u(y,a);const l=Math.floor(y[0]*n)>p||Math.floor(y[1]*n)>c,m=o&&(a.extent.xmin<o.valid[0]||a.extent.xmax>o.valid[1]),g=!this.imageNormalizationSupported&&m,f=!l&&!g,_=this.imageRotationSupported?a.rotation:0,x=this.container.children.slice();if(f){const e=h?a.paddedViewState.center:a.center;this._imagePromise&&console.error("Image promise was not defined!"),this._imagePromise=this._singleExport(a,y,e,a.resolution,_,n,t)}else{let e=Math.min(p,c);g&&(e=Math.min(a.worldScreenWidth,e)),this._imagePromise=this._tiledExport(a,e,n,t)}try{var M;const e=null!==(M=await this._imagePromise)&&void 0!==M?M:[];(0,r.Te)(t);const i=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=e;for(const t of x)e.includes(t)||i.push(t.fadeOut().then((()=>{t.remove(),t.destroy()})));for(const t of e)i.push(t.fadeIn());await Promise.all(i)}catch(v){this._imagePromise=null,(0,r.QP)(v)}}),5e3),this.updateExports=(0,r.sg)((async e=>{const t=[];for(const i of this.container.children){if(!i.visible||!i.stage)return;t.push(e(i).then((()=>{i.invalidateTexture(),i.requestRender()})))}this._imagePromise=(0,r.Lx)(t).then((()=>this._imagePromise=null)),await this._imagePromise}))}destroy(){this.bitmaps.forEach((e=>e.destroy())),this.bitmaps=[]}get updating(){return!this.destroyed&&null!==this._imagePromise}async _export(e,t,i,s,a,o){const n=await this.fetchSource(e,Math.floor(t*a),Math.floor(i*a),{rotation:s,pixelRatio:a,signal:o});(0,r.Te)(o);const h=new m.mb(null,!0);return h.x=e.xmin,h.y=e.ymax,h.resolution=e.width/t,h.rotation=s,h.pixelRatio=a,h.opacity=0,this.container.addChild(h),await h.setSourceAsync(n,o),(0,r.Te)(o),h}async _singleExport(e,t,i,s,a,r,o){!function(e,t,i,s){const[a,r]=t,[o,n]=s,h=.5*i;e[0]=a-h*o,e[1]=r-h*n,e[2]=a+h*o,e[3]=r+h*n}(_,i,s,t);const n=(0,h.w1)(_,e.spatialReference);return[await this._export(n,t[0],t[1],a,r,o)]}_tiledExport(e,t,i,s){const a=p.A.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),r=new g.A(a),o=r.getTileCoverage(e);if(!o)return null;const n=[];return o.forEach(((a,o,d,p)=>{v.set(a,o,d,0),r.getTileBounds(_,v);const c=(0,h.w1)(_,e.spatialReference);n.push(this._export(c,t,t,0,i,s).then((e=>(0!==p&&(v.set(a,o,d,p),r.getTileBounds(_,v),e.x=_[0],e.y=_[3]),e))))})),Promise.all(n)}};(0,s._)([(0,o.MZ)()],P.prototype,"_imagePromise",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"bitmaps",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"container",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"fetchSource",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"hidpi",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"imageMaxWidth",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"imageMaxHeight",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"imageRotationSupported",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"imageNormalizationSupported",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"requestUpdate",void 0),(0,s._)([(0,o.MZ)()],P.prototype,"updating",null),P=(0,s._)([(0,n.$)("esri.views.2d.layers.support.ExportStrategy")],P);const S=P},771:(e,t,i)=>{i.d(t,{A:()=>h});var s=i(35143),a=i(76460),r=i(50346),o=i(68134),n=(i(81806),i(47249),i(50076),i(85842));const h=e=>{let t=class extends e{initialize(){this.addHandles((0,o.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,r.zf)(e)||a.A.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return t=(0,s._)([(0,n.$)("esri.layers.mixins.RefreshableLayerView")],t),t}}}]);
//# sourceMappingURL=7623.c1536f13.chunk.js.map