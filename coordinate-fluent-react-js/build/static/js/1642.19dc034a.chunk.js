"use strict";(self.webpackChunkcoordinate=self.webpackChunkcoordinate||[]).push([[1642],{68002:(e,t,i)=>{i.d(t,{X_:()=>o,i1:()=>n,zx:()=>a});var s=i(15941),r=i(31633);const l=96;function o(e,t){const i=t||e.extent,s=e.width,o=(0,r.GA)(null===i||void 0===i?void 0:i.spatialReference);return i&&s?i.width/s*o*r.dy*l:0}function n(e,t){return e/((0,r.GA)(t)*r.dy*l)}function a(e,t,i){return function(e,t){return 0===t||(0,s.Sp)(e,t)||e<t}(e,t)&&function(e,t){return 0===t||(0,s.Sp)(e,t)||e>t}(e,i)}},63733:(e,t,i)=>{i.d(t,{A:()=>y});var s=i(35143),r=i(46053),l=(i(81806),i(76460),i(47249),i(85842)),o=i(5364),n=i(25515),a=i(65624),h=i(5682),p=i(64519),d=i(731);let c=class extends((0,a.d)((0,h.j)(n.A))){constructor(e){super(e),this.elevationInfo=null,this.graphics=new p.Y,this.screenSizePerspectiveEnabled=!0,this.type="graphics",this.internal=!1}destroy(){this.removeAll(),this.graphics.destroy()}add(e){return this.graphics.add(e),this}addMany(e){return this.graphics.addMany(e),this}removeAll(){return this.graphics.removeAll(),this}remove(e){this.graphics.remove(e)}removeMany(e){this.graphics.removeMany(e)}on(e,t){return super.on(e,t)}graphicChanged(e){this.emit("graphic-update",e)}};(0,s._)([(0,r.MZ)({type:d.A})],c.prototype,"elevationInfo",void 0),(0,s._)([(0,r.MZ)((0,o.C)(p.Y,"graphics"))],c.prototype,"graphics",void 0),(0,s._)([(0,r.MZ)({type:["show","hide"]})],c.prototype,"listMode",void 0),(0,s._)([(0,r.MZ)()],c.prototype,"screenSizePerspectiveEnabled",void 0),(0,s._)([(0,r.MZ)({readOnly:!0})],c.prototype,"type",void 0),(0,s._)([(0,r.MZ)({constructOnly:!0})],c.prototype,"internal",void 0),c=(0,s._)([(0,l.$)("esri.layers.GraphicsLayer")],c);const y=c},90104:(e,t,i)=>{i.d(t,{e:()=>b});var s,r=i(35143),l=i(19276),o=i(3975),n=i(50076),a=i(68134),h=i(46053),p=(i(81806),i(76460),i(47249),i(85842)),d=i(68002),c=i(21904),y=i(7464),u=i(97001);let v=s=class extends u.A{constructor(e){super(e),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new s({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"left",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"right",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"top",void 0),(0,r._)([(0,h.MZ)({type:[Number,String],json:{write:!0}})],v.prototype,"bottom",void 0),v=s=(0,r._)([(0,p.$)("esri.views.layers.support.ClipRect")],v);const m=v;var g=i(47266);let f=class extends u.A{constructor(e){super(e),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};(0,r._)([(0,h.MZ)({type:[[[Number]]],json:{write:!0}})],f.prototype,"path",void 0),f=(0,r._)([(0,p.$)("esri.views.layers.support.Path")],f);const _=f,w=l.A.ofType({key:"type",base:null,typeMap:{rect:m,path:_,geometry:g.A}}),b=e=>{let t=class extends e{constructor(){super(...arguments),this.attached=!1,this.clips=new w,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this.visibleAtCurrentScale=!1,this.highlightOptions=null}initialize(){var e,t,i,s;const r=null===(e=null===(t=this.view)||void 0===t?void 0:t.spatialReferenceLocked)||void 0===e||e;(null===(i=this.view)||void 0===i?void 0:i.spatialReference)&&r&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new n.A("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new c.m),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([(0,a.wB)((()=>this.suspended),(e=>{this.container&&(this.container.visible=!e)}),a.pc),(0,a.wB)((()=>this.updateSuspended),(e=>{this.view&&!e&&this.updateRequested&&this.view.requestUpdate()}),a.pc),(0,a.wB)((()=>{var e,t;return null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1}),(e=>{this.container&&(this.container.opacity=e)}),a.pc),(0,a.wB)((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(e=>{this.container&&(this.container.blendMode=e)}),a.pc),(0,a.wB)((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(e=>{this.container&&(this.container.effect=e)}),a.pc),(0,a.wB)((()=>this.highlightOptions),(e=>this.container.highlightOptions=e),a.pc),(0,a.on)((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),a.pc),(0,a.wB)((()=>{var e;return{scale:null===(e=this.view)||void 0===e?void 0:e.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null}}),(e=>{let{scale:t}=e;const i=null!=t&&this.isVisibleAtScale(t);i!==this.visibleAtCurrentScale&&this._set("visibleAtCurrentScale",i)}),a.pc)],"constructor"),null!==(s=this.view)&&void 0!==s&&s.whenLayerView?this.view.whenLayerView(this.layer).then((e=>{e===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}destroy(){this.processDetach(),this.updateRequested=!1}get spatialReferenceSupported(){var e;const t=null===(e=this.view)||void 0===e?void 0:e.spatialReference;return null==t||this.supportsSpatialReference(t)}get updateSuspended(){return this.suspended}get updating(){var e;return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!(null===(e=this._updatingHandles)||void 0===e||!e.updating))}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}isVisibleAtScale(e){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;if(!t)return!0;const{minScale:i,maxScale:s}=t;return(0,d.zx)(e,i,s)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(e){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",e),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(e))):this.updateRequested=!1}hitTest(e,t){return Promise.resolve(null)}supportsSpatialReference(e){return!0}canResume(){return!!this.spatialReferenceSupported&&!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const e=super.getSuspendInfo(),t=!this.spatialReferenceSupported,i=this.visibleAtCurrentScale;return t&&(e.spatialReferenceNotSupported=t),i&&(e.outsideScaleRange=i),e}addAttachHandles(e){this.addHandles(e,"attach")}};return(0,r._)([(0,h.MZ)()],t.prototype,"attached",void 0),(0,r._)([(0,h.MZ)({type:w,set(e){const t=(0,o.V)(e,this._get("clips"),w);this._set("clips",t)}})],t.prototype,"clips",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"container",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"moving",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"spatialReferenceSupported",null),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"updateParameters",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateRequested",void 0),(0,r._)([(0,h.MZ)()],t.prototype,"updateSuspended",null),(0,r._)([(0,h.MZ)()],t.prototype,"updating",null),(0,r._)([(0,h.MZ)()],t.prototype,"view",void 0),(0,r._)([(0,h.MZ)({readOnly:!0})],t.prototype,"visibleAtCurrentScale",void 0),(0,r._)([(0,h.MZ)({type:y.A})],t.prototype,"highlightOptions",void 0),t=(0,r._)([(0,p.$)("esri.views.2d.layers.LayerView2D")],t),t}},11642:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});var s=i(35143),r=i(69539),l=i(39356),o=i(30726),n=i(68134),a=i(46053),h=(i(81806),i(76460),i(47249),i(85842)),p=i(63733),d=i(69098),c=i(42553);let y=class extends((0,d.O)(c.oY)){constructor(e){super(e),this.frameCenter=null,this.frameOutline=null,this.lineOfSight=null,this.sensorLocation=null,this.sensorTrail=null}};(0,s._)([(0,a.MZ)({type:Boolean})],y.prototype,"frameCenter",void 0),(0,s._)([(0,a.MZ)({type:Boolean})],y.prototype,"frameOutline",void 0),(0,s._)([(0,a.MZ)({type:Boolean})],y.prototype,"lineOfSight",void 0),(0,s._)([(0,a.MZ)({type:Boolean})],y.prototype,"sensorLocation",void 0),(0,s._)([(0,a.MZ)({type:Boolean})],y.prototype,"sensorTrail",void 0),y=(0,s._)([(0,h.$)("esri.layers.support.TelemetryDisplay")],y);const u=y;var v=i(90104),m=i(31394),g=i(45992),f=i(91196);const _=new r.A([255,127,0]);let w=class extends((0,v.e)(f.A)){constructor(){super(...arguments),this._graphicsLayer=new p.A,this._frameOutlineGraphic=new l.A({symbol:{type:"simple-fill",outline:{type:"simple-line",color:_}}}),this._sensorTrailGraphic=new l.A({symbol:{type:"simple-line",color:_}}),this._lineOfSightGraphic=new l.A({symbol:{type:"simple-line",color:_}}),this._sensorLocationGraphic=new l.A({symbol:{type:"simple-marker",color:_}}),this._frameCenterGraphic=new l.A({symbol:{type:"simple-marker",color:_}}),this.layer=null,this.symbolColor=_,this.visibleTelemetryElements=null}destroy(){this._graphicsLayer=(0,o.pR)(this._graphicsLayer)}initialize(){var e,t,i,s,r,l,o,a,h,p;this.addHandles((0,n.wB)((()=>this.symbolColor),(()=>{this._frameOutlineGraphic.symbol.outline.color=this.symbolColor,this._sensorTrailGraphic.symbol.color=this.symbolColor,this._lineOfSightGraphic.symbol.color=this.symbolColor,this._sensorLocationGraphic.symbol.color=this.symbolColor,this._frameCenterGraphic.symbol.color=this.symbolColor}),n.Vh)),this._graphicsLayer.graphics.addMany([this._frameOutlineGraphic,this._sensorTrailGraphic,this._lineOfSightGraphic,this._sensorLocationGraphic,this._frameCenterGraphic]),this.visibleTelemetryElements=new u({frameCenter:null===(e=null===(t=this.layer.telemetryDisplay)||void 0===t?void 0:t.frameCenter)||void 0===e||e,frameOutline:null===(i=null===(s=this.layer.telemetryDisplay)||void 0===s?void 0:s.frameOutline)||void 0===i||i,lineOfSight:null===(r=null===(l=this.layer.telemetryDisplay)||void 0===l?void 0:l.lineOfSight)||void 0===r||r,sensorLocation:null===(o=null===(a=this.layer.telemetryDisplay)||void 0===a?void 0:a.sensorLocation)||void 0===o||o,sensorTrail:null===(h=null===(p=this.layer.telemetryDisplay)||void 0===p?void 0:p.sensorTrail)||void 0===h||h})}attach(){this.graphicsView=new g.A({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:this._graphicsLayer.graphics,container:new m.A(this.view.featuresTilingScheme)}),this.container.addChild(this.graphicsView.container),this.addAttachHandles(this._graphicsLayer.on("graphic-update",this.graphicsView.graphicUpdateHandler)),this.addAttachHandles([(0,n.wB)((()=>{var e,t,i,s,r;return[null===(e=this.layer.telemetryDisplay)||void 0===e?void 0:e.frameCenter,null===(t=this.layer.telemetryDisplay)||void 0===t?void 0:t.frameOutline,null===(i=this.layer.telemetryDisplay)||void 0===i?void 0:i.sensorLocation,null===(s=this.layer.telemetryDisplay)||void 0===s?void 0:s.sensorTrail,null===(r=this.layer.telemetryDisplay)||void 0===r?void 0:r.lineOfSight]}),(()=>this._updateVisibleTelemetryElements()),n.Vh),(0,n.wB)((()=>{var e,t,i,s,r;return[this.layer.telemetry,null===(e=this.visibleTelemetryElements)||void 0===e?void 0:e.frameCenter,null===(t=this.visibleTelemetryElements)||void 0===t?void 0:t.frameOutline,null===(i=this.visibleTelemetryElements)||void 0===i?void 0:i.sensorLocation,null===(s=this.visibleTelemetryElements)||void 0===s?void 0:s.sensorTrail,null===(r=this.visibleTelemetryElements)||void 0===r?void 0:r.lineOfSight]}),(()=>this._updateGraphicGeometries()),n.Vh)])}detach(){this.container.removeAllChildren(),this.graphicsView=(0,o.pR)(this.graphicsView)}supportsSpatialReference(e){return!0}moveStart(){}moveEnd(){}viewChange(){this.graphicsView.viewChange()}update(e){this.graphicsView.processUpdate(e)}isUpdating(){return!this.graphicsView||this.graphicsView.updating}_updateVisibleTelemetryElements(){this.visibleTelemetryElements&&this.layer.telemetryDisplay&&(this.visibleTelemetryElements.frameCenter=this.layer.telemetryDisplay.frameCenter,this.visibleTelemetryElements.frameOutline=this.layer.telemetryDisplay.frameOutline,this.visibleTelemetryElements.lineOfSight=this.layer.telemetryDisplay.lineOfSight,this.visibleTelemetryElements.sensorLocation=this.layer.telemetryDisplay.sensorLocation,this.visibleTelemetryElements.sensorTrail=this.layer.telemetryDisplay.sensorTrail)}_updateGraphicGeometries(){const{telemetry:e}=this.layer,{visibleTelemetryElements:t}=this;e&&t&&(t.frameOutline&&e.frameOutline?this._frameOutlineGraphic.geometry=this.layer.telemetry.frameOutline:this._frameOutlineGraphic.geometry=null,t.sensorTrail&&e.sensorTrail?this._sensorTrailGraphic.geometry=this.layer.telemetry.sensorTrail:this._sensorTrailGraphic.geometry=null,t.lineOfSight&&e.lineOfSight?this._lineOfSightGraphic.geometry=this.layer.telemetry.lineOfSight:this._lineOfSightGraphic.geometry=null,t.sensorLocation&&e.sensorLocation?this._sensorLocationGraphic.geometry=this.layer.telemetry.sensorLocation:this._sensorLocationGraphic.geometry=null,t.frameCenter&&e.frameCenter?this._frameCenterGraphic.geometry=this.layer.telemetry.frameCenter:this._frameCenterGraphic.geometry=null)}};(0,s._)([(0,a.MZ)()],w.prototype,"graphicsView",void 0),(0,s._)([(0,a.MZ)()],w.prototype,"layer",void 0),(0,s._)([(0,a.MZ)()],w.prototype,"symbolColor",void 0),(0,s._)([(0,a.MZ)({type:u})],w.prototype,"visibleTelemetryElements",void 0),w=(0,s._)([(0,h.$)("esri.views.2d.layers.VideoLayerView2D")],w);const b=w},31394:(e,t,i)=>{i.d(t,{A:()=>o});var s=i(61551),r=i(8995),l=i(13692);class o extends r.f{renderChildren(e){for(const t of this.children)t.setTransform(e.state);if(super.renderChildren(e),this.attributeView.update(),this.children.some((e=>e.hasData))){switch(e.drawPhase){case s.S5.MAP:this._renderChildren(e,s.RI.All);break;case s.S5.HIGHLIGHT:this.hasHighlight&&this._renderHighlight(e)}this._boundsRenderer&&this._boundsRenderer.doRender(e)}}_renderHighlight(e){(0,l.lB)(e,!1,(e=>{this._renderChildren(e,s.RI.Highlight)}))}}},91196:(e,t,i)=>{i.d(t,{A:()=>u});var s=i(35143),r=i(91967),l=i(54099),o=i(5632),n=i(76460),a=i(30726),h=i(91291),p=i(46053),d=(i(81806),i(47249),i(85842)),c=i(19451);let y=class extends((0,o.sA)((0,h.g)(l.A.EventedMixin(r.A)))){constructor(e){super(e),this._updatingHandles=new c.U,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",s=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";n.A.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(s,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,a.pR)(this._updatingHandles)}get fullOpacity(){var e,t,i,s;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(s=this.parent)||void 0===s?void 0:s.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,s._)([(0,p.MZ)()],y.prototype,"fullOpacity",null),(0,s._)([(0,p.MZ)()],y.prototype,"layer",void 0),(0,s._)([(0,p.MZ)()],y.prototype,"parent",void 0),(0,s._)([(0,p.MZ)({readOnly:!0})],y.prototype,"suspended",null),(0,s._)([(0,p.MZ)({readOnly:!0})],y.prototype,"suspendInfo",null),(0,s._)([(0,p.MZ)({readOnly:!0})],y.prototype,"legendEnabled",null),(0,s._)([(0,p.MZ)({type:Boolean,readOnly:!0})],y.prototype,"updating",null),(0,s._)([(0,p.MZ)({readOnly:!0})],y.prototype,"updatingProgress",null),(0,s._)([(0,p.MZ)()],y.prototype,"visible",null),(0,s._)([(0,p.MZ)()],y.prototype,"view",void 0),y=(0,s._)([(0,d.$)("esri.views.layers.LayerView")],y);const u=y},97001:(e,t,i)=>{i.d(t,{A:()=>a});var s=i(35143),r=i(42553),l=i(46053),o=(i(81806),i(76460),i(47249),i(85842));let n=class extends r.oY{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};(0,s._)([(0,l.MZ)({readOnly:!0})],n.prototype,"version",null),n=(0,s._)([(0,o.$)("esri.views.layers.support.ClipArea")],n);const a=n},47266:(e,t,i)=>{i.d(t,{A:()=>u});var s,r=i(35143),l=(i(35238),i(46053)),o=(i(81806),i(76460),i(47249),i(85842)),n=i(89189),a=i(19902),h=i(97001),p=i(76797),d=i(65215);const c={base:n.A,key:"type",typeMap:{extent:p.A,polygon:d.A}};let y=s=class extends h.A{constructor(e){super(e),this.type="geometry",this.geometry=null}clone(){var e,t;return new s({geometry:null!==(e=null===(t=this.geometry)||void 0===t?void 0:t.clone())&&void 0!==e?e:null})}commitVersionProperties(){this.commitProperty("geometry")}};(0,r._)([(0,l.MZ)({types:c,json:{read:a.rS,write:!0}})],y.prototype,"geometry",void 0),y=s=(0,r._)([(0,o.$)("esri.views.layers.support.Geometry")],y);const u=y}}]);
//# sourceMappingURL=1642.19dc034a.chunk.js.map