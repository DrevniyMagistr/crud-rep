parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"JYr0":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.BASE_URL=void 0;const e="http://localhost:3000/books";exports.BASE_URL=e;
},{}],"d8ag":[function(require,module,exports) {
"use strict";var r=require("./api/apiUrl");
},{"./api/apiUrl":"JYr0"}],"EJ98":[function(require,module,exports) {
"use strict";var t=require("./api/apiUrl");function n(n,e){const r={method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)};return fetch(`${t.BASE_URL}/${e}`,r).then(t=>t.json().then(console.log))}const e={rating:8.5},r={rating:8.5,author:"repeta"},i={rating:8.5,title:"Сон смешного человека :-)"};n(e,9),n(r,7),n(i,6);
},{"./api/apiUrl":"JYr0"}],"Focm":[function(require,module,exports) {
"use strict";require("./js/d - delete"),require("./js/u - patch");
},{"./js/d - delete":"d8ag","./js/u - patch":"EJ98"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.17ac171c.js.map