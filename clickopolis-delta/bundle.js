!function(n){function t(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return n[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){"use strict";function r(){store.set("playerCiv",x),console.log(store.get("playerCiv"))}function i(n,t){var e=document.querySelector(n);e.insertAdjacentHTML("afterend",t)}function o(n,t,e){var r=document.querySelector(n);r.addEventListener(t,function(n){return console.log(e),e()})}function a(n,t){return void 0===t&&(t=!1),0==t?document.querySelector(n):document.querySelectorAll(n)}function c(){if(void 0!==store.get("playerCiv")){var n=store.get("playerCiv");x=new m(n.civName,n.leaderName,n.location),s()}else u(),x=new m("","","")}function s(){console.debug("Loading Saved Game..."),i("body",S.createStartScreen(x,w)),o(".load-btn","click",function(){f()}),o(".current-btn","click",function(){f()})}function u(){console.debug("Starting New Game..."),i("body",S.settingsScreen),o(".begin-btn","click",function(){l(),f()}),document.querySelector("#trait").addEventListener("change",function(){p(0)})}function l(){var n=document.querySelector("#civName"),t=document.querySelector("#leaderName"),e=document.querySelector("#location");x.civName=n.value,x.leaderName=t.value,x.location=e.value,r()}function p(n){var t=document.querySelector("#trait"),e=t.value;x.leaderTraits[n]=e,console.log(t.value,x.leaderTraits),r()}function f(){var n=document.querySelector(".clickopolis-intro"),t=document.createElement("section");t.innerHTML="",t.setAttribute("class","clickopolis"),t.setAttribute("id","clickopolis"),g(t),void 0!=n?n.remove():console.log("intro not defined"),document.body.appendChild(t),o(".food-btn","click",function(){var n=document.querySelector(".r-food-total");N[0].total>=N[0].max?N[0].total=N[0].max:N[0].total+=N[0].perClick,n.innerHTML=N[0].total.toString()+" total",console.log(this)})}function g(n){n.innerHTML=S.createScreenHeader(x,w)+S.createResourcesScreen(x,N)+S.createCivilizationScreen(x)+S.createCitizenScreen(x)}function v(){c()}var d=e(1),h=e(2),m=e(3),y=e(4),b=e(5);console.log(d.random(0,100));var x,w=new h(0),S=new b,k=new y("food",1,0,200,0,"food","Food."),j=new y("prod",1,0,200,0,"prod","Prod."),_=new y("stone",0,0,-1,0,"stone","Stone"),A=new y("fish",0,0,-1,0,"fish","Fishies"),N=[k,j,_,A];w.era="ancient",console.log(N[0],N[1]),setInterval(function(){N[0].total>=N[0].max?N[0].total=N[0].max:N[0].total+=N[0].perSecond,a(".r-food-total").textContent=N[0].total.toString()+" total"},1e3),v()},function(n,t,e){var r,i;(function(){function e(n){function t(t,e,r,i,o,a){for(;o>=0&&a>o;o+=n){var c=i?i[o]:o;r=e(r,t[c],c,t)}return r}return function(e,r,i,o){r=k(r,o,4);var a=!z(e)&&S.keys(e),c=(a||e).length,s=n>0?0:c-1;return arguments.length<3&&(i=e[a?a[s]:s],s+=n),t(e,r,i,a,s,c)}}function o(n){return function(t,e,r){e=j(e,r);for(var i=C(t),o=n>0?0:i-1;o>=0&&i>o;o+=n)if(e(t[o],o,t))return o;return-1}}function a(n,t,e){return function(r,i,o){var a=0,c=C(r);if("number"==typeof o)n>0?a=o>=0?o:Math.max(o+c,a):c=o>=0?Math.min(o+1,c):o+c+1;else if(e&&o&&c)return o=e(r,i),r[o]===i?o:-1;if(i!==i)return o=t(v.call(r,a,c),S.isNaN),o>=0?o+a:-1;for(o=n>0?a:c-1;o>=0&&c>o;o+=n)if(r[o]===i)return o;return-1}}function c(n,t){var e=T.length,r=n.constructor,i=S.isFunction(r)&&r.prototype||p,o="constructor";for(S.has(n,o)&&!S.contains(t,o)&&t.push(o);e--;)o=T[e],o in n&&n[o]!==i[o]&&!S.contains(t,o)&&t.push(o)}var s=this,u=s._,l=Array.prototype,p=Object.prototype,f=Function.prototype,g=l.push,v=l.slice,d=p.toString,h=p.hasOwnProperty,m=Array.isArray,y=Object.keys,b=f.bind,x=Object.create,w=function(){},S=function(n){return n instanceof S?n:this instanceof S?void(this._wrapped=n):new S(n)};"undefined"!=typeof n&&n.exports&&(t=n.exports=S),t._=S,S.VERSION="1.8.3";var k=function(n,t,e){if(void 0===t)return n;switch(null==e?3:e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,i){return n.call(t,e,r,i)};case 4:return function(e,r,i,o){return n.call(t,e,r,i,o)}}return function(){return n.apply(t,arguments)}},j=function(n,t,e){return null==n?S.identity:S.isFunction(n)?k(n,t,e):S.isObject(n)?S.matcher(n):S.property(n)};S.iteratee=function(n,t){return j(n,t,1/0)};var _=function(n,t){return function(e){var r=arguments.length;if(2>r||null==e)return e;for(var i=1;r>i;i++)for(var o=arguments[i],a=n(o),c=a.length,s=0;c>s;s++){var u=a[s];t&&void 0!==e[u]||(e[u]=o[u])}return e}},A=function(n){if(!S.isObject(n))return{};if(x)return x(n);w.prototype=n;var t=new w;return w.prototype=null,t},N=function(n){return function(t){return null==t?void 0:t[n]}},O=Math.pow(2,53)-1,C=N("length"),z=function(n){var t=C(n);return"number"==typeof t&&t>=0&&O>=t};S.each=S.forEach=function(n,t,e){t=k(t,e);var r,i;if(z(n))for(r=0,i=n.length;i>r;r++)t(n[r],r,n);else{var o=S.keys(n);for(r=0,i=o.length;i>r;r++)t(n[o[r]],o[r],n)}return n},S.map=S.collect=function(n,t,e){t=j(t,e);for(var r=!z(n)&&S.keys(n),i=(r||n).length,o=Array(i),a=0;i>a;a++){var c=r?r[a]:a;o[a]=t(n[c],c,n)}return o},S.reduce=S.foldl=S.inject=e(1),S.reduceRight=S.foldr=e(-1),S.find=S.detect=function(n,t,e){var r;return r=z(n)?S.findIndex(n,t,e):S.findKey(n,t,e),void 0!==r&&-1!==r?n[r]:void 0},S.filter=S.select=function(n,t,e){var r=[];return t=j(t,e),S.each(n,function(n,e,i){t(n,e,i)&&r.push(n)}),r},S.reject=function(n,t,e){return S.filter(n,S.negate(j(t)),e)},S.every=S.all=function(n,t,e){t=j(t,e);for(var r=!z(n)&&S.keys(n),i=(r||n).length,o=0;i>o;o++){var a=r?r[o]:o;if(!t(n[a],a,n))return!1}return!0},S.some=S.any=function(n,t,e){t=j(t,e);for(var r=!z(n)&&S.keys(n),i=(r||n).length,o=0;i>o;o++){var a=r?r[o]:o;if(t(n[a],a,n))return!0}return!1},S.contains=S.includes=S.include=function(n,t,e,r){return z(n)||(n=S.values(n)),("number"!=typeof e||r)&&(e=0),S.indexOf(n,t,e)>=0},S.invoke=function(n,t){var e=v.call(arguments,2),r=S.isFunction(t);return S.map(n,function(n){var i=r?t:n[t];return null==i?i:i.apply(n,e)})},S.pluck=function(n,t){return S.map(n,S.property(t))},S.where=function(n,t){return S.filter(n,S.matcher(t))},S.findWhere=function(n,t){return S.find(n,S.matcher(t))},S.max=function(n,t,e){var r,i,o=-(1/0),a=-(1/0);if(null==t&&null!=n){n=z(n)?n:S.values(n);for(var c=0,s=n.length;s>c;c++)r=n[c],r>o&&(o=r)}else t=j(t,e),S.each(n,function(n,e,r){i=t(n,e,r),(i>a||i===-(1/0)&&o===-(1/0))&&(o=n,a=i)});return o},S.min=function(n,t,e){var r,i,o=1/0,a=1/0;if(null==t&&null!=n){n=z(n)?n:S.values(n);for(var c=0,s=n.length;s>c;c++)r=n[c],o>r&&(o=r)}else t=j(t,e),S.each(n,function(n,e,r){i=t(n,e,r),(a>i||i===1/0&&o===1/0)&&(o=n,a=i)});return o},S.shuffle=function(n){for(var t,e=z(n)?n:S.values(n),r=e.length,i=Array(r),o=0;r>o;o++)t=S.random(0,o),t!==o&&(i[o]=i[t]),i[t]=e[o];return i},S.sample=function(n,t,e){return null==t||e?(z(n)||(n=S.values(n)),n[S.random(n.length-1)]):S.shuffle(n).slice(0,Math.max(0,t))},S.sortBy=function(n,t,e){return t=j(t,e),S.pluck(S.map(n,function(n,e,r){return{value:n,index:e,criteria:t(n,e,r)}}).sort(function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(r>e||void 0===r)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,e,r){var i={};return e=j(e,r),S.each(t,function(r,o){var a=e(r,o,t);n(i,r,a)}),i}};S.groupBy=F(function(n,t,e){S.has(n,e)?n[e].push(t):n[e]=[t]}),S.indexBy=F(function(n,t,e){n[e]=t}),S.countBy=F(function(n,t,e){S.has(n,e)?n[e]++:n[e]=1}),S.toArray=function(n){return n?S.isArray(n)?v.call(n):z(n)?S.map(n,S.identity):S.values(n):[]},S.size=function(n){return null==n?0:z(n)?n.length:S.keys(n).length},S.partition=function(n,t,e){t=j(t,e);var r=[],i=[];return S.each(n,function(n,e,o){(t(n,e,o)?r:i).push(n)}),[r,i]},S.first=S.head=S.take=function(n,t,e){return null!=n?null==t||e?n[0]:S.initial(n,n.length-t):void 0},S.initial=function(n,t,e){return v.call(n,0,Math.max(0,n.length-(null==t||e?1:t)))},S.last=function(n,t,e){return null!=n?null==t||e?n[n.length-1]:S.rest(n,Math.max(0,n.length-t)):void 0},S.rest=S.tail=S.drop=function(n,t,e){return v.call(n,null==t||e?1:t)},S.compact=function(n){return S.filter(n,S.identity)};var E=function(n,t,e,r){for(var i=[],o=0,a=r||0,c=C(n);c>a;a++){var s=n[a];if(z(s)&&(S.isArray(s)||S.isArguments(s))){t||(s=E(s,t,e));var u=0,l=s.length;for(i.length+=l;l>u;)i[o++]=s[u++]}else e||(i[o++]=s)}return i};S.flatten=function(n,t){return E(n,t,!1)},S.without=function(n){return S.difference(n,v.call(arguments,1))},S.uniq=S.unique=function(n,t,e,r){S.isBoolean(t)||(r=e,e=t,t=!1),null!=e&&(e=j(e,r));for(var i=[],o=[],a=0,c=C(n);c>a;a++){var s=n[a],u=e?e(s,a,n):s;t?(a&&o===u||i.push(s),o=u):e?S.contains(o,u)||(o.push(u),i.push(s)):S.contains(i,s)||i.push(s)}return i},S.union=function(){return S.uniq(E(arguments,!0,!0))},S.intersection=function(n){for(var t=[],e=arguments.length,r=0,i=C(n);i>r;r++){var o=n[r];if(!S.contains(t,o)){for(var a=1;e>a&&S.contains(arguments[a],o);a++);a===e&&t.push(o)}}return t},S.difference=function(n){var t=E(arguments,!0,!0,1);return S.filter(n,function(n){return!S.contains(t,n)})},S.zip=function(){return S.unzip(arguments)},S.unzip=function(n){for(var t=n&&S.max(n,C).length||0,e=Array(t),r=0;t>r;r++)e[r]=S.pluck(n,r);return e},S.object=function(n,t){for(var e={},r=0,i=C(n);i>r;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e},S.findIndex=o(1),S.findLastIndex=o(-1),S.sortedIndex=function(n,t,e,r){e=j(e,r,1);for(var i=e(t),o=0,a=C(n);a>o;){var c=Math.floor((o+a)/2);e(n[c])<i?o=c+1:a=c}return o},S.indexOf=a(1,S.findIndex,S.sortedIndex),S.lastIndexOf=a(-1,S.findLastIndex),S.range=function(n,t,e){null==t&&(t=n||0,n=0),e=e||1;for(var r=Math.max(Math.ceil((t-n)/e),0),i=Array(r),o=0;r>o;o++,n+=e)i[o]=n;return i};var M=function(n,t,e,r,i){if(!(r instanceof t))return n.apply(e,i);var o=A(n.prototype),a=n.apply(o,i);return S.isObject(a)?a:o};S.bind=function(n,t){if(b&&n.bind===b)return b.apply(n,v.call(arguments,1));if(!S.isFunction(n))throw new TypeError("Bind must be called on a function");var e=v.call(arguments,2),r=function(){return M(n,r,t,this,e.concat(v.call(arguments)))};return r},S.partial=function(n){var t=v.call(arguments,1),e=function(){for(var r=0,i=t.length,o=Array(i),a=0;i>a;a++)o[a]=t[a]===S?arguments[r++]:t[a];for(;r<arguments.length;)o.push(arguments[r++]);return M(n,e,this,this,o)};return e},S.bindAll=function(n){var t,e,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)e=arguments[t],n[e]=S.bind(n[e],n);return n},S.memoize=function(n,t){var e=function(r){var i=e.cache,o=""+(t?t.apply(this,arguments):r);return S.has(i,o)||(i[o]=n.apply(this,arguments)),i[o]};return e.cache={},e},S.delay=function(n,t){var e=v.call(arguments,2);return setTimeout(function(){return n.apply(null,e)},t)},S.defer=S.partial(S.delay,S,1),S.throttle=function(n,t,e){var r,i,o,a=null,c=0;e||(e={});var s=function(){c=e.leading===!1?0:S.now(),a=null,o=n.apply(r,i),a||(r=i=null)};return function(){var u=S.now();c||e.leading!==!1||(c=u);var l=t-(u-c);return r=this,i=arguments,0>=l||l>t?(a&&(clearTimeout(a),a=null),c=u,o=n.apply(r,i),a||(r=i=null)):a||e.trailing===!1||(a=setTimeout(s,l)),o}},S.debounce=function(n,t,e){var r,i,o,a,c,s=function(){var u=S.now()-a;t>u&&u>=0?r=setTimeout(s,t-u):(r=null,e||(c=n.apply(o,i),r||(o=i=null)))};return function(){o=this,i=arguments,a=S.now();var u=e&&!r;return r||(r=setTimeout(s,t)),u&&(c=n.apply(o,i),o=i=null),c}},S.wrap=function(n,t){return S.partial(t,n)},S.negate=function(n){return function(){return!n.apply(this,arguments)}},S.compose=function(){var n=arguments,t=n.length-1;return function(){for(var e=t,r=n[t].apply(this,arguments);e--;)r=n[e].call(this,r);return r}},S.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},S.before=function(n,t){var e;return function(){return--n>0&&(e=t.apply(this,arguments)),1>=n&&(t=null),e}},S.once=S.partial(S.before,2);var q=!{toString:null}.propertyIsEnumerable("toString"),T=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];S.keys=function(n){if(!S.isObject(n))return[];if(y)return y(n);var t=[];for(var e in n)S.has(n,e)&&t.push(e);return q&&c(n,t),t},S.allKeys=function(n){if(!S.isObject(n))return[];var t=[];for(var e in n)t.push(e);return q&&c(n,t),t},S.values=function(n){for(var t=S.keys(n),e=t.length,r=Array(e),i=0;e>i;i++)r[i]=n[t[i]];return r},S.mapObject=function(n,t,e){t=j(t,e);for(var r,i=S.keys(n),o=i.length,a={},c=0;o>c;c++)r=i[c],a[r]=t(n[r],r,n);return a},S.pairs=function(n){for(var t=S.keys(n),e=t.length,r=Array(e),i=0;e>i;i++)r[i]=[t[i],n[t[i]]];return r},S.invert=function(n){for(var t={},e=S.keys(n),r=0,i=e.length;i>r;r++)t[n[e[r]]]=e[r];return t},S.functions=S.methods=function(n){var t=[];for(var e in n)S.isFunction(n[e])&&t.push(e);return t.sort()},S.extend=_(S.allKeys),S.extendOwn=S.assign=_(S.keys),S.findKey=function(n,t,e){t=j(t,e);for(var r,i=S.keys(n),o=0,a=i.length;a>o;o++)if(r=i[o],t(n[r],r,n))return r},S.pick=function(n,t,e){var r,i,o={},a=n;if(null==a)return o;S.isFunction(t)?(i=S.allKeys(a),r=k(t,e)):(i=E(arguments,!1,!1,1),r=function(n,t,e){return t in e},a=Object(a));for(var c=0,s=i.length;s>c;c++){var u=i[c],l=a[u];r(l,u,a)&&(o[u]=l)}return o},S.omit=function(n,t,e){if(S.isFunction(t))t=S.negate(t);else{var r=S.map(E(arguments,!1,!1,1),String);t=function(n,t){return!S.contains(r,t)}}return S.pick(n,t,e)},S.defaults=_(S.allKeys,!0),S.create=function(n,t){var e=A(n);return t&&S.extendOwn(e,t),e},S.clone=function(n){return S.isObject(n)?S.isArray(n)?n.slice():S.extend({},n):n},S.tap=function(n,t){return t(n),n},S.isMatch=function(n,t){var e=S.keys(t),r=e.length;if(null==n)return!r;for(var i=Object(n),o=0;r>o;o++){var a=e[o];if(t[a]!==i[a]||!(a in i))return!1}return!0};var I=function(n,t,e,r){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof S&&(n=n._wrapped),t instanceof S&&(t=t._wrapped);var i=d.call(n);if(i!==d.call(t))return!1;switch(i){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var o="[object Array]"===i;if(!o){if("object"!=typeof n||"object"!=typeof t)return!1;var a=n.constructor,c=t.constructor;if(a!==c&&!(S.isFunction(a)&&a instanceof a&&S.isFunction(c)&&c instanceof c)&&"constructor"in n&&"constructor"in t)return!1}e=e||[],r=r||[];for(var s=e.length;s--;)if(e[s]===n)return r[s]===t;if(e.push(n),r.push(t),o){if(s=n.length,s!==t.length)return!1;for(;s--;)if(!I(n[s],t[s],e,r))return!1}else{var u,l=S.keys(n);if(s=l.length,S.keys(t).length!==s)return!1;for(;s--;)if(u=l[s],!S.has(t,u)||!I(n[u],t[u],e,r))return!1}return e.pop(),r.pop(),!0};S.isEqual=function(n,t){return I(n,t)},S.isEmpty=function(n){return null==n?!0:z(n)&&(S.isArray(n)||S.isString(n)||S.isArguments(n))?0===n.length:0===S.keys(n).length},S.isElement=function(n){return!(!n||1!==n.nodeType)},S.isArray=m||function(n){return"[object Array]"===d.call(n)},S.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},S.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){S["is"+n]=function(t){return d.call(t)==="[object "+n+"]"}}),S.isArguments(arguments)||(S.isArguments=function(n){return S.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(S.isFunction=function(n){return"function"==typeof n||!1}),S.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},S.isNaN=function(n){return S.isNumber(n)&&n!==+n},S.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===d.call(n)},S.isNull=function(n){return null===n},S.isUndefined=function(n){return void 0===n},S.has=function(n,t){return null!=n&&h.call(n,t)},S.noConflict=function(){return s._=u,this},S.identity=function(n){return n},S.constant=function(n){return function(){return n}},S.noop=function(){},S.property=N,S.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},S.matcher=S.matches=function(n){return n=S.extendOwn({},n),function(t){return S.isMatch(t,n)}},S.times=function(n,t,e){var r=Array(Math.max(0,n));t=k(t,e,1);for(var i=0;n>i;i++)r[i]=t(i);return r},S.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},S.now=Date.now||function(){return(new Date).getTime()};var P={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},L=S.invert(P),B=function(n){var t=function(t){return n[t]},e="(?:"+S.keys(n).join("|")+")",r=RegExp(e),i=RegExp(e,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(i,t):n}};S.escape=B(P),S.unescape=B(L),S.result=function(n,t,e){var r=null==n?void 0:n[t];return void 0===r&&(r=e),S.isFunction(r)?r.call(n):r};var R=0;S.uniqueId=function(n){var t=++R+"";return n?n+t:t},S.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var G=/(.)^/,H={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},K=/\\|'|\r|\n|\u2028|\u2029/g,D=function(n){return"\\"+H[n]};S.template=function(n,t,e){!t&&e&&(t=e),t=S.defaults({},t,S.templateSettings);var r=RegExp([(t.escape||G).source,(t.interpolate||G).source,(t.evaluate||G).source].join("|")+"|$","g"),i=0,o="__p+='";n.replace(r,function(t,e,r,a,c){return o+=n.slice(i,c).replace(K,D),i=c+t.length,e?o+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?o+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(o+="';\n"+a+"\n__p+='"),t}),o+="';\n",t.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{var a=new Function(t.variable||"obj","_",o)}catch(c){throw c.source=o,c}var s=function(n){return a.call(this,n,S)},u=t.variable||"obj";return s.source="function("+u+"){\n"+o+"}",s},S.chain=function(n){var t=S(n);return t._chain=!0,t};var J=function(n,t){return n._chain?S(t).chain():t};S.mixin=function(n){S.each(S.functions(n),function(t){var e=S[t]=n[t];S.prototype[t]=function(){var n=[this._wrapped];return g.apply(n,arguments),J(this,e.apply(S,n))}})},S.mixin(S),S.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=l[n];S.prototype[n]=function(){var e=this._wrapped;return t.apply(e,arguments),"shift"!==n&&"splice"!==n||0!==e.length||delete e[0],J(this,e)}}),S.each(["concat","join","slice"],function(n){var t=l[n];S.prototype[n]=function(){return J(this,t.apply(this._wrapped,arguments))}}),S.prototype.value=function(){return this._wrapped},S.prototype.valueOf=S.prototype.toJSON=S.prototype.value,S.prototype.toString=function(){return""+this._wrapped},r=[],i=function(){return S}.apply(t,r),!(void 0!==i&&(n.exports=i))}).call(this)},function(n,t){"use strict";var e=function(){function n(n){this.introStep=n}return n}();n.exports=e},function(n,t){"use strict";var e=function(){function n(n,t,e){this.civName=n,this.leaderName=t,this.location=e,this.leaderTraits=[],this.leaderTraitsMax=3,this.happiness=0,this.anger=0,this.health=0,this.pollution=0,this.influence=0,this.legacy=0,this.achievements=0}return n}();n.exports=e},function(n,t){"use strict";var e=function(){function n(n,t,e,r,i,o,a){this.name=n,this.perClick=t,this.perSecond=e,this.max=r,this.total=i,this.image=o,this.description=a}return n}();n.exports=e},function(n,t){"use strict";var e=function(){function n(){this.settingsScreen='\n    <section class=\'clickopolis-intro\'>\n      <img class=\'clickopolis-logo custom-size-img\' src=\'img/clickopolis-logo.png\'>\n      <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle\n        <select id="location">\n          <option value="none">select an option!</option>\n          <option value="coast">by the Coast</option>\n          <option value="oasis">in an Oasis</option>\n          <option value="forest">in a Forest</option>\n          <option value="tundra">in a Tundra</option>\n          <option value="iceberg">on an Iceberg</option>\n        </select>\n      </p>\n      <p>Your name is <input type="text" id="leaderName" maxlength="10" size="10" placeholder="Jake"> of <input type="text" id="civName" placeholder="Jaketopia" maxlength="20"></p>\n      <p>You are a(n)\n        <select id="trait">\n          <option value="aggressive">aggressive</option>\n          <option value="cosmpolitan">cosmpolitan</option>\n          <option value="daring">daring</option>\n          <option value="expansionist">expansionist</option>\n          <option value="industrious">industrious</option>\n          <option value="isolationist">isolationist</option>\n          <option value="pacifistic">pacifistic</option>\n          <option value="persuasive">persuasive</option>\n        </select>\n       leader.</p>\n\n       <button class=\'begin-btn\'>Begin Game!</button>\n\n    </section>\n  '}return n.prototype.createStartScreen=function(n,t){var e='\n      <section class=\'clickopolis-intro\'>\n        <h1><img class=\'clickopolis-logo custom-size-img\' alt=\'Clickopolis\' src=\'img/clickopolis-logo.png\'></h1>\n        <div class="start-options">\n          <button class="large-btn start-btn load-btn">Load Game...</button>\n          <button class="large-btn start-btn new-btn">New Game</button>\n          <button class="large-btn start-btn current-btn">\n            <p class="current-game-heading">Current Game: '+n.leaderName+" of "+n.civName+"</p>\n            <p>"+t.era+'</p>\n            <p>\n              <span>\n                <img src="img/achievements.png"> 5\n              </span>\n              <span>\n                <img src="img/strength.png"> 33\n              </span>\n              <span>\n                <img src="img/defense.png"> 44\n              </span>\n              <span>\n                <img src="img/legacy.png"> 2\n              </span>\n              <span>\n                <img src="img/coin.png"> 1K\n              </span>\n              <span>\n                <img src="img/wonder.png"> 1\n              </span>\n            </p>\n          </button>\n        </div>\n        <!-- <button class=\'next-btn\'>Next &rarr;</button> -->\n      </section>\n    ';return e},n.prototype.createResourcesScreen=function(n,t){var e="\n      <section class='screen resources-screen'>\n        <h2><img src='img/resources.png'> Resources</h2>\n        <section class='resources-screen-inner'>\n          <div class='panel food-panel'>\n            <button class='food-btn'><img src='img/food-alt.png'> Grow Food</button>\n            <span class='resource-info r-food-pc'>"+t[0].perClick+" PC</span>\n            <span class='resource-info r-food-ps'>"+t[0].perSecond+" PS</span>\n            <span class='resource-info r-food-max'>"+t[0].max+" max</span>\n            <span class='resource-info r-food-total'>"+t[0].total+" total</span>\n          </div>\n          <div class='panel prod-panel'>\n            <button class='prod-btn'><img src='img/prod.png'> Create Production</button>\n            <span class='resource-info'>"+t[1].perClick+" PC</span>\n            <span class='resource-info'>"+t[1].perSecond+" PS</span>\n            <span class='resource-info'>"+t[1].max+" max</span>\n            <span class='resource-info'>"+t[1].total+" total</span>\n          </div>\n\n          <br>\n\n          <div class='panel resources-panel'>\n            <span class='resource'>\n              <img src='img/health.png'> Health\n            </span>\n\n            <span class='resource' data-resource='fish'>\n              <img src='img/fish.png'> <span>33</span>\n            </span>\n\n            <span class='resource' data-resource='banana'>\n              <img src='img/banana.png'> <span>22</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/buildings.png'> Building\n            </span>\n\n            <span class='resource' data-resource='stone'>\n              <img src='img/stone.png'> <span>25</span>\n            </span>\n\n            <span class='resource' data-resource='iron'>\n              <img src='img/iron.png'> <span>22</span>\n            </span>\n\n\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/cavalry.png'> Strategic\n            </span>\n\n            <span class='resource' data-resource='oil'>\n              <img src='img/oil.png'> <span>22</span>\n            </span>\n\n            <span class='resource' data-resource='uranium'>\n              <img src='img/uranium.png'> <span>22</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/crown.png'> Luxury\n            </span>\n\n            <span class='resource' data-resource='gold'>\n              <img src='img/gold.png'> <span>0</span>\n            </span>\n\n            <span class='resource' data-resource='gems'>\n              <img src='img/gems.png'> <span>34</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/illuminati.png'> Power\n            </span>\n\n            <span class='resource' data-resource='spaghetti'>\n              <img src='img/spaghetti.png'> 22\n            </span>\n\n\n          </div>\n\n\n\n        </section>\n        <br>\n        <section class='resource-screen-inner resource-info-screen'>\n          <h3><img src='img/fish.png'> Fish<br></h3>\n          <p>Fish are caught in nets by citizens every now and then. Each fish provides +.5 <img src='img/health.png'> Fish are a popular trade item with Desert nations.</p>\n\n        </section>\n      </section>\n    ";return e},n.prototype.createScreenHeader=function(n,t){var e="\n      <header class='screen-header'>\n        <h1>Clickopolis</h1>\n        <h2>"+n.leaderName+" of "+n.civName+" &mdash; "+t.era+"</h2>\n      </header>\n    ";return e},n.prototype.createCitizenScreen=function(n){var t="\n      <section class='screen citizens-screen'>\n        <h2><img src='img/citizens.png'> Citizens</h2>\n        <section class='citizens-screen-inner'>\n          <div class='row citizen-farmer'>\n            <button data-citizien-amount='-1'>-1</button>\n            <span class='citizen-icon'><img src='img/farmer.png'></span>\n            <button data-citizen-amount='1'>+1</button>\n            <span class='citizen-info'>\n              Farmers: <strong>12</strong> | <em>Farmers provide +1 <img src='img/food.png'> PC and +.2 PC.</em>\n            </span>\n          </div>\n        </section>\n      </section>\n    ";return t},n.prototype.createCivilizationScreen=function(n){var t="\n      <section class='screen civilization-screen'>\n        <h2><img src='img/empire.png'> Civilization</h2>\n        <section class='civilization-screen-inner'>\n          <div class='panel population-panel'>\n            <button class='pop-btn'>Grow Population (+1)</button>\n            <span>Growth Cost: <img src='img/food.png'> 10</span>\n            <span>Population: <img src='img/citizen.png'> 33</span>\n          </div>\n          <div class='panel civ-metric-panel'>\n            <span class='civ-metric metric-happiness'>\n              <img src='img/happy.png'> "+n.happiness+"\n            </span>\n            <span class='civ-metric metric-anger'>\n              <img src='img/angry.png'> "+n.anger+"\n            </span>\n            <span class='civ-metric metric-health'>\n              <img src='img/health.png'> "+n.health+"\n            </span>\n            <span class='civ-metric metric-pollution'>\n              <img src='img/pollution.png'> "+n.pollution+"\n            </span>\n            <span class='civ-metric metric-influence'>\n              <img src='img/influence.png'> "+n.influence+"\n            </span>\n          </div>\n        </section>\n      </section>\n    ";return t},n}();n.exports=e}]);
//# sourceMappingURL=bundle.js.map