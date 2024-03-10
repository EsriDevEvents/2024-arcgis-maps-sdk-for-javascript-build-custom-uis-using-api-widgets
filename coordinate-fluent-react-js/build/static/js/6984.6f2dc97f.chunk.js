"use strict";(self.webpackChunkcoordinate=self.webpackChunkcoordinate||[]).push([[6984],{68002:(e,t,i)=>{i.d(t,{X_:()=>a,i1:()=>o,zx:()=>l});var s=i(15941),r=i(31633);const n=96;function a(e,t){const i=t||e.extent,s=e.width,a=(0,r.GA)(null===i||void 0===i?void 0:i.spatialReference);return i&&s?i.width/s*a*r.dy*n:0}function o(e,t){return e/((0,r.GA)(t)*r.dy*n)}function l(e,t,i){return function(e,t){return 0===t||(0,s.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,s.Sp)(e,t)||e>t}(e,i)}},90104:(e,t,i)=>{i.d(t,{e:()=>b});var s,r=i(35143),n=i(19276),a=i(3975),o=i(50076),l=i(68134),h=i(46053),d=(i(81806),i(76460),i(47249),i(85842)),p=i(68002),c=i(21904),u=i(7464),g=i(97001);let y=s=class extends g.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"left",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"right",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"top",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],y.prototype,"bottom",void 0),y=s=(0,r._)([(0,d.$)("esri.views.layers.support.ClipRect")],y);const v=y;var f=i(47266);let w=class extends g.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,h.MZ)({type:[[[Number]]],json:{write:!0}})],w.prototype,"path",void 0),w=(0,r._)([(0,d.$)("esri.views.layers.support.Path")],w);const _=w,m=n.A.ofType({key:"type",base:null,typeMap:{rect:v,path:_,geometry:f.A}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new m,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new o.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new c.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,l.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),l.pc),(0,l.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),l.pc),(0,l.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),l.pc),(0,l.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),l.pc),(0,l.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),l.pc),(0,l.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),l.pc),(0,l.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),l.pc),(0,l.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),l.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,p.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,h.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,h.MZ)({type:m,set(e){const t=(0,a.V)(e,this._get("clips"),m);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,h.MZ)()],t.prototype,"updating",null),(0,r._)([(0,h.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,h.MZ)({type:u.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,d.$)("esri.views.2d.layers.LayerView2D")],t),t}},46984:(e,t,i)=>{i.r(t),i.d(t,{default:()=>w});var s=i(35143),r=i(39356),n=i(18690),a=i(19276),o=i(54901),l=i(68134),h=(i(76460),i(81806),i(50076),i(85842)),d=i(90554),p=i(90104),c=i(31394),u=i(45992),g=i(91196);const y="sublayers",v="layerView";let f=class extends((0,p.e)(g.A)){constructor(){super(...arguments),this._highlightIds=new Map}*graphicsViews(){null==this._graphicsViewsFeatureCollectionMap?null==this._graphicsViews?yield*[]:yield*this._graphicsViews:yield*this._graphicsViewsFeatureCollectionMap.keys()}async hitTest(e,t){return Array.from(this.graphicsViews(),(t=>{const i=t.hitTest(e);if(null!=this._graphicsViewsFeatureCollectionMap){const e=this._graphicsViewsFeatureCollectionMap.get(t);for(const t of i)!t.popupTemplate&&e.popupTemplate&&(t.popupTemplate=e.popupTemplate),t.sourceLayer=t.layer=this.layer}return i})).flat().map((t=>({type:"graphic",graphic:t,layer:this.layer,mapPoint:e})))}highlight(e){var t;let i;"number"==typeof e?i=[e]:e instanceof r.A?i=[e.uid]:Array.isArray(e)&&e.length>0?i="number"==typeof e[0]?e:e.map((e=>e&&e.uid)):a.A.isCollection(e)&&(i=e.map((e=>e&&e.uid)).toArray());const s=null===(t=i)||void 0===t?void 0:t.filter(n.Ru);return null!==s&&void 0!==s&&s.length?(this._addHighlight(s),(0,o.hA)((()=>this._removeHighlight(s)))):(0,o.hA)()}update(e){for(const t of this.graphicsViews())t.processUpdate(e)}attach(){const e=this.view,t=()=>this.requestUpdate(),i=this.layer.featureCollections;if(null!=i&&i.length){this._graphicsViewsFeatureCollectionMap=new Map;for(const s of i){const i=new c.A(this.view.featuresTilingScheme),r=new u.A({view:e,graphics:s.source,renderer:s.renderer,requestUpdateCallback:t,container:i});this._graphicsViewsFeatureCollectionMap.set(r,s),this.container.addChild(r.container),this.addHandles([(0,l.wB)((()=>s.visible),(e=>r.container.visible=e),l.Vh),(0,l.wB)((()=>r.updating),(()=>this.notifyChange("updating")),l.Vh)],v)}this._updateHighlight()}else null!=this.layer.sublayers&&this.addHandles((0,l.on)((()=>this.layer.sublayers),"change",(()=>this._createGraphicsViews()),{onListenerAdd:()=>this._createGraphicsViews(),onListenerRemove:()=>this._destroyGraphicsViews()}),y)}detach(){this._destroyGraphicsViews(),this.removeHandles(y)}moveStart(){}moveEnd(){}viewChange(){for(const e of this.graphicsViews())e.viewChange()}isUpdating(){for(const e of this.graphicsViews())if(e.updating)return!0;return!1}_destroyGraphicsViews(){this.container.removeAllChildren(),this.removeHandles(v);for(const e of this.graphicsViews())e.destroy();this._graphicsViews=null,this._graphicsViewsFeatureCollectionMap=null}_createGraphicsViews(){if(this._destroyGraphicsViews(),null==this.layer.sublayers)return;const e=[],t=this.view,i=()=>this.requestUpdate();for(const s of this.layer.sublayers){const r=new c.A(this.view.featuresTilingScheme);r.fadeTransitionEnabled=!0;const n=new u.A({view:t,graphics:s.graphics,requestUpdateCallback:i,container:r});this.addHandles([s.on("graphic-update",n.graphicUpdateHandler),(0,l.wB)((()=>s.visible),(e=>n.container.visible=e),l.Vh),(0,l.wB)((()=>n.updating),(()=>this.notifyChange("updating")),l.Vh)],v),this.container.addChild(n.container),e.push(n)}this._graphicsViews=e,this._updateHighlight()}_addHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t);this._highlightIds.set(t,e+1)}else this._highlightIds.set(t,1);this._updateHighlight()}_removeHighlight(e){for(const t of e)if(this._highlightIds.has(t)){const e=this._highlightIds.get(t)-1;0===e?this._highlightIds.delete(t):this._highlightIds.set(t,e)}this._updateHighlight()}_updateHighlight(){const e=Array.from(this._highlightIds.keys()),t=(0,d.$r)("highlight");for(const i of this.graphicsViews())i.setHighlight(e.map((e=>({objectId:e,highlightFlags:t}))))}};f=(0,s._)([(0,h.$)("esri.views.2d.layers.MapNotesLayerView2D")],f);const w=f},31394:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(61551),r=i(8995),n=i(13692);class a extends r.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,n.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}},91196:(e,t,i)=>{i.d(t,{A:()=>g});var s=i(35143),r=i(91967),n=i(54099),a=i(5632),o=i(76460),l=i(30726),h=i(91291),d=i(46053),p=(i(81806),i(47249),i(85842)),c=i(19451);let u=class extends((0,a.sA)((0,h.g)(n.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new c.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";o.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,l.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,d.MZ)()],u.prototype,"fullOpacity",null),(0,s._)([(0,d.MZ)()],u.prototype,"layer",void 0),(0,s._)([(0,d.MZ)()],u.prototype,"parent",void 0),(0,s._)([(0,d.MZ)({readOnly:!0})],u.prototype,"suspended",null),(0,s._)([(0,d.MZ)({readOnly:!0})],u.prototype,"suspendInfo",null),(0,s._)([(0,d.MZ)({readOnly:!0})],u.prototype,"legendEnabled",null),(0,s._)([(0,d.MZ)({type:Boolean,readOnly:!0})],u.prototype,"updating",null),(0,s._)([(0,d.MZ)({readOnly:!0})],u.prototype,"updatingProgress",null),(0,s._)([(0,d.MZ)()],u.prototype,"visible",null),(0,s._)([(0,d.MZ)()],u.prototype,"view",void 0),u=(0,s._)([(0,p.$)("esri.views.layers.LayerView")],u);const g=u},97001:(e,t,i)=>{i.d(t,{A:()=>l});var s=i(35143),r=i(42553),n=i(46053),a=(i(81806),i(76460),i(47249),i(85842));let o=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,n.MZ)({readOnly:!0})],o.prototype,"version",null),o=(0,s._)([(0,a.$)("esri.views.layers.support.ClipArea")],o);const l=o},47266:(e,t,i)=>{i.d(t,{A:()=>g});var s,r=i(35143),n=(i(35238),i(46053)),a=(i(81806),i(76460),i(47249),i(85842)),o=i(89189),l=i(19902),h=i(97001),d=i(76797),p=i(65215);const c={base:o.A,key:"type",typeMap:{extent:d.A,polygon:p.A}};let u=s=class extends h.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,n.MZ)({types:c,json:{read:l.rS,write:!0}})],u.prototype,"geometry",void 0),u=s=(0,r._)([(0,a.$)("esri.views.layers.support.Geometry")],u);const g=u}}]);
//# sourceMappingURL=6984.6f2dc97f.chunk.js.map