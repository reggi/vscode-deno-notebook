/******/ var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/style.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/style.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "._2PlkhfLzKDD-BxypK36m9h code {\n  font-family: monospace;\n  font-size: 12px;\n}\n\n.tmeehaCRBPnvVXpncEf46 {\n  background-color: lightblue;\n}\n", "",{"version":3,"sources":["webpack://src/client/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":[".json code {\n  font-family: monospace;\n  font-size: 12px;\n}\n\n.output {\n  background-color: lightblue;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"json": "_2PlkhfLzKDD-BxypK36m9h",
	"output": "tmeehaCRBPnvVXpncEf46"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/preact/dist/preact.module.js":
/*!***************************************************!*\
  !*** ./node_modules/preact/dist/preact.module.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ N),
/* harmony export */   "hydrate": () => (/* binding */ O),
/* harmony export */   "createElement": () => (/* binding */ a),
/* harmony export */   "h": () => (/* binding */ a),
/* harmony export */   "Fragment": () => (/* binding */ y),
/* harmony export */   "createRef": () => (/* binding */ h),
/* harmony export */   "isValidElement": () => (/* binding */ l),
/* harmony export */   "Component": () => (/* binding */ p),
/* harmony export */   "cloneElement": () => (/* binding */ S),
/* harmony export */   "createContext": () => (/* binding */ q),
/* harmony export */   "toChildArray": () => (/* binding */ w),
/* harmony export */   "options": () => (/* binding */ n)
/* harmony export */ });
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)))})}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i)}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),

/***/ "./src/client/style.css":
/*!******************************!*\
  !*** ./src/client/style.css ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./style.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[1].use[1]!./src/client/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/client/render.ts":
/*!******************************!*\
  !*** ./src/client/render.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/client/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
// We've set up this sample using CSS modules, which lets you import class
// names into JavaScript: https://github.com/css-modules/css-modules
// You can configure or change this in the webpack.config.js file.

// This function is called to render your contents.
function render({ container, mime, value }) {
    // Format the JSON and insert it as <pre><code>{ ... }</code></pre>
    // Replace this with your custom code!
    const pre = document.createElement('pre');
    pre.classList.add(_style_css__WEBPACK_IMPORTED_MODULE_0__.json);
    const code = document.createElement('code');
    code.className = 'output';
    code.textContent = `mime type: ${mime}\n\n${JSON.stringify(value, null, 2)}`;
    pre.appendChild(code);
    container.appendChild(pre);
}
if (false) {}


/***/ }),

/***/ "./node_modules/vscode-notebook-error-overlay/dist/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/vscode-notebook-error-overlay/dist/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overlay */ "./node_modules/vscode-notebook-error-overlay/dist/overlay.js");
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/

let manager;
// This conditional will be checked by webpack so the error overlay isn't
// included in the production build:
if (true) {
    manager = new _overlay__WEBPACK_IMPORTED_MODULE_0__.ErrorOverlayManager();
}
else {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (manager);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/vscode-notebook-error-overlay/dist/overlay.js":
/*!********************************************************************!*\
  !*** ./node_modules/vscode-notebook-error-overlay/dist/overlay.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorOverlayManager": () => (/* binding */ ErrorOverlayManager)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./node_modules/vscode-notebook-error-overlay/dist/ui.js");
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/


const isPromiseLike = (x) => typeof x === 'object' && !!x && typeof x.then === 'function';
/**
 * Implementation of the error overlay manager.
 */
class ErrorOverlayManager {
    constructor() {
        this.containers = [];
        this.unmountOverlay = new Map();
        this.isInstalledGlobally = false;
        this.listener = (rawEvent) => {
            if (rawEvent.data.type === 'webpackErrors') {
                for (const container of this.containers) {
                    this.displayErrorIn(container, rawEvent.data.data, 1 /* Compilation */);
                }
            }
        };
    }
    /**
     * @inheritdoc
     */
    install(container) {
        if (!this.isInstalledGlobally) {
            this.isInstalledGlobally = true;
            window.addEventListener('message', this.listener);
        }
        const containers = this.containers.filter((c) => document.body.contains(c));
        containers.push(container);
        this.containers = containers;
    }
    wrap(container, fn) {
        if (!container) {
            return;
        }
        this.hideErrorIn(container, false);
        this.install(container);
        const retry = () => this.wrap(container, fn);
        try {
            const ret = fn();
            if (ret && isPromiseLike(ret)) {
                return ret.then((v) => v, (err) => {
                    this.displayErrorIn(container, [err], 0 /* Runtime */, retry);
                    return undefined;
                });
            }
        }
        catch (err) {
            this.displayErrorIn(container, [err], 0 /* Runtime */, retry);
        }
        return undefined;
    }
    /**
     * @inheritdoc
     */
    uninstall() {
        for (const unmount of this.unmountOverlay.values()) {
            unmount(false);
        }
        this.unmountOverlay.clear();
        window.removeEventListener('message', this.listener);
    }
    displayErrorIn(container, errors, source, retry) {
        if (!container) {
            return;
        }
        this.hideErrorIn(container, false); // make sure we don't ovewrite and get confused
        const errorStrs = errors.map((e) => typeof e === 'string' ? e : e.stack || e.message || String(e));
        const elem = ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(_ui__WEBPACK_IMPORTED_MODULE_1__.Overlay, { source: source, close: () => this.hideErrorIn(container, true), errors: errorStrs }));
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(elem, container);
        this.unmountOverlay.set(container, (allowRetry) => {
            const overlay = container.querySelector('.notebook-error-overlay');
            if (overlay) {
                container.removeChild(overlay);
            }
            if (allowRetry && retry) {
                retry();
            }
        });
    }
    hideErrorIn(container, allowRetry) {
        const unmountFn = this.unmountOverlay.get(container);
        if (unmountFn) {
            unmountFn(allowRetry);
            this.unmountOverlay.delete(container);
        }
    }
}
//# sourceMappingURL=overlay.js.map

/***/ }),

/***/ "./node_modules/vscode-notebook-error-overlay/dist/ui.js":
/*!***************************************************************!*\
  !*** ./node_modules/vscode-notebook-error-overlay/dist/ui.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Overlay": () => (/* binding */ Overlay)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.module.js");
/* harmony import */ var vscode_webview_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode-webview-tools */ "./node_modules/vscode-webview-tools/dist/pkg/parse-colors.js");
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/


const colors = (0,vscode_webview_tools__WEBPACK_IMPORTED_MODULE_1__.parseColors)();
const Overlay = ({ errors, source, close }) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { className: "notebook-error-overlay", style: { minHeight: 500 } },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("div", { style: {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            overflowY: 'auto',
            fontFamily: colors["font-family" /* FontFamily */],
            fontSize: colors["font-size" /* FontSize */],
            fontWeight: colors["font-weight" /* FontWeight */],
            background: colors["inputValidation-errorBackground" /* InputValidationErrorBackground */],
            border: `1px solid ${colors["inputValidation-errorBorder" /* InputValidationErrorBorder */]}`,
            color: colors["inputValidation-errorForeground" /* InputValidationErrorForeground */],
            padding: 5,
        } },
        (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("h1", { style: { fontSize: '1.5em', margin: '0 0 0.25em', fontWeight: 'normal' } },
            "Errors occurred when ",
            source === 1 /* Compilation */ ? 'compiling' : 'rendering',
            ":"),
        errors.map((err, i) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(ErrorMessage, { error: err, key: i })))),
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)(CloseButton, { onClick: close, source: source })));
const CloseButton = ({ source, onClick, }) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("button", { onClick: onClick, title: source === 1 /* Compilation */ ? 'Dismiss' : 'Retry', style: {
        position: 'absolute',
        top: 3,
        right: 3,
        border: 0,
        background: 'none',
        padding: 0,
        margin: 0,
        outline: 0,
        cursor: 'pointer',
    } }, source === 1 /* Compilation */ ? ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.00001 8.70711L11.6465 12.3536L12.3536 11.6465L8.70711 8.00001L12.3536 4.35356L11.6465 3.64645L8.00001 7.2929L4.35356 3.64645L3.64645 4.35356L7.2929 8.00001L3.64645 11.6465L4.35356 12.3536L8.00001 8.70711Z", fill: "#C5C5C5" }))) : ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.00583 8.26691L0.78 9.50003L0 8.73003L2.09 6.66003L2.85 6.67003L4.94 8.79003L4.18 9.55003L3.01348 8.36995C3.20279 10.9587 5.363 13 8 13C9.91063 13 11.571 11.9283 12.4127 10.3533L13.226 10.95C12.1959 12.771 10.2415 14 8 14C4.77573 14 2.14547 11.4568 2.00583 8.26691ZM12.9961 7.80051L11.76 6.55005L11 7.31005L13.09 9.42005L13.85 9.43005L15.94 7.36005L15.19 6.60005L13.996 7.78004C13.8803 4.56822 11.2401 2 8 2C5.83726 2 3.94178 3.14429 2.88597 4.86047L3.69562 5.45435C4.56645 3.98499 6.16818 3 8 3C10.6946 3 12.8914 5.13152 12.9961 7.80051Z", fill: "#C5C5C5" })))));
const ErrorMessage = ({ error }) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("pre", { style: {
        fontFamily: colors["editor-font-family" /* EditorFontFamily */],
        fontSize: colors["editor-font-size" /* EditorFontSize */],
        fontWeight: colors["editor-font-weight" /* EditorFontWeight */],
        width: '100%',
        overflowX: 'auto',
        lineHeight: '1.5em'
    } }, error.split('\n').map((line, i) => ((0,preact__WEBPACK_IMPORTED_MODULE_0__.h)("code", { key: i, style: {
        padding: '0.1em 0.3em',
        background: i % 2 ? 'rgba(0, 0, 0, 0.2)' : 'none',
        display: 'table-row',
        whitespace: 'no-wrap',
    } }, line)))));
//# sourceMappingURL=ui.js.map

/***/ }),

/***/ "./node_modules/vscode-webview-tools/dist/pkg/parse-colors.js":
/*!********************************************************************!*\
  !*** ./node_modules/vscode-webview-tools/dist/pkg/parse-colors.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseColors": () => (/* binding */ parseColors),
/* harmony export */   "observeColors": () => (/* binding */ observeColors)
/* harmony export */ });
/**
 * Parses the vscode CSS variables from the document, and returns them.
 */
const parseColors = () => {
    const rawVars = String(document.documentElement.getAttribute('style'));
    const re = new RegExp('--vscode-(.*?):(.*?)(;|$)', 'g');
    const vars = {};
    let match;
    while ((match = re.exec(rawVars)) !== null) {
        const [, key, value] = match;
        vars[key] = value;
    }
    return vars;
};
/**
 * Watches the body and calls the callback function when the colors change.
 * This can very easily be wrapped into a react or preact hook, for example:
 *
 * ```
 * import { useState, useEffect } from 'preact/hooks';
 *
 * const useCssVariables = () => {
 *   const [vars, setVars] = useState<{ [key: string]: string }>({});
 *   useEffect(() => observeColors(setVars), []);
 *   return vars;
 * }
 * ```
 */
const observeColors = (onChange) => {
    onChange(parseColors());
    const observer = new MutationObserver(() => {
        onChange(parseColors());
    });
    observer.observe(document.documentElement, {
        attributeFilter: ['style'],
        childList: false,
        subtree: false,
    });
    return () => observer.disconnect();
};
//# sourceMappingURL=parse-colors.js.map

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		id: moduleId,
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/publicPath */
/******/ (() => {
/******/ 	__webpack_require__.p = "";
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*****************************!*\
  !*** ./src/client/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activate": () => (/* binding */ activate)
/* harmony export */ });
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/client/render.ts");
/* harmony import */ var vscode_notebook_error_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vscode-notebook-error-overlay */ "./node_modules/vscode-notebook-error-overlay/dist/index.js");


__webpack_require__.p = new URL(import.meta.url.replace(/[^/]+$/, '') + "").toString();
// ----------------------------------------------------------------------------
// This is the entrypoint to the notebook renderer's webview client-side code.
// This contains some boilerplate that calls the `render()` function when new
// output is available. You probably don't need to change this code; put your
// rendering logic inside of the `render()` function.
// ----------------------------------------------------------------------------
const activate = context => {
    return {
        renderOutputItem(outputItem, element) {
            let shadow = element.shadowRoot;
            if (!shadow) {
                shadow = element.attachShadow({ mode: 'open' });
                const root = document.createElement('div');
                root.id = 'root';
                shadow.append(root);
            }
            const root = shadow.querySelector('#root');
            vscode_notebook_error_overlay__WEBPACK_IMPORTED_MODULE_1__.default.wrap(root, () => {
                root.innerHTML = '';
                const node = document.createElement('div');
                root.appendChild(node);
                (0,_render__WEBPACK_IMPORTED_MODULE_0__.render)({ container: node, mime: outputItem.mime, value: outputItem.json(), context });
            });
        },
        disposeOutputItem(outputId) {
            // Do any teardown here. outputId is the cell output being deleted, or
            // undefined if we're clearing all outputs.
        }
    };
};

})();

var __webpack_exports__activate = __webpack_exports__.activate;
export { __webpack_exports__activate as activate };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3RlYm9vay1zZXJpYWxpemVyLWV4YW1wbGUvLi9zcmMvY2xpZW50L3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9ub3RlYm9vay1zZXJpYWxpemVyLWV4YW1wbGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL25vdGVib29rLXNlcmlhbGl6ZXItZXhhbXBsZS8uL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwid2VicGFjazovL25vdGVib29rLXNlcmlhbGl6ZXItZXhhbXBsZS8uL3NyYy9jbGllbnQvc3R5bGUuY3NzP2VmZWYiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stc2VyaWFsaXplci1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25vdGVib29rLXNlcmlhbGl6ZXItZXhhbXBsZS8uL3NyYy9jbGllbnQvcmVuZGVyLnRzIiwid2VicGFjazovL25vdGVib29rLXNlcmlhbGl6ZXItZXhhbXBsZS8uL25vZGVfbW9kdWxlcy92c2NvZGUtbm90ZWJvb2stZXJyb3Itb3ZlcmxheS9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL25vdGVib29rLXNlcmlhbGl6ZXItZXhhbXBsZS8uL25vZGVfbW9kdWxlcy92c2NvZGUtbm90ZWJvb2stZXJyb3Itb3ZlcmxheS9kaXN0L292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stc2VyaWFsaXplci1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3ZzY29kZS1ub3RlYm9vay1lcnJvci1vdmVybGF5L2Rpc3QvdWkuanMiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stc2VyaWFsaXplci1leGFtcGxlLy4vbm9kZV9tb2R1bGVzL3ZzY29kZS13ZWJ2aWV3LXRvb2xzL2Rpc3QvcGtnL3BhcnNlLWNvbG9ycy5qcyIsIndlYnBhY2s6Ly9ub3RlYm9vay1zZXJpYWxpemVyLWV4YW1wbGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stc2VyaWFsaXplci1leGFtcGxlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vdGVib29rLXNlcmlhbGl6ZXItZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stc2VyaWFsaXplci1leGFtcGxlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stc2VyaWFsaXplci1leGFtcGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm90ZWJvb2stc2VyaWFsaXplci1leGFtcGxlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL25vdGVib29rLXNlcmlhbGl6ZXItZXhhbXBsZS8uL3NyYy9jbGllbnQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNEY7QUFDNUYsOEJBQThCLG1GQUEyQjtBQUN6RDtBQUNBLHlFQUF5RSwyQkFBMkIsb0JBQW9CLEdBQUcsNEJBQTRCLGdDQUFnQyxHQUFHLFNBQVMscUZBQXFGLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxzQ0FBc0MsMkJBQTJCLG9CQUFvQixHQUFHLGFBQWEsZ0NBQWdDLEdBQUcscUJBQXFCO0FBQ3BlO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDVjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElB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QUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztZQUNoQyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNYLE1BQU0sR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7Z0JBQ2hELE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO2dCQUNqQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3JCO1lBQ0QsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBYyxPQUFPLENBQUUsQ0FBQztZQUN6RCx1RUFBaUIsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO2dCQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztnQkFDcEIsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFFdkIsK0NBQU0sQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ3hGLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztRQUNELGlCQUFpQixDQUFDLFFBQVE7WUFDeEIsc0VBQXNFO1lBQ3RFLDJDQUEyQztRQUM3QyxDQUFDO0tBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5fMlBsa2hmTHpLREQtQnh5cEszNm05aCBjb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi50bWVlaGFDUkJQbnZWWHBuY0VmNDYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL2NsaWVudC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuanNvbiBjb2RlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5vdXRwdXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJqc29uXCI6IFwiXzJQbGtoZkx6S0RELUJ4eXBLMzZtOWhcIixcblx0XCJvdXRwdXRcIjogXCJ0bWVlaGFDUkJQbnZWWHBuY0VmNDZcIlxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIG4sbCx1LGksdCxvLHI9e30sZj1bXSxlPS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2k7ZnVuY3Rpb24gYyhuLGwpe2Zvcih2YXIgdSBpbiBsKW5bdV09bFt1XTtyZXR1cm4gbn1mdW5jdGlvbiBzKG4pe3ZhciBsPW4ucGFyZW50Tm9kZTtsJiZsLnJlbW92ZUNoaWxkKG4pfWZ1bmN0aW9uIGEobixsLHUpe3ZhciBpLHQsbyxyPWFyZ3VtZW50cyxmPXt9O2ZvcihvIGluIGwpXCJrZXlcIj09bz9pPWxbb106XCJyZWZcIj09bz90PWxbb106ZltvXT1sW29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mylmb3IodT1bdV0sbz0zO288YXJndW1lbnRzLmxlbmd0aDtvKyspdS5wdXNoKHJbb10pO2lmKG51bGwhPXUmJihmLmNoaWxkcmVuPXUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJm51bGwhPW4uZGVmYXVsdFByb3BzKWZvcihvIGluIG4uZGVmYXVsdFByb3BzKXZvaWQgMD09PWZbb10mJihmW29dPW4uZGVmYXVsdFByb3BzW29dKTtyZXR1cm4gdihuLGYsaSx0LG51bGwpfWZ1bmN0aW9uIHYobCx1LGksdCxvKXt2YXIgcj17dHlwZTpsLHByb3BzOnUsa2V5OmkscmVmOnQsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2Q6dm9pZCAwLF9fYzpudWxsLF9faDpudWxsLGNvbnN0cnVjdG9yOnZvaWQgMCxfX3Y6bnVsbD09bz8rK24uX192Om99O3JldHVybiBudWxsIT1uLnZub2RlJiZuLnZub2RlKHIpLHJ9ZnVuY3Rpb24gaCgpe3JldHVybntjdXJyZW50Om51bGx9fWZ1bmN0aW9uIHkobil7cmV0dXJuIG4uY2hpbGRyZW59ZnVuY3Rpb24gcChuLGwpe3RoaXMucHJvcHM9bix0aGlzLmNvbnRleHQ9bH1mdW5jdGlvbiBkKG4sbCl7aWYobnVsbD09bClyZXR1cm4gbi5fXz9kKG4uX18sbi5fXy5fX2suaW5kZXhPZihuKSsxKTpudWxsO2Zvcih2YXIgdTtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSlyZXR1cm4gdS5fX2U7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2Ygbi50eXBlP2Qobik6bnVsbH1mdW5jdGlvbiBfKG4pe3ZhciBsLHU7aWYobnVsbCE9KG49bi5fXykmJm51bGwhPW4uX19jKXtmb3Iobi5fX2U9bi5fX2MuYmFzZT1udWxsLGw9MDtsPG4uX19rLmxlbmd0aDtsKyspaWYobnVsbCE9KHU9bi5fX2tbbF0pJiZudWxsIT11Ll9fZSl7bi5fX2U9bi5fX2MuYmFzZT11Ll9fZTticmVha31yZXR1cm4gXyhuKX19ZnVuY3Rpb24gayhsKXsoIWwuX19kJiYobC5fX2Q9ITApJiZ1LnB1c2gobCkmJiFiLl9fcisrfHx0IT09bi5kZWJvdW5jZVJlbmRlcmluZykmJigodD1uLmRlYm91bmNlUmVuZGVyaW5nKXx8aSkoYil9ZnVuY3Rpb24gYigpe2Zvcih2YXIgbjtiLl9fcj11Lmxlbmd0aDspbj11LnNvcnQoZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0pLHU9W10sbi5zb21lKGZ1bmN0aW9uKG4pe3ZhciBsLHUsaSx0LG8scjtuLl9fZCYmKG89KHQ9KGw9bikuX192KS5fX2UsKHI9bC5fX1ApJiYodT1bXSwoaT1jKHt9LHQpKS5fX3Y9dC5fX3YrMSxJKHIsdCxpLGwuX19uLHZvaWQgMCE9PXIub3duZXJTVkdFbGVtZW50LG51bGwhPXQuX19oP1tvXTpudWxsLHUsbnVsbD09bz9kKHQpOm8sdC5fX2gpLFQodSx0KSx0Ll9fZSE9byYmXyh0KSkpfSl9ZnVuY3Rpb24gbShuLGwsdSxpLHQsbyxlLGMscyxhKXt2YXIgaCxwLF8sayxiLG0sdyxBPWkmJmkuX19rfHxmLFA9QS5sZW5ndGg7Zm9yKHUuX19rPVtdLGg9MDtoPGwubGVuZ3RoO2grKylpZihudWxsIT0oaz11Ll9fa1toXT1udWxsPT0oaz1sW2hdKXx8XCJib29sZWFuXCI9PXR5cGVvZiBrP251bGw6XCJzdHJpbmdcIj09dHlwZW9mIGt8fFwibnVtYmVyXCI9PXR5cGVvZiBrfHxcImJpZ2ludFwiPT10eXBlb2Ygaz92KG51bGwsayxudWxsLG51bGwsayk6QXJyYXkuaXNBcnJheShrKT92KHkse2NoaWxkcmVuOmt9LG51bGwsbnVsbCxudWxsKTprLl9fYj4wP3Yoay50eXBlLGsucHJvcHMsay5rZXksbnVsbCxrLl9fdik6aykpe2lmKGsuX189dSxrLl9fYj11Ll9fYisxLG51bGw9PT0oXz1BW2hdKXx8XyYmay5rZXk9PV8ua2V5JiZrLnR5cGU9PT1fLnR5cGUpQVtoXT12b2lkIDA7ZWxzZSBmb3IocD0wO3A8UDtwKyspe2lmKChfPUFbcF0pJiZrLmtleT09Xy5rZXkmJmsudHlwZT09PV8udHlwZSl7QVtwXT12b2lkIDA7YnJlYWt9Xz1udWxsfUkobixrLF89X3x8cix0LG8sZSxjLHMsYSksYj1rLl9fZSwocD1rLnJlZikmJl8ucmVmIT1wJiYod3x8KHc9W10pLF8ucmVmJiZ3LnB1c2goXy5yZWYsbnVsbCxrKSx3LnB1c2gocCxrLl9fY3x8YixrKSksbnVsbCE9Yj8obnVsbD09bSYmKG09YiksXCJmdW5jdGlvblwiPT10eXBlb2Ygay50eXBlJiZudWxsIT1rLl9fayYmay5fX2s9PT1fLl9faz9rLl9fZD1zPWcoayxzLG4pOnM9eChuLGssXyxBLGIscyksYXx8XCJvcHRpb25cIiE9PXUudHlwZT9cImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJih1Ll9fZD1zKTpuLnZhbHVlPVwiXCIpOnMmJl8uX19lPT1zJiZzLnBhcmVudE5vZGUhPW4mJihzPWQoXykpfWZvcih1Ll9fZT1tLGg9UDtoLS07KW51bGwhPUFbaF0mJihcImZ1bmN0aW9uXCI9PXR5cGVvZiB1LnR5cGUmJm51bGwhPUFbaF0uX19lJiZBW2hdLl9fZT09dS5fX2QmJih1Ll9fZD1kKGksaCsxKSksTChBW2hdLEFbaF0pKTtpZih3KWZvcihoPTA7aDx3Lmxlbmd0aDtoKyspeih3W2hdLHdbKytoXSx3WysraF0pfWZ1bmN0aW9uIGcobixsLHUpe3ZhciBpLHQ7Zm9yKGk9MDtpPG4uX19rLmxlbmd0aDtpKyspKHQ9bi5fX2tbaV0pJiYodC5fXz1uLGw9XCJmdW5jdGlvblwiPT10eXBlb2YgdC50eXBlP2codCxsLHUpOngodSx0LHQsbi5fX2ssdC5fX2UsbCkpO3JldHVybiBsfWZ1bmN0aW9uIHcobixsKXtyZXR1cm4gbD1sfHxbXSxudWxsPT1ufHxcImJvb2xlYW5cIj09dHlwZW9mIG58fChBcnJheS5pc0FycmF5KG4pP24uc29tZShmdW5jdGlvbihuKXt3KG4sbCl9KTpsLnB1c2gobikpLGx9ZnVuY3Rpb24geChuLGwsdSxpLHQsbyl7dmFyIHIsZixlO2lmKHZvaWQgMCE9PWwuX19kKXI9bC5fX2QsbC5fX2Q9dm9pZCAwO2Vsc2UgaWYobnVsbD09dXx8dCE9b3x8bnVsbD09dC5wYXJlbnROb2RlKW46aWYobnVsbD09b3x8by5wYXJlbnROb2RlIT09biluLmFwcGVuZENoaWxkKHQpLHI9bnVsbDtlbHNle2ZvcihmPW8sZT0wOyhmPWYubmV4dFNpYmxpbmcpJiZlPGkubGVuZ3RoO2UrPTIpaWYoZj09dClicmVhayBuO24uaW5zZXJ0QmVmb3JlKHQsbykscj1vfXJldHVybiB2b2lkIDAhPT1yP3I6dC5uZXh0U2libGluZ31mdW5jdGlvbiBBKG4sbCx1LGksdCl7dmFyIG87Zm9yKG8gaW4gdSlcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8byBpbiBsfHxDKG4sbyxudWxsLHVbb10saSk7Zm9yKG8gaW4gbCl0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiBsW29dfHxcImNoaWxkcmVuXCI9PT1vfHxcImtleVwiPT09b3x8XCJ2YWx1ZVwiPT09b3x8XCJjaGVja2VkXCI9PT1vfHx1W29dPT09bFtvXXx8QyhuLG8sbFtvXSx1W29dLGkpfWZ1bmN0aW9uIFAobixsLHUpe1wiLVwiPT09bFswXT9uLnNldFByb3BlcnR5KGwsdSk6bltsXT1udWxsPT11P1wiXCI6XCJudW1iZXJcIiE9dHlwZW9mIHV8fGUudGVzdChsKT91OnUrXCJweFwifWZ1bmN0aW9uIEMobixsLHUsaSx0KXt2YXIgbztuOmlmKFwic3R5bGVcIj09PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgaSYmKG4uc3R5bGUuY3NzVGV4dD1pPVwiXCIpLGkpZm9yKGwgaW4gaSl1JiZsIGluIHV8fFAobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSlpJiZ1W2xdPT09aVtsXXx8UChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09PWxbMF0mJlwiblwiPT09bFsxXSlvPWwhPT0obD1sLnJlcGxhY2UoL0NhcHR1cmUkLyxcIlwiKSksbD1sLnRvTG93ZXJDYXNlKClpbiBuP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrb109dSx1P2l8fG4uYWRkRXZlbnRMaXN0ZW5lcihsLG8/SDokLG8pOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLG8/SDokLG8pO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiIT09bCl7aWYodClsPWwucmVwbGFjZSgveGxpbmtbSDpoXS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJocmVmXCIhPT1sJiZcImxpc3RcIiE9PWwmJlwiZm9ybVwiIT09bCYmXCJ0YWJJbmRleFwiIT09bCYmXCJkb3dubG9hZFwiIT09bCYmbCBpbiBuKXRyeXtuW2xdPW51bGw9PXU/XCJcIjp1O2JyZWFrIG59Y2F0Y2gobil7fVwiZnVuY3Rpb25cIj09dHlwZW9mIHV8fChudWxsIT11JiYoITEhPT11fHxcImFcIj09PWxbMF0mJlwiclwiPT09bFsxXSk/bi5zZXRBdHRyaWJ1dGUobCx1KTpuLnJlbW92ZUF0dHJpYnV0ZShsKSl9fWZ1bmN0aW9uICQobCl7dGhpcy5sW2wudHlwZSshMV0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIEgobCl7dGhpcy5sW2wudHlwZSshMF0obi5ldmVudD9uLmV2ZW50KGwpOmwpfWZ1bmN0aW9uIEkobCx1LGksdCxvLHIsZixlLHMpe3ZhciBhLHYsaCxkLF8sayxiLGcsdyx4LEEsUD11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDtudWxsIT1pLl9faCYmKHM9aS5fX2gsZT11Ll9fZT1pLl9fZSx1Ll9faD1udWxsLHI9W2VdKSwoYT1uLl9fYikmJmEodSk7dHJ5e246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgUCl7aWYoZz11LnByb3BzLHc9KGE9UC5jb250ZXh0VHlwZSkmJnRbYS5fX2NdLHg9YT93P3cucHJvcHMudmFsdWU6YS5fXzp0LGkuX19jP2I9KHY9dS5fX2M9aS5fX2MpLl9fPXYuX19FOihcInByb3RvdHlwZVwiaW4gUCYmUC5wcm90b3R5cGUucmVuZGVyP3UuX19jPXY9bmV3IFAoZyx4KToodS5fX2M9dj1uZXcgcChnLHgpLHYuY29uc3RydWN0b3I9UCx2LnJlbmRlcj1NKSx3JiZ3LnN1Yih2KSx2LnByb3BzPWcsdi5zdGF0ZXx8KHYuc3RhdGU9e30pLHYuY29udGV4dD14LHYuX19uPXQsaD12Ll9fZD0hMCx2Ll9faD1bXSksbnVsbD09di5fX3MmJih2Ll9fcz12LnN0YXRlKSxudWxsIT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmKHYuX19zPT12LnN0YXRlJiYodi5fX3M9Yyh7fSx2Ll9fcykpLGModi5fX3MsUC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMoZyx2Ll9fcykpKSxkPXYucHJvcHMsXz12LnN0YXRlLGgpbnVsbD09UC5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPXYuY29tcG9uZW50V2lsbE1vdW50JiZ2LmNvbXBvbmVudFdpbGxNb3VudCgpLG51bGwhPXYuY29tcG9uZW50RGlkTW91bnQmJnYuX19oLnB1c2godi5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihudWxsPT1QLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmZyE9PWQmJm51bGwhPXYuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmdi5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGcseCksIXYuX19lJiZudWxsIT12LnNob3VsZENvbXBvbmVudFVwZGF0ZSYmITE9PT12LnNob3VsZENvbXBvbmVudFVwZGF0ZShnLHYuX19zLHgpfHx1Ll9fdj09PWkuX192KXt2LnByb3BzPWcsdi5zdGF0ZT12Ll9fcyx1Ll9fdiE9PWkuX192JiYodi5fX2Q9ITEpLHYuX192PXUsdS5fX2U9aS5fX2UsdS5fX2s9aS5fX2ssdS5fX2suZm9yRWFjaChmdW5jdGlvbihuKXtuJiYobi5fXz11KX0pLHYuX19oLmxlbmd0aCYmZi5wdXNoKHYpO2JyZWFrIG59bnVsbCE9di5jb21wb25lbnRXaWxsVXBkYXRlJiZ2LmNvbXBvbmVudFdpbGxVcGRhdGUoZyx2Ll9fcyx4KSxudWxsIT12LmNvbXBvbmVudERpZFVwZGF0ZSYmdi5fX2gucHVzaChmdW5jdGlvbigpe3YuY29tcG9uZW50RGlkVXBkYXRlKGQsXyxrKX0pfXYuY29udGV4dD14LHYucHJvcHM9Zyx2LnN0YXRlPXYuX19zLChhPW4uX19yKSYmYSh1KSx2Ll9fZD0hMSx2Ll9fdj11LHYuX19QPWwsYT12LnJlbmRlcih2LnByb3BzLHYuc3RhdGUsdi5jb250ZXh0KSx2LnN0YXRlPXYuX19zLG51bGwhPXYuZ2V0Q2hpbGRDb250ZXh0JiYodD1jKGMoe30sdCksdi5nZXRDaGlsZENvbnRleHQoKSkpLGh8fG51bGw9PXYuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGV8fChrPXYuZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUoZCxfKSksQT1udWxsIT1hJiZhLnR5cGU9PT15JiZudWxsPT1hLmtleT9hLnByb3BzLmNoaWxkcmVuOmEsbShsLEFycmF5LmlzQXJyYXkoQSk/QTpbQV0sdSxpLHQsbyxyLGYsZSxzKSx2LmJhc2U9dS5fX2UsdS5fX2g9bnVsbCx2Ll9faC5sZW5ndGgmJmYucHVzaCh2KSxiJiYodi5fX0U9di5fXz1udWxsKSx2Ll9fZT0hMX1lbHNlIG51bGw9PXImJnUuX192PT09aS5fX3Y/KHUuX19rPWkuX19rLHUuX19lPWkuX19lKTp1Ll9fZT1qKGkuX19lLHUsaSx0LG8scixmLHMpOyhhPW4uZGlmZmVkKSYmYSh1KX1jYXRjaChsKXt1Ll9fdj1udWxsLChzfHxudWxsIT1yKSYmKHUuX19lPWUsdS5fX2g9ISFzLHJbci5pbmRleE9mKGUpXT1udWxsKSxuLl9fZShsLHUsaSl9fWZ1bmN0aW9uIFQobCx1KXtuLl9fYyYmbi5fX2ModSxsKSxsLnNvbWUoZnVuY3Rpb24odSl7dHJ5e2w9dS5fX2gsdS5fX2g9W10sbC5zb21lKGZ1bmN0aW9uKG4pe24uY2FsbCh1KX0pfWNhdGNoKGwpe24uX19lKGwsdS5fX3YpfX0pfWZ1bmN0aW9uIGoobixsLHUsaSx0LG8sZSxjKXt2YXIgYSx2LGgseSxwPXUucHJvcHMsZD1sLnByb3BzLF89bC50eXBlLGs9MDtpZihcInN2Z1wiPT09XyYmKHQ9ITApLG51bGwhPW8pZm9yKDtrPG8ubGVuZ3RoO2srKylpZigoYT1vW2tdKSYmKGE9PT1ufHwoXz9hLmxvY2FsTmFtZT09XzozPT1hLm5vZGVUeXBlKSkpe249YSxvW2tdPW51bGw7YnJlYWt9aWYobnVsbD09bil7aWYobnVsbD09PV8pcmV0dXJuIGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGQpO249dD9kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLF8pOmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXyxkLmlzJiZkKSxvPW51bGwsYz0hMX1pZihudWxsPT09XylwPT09ZHx8YyYmbi5kYXRhPT09ZHx8KG4uZGF0YT1kKTtlbHNle2lmKG89byYmZi5zbGljZS5jYWxsKG4uY2hpbGROb2Rlcyksdj0ocD11LnByb3BzfHxyKS5kYW5nZXJvdXNseVNldElubmVySFRNTCxoPWQuZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwsIWMpe2lmKG51bGwhPW8pZm9yKHA9e30seT0wO3k8bi5hdHRyaWJ1dGVzLmxlbmd0aDt5KyspcFtuLmF0dHJpYnV0ZXNbeV0ubmFtZV09bi5hdHRyaWJ1dGVzW3ldLnZhbHVlOyhofHx2KSYmKGgmJih2JiZoLl9faHRtbD09di5fX2h0bWx8fGguX19odG1sPT09bi5pbm5lckhUTUwpfHwobi5pbm5lckhUTUw9aCYmaC5fX2h0bWx8fFwiXCIpKX1pZihBKG4sZCxwLHQsYyksaClsLl9faz1bXTtlbHNlIGlmKGs9bC5wcm9wcy5jaGlsZHJlbixtKG4sQXJyYXkuaXNBcnJheShrKT9rOltrXSxsLHUsaSx0JiZcImZvcmVpZ25PYmplY3RcIiE9PV8sbyxlLG4uZmlyc3RDaGlsZCxjKSxudWxsIT1vKWZvcihrPW8ubGVuZ3RoO2stLTspbnVsbCE9b1trXSYmcyhvW2tdKTtjfHwoXCJ2YWx1ZVwiaW4gZCYmdm9pZCAwIT09KGs9ZC52YWx1ZSkmJihrIT09bi52YWx1ZXx8XCJwcm9ncmVzc1wiPT09XyYmIWspJiZDKG4sXCJ2YWx1ZVwiLGsscC52YWx1ZSwhMSksXCJjaGVja2VkXCJpbiBkJiZ2b2lkIDAhPT0oaz1kLmNoZWNrZWQpJiZrIT09bi5jaGVja2VkJiZDKG4sXCJjaGVja2VkXCIsayxwLmNoZWNrZWQsITEpKX1yZXR1cm4gbn1mdW5jdGlvbiB6KGwsdSxpKXt0cnl7XCJmdW5jdGlvblwiPT10eXBlb2YgbD9sKHUpOmwuY3VycmVudD11fWNhdGNoKGwpe24uX19lKGwsaSl9fWZ1bmN0aW9uIEwobCx1LGkpe3ZhciB0LG8scjtpZihuLnVubW91bnQmJm4udW5tb3VudChsKSwodD1sLnJlZikmJih0LmN1cnJlbnQmJnQuY3VycmVudCE9PWwuX19lfHx6KHQsbnVsbCx1KSksaXx8XCJmdW5jdGlvblwiPT10eXBlb2YgbC50eXBlfHwoaT1udWxsIT0obz1sLl9fZSkpLGwuX19lPWwuX19kPXZvaWQgMCxudWxsIT0odD1sLl9fYykpe2lmKHQuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e3QuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChsKXtuLl9fZShsLHUpfXQuYmFzZT10Ll9fUD1udWxsfWlmKHQ9bC5fX2spZm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl0W3JdJiZMKHRbcl0sdSxpKTtudWxsIT1vJiZzKG8pfWZ1bmN0aW9uIE0obixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gTihsLHUsaSl7dmFyIHQsbyxlO24uX18mJm4uX18obCx1KSxvPSh0PVwiZnVuY3Rpb25cIj09dHlwZW9mIGkpP251bGw6aSYmaS5fX2t8fHUuX19rLGU9W10sSSh1LGw9KCF0JiZpfHx1KS5fX2s9YSh5LG51bGwsW2xdKSxvfHxyLHIsdm9pZCAwIT09dS5vd25lclNWR0VsZW1lbnQsIXQmJmk/W2ldOm8/bnVsbDp1LmZpcnN0Q2hpbGQ/Zi5zbGljZS5jYWxsKHUuY2hpbGROb2Rlcyk6bnVsbCxlLCF0JiZpP2k6bz9vLl9fZTp1LmZpcnN0Q2hpbGQsdCksVChlLGwpfWZ1bmN0aW9uIE8obixsKXtOKG4sbCxPKX1mdW5jdGlvbiBTKG4sbCx1KXt2YXIgaSx0LG8scj1hcmd1bWVudHMsZj1jKHt9LG4ucHJvcHMpO2ZvcihvIGluIGwpXCJrZXlcIj09bz9pPWxbb106XCJyZWZcIj09bz90PWxbb106ZltvXT1sW29dO2lmKGFyZ3VtZW50cy5sZW5ndGg+Mylmb3IodT1bdV0sbz0zO288YXJndW1lbnRzLmxlbmd0aDtvKyspdS5wdXNoKHJbb10pO3JldHVybiBudWxsIT11JiYoZi5jaGlsZHJlbj11KSx2KG4udHlwZSxmLGl8fG4ua2V5LHR8fG4ucmVmLG51bGwpfWZ1bmN0aW9uIHEobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIrbysrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsaTtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PVtdLChpPXt9KVtsXT10aGlzLHRoaXMuZ2V0Q2hpbGRDb250ZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIGl9LHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMucHJvcHMudmFsdWUhPT1uLnZhbHVlJiZ1LnNvbWUoayl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UucHVzaChuKTt2YXIgbD1uLmNvbXBvbmVudFdpbGxVbm1vdW50O24uY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXt1LnNwbGljZSh1LmluZGV4T2YobiksMSksbCYmbC5jYWxsKG4pfX0pLG4uY2hpbGRyZW59fTtyZXR1cm4gdS5Qcm92aWRlci5fXz11LkNvbnN1bWVyLmNvbnRleHRUeXBlPXV9bj17X19lOmZ1bmN0aW9uKG4sbCl7Zm9yKHZhciB1LGksdDtsPWwuX187KWlmKCh1PWwuX19jKSYmIXUuX18pdHJ5e2lmKChpPXUuY29uc3RydWN0b3IpJiZudWxsIT1pLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKHUuc2V0U3RhdGUoaS5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLHQ9dS5fX2QpLG51bGwhPXUuY29tcG9uZW50RGlkQ2F0Y2gmJih1LmNvbXBvbmVudERpZENhdGNoKG4pLHQ9dS5fX2QpLHQpcmV0dXJuIHUuX19FPXV9Y2F0Y2gobCl7bj1sfXRocm93IG59LF9fdjowfSxsPWZ1bmN0aW9uKG4pe3JldHVybiBudWxsIT1uJiZ2b2lkIDA9PT1uLmNvbnN0cnVjdG9yfSxwLnByb3RvdHlwZS5zZXRTdGF0ZT1mdW5jdGlvbihuLGwpe3ZhciB1O3U9bnVsbCE9dGhpcy5fX3MmJnRoaXMuX19zIT09dGhpcy5zdGF0ZT90aGlzLl9fczp0aGlzLl9fcz1jKHt9LHRoaXMuc3RhdGUpLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4oYyh7fSx1KSx0aGlzLnByb3BzKSksbiYmYyh1LG4pLG51bGwhPW4mJnRoaXMuX192JiYobCYmdGhpcy5fX2gucHVzaChsKSxrKHRoaXMpKX0scC5wcm90b3R5cGUuZm9yY2VVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5fX3YmJih0aGlzLl9fZT0hMCxuJiZ0aGlzLl9faC5wdXNoKG4pLGsodGhpcykpfSxwLnByb3RvdHlwZS5yZW5kZXI9eSx1PVtdLGk9XCJmdW5jdGlvblwiPT10eXBlb2YgUHJvbWlzZT9Qcm9taXNlLnByb3RvdHlwZS50aGVuLmJpbmQoUHJvbWlzZS5yZXNvbHZlKCkpOnNldFRpbWVvdXQsYi5fX3I9MCxvPTA7ZXhwb3J0e04gYXMgcmVuZGVyLE8gYXMgaHlkcmF0ZSxhIGFzIGNyZWF0ZUVsZW1lbnQsYSBhcyBoLHkgYXMgRnJhZ21lbnQsaCBhcyBjcmVhdGVSZWYsbCBhcyBpc1ZhbGlkRWxlbWVudCxwIGFzIENvbXBvbmVudCxTIGFzIGNsb25lRWxlbWVudCxxIGFzIGNyZWF0ZUNvbnRleHQsdyBhcyB0b0NoaWxkQXJyYXksbiBhcyBvcHRpb25zfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByZWFjdC5tb2R1bGUuanMubWFwXG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLnVzZVsxXSEuL3N0eWxlLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBXZSd2ZSBzZXQgdXAgdGhpcyBzYW1wbGUgdXNpbmcgQ1NTIG1vZHVsZXMsIHdoaWNoIGxldHMgeW91IGltcG9ydCBjbGFzc1xuLy8gbmFtZXMgaW50byBKYXZhU2NyaXB0OiBodHRwczovL2dpdGh1Yi5jb20vY3NzLW1vZHVsZXMvY3NzLW1vZHVsZXNcbi8vIFlvdSBjYW4gY29uZmlndXJlIG9yIGNoYW5nZSB0aGlzIGluIHRoZSB3ZWJwYWNrLmNvbmZpZy5qcyBmaWxlLlxuaW1wb3J0ICogYXMgc3R5bGUgZnJvbSAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHR5cGUgeyBSZW5kZXJlckNvbnRleHQgfSBmcm9tICd2c2NvZGUtbm90ZWJvb2stcmVuZGVyZXInO1xuXG5pbnRlcmZhY2UgSVJlbmRlckluZm8ge1xuICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBtaW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBhbnk7XG4gIGNvbnRleHQ6IFJlbmRlcmVyQ29udGV4dDx1bmtub3duPjtcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyBjYWxsZWQgdG8gcmVuZGVyIHlvdXIgY29udGVudHMuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKHsgY29udGFpbmVyLCBtaW1lLCB2YWx1ZSB9OiBJUmVuZGVySW5mbykge1xuICAvLyBGb3JtYXQgdGhlIEpTT04gYW5kIGluc2VydCBpdCBhcyA8cHJlPjxjb2RlPnsgLi4uIH08L2NvZGU+PC9wcmU+XG4gIC8vIFJlcGxhY2UgdGhpcyB3aXRoIHlvdXIgY3VzdG9tIGNvZGUhXG4gIGNvbnN0IHByZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpO1xuICBwcmUuY2xhc3NMaXN0LmFkZChzdHlsZS5qc29uKTtcbiAgY29uc3QgY29kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NvZGUnKTtcbiAgY29kZS5jbGFzc05hbWUgPSAnb3V0cHV0JztcbiAgY29kZS50ZXh0Q29udGVudCA9IGBtaW1lIHR5cGU6ICR7bWltZX1cXG5cXG4ke0pTT04uc3RyaW5naWZ5KHZhbHVlLCBudWxsLCAyKX1gO1xuICBwcmUuYXBwZW5kQ2hpbGQoY29kZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmUpO1xufVxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFkZERpc3Bvc2VIYW5kbGVyKCgpID0+IHtcbiAgICAvLyBJbiBkZXZlbG9wbWVudCwgdGhpcyB3aWxsIGJlIGNhbGxlZCBiZWZvcmUgdGhlIHJlbmRlcmVyIGlzIHJlbG9hZGVkLiBZb3VcbiAgICAvLyBjYW4gdXNlIHRoaXMgdG8gY2xlYW4gdXAgb3Igc3Rhc2ggYW55IHN0YXRlLlxuICB9KTtcbn1cbiIsIi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAqIENvcHlyaWdodCAoQykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG4gKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cclxuaW1wb3J0IHsgRXJyb3JPdmVybGF5TWFuYWdlciB9IGZyb20gJy4vb3ZlcmxheSc7XHJcbmxldCBtYW5hZ2VyO1xyXG4vLyBUaGlzIGNvbmRpdGlvbmFsIHdpbGwgYmUgY2hlY2tlZCBieSB3ZWJwYWNrIHNvIHRoZSBlcnJvciBvdmVybGF5IGlzbid0XHJcbi8vIGluY2x1ZGVkIGluIHRoZSBwcm9kdWN0aW9uIGJ1aWxkOlxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgIG1hbmFnZXIgPSBuZXcgRXJyb3JPdmVybGF5TWFuYWdlcigpO1xyXG59XHJcbmVsc2Uge1xyXG4gICAgbWFuYWdlciA9IHtcclxuICAgICAgICBpbnN0YWxsOiAoKSA9PiB1bmRlZmluZWQsXHJcbiAgICAgICAgd3JhcDogKF8sIHQpID0+IHQoKSxcclxuICAgICAgICB1bmluc3RhbGw6ICgpID0+IHVuZGVmaW5lZCxcclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgbWFuYWdlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICogQ29weXJpZ2h0IChDKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbiAqLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG5pbXBvcnQgeyByZW5kZXIsIGggfSBmcm9tICdwcmVhY3QnO1xyXG5pbXBvcnQgeyBPdmVybGF5IH0gZnJvbSAnLi91aSc7XHJcbmNvbnN0IGlzUHJvbWlzZUxpa2UgPSAoeCkgPT4gdHlwZW9mIHggPT09ICdvYmplY3QnICYmICEheCAmJiB0eXBlb2YgeC50aGVuID09PSAnZnVuY3Rpb24nO1xyXG4vKipcclxuICogSW1wbGVtZW50YXRpb24gb2YgdGhlIGVycm9yIG92ZXJsYXkgbWFuYWdlci5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBFcnJvck92ZXJsYXlNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMudW5tb3VudE92ZXJsYXkgPSBuZXcgTWFwKCk7XHJcbiAgICAgICAgdGhpcy5pc0luc3RhbGxlZEdsb2JhbGx5ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lciA9IChyYXdFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmF3RXZlbnQuZGF0YS50eXBlID09PSAnd2VicGFja0Vycm9ycycpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29udGFpbmVyIG9mIHRoaXMuY29udGFpbmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9ySW4oY29udGFpbmVyLCByYXdFdmVudC5kYXRhLmRhdGEsIDEgLyogQ29tcGlsYXRpb24gKi8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQGluaGVyaXRkb2NcclxuICAgICAqL1xyXG4gICAgaW5zdGFsbChjb250YWluZXIpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNJbnN0YWxsZWRHbG9iYWxseSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzSW5zdGFsbGVkR2xvYmFsbHkgPSB0cnVlO1xyXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBjb250YWluZXJzID0gdGhpcy5jb250YWluZXJzLmZpbHRlcigoYykgPT4gZG9jdW1lbnQuYm9keS5jb250YWlucyhjKSk7XHJcbiAgICAgICAgY29udGFpbmVycy5wdXNoKGNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXJzID0gY29udGFpbmVycztcclxuICAgIH1cclxuICAgIHdyYXAoY29udGFpbmVyLCBmbikge1xyXG4gICAgICAgIGlmICghY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5oaWRlRXJyb3JJbihjb250YWluZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmluc3RhbGwoY29udGFpbmVyKTtcclxuICAgICAgICBjb25zdCByZXRyeSA9ICgpID0+IHRoaXMud3JhcChjb250YWluZXIsIGZuKTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXQgPSBmbigpO1xyXG4gICAgICAgICAgICBpZiAocmV0ICYmIGlzUHJvbWlzZUxpa2UocmV0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldC50aGVuKCh2KSA9PiB2LCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3JJbihjb250YWluZXIsIFtlcnJdLCAwIC8qIFJ1bnRpbWUgKi8sIHJldHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvckluKGNvbnRhaW5lciwgW2Vycl0sIDAgLyogUnVudGltZSAqLywgcmV0cnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBAaW5oZXJpdGRvY1xyXG4gICAgICovXHJcbiAgICB1bmluc3RhbGwoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB1bm1vdW50IG9mIHRoaXMudW5tb3VudE92ZXJsYXkudmFsdWVzKCkpIHtcclxuICAgICAgICAgICAgdW5tb3VudChmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudW5tb3VudE92ZXJsYXkuY2xlYXIoKTtcclxuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMubGlzdGVuZXIpO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheUVycm9ySW4oY29udGFpbmVyLCBlcnJvcnMsIHNvdXJjZSwgcmV0cnkpIHtcclxuICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGlkZUVycm9ySW4oY29udGFpbmVyLCBmYWxzZSk7IC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBvdmV3cml0ZSBhbmQgZ2V0IGNvbmZ1c2VkXHJcbiAgICAgICAgY29uc3QgZXJyb3JTdHJzID0gZXJyb3JzLm1hcCgoZSkgPT4gdHlwZW9mIGUgPT09ICdzdHJpbmcnID8gZSA6IGUuc3RhY2sgfHwgZS5tZXNzYWdlIHx8IFN0cmluZyhlKSk7XHJcbiAgICAgICAgY29uc3QgZWxlbSA9IChoKE92ZXJsYXksIHsgc291cmNlOiBzb3VyY2UsIGNsb3NlOiAoKSA9PiB0aGlzLmhpZGVFcnJvckluKGNvbnRhaW5lciwgdHJ1ZSksIGVycm9yczogZXJyb3JTdHJzIH0pKTtcclxuICAgICAgICByZW5kZXIoZWxlbSwgY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLnVubW91bnRPdmVybGF5LnNldChjb250YWluZXIsIChhbGxvd1JldHJ5KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG92ZXJsYXkgPSBjb250YWluZXIucXVlcnlTZWxlY3RvcignLm5vdGVib29rLWVycm9yLW92ZXJsYXknKTtcclxuICAgICAgICAgICAgaWYgKG92ZXJsYXkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChvdmVybGF5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYWxsb3dSZXRyeSAmJiByZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0cnkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaGlkZUVycm9ySW4oY29udGFpbmVyLCBhbGxvd1JldHJ5KSB7XHJcbiAgICAgICAgY29uc3QgdW5tb3VudEZuID0gdGhpcy51bm1vdW50T3ZlcmxheS5nZXQoY29udGFpbmVyKTtcclxuICAgICAgICBpZiAodW5tb3VudEZuKSB7XHJcbiAgICAgICAgICAgIHVubW91bnRGbihhbGxvd1JldHJ5KTtcclxuICAgICAgICAgICAgdGhpcy51bm1vdW50T3ZlcmxheS5kZWxldGUoY29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9b3ZlcmxheS5qcy5tYXAiLCIvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gKiBDb3B5cmlnaHQgKEMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuICotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbmltcG9ydCB7IGggfSBmcm9tICdwcmVhY3QnO1xyXG5pbXBvcnQgeyBwYXJzZUNvbG9ycyB9IGZyb20gJ3ZzY29kZS13ZWJ2aWV3LXRvb2xzJztcclxuY29uc3QgY29sb3JzID0gcGFyc2VDb2xvcnMoKTtcclxuZXhwb3J0IGNvbnN0IE92ZXJsYXkgPSAoeyBlcnJvcnMsIHNvdXJjZSwgY2xvc2UgfSkgPT4gKGgoXCJkaXZcIiwgeyBjbGFzc05hbWU6IFwibm90ZWJvb2stZXJyb3Itb3ZlcmxheVwiLCBzdHlsZTogeyBtaW5IZWlnaHQ6IDUwMCB9IH0sXHJcbiAgICBoKFwiZGl2XCIsIHsgc3R5bGU6IHtcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgICAgb3ZlcmZsb3dZOiAnYXV0bycsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IGNvbG9yc1tcImZvbnQtZmFtaWx5XCIgLyogRm9udEZhbWlseSAqL10sXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBjb2xvcnNbXCJmb250LXNpemVcIiAvKiBGb250U2l6ZSAqL10sXHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IGNvbG9yc1tcImZvbnQtd2VpZ2h0XCIgLyogRm9udFdlaWdodCAqL10sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbG9yc1tcImlucHV0VmFsaWRhdGlvbi1lcnJvckJhY2tncm91bmRcIiAvKiBJbnB1dFZhbGlkYXRpb25FcnJvckJhY2tncm91bmQgKi9dLFxyXG4gICAgICAgICAgICBib3JkZXI6IGAxcHggc29saWQgJHtjb2xvcnNbXCJpbnB1dFZhbGlkYXRpb24tZXJyb3JCb3JkZXJcIiAvKiBJbnB1dFZhbGlkYXRpb25FcnJvckJvcmRlciAqL119YCxcclxuICAgICAgICAgICAgY29sb3I6IGNvbG9yc1tcImlucHV0VmFsaWRhdGlvbi1lcnJvckZvcmVncm91bmRcIiAvKiBJbnB1dFZhbGlkYXRpb25FcnJvckZvcmVncm91bmQgKi9dLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgIH0gfSxcclxuICAgICAgICBoKFwiaDFcIiwgeyBzdHlsZTogeyBmb250U2l6ZTogJzEuNWVtJywgbWFyZ2luOiAnMCAwIDAuMjVlbScsIGZvbnRXZWlnaHQ6ICdub3JtYWwnIH0gfSxcclxuICAgICAgICAgICAgXCJFcnJvcnMgb2NjdXJyZWQgd2hlbiBcIixcclxuICAgICAgICAgICAgc291cmNlID09PSAxIC8qIENvbXBpbGF0aW9uICovID8gJ2NvbXBpbGluZycgOiAncmVuZGVyaW5nJyxcclxuICAgICAgICAgICAgXCI6XCIpLFxyXG4gICAgICAgIGVycm9ycy5tYXAoKGVyciwgaSkgPT4gKGgoRXJyb3JNZXNzYWdlLCB7IGVycm9yOiBlcnIsIGtleTogaSB9KSkpKSxcclxuICAgIGgoQ2xvc2VCdXR0b24sIHsgb25DbGljazogY2xvc2UsIHNvdXJjZTogc291cmNlIH0pKSk7XHJcbmNvbnN0IENsb3NlQnV0dG9uID0gKHsgc291cmNlLCBvbkNsaWNrLCB9KSA9PiAoaChcImJ1dHRvblwiLCB7IG9uQ2xpY2s6IG9uQ2xpY2ssIHRpdGxlOiBzb3VyY2UgPT09IDEgLyogQ29tcGlsYXRpb24gKi8gPyAnRGlzbWlzcycgOiAnUmV0cnknLCBzdHlsZToge1xyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIHRvcDogMyxcclxuICAgICAgICByaWdodDogMyxcclxuICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4gICAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICB9IH0sIHNvdXJjZSA9PT0gMSAvKiBDb21waWxhdGlvbiAqLyA/IChoKFwic3ZnXCIsIHsgd2lkdGg6IFwiMTZcIiwgaGVpZ2h0OiBcIjE2XCIsIHZpZXdCb3g6IFwiMCAwIDE2IDE2XCIsIGZpbGw6IFwibm9uZVwiLCB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIH0sXHJcbiAgICBoKFwicGF0aFwiLCB7IGZpbGxSdWxlOiBcImV2ZW5vZGRcIiwgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiLCBkOiBcIk04LjAwMDAxIDguNzA3MTFMMTEuNjQ2NSAxMi4zNTM2TDEyLjM1MzYgMTEuNjQ2NUw4LjcwNzExIDguMDAwMDFMMTIuMzUzNiA0LjM1MzU2TDExLjY0NjUgMy42NDY0NUw4LjAwMDAxIDcuMjkyOUw0LjM1MzU2IDMuNjQ2NDVMMy42NDY0NSA0LjM1MzU2TDcuMjkyOSA4LjAwMDAxTDMuNjQ2NDUgMTEuNjQ2NUw0LjM1MzU2IDEyLjM1MzZMOC4wMDAwMSA4LjcwNzExWlwiLCBmaWxsOiBcIiNDNUM1QzVcIiB9KSkpIDogKGgoXCJzdmdcIiwgeyB3aWR0aDogXCIxNlwiLCBoZWlnaHQ6IFwiMTZcIiwgdmlld0JveDogXCIwIDAgMTYgMTZcIiwgZmlsbDogXCJub25lXCIsIHhtbG5zOiBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgfSxcclxuICAgIGgoXCJwYXRoXCIsIHsgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLCBjbGlwUnVsZTogXCJldmVub2RkXCIsIGQ6IFwiTTIuMDA1ODMgOC4yNjY5MUwwLjc4IDkuNTAwMDNMMCA4LjczMDAzTDIuMDkgNi42NjAwM0wyLjg1IDYuNjcwMDNMNC45NCA4Ljc5MDAzTDQuMTggOS41NTAwM0wzLjAxMzQ4IDguMzY5OTVDMy4yMDI3OSAxMC45NTg3IDUuMzYzIDEzIDggMTNDOS45MTA2MyAxMyAxMS41NzEgMTEuOTI4MyAxMi40MTI3IDEwLjM1MzNMMTMuMjI2IDEwLjk1QzEyLjE5NTkgMTIuNzcxIDEwLjI0MTUgMTQgOCAxNEM0Ljc3NTczIDE0IDIuMTQ1NDcgMTEuNDU2OCAyLjAwNTgzIDguMjY2OTFaTTEyLjk5NjEgNy44MDA1MUwxMS43NiA2LjU1MDA1TDExIDcuMzEwMDVMMTMuMDkgOS40MjAwNUwxMy44NSA5LjQzMDA1TDE1Ljk0IDcuMzYwMDVMMTUuMTkgNi42MDAwNUwxMy45OTYgNy43ODAwNEMxMy44ODAzIDQuNTY4MjIgMTEuMjQwMSAyIDggMkM1LjgzNzI2IDIgMy45NDE3OCAzLjE0NDI5IDIuODg1OTcgNC44NjA0N0wzLjY5NTYyIDUuNDU0MzVDNC41NjY0NSAzLjk4NDk5IDYuMTY4MTggMyA4IDNDMTAuNjk0NiAzIDEyLjg5MTQgNS4xMzE1MiAxMi45OTYxIDcuODAwNTFaXCIsIGZpbGw6IFwiI0M1QzVDNVwiIH0pKSkpKTtcclxuY29uc3QgRXJyb3JNZXNzYWdlID0gKHsgZXJyb3IgfSkgPT4gKGgoXCJwcmVcIiwgeyBzdHlsZToge1xyXG4gICAgICAgIGZvbnRGYW1pbHk6IGNvbG9yc1tcImVkaXRvci1mb250LWZhbWlseVwiIC8qIEVkaXRvckZvbnRGYW1pbHkgKi9dLFxyXG4gICAgICAgIGZvbnRTaXplOiBjb2xvcnNbXCJlZGl0b3ItZm9udC1zaXplXCIgLyogRWRpdG9yRm9udFNpemUgKi9dLFxyXG4gICAgICAgIGZvbnRXZWlnaHQ6IGNvbG9yc1tcImVkaXRvci1mb250LXdlaWdodFwiIC8qIEVkaXRvckZvbnRXZWlnaHQgKi9dLFxyXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgICAgb3ZlcmZsb3dYOiAnYXV0bycsXHJcbiAgICAgICAgbGluZUhlaWdodDogJzEuNWVtJ1xyXG4gICAgfSB9LCBlcnJvci5zcGxpdCgnXFxuJykubWFwKChsaW5lLCBpKSA9PiAoaChcImNvZGVcIiwgeyBrZXk6IGksIHN0eWxlOiB7XHJcbiAgICAgICAgcGFkZGluZzogJzAuMWVtIDAuM2VtJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBpICUgMiA/ICdyZ2JhKDAsIDAsIDAsIDAuMiknIDogJ25vbmUnLFxyXG4gICAgICAgIGRpc3BsYXk6ICd0YWJsZS1yb3cnLFxyXG4gICAgICAgIHdoaXRlc3BhY2U6ICduby13cmFwJyxcclxuICAgIH0gfSwgbGluZSkpKSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD11aS5qcy5tYXAiLCIvKipcclxuICogUGFyc2VzIHRoZSB2c2NvZGUgQ1NTIHZhcmlhYmxlcyBmcm9tIHRoZSBkb2N1bWVudCwgYW5kIHJldHVybnMgdGhlbS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBwYXJzZUNvbG9ycyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHJhd1ZhcnMgPSBTdHJpbmcoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnc3R5bGUnKSk7XHJcbiAgICBjb25zdCByZSA9IG5ldyBSZWdFeHAoJy0tdnNjb2RlLSguKj8pOiguKj8pKDt8JCknLCAnZycpO1xyXG4gICAgY29uc3QgdmFycyA9IHt9O1xyXG4gICAgbGV0IG1hdGNoO1xyXG4gICAgd2hpbGUgKChtYXRjaCA9IHJlLmV4ZWMocmF3VmFycykpICE9PSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgWywga2V5LCB2YWx1ZV0gPSBtYXRjaDtcclxuICAgICAgICB2YXJzW2tleV0gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YXJzO1xyXG59O1xyXG4vKipcclxuICogV2F0Y2hlcyB0aGUgYm9keSBhbmQgY2FsbHMgdGhlIGNhbGxiYWNrIGZ1bmN0aW9uIHdoZW4gdGhlIGNvbG9ycyBjaGFuZ2UuXHJcbiAqIFRoaXMgY2FuIHZlcnkgZWFzaWx5IGJlIHdyYXBwZWQgaW50byBhIHJlYWN0IG9yIHByZWFjdCBob29rLCBmb3IgZXhhbXBsZTpcclxuICpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdwcmVhY3QvaG9va3MnO1xyXG4gKlxyXG4gKiBjb25zdCB1c2VDc3NWYXJpYWJsZXMgPSAoKSA9PiB7XHJcbiAqICAgY29uc3QgW3ZhcnMsIHNldFZhcnNdID0gdXNlU3RhdGU8eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfT4oe30pO1xyXG4gKiAgIHVzZUVmZmVjdCgoKSA9PiBvYnNlcnZlQ29sb3JzKHNldFZhcnMpLCBbXSk7XHJcbiAqICAgcmV0dXJuIHZhcnM7XHJcbiAqIH1cclxuICogYGBgXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb2JzZXJ2ZUNvbG9ycyA9IChvbkNoYW5nZSkgPT4ge1xyXG4gICAgb25DaGFuZ2UocGFyc2VDb2xvcnMoKSk7XHJcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpID0+IHtcclxuICAgICAgICBvbkNoYW5nZShwYXJzZUNvbG9ycygpKTtcclxuICAgIH0pO1xyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHtcclxuICAgICAgICBhdHRyaWJ1dGVGaWx0ZXI6IFsnc3R5bGUnXSxcclxuICAgICAgICBjaGlsZExpc3Q6IGZhbHNlLFxyXG4gICAgICAgIHN1YnRyZWU6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1jb2xvcnMuanMubWFwIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAnLi9yZW5kZXInO1xuaW1wb3J0IGVycm9yT3ZlcmxheSBmcm9tICd2c2NvZGUtbm90ZWJvb2stZXJyb3Itb3ZlcmxheSc7XG5pbXBvcnQgdHlwZSB7IEFjdGl2YXRpb25GdW5jdGlvbiB9IGZyb20gJ3ZzY29kZS1ub3RlYm9vay1yZW5kZXJlcic7XG5cbi8vIEZpeCB0aGUgcHVibGljIHBhdGggc28gdGhhdCBhbnkgYXN5bmMgaW1wb3J0KCkncyB3b3JrIGFzIGV4cGVjdGVkLlxuZGVjbGFyZSBjb25zdCBfX3dlYnBhY2tfcmVsYXRpdmVfZW50cnlwb2ludF90b19yb290X186IHN0cmluZztcbmRlY2xhcmUgY29uc3Qgc2NyaXB0VXJsOiBzdHJpbmc7XG5cbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gbmV3IFVSTChzY3JpcHRVcmwucmVwbGFjZSgvW14vXSskLywgJycpICsgX193ZWJwYWNrX3JlbGF0aXZlX2VudHJ5cG9pbnRfdG9fcm9vdF9fKS50b1N0cmluZygpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBUaGlzIGlzIHRoZSBlbnRyeXBvaW50IHRvIHRoZSBub3RlYm9vayByZW5kZXJlcidzIHdlYnZpZXcgY2xpZW50LXNpZGUgY29kZS5cbi8vIFRoaXMgY29udGFpbnMgc29tZSBib2lsZXJwbGF0ZSB0aGF0IGNhbGxzIHRoZSBgcmVuZGVyKClgIGZ1bmN0aW9uIHdoZW4gbmV3XG4vLyBvdXRwdXQgaXMgYXZhaWxhYmxlLiBZb3UgcHJvYmFibHkgZG9uJ3QgbmVlZCB0byBjaGFuZ2UgdGhpcyBjb2RlOyBwdXQgeW91clxuLy8gcmVuZGVyaW5nIGxvZ2ljIGluc2lkZSBvZiB0aGUgYHJlbmRlcigpYCBmdW5jdGlvbi5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlOiBBY3RpdmF0aW9uRnVuY3Rpb24gPSBjb250ZXh0ID0+IHtcbiAgcmV0dXJuIHtcbiAgICByZW5kZXJPdXRwdXRJdGVtKG91dHB1dEl0ZW0sIGVsZW1lbnQpIHtcbiAgICAgIGxldCBzaGFkb3cgPSBlbGVtZW50LnNoYWRvd1Jvb3Q7XG4gICAgICBpZiAoIXNoYWRvdykge1xuICAgICAgICBzaGFkb3cgPSBlbGVtZW50LmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByb290LmlkID0gJ3Jvb3QnO1xuICAgICAgICBzaGFkb3cuYXBwZW5kKHJvb3QpO1xuICAgICAgfVxuICAgICAgY29uc3Qgcm9vdCA9IHNoYWRvdy5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50PignI3Jvb3QnKSE7XG4gICAgICBlcnJvck92ZXJsYXkud3JhcChyb290LCAoKSA9PiB7XG4gICAgICAgIHJvb3QuaW5uZXJIVE1MID0gJyc7XG4gICAgICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcm9vdC5hcHBlbmRDaGlsZChub2RlKTtcblxuICAgICAgICByZW5kZXIoeyBjb250YWluZXI6IG5vZGUsIG1pbWU6IG91dHB1dEl0ZW0ubWltZSwgdmFsdWU6IG91dHB1dEl0ZW0uanNvbigpLCBjb250ZXh0IH0pO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkaXNwb3NlT3V0cHV0SXRlbShvdXRwdXRJZCkge1xuICAgICAgLy8gRG8gYW55IHRlYXJkb3duIGhlcmUuIG91dHB1dElkIGlzIHRoZSBjZWxsIG91dHB1dCBiZWluZyBkZWxldGVkLCBvclxuICAgICAgLy8gdW5kZWZpbmVkIGlmIHdlJ3JlIGNsZWFyaW5nIGFsbCBvdXRwdXRzLlxuICAgIH1cbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9