"use strict";(self.webpackChunkcoordinate=self.webpackChunkcoordinate||[]).push([[3828],{68002:(e,t,i)=>{i.d(t,{X_:()=>o,i1:()=>a,zx:()=>l});var s=i(15941),r=i(31633);const n=96;function o(e,t){const i=t||e.extent,s=e.width,o=(0,r.GA)(null===i||void 0===i?void 0:i.spatialReference);return i&&s?i.width/s*o*r.dy*n:0}function a(e,t){return e/((0,r.GA)(t)*r.dy*n)}function l(e,t,i){return function(e,t){return 0===t||(0,s.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,s.Sp)(e,t)||e>t}(e,i)}},83828:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var s=i(35143),r=i(19276),n=i(46053),o=(i(81806),i(76460),i(47249),i(85842)),a=i(90104),l=i(91196);let d=class extends((0,a.e)(l.A)){constructor(){super(...arguments),this.layerViews=new r.A}get dynamicGroupLayerView(){return this.layerViews.find((e=>{var t;return e.layer===(null===(t=this.layer)||void 0===t?void 0:t.dynamicGroupLayer)}))}get footprintLayerView(){return this.layerViews.find((e=>{var t;return e.layer===(null===(t=this.layer)||void 0===t?void 0:t.footprintLayer)}))}update(e){}moveStart(){}viewChange(){}moveEnd(){}attach(){this.addAttachHandles([this._updatingHandles.addOnCollectionChange((()=>this.layerViews),(()=>this._updateStageChildren()),{initial:!0})])}detach(){this.container.removeAllChildren()}isUpdating(){return this.layerViews.some((e=>e.updating))}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach(((e,t)=>this.container.addChildAt(e.container,t)))}};(0,s._)([(0,n.MZ)()],d.prototype,"dynamicGroupLayerView",null),(0,s._)([(0,n.MZ)()],d.prototype,"footprintLayerView",null),(0,s._)([(0,n.MZ)()],d.prototype,"layerViews",void 0),d=(0,s._)([(0,o.$)("esri.views.2d.layers.CatalogLayerView2D")],d);const p=d},90104:(e,t,i)=>{i.d(t,{e:()=>S});var s,r=i(35143),n=i(19276),o=i(3975),a=i(50076),l=i(68134),d=i(46053),p=(i(81806),i(76460),i(47249),i(85842)),h=i(68002),u=i(21904),c=i(7464),y=i(97001);let v=s=class extends y.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,r._)([(0,d.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),v=s=(0,r._)([(0,p.$)("esri.views.layers.support.ClipRect")],v);const g=v;var w=i(47266);let f=class extends y.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,d.MZ)({type:[[[Number]]],json:{write:!0}})],f.prototype,"path",void 0),f=(0,r._)([(0,p.$)("esri.views.layers.support.Path")],f);const m=f,_=n.A.ofType({key:"type",base:null,typeMap:{rect:g,path:m,geometry:w.A}}),S=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new _,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new a.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new u.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),l.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,h.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,d.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,d.MZ)({type:_,set(e){const t=(0,o.V)(e,this._get("clips"),_);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,d.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,d.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,d.MZ)()],t.prototype,"updating",null),(0,r._)([(0,d.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,d.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,d.MZ)({type:c.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,p.$)("esri.views.2d.layers.LayerView2D")],t),t}},91196:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(35143),r=i(91967),n=i(54099),o=i(5632),a=i(76460),l=i(30726),d=i(91291),p=i(46053),h=(i(81806),i(47249),i(85842)),u=i(19451);let c=class extends((0,o.sA)((0,d.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new u.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";a.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,p.MZ)()],c.prototype,"fullOpacity",null),(0,s._)([(0,p.MZ)()],c.prototype,"layer",void 0),(0,s._)([(0,p.MZ)()],c.prototype,"parent",void 0),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"suspended",null),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,s._)([(0,p.MZ)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,s._)([(0,p.MZ)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,s._)([(0,p.MZ)()],c.prototype,"visible",null),(0,s._)([(0,p.MZ)()],c.prototype,"view",void 0),c=(0,s._)([(0,h.$)("esri.views.layers.LayerView")],c);const y=c},97001:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(35143),r=i(42553),n=i(46053),o=(i(81806),i(76460),i(47249),i(85842));let a=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],a.prototype,"version",null),a=(0,s._)([(0,o.$)("esri.views.layers.support.ClipArea")],a);const l=a},47266:(e,t,i)=>{i.d(t,{A:()=>y});var s,r=i(35143),n=(i(35238),i(46053)),o=(i(81806),i(76460),i(47249),i(85842)),a=i(89189),l=i(19902),d=i(97001),p=i(76797),h=i(65215);const u={base:a.A,key:"type",typeMap:{extent:p.A,polygon:h.A}};let c=s=class extends d.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:u,json:{read:l.rS,write:!0}})],c.prototype,"geometry",void 0),c=s=(0,r._)([(0,o.$)("esri.views.layers.support.Geometry")],c);const y=c}}]);
//# sourceMappingURL=3828.0fb31aea.chunk.js.map