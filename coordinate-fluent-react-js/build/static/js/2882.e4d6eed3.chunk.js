"use strict";(self.webpackChunkcoordinate=self.webpackChunkcoordinate||[]).push([[2882],{22882:(n,t,e)=>{e.r(t),e.d(t,{registerFunctions:()=>l});var a=e(46405),r=e(9861),i=e(43036),u=e(83528),c=e(43306),o=e(97216);async function s(n,t,e,a,r,c){if(1===a.length){if((0,i.o)(a[0]))return(0,u.t)(n,a[0],(0,i.K)(a[1],-1));if((0,i.q)(a[0]))return(0,u.t)(n,a[0].toArray(),(0,i.K)(a[1],-1))}else if(2===a.length){if((0,i.o)(a[0]))return(0,u.t)(n,a[0],(0,i.K)(a[1],-1));if((0,i.q)(a[0]))return(0,u.t)(n,a[0].toArray(),(0,i.K)(a[1],-1));if((0,i.u)(a[0])){const e=await a[0].load(),u=await d(o.WhereClause.create(a[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),c,r);return f(r,await a[0].calculateStatistic(n,u,(0,i.K)(a[2],1e3),t.abortSignal))}}else if(3===a.length&&(0,i.u)(a[0])){const e=await a[0].load(),u=await d(o.WhereClause.create(a[1],e.getFieldsIndex(),e.dateFieldsTimeZoneDefaultUTC),c,r);return f(r,await a[0].calculateStatistic(n,u,(0,i.K)(a[2],1e3),t.abortSignal))}return(0,u.t)(n,a,-1)}function f(n,t){return t instanceof c.g?a.lY.fromReaderAsTimeStampOffset(t.toStorageFormat()):t instanceof Date?a.lY.dateJSAndZoneToArcadeDate(t,(0,i.N)(n)):t}async function d(n,t,e){const a=n.getVariables();if(a.length>0){const r=[];for(let n=0;n<a.length;n++){const i={name:a[n]};r.push(await t.evaluateIdentifier(e,i))}const i={};for(let n=0;n<a.length;n++)i[a[n]]=r[n];return n.parameters=i,n}return n}function l(n){"async"===n.mode&&(n.functions.stdev=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("stdev",e,0,r,t,n)))},n.functions.variance=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("variance",e,0,r,t,n)))},n.functions.average=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("mean",e,0,r,t,n)))},n.functions.mean=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("mean",e,0,r,t,n)))},n.functions.sum=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("sum",e,0,r,t,n)))},n.functions.min=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("min",e,0,r,t,n)))},n.functions.max=function(t,e){return n.standardFunctionAsync(t,e,((e,a,r)=>s("max",e,0,r,t,n)))},n.functions.count=function(t,e){return n.standardFunctionAsync(t,e,((n,a,u)=>{if((0,i.H)(u,1,1,t,e),(0,i.u)(u[0]))return u[0].count(n.abortSignal);if((0,i.o)(u[0])||(0,i.c)(u[0]))return u[0].length;if((0,i.q)(u[0]))return u[0].length();throw new r.D$(t,r.TX.InvalidParameter,e)}))})}}}]);
//# sourceMappingURL=2882.e4d6eed3.chunk.js.map