var Zepto=function(){function c(t){return null==t?String(t):Z[M.call(t)]||"object"}function s(t){return"function"==c(t)}function o(t){return null!=t&&t==t.window}function a(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function i(t){return"object"==c(t)}function u(t){return i(t)&&!o(t)&&Object.getPrototypeOf(t)==Object.prototype}function l(t){return"number"==typeof t.length}function f(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function n(t){return t in e?e[t]:e[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function h(t,e){return"number"!=typeof e||L[f(t)]?e:e+"px"}function r(t){return"children"in t?j.call(t.children):x.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function p(t,e){return null==e?x(t):x(t).filter(e)}function d(t,e,n,r){return s(e)?e.call(t,n,r):e}function m(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function v(t,e){var n=t.className||"",r=n&&n.baseVal!==y;return e===y?r?n.baseVal:n:void(r?n.baseVal=e:t.className=e)}function g(e){try{return e?"true"==e||"false"!=e&&("null"==e?null:+e+""==e?+e:/^[\[\{]/.test(e)?x.parseJSON(e):e):e}catch(t){return e}}var y,b,x,w,E,S,C=[],j=C.slice,T=C.filter,O=window.document,N={},e={},L={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},P=/^\s*<(\w+|!)[^>]*>/,A=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,R=/^(?:body|html)$/i,_=/([A-Z])/g,D=["val","css","html","text","data","width","height","offset"],t=O.createElement("table"),H=O.createElement("tr"),z={tr:O.createElement("tbody"),tbody:t,thead:t,tfoot:t,td:H,th:H,"*":O.createElement("div")},F=/complete|loaded|interactive/,I=/^[\w-]*$/,Z={},M=Z.toString,$={},q=O.createElement("div"),J={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},U=Array.isArray||function(t){return t instanceof Array};return $.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var r,i=t.parentNode,o=!i;return o&&(i=q).appendChild(t),r=~$.qsa(i,e).indexOf(t),o&&q.removeChild(t),r},E=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},S=function(n){return T.call(n,function(t,e){return n.indexOf(t)==e})},$.fragment=function(t,e,n){var r,i,o;return A.test(t)&&(r=x(O.createElement(RegExp.$1))),r||(t.replace&&(t=t.replace(k,"<$1></$2>")),e===y&&(e=P.test(t)&&RegExp.$1),e in z||(e="*"),(o=z[e]).innerHTML=""+t,r=x.each(j.call(o.childNodes),function(){o.removeChild(this)})),u(n)&&(i=x(r),x.each(n,function(t,e){-1<D.indexOf(t)?i[t](e):i.attr(t,e)})),r},$.Z=function(t,e){return(t=t||[]).__proto__=x.fn,t.selector=e||"",t},$.isZ=function(t){return t instanceof $.Z},$.init=function(t,e){var n,r;if(!t)return $.Z();if("string"==typeof t)if("<"==(t=t.trim())[0]&&P.test(t))n=$.fragment(t,RegExp.$1,e),t=null;else{if(e!==y)return x(e).find(t);n=$.qsa(O,t)}else{if(s(t))return x(O).ready(t);if($.isZ(t))return t;if(U(t))r=t,n=T.call(r,function(t){return null!=t});else if(i(t))n=[t],t=null;else if(P.test(t))n=$.fragment(t.trim(),RegExp.$1,e),t=null;else{if(e!==y)return x(e).find(t);n=$.qsa(O,t)}}return $.Z(n,t)},(x=function(t,e){return $.init(t,e)}).extend=function(e){var n,t=j.call(arguments,1);return"boolean"==typeof e&&(n=e,e=t.shift()),t.forEach(function(t){!function t(e,n,r){for(b in n)r&&(u(n[b])||U(n[b]))?(u(n[b])&&!u(e[b])&&(e[b]={}),U(n[b])&&!U(e[b])&&(e[b]=[]),t(e[b],n[b],r)):n[b]!==y&&(e[b]=n[b])}(e,t,n)}),e},$.qsa=function(t,e){var n,r="#"==e[0],i=!r&&"."==e[0],o=r||i?e.slice(1):e,s=I.test(o);return a(t)&&s&&r?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType?[]:j.call(s&&!r?i?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},x.contains=O.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e=e&&e.parentNode;)if(e===t)return!0;return!1},x.type=c,x.isFunction=s,x.isWindow=o,x.isArray=U,x.isPlainObject=u,x.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},x.inArray=function(t,e,n){return C.indexOf.call(e,t,n)},x.camelCase=E,x.trim=function(t){return null==t?"":String.prototype.trim.call(t)},x.uuid=0,x.support={},x.expr={},x.map=function(t,e){var n,r,i,o,s=[];if(l(t))for(r=0;r<t.length;r++)null!=(n=e(t[r],r))&&s.push(n);else for(i in t)null!=(n=e(t[i],i))&&s.push(n);return 0<(o=s).length?x.fn.concat.apply([],o):o},x.each=function(t,e){var n,r;if(l(t)){for(n=0;n<t.length;n++)if(!1===e.call(t[n],n,t[n]))return t}else for(r in t)if(!1===e.call(t[r],r,t[r]))return t;return t},x.grep=function(t,e){return T.call(t,e)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){Z["[object "+e+"]"]=e.toLowerCase()}),x.fn={forEach:C.forEach,reduce:C.reduce,push:C.push,sort:C.sort,indexOf:C.indexOf,concat:C.concat,map:function(n){return x(x.map(this,function(t,e){return n.call(t,e,t)}))},slice:function(){return x(j.apply(this,arguments))},ready:function(t){return F.test(O.readyState)&&O.body?t(x):O.addEventListener("DOMContentLoaded",function(){t(x)},!1),this},get:function(t){return t===y?j.call(this):this[0<=t?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(n){return C.every.call(this,function(t,e){return!1!==n.call(t,e,t)}),this},filter:function(e){return s(e)?this.not(this.not(e)):x(T.call(this,function(t){return $.matches(t,e)}))},add:function(t,e){return x(S(this.concat(x(t,e))))},is:function(t){return 0<this.length&&$.matches(this[0],t)},not:function(e){var n,r=[];return s(e)&&e.call!==y?this.each(function(t){e.call(this,t)||r.push(this)}):(n="string"==typeof e?this.filter(e):l(e)&&s(e.item)?j.call(e):x(e),this.forEach(function(t){n.indexOf(t)<0&&r.push(t)})),x(r)},has:function(t){return this.filter(function(){return i(t)?x.contains(this,t):x(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!i(t)?t:x(t)},last:function(){var t=this[this.length-1];return t&&!i(t)?t:x(t)},find:function(t){var n=this;return t?"object"==typeof t?x(t).filter(function(){var e=this;return C.some.call(n,function(t){return x.contains(t,e)})}):1==this.length?x($.qsa(this[0],t)):this.map(function(){return $.qsa(this,t)}):x()},closest:function(t,e){var n=this[0],r=!1;for("object"==typeof t&&(r=x(t));n&&!(r?0<=r.indexOf(n):$.matches(n,t));)n=n!==e&&!a(n)&&n.parentNode;return x(n)},parents:function(t){for(var e=[],n=this;0<n.length;)n=x.map(n,function(t){return(t=t.parentNode)&&!a(t)&&e.indexOf(t)<0?(e.push(t),t):void 0});return p(e,t)},parent:function(t){return p(S(this.pluck("parentNode")),t)},children:function(t){return p(this.map(function(){return r(this)}),t)},contents:function(){return this.map(function(){return j.call(this.childNodes)})},siblings:function(t){return p(this.map(function(t,e){return T.call(r(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(e){return x.map(this,function(t){return t[e]})},show:function(){return this.each(function(){var t,e,n;"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=(t=this.nodeName,N[t]||(e=O.createElement(t),O.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),N[t]=n),N[t]))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(e){var n,r,i=s(e);return this[0]&&!i&&(n=x(e).get(0),r=n.parentNode||1<this.length),this.each(function(t){x(this).wrapAll(i?e.call(this,t):r?n.cloneNode(!0):n)})},wrapAll:function(t){if(this[0]){x(this[0]).before(t=x(t));for(var e;(e=t.children()).length;)t=e.first();x(t).append(this)}return this},wrapInner:function(i){var o=s(i);return this.each(function(t){var e=x(this),n=e.contents(),r=o?i.call(this,t):i;n.length?n.wrapAll(r):e.append(r)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(e){return this.each(function(){var t=x(this);(e===y?"none"==t.css("display"):e)?t.show():t.hide()})},prev:function(t){return x(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return x(this.pluck("nextElementSibling")).filter(t||"*")},html:function(n){return 0 in arguments?this.each(function(t){var e=this.innerHTML;x(this).empty().append(d(this,n,t,e))}):0 in this?this[0].innerHTML:null},text:function(n){return 0 in arguments?this.each(function(t){var e=d(this,n,t,this.textContent);this.textContent=null==e?"":""+e}):0 in this?this[0].textContent:null},attr:function(e,n){var t;return"string"!=typeof e||1 in arguments?this.each(function(t){if(1===this.nodeType)if(i(e))for(b in e)m(this,b,e[b]);else m(this,e,d(this,n,t,this.getAttribute(e)))}):this.length&&1===this[0].nodeType?!(t=this[0].getAttribute(e))&&e in this[0]?this[0][e]:t:y},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){m(this,t)},this)})},prop:function(e,n){return e=J[e]||e,1 in arguments?this.each(function(t){this[e]=d(this,n,t,this[e])}):this[0]&&this[0][e]},data:function(t,e){var n="data-"+t.replace(_,"-$1").toLowerCase(),r=1 in arguments?this.attr(n,e):this.attr(n);return null!==r?g(r):y},val:function(e){return 0 in arguments?this.each(function(t){this.value=d(this,e,t,this.value)}):this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(o){if(o)return this.each(function(t){var e=x(this),n=d(this,o,t,e.offset()),r=e.offsetParent().offset(),i={top:n.top-r.top,left:n.left-r.left};"static"==e.css("position")&&(i.position="relative"),e.css(i)});if(!this.length)return null;var t=this[0].getBoundingClientRect();return{left:t.left+window.pageXOffset,top:t.top+window.pageYOffset,width:Math.round(t.width),height:Math.round(t.height)}},css:function(t,e){if(arguments.length<2){var n,r=this[0];if(!r)return;if(n=getComputedStyle(r,""),"string"==typeof t)return r.style[E(t)]||n.getPropertyValue(t);if(U(t)){var i={};return x.each(t,function(t,e){i[e]=r.style[E(e)]||n.getPropertyValue(e)}),i}}var o="";if("string"==c(t))e||0===e?o=f(t)+":"+h(t,e):this.each(function(){this.style.removeProperty(f(t))});else for(b in t)t[b]||0===t[b]?o+=f(b)+":"+h(b,t[b])+";":this.each(function(){this.style.removeProperty(f(b))});return this.each(function(){this.style.cssText+=";"+o})},index:function(t){return t?this.indexOf(x(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&C.some.call(this,function(t){return this.test(v(t))},n(t))},addClass:function(n){return n?this.each(function(t){var e;"className"in this&&(w=[],e=v(this),d(this,n,t,e).split(/\s+/g).forEach(function(t){x(this).hasClass(t)||w.push(t)},this),w.length&&v(this,e+(e?" ":"")+w.join(" ")))}):this},removeClass:function(e){return this.each(function(t){if("className"in this){if(e===y)return v(this,"");w=v(this),d(this,e,t,w).split(/\s+/g).forEach(function(t){w=w.replace(n(t)," ")}),v(this,w.trim())}})},toggleClass:function(n,r){return n?this.each(function(t){var e=x(this);d(this,n,t,v(this)).split(/\s+/g).forEach(function(t){(r===y?!e.hasClass(t):r)?e.addClass(t):e.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===y?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===y?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),r=R.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(x(t).css("margin-top"))||0,n.left-=parseFloat(x(t).css("margin-left"))||0,r.top+=parseFloat(x(e[0]).css("border-top-width"))||0,r.left+=parseFloat(x(e[0]).css("border-left-width"))||0,{top:n.top-r.top,left:n.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||O.body;t&&!R.test(t.nodeName)&&"static"==x(t).css("position");)t=t.offsetParent;return t})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(r){var i=r.replace(/./,function(t){return t[0].toUpperCase()});x.fn[r]=function(e){var t,n=this[0];return e===y?o(n)?n["inner"+i]:a(n)?n.documentElement["scroll"+i]:(t=this.offset())&&t[r]:this.each(function(t){(n=x(this)).css(r,d(this,e,t,n[r]()))})}}),["after","prepend","before","append"].forEach(function(e,s){var a=s%2;x.fn[e]=function(){var e,r,i=x.map(arguments,function(t){return"object"==(e=c(t))||"array"==e||null==t?t:$.fragment(t)}),o=1<this.length;return i.length<1?this:this.each(function(t,e){r=a?e:e.parentNode,e=0==s?e.nextSibling:1==s?e.firstChild:2==s?e:null;var n=x.contains(O.documentElement,r);i.forEach(function(t){if(o)t=t.cloneNode(!0);else if(!r)return x(t).remove();r.insertBefore(t,e),n&&function t(e,n){n(e);for(var r=0,i=e.childNodes.length;r<i;r++)t(e.childNodes[r],n)}(t,function(t){null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},x.fn[a?e+"To":"insert"+(s?"Before":"After")]=function(t){return x(t)[e](this),this}}),$.Z.prototype=x.fn,$.uniq=S,$.deserializeValue=g,x.zepto=$,x}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(l){function f(t){return t._zid||(t._zid=e++)}function s(t,e,n,r){var i,o;return(e=h(e)).ns&&(o=e.ns,i=new RegExp("(?:^| )"+o.replace(" "," .* ?")+"(?: |$)")),(E[f(t)]||[]).filter(function(t){return!(!t||e.e&&t.e!=e.e||e.ns&&!i.test(t.ns)||n&&f(t.fn)!==f(n)||r&&t.sel!=r)})}function h(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function p(t,e){return t.del&&!n&&t.e in r||!!e}function d(t){return S[t]||n&&r[t]||t}function u(i,t,e,o,s,a,c){var n=f(i),u=E[n]||(E[n]=[]);t.split(/\s/).forEach(function(t){if("ready"==t)return l(document).ready(e);var n=h(t);n.fn=e,n.sel=s,n.e in S&&(e=function(t){var e=t.relatedTarget;return!e||e!==this&&!l.contains(this,e)?n.fn.apply(this,arguments):void 0});var r=(n.del=a)||e;n.proxy=function(t){if(!(t=v(t)).isImmediatePropagationStopped()){t.data=o;var e=r.apply(i,t._args==b?[t]:[t].concat(t._args));return!1===e&&(t.preventDefault(),t.stopPropagation()),e}},n.i=u.length,u.push(n),"addEventListener"in i&&i.addEventListener(d(n.e),n.proxy,p(n,c))})}function m(e,t,n,r,i){var o=f(e);(t||"").split(/\s/).forEach(function(t){s(e,t,n,r).forEach(function(t){delete E[o][t.i],"removeEventListener"in e&&e.removeEventListener(d(t.e),t.proxy,p(t,i))})})}function v(r,i){return!i&&r.isDefaultPrevented||(i=i||r,l.each(t,function(t,e){var n=i[t];r[t]=function(){return this[e]=a,n&&n.apply(i,arguments)},r[e]=C}),(i.defaultPrevented!==b?i.defaultPrevented:"returnValue"in i?!1===i.returnValue:i.getPreventDefault&&i.getPreventDefault())&&(r.isDefaultPrevented=a)),r}function g(t){var e,n={originalEvent:t};for(e in t)i.test(e)||t[e]===b||(n[e]=t[e]);return v(n,t)}function y(t){return"string"==typeof t}var b,e=1,x=Array.prototype.slice,w=l.isFunction,E={},o={},n="onfocusin"in window,r={focus:"focusin",blur:"focusout"},S={mouseenter:"mouseover",mouseleave:"mouseout"};o.click=o.mousedown=o.mouseup=o.mousemove="MouseEvents",l.event={add:u,remove:m},l.proxy=function(t,e){var n=2 in arguments&&x.call(arguments,2);if(w(t)){function r(){return t.apply(e,n?n.concat(x.call(arguments)):arguments)}return r._zid=f(t),r}if(y(e))return n?(n.unshift(t[e],t),l.proxy.apply(null,n)):l.proxy(t[e],t);throw new TypeError("expected function")},l.fn.bind=function(t,e,n){return this.on(t,e,n)},l.fn.unbind=function(t,e){return this.off(t,e)},l.fn.one=function(t,e,n,r){return this.on(t,e,n,r,1)};var a=function(){return!0},C=function(){return!1},i=/^([A-Z]|returnValue$|layer[XY]$)/,t={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};l.fn.delegate=function(t,e,n){return this.on(e,t,n)},l.fn.undelegate=function(t,e,n){return this.off(e,t,n)},l.fn.live=function(t,e){return l(document.body).delegate(this.selector,t,e),this},l.fn.die=function(t,e){return l(document.body).undelegate(this.selector,t,e),this},l.fn.on=function(e,i,n,o,s){var a,c,r=this;return e&&!y(e)?(l.each(e,function(t,e){r.on(t,i,n,e,s)}),r):(y(i)||w(o)||!1===o||(o=n,n=i,i=b),!w(n)&&!1!==n||(o=n,n=b),!1===o&&(o=C),r.each(function(t,r){s&&(a=function(t){return m(r,t.type,o),o.apply(this,arguments)}),i&&(c=function(t){var e,n=l(t.target).closest(i,r).get(0);return n&&n!==r?(e=l.extend(g(t),{currentTarget:n,liveFired:r}),(a||o).apply(n,[e].concat(x.call(arguments,1)))):void 0}),u(r,e,o,n,i,c||a)}))},l.fn.off=function(t,n,e){var r=this;return t&&!y(t)?(l.each(t,function(t,e){r.off(t,n,e)}),r):(y(n)||w(e)||!1===e||(e=n,n=b),!1===e&&(e=C),r.each(function(){m(this,t,e,n)}))},l.fn.trigger=function(t,e){return(t=y(t)||l.isPlainObject(t)?l.Event(t):v(t))._args=e,this.each(function(){t.type in r&&"function"==typeof this[t.type]?this[t.type]():"dispatchEvent"in this?this.dispatchEvent(t):l(this).triggerHandler(t,e)})},l.fn.triggerHandler=function(n,r){var i,o;return this.each(function(t,e){(i=g(y(n)?l.Event(n):n))._args=r,i.target=e,l.each(s(e,n.type||n),function(t,e){return o=e.proxy(i),!i.isImmediatePropagationStopped()&&void 0})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){l.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),l.Event=function(t,e){y(t)||(t=(e=t).type);var n=document.createEvent(o[t]||"Events"),r=!0;if(e)for(var i in e)"bubbles"==i?r=!!e[i]:n[i]=e[i];return n.initEvent(t,r,!0),v(n)}}(Zepto),function(v){function g(t,e,n,r){return t.global?(i=e||j,o=n,s=r,a=v.Event(o),v(i).trigger(a,s),!a.isDefaultPrevented()):void 0;var i,o,s,a}function y(t,e){var n=e.context;return!1!==e.beforeSend.call(n,t,e)&&!1!==g(e,n,"ajaxBeforeSend",[t,e])&&void g(e,n,"ajaxSend",[t,e])}function b(t,e,n,r){var i=n.context,o="success";n.success.call(i,t,o,e),r&&r.resolveWith(i,[t,o,e]),g(n,i,"ajaxSuccess",[e,n,t]),s(o,e,n)}function x(t,e,n,r,i){var o=r.context;r.error.call(o,n,e,t),i&&i.rejectWith(o,[n,e,t]),g(r,o,"ajaxError",[n,r,t||e]),s(e,n,r)}function s(t,e,n){var r,i=n.context;n.complete.call(i,e,t),g(n,i,"ajaxComplete",[e,n]),(r=n).global&&!--v.active&&g(r,null,"ajaxStop")}function w(){}function E(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function c(t,e,n,r){return v.isFunction(e)&&(r=n,n=e,e=void 0),v.isFunction(n)||(r=n,n=void 0),{url:t,data:e,success:n,dataType:r}}var S,C,l=0,j=window.document,u=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,T=/^(?:text|application)\/javascript/i,O=/^(?:text|application)\/xml/i,N="application/json",L="text/html",P=/^\s*$/,A=j.createElement("a");A.href=window.location.href,v.active=0,v.ajaxJSONP=function(n,r){if(!("type"in n))return v.ajax(n);function t(t){v(a).triggerHandler("error",t||"abort")}var i,o,e=n.jsonpCallback,s=(v.isFunction(e)?e():e)||"jsonp"+ ++l,a=j.createElement("script"),c=window[s],u={abort:t};return r&&r.promise(u),v(a).on("load error",function(t,e){clearTimeout(o),v(a).off().remove(),"error"!=t.type&&i?b(i[0],u,n,r):x(null,e||"error",u,n,r),window[s]=c,i&&v.isFunction(c)&&c(i[0]),c=i=void 0}),!1===y(u,n)?t("abort"):(window[s]=function(){i=arguments},a.src=n.url.replace(/\?(.+)=\?/,"?$1="+s),j.head.appendChild(a),0<n.timeout&&(o=setTimeout(function(){t("timeout")},n.timeout))),u},v.ajaxSettings={type:"GET",beforeSend:w,success:w,error:w,complete:w,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:N,xml:"application/xml, text/xml",html:L,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0},v.ajax=function(t){var e,n,r,i=v.extend({},t||{}),o=v.Deferred&&v.Deferred();for(S in v.ajaxSettings)void 0===i[S]&&(i[S]=v.ajaxSettings[S]);(r=i).global&&0==v.active++&&g(r,null,"ajaxStart"),i.crossDomain||((e=j.createElement("a")).href=i.url,e.href,i.crossDomain=A.protocol+"//"+A.host!=e.protocol+"//"+e.host),i.url||(i.url=window.location.toString()),(n=i).processData&&n.data&&"string"!=v.type(n.data)&&(n.data=v.param(n.data,n.traditional)),!n.data||n.type&&"GET"!=n.type.toUpperCase()||(n.url=E(n.url,n.data),n.data=void 0);var s=i.dataType,a=/\?.+=\?/.test(i.url);if(a&&(s="jsonp"),!1!==i.cache&&(t&&!0===t.cache||"script"!=s&&"jsonp"!=s)||(i.url=E(i.url,"_="+Date.now())),"jsonp"==s)return a||(i.url=E(i.url,i.jsonp?i.jsonp+"=?":!1===i.jsonp?"":"callback=?")),v.ajaxJSONP(i,o);function c(t,e){f[t.toLowerCase()]=[t,e]}var u,l=i.accepts[s],f={},h=/^([\w-]+:)\/\//.test(i.url)?RegExp.$1:window.location.protocol,p=i.xhr(),d=p.setRequestHeader;if(o&&o.promise(p),i.crossDomain||c("X-Requested-With","XMLHttpRequest"),c("Accept",l||"*/*"),(l=i.mimeType||l)&&(-1<l.indexOf(",")&&(l=l.split(",",2)[0]),p.overrideMimeType&&p.overrideMimeType(l)),(i.contentType||!1!==i.contentType&&i.data&&"GET"!=i.type.toUpperCase())&&c("Content-Type",i.contentType||"application/x-www-form-urlencoded"),i.headers)for(C in i.headers)c(C,i.headers[C]);if(p.setRequestHeader=c,!(p.onreadystatechange=function(){if(4==p.readyState){p.onreadystatechange=w,clearTimeout(u);var t,e=!1;if(200<=p.status&&p.status<300||304==p.status||0==p.status&&"file:"==h){s=s||((n=(n=i.mimeType||p.getResponseHeader("content-type"))&&n.split(";",2)[0])&&(n==L?"html":n==N?"json":T.test(n)?"script":O.test(n)&&"xml")||"text"),t=p.responseText;try{"script"==s?(0,eval)(t):"xml"==s?t=p.responseXML:"json"==s&&(t=P.test(t)?null:v.parseJSON(t))}catch(t){e=t}e?x(e,"parsererror",p,i,o):b(t,p,i,o)}else x(p.statusText||null,p.status?"error":"abort",p,i,o)}var n})===y(p,i))return p.abort(),x(null,"abort",p,i,o),p;if(i.xhrFields)for(C in i.xhrFields)p[C]=i.xhrFields[C];var m=!("async"in i)||i.async;for(C in p.open(i.type,i.url,m,i.username,i.password),f)d.apply(p,f[C]);return 0<i.timeout&&(u=setTimeout(function(){p.onreadystatechange=w,p.abort(),x(null,"timeout",p,i,o)},i.timeout)),p.send(i.data?i.data:null),p},v.get=function(){return v.ajax(c.apply(null,arguments))},v.post=function(){var t=c.apply(null,arguments);return t.type="POST",v.ajax(t)},v.getJSON=function(){var t=c.apply(null,arguments);return t.dataType="json",v.ajax(t)},v.fn.load=function(t,e,n){if(!this.length)return this;var r,i=this,o=t.split(/\s/),s=c(t,e,n),a=s.success;return 1<o.length&&(s.url=o[0],r=o[1]),s.success=function(t){i.html(r?v("<div>").html(t.replace(u,"")).find(r):t),a&&a.apply(i,arguments)},v.ajax(s),this};var r=encodeURIComponent;v.param=function(t,e){var n=[];return n.add=function(t,e){v.isFunction(e)&&(e=e()),null==e&&(e=""),this.push(r(t)+"="+r(e))},function n(r,t,i,o){var s,a=v.isArray(t),c=v.isPlainObject(t);v.each(t,function(t,e){s=v.type(e),o&&(t=i?o:o+"["+(c||"object"==s||"array"==s?t:"")+"]"),!o&&a?r.add(e.name,e.value):"array"==s||!i&&"object"==s?n(r,e,i,t):r.add(t,e)})}(n,t,e),n.join("&").replace(/%20/g,"+")}}(Zepto),function(o){o.fn.serializeArray=function(){var n,r,e=[],i=function(t){return t.forEach?t.forEach(i):void e.push({name:n,value:t})};return this[0]&&o.each(this[0].elements,function(t,e){r=e.type,(n=e.name)&&"fieldset"!=e.nodeName.toLowerCase()&&!e.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&"file"!=r&&("radio"!=r&&"checkbox"!=r||e.checked)&&i(o(e).val())}),e},o.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")},o.fn.submit=function(t){var e;return 0 in arguments?this.bind("submit",t):this.length&&(e=o.Event("submit"),this.eq(0).trigger(e),e.isDefaultPrevented()||this.get(0).submit()),this}}(Zepto),function(n){"__proto__"in{}||n.extend(n.zepto,{Z:function(t,e){return t=t||[],n.extend(t,n.fn),t.selector=e||"",t.__Z=!0,t},isZ:function(t){return"array"===n.type(t)&&"__Z"in t}});try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t){try{return e(t)}catch(t){return null}}}}(Zepto),function(t){"use strict";function n(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}var r,i,o;function e(t,e){(r(t,e)?o:i)(t,e)}o="classList"in document.documentElement?(r=function(t,e){return t.classList.contains(e)},i=function(t,e){t.classList.add(e)},function(t,e){t.classList.remove(e)}):(r=function(t,e){return n(e).test(t.className)},i=function(t,e){r(t,e)||(t.className=t.className+" "+e)},function(t,e){t.className=t.className.replace(n(e)," ")});var s={hasClass:r,addClass:i,removeClass:o,toggleClass:e,has:r,add:i,remove:o,toggle:e};"function"==typeof define&&define.amd?define(s):t.classie=s}(window),function(r){"use strict";var n=r.document.documentElement;function s(){var t=n.clientHeight,e=r.innerHeight;return t<e?e:t}function a(){return r.pageYOffset||n.scrollTop}function i(t,e){var n=t.offsetHeight,r=a(),i=r+s(),o=function(t){for(var e=0,n=0;isNaN(t.offsetTop)||(e+=t.offsetTop),isNaN(t.offsetLeft)||(n+=t.offsetLeft),t=t.offsetParent;);return{top:e,left:n}}(t).top;return o+n*(e=e||0)<=i&&r<=o+n-n*e}function t(t,e){this.el=t,this.options=function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}(this.defaults,e),this._init()}t.prototype={defaults:{minDuration:0,maxDuration:0,viewportFactor:0},_init:function(){this.items=Array.prototype.slice.call(document.querySelectorAll("#"+this.el.id+" > article")),this.itemsCount=this.items.length,this.itemsRenderedCount=0,this.didScroll=!1;var n=this;n.items.forEach(function(t,e){i(t)&&(n._checkTotalRendered(),classie.add(t,"shown"))}),r.addEventListener("scroll",function(){n._onScrollFn()},!1),r.addEventListener("resize",function(){n._resizeHandler()},!1)},_onScrollFn:function(){var t=this;this.didScroll||(this.didScroll=!0,setTimeout(function(){t._scrollPage()},60))},_scrollPage:function(){var r=this;this.items.forEach(function(n,t){classie.has(n,"shown")||classie.has(n,"animate")||!i(n,r.options.viewportFactor)||setTimeout(function(){var t,e=a()+s()/2;r.el.style.WebkitPerspectiveOrigin="50% "+e+"px",r.el.style.MozPerspectiveOrigin="50% "+e+"px",r.el.style.perspectiveOrigin="50% "+e+"px",r._checkTotalRendered(),r.options.minDuration&&r.options.maxDuration&&(t=Math.random()*(r.options.maxDuration-r.options.minDuration)+r.options.minDuration+"s",n.style.WebkitAnimationDuration=t,n.style.MozAnimationDuration=t,n.style.animationDuration=t),classie.add(n,"animate")},25)}),this.didScroll=!1},_resizeHandler:function(){var t=this;this.resizeTimeout&&clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t._scrollPage(),t.resizeTimeout=null},1e3)},_checkTotalRendered:function(){++this.itemsRenderedCount,this.itemsRenderedCount===this.itemsCount&&r.removeEventListener("scroll",this._onScrollFn)}},r.AnimOnScroll=t}(window),function(u){u.fn.simpleJekyllSearch=function(t){var i=u.extend({jsonFile:location+"/search.json",jsonFormat:"title,tags,categories,url,date",template:'<li><article><a href="{url}">{title} <span class="entry-date"><time datetime="{date}">{date}</time></span></a></article></li>',searchResults:".search-results",searchResultsTitle:"<h4>Search results:</h4>",limit:"10",noResults:"<p>Oh snap!<br/><small>We found nothing :(</small></p>"},t),o=i.jsonFormat.split(","),s=[],r=this,a=u(i.searchResults);function c(){a.children().remove()}i.jsonFile.length&&a.length&&u.ajax({type:"GET",url:i.jsonFile,dataType:"json",success:function(t,e,n){s=t,r.keyup(function(t){var e,n,r;u(this).val().length?(n=u(this).val(),r=[],u.each(s,function(t,e){for(t=0;t<o.length;t++)void 0!==e[o[t]]&&-1!==e[o[t]].toLowerCase().indexOf(n.toLowerCase())&&(r.push(e),t=o.length)}),e=r,c(),a.append(u(i.searchResultsTitle)),e.length?u.each(e,function(t,e){if(t<i.limit){for(var n=i.template,t=0;t<o.length;t++)var r=new RegExp("{"+o[t]+"}","g"),n=n.replace(r,e[o[t]]);a.append(u(n))}}):a.append(i.noResults)):c()})},error:function(t,e,n){console.log("***ERROR in simpleJekyllSearch.js***"),console.log(t),console.log(e),console.log(n)}})}}(Zepto),function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(b){"use strict";function s(t){return null===t?0:(e=t,Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)+t.offsetTop);var e}var n,e,x,w,r={},i="querySelector"in document&&"addEventListener"in b,E={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},S=function(){var n={},r=!1,t=0,e=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(r=arguments[0],t++);for(;t<e;t++){!function(t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(r&&"[object Object]"===Object.prototype.toString.call(t[e])?n[e]=S(!0,n[e],t[e]):n[e]=t[e])}(arguments[t])}return n};r.animateScroll=function(a,c,t){var e,n=(e=a?a.getAttribute("data-options"):null)&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{},u=S(u||E,t||{},n),l="#"===(c="#"+function(t){for(var e,n=String(t),r=n.length,i=-1,o="",s=n.charCodeAt(0);++i<r;){if(0===(e=n.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");1<=e&&e<=31||127==e||0===i&&48<=e&&e<=57||1===i&&48<=e&&e<=57&&45===s?o+="\\"+e.toString(16)+" ":o+=128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(i):"\\"+n.charAt(i)}return o}(c.substr(1)))?b.document.documentElement:b.document.querySelector(c),f=b.pageYOffset;x=x||b.document.querySelector(u.selectorHeader),w=w||s(x);var h,p,d,r,i,m=function(t,e,n){var r=0;if(t.offsetParent)for(;r+=t.offsetTop,t=t.offsetParent;);return 0<=(r=r-e-n)?r:0}(l,w,parseInt(u.offset,10)),v=m-f,g=Math.max(b.document.body.scrollHeight,b.document.documentElement.scrollHeight,b.document.body.offsetHeight,b.document.documentElement.offsetHeight,b.document.body.clientHeight,b.document.documentElement.clientHeight),y=0;r=c,i=u.updateURL,b.history.pushState&&(i||"true"===i)&&"file:"!==b.location.protocol&&b.history.pushState(null,null,[b.location.protocol,"//",b.location.host,b.location.pathname,b.location.search,r].join(""));function o(){var t,e,n,r,i,o,s;p=1<(p=(y+=16)/parseInt(u.speed,10))?1:p,d=f+v*(t=u.easing,e=p,"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=e<.5?2*e*e:(4-2*e)*e-1),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=e<.5?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e),b.scrollTo(0,Math.floor(d)),r=d,i=m,o=h,s=b.pageYOffset,(r==i||s==i||b.innerHeight+s>=g)&&(clearInterval(o),l.focus(),u.callback(a,c))}0===b.pageYOffset&&b.scrollTo(0,0),h=setInterval(o,16)};function o(t){var e=function(t,e){var n,r,i=e.charAt(0),o="classList"in document.documentElement;for("["===i&&1<(n=(e=e.substr(1,e.length-2)).split("=")).length&&(r=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,""));t&&t!==document;t=t.parentNode){if("."===i)if(o){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===i&&t.id===e.substr(1))return t;if("["===i&&t.hasAttribute(n[0])){if(!r)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null}(t.target,n.selector);e&&"a"===e.tagName.toLowerCase()&&(t.preventDefault(),r.animateScroll(e,e.hash,n))}function a(t){e=e||setTimeout(function(){e=null,w=s(x)},66)}return r.destroy=function(){n&&(b.document.removeEventListener("click",o,!1),b.removeEventListener("resize",a,!1),w=x=e=n=null)},r.init=function(t){i&&(r.destroy(),n=S(E,t||{}),x=b.document.querySelector(n.selectorHeader),w=s(x),b.document.addEventListener("click",o,!1),x&&b.addEventListener("resize",a,!1))},r}),function(){for(var t=document.links,e=0,n=t.length;e<n;e++)t[e].hostname!=window.location.hostname&&(t[e].target="_blank",t[e].className+=" externalLink")}(),function(e,n){e("a#slide").click(function(){e("#sidebar,a#slide,#fade").addClass("slide"),e("#open").hide(),e("#search").hide(),e("#close").show()}),e("#fade").click(function(){e("#sidebar,a#slide,#fade").removeClass("slide"),e("#open").show(),e("#search").show(),e("#close").hide()});var t={close:e(".icon-remove-sign"),searchform:e(".search-form"),canvas:e("body"),dothis:e(".dosearch")};function r(){e(".search-wrapper").toggleClass("active"),t.searchform.toggleClass("active"),t.canvas.removeClass("search-overlay")}t.dothis.on("click",function(){e(".search-wrapper").toggleClass("active"),t.searchform.toggleClass("active"),t.searchform.find("input").focus(),t.canvas.toggleClass("search-overlay"),e(".search-field").simpleJekyllSearch()}),t.close.on("click",r),document.addEventListener("keyup",function(t){27==t.keyCode&&e(".search-overlay").length&&r()}),1<=document.getElementsByClassName("home").length&&new AnimOnScroll(document.getElementById("grid"),{minDuration:.4,maxDuration:.7,viewportFactor:.2}),smoothScroll.init({selectorHeader:".bar-header",speed:500,updateURL:!1}),1024<screen.width&&n.addEventListener("scroll",function(){var t=document.querySelector(".header-post .content"),e=n.scrollY;e<=500&&null!=t&&(t.style.transform="translateY("+-e/3+"px)",t.style.opacity=1-e/500)})}(Zepto,window);