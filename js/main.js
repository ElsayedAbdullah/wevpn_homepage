!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";function g(e){return null!=e&&e===e.window}var t=[],E=C.document,n=Object.getPrototypeOf,s=t.slice,y=t.concat,u=t.push,i=t.indexOf,r={},o=r.toString,m=r.hasOwnProperty,a=m.toString,l=a.call(Object),v={},x=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function h(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?r[o.call(e)]||"object":typeof e}var f="3.4.1",S=function(e,t){return new S.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=h(e);return!x(e)&&!g(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){e=S.merge(this.constructor(),e);return e.prevObject=this,e},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,e=+e+(e<0?t:0);return this.pushStack(0<=e&&e<t?[this[e]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o=arguments[0]||{},a=1,s=arguments.length,u=!1;for("boolean"==typeof o&&(u=o,o=arguments[a]||{},a++),"object"==typeof o||x(o)||(o={}),a===s&&(o=this,a--);a<s;a++)if(null!=(e=arguments[a]))for(t in e)n=e[t],"__proto__"!==t&&o!==n&&(u&&n&&(S.isPlainObject(n)||(r=Array.isArray(n)))?(i=o[t],i=r&&!Array.isArray(i)?[]:r||S.isPlainObject(i)?i:{},r=!1,o[t]=S.extend(u,i,n)):void 0!==n&&(o[t]=n));return o},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){return!(!e||"[object Object]"!==o.call(e)||(e=n(e))&&("function"!=typeof(e=m.call(e,"constructor")&&e.constructor)||a.call(e)!==l))},isEmptyObject:function(e){for(var t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){t=t||[];return null!=e&&(d(Object(e))?S.merge(t,"string"==typeof e?[e]:e):u.call(t,e)),t},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!=a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return y.apply([],a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){r["[object "+t+"]"]=t.toLowerCase()});var w=function(n){function f(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(65536+r):String.fromCharCode(r>>10|55296,1023&r|56320)}function r(){T()}var e,d,b,o,i,h,p,g,w,u,l,T,C,a,E,y,s,c,m,S="sizzle"+ +new Date,v=n.document,k=0,x=0,N=ue(),A=ue(),D=ue(),j=ue(),q=function(e,t){return e===t&&(l=!0),0},L={}.hasOwnProperty,t=[],H=t.pop,O=t.push,P=t.push,R=t.slice,M=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},I="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",W="[\\x20\\t\\r\\n\\f]",$="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",F="\\["+W+"*("+$+")(?:"+W+"*([*^$|!~]?=)"+W+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+$+"))|)"+W+"*\\]",B=":("+$+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+F+")*)|.*)\\)|)",_=new RegExp(W+"+","g"),z=new RegExp("^"+W+"+|((?:^|[^\\\\])(?:\\\\.)*)"+W+"+$","g"),U=new RegExp("^"+W+"*,"+W+"*"),X=new RegExp("^"+W+"*([>+~]|"+W+")"+W+"*"),V=new RegExp(W+"|>"),G=new RegExp(B),Y=new RegExp("^"+$+"$"),Q={ID:new RegExp("^#("+$+")"),CLASS:new RegExp("^\\.("+$+")"),TAG:new RegExp("^("+$+"|[*])"),ATTR:new RegExp("^"+F),PSEUDO:new RegExp("^"+B),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+W+"*(even|odd|(([+-]|)(\\d*)n|)"+W+"*(?:([+-]|)"+W+"*(\\d+)|))"+W+"*\\)|)","i"),bool:new RegExp("^(?:"+I+")$","i"),needsContext:new RegExp("^"+W+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+W+"*((?:-\\d)?\\d*)"+W+"*\\)|)(?=[^-]|$)","i")},J=/HTML$/i,K=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,ee=/^[^{]+\{\s*\[native \w/,te=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ne=/[+~]/,re=new RegExp("\\\\([\\da-f]{1,6}"+W+"?|("+W+")|.)","ig"),ie=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,oe=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},ae=ve(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{P.apply(t=R.call(v.childNodes),v.childNodes),t[v.childNodes.length].nodeType}catch(e){P={apply:t.length?function(e,t){O.apply(e,R.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function se(e,t,n,r){var i,o,a,s,u,l,c,f=t&&t.ownerDocument,p=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;if(!r&&((t?t.ownerDocument||t:v)!==C&&T(t),t=t||C,E)){if(11!==p&&(u=te.exec(e)))if(i=u[1]){if(9===p){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&m(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return P.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&d.getElementsByClassName&&t.getElementsByClassName)return P.apply(n,t.getElementsByClassName(i)),n}if(d.qsa&&!j[e+" "]&&(!y||!y.test(e))&&(1!==p||"object"!==t.nodeName.toLowerCase())){if(c=e,f=t,1===p&&V.test(e)){for((s=t.getAttribute("id"))?s=s.replace(ie,oe):t.setAttribute("id",s=S),o=(l=h(e)).length;o--;)l[o]="#"+s+" "+me(l[o]);c=l.join(","),f=ne.test(e)&&ge(t.parentNode)||t}try{return P.apply(n,f.querySelectorAll(c)),n}catch(t){j(e,!0)}finally{s===S&&t.removeAttribute("id")}}}return g(e.replace(z,"$1"),t,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){for(var n=e.split("|"),r=n.length;r--;)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function he(a){return le(function(o){return o=+o,le(function(e,t){for(var n,r=a([],e.length,o),i=r.length;i--;)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ge(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,e=(e.ownerDocument||e).documentElement;return!J.test(t||e&&e.nodeName||"HTML")},T=se.setDocument=function(e){var t,e=e?e.ownerDocument||e:v;return e!==C&&9===e.nodeType&&e.documentElement&&(a=(C=e).documentElement,E=!i(C),v!==C&&(t=C.defaultView)&&t.top!==t&&(t.addEventListener?t.addEventListener("unload",r,!1):t.attachEvent&&t.attachEvent("onunload",r)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=ee.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(re,f);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){e=t.getElementById(e);return e?[e]:[]}}):(b.filter.ID=function(e){var t=e.replace(re,f);return function(e){e=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return e&&e.value===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"!==e)return o;for(;n=o[i++];)1===n.nodeType&&r.push(n);return r},b.find.CLASS=d.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=ee.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+W+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+W+"*(?:value|"+I+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+W+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=ee.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",B)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=ee.test(a.compareDocumentPosition),m=t||ee.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,t=t&&t.parentNode;return e===t||!(!t||1!==t.nodeType||!(n.contains?n.contains(t):e.compareDocumentPosition&&16&e.compareDocumentPosition(t)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},q=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===v&&m(v,e)?-1:t===C||t.ownerDocument===v&&m(v,t)?1:u?M(u,e)-M(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?M(u,e)-M(u,t):0;if(i===o)return pe(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);for(;a[r]===s[r];)r++;return r?pe(a[r],s[r]):a[r]===v?-1:s[r]===v?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!j[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){j(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),m(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],n=n&&L.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==n?n:d.attributes||!E?e.getAttribute(t):(n=e.getAttributeNode(t))&&n.specified?n.value:null},se.escape=function(e){return(e+"").replace(ie,oe)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(q),l){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(re,f),e[3]=(e[3]||e[4]||e[5]||"").replace(re,f),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&G.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(re,f).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=new RegExp("(^|"+W+")"+e+"("+W+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(t,n,r){return function(e){e=se.attr(e,t);return null==e?"!="===n:!n||(e+="","="===n?e===r:"!="===n?e!==r:"^="===n?r&&0===e.indexOf(r):"*="===n?r&&-1<e.indexOf(r):"$="===n?r&&e.slice(-r.length)===r:"~="===n?-1<(" "+e.replace(_," ")+" ").indexOf(r):"|="===n&&(e===r||e.slice(0,r.length+1)===r+"-"))}},CHILD:function(h,e,t,g,y){var m="nth"!==h.slice(0,3),v="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=m!=v?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(m){for(;l;){for(a=e;a=a[l];)if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[v?c.firstChild:c.lastChild],v&&p){for(d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];a=++s&&a&&a[l]||(d=s=0)||u.pop();)if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(!1===(d=p?s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]:d))for(;(a=++s&&a&&a[l]||(d=s=0)||u.pop())&&((x?a.nodeName.toLowerCase()!==f:1!==a.nodeType)||!++d||(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a!==e)););return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){for(var n,r=a(e,o),i=r.length;i--;)e[n=M(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=p(e.replace(z,"$1"));return s[S]?le(function(e,t,n,r){for(var i,o=s(e,null,r,[]),a=e.length;a--;)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(re,f),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return Y.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(re,f).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return Z.test(e.nodeName)},input:function(e){return K.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(e=e.getAttribute("type"))||"text"===e.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function ye(){}function me(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function ve(a,e,t){var s=e.dir,u=e.next,l=u||s,c=t&&"parentNode"===l,f=x++;return e.first?function(e,t,n){for(;e=e[s];)if(1===e.nodeType||c)return a(e,t,n);return!1}:function(e,t,n){var r,i,o=[k,f];if(n){for(;e=e[s];)if((1===e.nodeType||c)&&a(e,t,n))return!0}else for(;e=e[s];)if(1===e.nodeType||c)if(r=(i=e[S]||(e[S]={}))[e.uniqueID]||(i[e.uniqueID]={}),u&&u===e.nodeName.toLowerCase())e=e[s]||e;else{if((i=r[l])&&i[0]===k&&i[1]===f)return o[2]=i[2];if((r[l]=o)[2]=a(e,t,n))return!0}return!1}}function xe(i){return 1<i.length?function(e,t,n){for(var r=i.length;r--;)if(!i[r](e,t,n))return!1;return!0}:i[0]}function be(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function we(e){for(var r,t,n,i=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=ve(function(e){return e===r},a,!0),l=ve(function(e){return-1<M(r,e)},a,!0),c=[function(e,t,n){n=!o&&(n||t!==w)||((r=t).nodeType?u:l)(e,t,n);return r=null,n}];s<i;s++)if(t=b.relative[e[s].type])c=[ve(xe(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<i&&!b.relative[e[n].type];n++);return function e(d,h,g,y,m,t){return y&&!y[S]&&(y=e(y)),m&&!m[S]&&(m=e(m,t)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:be(c,s,d,n,r),p=g?m||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y)for(i=be(p,u),y(i,[],n,r),o=i.length;o--;)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a));if(e){if(m||d){if(m){for(i=[],o=p.length;o--;)(a=p[o])&&i.push(f[o]=a);m(null,p=[],i,r)}for(o=p.length;o--;)(a=p[o])&&-1<(i=m?M(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=be(p===t?p.splice(l,p.length):p),m?m(null,t,p,r):P.apply(t,p)})}(1<s&&xe(c),1<s&&me(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(z,"$1"),t,s<n&&we(e.slice(s,n)),n<i&&we(e=e.slice(n)),n<i&&me(e))}c.push(t)}return xe(c)}return ye.prototype=b.filters=b.pseudos,b.setFilters=new ye,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=A[e+" "];if(l)return t?0:l.slice(0);for(a=e,s=[],u=b.preFilter;a;){for(o in n&&!(r=U.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length)),b.filter)!(r=Q[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):A(e,s).slice(0)},p=se.compile=function(e,t){var n,y,m,v,x,r,i=[],o=[],a=D[e+" "];if(!a){for(n=(t=t||h(e)).length;n--;)((a=we(t[n]))[S]?i:o).push(a);(a=D(e,(y=o,v=0<(m=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){for(a=0,t||o.ownerDocument===C||(T(o),n=!E);s=y[a++];)if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}v&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,v&&l!==u){for(a=0;s=m[a++];)s(c,f,t,n);if(e){if(0<u)for(;l--;)c[l]||f[l]||(f[l]=H.call(r));f=be(f)}P.apply(r,f),i&&!e&&0<f.length&&1<u+m.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},v?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(re,f),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=Q.needsContext.test(e)?0:o.length;i--&&(a=o[i],!b.relative[s=a.type]);)if((u=b.find[s])&&(r=u(a.matches[0].replace(re,f),ne.test(o[0].type)&&ge(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&me(o)))return P.apply(n,r),n;break}}return(l||p(e,c))(r,t,!E,n,!t||ne.test(e)&&ge(t.parentNode)||t),n},d.sortStable=S.split("").sort(q).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(I,function(e,t,n){if(!n)return!0===e[t]?t.toLowerCase():(t=e.getAttributeNode(t))&&t.specified?t.value:null}),se}(C);S.find=w,S.expr=w.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=w.uniqueSort,S.text=w.getText,S.isXMLDoc=w.isXML,S.contains=w.contains,S.escapeSelector=w.escape;function T(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r}function k(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}var N=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return x(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?S(e):e||[],!1).length}});var q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){if(!e)return this;if(n=n||L,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):x(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this);if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return(!t||t.jquery?t||n:this.constructor(t)).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&S.isPlainObject(t))for(var r in t)x(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(e=E.getElementById(r[2]))&&(this[0]=e,this.length=1),this}).prototype=S.fn;var L=S(E),H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){e=e.parentNode;return e&&11!==e.nodeType?e:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return k((e.parentNode||{}).firstChild,e)},children:function(e){return k(e.firstChild)},contents:function(e){return void 0!==e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return(t="Until"!==r.slice(-5)?e:t)&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(O[r]||S.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&x(i=e.promise)?i.call(e).done(t).fail(n):e&&x(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var n;r="string"==typeof r?(n={},S.each(r.match(R)||[],function(e,t){n[t]=!0}),n):S.extend({},r);function i(){for(a=a||r.once,t=o=!0;u.length;l=-1)for(e=u.shift();++l<s.length;)!1===s[l].apply(e[0],e[1])&&r.stopOnFalse&&(l=s.length,e=!1);r.memory||(e=!1),o=!1,a&&(s=e?[]:"")}var o,e,t,a,s=[],u=[],l=-1,c={add:function(){return s&&(e&&!o&&(l=s.length-1,u.push(e)),function n(e){S.each(e,function(e,t){x(t)?r.unique&&c.has(t)||s.push(t):t&&t.length&&"string"!==h(t)&&n(t)})}(arguments),e&&!o&&i()),this},remove:function(){return S.each(arguments,function(e,t){for(var n;-1<(n=S.inArray(t,s,n));)s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s=s&&[],this},disable:function(){return a=u=[],s=e="",this},disabled:function(){return!s},lock:function(){return a=u=[],e||o||(s=e=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),o||i()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!t}};return c},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},catch:function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=x(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&x(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){function e(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,x(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}}var n=this,r=arguments,t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,x(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,x(t)?t:M)),o[2][3].add(l(0,e,x(n)?n:I))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){function t(t){return function(e){i[t]=this,o[t]=1<arguments.length?s.call(arguments):e,--n||a.resolveWith(i,o)}}var n=arguments.length,r=n,i=Array(r),o=s.call(arguments),a=S.Deferred();if(n<=1&&(W(e,a.done(t(r)).resolve,a.reject,!n),"pending"===a.state()||x(o[r]&&o[r].then)))return a.then();for(;r--;)W(o[r],t(r),a.reject);return a.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e).catch(function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===h(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,x(r)||(a=!0),t=l?a?(t.call(e,r),null):(l=t,function(e,t,n){return l.call(S(e),n)}):t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}function G(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}function Y(){this.expando=S.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;for(;n--;)delete r[t[n]]}void 0!==t&&!S.isEmptyObject(r)||(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){e=e[this.expando];return void 0!==e&&!S.isEmptyObject(e)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0!==n)return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;return o&&void 0===e?void 0!==(t=J.get(o,n))||void 0!==(t=ee(o,n))?t:void 0:void this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){for(t=a.length;t--;)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:S.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){function n(){--i||o.resolveWith(a,[a])}var r,i=1,o=S.Deferred(),a=this,s=this.length;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(r=Q.get(a[s],e+"queueHooks"))&&r.empty&&(i++,r.empty.add(n));return n(),o.promise(t)}});var f=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+f+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});function ae(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")}function se(e,t,n,r){var i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.apply(e,r||[]),t)e.style[i]=o[i];return r}function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;a--;)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e,t){for(var n,r,i,o,a,s,u=[],l=0,c=e.length;l<c;l++)(r=e[l]).style&&(n=r.style.display,t?("none"===n&&(u[l]=Q.get(r,"display")||null,u[l]||(r.style.display="")),""===r.style.display&&ae(r)&&(u[l]=(s=o=i=void 0,o=r.ownerDocument,a=r.nodeName,(s=le[a])||(i=o.body.appendChild(o.createElement(a)),s=S.css(i,"display"),i.parentNode.removeChild(i),"none"===s&&(s="block"),le[a]=s)))):"none"!==n&&(u[l]="none",Q.set(r,"display",n)));for(l=0;l<c;l++)null!=u[l]&&(e[l].style.display=u[l]);return e}S.fn.extend({show:function(){return ce(this,!0)},hide:function(){return ce(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var fe=/^(?:checkbox|radio)$/i,pe=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,de=/^$|^module$|\/(?:java|ecma)script/i,he={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ge(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}he.optgroup=he.option,he.tbody=he.tfoot=he.colgroup=he.caption=he.thead,he.th=he.td;var me=/<|&#?\w+;/;function ve(e,t,n,r,i){for(var o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;p<d;p++)if((o=e[p])||0===o)if("object"===h(o))S.merge(f,o.nodeType?[o]:o);else if(me.test(o)){for(a=a||c.appendChild(t.createElement("div")),s=(pe.exec(o)||["",""])[1].toLowerCase(),s=he[s]||he._default,a.innerHTML=s[1]+S.htmlPrefilter(o)+s[2],l=s[0];l--;)a=a.lastChild;S.merge(f,a.childNodes),(a=c.firstChild).textContent=""}else f.push(t.createTextNode(o));for(c.textContent="",p=0;o=f[p++];)if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(u=ie(o),a=ge(c.appendChild(o),"script"),u&&ye(a),n)for(l=0;o=a[l++];)de.test(o.type||"")&&n.push(o);return c}t=E.createDocumentFragment().appendChild(E.createElement("div")),(w=E.createElement("input")).setAttribute("type","radio"),w.setAttribute("checked","checked"),w.setAttribute("name","t"),t.appendChild(w),v.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue;var xe=/^key/,be=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,we=/^([^.]*)(?:\.(.+)|)/;function Te(){return!0}function Ce(){return!1}function Ee(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Se(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Se(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Ce;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function ke(e,i,o){o?(Q.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&S.event.add(e,i,Te)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h=Q.get(t);if(h)for(n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(s=h.events)||(s=h.events={}),(a=h.handle)||(a=h.handle=function(e){return void 0!==S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),u=(e=(e||"").match(R)||[""]).length;u--;)f=d=(l=we.exec(e[u])||[])[1],p=(l[2]||"").split(".").sort(),f&&(c=S.event.special[f]||{},f=(i?c.delegateType:c.bindType)||f,c=S.event.special[f]||{},l=S.extend({type:f,origType:d,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:p.join(".")},o),(d=s[f])||((d=s[f]=[]).delegateCount=0,c.setup&&!1!==c.setup.call(t,r,p,a)||t.addEventListener&&t.addEventListener(f,a)),c.add&&(c.add.call(t,l),l.handler.guid||(l.handler.guid=n.guid)),i?d.splice(d.delegateCount++,0,l):d.push(l),S.event.global[f]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Q.hasData(e)&&Q.get(e);if(y&&(u=y.events)){for(l=(t=(t||"").match(R)||[""]).length;l--;)if(d=g=(s=we.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){for(f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a=S.event.fix(e),s=new Array(arguments.length),u=(Q.get(this,"events")||{})[a.type]||[],e=S.event.special[a.type]||{};for(s[0]=a,t=1;t<arguments.length;t++)s[t]=arguments[t];if(a.delegateTarget=this,!e.preDispatch||!1!==e.preDispatch.call(this,a)){for(o=S.event.handlers.call(this,a,u),t=0;(r=o[t++])&&!a.isPropagationStopped();)for(a.currentTarget=r.elem,n=0;(i=r.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!1!==i.namespace&&!a.rnamespace.test(i.namespace)||(a.handleObj=i,a.data=i.data,void 0!==(i=((S.event.special[i.origType]||{}).handle||i.handler).apply(r.elem,s))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));return e.postDispatch&&e.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:x(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){e=this||e;return fe.test(e.type)&&e.click&&A(e,"input")&&ke(e,"click",Te),!1},trigger:function(e){e=this||e;return fe.test(e.type)&&e.click&&A(e,"input")&&ke(e,"click"),!0},_default:function(e){e=e.target;return fe.test(e.type)&&e.click&&A(e,"input")&&Q.get(e,"click")||A(e,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Te:Ce,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Ce,isPropagationStopped:Ce,isImmediatePropagationStopped:Ce,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Te,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Te,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Te,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&xe.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&be.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return ke(this,e,Ee),!1},trigger:function(){return ke(this,e),!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Se(this,e,t,n,r)},one:function(e,t,n,r){return Se(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Ce),this.each(function(){S.event.remove(this,e,n,t)});for(i in e)this.off(i,t,e[i]);return this}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,De=/checked\s*(?:[^=]|=\s*.checked.)/i,je=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function qe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function Le(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function He(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Oe(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),s=o.events))for(i in delete a.handle,a.events={},s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);J.hasData(e)&&(e=J.access(e),e=S.extend({},e),J.set(t,e))}}function Pe(n,r,i,o){r=y.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=x(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&De.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Pe(t,r,i,o)});if(f&&(t=(e=ve(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ge(e,"script"),Le)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ge(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,He),c=0;c<s;c++)u=a[c],de.test(u.type||"")&&!Q.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(je,""),u,l))}return n}function Re(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ge(r)),r.parentNode&&(n&&ie(r)&&ye(ge(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ge(c),r=0,i=(o=ge(e)).length;r<i;r++)s=o[r],"input"===(l=(u=a[r]).nodeName.toLowerCase())&&fe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ge(e),a=a||ge(c),r=0,i=o.length;r<i;r++)Oe(o[r],a[r]);else Oe(e,c);return 0<(a=ge(c,"script")).length&&ye(a,!f&&ge(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Re(this,e,!0)},remove:function(e){return Re(this,e)},text:function(e){return _(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Pe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||qe(this,e).appendChild(e)})},prepend:function(){return Pe(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=qe(this,e)).insertBefore(e,t.firstChild)})},before:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Pe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ge(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!he[(pe.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ge(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Pe(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ge(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Me,Ie,We,$e,Fe,Be,_e,ze=new RegExp("^("+f+")(?!px)[a-z%]+$","i"),Ue=function(e){var t=e.ownerDocument.defaultView;return(t=!t||!t.opener?C:t).getComputedStyle(e)},Xe=new RegExp(ne.join("|"),"i");function Ve(e,t,n){var r,i,o=e.style;return(n=n||Ue(e))&&(""!==(i=n.getPropertyValue(t)||n[t])||ie(e)||(i=S.style(e,t)),!v.pixelBoxStyles()&&ze.test(i)&&Xe.test(t)&&(r=o.width,e=o.minWidth,t=o.maxWidth,o.minWidth=o.maxWidth=o.width=i,i=n.width,o.width=r,o.minWidth=e,o.maxWidth=t)),void 0!==i?i+"":i}function Ge(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function Ye(){var e;_e&&(Be.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",_e.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(Be).appendChild(_e),e=C.getComputedStyle(_e),Me="1%"!==e.top,Fe=12===Qe(e.marginLeft),_e.style.right="60%",$e=36===Qe(e.right),Ie=36===Qe(e.width),_e.style.position="absolute",We=12===Qe(_e.offsetWidth/3),re.removeChild(Be),_e=null)}function Qe(e){return Math.round(parseFloat(e))}Be=E.createElement("div"),(_e=E.createElement("div")).style&&(_e.style.backgroundClip="content-box",_e.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===_e.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return Ye(),Ie},pixelBoxStyles:function(){return Ye(),$e},pixelPosition:function(){return Ye(),Me},reliableMarginLeft:function(){return Ye(),Fe},scrollboxSize:function(){return Ye(),We}}));var Je=["Webkit","Moz","ms"],Ke=E.createElement("div").style,Ze={};function et(e){return S.cssProps[e]||Ze[e]||(e in Ke?e:Ze[e]=function(e){for(var t=e[0].toUpperCase()+e.slice(1),n=Je.length;n--;)if((e=Je[n]+t)in Ke)return e}(e)||e)}var tt=/^(none|table(?!-c[ea]).+)/,nt=/^--/,rt={position:"absolute",visibility:"hidden",display:"block"},it={letterSpacing:"0",fontWeight:"400"};function ot(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function at(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function st(e,t,n){var r=Ue(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Ve(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(ze.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+at(e,t,n||(i?"border":"content"),o,r,a)+"px"}function ut(e,t,n,r,i){return new ut.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){e=Ve(e,"opacity");return""===e?"1":e}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=nt.test(t),l=e.style;if(u||(t=et(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o=V(t);return nt.test(t)||(t=et(o)),"normal"===(i=void 0===(i=(o=S.cssHooks[t]||S.cssHooks[o])&&"get"in o?o.get(e,!0,n):i)?Ve(e,t,r):i)&&t in it&&(i=it[t]),""===n||n?(t=parseFloat(i),!0===n||isFinite(t)?t||0:i):i}}),S.each(["height","width"],function(e,s){S.cssHooks[s]={get:function(e,t,n){if(t)return!tt.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?st(e,s,n):se(e,rt,function(){return st(e,s,n)})},set:function(e,t,n){var r,i=Ue(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),n=n?at(e,s,n,a,i):0;return a&&o&&(n-=Math.ceil(e["offset"+s[0].toUpperCase()+s.slice(1)]-parseFloat(i[s])-at(e,s,"border",!1,i)-.5)),n&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[s]=t,t=S.css(e,s)),ot(0,t,n)}}}),S.cssHooks.marginLeft=Ge(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ve(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=ot)}),S.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Ue(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=ut).prototype={constructor:ut,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=ut.propHooks[this.prop];return(e&&e.get?e:ut.propHooks._default).get(this)},run:function(e){var t,n=ut.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),(n&&n.set?n:ut.propHooks._default).set(this),this}}).init.prototype=ut.prototype,(ut.propHooks={_default:{get:function(e){return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(e=S.css(e.elem,e.prop,""))&&"auto"!==e?e:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[et(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=ut.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=ut.prototype.init,S.fx.step={};var lt,ct,ft=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function dt(){ct&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(dt):C.setTimeout(dt,S.fx.interval),S.fx.tick())}function ht(){return C.setTimeout(function(){lt=void 0}),lt=Date.now()}function gt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function yt(e,t,n){for(var r,i=(mt.tweeners[t]||[]).concat(mt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function mt(i,e,t){var n,o,r=0,a=mt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(o)return!1;for(var e=lt||ht(),e=Math.max(0,l.startTime+l.duration-e),t=1-(e/l.duration||0),n=0,r=l.tweens.length;n<r;n++)l.tweens[n].run(t);return s.notifyWith(i,[l,t,e]),t<1&&r?e:(r||s.notifyWith(i,[l,1,0]),s.resolveWith(i,[l]),!1)},l=s.promise({elem:i,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:lt||ht(),duration:t.duration,tweens:[],createTween:function(e,t){e=S.Tween(i,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(e),e},stop:function(e){var t=0,n=e?l.tweens.length:0;if(o)return this;for(o=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(i,[l,1,0]),s.resolveWith(i,[l,e])):s.rejectWith(i,[l,e]),this}}),c=l.props;for(function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<a;r++)if(n=mt.prefilters[r].call(l,i,c,l.opts))return x(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,yt,l),x(l.opts.start)&&l.opts.start.call(i,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:i,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(mt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){for(var n,r=0,i=(e=x(e)?(t=e,["*"]):e.match(R)).length;r<i;r++)n=e[r],mt.tweeners[n]=mt.tweeners[n]||[],mt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c="width"in t||"height"in t,f=this,p={},d=e.style,h=e.nodeType&&ae(e),g=Q.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ft.test(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(p))for(r in c&&1===e.nodeType&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],null==(l=g&&g.display)&&(l=Q.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(ce([e],!0),l=e.style.display||l,c=S.css(e,"display"),ce([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(f.done(function(){d.display=l}),null==l&&(c=d.display,l="none"===c?"":c)),d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]})),u=!1,p)u||(g?"hidden"in g&&(h=g.hidden):g=Q.access(e,"fxshow",{display:l}),o&&(g.hidden=!h),h&&ce([e],!0),f.done(function(){for(r in h||ce([e]),Q.remove(e,"fxshow"),p)S.style(e,r,p[r])})),u=yt(h?g[r]:0,r,f),r in g||(g[r]=u.start,h&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?mt.prefilters.unshift(e):mt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||x(e)&&e,duration:e,easing:n&&t||t&&!x(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){x(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),r=function(){var e=mt(this,S.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return r.finish=r,i||!1===o.queue?this.each(r):this.queue(o.queue,r)},stop:function(i,e,o){function a(e){var t=e.stop;delete e.stop,t(o)}return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&pt.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(gt(r,!0),e,t,n)}}),S.each({slideDown:gt("show"),slideUp:gt("hide"),slideToggle:gt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(lt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),lt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){ct||(ct=!0,dt())},S.fx.stop=function(){ct=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},t=E.createElement("input"),f=E.createElement("select").appendChild(E.createElement("option")),t.type="checkbox",v.checkOn=""!==t.value,v.optSelected=f.selected,(t=E.createElement("input")).value="t",t.type="radio",v.radioValue="t"===t.value;var vt,xt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return _(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?vt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):!(i&&"get"in i&&null!==(r=i.get(e,t)))&&null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),vt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=xt[t]||S.find.attr;xt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=xt[o],xt[o]=r,r=null!=a(e,t,n)?o:null,xt[o]=i),r}});var bt=/^(?:input|select|textarea|button)$/i,wt=/^(?:a|area)$/i;function Tt(e){return(e.match(R)||[]).join(" ")}function Ct(e){return e.getAttribute&&e.getAttribute("class")||""}function Et(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}S.fn.extend({prop:function(e,t){return _(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||wt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){e=e.parentNode;return e&&e.parentNode&&e.parentNode.selectedIndex,null},set:function(e){e=e.parentNode;e&&(e.selectedIndex,e.parentNode&&e.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s=0;if(x(t))return this.each(function(e){S(this).addClass(t.call(this,e,Ct(this)))});if((e=Et(t)).length)for(;n=this[s++];)if(a=Ct(n),r=1===n.nodeType&&" "+Tt(a)+" "){for(o=0;i=e[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a!==(a=Tt(r))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,r,i,o,a,s=0;if(x(t))return this.each(function(e){S(this).removeClass(t.call(this,e,Ct(this)))});if(!arguments.length)return this.attr("class","");if((e=Et(t)).length)for(;n=this[s++];)if(a=Ct(n),r=1===n.nodeType&&" "+Tt(a)+" "){for(o=0;i=e[o++];)for(;-1<r.indexOf(" "+i+" ");)r=r.replace(" "+i+" "," ");a!==(a=Tt(r))&&n.setAttribute("class",a)}return this},toggleClass:function(i,t){var o=typeof i,a="string"==o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):x(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,Ct(this),t),t)}):this.each(function(){var e,t,n,r;if(a)for(t=0,n=S(this),r=Et(i);e=r[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==i&&"boolean"!=o||((e=Ct(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==i&&Q.get(this,"__className__")||""))})},hasClass:function(e){for(var t,n=0,r=" "+e+" ";t=this[n++];)if(1===t.nodeType&&-1<(" "+Tt(Ct(t))+" ").indexOf(r))return!0;return!1}});var St=/\r/g;S.fn.extend({val:function(t){var n,e,r,i=this[0];return arguments.length?(r=x(t),this.each(function(e){1===this.nodeType&&(null==(e=r?t.call(this,e,S(this).val()):t)?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=S.map(e,function(e){return null==e?"":e+""})),(n=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in n&&void 0!==n.set(this,e,"value")||(this.value=e))})):i?(n=S.valHooks[i.type]||S.valHooks[i.nodeName.toLowerCase()])&&"get"in n&&void 0!==(e=n.get(i,"value"))?e:"string"==typeof(e=i.value)?e.replace(St,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:Tt(S.text(e))}},select:{get:function(e){for(var t,n=e.options,r=e.selectedIndex,i="select-one"===e.type,o=i?null:[],a=i?r+1:n.length,s=r<0?a:i?r:0;s<a;s++)if(((t=n[s]).selected||s===r)&&!t.disabled&&(!t.parentNode.disabled||!A(t.parentNode,"optgroup"))){if(t=S(t).val(),i)return t;o.push(t)}return o},set:function(e,t){for(var n,r,i=e.options,o=S.makeArray(t),a=i.length;a--;)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;function kt(e){e.stopPropagation()}var Nt=/^(?:focusinfocus|focusoutblur)$/;S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f=[n||E],p=m.call(e,"type")?e.type:e,d=m.call(e,"namespace")?e.namespace.split("."):[],h=c=o=n=n||E;if(3!==n.nodeType&&8!==n.nodeType&&!Nt.test(p+S.event.triggered)&&(-1<p.indexOf(".")&&(p=(d=p.split(".")).shift(),d.sort()),s=p.indexOf(":")<0&&"on"+p,(e=e[S.expando]?e:new S.Event(p,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=d.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),l=S.event.special[p]||{},r||!l.trigger||!1!==l.trigger.apply(n,t))){if(!r&&!l.noBubble&&!g(n)){for(a=l.delegateType||p,Nt.test(a+p)||(h=h.parentNode);h;h=h.parentNode)f.push(h),o=h;o===(n.ownerDocument||E)&&f.push(o.defaultView||o.parentWindow||C)}for(i=0;(h=f[i++])&&!e.isPropagationStopped();)c=h,e.type=1<i?a:l.bindType||p,(u=(Q.get(h,"events")||{})[e.type]&&Q.get(h,"handle"))&&u.apply(h,t),(u=s&&h[s])&&u.apply&&G(h)&&(e.result=u.apply(h,t),!1===e.result&&e.preventDefault());return e.type=p,r||e.isDefaultPrevented()||l._default&&!1!==l._default.apply(f.pop(),t)||!G(n)||s&&x(n[p])&&!g(n)&&((o=n[s])&&(n[s]=null),S.event.triggered=p,e.isPropagationStopped()&&c.addEventListener(p,kt),n[p](),e.isPropagationStopped()&&c.removeEventListener(p,kt),S.event.triggered=void 0,o&&(n[s]=o)),e.result}},simulate:function(e,t,n){e=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(e,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){function i(e){S.event.simulate(r,e.target,S.event.fix(e))}S.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var At=C.location,Dt=Date.now(),jt=/\?/;S.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||S.error("Invalid XML: "+e),t};var qt=/\[\]$/,Lt=/\r?\n/g,Ht=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;S.param=function(e,t){function n(e,t){t=x(t)?t():t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==t?"":t)}var r,i=[];if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){n(this.name,this.value)});else for(r in e)!function n(r,e,i,o){if(Array.isArray(e))S.each(e,function(e,t){i||qt.test(r)?o(r,t):n(r+"["+("object"==typeof t&&null!=t?e:"")+"]",t,i,o)});else if(i||"object"!==h(e))o(r,e);else for(var t in e)n(r+"["+t+"]",e[t],i,o)}(r,e[r],t,n);return i.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Ot.test(this.nodeName)&&!Ht.test(e)&&(this.checked||!fe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Lt,"\r\n")}}):{name:t.name,value:n.replace(Lt,"\r\n")}}).get()}});var Pt=/%20/g,Rt=/#.*$/,Mt=/([?&])_=[^&]*/,It=/^(.*?):[ \t]*([^\r\n]*)$/gm,Wt=/^(?:GET|HEAD)$/,$t=/^\/\//,Ft={},Bt={},_t="*/".concat("*"),zt=E.createElement("a");function Ut(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(x(t))for(;n=i[r++];)"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Xt(t,r,i,o){var a={},s=t===Bt;function u(e){var n;return a[e]=!0,S.each(t[e]||[],function(e,t){t=t(r,i,o);return"string"!=typeof t||s||a[t]?s?!(n=t):void 0:(r.dataTypes.unshift(t),u(t),!1)}),n}return u(r.dataTypes[0])||!a["*"]&&u("*")}function Vt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r=r||{})[n]=t[n]);return r&&S.extend(!0,e,r),e}zt.href=At.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:At.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(At.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":_t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Vt(Vt(e,S.ajaxSettings),t):Vt(S.ajaxSettings,e)},ajaxPrefilter:Ut(Ft),ajaxTransport:Ut(Bt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var u,l,c,n,f,r,p,d,i,o,h=S.ajaxSetup({},t),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?S(g):S.event,m=S.Deferred(),v=S.Callbacks("once memory"),x=h.statusCode||{},a={},s={},b="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(p){if(!n)for(n={};t=It.exec(c);)n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return p?c:null},setRequestHeader:function(e,t){return null==p&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==p&&(h.mimeType=e),this},statusCode:function(e){if(e)if(p)w.always(e[w.status]);else for(var t in e)x[t]=[x[t],e[t]];return this},abort:function(e){e=e||b;return u&&u.abort(e),T(0,e),this}};if(m.promise(w),h.url=((e||h.url||At.href)+"").replace($t,At.protocol+"//"),h.type=t.method||t.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(R)||[""],null==h.crossDomain){r=E.createElement("a");try{r.href=h.url,r.href=r.href,h.crossDomain=zt.protocol+"//"+zt.host!=r.protocol+"//"+r.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=S.param(h.data,h.traditional)),Xt(Ft,h,t,w),p)return w;for(i in(d=S.event&&h.global)&&0==S.active++&&S.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Wt.test(h.type),l=h.url.replace(Rt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Pt,"+")):(o=h.url.slice(l.length),h.data&&(h.processData||"string"==typeof h.data)&&(l+=(jt.test(l)?"&":"?")+h.data,delete h.data),!1===h.cache&&(l=l.replace(Mt,"$1"),o=(jt.test(l)?"&":"?")+"_="+Dt+++o),h.url=l+o),h.ifModified&&(S.lastModified[l]&&w.setRequestHeader("If-Modified-Since",S.lastModified[l]),S.etag[l]&&w.setRequestHeader("If-None-Match",S.etag[l])),(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&w.setRequestHeader("Content-Type",h.contentType),w.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+_t+"; q=0.01":""):h.accepts["*"]),h.headers)w.setRequestHeader(i,h.headers[i]);if(h.beforeSend&&(!1===h.beforeSend.call(g,w,h)||p))return w.abort();if(b="abort",v.add(h.complete),w.done(h.success),w.fail(h.error),u=Xt(Bt,h,t,w)){if(w.readyState=1,d&&y.trigger("ajaxSend",[w,h]),p)return w;h.async&&0<h.timeout&&(f=C.setTimeout(function(){w.abort("timeout")},h.timeout));try{p=!1,u.send(a,T)}catch(e){if(p)throw e;T(-1,e)}}else T(-1,"No Transport");function T(e,t,n,r){var i,o,a,s=t;p||(p=!0,f&&C.clearTimeout(f),u=void 0,c=r||"",w.readyState=0<e?4:0,r=200<=e&&e<300||304===e,n&&(a=function(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a=a||i}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(h,w,n)),a=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(h,a,w,r),r?(h.ifModified&&((n=w.getResponseHeader("Last-Modified"))&&(S.lastModified[l]=n),(n=w.getResponseHeader("etag"))&&(S.etag[l]=n)),204===e||"HEAD"===h.type?s="nocontent":304===e?s="notmodified":(s=a.state,i=a.data,r=!(o=a.error))):(o=s,!e&&s||(s="error",e<0&&(e=0))),w.status=e,w.statusText=(t||s)+"",r?m.resolveWith(g,[i,s,w]):m.rejectWith(g,[w,s,o]),w.statusCode(x),x=void 0,d&&y.trigger(r?"ajaxSuccess":"ajaxError",[w,h,r?i:o]),v.fireWith(g,[w,s]),d&&(y.trigger("ajaxComplete",[w,h]),--S.active||S.event.trigger("ajaxStop")))}return w},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return x(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S._evalUrl=function(e,t){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t)}})},S.fn.extend({wrapAll:function(e){return this[0]&&(x(e)&&(e=e.call(this[0])),e=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&e.insertBefore(this[0]),e.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return x(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=x(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Gt={0:200,1223:204},Yt=S.ajaxSettings.xhr();v.cors=!!Yt&&"withCredentials"in Yt,v.ajax=Yt=!!Yt,S.ajaxTransport(function(i){var o,a;if(v.cors||Yt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Gt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Qt=[],Jt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Qt.pop()||S.expando+"_"+Dt++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Jt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Jt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=x(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Jt,"$1"+r):!1!==e.jsonp&&(e.url+=(jt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Qt.push(r)),o&&x(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),r=!n&&[],(n=D.exec(e))?[t.createElement(n[1])]:(n=ve([e],t,r),r&&r.length&&S(r).remove(),S.merge([],n.childNodes)));var r},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=Tt(e.slice(s)),e=e.slice(0,s)),x(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s=S.css(e,"position"),u=S(e),l={};"static"===s&&(e.style.position="relative"),o=u.offset(),r=S.css(e,"top"),a=S.css(e,"left"),a=("absolute"===s||"fixed"===s)&&-1<(r+a).indexOf("auto")?(i=(s=u.position()).top,s.left):(i=parseFloat(r)||0,parseFloat(a)||0),null!=(t=x(t)?t.call(e,n,S.extend({},o)):t).top&&(l.top=t.top-o.top+i),null!=t.left&&(l.left=t.left-o.left+a),"using"in t?t.using.call(e,l):u.css(l)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n=this[0];return n?n.getClientRects().length?(e=n.getBoundingClientRect(),n=n.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===S.css(e,"position");)e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return _(this,function(e,t,n){var r;return g(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n?r?r[i]:e[t]:void(r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n)},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Ge(v.pixelPosition,function(e,t){if(t)return t=Ve(e,n),ze.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return g(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),S.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),S.proxy=function(e,t){var n,r;if("string"==typeof t&&(r=e[t],t=e,e=r),x(e))return n=s.call(arguments,2),(r=function(){return e.apply(t||this,n.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,r},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=x,S.isWindow=g,S.camelCase=V,S.type=h,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Kt=C.jQuery,Zt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Zt),e&&C.jQuery===S&&(C.jQuery=Kt),S},e||(C.jQuery=C.$=S),S});
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery")):"function"==typeof define&&define.amd?define(["exports","jquery"],e):e((t=t||self).bootstrap={},t.jQuery)}(this,function(t,h){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function o(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function e(e,t){var n,i=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,n)),i}function r(i){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?e(Object(o),!0).forEach(function(t){var e,n=i,t=o[e=t];e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach(function(t){Object.defineProperty(i,t,Object.getOwnPropertyDescriptor(o,t))})}return i}h=h&&h.hasOwnProperty("default")?h.default:h;var n="transitionend";var u={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e,n=t.getAttribute("data-target");n&&"#"!==n||(n=(e=t.getAttribute("href"))&&"#"!==e?e.trim():"");try{return document.querySelector(n)?n:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=h(t).css("transition-duration"),n=h(t).css("transition-delay"),i=parseFloat(e),t=parseFloat(n);return i||t?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){h(t).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],r=r&&u.isElement(r)?"element":{}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();if(!new RegExp(o).test(r))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+r+'" but expected type "'+o+'".')}},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?u.findShadowRoot(t.parentNode):null;t=t.getRootNode();return t instanceof ShadowRoot?t:null},jQueryDetection:function(){if(void 0===h)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=h.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};u.jQueryDetection(),h.fn.emulateTransitionEnd=function(t){var e=this,n=!1;return h(this).one(u.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||u.triggerTransitionEnd(e)},t),this},h.event.special[u.TRANSITION_END]={bindType:n,delegateType:n,handle:function(t){if(h(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var s="alert",a="bs.alert",l="."+a,c=h.fn[s],f={CLOSE:"close"+l,CLOSED:"closed"+l,CLICK_DATA_API:"click"+l+".data-api"},d=((E=p.prototype).close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},E.dispose=function(){h.removeData(this._element,a),this._element=null},E._getRootElement=function(t){var e=u.getSelectorFromElement(t),n=!1;return(n=e?document.querySelector(e):n)||h(t).closest(".alert")[0]},E._triggerCloseEvent=function(t){var e=h.Event(f.CLOSE);return h(t).trigger(e),e},E._removeElement=function(e){var t,n=this;h(e).removeClass("show"),h(e).hasClass("fade")?(t=u.getTransitionDurationFromElement(e),h(e).one(u.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)):this._destroyElement(e)},E._destroyElement=function(t){h(t).detach().trigger(f.CLOSED).remove()},p._jQueryInterface=function(n){return this.each(function(){var t=h(this),e=t.data(a);e||(e=new p(this),t.data(a,e)),"close"===n&&e[n](this)})},p._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},o(p,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),p);function p(t){this._element=t}h(document).on(f.CLICK_DATA_API,'[data-dismiss="alert"]',d._handleDismiss(new d)),h.fn[s]=d._jQueryInterface,h.fn[s].Constructor=d,h.fn[s].noConflict=function(){return h.fn[s]=c,d._jQueryInterface};var m="button",g="bs.button",_="."+g,l=".data-api",v=h.fn[m],y="active",E='[data-toggle^="button"]',b='input:not([type="hidden"])',w=".btn",_={CLICK_DATA_API:"click"+_+l,FOCUS_BLUR_DATA_API:"focus"+_+l+" blur"+_+l,LOAD_DATA_API:"load"+_+l},T=((l=C.prototype).toggle=function(){var t,e=!0,n=!0,i=h(this._element).closest('[data-toggle="buttons"]')[0];!i||(t=this._element.querySelector(b))&&("radio"===t.type?t.checked&&this._element.classList.contains(y)?e=!1:(i=i.querySelector(".active"))&&h(i).removeClass(y):("checkbox"!==t.type||"LABEL"===this._element.tagName&&t.checked===this._element.classList.contains(y))&&(e=!1),e&&(t.checked=!this._element.classList.contains(y),h(t).trigger("change")),t.focus(),n=!1),this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(n&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(y)),e&&h(this._element).toggleClass(y))},l.dispose=function(){h.removeData(this._element,g),this._element=null},C._jQueryInterface=function(e){return this.each(function(){var t=h(this).data(g);t||(t=new C(this),h(this).data(g,t)),"toggle"===e&&t[e]()})},o(C,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),C);function C(t){this._element=t}h(document).on(_.CLICK_DATA_API,E,function(t){var e,n=t.target;!(n=!h(n).hasClass("btn")?h(n).closest(w)[0]:n)||n.hasAttribute("disabled")||n.classList.contains("disabled")||(e=n.querySelector(b))&&(e.hasAttribute("disabled")||e.classList.contains("disabled"))?t.preventDefault():T._jQueryInterface.call(h(n),"toggle")}).on(_.FOCUS_BLUR_DATA_API,E,function(t){var e=h(t.target).closest(w)[0];h(e).toggleClass("focus",/^focus(in)?$/.test(t.type))}),h(window).on(_.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')),e=0,n=t.length;e<n;e++){var i=t[e],o=i.querySelector(b);o.checked||o.hasAttribute("checked")?i.classList.add(y):i.classList.remove(y)}for(var r=0,s=(t=[].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length;r<s;r++){var a=t[r];"true"===a.getAttribute("aria-pressed")?a.classList.add(y):a.classList.remove(y)}}),h.fn[m]=T._jQueryInterface,h.fn[m].Constructor=T,h.fn[m].noConflict=function(){return h.fn[m]=v,T._jQueryInterface};var S="carousel",D="bs.carousel",I="."+D,E=".data-api",A=h.fn[S],O={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},N={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},k="next",L="prev",P={SLIDE:"slide"+I,SLID:"slid"+I,KEYDOWN:"keydown"+I,MOUSEENTER:"mouseenter"+I,MOUSELEAVE:"mouseleave"+I,TOUCHSTART:"touchstart"+I,TOUCHMOVE:"touchmove"+I,TOUCHEND:"touchend"+I,POINTERDOWN:"pointerdown"+I,POINTERUP:"pointerup"+I,DRAG_START:"dragstart"+I,LOAD_DATA_API:"load"+I+E,CLICK_DATA_API:"click"+I+E},x="active",j=".active.carousel-item",H={TOUCH:"touch",PEN:"pen"},R=((_=F.prototype).next=function(){this._isSliding||this._slide(k)},_.nextWhenVisible=function(){!document.hidden&&h(this._element).is(":visible")&&"hidden"!==h(this._element).css("visibility")&&this.next()},_.prev=function(){this._isSliding||this._slide(L)},_.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(".carousel-item-next, .carousel-item-prev")&&(u.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},_.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},_.to=function(t){var e=this;this._activeElement=this._element.querySelector(j);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)h(this._element).one(P.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();n=n<t?k:L;this._slide(n,this._items[t])}},_.dispose=function(){h(this._element).off(I),h.removeData(this._element,D),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},_._getConfig=function(t){return t=r({},O,{},t),u.typeCheckConfig(S,t,N),t},_._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);t<=40||(t=t/this.touchDeltaX,(this.touchDeltaX=0)<t&&this.prev(),t<0&&this.next())},_._addEventListeners=function(){var e=this;this._config.keyboard&&h(this._element).on(P.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&h(this._element).on(P.MOUSEENTER,function(t){return e.pause(t)}).on(P.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},_._addTouchEventListeners=function(){var t,e,n=this;this._touchSupported&&(t=function(t){n._pointerEvent&&H[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},e=function(t){n._pointerEvent&&H[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))},h(this._element.querySelectorAll(".carousel-item img")).on(P.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(h(this._element).on(P.POINTERDOWN,t),h(this._element).on(P.POINTERUP,e),this._element.classList.add("pointer-event")):(h(this._element).on(P.TOUCHSTART,t),h(this._element).on(P.TOUCHMOVE,function(t){(t=t).originalEvent.touches&&1<t.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=t.originalEvent.touches[0].clientX-n.touchStartX}),h(this._element).on(P.TOUCHEND,e)))},_._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},_._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(".carousel-item")):[],this._items.indexOf(t)},_._getItemByDirection=function(t,e){var n=t===k,i=t===L,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;t=(o+(t===L?-1:1))%this._items.length;return-1==t?this._items[this._items.length-1]:this._items[t]},_._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(j)),n=h.Event(P.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return h(this._element).trigger(n),n},_._setActiveIndicatorElement=function(t){var e;this._indicatorsElement&&(e=[].slice.call(this._indicatorsElement.querySelectorAll(".active")),h(e).removeClass(x),(t=this._indicatorsElement.children[this._getItemIndex(t)])&&h(t).addClass(x))},_._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(j),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),e=Boolean(this._interval),t=t===k?(n="carousel-item-left",i="carousel-item-next","left"):(n="carousel-item-right",i="carousel-item-prev","right");l&&h(l).hasClass(x)?this._isSliding=!1:!this._triggerSlideEvent(l,t).isDefaultPrevented()&&s&&l&&(this._isSliding=!0,e&&this.pause(),this._setActiveIndicatorElement(l),o=h.Event(P.SLID,{relatedTarget:l,direction:t,from:a,to:c}),h(this._element).hasClass("slide")?(h(l).addClass(i),u.reflow(l),h(s).addClass(n),h(l).addClass(n),(c=parseInt(l.getAttribute("data-interval"),10))?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=c):this._config.interval=this._config.defaultInterval||this._config.interval,c=u.getTransitionDurationFromElement(s),h(s).one(u.TRANSITION_END,function(){h(l).removeClass(n+" "+i).addClass(x),h(s).removeClass(x+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return h(r._element).trigger(o)},0)}).emulateTransitionEnd(c)):(h(s).removeClass(x),h(l).addClass(x),this._isSliding=!1,h(this._element).trigger(o)),e&&this.cycle())},F._jQueryInterface=function(i){return this.each(function(){var t=h(this).data(D),e=r({},O,{},h(this).data());"object"==typeof i&&(e=r({},e,{},i));var n="string"==typeof i?i:e.slide;if(t||(t=new F(this,e),h(this).data(D,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},F._dataApiClickHandler=function(t){var e,n,i=u.getSelectorFromElement(this);!i||(e=h(i)[0])&&h(e).hasClass("carousel")&&(n=r({},h(e).data(),{},h(this).data()),(i=this.getAttribute("data-slide-to"))&&(n.interval=!1),F._jQueryInterface.call(h(e),n),i&&h(e).data(D).to(i),t.preventDefault())},o(F,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return O}}]),F);function F(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(".carousel-indicators"),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}h(document).on(P.CLICK_DATA_API,"[data-slide], [data-slide-to]",R._dataApiClickHandler),h(window).on(P.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll('[data-ride="carousel"]')),e=0,n=t.length;e<n;e++){var i=h(t[e]);R._jQueryInterface.call(i,i.data())}}),h.fn[S]=R._jQueryInterface,h.fn[S].Constructor=R,h.fn[S].noConflict=function(){return h.fn[S]=A,R._jQueryInterface};var M="collapse",W="bs.collapse",E="."+W,U=h.fn[M],B={toggle:!0,parent:""},q={toggle:"boolean",parent:"(string|element)"},K={SHOW:"show"+E,SHOWN:"shown"+E,HIDE:"hide"+E,HIDDEN:"hidden"+E,CLICK_DATA_API:"click"+E+".data-api"},Q="show",V="collapse",Y="collapsing",z="collapsed",X='[data-toggle="collapse"]',G=((_=$.prototype).toggle=function(){h(this._element).hasClass(Q)?this.hide():this.show()},_.show=function(){var t,e,n,i,o=this;this._isTransitioning||h(this._element).hasClass(Q)||(i=this._parent&&0===(i=[].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function(t){return"string"==typeof o._config.parent?t.getAttribute("data-parent")===o._config.parent:t.classList.contains(V)})).length?null:i)&&(n=h(i).not(this._selector).data(W))&&n._isTransitioning||(t=h.Event(K.SHOW),h(this._element).trigger(t),t.isDefaultPrevented()||(i&&($._jQueryInterface.call(h(i).not(this._selector),"hide"),n||h(i).data(W,null)),e=this._getDimension(),h(this._element).removeClass(V).addClass(Y),this._element.style[e]=0,this._triggerArray.length&&h(this._triggerArray).removeClass(z).attr("aria-expanded",!0),this.setTransitioning(!0),n="scroll"+(e[0].toUpperCase()+e.slice(1)),i=u.getTransitionDurationFromElement(this._element),h(this._element).one(u.TRANSITION_END,function(){h(o._element).removeClass(Y).addClass(V).addClass(Q),o._element.style[e]="",o.setTransitioning(!1),h(o._element).trigger(K.SHOWN)}).emulateTransitionEnd(i),this._element.style[e]=this._element[n]+"px"))},_.hide=function(){var t=this;if(!this._isTransitioning&&h(this._element).hasClass(Q)){var e=h.Event(K.HIDE);if(h(this._element).trigger(e),!e.isDefaultPrevented()){e=this._getDimension();this._element.style[e]=this._element.getBoundingClientRect()[e]+"px",u.reflow(this._element),h(this._element).addClass(Y).removeClass(V).removeClass(Q);var n=this._triggerArray.length;if(0<n)for(var i=0;i<n;i++){var o=this._triggerArray[i],r=u.getSelectorFromElement(o);null!==r&&(h([].slice.call(document.querySelectorAll(r))).hasClass(Q)||h(o).addClass(z).attr("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[e]="";e=u.getTransitionDurationFromElement(this._element);h(this._element).one(u.TRANSITION_END,function(){t.setTransitioning(!1),h(t._element).removeClass(Y).addClass(V).trigger(K.HIDDEN)}).emulateTransitionEnd(e)}}},_.setTransitioning=function(t){this._isTransitioning=t},_.dispose=function(){h.removeData(this._element,W),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},_._getConfig=function(t){return(t=r({},B,{},t)).toggle=Boolean(t.toggle),u.typeCheckConfig(M,t,q),t},_._getDimension=function(){return h(this._element).hasClass("width")?"width":"height"},_._getParent=function(){var t,n=this;u.isElement(this._config.parent)?(t=this._config.parent,void 0!==this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',e=[].slice.call(t.querySelectorAll(e));return h(e).each(function(t,e){n._addAriaAndCollapsedClass($._getTargetFromElement(e),[e])}),t},_._addAriaAndCollapsedClass=function(t,e){t=h(t).hasClass(Q);e.length&&h(e).toggleClass(z,!t).attr("aria-expanded",t)},$._getTargetFromElement=function(t){t=u.getSelectorFromElement(t);return t?document.querySelector(t):null},$._jQueryInterface=function(i){return this.each(function(){var t=h(this),e=t.data(W),n=r({},B,{},t.data(),{},"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new $(this,n),t.data(W,e)),"string"==typeof i){if(void 0===e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},o($,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return B}}]),$);function $(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(X)),i=0,o=n.length;i<o;i++){var r=n[i],s=u.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}h(document).on(K.CLICK_DATA_API,X,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=h(this),t=u.getSelectorFromElement(this),t=[].slice.call(document.querySelectorAll(t));h(t).each(function(){var t=h(this),e=t.data(W)?"toggle":n.data();G._jQueryInterface.call(t,e)})}),h.fn[M]=G._jQueryInterface,h.fn[M].Constructor=G,h.fn[M].noConflict=function(){return h.fn[M]=U,G._jQueryInterface};var J="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,Z=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(J&&0<=navigator.userAgent.indexOf(t[e]))return 1;return 0}(),tt=J&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then(function(){e=!1,t()}))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout(function(){e=!1,t()},Z))}};function et(t){return t&&"[object Function]"==={}.toString.call(t)}function nt(t,e){if(1!==t.nodeType)return[];t=t.ownerDocument.defaultView.getComputedStyle(t,null);return e?t[e]:t}function it(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function ot(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=nt(t),n=e.overflow,i=e.overflowX,e=e.overflowY;return/(auto|scroll|overlay)/.test(n+e+i)?t:ot(it(t))}function rt(t){return t&&t.referenceNode?t.referenceNode:t}var st=J&&!(!window.MSInputMethodContext||!document.documentMode),at=J&&/MSIE 10/.test(navigator.userAgent);function lt(t){return 11===t?st:10!==t&&st||at}function ct(t){if(!t)return document.documentElement;for(var e=lt(10)?document.body:null,n=t.offsetParent||null;n===e&&t.nextElementSibling;)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===nt(n,"position")?ct(n):n:(t?t.ownerDocument:document).documentElement}function ht(t){return null!==t.parentNode?ht(t.parentNode):t}function ut(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,n=document.createRange();n.setStart(i,0),n.setEnd(o,0);n=n.commonAncestorContainer;if(t!==n&&e!==n||i.contains(o))return"BODY"===(o=(i=n).nodeName)||"HTML"!==o&&ct(i.firstElementChild)!==i?ct(n):n;n=ht(t);return n.host?ut(n.host,e):ut(t,ht(e).host)}function ft(t,e){var n="top"===(1<arguments.length&&void 0!==e?e:"top")?"scrollTop":"scrollLeft",e=t.nodeName;if("BODY"!==e&&"HTML"!==e)return t[n];e=t.ownerDocument.documentElement;return(t.ownerDocument.scrollingElement||e)[n]}function dt(t,e){var n="x"===e?"Left":"Top",e="Left"==n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"],10)+parseFloat(t["border"+e+"Width"],10)}function pt(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],lt(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function mt(t){var e=t.body,n=t.documentElement,t=lt(10)&&getComputedStyle(n);return{height:pt("Height",e,n,t),width:pt("Width",e,n,t)}}function gt(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var vt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n,i=arguments[e];for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t};function yt(t){return vt({},t,{right:t.left+t.width,bottom:t.top+t.height})}function Et(t){var e,n,i={};try{lt(10)?(i=t.getBoundingClientRect(),e=ft(t,"top"),n=ft(t,"left"),i.top+=e,i.left+=n,i.bottom+=e,i.right+=n):i=t.getBoundingClientRect()}catch(t){}var o={left:i.left,top:i.top,width:i.right-i.left,height:i.bottom-i.top},r="HTML"===t.nodeName?mt(t.ownerDocument):{},s=r.width||t.clientWidth||o.width,a=r.height||t.clientHeight||o.height,r=t.offsetWidth-s,s=t.offsetHeight-a;return(r||s)&&(r-=dt(a=nt(t),"x"),s-=dt(a,"y"),o.width-=r,o.height-=s),yt(o)}function bt(t,e,n){var i=2<arguments.length&&void 0!==n&&n,o=lt(10),r="HTML"===e.nodeName,s=Et(t),a=Et(e),l=ot(t),c=nt(e),n=parseFloat(c.borderTopWidth,10),t=parseFloat(c.borderLeftWidth,10);i&&r&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0));s=yt({top:s.top-a.top-n,left:s.left-a.left-t,width:s.width,height:s.height});return s.marginTop=0,s.marginLeft=0,!o&&r&&(r=parseFloat(c.marginTop,10),c=parseFloat(c.marginLeft,10),s.top-=n-r,s.bottom-=n-r,s.left-=t-c,s.right-=t-c,s.marginTop=r,s.marginLeft=c),s=(o&&!i?e.contains(l):e===l&&"BODY"!==l.nodeName)?function(t,e){var n=2<arguments.length&&!1,i=ft(e,"top"),e=ft(e,"left"),n=n?-1:1;return t.top+=i*n,t.bottom+=i*n,t.left+=e*n,t.right+=e*n,t}(s,e):s}function wt(t){if(!t||!t.parentElement||lt())return document.documentElement;for(var e=t.parentElement;e&&"none"===nt(e,"transform");)e=e.parentElement;return e||document.documentElement}function Tt(t,e,n,i,o){var r=4<arguments.length&&void 0!==o&&o,s={top:0,left:0},a=r?wt(t):ut(t,rt(e));"viewport"===i?s=function(t,e){var n=1<arguments.length&&void 0!==e&&e,i=t.ownerDocument.documentElement,o=bt(t,i),r=Math.max(i.clientWidth,window.innerWidth||0),e=Math.max(i.clientHeight,window.innerHeight||0),t=n?0:ft(i),i=n?0:ft(i,"left");return yt({top:t-o.top+o.marginTop,left:i-o.left+o.marginLeft,width:r,height:e})}(a,r):(o=void 0,"scrollParent"===i?"BODY"===(o=ot(it(e))).nodeName&&(o=t.ownerDocument.documentElement):o="window"===i?t.ownerDocument.documentElement:i,l=bt(o,a,r),"HTML"!==o.nodeName||function t(e){var n=e.nodeName;if("BODY"===n||"HTML"===n)return!1;if("fixed"===nt(e,"position"))return!0;e=it(e);return!!e&&t(e)}(a)?s=l:(t=(a=mt(t.ownerDocument)).height,a=a.width,s.top+=l.top-l.marginTop,s.bottom=t+l.top,s.left+=l.left-l.marginLeft,s.right=a+l.left));var l="number"==typeof(n=n||0);return s.left+=l?n:n.left||0,s.top+=l?n:n.top||0,s.right-=l?n:n.right||0,s.bottom-=l?n:n.bottom||0,s}function Ct(t,e,n,i,o,r){r=5<arguments.length&&void 0!==r?r:0;if(-1===t.indexOf("auto"))return t;var o=Tt(n,i,r,o),s={top:{width:o.width,height:e.top-o.top},right:{width:o.right-e.right,height:o.height},bottom:{width:o.width,height:o.bottom-e.bottom},left:{width:e.left-o.left,height:o.height}},e=Object.keys(s).map(function(t){return vt({key:t},s[t],{area:(t=s[t]).width*t.height})}).sort(function(t,e){return e.area-t.area}),o=e.filter(function(t){var e=t.width,t=t.height;return e>=n.clientWidth&&t>=n.clientHeight}),e=(0<o.length?o:e)[0].key,t=t.split("-")[1];return e+(t?"-"+t:"")}function St(t,e,n,i){i=3<arguments.length&&void 0!==i?i:null;return bt(n,i?wt(e):ut(e,rt(n)),i)}function Dt(t){var e=t.ownerDocument.defaultView.getComputedStyle(t),n=parseFloat(e.marginTop||0)+parseFloat(e.marginBottom||0),e=parseFloat(e.marginLeft||0)+parseFloat(e.marginRight||0);return{width:t.offsetWidth+e,height:t.offsetHeight+n}}function It(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,function(t){return e[t]})}function At(t,e,n){n=n.split("-")[0];var i=Dt(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",t=r?"height":"width",r=r?"width":"height";return o[s]=e[s]+e[t]/2-i[t]/2,o[a]=n===a?e[a]-i[r]:e[It(a)],o}function Ot(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function Nt(t,n,e){return(void 0===e?t:t.slice(0,function(t,e){if(Array.prototype.findIndex)return t.findIndex(function(t){return t.name===e});var n=Ot(t,function(t){return t.name===e});return t.indexOf(n)}(t,e))).forEach(function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&et(e)&&(n.offsets.popper=yt(n.offsets.popper),n.offsets.reference=yt(n.offsets.reference),n=e(n,t))}),n}function kt(t,n){return t.some(function(t){var e=t.name;return t.enabled&&e===n})}function Lt(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],o=o?""+o+n:t;if(void 0!==document.body.style[o])return o}return null}function Pt(t){t=t.ownerDocument;return t?t.defaultView:window}function xt(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function jt(n,i){Object.keys(i).forEach(function(t){var e="";-1!==["width","height","top","right","bottom","left"].indexOf(t)&&xt(i[t])&&(e="px"),n.style[t]=i[t]+e})}var Ht=J&&/Firefox/i.test(navigator.userAgent);function Rt(t,e,n){var i,o=Ot(t,function(t){return t.name===e}),r=!!o&&t.some(function(t){return t.name===n&&t.enabled&&t.order<o.order});return r||(i="`"+e+"`",t="`"+n+"`",console.warn(t+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")),r}var E=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],Ft=E.slice(3);function Mt(t,e){e=1<arguments.length&&void 0!==e&&e,t=Ft.indexOf(t),t=Ft.slice(t+1).concat(Ft.slice(0,t));return e?t.reverse():t}var Wt,Ut,Bt,_={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(t){var e,n,i=t.placement,o=i.split("-")[0],r=i.split("-")[1];return r&&(e=(n=t.offsets).reference,i=n.popper,o=(n=-1!==["bottom","top"].indexOf(o))?"width":"height",o={start:_t({},n=n?"left":"top",e[n]),end:_t({},n,e[n]+e[o]-i[o])},t.offsets.popper=vt({},i,o[r])),t}},offset:{order:200,enabled:!0,fn:function(t,e){var o,r,s,a,n=e.offset,i=t.placement,l=t.offsets,c=l.popper,h=l.reference,e=i.split("-")[0],l=xt(+n)?[+n,0]:(i=n,o=c,r=h,s=[0,0],a=-1!==["right","left"].indexOf(n=e),h=i.split(/(\+|\-)/).map(function(t){return t.trim()}),n=h.indexOf(Ot(h,function(t){return-1!==t.search(/,|\s/)})),h[n]&&-1===h[n].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead."),i=/\s*,\s*|\s+/,(-1!==n?[h.slice(0,n).concat([h[n].split(i)[0]]),[h[n].split(i)[1]].concat(h.slice(n+1))]:[h]).map(function(t,e){var n=(1===e?!a:a)?"height":"width",i=!1;return t.reduce(function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,i=!0,t):i?(t[t.length-1]+=e,i=!1,t):t.concat(e)},[]).map(function(t){return function(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],o=o[2];if(!r)return t;if(0!==o.indexOf("%"))return"vh"!==o&&"vw"!==o?r:("vh"===o?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*r;var s=void 0;switch(o){case"%p":s=n;break;case"%":case"%r":default:s=i}return yt(s)[e]/100*r}(t,n,o,r)})}).forEach(function(n,i){n.forEach(function(t,e){xt(t)&&(s[i]+=t*("-"===n[e-1]?-1:1))})}),s);return"left"===e?(c.top+=l[0],c.left-=l[1]):"right"===e?(c.top+=l[0],c.left+=l[1]):"top"===e?(c.left+=l[0],c.top-=l[1]):"bottom"===e&&(c.left+=l[0],c.top+=l[1]),t.popper=c,t},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(t,i){var e=i.boundariesElement||ct(t.instance.popper);t.instance.reference===e&&(e=ct(e));var n=Lt("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[n];o.top="",o.left="",o[n]="";var l=Tt(t.instance.popper,t.instance.reference,i.padding,e,t.positionFixed);o.top=r,o.left=s,o[n]=a,i.boundaries=l;var a=i.priority,c=t.offsets.popper,h={primary:function(t){var e=c[t];return _t({},t,e=c[t]<l[t]&&!i.escapeWithReference?Math.max(c[t],l[t]):e)},secondary:function(t){var e="right"===t?"left":"top",n=c[e];return _t({},e,n=c[t]>l[t]&&!i.escapeWithReference?Math.min(c[e],l[t]-("right"===t?c.width:c.height)):n)}};return a.forEach(function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";c=vt({},c,h[e](t))}),t.offsets.popper=c,t},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),e=s?"right":"bottom",o=s?"left":"top",s=s?"width":"height";return n[e]<r(i[o])&&(t.offsets.popper[o]=r(i[o])-n[s]),n[o]>r(i[e])&&(t.offsets.popper[o]=r(i[e])),t}},arrow:{order:500,enabled:!0,fn:function(t,e){if(!Rt(t.instance.modifiers,"arrow","keepTogether"))return t;var n=e.element;if("string"==typeof n){if(!(n=t.instance.popper.querySelector(n)))return t}else if(!t.instance.popper.contains(n))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var i=t.placement.split("-")[0],o=t.offsets,r=o.popper,s=o.reference,a=-1!==["left","right"].indexOf(i),l=a?"height":"width",c=a?"Top":"Left",h=c.toLowerCase(),e=a?"left":"top",o=a?"bottom":"right",i=Dt(n)[l];s[o]-i<r[h]&&(t.offsets.popper[h]-=r[h]-(s[o]-i)),s[h]+i>r[o]&&(t.offsets.popper[h]+=s[h]+i-r[o]),t.offsets.popper=yt(t.offsets.popper);a=s[h]+s[l]/2-i/2,o=nt(t.instance.popper),s=parseFloat(o["margin"+c],10),c=parseFloat(o["border"+c+"Width"],10),c=a-t.offsets.popper[h]-s-c,c=Math.max(Math.min(r[l]-i,c),0);return t.arrowElement=n,t.offsets.arrow=(_t(n={},h,Math.round(c)),_t(n,e,""),n),t},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(c,h){if(kt(c.instance.modifiers,"inner"))return c;if(c.flipped&&c.placement===c.originalPlacement)return c;var u=Tt(c.instance.popper,c.instance.reference,h.padding,h.boundariesElement,c.positionFixed),f=c.placement.split("-")[0],d=It(f),p=c.placement.split("-")[1]||"",m=[];switch(h.behavior){case"flip":m=[f,d];break;case"clockwise":m=Mt(f);break;case"counterclockwise":m=Mt(f,!0);break;default:m=h.behavior}return m.forEach(function(t,e){if(f!==t||m.length===e+1)return c;f=c.placement.split("-")[0],d=It(f);var n=c.offsets.popper,i=c.offsets.reference,o=Math.floor,r="left"===f&&o(n.right)>o(i.left)||"right"===f&&o(n.left)<o(i.right)||"top"===f&&o(n.bottom)>o(i.top)||"bottom"===f&&o(n.top)<o(i.bottom),s=o(n.left)<o(u.left),a=o(n.right)>o(u.right),l=o(n.top)<o(u.top),t=o(n.bottom)>o(u.bottom),i="left"===f&&s||"right"===f&&a||"top"===f&&l||"bottom"===f&&t,n=-1!==["top","bottom"].indexOf(f),o=!!h.flipVariations&&(n&&"start"===p&&s||n&&"end"===p&&a||!n&&"start"===p&&l||!n&&"end"===p&&t),l=!!h.flipVariationsByContent&&(n&&"start"===p&&a||n&&"end"===p&&s||!n&&"start"===p&&t||!n&&"end"===p&&l),l=o||l;(r||i||l)&&(c.flipped=!0,(r||i)&&(f=m[e+1]),l&&(p="end"===p?"start":"start"===p?"end":p),c.placement=f+(p?"-"+p:""),c.offsets.popper=vt({},c.offsets.popper,At(c.instance.popper,c.offsets.reference,c.placement)),c=Nt(c.instance.modifiers,c,"flip"))}),c},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),i=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(i?o[s?"width":"height"]:0),t.placement=It(e),t.offsets.popper=yt(o),t}},hide:{order:800,enabled:!0,fn:function(t){if(!Rt(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=Ot(t.instance.modifiers,function(t){return"preventOverflow"===t.name}).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}},computeStyle:{order:850,enabled:!0,fn:function(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=Ot(t.instance.modifiers,function(t){return"applyStyle"===t.name}).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,a,l,c,h,u=void 0!==r?r:e.gpuAcceleration,f=ct(t.instance.popper),d=Et(f),p={position:o.position},a=(s=t,a=window.devicePixelRatio<2||!Ht,h=(c=s.offsets).popper,l=c.reference,r=Math.round,e=Math.floor,o=r(l.width),c=r(h.width),l=-1!==["left","right"].indexOf(s.placement),s=-1!==s.placement.indexOf("-"),e=a?l||s||o%2==c%2?r:e:m,r=a?r:m,{left:e(o%2==1&&c%2==1&&!s&&a?h.left-1:h.left),top:r(h.top),bottom:r(h.bottom),right:e(h.right)}),r="bottom"===n?"top":"bottom",e="right"===i?"left":"right",h=Lt("transform");function m(t){return t}i="bottom"==r?"HTML"===f.nodeName?-f.clientHeight+a.bottom:-d.height+a.bottom:a.top,n="right"==e?"HTML"===f.nodeName?-f.clientWidth+a.right:-d.width+a.right:a.left,u&&h?(p[h]="translate3d("+n+"px, "+i+"px, 0)",p[r]=0,p[e]=0,p.willChange="transform"):(u="bottom"==r?-1:1,h="right"==e?-1:1,p[r]=i*u,p[e]=n*h,p.willChange=r+", "+e);e={"x-placement":t.placement};return t.attributes=vt({},e,t.attributes),t.styles=vt({},p,t.styles),t.arrowStyles=vt({},t.offsets.arrow,t.arrowStyles),t},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(t){return jt(t.instance.popper,t.styles),e=t.instance.popper,n=t.attributes,Object.keys(n).forEach(function(t){!1!==n[t]?e.setAttribute(t,n[t]):e.removeAttribute(t)}),t.arrowElement&&Object.keys(t.arrowStyles).length&&jt(t.arrowElement,t.arrowStyles),t;var e,n},onLoad:function(t,e,n,i,o){o=St(o,e,t,n.positionFixed),t=Ct(n.placement,o,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",t),jt(e,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},qt=(Wt=Kt,(Ut=[{key:"update",value:function(){return function(){var t;this.state.isDestroyed||((t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}).offsets.reference=St(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=Ct(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=At(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=Nt(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t)))}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,kt(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[Lt("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){var t,e,n;this.state.eventsEnabled||(this.state=(t=this.reference,this.options,e=this.state,n=this.scheduleUpdate,e.updateBound=n,Pt(t).addEventListener("resize",e.updateBound,{passive:!0}),function t(e,n,i,o){var r="BODY"===e.nodeName,e=r?e.ownerDocument.defaultView:e;e.addEventListener(n,i,{passive:!0}),r||t(ot(e.parentNode),n,i,o),o.push(e)}(t=ot(t),"scroll",e.updateBound,e.scrollParents),e.scrollElement=t,e.eventsEnabled=!0,e))}.call(this)}},{key:"disableEventListeners",value:function(){return function(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,Pt(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach(function(t){t.removeEventListener("scroll",e.updateBound)}),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}.call(this)}}])&&gt(Wt.prototype,Ut),Bt&&gt(Wt,Bt),Kt);function Kt(t,e){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};!function(t){if(!(t instanceof Kt))throw new TypeError("Cannot call a class as a function")}(this),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=tt(this.update.bind(this)),this.options=vt({},Kt.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=e&&e.jquery?e[0]:e,this.options.modifiers={},Object.keys(vt({},Kt.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=vt({},Kt.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(t){return vt({name:t},n.options.modifiers[t])}).sort(function(t,e){return t.order-e.order}),this.modifiers.forEach(function(t){t.enabled&&et(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();e=this.options.eventsEnabled;e&&this.enableEventListeners(),this.state.eventsEnabled=e}qt.Utils=("undefined"!=typeof window?window:global).PopperUtils,qt.placements=E,qt.Defaults=_;var Qt="dropdown",Vt="bs.dropdown",Yt="."+Vt,_=".data-api",zt=h.fn[Qt],Xt=new RegExp("38|40|27"),Gt={HIDE:"hide"+Yt,HIDDEN:"hidden"+Yt,SHOW:"show"+Yt,SHOWN:"shown"+Yt,CLICK:"click"+Yt,CLICK_DATA_API:"click"+Yt+_,KEYDOWN_DATA_API:"keydown"+Yt+_,KEYUP_DATA_API:"keyup"+Yt+_},$t="disabled",Jt="show",Zt="dropdown-menu-right",te='[data-toggle="dropdown"]',ee=".dropdown-menu",ne={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},ie={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},oe=((_=re.prototype).toggle=function(){var t;this._element.disabled||h(this._element).hasClass($t)||(t=h(this._menu).hasClass(Jt),re._clearMenus(),t||this.show(!0))},_.show=function(t){if(void 0===t&&(t=!1),!(this._element.disabled||h(this._element).hasClass($t)||h(this._menu).hasClass(Jt))){var e={relatedTarget:this._element},n=h.Event(Gt.SHOW,e),i=re._getParentFromElement(this._element);if(h(i).trigger(n),!n.isDefaultPrevented()){if(!this._inNavbar&&t){if(void 0===qt)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");t=this._element;"parent"===this._config.reference?t=i:u.isElement(this._config.reference)&&(t=this._config.reference,void 0!==this._config.reference.jquery&&(t=this._config.reference[0])),"scrollParent"!==this._config.boundary&&h(i).addClass("position-static"),this._popper=new qt(t,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===h(i).closest(".navbar-nav").length&&h(document.body).children().on("mouseover",null,h.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),h(this._menu).toggleClass(Jt),h(i).toggleClass(Jt).trigger(h.Event(Gt.SHOWN,e))}}},_.hide=function(){var t,e,n;this._element.disabled||h(this._element).hasClass($t)||!h(this._menu).hasClass(Jt)||(t={relatedTarget:this._element},e=h.Event(Gt.HIDE,t),n=re._getParentFromElement(this._element),h(n).trigger(e),e.isDefaultPrevented()||(this._popper&&this._popper.destroy(),h(this._menu).toggleClass(Jt),h(n).toggleClass(Jt).trigger(h.Event(Gt.HIDDEN,t))))},_.dispose=function(){h.removeData(this._element,Vt),h(this._element).off(Yt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},_.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},_._addEventListeners=function(){var e=this;h(this._element).on(Gt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},_._getConfig=function(t){return t=r({},this.constructor.Default,{},h(this._element).data(),{},t),u.typeCheckConfig(Qt,t,this.constructor.DefaultType),t},_._getMenuElement=function(){var t;return this._menu||(t=re._getParentFromElement(this._element))&&(this._menu=t.querySelector(ee)),this._menu},_._getPlacement=function(){var t=h(this._element.parentNode),e="bottom-start";return t.hasClass("dropup")?(e="top-start",h(this._menu).hasClass(Zt)&&(e="top-end")):t.hasClass("dropright")?e="right-start":t.hasClass("dropleft")?e="left-start":h(this._menu).hasClass(Zt)&&(e="bottom-end"),e},_._detectNavbar=function(){return 0<h(this._element).closest(".navbar").length},_._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=r({},t.offsets,{},e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},_._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),r({},t,{},this._config.popperConfig)},re._jQueryInterface=function(e){return this.each(function(){var t=h(this).data(Vt);if(t||(t=new re(this,"object"==typeof e?e:null),h(this).data(Vt,t)),"string"==typeof e){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},re._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(te)),n=0,i=e.length;n<i;n++){var o,r,s=re._getParentFromElement(e[n]),a=h(e[n]).data(Vt),l={relatedTarget:e[n]};t&&"click"===t.type&&(l.clickEvent=t),a&&(o=a._menu,!h(s).hasClass(Jt)||t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&h.contains(s,t.target)||(r=h.Event(Gt.HIDE,l),h(s).trigger(r),r.isDefaultPrevented()||("ontouchstart"in document.documentElement&&h(document.body).children().off("mouseover",null,h.noop),e[n].setAttribute("aria-expanded","false"),a._popper&&a._popper.destroy(),h(o).removeClass(Jt),h(s).removeClass(Jt).trigger(h.Event(Gt.HIDDEN,l)))))}},re._getParentFromElement=function(t){var e,n=u.getSelectorFromElement(t);return(e=n?document.querySelector(n):e)||t.parentNode},re._dataApiKeydownHandler=function(t){var e,n,i;(/input|textarea/i.test(t.target.tagName)?32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||h(t.target).closest(ee).length):!Xt.test(t.which))||(t.preventDefault(),t.stopPropagation(),this.disabled||h(this).hasClass($t))||(i=re._getParentFromElement(this),!(n=h(i).hasClass(Jt))&&27===t.which||(n&&(!n||27!==t.which&&32!==t.which)?0!==(e=[].slice.call(i.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function(t){return h(t).is(":visible")})).length&&(n=e.indexOf(t.target),38===t.which&&0<n&&n--,40===t.which&&n<e.length-1&&n++,e[n=n<0?0:n].focus()):(27===t.which&&(i=i.querySelector(te),h(i).trigger("focus")),h(this).trigger("click"))))},o(re,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return ne}},{key:"DefaultType",get:function(){return ie}}]),re);function re(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}h(document).on(Gt.KEYDOWN_DATA_API,te,oe._dataApiKeydownHandler).on(Gt.KEYDOWN_DATA_API,ee,oe._dataApiKeydownHandler).on(Gt.CLICK_DATA_API+" "+Gt.KEYUP_DATA_API,oe._clearMenus).on(Gt.CLICK_DATA_API,te,function(t){t.preventDefault(),t.stopPropagation(),oe._jQueryInterface.call(h(this),"toggle")}).on(Gt.CLICK_DATA_API,".dropdown form",function(t){t.stopPropagation()}),h.fn[Qt]=oe._jQueryInterface,h.fn[Qt].Constructor=oe,h.fn[Qt].noConflict=function(){return h.fn[Qt]=zt,oe._jQueryInterface};var se="modal",ae="bs.modal",le="."+ae,ce=h.fn[se],he={backdrop:!0,keyboard:!0,focus:!0,show:!0},ue={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},fe={HIDE:"hide"+le,HIDE_PREVENTED:"hidePrevented"+le,HIDDEN:"hidden"+le,SHOW:"show"+le,SHOWN:"shown"+le,FOCUSIN:"focusin"+le,RESIZE:"resize"+le,CLICK_DISMISS:"click.dismiss"+le,KEYDOWN_DISMISS:"keydown.dismiss"+le,MOUSEUP_DISMISS:"mouseup.dismiss"+le,MOUSEDOWN_DISMISS:"mousedown.dismiss"+le,CLICK_DATA_API:"click"+le+".data-api"},de="modal-open",pe="fade",me="show",ge="modal-static",_e=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ve=".sticky-top",ye=((_=Ee.prototype).toggle=function(t){return this._isShown?this.hide():this.show(t)},_.show=function(t){var e,n=this;this._isShown||this._isTransitioning||(h(this._element).hasClass(pe)&&(this._isTransitioning=!0),e=h.Event(fe.SHOW,{relatedTarget:t}),h(this._element).trigger(e),this._isShown||e.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),h(this._element).on(fe.CLICK_DISMISS,'[data-dismiss="modal"]',function(t){return n.hide(t)}),h(this._dialog).on(fe.MOUSEDOWN_DISMISS,function(){h(n._element).one(fe.MOUSEUP_DISMISS,function(t){h(t.target).is(n._element)&&(n._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return n._showElement(t)})))},_.hide=function(t){var e=this;t&&t.preventDefault(),this._isShown&&!this._isTransitioning&&(t=h.Event(fe.HIDE),h(this._element).trigger(t),this._isShown&&!t.isDefaultPrevented()&&(this._isShown=!1,(t=h(this._element).hasClass(pe))&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),h(document).off(fe.FOCUSIN),h(this._element).removeClass(me),h(this._element).off(fe.CLICK_DISMISS),h(this._dialog).off(fe.MOUSEDOWN_DISMISS),t?(t=u.getTransitionDurationFromElement(this._element),h(this._element).one(u.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(t)):this._hideModal()))},_.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return h(t).off(le)}),h(document).off(fe.FOCUSIN),h.removeData(this._element,ae),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},_.handleUpdate=function(){this._adjustDialog()},_._getConfig=function(t){return t=r({},he,{},t),u.typeCheckConfig(se,t,ue),t},_._triggerBackdropTransition=function(){var t,e=this;"static"===this._config.backdrop?(t=h.Event(fe.HIDE_PREVENTED),h(this._element).trigger(t),t.defaultPrevented||(this._element.classList.add(ge),t=u.getTransitionDurationFromElement(this._element),h(this._element).one(u.TRANSITION_END,function(){e._element.classList.remove(ge)}).emulateTransitionEnd(t),this._element.focus())):this.hide()},_._showElement=function(t){var e=this,n=h(this._element).hasClass(pe),i=this._dialog?this._dialog.querySelector(".modal-body"):null;function o(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,h(e._element).trigger(r)}this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),h(this._dialog).hasClass("modal-dialog-scrollable")&&i?i.scrollTop=0:this._element.scrollTop=0,n&&u.reflow(this._element),h(this._element).addClass(me),this._config.focus&&this._enforceFocus();var r=h.Event(fe.SHOWN,{relatedTarget:t});n?(n=u.getTransitionDurationFromElement(this._dialog),h(this._dialog).one(u.TRANSITION_END,o).emulateTransitionEnd(n)):o()},_._enforceFocus=function(){var e=this;h(document).off(fe.FOCUSIN).on(fe.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===h(e._element).has(t.target).length&&e._element.focus()})},_._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?h(this._element).on(fe.KEYDOWN_DISMISS,function(t){27===t.which&&e._triggerBackdropTransition()}):this._isShown||h(this._element).off(fe.KEYDOWN_DISMISS)},_._setResizeEvent=function(){var e=this;this._isShown?h(window).on(fe.RESIZE,function(t){return e.handleUpdate(t)}):h(window).off(fe.RESIZE)},_._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){h(document.body).removeClass(de),t._resetAdjustments(),t._resetScrollbar(),h(t._element).trigger(fe.HIDDEN)})},_._removeBackdrop=function(){this._backdrop&&(h(this._backdrop).remove(),this._backdrop=null)},_._showBackdrop=function(t){var e,n=this,i=h(this._element).hasClass(pe)?pe:"";this._isShown&&this._config.backdrop?(this._backdrop=document.createElement("div"),this._backdrop.className="modal-backdrop",i&&this._backdrop.classList.add(i),h(this._backdrop).appendTo(document.body),h(this._element).on(fe.CLICK_DISMISS,function(t){n._ignoreBackdropClick?n._ignoreBackdropClick=!1:t.target===t.currentTarget&&n._triggerBackdropTransition()}),i&&u.reflow(this._backdrop),h(this._backdrop).addClass(me),t&&(i?(e=u.getTransitionDurationFromElement(this._backdrop),h(this._backdrop).one(u.TRANSITION_END,t).emulateTransitionEnd(e)):t())):!this._isShown&&this._backdrop?(h(this._backdrop).removeClass(me),i=function(){n._removeBackdrop(),t&&t()},h(this._element).hasClass(pe)?(e=u.getTransitionDurationFromElement(this._backdrop),h(this._backdrop).one(u.TRANSITION_END,i).emulateTransitionEnd(e)):i()):t&&t()},_._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},_._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},_._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},_._setScrollbar=function(){var t,e,o=this;this._isBodyOverflowing&&(t=[].slice.call(document.querySelectorAll(_e)),e=[].slice.call(document.querySelectorAll(ve)),h(t).each(function(t,e){var n=e.style.paddingRight,i=h(e).css("padding-right");h(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),h(e).each(function(t,e){var n=e.style.marginRight,i=h(e).css("margin-right");h(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")}),t=document.body.style.paddingRight,e=h(document.body).css("padding-right"),h(document.body).data("padding-right",t).css("padding-right",parseFloat(e)+this._scrollbarWidth+"px")),h(document.body).addClass(de)},_._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(_e));h(t).each(function(t,e){var n=h(e).data("padding-right");h(e).removeData("padding-right"),e.style.paddingRight=n||""});t=[].slice.call(document.querySelectorAll(ve));h(t).each(function(t,e){var n=h(e).data("margin-right");void 0!==n&&h(e).css("margin-right",n).removeData("margin-right")});t=h(document.body).data("padding-right");h(document.body).removeData("padding-right"),document.body.style.paddingRight=t||""},_._getScrollbarWidth=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},Ee._jQueryInterface=function(n,i){return this.each(function(){var t=h(this).data(ae),e=r({},he,{},h(this).data(),{},"object"==typeof n&&n?n:{});if(t||(t=new Ee(this,e),h(this).data(ae,t)),"string"==typeof n){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},o(Ee,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return he}}]),Ee);function Ee(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(".modal-dialog"),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}h(document).on(fe.CLICK_DATA_API,'[data-toggle="modal"]',function(t){var e,n=this,i=u.getSelectorFromElement(this);i&&(e=document.querySelector(i));i=h(e).data(ae)?"toggle":r({},h(e).data(),{},h(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var o=h(e).one(fe.SHOW,function(t){t.isDefaultPrevented()||o.one(fe.HIDDEN,function(){h(n).is(":visible")&&n.focus()})});ye._jQueryInterface.call(h(e),i,this)}),h.fn[se]=ye._jQueryInterface,h.fn[se].Constructor=ye,h.fn[se].noConflict=function(){return h.fn[se]=ce,ye._jQueryInterface};var be=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],we=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Ce(t,o,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var t=(new window.DOMParser).parseFromString(t,"text/html"),r=Object.keys(o),s=[].slice.call(t.body.querySelectorAll("*")),n=0,i=s.length;n<i;n++)!function(t){var e=s[t],n=e.nodeName.toLowerCase();if(-1===r.indexOf(e.nodeName.toLowerCase()))return e.parentNode.removeChild(e);var t=[].slice.call(e.attributes),i=[].concat(o["*"]||[],o[n]||[]);t.forEach(function(t){!function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===be.indexOf(n)||Boolean(t.nodeValue.match(we)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return 1}(t,i)&&e.removeAttribute(t.nodeName)})}(n);return t.body.innerHTML}var Se="tooltip",De="bs.tooltip",Ie="."+De,Ae=h.fn[Se],Oe="bs-tooltip",Ne=new RegExp("(^|\\s)"+Oe+"\\S+","g"),ke=["sanitize","whiteList","sanitizeFn"],Le={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},xe={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},je="show",He={HIDE:"hide"+Ie,HIDDEN:"hidden"+Ie,SHOW:"show"+Ie,SHOWN:"shown"+Ie,INSERTED:"inserted"+Ie,CLICK:"click"+Ie,FOCUSIN:"focusin"+Ie,FOCUSOUT:"focusout"+Ie,MOUSEENTER:"mouseenter"+Ie,MOUSELEAVE:"mouseleave"+Ie},Re="fade",Fe="show",Me="hover",We="focus",Ue=((_=Be.prototype).enable=function(){this._isEnabled=!0},_.disable=function(){this._isEnabled=!1},_.toggleEnabled=function(){this._isEnabled=!this._isEnabled},_.toggle=function(t){var e,n;this._isEnabled&&(t?(e=this.constructor.DATA_KEY,(n=h(t.currentTarget).data(e))||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),h(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)):h(this.getTipElement()).hasClass(Fe)?this._leave(null,this):this._enter(null,this))},_.dispose=function(){clearTimeout(this._timeout),h.removeData(this.element,this.constructor.DATA_KEY),h(this.element).off(this.constructor.EVENT_KEY),h(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&h(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},_.show=function(){var e=this;if("none"===h(this.element).css("display"))throw new Error("Please use show on visible elements");var t,n,i=h.Event(this.constructor.Event.SHOW);this.isWithContent()&&this._isEnabled&&(h(this.element).trigger(i),n=u.findShadowRoot(this.element),t=h.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element),!i.isDefaultPrevented()&&t&&(n=this.getTipElement(),i=u.getUID(this.constructor.NAME),n.setAttribute("id",i),this.element.setAttribute("aria-describedby",i),this.setContent(),this.config.animation&&h(n).addClass(Re),t="function"==typeof this.config.placement?this.config.placement.call(this,n,this.element):this.config.placement,i=this._getAttachment(t),this.addAttachmentClass(i),t=this._getContainer(),h(n).data(this.constructor.DATA_KEY,this),h.contains(this.element.ownerDocument.documentElement,this.tip)||h(n).appendTo(t),h(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new qt(this.element,n,this._getPopperConfig(i)),h(n).addClass(Fe),"ontouchstart"in document.documentElement&&h(document.body).children().on("mouseover",null,h.noop),i=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,h(e.element).trigger(e.constructor.Event.SHOWN),"out"===t&&e._leave(null,e)},h(this.tip).hasClass(Re)?(n=u.getTransitionDurationFromElement(this.tip),h(this.tip).one(u.TRANSITION_END,i).emulateTransitionEnd(n)):i()))},_.hide=function(t){function e(){n._hoverState!==je&&i.parentNode&&i.parentNode.removeChild(i),n._cleanTipClass(),n.element.removeAttribute("aria-describedby"),h(n.element).trigger(n.constructor.Event.HIDDEN),null!==n._popper&&n._popper.destroy(),t&&t()}var n=this,i=this.getTipElement(),o=h.Event(this.constructor.Event.HIDE);h(this.element).trigger(o),o.isDefaultPrevented()||(h(i).removeClass(Fe),"ontouchstart"in document.documentElement&&h(document.body).children().off("mouseover",null,h.noop),this._activeTrigger.click=!1,this._activeTrigger[We]=!1,this._activeTrigger[Me]=!1,h(this.tip).hasClass(Re)?(o=u.getTransitionDurationFromElement(i),h(i).one(u.TRANSITION_END,e).emulateTransitionEnd(o)):e(),this._hoverState="")},_.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},_.isWithContent=function(){return Boolean(this.getTitle())},_.addAttachmentClass=function(t){h(this.getTipElement()).addClass(Oe+"-"+t)},_.getTipElement=function(){return this.tip=this.tip||h(this.config.template)[0],this.tip},_.setContent=function(){var t=this.getTipElement();this.setElementContent(h(t.querySelectorAll(".tooltip-inner")),this.getTitle()),h(t).removeClass(Re+" "+Fe)},_.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Ce(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?h(e).parent().is(t)||t.empty().append(e):t.text(h(e).text())},_.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||("function"==typeof this.config.title?this.config.title.call(this.element):this.config.title)},_._getPopperConfig=function(t){var e=this;return r({},{placement:t,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}},{},this.config.popperConfig)},_._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=r({},t.offsets,{},e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},_._getContainer=function(){return!1===this.config.container?document.body:u.isElement(this.config.container)?h(this.config.container):h(document).find(this.config.container)},_._getAttachment=function(t){return Pe[t.toUpperCase()]},_._setListeners=function(){var n=this;this.config.trigger.split(" ").forEach(function(t){var e;"click"===t?h(n.element).on(n.constructor.Event.CLICK,n.config.selector,function(t){return n.toggle(t)}):"manual"!==t&&(e=t===Me?n.constructor.Event.MOUSEENTER:n.constructor.Event.FOCUSIN,t=t===Me?n.constructor.Event.MOUSELEAVE:n.constructor.Event.FOCUSOUT,h(n.element).on(e,n.config.selector,function(t){return n._enter(t)}).on(t,n.config.selector,function(t){return n._leave(t)}))}),this._hideModalHandler=function(){n.element&&n.hide()},h(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=r({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},_._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");!this.element.getAttribute("title")&&"string"==t||(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},_._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||h(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),h(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?We:Me]=!0),h(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},_._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||h(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),h(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?We:Me]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){"out"===e._hoverState&&e.hide()},e.config.delay.hide):e.hide())},_._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},_._getConfig=function(t){var e=h(this.element).data();return Object.keys(e).forEach(function(t){-1!==ke.indexOf(t)&&delete e[t]}),"number"==typeof(t=r({},this.constructor.Default,{},e,{},"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),u.typeCheckConfig(Se,t,this.constructor.DefaultType),t.sanitize&&(t.template=Ce(t.template,t.whiteList,t.sanitizeFn)),t},_._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},_._cleanTipClass=function(){var t=h(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},_._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},_._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(h(t).removeClass(Re),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},Be._jQueryInterface=function(n){return this.each(function(){var t=h(this).data(De),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new Be(this,e),h(this).data(De,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(Be,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return xe}},{key:"NAME",get:function(){return Se}},{key:"DATA_KEY",get:function(){return De}},{key:"Event",get:function(){return He}},{key:"EVENT_KEY",get:function(){return Ie}},{key:"DefaultType",get:function(){return Le}}]),Be);function Be(t,e){if(void 0===qt)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}h.fn[Se]=Ue._jQueryInterface,h.fn[Se].Constructor=Ue,h.fn[Se].noConflict=function(){return h.fn[Se]=Ae,Ue._jQueryInterface};var qe="popover",Ke="bs.popover",Qe="."+Ke,Ve=h.fn[qe],Ye="bs-popover",ze=new RegExp("(^|\\s)"+Ye+"\\S+","g"),Xe=r({},Ue.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ge=r({},Ue.DefaultType,{content:"(string|element|function)"}),$e={HIDE:"hide"+Qe,HIDDEN:"hidden"+Qe,SHOW:"show"+Qe,SHOWN:"shown"+Qe,INSERTED:"inserted"+Qe,CLICK:"click"+Qe,FOCUSIN:"focusin"+Qe,FOCUSOUT:"focusout"+Qe,MOUSEENTER:"mouseenter"+Qe,MOUSELEAVE:"mouseleave"+Qe},Je=function(t){function i(){return t.apply(this,arguments)||this}var e;n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var n=i.prototype;return n.isWithContent=function(){return this.getTitle()||this._getContent()},n.addAttachmentClass=function(t){h(this.getTipElement()).addClass(Ye+"-"+t)},n.getTipElement=function(){return this.tip=this.tip||h(this.config.template)[0],this.tip},n.setContent=function(){var t=h(this.getTipElement());this.setElementContent(t.find(".popover-header"),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(".popover-body"),e),t.removeClass("fade show")},n._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},n._cleanTipClass=function(){var t=h(this.getTipElement()),e=t.attr("class").match(ze);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=h(this).data(Ke),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),h(this).data(Ke,t)),"string"==typeof n)){if(void 0===t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},o(i,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return Xe}},{key:"NAME",get:function(){return qe}},{key:"DATA_KEY",get:function(){return Ke}},{key:"Event",get:function(){return $e}},{key:"EVENT_KEY",get:function(){return Qe}},{key:"DefaultType",get:function(){return Ge}}]),i}(Ue);h.fn[qe]=Je._jQueryInterface,h.fn[qe].Constructor=Je,h.fn[qe].noConflict=function(){return h.fn[qe]=Ve,Je._jQueryInterface};var Ze="scrollspy",tn="bs.scrollspy",en="."+tn,nn=h.fn[Ze],on={offset:10,method:"auto",target:""},rn={offset:"number",method:"string",target:"(string|element)"},sn={ACTIVATE:"activate"+en,SCROLL:"scroll"+en,LOAD_DATA_API:"load"+en+".data-api"},an="active",ln=".nav, .list-group",cn=".nav-link",hn=".list-group-item",un="position",fn=((_=dn.prototype).refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?"offset":un,i="auto"===this._config.method?t:this._config.method,o=i===un?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=u.getSelectorFromElement(t);if(e=n?document.querySelector(n):e){t=e.getBoundingClientRect();if(t.width||t.height)return[h(e)[i]().top+o,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},_.dispose=function(){h.removeData(this._element,tn),h(this._scrollElement).off(en),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},_._getConfig=function(t){var e;return"string"!=typeof(t=r({},on,{},"object"==typeof t&&t?t:{})).target&&((e=h(t.target).attr("id"))||(e=u.getUID(Ze),h(t.target).attr("id",e)),t.target="#"+e),u.typeCheckConfig(Ze,t,rn),t},_._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},_._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},_._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},_._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){n=this._targets[this._targets.length-1];this._activeTarget!==n&&this._activate(n)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var i=this._offsets.length;i--;)this._activeTarget!==this._targets[i]&&t>=this._offsets[i]&&(void 0===this._offsets[i+1]||t<this._offsets[i+1])&&this._activate(this._targets[i])}},_._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),t=h([].slice.call(document.querySelectorAll(t.join(","))));t.hasClass("dropdown-item")?(t.closest(".dropdown").find(".dropdown-toggle").addClass(an),t.addClass(an)):(t.addClass(an),t.parents(ln).prev(cn+", "+hn).addClass(an),t.parents(ln).prev(".nav-item").children(cn).addClass(an)),h(this._scrollElement).trigger(sn.ACTIVATE,{relatedTarget:e})},_._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(an)}).forEach(function(t){return t.classList.remove(an)})},dn._jQueryInterface=function(e){return this.each(function(){var t=h(this).data(tn);if(t||(t=new dn(this,"object"==typeof e&&e),h(this).data(tn,t)),"string"==typeof e){if(void 0===t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},o(dn,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"Default",get:function(){return on}}]),dn);function dn(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+cn+","+this._config.target+" "+hn+","+this._config.target+" .dropdown-item",this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,h(this._scrollElement).on(sn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}h(window).on(sn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll('[data-spy="scroll"]')),e=t.length;e--;){var n=h(t[e]);fn._jQueryInterface.call(n,n.data())}}),h.fn[Ze]=fn._jQueryInterface,h.fn[Ze].Constructor=fn,h.fn[Ze].noConflict=function(){return h.fn[Ze]=nn,fn._jQueryInterface};var pn="bs.tab",_="."+pn,mn=h.fn.tab,gn={HIDE:"hide"+_,HIDDEN:"hidden"+_,SHOW:"show"+_,SHOWN:"shown"+_,CLICK_DATA_API:"click"+_+".data-api"},_n="active",vn=".active",yn="> li > .active",En=((_=bn.prototype).show=function(){var t,e,n,i,o,r,s=this;this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&h(this._element).hasClass(_n)||h(this._element).hasClass("disabled")||(r=h(this._element).closest(".nav, .list-group")[0],e=u.getSelectorFromElement(this._element),r&&(o="UL"===r.nodeName||"OL"===r.nodeName?yn:vn,n=(n=h.makeArray(h(r).find(o)))[n.length-1]),i=h.Event(gn.HIDE,{relatedTarget:this._element}),o=h.Event(gn.SHOW,{relatedTarget:n}),n&&h(n).trigger(i),h(this._element).trigger(o),o.isDefaultPrevented()||i.isDefaultPrevented()||(e&&(t=document.querySelector(e)),this._activate(this._element,r),r=function(){var t=h.Event(gn.HIDDEN,{relatedTarget:s._element}),e=h.Event(gn.SHOWN,{relatedTarget:n});h(n).trigger(t),h(s._element).trigger(e)},t?this._activate(t,t.parentNode,r):r()))},_.dispose=function(){h.removeData(this._element,pn),this._element=null},_._activate=function(t,e,n){function i(){return o._transitionComplete(t,r,n)}var o=this,r=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?h(e).children(vn):h(e).find(yn))[0],e=n&&r&&h(r).hasClass("fade");r&&e?(e=u.getTransitionDurationFromElement(r),h(r).removeClass("show").one(u.TRANSITION_END,i).emulateTransitionEnd(e)):i()},_._transitionComplete=function(t,e,n){var i;e&&(h(e).removeClass(_n),(i=h(e.parentNode).find("> .dropdown-menu .active")[0])&&h(i).removeClass(_n),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)),h(t).addClass(_n),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),u.reflow(t),t.classList.contains("fade")&&t.classList.add("show"),t.parentNode&&h(t.parentNode).hasClass("dropdown-menu")&&((e=h(t).closest(".dropdown")[0])&&(e=[].slice.call(e.querySelectorAll(".dropdown-toggle")),h(e).addClass(_n)),t.setAttribute("aria-expanded",!0)),n&&n()},bn._jQueryInterface=function(n){return this.each(function(){var t=h(this),e=t.data(pn);if(e||(e=new bn(this),t.data(pn,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},o(bn,null,[{key:"VERSION",get:function(){return"4.4.1"}}]),bn);function bn(t){this._element=t}h(document).on(gn.CLICK_DATA_API,'[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',function(t){t.preventDefault(),En._jQueryInterface.call(h(this),"show")}),h.fn.tab=En._jQueryInterface,h.fn.tab.Constructor=En,h.fn.tab.noConflict=function(){return h.fn.tab=mn,En._jQueryInterface};var wn="toast",Tn="bs.toast",_="."+Tn,Cn=h.fn[wn],Sn={CLICK_DISMISS:"click.dismiss"+_,HIDE:"hide"+_,HIDDEN:"hidden"+_,SHOW:"show"+_,SHOWN:"shown"+_},Dn="show",In="showing",An={animation:"boolean",autohide:"boolean",delay:"number"},On={animation:!0,autohide:!0,delay:500},Nn=((_=kn.prototype).show=function(){var t,e=this,n=h.Event(Sn.SHOW);h(this._element).trigger(n),n.isDefaultPrevented()||(this._config.animation&&this._element.classList.add("fade"),t=function(){e._element.classList.remove(In),e._element.classList.add(Dn),h(e._element).trigger(Sn.SHOWN),e._config.autohide&&(e._timeout=setTimeout(function(){e.hide()},e._config.delay))},this._element.classList.remove("hide"),u.reflow(this._element),this._element.classList.add(In),this._config.animation?(n=u.getTransitionDurationFromElement(this._element),h(this._element).one(u.TRANSITION_END,t).emulateTransitionEnd(n)):t())},_.hide=function(){var t;this._element.classList.contains(Dn)&&(t=h.Event(Sn.HIDE),h(this._element).trigger(t),t.isDefaultPrevented()||this._close())},_.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Dn)&&this._element.classList.remove(Dn),h(this._element).off(Sn.CLICK_DISMISS),h.removeData(this._element,Tn),this._element=null,this._config=null},_._getConfig=function(t){return t=r({},On,{},h(this._element).data(),{},"object"==typeof t&&t?t:{}),u.typeCheckConfig(wn,t,this.constructor.DefaultType),t},_._setListeners=function(){var t=this;h(this._element).on(Sn.CLICK_DISMISS,'[data-dismiss="toast"]',function(){return t.hide()})},_._close=function(){function t(){n._element.classList.add("hide"),h(n._element).trigger(Sn.HIDDEN)}var e,n=this;this._element.classList.remove(Dn),this._config.animation?(e=u.getTransitionDurationFromElement(this._element),h(this._element).one(u.TRANSITION_END,t).emulateTransitionEnd(e)):t()},kn._jQueryInterface=function(n){return this.each(function(){var t=h(this),e=t.data(Tn);if(e||(e=new kn(this,"object"==typeof n&&n),t.data(Tn,e)),"string"==typeof n){if(void 0===e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},o(kn,null,[{key:"VERSION",get:function(){return"4.4.1"}},{key:"DefaultType",get:function(){return An}},{key:"Default",get:function(){return On}}]),kn);function kn(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}h.fn[wn]=Nn._jQueryInterface,h.fn[wn].Constructor=Nn,h.fn[wn].noConflict=function(){return h.fn[wn]=Cn,Nn._jQueryInterface},t.Alert=d,t.Button=T,t.Carousel=R,t.Collapse=G,t.Dropdown=oe,t.Modal=ye,t.Popover=Je,t.Scrollspy=fn,t.Tab=En,t.Toast=Nn,t.Tooltip=Ue,t.Util=u,Object.defineProperty(t,"__esModule",{value:!0})});
$(function () {
  /*************************************************************/

  // global variables
  var serversNumber = 66;
  var serversCountries = 48;
  var streamingServices = "400+";
  // put the src of trustpilot image in hero section in a variable to change from here
  const trustpilotInHero = document.querySelector(".trustpilot_img a img");
  const trustpilotInOrder = document.querySelector(".trustpilot_img_one a img");
  if (trustpilotInHero) {
    trustpilotInHero.src = "imgs/trustpilot/trustpilot_lg_4.3_w.svg";
  }
  if (trustpilotInOrder) {
    trustpilotInOrder.src = "imgs/trustpilot/trustpilot_sm_4.3.svg";
  }

  $("span.serversCountries").text(serversCountries);

  // check the code is correct on stack commerce page
  const stackCode = document.querySelector(".access-code #code");
  const codeErrorMsg = document.querySelector(".coder-error");
  const RightCode = "SADF-20OL-24HG-2DF4";

  const codeInitialState = function () {
    codeErrorMsg.classList.remove("active");
    document.querySelector(".error-icon").style.display = "none";
    document.querySelector(".success-icon").style.display = "none";
  };
  if (stackCode) {
    stackCode.addEventListener("keyup", eo => {
      if (stackCode.value) {
        if (eo.target.value === RightCode) {
          codeInitialState();
          document.querySelector(".success-icon").style.display = "block";
        } else {
          codeErrorMsg.classList.add("active");
          document.querySelector(".error-icon").style.display = "block";
          document.querySelector(".success-icon").style.display = "none";
        }
      } else {
        codeInitialState();
      }
    });
  }

  // jobs page
  // to type the name of file choosen instead of the span(upload and attachment)
  var input = $("#inputfile"),
    span = input.prev("span"),
    spanVal = span.html();

  input.on("change", function () {
    var file = input[0].files[0];

    if (file != "") {
      span.html(file.name);
      span.css("color", "#5b5863");
    } else {
      span.html(spanVal);
      span.css("color", "#8d8b92");
    }
  });

  $(window).on("resize", function () {
    orderWevpnPlanFeatures();
  });

  function orderWevpnPlanFeatures() {
    if ($(window).width() < 992) {
      $(".wevpn-plan-features").insertAfter("#wevpn-payment");
    } else {
      $("#wevpn-plan-features").append($(".wevpn-plan-features"));
    }
  }
  orderWevpnPlanFeatures();

  $("[data-load]").each(function () {
    $(this).load($(this).data("load"), function () {
      // add class active on navbar link and remove from siblings

      $("#year-now").text(new Date().getFullYear());
      // to load the trustpilot inside the footer
      // var element = document.getElementsByClassName("trustpilot-widget");
      // for (var i = 0; i < element.length; i++) {
      //   window.Trustpilot.loadFromElement(element[i]);
      // }

      const currentLocation = location.href;
      $(".platform-content .platform-list .item").each(function () {
        if ("http://localhost:8080" + $(this).find("a").attr("href") + ".html" === currentLocation) {
          $(this).addClass("active");
        } else if ("https://wevpn.com" + $(this).find("a").attr("href") === currentLocation) {
          $(this).addClass("active");
        }
      });

      $(".nav-item .dropdown--menu ul li").each(function () {
        if ("http://localhost:8080" + $(this).find("a").attr("href") + ".html" === currentLocation) {
          $(this).addClass("active");
          $(this).parents(".nav-item").addClass("active");
        } else if ("https://wevpn.com" + $(this).find("a").attr("href") === currentLocation) {
          $(this).addClass("active");
          $(this).parents(".nav-item").addClass("active");
        }
      });

      $(".navbar-nav .nav-item").each(function () {
        if ("http://localhost:8080" + $(this).find("a").attr("href") + ".html" === currentLocation) {
          $(this).addClass("active");
        } else if ("https://wevpn.com" + $(this).find("a").attr("href") === currentLocation) {
          $(this).addClass("active");
        }
      });

      $(".languageButton").dropdown();

      $(".dropdown-menu a").on("click", function (e) {
        e.preventDefault();
        $(".languageButton").html($(this).html());
        $(".languageButton").find("img").attr("src", $(this).find("img").attr("src"));
        $(".dropdown-menu").removeClass("show");
        $(".lang-collapse").removeClass("show");
        $("body, html").removeClass("overlay");
        var language = $(this).find("span").text();
        $.ajax({
          url: "https://wevpn.com/billing/index.php?m=dashboard&action=language",
          data: { lang: language },
          success: function (d) {
            $.ajax({
              url: "/lang.php",
              data: "",
              success: function (d) {
                if (d.result == "success") {
                  $.each(d.translations, function (index, value) {
                    var element = $(document).find("span[data-translation-id='" + index + "']");
                    element.text(value);
                    element = $(document).find("h1[data-translation-id='" + index + "']");
                    element.text(value);
                    element = $(document).find("h2[data-translation-id='" + index + "']");
                    element.text(value);
                    element = $(document).find("h3[data-translation-id='" + index + "']");
                    element.text(value);
                    element = $(document).find("h4[data-translation-id='" + index + "']");
                    element.text(value);
                    element = $(document).find("h6[data-translation-id='" + index + "']");
                    element.text(value);
                    element = $(document).find("p[data-translation-id='" + index + "']");
                    element.text(value);
                    element = $(document).find("button[data-translation-id='" + index + "']");
                    element.text(value);
                    element = $(document).find("option[data-translation-id='" + index + "']");
                    element.text(value);
                  });
                }
              },
              dataType: "json",
              error: function () {}
            });
          },
          dataType: "json",
          error: function () {}
        });
      });

      $("span.streamingServices").text(streamingServices);
      $("span.serversNumber").text(serversNumber);

      $(".open-intercom-chat,#my_custom_link").on("click", function () {
        $(".chat-button").click();
      });

      // Assign variables for the price in wevpn button
      $(".wevpn-price").text("$2.59/mo");
      // Assign variables for the plan prices
      $(".price-card.two .bill-month .value").text("2");
      $(".price-card.two .bill-month .cent").text("59");
      $(".price-card.two .offer").text("Save 74%");
      $(".price-card.three .bill-month .value").text("4");
      $(".price-card.three .bill-month .cent").text("16");
      $(".price-card.three .offer").text("Save 58%");
      $(".price-card.four .offer").text("Save 50%");
      $(".wevpn-total-price-2year").text("69.95");
      $(".wevpn-total-price-1year").text("49.95");
      $(".wevpn-total-price-6month").text("29.95");
      $(".plan.plan-12 .savings").text("Savings: 74%");
      $(".plan.plan-6 .savings").text("Savings: 58%");
      $(".plan.plan-6mo .savings").text("Savings: 50%");

      toggleInFooter()
    });
  });

  function toggleInFooter() {
    // Bind event listener
    if ($(window).width() < 768) {
      // footer in mobile screen
      $("h4.footer-item-title").on("click", function () {
        $(this).toggleClass("active").next("ul").slideToggle();
      });
    }
  }

  toggleInFooter()

  // geolocation code
  $.ajax({
    url: "https://ipcheck.wevpn.com/api/v1/ip",
    data: "",
    success: function (data) {
      $.ajax({
        url: "/includes/g.php?data=" + btoa(data),
        data: "",
        success: function (data) {
          $("#ip").html(data.ip);
          $("#isp").html(data.isp);
          $(".ip-info .ip-value").text(data.ip);
          $(".ip-info .isp-value").text(data.isp);
          $(".ip-info .location-value").text(data.country + " - " + data.city);
          if (data.city) {
            $("#location").html(data.city + " (" + data.country + ")");
          } else {
            $(".top-header ul li:nth-child(1)").remove();
          }
          //Openmap
          var zoom = 11;
          tileX = Math.floor(((data.longitude + 180) / 360) * Math.pow(2, zoom));
          tileY = Math.floor(((1 - Math.log(Math.tan((data.latitude * Math.PI) / 180) + 1 / Math.cos((data.latitude * Math.PI) / 180)) / Math.PI) / 2) * Math.pow(2, zoom));
          zoomUrl = "https://tile.openstreetmap.org/" + zoom + "/" + tileX + "/" + tileY + ".png";
          $(".map-picture").attr("src", zoomUrl);
          $(".ip-address-info .loader-wrapper").hide();
          $(".ip-address-info-content.whats-my-ip").removeClass("d-none");
          if (data.protected === true) {
            $(".ip-address-info-content.whats-my-ip").addClass("ip-protected");
            $(".ip-address-info-content.dns-info").addClass("dns-protected");
            $(".exposed").html("Protected");
            $(".get-protected").hide();
            if ($(".exposed").length) {
              $(".top-header a").hide();
            } else {
              $(".top-header a").replaceWith("<strong>Protected</strong>");
            }
          } else {
            $(".exposed").html("Exposed");
            $(".top-header a").show();
            $(".ip-address-info-content.whats-my-ip").removeClass("ip-protected");
            $(".ip-address-info-content.dns-info").removeClass("dns-protected");
          }
        },
        dataType: "json",
        error: function () {}
      });
    },
    error: function () {}
  });

  // Update header login buttons
  $.getJSON("https://wevpn.com/billing/index.php?m=dashboard&action=islogged", function (data) {
    if (data.message == true) {
      $(".get-started-login").show();
      $(".header-white .login").hide();
    }
  });

  //Translate site if parameter lang set
  searchParams = new URLSearchParams(window.location.search);
  if (searchParams.get("lang")) {
    $.ajax({
      url: "https://wevpn.com/billing/index.php?m=dashboard&action=language",
      data: { lang: searchParams.get("lang") },
      success: function (d) {
        $.ajax({
          url: "/lang.php",
          data: "",
          success: function (d) {
            if (d.result == "success") {
              $.each(d.translations, function (index, value) {
                var element = $(document).find("span[data-translation-id='" + index + "']");
                element.text(value);
                element = $(document).find("h1[data-translation-id='" + index + "']");
                element.text(value);
                element = $(document).find("h2[data-translation-id='" + index + "']");
                element.text(value);
                element = $(document).find("h3[data-translation-id='" + index + "']");
                element.text(value);
                element = $(document).find("h4[data-translation-id='" + index + "']");
                element.text(value);
                element = $(document).find("h6[data-translation-id='" + index + "']");
                element.text(value);
                element = $(document).find("p[data-translation-id='" + index + "']");
                element.text(value);
                element = $(document).find("button[data-translation-id='" + index + "']");
                element.text(value);
                element = $(document).find("option[data-translation-id='" + index + "']");
                element.text(value);
              });
            }
          },
          dataType: "json",
          error: function () {}
        });
      },
      dataType: "json",
      error: function () {}
    });
  }

  //Hide app store buttons if adsense parameter
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const adsenseTag = urlParams.get("as");
  if (adsenseTag == "h") {
    $(".app-hero-btns div:last").hide();
  }

  /* Header */
  /*************************************************************/

  /*************************************************************/
  /* Dashboard page */
  /*************************************************************/

  // switch between tabs in dashboard page
  $(".dashboard-list li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".list-content > div").hide();
    $($(this).data("content")).fadeIn();
    $(".payment-features").hide();
    $(".upgrade-plan-content").hide();
    $(".dashboard h2").text($(this).find("a").text());
  });

  // dashboard tab
  $(".configuration-info .close").on("click", function () {
    $(".light-box").removeClass("is-visible");
  });

  // show credentials
  $(".configuration-info .show-credentials").on("click", function () {
    $(".light-box.one").addClass("is-visible");
  });
  // show credentials
  $(".configuration-info .show-profile").on("click", function () {
    $(".light-box.two").addClass("is-visible");
  });

  // tooltip in credentials in dashboard page
  $(".my-tooltip button").on("click", function () {
    $(this).parent().prev().find("input").select();
    document.execCommand("copy");

    $(this).find(".tooltiptext").text("Copied!");
    $(".tooltiptext").css("background-color", "#08ae7e");
    $(".tooltiptext").addClass("changed");
  });

  $(".my-tooltip button").on("mouseleave", function () {
    $(this).find(".tooltiptext").text("Copy");
    $(".tooltiptext").css("background-color", "#4f4f4f");
    $(".tooltiptext").removeClass("changed");
  });

  // when click menu button in subscription settings tab open cancel button
  // subscription popup
  $(".list li .list-item-text .menu-btn").on("click", function () {
    $(".list li .cancel").fadeToggle(200);
  });

  // hide Cancel Automatic Renewal button when click on it
  $(".list li .cancel").on("click", function () {
    $(this).fadeOut();
  });

  // change password tab in dashboard
  // Checking the complexity rules
  $(".change-password-content form .input-password").keyup(function () {
    var pswd = $(this).val();
    //validate the length
    if (pswd.length < 8 || pswd.length > 20) {
      $(".check-password ul #length").removeClass("valid").addClass("invalid");
    } else {
      $(".check-password ul #length").removeClass("invalid").addClass("valid");
    }

    //validate number
    if (pswd.match(/\d/)) {
      $(".check-password ul #number").removeClass("invalid").addClass("valid");
    } else {
      $(".check-password ul #number").removeClass("valid").addClass("invalid");
    }

    //validate symbol
    if (pswd.match(/(?=.*[!@#$%^&*~()_+=./{}<>?'":])/)) {
      $(".check-password ul #symbol").removeClass("invalid").addClass("valid");
    } else {
      $(".check-password ul #symbol").removeClass("valid").addClass("invalid");
    }
  });

  // when click on save new password
  $(".left-col form .save_password,.save_email").on("click", function (e) {
    e.preventDefault();
    // if($('#currentPassword').val() == '') {
    //   console.log("Enter your current password");
    // } else if($('.input-password').val() == '') {
    //   console.log("Enter your new password");
    // } else if ($(".input-password").val() != "") {
    //   if ($(".input-password").val() != $(".input-confirm-password").val()) {
    //     console.log("password not matched");
    //   }
    // } else if ($('#currentPassword').val() != '' && $('.input-password').val() != '' && $(".input-password").val() == $(".input-confirm-password").val()){
    //   $('#change-password').modal('toggle')
    // }
  });

  // weplay tab in dahsboard page
  // switch between weplay thanks message and submit form
  $(".weplay-content .submit button").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".weplay-content").hide();
    $(".thanks-for-submission").show();
  });

  $(".toggle-item .check").on("click", function () {
    if (this.checked == true) {
      $(this).parents(".toggle-item").siblings(".item").addClass("checked");
    } else {
      $(this).parents(".toggle-item").siblings(".item").removeClass("checked");
    }
  });

  $(".invoices > .cell, .requests .ip-address .ip-value").on("click", function () {
    $(this).toggleClass("active").siblings().removeClass("active");
    $(this).next(".toggle").slideToggle();
    $(".toggle").not($(this).next(".toggle")).slideUp();
  });

  /*************************************************************/
  /* Servers page */
  /*************************************************************/

  // dots animation on the map in the server page
  setRandomClass();
  setInterval(function () {
    setRandomClass();
  }, 4000);

  function setRandomClass() {
    var ul = $("#dots");
    var items = ul.find(".dot");
    var number = items.length;
    var random = Math.floor(Math.random() * number);
    items.removeClass("pulsing");
    items.eq(random).addClass("pulsing");
  }

  $(document).on("click", ".panel-country-header.has-cluster", function () {
    $(this).next(".has-clusters").slideToggle();
    $(this).parent().find(".panel-country-body").slideToggle();
  });

  $(document).on("click", ".panel-country-header", function () {
    $(this).toggleClass("active").next(".panel-country-body").slideToggle();
  });

  $(document).on("click", ".panel-cluster-header", function () {
    $(this).toggleClass("active").next(".panel-cluster-body").slideToggle();
  });

  $(".americas").on("click", "tr#canada", function () {
    $(this).siblings(".canada-city").slideToggle(100);
  });
  $(document).on("click", "tr#usa", function () {
    $(this).siblings(".usa-city").slideToggle(100);
  });
  $(document).on("click", "tr#uk", function () {
    $(this).siblings(".uk-city").slideToggle(100);
  });
  $(document).on("click", "tr#australia", function () {
    $(this).siblings(".australia-city").slideToggle(100);
  });
  $(document).on("click", "tr#russia", function () {
    $(this).siblings(".russia-city").slideToggle(100);
  });
  $(document).on("click", "tr#finland", function () {
    $(this).siblings(".finland-city").slideToggle(100);
  });
  $(document).on("click", "tr#israel", function () {
    $(this).siblings(".israel-city").slideToggle(100);
  });

  // filter search on server page
  $(document).on("keyup", "#myInput", function () {
    var value = $(this).val().toLowerCase();
    $("#myTable1 tbody tr, #myTable2 tbody tr, #myTable3 tbody tr,#myTable4 tbody tr,  #panel1 .panel-country-header, #panel2 .panel-country-header, #panel3 .panel-country-header,#panel4 .panel-country-header").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  //----search for the streaming service-----//
  // filter search on streaming services page
  $("#countrySearch").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("html, body").animate(
      {
        scrollTop: $(".streaming-countries-content").offset().top - 360
      },
      700
    );
    $(".service").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
    $(".country-block").show();
    $(".country-block").each(function () {
      if (!$(this).find(".service:visible").length) {
        $(this).hide();
      } else {
        $(this).show();
      }
    });
  });

  // when click on instructions button it will show the setup step
  $(".instuctions-btn button").on("click", function () {
    $(this).parent().next(".setup-steps").slideToggle();
    $(this).find("svg").toggleClass("active");
  });

  // show the setup step two when click on the plan the user selected
  $("#first-step .price-link, #first-step .continue-payment").on("click", function (e) {
    e.preventDefault();
    $(this).next("input").prop("checked", true);
    $(this).next().find("input").prop("checked", true);
    $("#second-step").slideToggle(400);
    $("#first-step").slideToggle(400);
    window.scrollTo(0, 0);
  });

  $(".plan-one").on("click", function () {
    $(".marked").addClass("pale-color");
    $(".plan").css("display", "none");
    $(".plan.plan-1").css("display", "flex");
  });
  $(".plan-six").on("click", function () {
    $(".marked").addClass("pale-color");
    $(".plan").css("display", "none");
    $(".plan.plan-6").css("display", "flex");
  });

  $(".plan-6mo").on("click", function () {
    $(".marked").addClass("pale-color");
    $(".plan").css("display", "none");
    $(".plan.plan-6mo").css("display", "flex");
  });

  $(".plan-twelve").on("click", function () {
    $(".marked").removeClass("pale-color");
    $(".plan").css("display", "none");
    $(".plan.plan-12").css("display", "flex");
  });

  $(".backplans").on("click", function (e) {
    e.preventDefault();
    $("#second-step").slideToggle(400);
    $("#first-step").slideToggle(400);
  });

  // switch between search icon and close icon when typing in input search
  $("#myInput, #countrySearch").on("keyup", function () {
    if ($(this).val() != "") {
      $(".search-btn").find(".search-icon").hide();
      $(".search-btn").find(".close-icon").show();
    } else {
      $(".search-btn").find(".search-icon").show();
      $(".search-btn").find(".close-icon").hide();
    }
  });

  // when click on the close button in search input empty the content
  $("form .search-btn").on("click", function (e) {
    e.preventDefault();
    $(this).prev("input").val("").keyup().focus();
    $(this).find(".search-icon").show();
    $(this).find(".close-icon").hide();
  });

  /*************************************************************/
  /* weplay page */
  /*************************************************************/

  // the arrow scroll to the features section
  $(".hero-img.weplay-page .arrow-down").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".weplay-info").offset().top
      },
      800
    );
  });

  $(".dropdown--menu").on("click", function (e) {
    e.stopPropagation();
  });

  /*************************************************************/
  /* confirmation page */
  /*************************************************************/

  // remove disabled attibute on submit btn in confirmation page
  var checkboxes = $("#select-devices-form input[type='checkbox']"),
    submitButt = $("#select-devices-form button[type='submit']");

  checkboxes.click(function () {
    submitButt.attr("disabled", !checkboxes.is(":checked"));
  });

  var $window = $(window);
  var $label = $(".footer-item-list li .coming-soon");

  /*************************************************************/
  /*  get started page */
  /*************************************************************/

  // toggle between credit card and paypal
  $(".payment--method .label-radio").on("click", function () {
    $(this).parents(".payment--method").addClass("no-border-radius-bottom").next(".card-info").slideDown();

    $(".card-info").not($(this).parents(".payment--method").next(".card-info")).slideUp();

    // add class
    $(".payment--method").not($(this).parents(".payment--method")).removeClass("no-border-radius-bottom");
  });

  // when click on join now in credit card payment
  $("#join-now").on("click", function () {
    $(this).addClass("fade");
    $(this).find("span").text("Processing...");
    $(this).find("svg").show();
    $("#three_d_secure").modal("show");
    setTimeout(function () {
      $("#join-now").removeClass("fade");
      $("#join-now").find("span").text("Join Now");
      $("#join-now").find("svg").hide();
    }, 2000);
  });

  //fixed navbar in get started page
  $(window).on("scroll", function () {
    if ($(this).scrollTop() >= 60) {
      $("header .navbar").addClass("nav-fixed");
    } else {
      $("header .navbar").removeClass("nav-fixed");
    }

    if ($(this).scrollTop() >= 1200) {
      $(".arrow-up").fadeIn(500);
    } else {
      $(".arrow-up").fadeOut(500);
    }
  });

  /*************************************************************/
  /*  Press page */
  /*************************************************************/

  // switch between tabs in press page logo and media assets section
  $(".press-assets-logo.logo .logo-assets-header ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".press-assets-logo-content.logo > div").hide();
    $(".press-assets-logo.logo .dropdown .btn").text($(this).text());
    $($(this).data("content")).fadeIn();
  });

  $(".press-assets-logo.media-assets .logo-assets-header ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    $(".press-assets-logo-content.media-assets > div").hide();
    $(".press-assets-logo.media-assets .dropdown .btn").text($(this).text());
    $($(this).data("content")).fadeIn();
  });

  // share btn in ios tuts page
  // if ($(window).innerWidth() > 767) {
  //   $(".share .icon").on("click", function () {
  //     $(this).siblings(".social-icons").toggle().end().next("span").toggle();
  //   });
  // }

  $(".whishlist__content__info__ip-controls .save-ip").on("click", function () {
    if ($("#ipAddress").val() != "") {
      if (ValidateIPaddress(document.form1.text1)) {
        $(".smartdns-first-step").fadeOut();
        $(".smartdns-pending").fadeIn();
        setTimeout(function () {
          $(".smartdns-active-ip").fadeIn();
          $(".smartdns-pending").hide();
        }, 3000);
      }
    }
  });

  // tooltip in smartDNS tab in dashboard page
  $(".copy-ip").on("click", function () {
    $(this).prev().select();
    document.execCommand("copy");
    $(this).find(".tooltiptext").text("Copied!");
    $(".tooltiptext").addClass("changed");
  });

  $(".copy-ip").on("mouseleave", function () {
    $(this).find(".tooltiptext").text("Copy");
    $(".tooltiptext").removeClass("changed");
  });

  // scroll to top
  $(".arrow-up").click(function () {
    $("html, body").animate(
      {
        scrollTop: "400px"
      },
      1000
    );
  });

  //

  $("#protocols").on("change", function () {
    if ($(this).val() == "ikev2" || $(this).val() == "https") {
      $(".download-config,.show-credentials,.version-select,.port-select,.add-device,.socks_locations,.wireguard_devices").hide();
      $(".show-profile,.location-select").show();
    } else if ($(this).val() == "socks5") {
      $(".download-config,.show-credentials,.version-select,.port-select,.add-device, .location-select,.wireguard_devices").hide();
      $(".show-profile,.socks_locations").show();
    } else if ($(this).val() == "udp" || $(this).val() == "tcp") {
      $(".version-select, .port-select,.download-config,.show-credentials,.location-select").show();
      $(".show-profile,.add-device,.socks_locations,.wireguard_devices").hide();
    } else if ($(this).val() == "wireguard") {
      $(".download-config,.show-credentials,.version-select,.port-select,.show-profile,.socks_locations").hide();
      $(".add-device,.location-select,.wireguard_devices").show();
    }
  });

  $("#ports").on("change", function () {
    if ($(this).val() != "") {
      $(".download-config,.show-credentials").removeClass("button-disabled");
    }
  });

  $("#location").on("change", function () {
    var locationName = $(this).find(":selected").text().toLowerCase();
    $("#myInput-hostname").val(`http://${locationName}.wevpn.com`);
  });

  // toggle between reason for cancel autorenewal subscription
  $(".reason-item .label-radio").on("click", function () {
    $(this).parents(".reason-item").addClass("no-border-radius-bottom").next(".reason-info").slideDown();

    $(".reason-info").not($(this).parents(".reason-item").next(".reason-info")).slideUp();

    // add class
    $(".reason-item").not($(this).parents(".reason-item")).removeClass("no-border-radius-bottom");
  });

  /********************************************* */
  // Start Refer Friends
  /********************************************* */

  // make the send invite button disabled until I click the checkbox
  $("#agree-tos").on("change", function () {
    var len = $("#agree-tos:checked").length;
    if (len == 0) $("#send-invite").prop("disabled", true);
    else $("#send-invite").removeAttr("disabled");
  });
  $("#agree-tos").trigger("change");

  // validation for the email input when sending the invite
  var inviteEmail = $("#invite-email");
  var inviteUser = $("#inviteUser");
  var inviteEmailError = true;

  inviteEmail.on("blur", function () {
    if (!validateEmail(inviteEmail.val()) || inviteEmail.val() == "") {
      $(this).parent(".form-group").next(".custom-alert").fadeIn().end().css({
        border: "1px solid #F04545",
        "box-shadow": "inset 0px -3px 0px #F04545"
      });
      inviteEmailError = true;
    } else {
      $(this).parent(".form-group").next(".custom-alert").fadeOut().end().css({
        border: "1px solid #e0ded5",
        "box-shadow": "none"
      });
      inviteEmailError = false;
    }
  });

  // sending invitation state
  $("#invit-form").on("submit", function (e) {
    if (inviteEmailError == true) {
      e.preventDefault();
      inviteEmail.blur();
    } else {
      $("#send-invite").addClass("fade").text("Sending");
      setTimeout(function () {
        $("#send-invite").removeClass("fade").text("Send");
        inviteEmail.val("");
        inviteUser.val("");
        $(".no-invite").hide();
        $(".invites-list").fadeIn();
        // $("#invit-form").submit();
      }, 2000);
      e.preventDefault();
      inviteEmailError = true;
    }
  });
  /***************** */
  // End Refer Friends
  /***************** */

  $(".navbar").on("click", ".navbar-nav > li", function () {
    $(this).toggleClass("active").siblings().removeClass("active");
  });

  $(".platform-content").on("click", ".platform-content .platform-list li", function () {
    $(this).toggleClass("active").siblings().removeClass("active");
  });
  // when click on the menu button it open the menu links
  $(".navbar").on("click", ".navbar-toggler", function (event) {
    if (!event.detail || event.detail == 1) {
      //activate on first click only to avoid hiding again on double clicks
      $(this).toggleClass("open");
      if ($("body, html").hasClass("overlay") && $(".navbar-collapse").hasClass("show")) {
        $("body, html").removeClass("overlay");
        $(".lang-collapse").removeClass("show");
      } else {
        $("body, html").addClass("overlay");
        $(".lang-collapse").addClass("show");
      }
      $(".navbar-collapse").toggleClass("show");
      $(".lang-collapse").removeClass("show");
      $(".nav-item").removeClass("active");
    }
    return false;
  });
  // when click on the menu button it open the menu links
  $(".navbar").on("click", ".lang-toggler", function (event) {
    if (!event.detail || event.detail == 1) {
      //activate on first click only to avoid hiding again on double clicks
      $(".navbar-collapse").removeClass("show");
      if ($("body, html").hasClass("overlay") && $(".lang-collapse").hasClass("show")) {
        $("body, html").removeClass("overlay");
        $(".lang-collapse").removeClass("show");
      } else {
        $("body, html").addClass("overlay");
        $(".lang-collapse").addClass("show");
      }
    }
    return false;
  });

  // when click in anywhere in document close the navbar menu and clear the overlay from the body
  $("body").on("click", function (e) {
    var $currEl = $(e.currentTarget);
    if (!$currEl.is(".navbar") && !$currEl.closest(".navbar").length) {
      $(".navbar .navbar-toggler").removeClass("open");
      $("html,body").removeClass("overlay");
      $(".navbar-collapse").removeClass("show");
      $(".lang-collapse").removeClass("show");
      $(".navbar").removeClass("navbar-show-mobile");
    }
  });
  // stop propagation (closing navbar when click inside it) when click on navbar when the menu open in mobile screen
  $(".navbar,.aside-content").on("click", function (e) {
    e.stopPropagation();
  });

  $(".nav-link.dropdown-toggle").on("click", function (e) {
    e.preventDefault();
  });

  // service-details page
  $(".other-channels button.more").on("click", function () {
    $(this).toggleClass("active");
    var spanText = $(this).find("span");
    if (spanText.text() == "more channels") {
      spanText.text("less channels");
    } else {
      spanText.text("more channels");
    }
    $(".other-channels ul li.hide").slideToggle();
  });

  // coupon in the new order page
  $(".coupon-btn").on("click", function (e) {
    e.preventDefault();
    if ($("input[name='couponcode']").val() == "FPT") {
      $(".coupon-success").show();
      $(".coupon-error").hide();
    } else {
      $(".coupon-error").show();
      $(".coupon-success").hide();
      $(".coupon-box").toggleClass("error");
    }
  });

  $(".instructions h3").on("click", function () {
    $(this).next().slideToggle(300);
    $(this).toggleClass("open");
  });

  $("#manual-setup-protocol").on("change", function () {
    if ($(this).val() == "udp") {
      $(".tcp-port-select").show();
    } else {
      $(".tcp-port-select").hide();
    }
  });

  $("#manual-setup-protocol").on("change", function () {
    $(".tab-content > div").hide();
    $("#" + $(this).val()).fadeIn();
  });

  $("#openvpn-tcp-version").on("change", function () {
    if ($(this).val() !== "") {
      $(".tcp-port-select").show();
    } else {
      $(".tcp-port-select").hide();
    }
  });

  $("#openvpn-udp-version").on("change", function () {
    if ($(this).val() !== "") {
      $(".udp-port-select").show();
    } else {
      $(".udp-port-select").hide();
    }
  });

  $(".dashboard-items ul li:not(.weblock-item), .account-items ul li").on("click", function () {
    if ($(window).width() < 992) {
      $(".aside-content").toggleClass("show");
      $("body, html").removeClass("overlay");
      $(".navbar-toggler").removeClass("open");
    }
    $(".dashboard-items ul li, .account-items ul li").removeClass("active");
    $(".dashboard-main .main-content, html, body").scrollTop(0);
    $(this).addClass("active");
    $(".main-content .dashboard-content > div").hide();
    $($(this).data("content")).fadeIn();
    $(".header-content h2").text($(this).find("p span").text());
  });

  $(".dashboard-items > ul li, .account-items > ul li").on("click", function () {
    $(".dashboard-items .collapse").collapse("hide");
  });

  $(".alert-item").on("click", function () {
    $(this).toggleClass("selected");
    $("#alertCollapse").slideToggle(200);
  });

  $(".protocol-select li input").on("click", function () {
    $(".tab-content > div").hide();
    $($(this).data("radio")).fadeIn();
  });

  $(".smartdns-servers__list .country").on("click", function () {
    if ($(window).width() < 768) {
      $(this).toggleClass("active").siblings(".country").removeClass("active");
      $(this).next(".country-ip").slideToggle(300);
      $(".smartdns-servers__list .country-ip").not($(this).next(".country-ip")).slideUp(300);
    }
  });

  $(".wireguard-devices .device").on("click", function () {
    $(this).toggleClass("active").siblings(".device").removeClass("active");
    $(this).next(".device-details").slideToggle(200);
    $(".wireguard-devices .device-details").not($(this).next(".device-details")).slideUp(200);
  });

  $(".show-crendentials.udp-settings").on("click", function () {
    if ($(this).find("span").text() == "Show Credentials") {
      $(this).find("span").text("Hide Credentials");
    } else {
      $(this).find("span").text("Show Credentials");
    }
    $(".your-credentials.udp-credentials").fadeToggle();
  });

  $("#sock5 .generate_profile").on("click", function () {
    $(".profile-details.sock5_details").fadeIn();
  });

  $(".show-crendentials.tcp-settings").on("click", function () {
    if ($(this).find("span").text() == "Show Credentials") {
      $(this).find("span").text("Hide Credentials");
    } else {
      $(this).find("span").text("Show Credentials");
    }
    $(".your-credentials.tcp-credentials").fadeToggle();
  });

  $(".udp-port-select .udp-port").on("change", function () {
    if ($(this).val() !== "") {
      $(".download-config.udp-settings, .show-crendentials.udp-settings").prop("disabled", false);
    }
  });

  $(".tcp-port-select .tcp-port").on("change", function () {
    if ($(this).val() !== "") {
      $(".download-config.tcp-settings, .show-crendentials.tcp-settings").prop("disabled", false);
    }
  });

  $("#sock5 .sock5-location").on("change", function () {
    if ($(this).val() !== "") {
      $(".generate_profile").prop("disabled", false);
    }
  });

  // links inside dropdown in Dns Leak Test page
  $(".ip-address-hero .dropdown .dropdown-menu")
    .find("a")
    .on("click", function () {
      window.location = $(this).attr("href");
    });

  //Password generator page

  $("#multiple-passwords").on("change", function () {
    var len = $("#multiple-passwords:checked").length;
    if (len !== 0) {
      $(".password-info").hide();
      $(".password-range").show();
      $(".multi-passwords").show();
    } else {
      $(".password-info").show();
      $(".password-range").hide();
      $(".multi-passwords").hide();
    }
  });
  $("#multiple-passwords").trigger("change");

  $(".password-info .copy-clipboard").click(function (e) {
    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = $(".password-info h2").text();
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  });

  $(document).on("click", ".passowrd .copy-icon", function (e) {
    var temp = document.createElement("textarea");
    document.body.appendChild(temp);
    temp.value = $(this).parent().parent().find("p").text();
    temp.select();
    document.execCommand("copy");
    document.body.removeChild(temp);
  });

  function arrayFromLowToHigh(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      array.push(i);
    }
    return array;
  }

  const UPPERCASE_CODES = arrayFromLowToHigh(65, 90);
  const LOWERCASE_CODES = arrayFromLowToHigh(97, 122);
  const NUMBER_CODES = arrayFromLowToHigh(48, 57);
  const SYMBOL_CODES = arrayFromLowToHigh(33, 47).concat(arrayFromLowToHigh(58, 64)).concat(arrayFromLowToHigh(91, 96)).concat(arrayFromLowToHigh(123, 126));

  let generatePassword = (characterAmount, includeUppercase, includeNumbers, includeSymbols) => {
    let charCodes = LOWERCASE_CODES;
    if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES);
    if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES);
    if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES);
    const passwordCharacters = [];
    for (let i = 0; i < characterAmount; i++) {
      const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)];
      passwordCharacters.push(String.fromCharCode(characterCode));
    }
    return passwordCharacters.join("");
  };

  $(".regenerate-password").click(function (e) {
    e.preventDefault();
    generateRandomPassword();

    var multiLength = $(".multi-password-input").val();
    $(".passowrd").not(":first").remove();
    for (let i = 1; i < multiLength; i++) {
      $(".passowrd").first().clone().insertAfter("div.multi-passwords-content .passowrd:last");
    }
    $(".passowrd p").each(function (e) {
      var password = generateRandomPassword(false);
      $(this).text(password);
    });
  });

  function generateRandomPassword(render = true) {
    $(".password-info h2").text("");
    const characterAmount = $("#length").val();
    const includeUppercase = $("#uppercase").is(":checked");
    const includeNumbers = $("#numbers").is(":checked");
    const includeSymbols = $("#symbols").is(":checked");
    password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    $(".password-info h2").text(password);
    return password;
  }

  $(".random-password-content #length").change(function (e) {
    const characterAmount = $("#length").val();
    const includeUppercase = $("#uppercase").is(":checked");
    const includeNumbers = $("#numbers").is(":checked");
    const includeSymbols = $("#symbols").is(":checked");
    const multiplePasswords = $("#multiple-passwords").is(":checked");
    var password = "";
    password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols);
    var strength = zxcvbn(password);

    var text = "";
    if ($(this).val() < 8) {
      text = "Terrible! Crackable in " + strength.crack_times_display.offline_slow_hashing_1e4_per_second;
    } else if ($(this).val() < 10) {
      text = "Weak! Crackable in " + strength.crack_times_display.offline_slow_hashing_1e4_per_second;
    } else if ($(this).val() < 13) {
      text = "Good! Could take " + strength.crack_times_display.offline_slow_hashing_1e4_per_second + " to crack. ";
    } else if ($(this).val() >= 13) {
      text = "Strong! Could take " + strength.crack_times_display.offline_slow_hashing_1e4_per_second + " to crack. ";
    }
    $(".crack-period").text(text);
  });

  function loadZendeskChat(callback) {
    var zdscript = document.createElement("script");
    zdscript.setAttribute("id", "ze-snippet");
    zdscript.src = "https://static.zdassets.com/ekr/snippet.js?key=a96b1539-2a18-4b46-a131-8d827a19b486";
    document.getElementsByTagName("body")[0].appendChild(zdscript);

    window.zdonload = setInterval(
      function () {
        if (typeof zE !== "undefined" && typeof zE.activate !== "undefined") {
          clearInterval(window.zdonload);
          callback();
        }
      },
      50,
      null
    );
  }
  window.loadAndOpenZendeskChat = function () {
    var button = document.getElementById("zdbutton");
    localStorage.setItem("ff_zd_hasOpened", true);
    // button.innerHTML = "Loading...";
    loadZendeskChat(function () {
      window.setTimeout(function () {
        zE.activate();
        button.parentNode.removeChild(button);
      }, 1000);
    });
  };
  if (localStorage.getItem("ff_zd_hasOpened")) {
    loadZendeskChat(function () {});
  } else {
    $("body").not(".wedns_page, .helpdesck_page")[0].insertAdjacentHTML("beforeend", '<button id="zdbutton" aria-label="Launch Help Chat Window" onClick="window.loadAndOpenZendeskChat();"><svg width="22" height="22" viewBox="0 0 22 22"><path d="M13 22l-4-6H2c-1.11-.043-2-.935-2-2V2C0 .89.89 0 2 0h18c1.11 0 2 .892 2 2v12c0 1.067-.89 1.957-2 2h-3l-4 6zm3-8h4c-.005.3-.01-12 0-12-.01.004-18 .006-18 0 .005.006 0 12 0 12h8l3 5 3-5z" fill="#FFF" fill-rule="evenodd"></path></svg></button>');
  }
});
