"use strict";(self.webpackChunkcoordinate=self.webpackChunkcoordinate||[]).push([[4001],{26382:(e,r,t)=>{t.r(r),t.d(r,{l:()=>c});var n,a,o,i=t(54787),u={exports:{}};n=u,a="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,o=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var r,t,n=e;n.ready=new Promise(((e,n)=>{r=e,t=n}));var o=Object.assign({},n),i="./this.program",u=!0,s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),a&&(s=a),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"",n.print||console.log.bind(console);var c,l,f=n.printErr||console.error.bind(console);Object.assign(n,o),o=null,n.arguments&&n.arguments,n.thisProgram&&(i=n.thisProgram),n.quit&&n.quit,n.wasmBinary&&(c=n.wasmBinary),"object"!=typeof WebAssembly&&S("no native wasm support detected");var d,h,v,p,m,g,y,w,_=!1;function b(){var e=l.buffer;n.HEAP8=d=new Int8Array(e),n.HEAP16=v=new Int16Array(e),n.HEAPU8=h=new Uint8Array(e),n.HEAPU16=p=new Uint16Array(e),n.HEAP32=m=new Int32Array(e),n.HEAPU32=g=new Uint32Array(e),n.HEAPF32=y=new Float32Array(e),n.HEAPF64=w=new Float64Array(e)}var A=[],T=[],C=[];function F(e){A.unshift(e)}function W(e){C.unshift(e)}var E=0,P=null;function S(e){n.onAbort&&n.onAbort(e),f(e="Aborted("+e+")"),_=!0,e+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(e);throw t(r),r}var x,O=e=>e.startsWith("data:application/octet-stream;base64,");function j(e){if(e==x&&c)return new Uint8Array(c);throw"both async and sync fetching of the wasm failed"}function D(e,r,t){return function(e){return!c&&u&&"function"==typeof fetch?fetch(e,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '"+e+"'";return r.arrayBuffer()})).catch((()=>j(e))):Promise.resolve().then((()=>j(e)))}(e).then((e=>WebAssembly.instantiate(e,r))).then((e=>e)).then(t,(e=>{f("failed to asynchronously prepare wasm: ".concat(e)),S(e)}))}O(x="lyr3DMain.wasm")||(x=function(e){return n.locateFile?n.locateFile(e,s):s+e}(x));var M=e=>{for(;e.length>0;)e.shift()(n)};function R(e){this.excPtr=e,this.ptr=e-24,this.set_type=function(e){g[this.ptr+4>>2]=e},this.get_type=function(){return g[this.ptr+4>>2]},this.set_destructor=function(e){g[this.ptr+8>>2]=e},this.get_destructor=function(){return g[this.ptr+8>>2]},this.set_caught=function(e){e=e?1:0,d[this.ptr+12>>0]=e},this.get_caught=function(){return 0!=d[this.ptr+12>>0]},this.set_rethrown=function(e){e=e?1:0,d[this.ptr+13>>0]=e},this.get_rethrown=function(){return 0!=d[this.ptr+13>>0]},this.init=function(e,r){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(r)},this.set_adjusted_ptr=function(e){g[this.ptr+16>>2]=e},this.get_adjusted_ptr=function(){return g[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Ke(this.get_type()))return g[this.excPtr>>2];var e=this.get_adjusted_ptr();return 0!==e?e:this.excPtr}}n.noExitRuntime;var k={},I=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function U(e){return this.fromWireType(m[e>>2])}var Y,H,V,z={},B={},L={},N=e=>{throw new Y(e)},G=(e,r,t)=>{function n(r){var n=t(r);n.length!==e.length&&N("Mismatched type converter count");for(var a=0;a<e.length;++a)Z(e[a],n[a])}e.forEach((function(e){L[e]=r}));var a=new Array(r.length),o=[],i=0;r.forEach(((e,r)=>{B.hasOwnProperty(e)?a[r]=B[e]:(o.push(e),z.hasOwnProperty(e)||(z[e]=[]),z[e].push((()=>{a[r]=B[e],++i===o.length&&n(a)})))})),0===o.length&&n(a)},q={},J=e=>{for(var r="",t=e;h[t];)r+=H[h[t++]];return r},X=e=>{throw new V(e)};function Z(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");return function(e,r){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};var n=r.name;if(e||X('type "'.concat(n,'" must have a positive integer typeid pointer')),B.hasOwnProperty(e)){if(t.ignoreDuplicateRegistrations)return;X("Cannot register type '".concat(n,"' twice"))}if(B[e]=r,delete L[e],z.hasOwnProperty(e)){var a=z[e];delete z[e],a.forEach((e=>e()))}}(e,r,t)}var K=8;function Q(){this.allocated=[void 0],this.freelist=[]}var $=new Q,ee=e=>{e>=$.reserved&&0==--$.get(e).refcount&&$.free(e)},re=()=>{for(var e=0,r=$.reserved;r<$.allocated.length;++r)void 0!==$.allocated[r]&&++e;return e},te=e=>(e||X("Cannot use deleted val. handle = "+e),$.get(e).value),ne=e=>{switch(e){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return $.allocate({refcount:1,value:e})}},ae=(e,r)=>{switch(r){case 4:return function(e){return this.fromWireType(y[e>>2])};case 8:return function(e){return this.fromWireType(w[e>>3])};default:throw new TypeError("invalid float width (".concat(r,"): ").concat(e))}},oe=e=>{if(void 0===e)return"_unknown";var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_".concat(e):e};var ie,ue=(e,r,t)=>{if(void 0===e[r].overloadTable){var n=e[r];e[r]=function(){return e[r].overloadTable.hasOwnProperty(arguments.length)||X("Function '".concat(t,"' called with an invalid number of arguments (").concat(arguments.length,") - expects one of (").concat(e[r].overloadTable,")!")),e[r].overloadTable[arguments.length].apply(this,arguments)},e[r].overloadTable=[],e[r].overloadTable[n.argCount]=n}},se=(e,r,t)=>{n.hasOwnProperty(e)?((void 0===t||void 0!==n[e].overloadTable&&void 0!==n[e].overloadTable[t])&&X("Cannot register public name '".concat(e,"' twice")),ue(n,e,e),n.hasOwnProperty(t)&&X("Cannot register multiple overloads of a function with the same number of arguments (".concat(t,")!")),n[e].overloadTable[t]=r):(n[e]=r,void 0!==t&&(n[e].numArguments=t))},ce=(e,r,t)=>{n.hasOwnProperty(e)||N("Replacing nonexistant public symbol"),void 0!==n[e].overloadTable&&void 0!==t?n[e].overloadTable[t]=r:(n[e]=r,n[e].argCount=t)},le=[],fe=e=>{var r=le[e];return r||(e>=le.length&&(le.length=e+1),le[e]=r=ie.get(e)),r},de=(e,r,t)=>e.includes("j")?((e,r,t)=>{var a=n["dynCall_"+e];return t&&t.length?a.apply(null,[r].concat(t)):a.call(null,r)})(e,r,t):fe(r).apply(null,t),he=(e,r)=>{var t=(e=J(e)).includes("j")?((e,r)=>{var t=[];return function(){return t.length=0,Object.assign(t,arguments),de(e,r,t)}})(e,r):fe(r);return"function"!=typeof t&&X("unknown function pointer with signature ".concat(e,": ").concat(r)),t};var ve,pe=e=>{var r=Xe(e),t=J(r);return qe(r),t},me=e=>{const r=(e=e.trim()).indexOf("(");return-1!==r?(function(e,r){e||S(r)}(")"==e[e.length-1],"Parentheses for argument names should match."),e.substr(0,r)):e},ge=(e,r,t)=>{switch(r){case 1:return t?e=>d[e>>0]:e=>h[e>>0];case 2:return t?e=>v[e>>1]:e=>p[e>>1];case 4:return t?e=>m[e>>2]:e=>g[e>>2];default:throw new TypeError("invalid integer width (".concat(r,"): ").concat(e))}};function ye(e){return this.fromWireType(g[e>>2])}var we=(e,r,t,n)=>{if(!(n>0))return 0;for(var a=t,o=t+n-1,i=0;i<e.length;++i){var u=e.charCodeAt(i);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&e.charCodeAt(++i)),u<=127){if(t>=o)break;r[t++]=u}else if(u<=2047){if(t+1>=o)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=o)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=o)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-a},_e=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n<=127?r++:n<=2047?r+=2:n>=55296&&n<=57343?(r+=4,++t):r+=3}return r},be="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0,Ae=(e,r)=>e?((e,r,t)=>{for(var n=r+t,a=r;e[a]&&!(a>=n);)++a;if(a-r>16&&e.buffer&&be)return be.decode(e.subarray(r,a));for(var o="";r<a;){var i=e[r++];if(128&i){var u=63&e[r++];if(192!=(224&i)){var s=63&e[r++];if((i=224==(240&i)?(15&i)<<12|u<<6|s:(7&i)<<18|u<<12|s<<6|63&e[r++])<65536)o+=String.fromCharCode(i);else{var c=i-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&i)<<6|u)}else o+=String.fromCharCode(i)}return o})(h,e,r):"",Te="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0,Ce=(e,r)=>{for(var t=e,n=t>>1,a=n+r/2;!(n>=a)&&p[n];)++n;if((t=n<<1)-e>32&&Te)return Te.decode(h.subarray(e,t));for(var o="",i=0;!(i>=r/2);++i){var u=v[e+2*i>>1];if(0==u)break;o+=String.fromCharCode(u)}return o},Fe=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<2)return 0;for(var n=r,a=(t-=2)<2*e.length?t/2:e.length,o=0;o<a;++o){var i=e.charCodeAt(o);v[r>>1]=i,r+=2}return v[r>>1]=0,r-n},We=e=>2*e.length,Ee=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=m[e+4*t>>2];if(0==a)break;if(++t,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Pe=(e,r,t)=>{if(void 0===t&&(t=2147483647),t<4)return 0;for(var n=r,a=n+t-4,o=0;o<e.length;++o){var i=e.charCodeAt(o);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&e.charCodeAt(++o)),m[r>>2]=i,(r+=4)+4>a)break}return m[r>>2]=0,r-n},Se=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);n>=55296&&n<=57343&&++t,r+=4}return r},xe={},Oe=e=>{var r=(e-l.buffer.byteLength+65535)/65536;try{return l.grow(r),b(),1}catch(a){}},je={},De=()=>{if(!De.strings){var e={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:("object"==typeof navigator&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:i||"./this.program"};for(var r in je)void 0===je[r]?delete e[r]:e[r]=je[r];var t=[];for(var r in e)t.push("".concat(r,"=").concat(e[r]));De.strings=t}return De.strings},Me=e=>e%4==0&&(e%100!=0||e%400==0),Re=[31,29,31,30,31,30,31,31,30,31,30,31],ke=[31,28,31,30,31,30,31,31,30,31,30,31];var Ie,Ue=(e,r)=>{d.set(e,r)},Ye=(e,r,t,n)=>{var a=g[n+40>>2],o={tm_sec:m[n>>2],tm_min:m[n+4>>2],tm_hour:m[n+8>>2],tm_mday:m[n+12>>2],tm_mon:m[n+16>>2],tm_year:m[n+20>>2],tm_wday:m[n+24>>2],tm_yday:m[n+28>>2],tm_isdst:m[n+32>>2],tm_gmtoff:m[n+36>>2],tm_zone:a?Ae(a):""},i=Ae(t),u={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var s in u)i=i.replace(new RegExp(s,"g"),u[s]);var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["January","February","March","April","May","June","July","August","September","October","November","December"];function f(e,r,t){for(var n="number"==typeof e?e.toString():e||"";n.length<r;)n=t[0]+n;return n}function d(e,r){return f(e,r,"0")}function h(e,r){function t(e){return e<0?-1:e>0?1:0}var n;return 0===(n=t(e.getFullYear()-r.getFullYear()))&&0===(n=t(e.getMonth()-r.getMonth()))&&(n=t(e.getDate()-r.getDate())),n}function v(e){switch(e.getDay()){case 0:return new Date(e.getFullYear()-1,11,29);case 1:return e;case 2:return new Date(e.getFullYear(),0,3);case 3:return new Date(e.getFullYear(),0,2);case 4:return new Date(e.getFullYear(),0,1);case 5:return new Date(e.getFullYear()-1,11,31);case 6:return new Date(e.getFullYear()-1,11,30)}}function p(e){var r=((e,r)=>{for(var t=new Date(e.getTime());r>0;){var n=Me(t.getFullYear()),a=t.getMonth(),o=(n?Re:ke)[a];if(!(r>o-t.getDate()))return t.setDate(t.getDate()+r),t;r-=o-t.getDate()+1,t.setDate(1),a<11?t.setMonth(a+1):(t.setMonth(0),t.setFullYear(t.getFullYear()+1))}return t})(new Date(e.tm_year+1900,0,1),e.tm_yday),t=new Date(r.getFullYear(),0,4),n=new Date(r.getFullYear()+1,0,4),a=v(t),o=v(n);return h(a,r)<=0?h(o,r)<=0?r.getFullYear()+1:r.getFullYear():r.getFullYear()-1}var y={"%a":e=>c[e.tm_wday].substring(0,3),"%A":e=>c[e.tm_wday],"%b":e=>l[e.tm_mon].substring(0,3),"%B":e=>l[e.tm_mon],"%C":e=>d((e.tm_year+1900)/100|0,2),"%d":e=>d(e.tm_mday,2),"%e":e=>f(e.tm_mday,2," "),"%g":e=>p(e).toString().substring(2),"%G":e=>p(e),"%H":e=>d(e.tm_hour,2),"%I":e=>{var r=e.tm_hour;return 0==r?r=12:r>12&&(r-=12),d(r,2)},"%j":e=>d(e.tm_mday+((e,r)=>{for(var t=0,n=0;n<=r;t+=e[n++]);return t})(Me(e.tm_year+1900)?Re:ke,e.tm_mon-1),3),"%m":e=>d(e.tm_mon+1,2),"%M":e=>d(e.tm_min,2),"%n":()=>"\n","%p":e=>e.tm_hour>=0&&e.tm_hour<12?"AM":"PM","%S":e=>d(e.tm_sec,2),"%t":()=>"\t","%u":e=>e.tm_wday||7,"%U":e=>{var r=e.tm_yday+7-e.tm_wday;return d(Math.floor(r/7),2)},"%V":e=>{var r=Math.floor((e.tm_yday+7-(e.tm_wday+6)%7)/7);if((e.tm_wday+371-e.tm_yday-2)%7<=2&&r++,r){if(53==r){var t=(e.tm_wday+371-e.tm_yday)%7;4==t||3==t&&Me(e.tm_year)||(r=1)}}else{r=52;var n=(e.tm_wday+7-e.tm_yday-1)%7;(4==n||5==n&&Me(e.tm_year%400-1))&&r++}return d(r,2)},"%w":e=>e.tm_wday,"%W":e=>{var r=e.tm_yday+7-(e.tm_wday+6)%7;return d(Math.floor(r/7),2)},"%y":e=>(e.tm_year+1900).toString().substring(2),"%Y":e=>e.tm_year+1900,"%z":e=>{var r=e.tm_gmtoff,t=r>=0;return r=(r=Math.abs(r)/60)/60*100+r%60,(t?"+":"-")+String("0000"+r).slice(-4)},"%Z":e=>e.tm_zone,"%%":()=>"%"};for(var s in i=i.replace(/%%/g,"\0\0"),y)i.includes(s)&&(i=i.replace(new RegExp(s,"g"),y[s](o)));var w=function(e,r,t){var n=t>0?t:_e(e)+1,a=new Array(n),o=we(e,a,0,a.length);return r&&(a.length=o),a}(i=i.replace(/\0\0/g,"%"),!1);return w.length>r?0:(Ue(w,e),w.length-1)},He=(e,r)=>{e<128?r.push(e):r.push(e%128|128,e>>7)},Ve=(e,r)=>{if("function"==typeof WebAssembly.Function)return new WebAssembly.Function((e=>{for(var r={i:"i32",j:"i64",f:"f32",d:"f64",e:"externref",p:"i32"},t={parameters:[],results:"v"==e[0]?[]:[r[e[0]]]},n=1;n<e.length;++n)t.parameters.push(r[e[n]]);return t})(r),e);var t=[1];((e,r)=>{var t=e.slice(0,1),n=e.slice(1),a={i:127,p:127,j:126,f:125,d:124,e:111};r.push(96),He(n.length,r);for(var o=0;o<n.length;++o)r.push(a[n[o]]);"v"==t?r.push(0):r.push(1,a[t])})(r,t);var n=[0,97,115,109,1,0,0,0,1];He(t.length,n),n.push.apply(n,t),n.push(2,7,1,1,101,1,102,0,0,7,5,1,1,102,0,0);var a=new WebAssembly.Module(new Uint8Array(n));return new WebAssembly.Instance(a,{e:{f:e}}).exports.f},ze=e=>(Ie||(Ie=new WeakMap,((e,r)=>{if(Ie)for(var t=e;t<e+r;t++){var n=fe(t);n&&Ie.set(n,t)}})(0,ie.length)),Ie.get(e)||0),Be=[],Le=(e,r)=>{ie.set(e,r),le[e]=ie.get(e)};Y=n.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},(()=>{for(var e=new Array(256),r=0;r<256;++r)e[r]=String.fromCharCode(r);H=e})(),V=n.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Object.assign(Q.prototype,{get(e){return this.allocated[e]},has(e){return void 0!==this.allocated[e]},allocate(e){var r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=e,r},free(e){this.allocated[e]=void 0,this.freelist.push(e)}}),$.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),$.reserved=$.allocated.length,n.count_emval_handles=re,ve=n.UnboundTypeError=((e,r)=>{var t=function(e,r){return{[e=oe(e)]:function(){return r.apply(this,arguments)}}[e]}(r,(function(e){this.name=r,this.message=e;var t=new Error(e).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:"".concat(this.name,": ").concat(this.message)},t})(Error,"UnboundTypeError");var Ne={m:(e,r,t)=>{throw new R(e).init(r,t),e},k:e=>{var r=k[e];delete k[e];var t=r.elements,n=t.length,a=t.map((e=>e.getterReturnType)).concat(t.map((e=>e.setterArgumentType))),o=r.rawConstructor,i=r.rawDestructor;G([e],a,(function(e){return t.forEach(((r,t)=>{var a=e[t],o=r.getter,i=r.getterContext,u=e[t+n],s=r.setter,c=r.setterContext;r.read=e=>a.fromWireType(o(i,e)),r.write=(e,r)=>{var t=[];s(c,e,u.toWireType(t,r)),I(t)}})),[{name:r.name,fromWireType:e=>{for(var r=new Array(n),a=0;a<n;++a)r[a]=t[a].read(e);return i(e),r},toWireType:(e,a)=>{if(n!==a.length)throw new TypeError("Incorrect number of tuple elements for ".concat(r.name,": expected=").concat(n,", actual=").concat(a.length));for(var u=o(),s=0;s<n;++s)t[s].write(u,a[s]);return null!==e&&e.push(i,u),u},argPackAdvance:K,readValueFromPointer:U,destructorFunction:i}]}))},s:e=>{var r=q[e];delete q[e];var t=r.rawConstructor,n=r.rawDestructor,a=r.fields,o=a.map((e=>e.getterReturnType)).concat(a.map((e=>e.setterArgumentType)));G([e],o,(e=>{var o={};return a.forEach(((r,t)=>{var n=r.fieldName,i=e[t],u=r.getter,s=r.getterContext,c=e[t+a.length],l=r.setter,f=r.setterContext;o[n]={read:e=>i.fromWireType(u(s,e)),write:(e,r)=>{var t=[];l(f,e,c.toWireType(t,r)),I(t)}}})),[{name:r.name,fromWireType:e=>{var r={};for(var t in o)r[t]=o[t].read(e);return n(e),r},toWireType:(e,r)=>{for(var a in o)if(!(a in r))throw new TypeError('Missing field: "'.concat(a,'"'));var i=t();for(a in o)o[a].write(i,r[a]);return null!==e&&e.push(n,i),i},argPackAdvance:K,readValueFromPointer:U,destructorFunction:n}]}))},u:(e,r,t,n,a)=>{},B:(e,r,t,n)=>{Z(e,{name:r=J(r),fromWireType:function(e){return!!e},toWireType:function(e,r){return r?t:n},argPackAdvance:K,readValueFromPointer:function(e){return this.fromWireType(h[e])},destructorFunction:null})},A:(e,r)=>{Z(e,{name:r=J(r),fromWireType:e=>{var r=te(e);return ee(e),r},toWireType:(e,r)=>ne(r),argPackAdvance:K,readValueFromPointer:U,destructorFunction:null})},r:(e,r,t)=>{Z(e,{name:r=J(r),fromWireType:e=>e,toWireType:(e,r)=>r,argPackAdvance:K,readValueFromPointer:ae(r,t),destructorFunction:null})},c:(e,r,t,n,a,o,i)=>{var u=((e,r)=>{for(var t=[],n=0;n<e;n++)t.push(g[r+4*n>>2]);return t})(r,t);e=J(e),e=me(e),a=he(n,a),se(e,(function(){((e,r)=>{var t=[],n={};throw r.forEach((function e(r){n[r]||B[r]||(L[r]?L[r].forEach(e):(t.push(r),n[r]=!0))})),new ve("".concat(e,": ")+t.map(pe).join([", "]))})("Cannot call ".concat(e," due to unbound types"),u)}),r-1),G([],u,(function(t){var n=[t[0],null].concat(t.slice(1));return ce(e,function(e,r,t,n,a,o){var i=r.length;i<2&&X("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&null!==t,s=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){s=!0;break}var l="void"!==r[0].name,f=i-2,d=new Array(f),h=[],v=[];return function(){var t;arguments.length!==f&&X("function ".concat(e," called with ").concat(arguments.length," arguments, expected ").concat(f)),v.length=0,h.length=u?2:1,h[0]=a,u&&(t=r[1].toWireType(v,this),h[1]=t);for(var o=0;o<f;++o)d[o]=r[o+2].toWireType(v,arguments[o]),h.push(d[o]);return function(e){if(s)I(v);else for(var n=u?1:2;n<r.length;n++){var a=1===n?t:d[n-2];null!==r[n].destructorFunction&&r[n].destructorFunction(a)}if(l)return r[0].fromWireType(e)}(n.apply(null,h))}}(e,n,null,a,o),r-1),[]}))},f:(e,r,t,n,a)=>{r=J(r);var o=e=>e;if(0===n){var i=32-8*t;o=e=>e<<i>>>i}var u=r.includes("unsigned");Z(e,{name:r,fromWireType:o,toWireType:u?function(e,r){return this.name,r>>>0}:function(e,r){return this.name,r},argPackAdvance:K,readValueFromPointer:ge(r,t,0!==n),destructorFunction:null})},b:(e,r,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function a(e){var r=g[e>>2],t=g[e+4>>2];return new n(d.buffer,t,r)}Z(e,{name:t=J(t),fromWireType:a,argPackAdvance:K,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},q:(e,r)=>{var t="std::string"===(r=J(r));Z(e,{name:r,fromWireType(e){var r,n=g[e>>2],a=e+4;if(t)for(var o=a,i=0;i<=n;++i){var u=a+i;if(i==n||0==h[u]){var s=Ae(o,u-o);void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),o=u+1}}else{var c=new Array(n);for(i=0;i<n;++i)c[i]=String.fromCharCode(h[a+i]);r=c.join("")}return qe(e),r},toWireType(e,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var a="string"==typeof r;a||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||X("Cannot pass non-string to std::string"),n=t&&a?_e(r):r.length;var o=Je(4+n+1),i=o+4;if(g[o>>2]=n,t&&a)((e,r,t)=>{we(e,h,r,t)})(r,i,n+1);else if(a)for(var u=0;u<n;++u){var s=r.charCodeAt(u);s>255&&(qe(i),X("String has UTF-16 code units that do not fit in 8 bits")),h[i+u]=s}else for(u=0;u<n;++u)h[i+u]=r[u];return null!==e&&e.push(qe,o),o},argPackAdvance:K,readValueFromPointer:ye,destructorFunction(e){qe(e)}})},o:(e,r,t)=>{var n,a,o,i,u;t=J(t),2===r?(n=Ce,a=Fe,i=We,o=()=>p,u=1):4===r&&(n=Ee,a=Pe,i=Se,o=()=>g,u=2),Z(e,{name:t,fromWireType:e=>{for(var t,a=g[e>>2],i=o(),s=e+4,c=0;c<=a;++c){var l=e+4+c*r;if(c==a||0==i[l>>u]){var f=n(s,l-s);void 0===t?t=f:(t+=String.fromCharCode(0),t+=f),s=l+r}}return qe(e),t},toWireType:(e,n)=>{"string"!=typeof n&&X("Cannot pass non-string to C++ string type ".concat(t));var o=i(n),s=Je(4+o+r);return g[s>>2]=o>>u,a(n,s+4,o+r),null!==e&&e.push(qe,s),s},argPackAdvance:K,readValueFromPointer:U,destructorFunction(e){qe(e)}})},l:(e,r,t,n,a,o)=>{k[e]={name:J(r),rawConstructor:he(t,n),rawDestructor:he(a,o),elements:[]}},d:(e,r,t,n,a,o,i,u,s)=>{k[e].elements.push({getterReturnType:r,getter:he(t,n),getterContext:a,setterArgumentType:o,setter:he(i,u),setterContext:s})},t:(e,r,t,n,a,o)=>{q[e]={name:J(r),rawConstructor:he(t,n),rawDestructor:he(a,o),fields:[]}},i:(e,r,t,n,a,o,i,u,s,c)=>{q[e].fields.push({fieldName:J(r),getterReturnType:t,getter:he(n,a),getterContext:o,setterArgumentType:i,setter:he(u,s),setterContext:c})},C:(e,r)=>{Z(e,{isVoid:!0,name:r=J(r),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,r)=>{}})},a:ee,n:e=>{e>4&&($.get(e).refcount+=1)},D:()=>ne([]),h:e=>ne((e=>{var r=xe[e];return void 0===r?J(e):r})(e)),j:()=>ne({}),e:(e,r,t)=>{e=te(e),r=te(r),t=te(t),e[r]=t},g:(e,r)=>{var t=(e=((e,r)=>{var t=B[e];return void 0===t&&X(r+" has unknown type "+pe(e)),t})(e,"_emval_take_value")).readValueFromPointer(r);return ne(t)},p:()=>{S("")},z:(e,r,t)=>h.copyWithin(e,r,r+t),y:e=>{var r=h.length,t=2147483648;if((e>>>=0)>t)return!1;for(var n=(e,r)=>e+(r-e%r)%r,a=1;a<=4;a*=2){var o=r*(1+.2/a);o=Math.min(o,e+100663296);var i=Math.min(t,n(Math.max(e,o),65536));if(Oe(i))return!0}return!1},w:(e,r)=>{var t=0;return De().forEach(((n,a)=>{var o=r+t;g[e+4*a>>2]=o,((e,r)=>{for(var t=0;t<e.length;++t)d[r++>>0]=e.charCodeAt(t);d[r>>0]=0})(n,o),t+=n.length+1})),0},x:(e,r)=>{var t=De();g[e>>2]=t.length;var n=0;return t.forEach((e=>n+=e.length+1)),g[r>>2]=n,0},v:(e,r,t,n,a)=>Ye(e,r,t,n)},Ge=function(){var e={a:Ne};function r(e,r){return Ge=e.exports,l=Ge.E,b(),ie=Ge.G,function(e){T.unshift(e)}(Ge.F),function(e){if(E--,n.monitorRunDependencies&&n.monitorRunDependencies(E),0==E&&P){var r=P;P=null,r()}}(),Ge}if(E++,n.monitorRunDependencies&&n.monitorRunDependencies(E),n.instantiateWasm)try{return n.instantiateWasm(e,r)}catch(o){f("Module.instantiateWasm callback failed with error: ".concat(o)),t(o)}return function(e,r,t,n){return e||"function"!=typeof WebAssembly.instantiateStreaming||O(r)||"function"!=typeof fetch?D(r,t,n):fetch(r,{credentials:"same-origin"}).then((e=>WebAssembly.instantiateStreaming(e,t).then(n,(function(e){return f("wasm streaming compile failed: ".concat(e)),f("falling back to ArrayBuffer instantiation"),D(r,t,n)}))))}(c,x,e,(function(e){r(e.instance)})).catch(t),{}}(),qe=n._free=e=>(qe=n._free=Ge.H)(e),Je=n._malloc=e=>(Je=n._malloc=Ge.I)(e),Xe=e=>(Xe=Ge.J)(e);n.__embind_initialize_bindings=()=>(n.__embind_initialize_bindings=Ge.K)();var Ze,Ke=e=>(Ke=Ge.L)(e);function Qe(){function e(){Ze||(Ze=!0,n.calledRun=!0,_||(M(T),r(n),n.onRuntimeInitialized&&n.onRuntimeInitialized(),function(){if(n.postRun)for("function"==typeof n.postRun&&(n.postRun=[n.postRun]);n.postRun.length;)W(n.postRun.shift());M(C)}()))}E>0||(function(){if(n.preRun)for("function"==typeof n.preRun&&(n.preRun=[n.preRun]);n.preRun.length;)F(n.preRun.shift());M(A)}(),E>0||(n.setStatus?(n.setStatus("Running..."),setTimeout((function(){setTimeout((function(){n.setStatus("")}),1),e()}),1)):e()))}if(n.dynCall_viji=(e,r,t,a,o)=>(n.dynCall_viji=Ge.M)(e,r,t,a,o),n.dynCall_ji=(e,r)=>(n.dynCall_ji=Ge.N)(e,r),n.dynCall_viijii=(e,r,t,a,o,i,u)=>(n.dynCall_viijii=Ge.O)(e,r,t,a,o,i,u),n.dynCall_iiiiij=(e,r,t,a,o,i,u)=>(n.dynCall_iiiiij=Ge.P)(e,r,t,a,o,i,u),n.dynCall_iiiiijj=(e,r,t,a,o,i,u,s,c)=>(n.dynCall_iiiiijj=Ge.Q)(e,r,t,a,o,i,u,s,c),n.dynCall_iiiiiijj=(e,r,t,a,o,i,u,s,c,l)=>(n.dynCall_iiiiiijj=Ge.R)(e,r,t,a,o,i,u,s,c,l),n.addFunction=(e,r)=>{var t=ze(e);if(t)return t;var n=(()=>{if(Be.length)return Be.pop();try{ie.grow(1)}catch(f){if(!(f instanceof RangeError))throw f;throw"Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."}return ie.length-1})();try{Le(n,e)}catch(f){if(!(f instanceof TypeError))throw f;var a=Ve(e,r);Le(n,a)}return Ie.set(e,n),n},n.UTF8ToString=Ae,P=function e(){Ze||Qe(),Ze||(P=e)},n.preInit)for("function"==typeof n.preInit&&(n.preInit=[n.preInit]);n.preInit.length>0;)n.preInit.pop()();return Qe(),e.ready},n.exports=o;const s=(0,i.g)(u.exports),c=Object.freeze(Object.defineProperty({__proto__:null,default:s},Symbol.toStringTag,{value:"Module"}))}}]);
//# sourceMappingURL=4001.916da3e6.chunk.js.map