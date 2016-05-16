!function(n){function t(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return n[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){"use strict";function r(){store.set("playerCiv",j),console.log(store.get("playerCiv"))}function o(n,t){var e=document.querySelector(n);e.insertAdjacentHTML("afterend",t)}function i(n,t,e){var r=document.querySelector(n);r.addEventListener(t,function(n){return console.log(e),e()})}function a(n,t){return void 0===t&&(t=!1),0==t?document.querySelector(n):document.querySelectorAll(n)}function s(){if(void 0!==store.get("playerCiv")){var n=store.get("playerCiv");j=new S(n.civName,n.leaderName,n.location),c()}else u(),j=new S("","","")}function c(){console.debug("Loading Saved Game..."),o("body",_.createStartScreen(j,z)),i(".load-btn","click",function(){f()}),i(".current-btn","click",function(){f()})}function u(){console.debug("Starting New Game..."),o("body",_.settingsScreen),i(".begin-btn","click",function(){l(),f()}),document.querySelector("#trait").addEventListener("change",function(){p(0)})}function l(){var n=document.querySelector("#civName"),t=document.querySelector("#leaderName"),e=document.querySelector("#location");j.civName=n.value,j.leaderName=t.value,j.location=e.value,r()}function p(n){var t=document.querySelector("#trait"),e=t.value;j.leaderTraits[n]=e,console.log(t.value,j.leaderTraits),r()}function f(){var n=document.querySelector(".clickopolis-intro"),t=document.createElement("section");t.innerHTML="",t.setAttribute("class","clickopolis"),t.setAttribute("id","clickopolis"),d(t),void 0!=n?n.remove():console.log("intro not defined"),document.body.appendChild(t),i(".food-btn","click",function(n){n.preventDefault(),g(".r-food-total","food"),v()}),i(".prod-btn","click",function(n){n.preventDefault(),g(".r-prod-total","prod"),v()}),h(),i(".pop-btn","click",function(){console.log("Systems are a go!");var n=document.querySelector(".pop-growth-cost"),t=document.querySelector(".population-text");H.get("food").total-=j.populationGrowthCost,j.population+=1,t.textContent=j.population.toString(),n.textContent=j.populationGrowthCost.toString()})}function g(n,t){var e=a(n);H.get(t).total>=H.get(t).max?H.get(t).total=H.get(t).max:H.get(t).total+=H.get(t).perClick,e.innerHTML=H.get(t).total.toString()+" total"}function d(n){n.innerHTML=_.createScreenHeader(j,z)+_.createResourcesScreen(j,H)+_.createCivilizationScreen(j)+_.createCitizenScreen(j)+_.createEconomyScreen(j)+_.createBuildingsScreen()+_.createTechnologyScreen()}function h(){var n=document.querySelectorAll(".resource");[].forEach.call(n,function(n){n.addEventListener("click",function(){var n=this.getAttribute("data-resource");"resource active"===this.className?this.className="resource":this.className+=" active",m(n)})})}function m(n){console.log(n)}function v(){var n=document.querySelector(".pop-btn");return j.populationGrowthCost>H.get("food").total?(console.log(j.populationGrowthCost),n.setAttribute("disabled","true"),!1):(console.log(j.populationGrowthCost),n.setAttribute("disabled","false"),!0)}function y(){s()}var b=e(1),w=e(7),x=e(2),S=e(3),k=e(4),A=e(5),C=e(6);console.log(b.random(0,100));var j,z=new x(0),_=new C,N=new k("food",1,1,1e3,0,"food","Food."),O=new k("prod",1,0,2e3,0,"prod","Prod."),E=new k("stone",0,0,-1,0,"stone","Stone"),F=new k("fish",0,0,-1,0,"fish","Fishies"),M=new k("banana",0,0,-1,0,"banana","Banana"),q=new k("gold",0,0,-1,0,"gold","Gold"),P=new k("gems",0,0,-1,0,"gems","Gemss"),T=new k("oil",0,0,-1,0,"oil","Oil"),G=new k("uranium",0,0,-1,0,"uranium","Uranium"),B=new k("iron",0,0,-1,0,"iron","Iron"),I=new k("horse",0,0,-1,0,"horse","Horsies :]"),L=new k("spaghetti",0,0,-1,0,"spaghetti","Spaghetts"),R=new k("chihuahua",0,0,-1,0,"chihuahua","Bark!"),H=new A([N,O,E,F,M,q,P,T,B,G,R,L,I]),D=(new w,!0);window.addEventListener("focus",function(){D=!0}),window.addEventListener("blur",function(){D=!1}),setInterval(function(){D&&(H.get("food").total>=H.get("food").max?H.get("food").total=H.get("food").max:H.get("food").total+=H.get("food").perSecond,a(".r-food-total").textContent=H.get("food").total.toString()+" total",H.get("prod").total>=H.get("prod").max?H.get("prod").total=H.get("prod").max:H.get("food").total+=H.get("prod").perSecond,a(".r-prod-total").textContent=H.get("prod").total.toString()+" total",z.time+=1,v()),console.log(D)},1e3),setInterval(function(){D&&(z.year+=1)},6e4),y()},function(n,t,e){var r,o;(function(){function e(n){function t(t,e,r,o,i,a){for(;i>=0&&a>i;i+=n){var s=o?o[i]:i;r=e(r,t[s],s,t)}return r}return function(e,r,o,i){r=k(r,i,4);var a=!O(e)&&S.keys(e),s=(a||e).length,c=n>0?0:s-1;return arguments.length<3&&(o=e[a?a[c]:c],c+=n),t(e,r,o,a,c,s)}}function i(n){return function(t,e,r){e=A(e,r);for(var o=N(t),i=n>0?0:o-1;i>=0&&o>i;i+=n)if(e(t[i],i,t))return i;return-1}}function a(n,t,e){return function(r,o,i){var a=0,s=N(r);if("number"==typeof i)n>0?a=i>=0?i:Math.max(i+s,a):s=i>=0?Math.min(i+1,s):i+s+1;else if(e&&i&&s)return i=e(r,o),r[i]===o?i:-1;if(o!==o)return i=t(d.call(r,a,s),S.isNaN),i>=0?i+a:-1;for(i=n>0?a:s-1;i>=0&&s>i;i+=n)if(r[i]===o)return i;return-1}}function s(n,t){var e=P.length,r=n.constructor,o=S.isFunction(r)&&r.prototype||p,i="constructor";for(S.has(n,i)&&!S.contains(t,i)&&t.push(i);e--;)i=P[e],i in n&&n[i]!==o[i]&&!S.contains(t,i)&&t.push(i)}var c=this,u=c._,l=Array.prototype,p=Object.prototype,f=Function.prototype,g=l.push,d=l.slice,h=p.toString,m=p.hasOwnProperty,v=Array.isArray,y=Object.keys,b=f.bind,w=Object.create,x=function(){},S=function(n){return n instanceof S?n:this instanceof S?void(this._wrapped=n):new S(n)};"undefined"!=typeof n&&n.exports&&(t=n.exports=S),t._=S,S.VERSION="1.8.3";var k=function(n,t,e){if(void 0===t)return n;switch(null==e?3:e){case 1:return function(e){return n.call(t,e)};case 2:return function(e,r){return n.call(t,e,r)};case 3:return function(e,r,o){return n.call(t,e,r,o)};case 4:return function(e,r,o,i){return n.call(t,e,r,o,i)}}return function(){return n.apply(t,arguments)}},A=function(n,t,e){return null==n?S.identity:S.isFunction(n)?k(n,t,e):S.isObject(n)?S.matcher(n):S.property(n)};S.iteratee=function(n,t){return A(n,t,1/0)};var C=function(n,t){return function(e){var r=arguments.length;if(2>r||null==e)return e;for(var o=1;r>o;o++)for(var i=arguments[o],a=n(i),s=a.length,c=0;s>c;c++){var u=a[c];t&&void 0!==e[u]||(e[u]=i[u])}return e}},j=function(n){if(!S.isObject(n))return{};if(w)return w(n);x.prototype=n;var t=new x;return x.prototype=null,t},z=function(n){return function(t){return null==t?void 0:t[n]}},_=Math.pow(2,53)-1,N=z("length"),O=function(n){var t=N(n);return"number"==typeof t&&t>=0&&_>=t};S.each=S.forEach=function(n,t,e){t=k(t,e);var r,o;if(O(n))for(r=0,o=n.length;o>r;r++)t(n[r],r,n);else{var i=S.keys(n);for(r=0,o=i.length;o>r;r++)t(n[i[r]],i[r],n)}return n},S.map=S.collect=function(n,t,e){t=A(t,e);for(var r=!O(n)&&S.keys(n),o=(r||n).length,i=Array(o),a=0;o>a;a++){var s=r?r[a]:a;i[a]=t(n[s],s,n)}return i},S.reduce=S.foldl=S.inject=e(1),S.reduceRight=S.foldr=e(-1),S.find=S.detect=function(n,t,e){var r;return r=O(n)?S.findIndex(n,t,e):S.findKey(n,t,e),void 0!==r&&-1!==r?n[r]:void 0},S.filter=S.select=function(n,t,e){var r=[];return t=A(t,e),S.each(n,function(n,e,o){t(n,e,o)&&r.push(n)}),r},S.reject=function(n,t,e){return S.filter(n,S.negate(A(t)),e)},S.every=S.all=function(n,t,e){t=A(t,e);for(var r=!O(n)&&S.keys(n),o=(r||n).length,i=0;o>i;i++){var a=r?r[i]:i;if(!t(n[a],a,n))return!1}return!0},S.some=S.any=function(n,t,e){t=A(t,e);for(var r=!O(n)&&S.keys(n),o=(r||n).length,i=0;o>i;i++){var a=r?r[i]:i;if(t(n[a],a,n))return!0}return!1},S.contains=S.includes=S.include=function(n,t,e,r){return O(n)||(n=S.values(n)),("number"!=typeof e||r)&&(e=0),S.indexOf(n,t,e)>=0},S.invoke=function(n,t){var e=d.call(arguments,2),r=S.isFunction(t);return S.map(n,function(n){var o=r?t:n[t];return null==o?o:o.apply(n,e)})},S.pluck=function(n,t){return S.map(n,S.property(t))},S.where=function(n,t){return S.filter(n,S.matcher(t))},S.findWhere=function(n,t){return S.find(n,S.matcher(t))},S.max=function(n,t,e){var r,o,i=-(1/0),a=-(1/0);if(null==t&&null!=n){n=O(n)?n:S.values(n);for(var s=0,c=n.length;c>s;s++)r=n[s],r>i&&(i=r)}else t=A(t,e),S.each(n,function(n,e,r){o=t(n,e,r),(o>a||o===-(1/0)&&i===-(1/0))&&(i=n,a=o)});return i},S.min=function(n,t,e){var r,o,i=1/0,a=1/0;if(null==t&&null!=n){n=O(n)?n:S.values(n);for(var s=0,c=n.length;c>s;s++)r=n[s],i>r&&(i=r)}else t=A(t,e),S.each(n,function(n,e,r){o=t(n,e,r),(a>o||o===1/0&&i===1/0)&&(i=n,a=o)});return i},S.shuffle=function(n){for(var t,e=O(n)?n:S.values(n),r=e.length,o=Array(r),i=0;r>i;i++)t=S.random(0,i),t!==i&&(o[i]=o[t]),o[t]=e[i];return o},S.sample=function(n,t,e){return null==t||e?(O(n)||(n=S.values(n)),n[S.random(n.length-1)]):S.shuffle(n).slice(0,Math.max(0,t))},S.sortBy=function(n,t,e){return t=A(t,e),S.pluck(S.map(n,function(n,e,r){return{value:n,index:e,criteria:t(n,e,r)}}).sort(function(n,t){var e=n.criteria,r=t.criteria;if(e!==r){if(e>r||void 0===e)return 1;if(r>e||void 0===r)return-1}return n.index-t.index}),"value")};var E=function(n){return function(t,e,r){var o={};return e=A(e,r),S.each(t,function(r,i){var a=e(r,i,t);n(o,r,a)}),o}};S.groupBy=E(function(n,t,e){S.has(n,e)?n[e].push(t):n[e]=[t]}),S.indexBy=E(function(n,t,e){n[e]=t}),S.countBy=E(function(n,t,e){S.has(n,e)?n[e]++:n[e]=1}),S.toArray=function(n){return n?S.isArray(n)?d.call(n):O(n)?S.map(n,S.identity):S.values(n):[]},S.size=function(n){return null==n?0:O(n)?n.length:S.keys(n).length},S.partition=function(n,t,e){t=A(t,e);var r=[],o=[];return S.each(n,function(n,e,i){(t(n,e,i)?r:o).push(n)}),[r,o]},S.first=S.head=S.take=function(n,t,e){return null!=n?null==t||e?n[0]:S.initial(n,n.length-t):void 0},S.initial=function(n,t,e){return d.call(n,0,Math.max(0,n.length-(null==t||e?1:t)))},S.last=function(n,t,e){return null!=n?null==t||e?n[n.length-1]:S.rest(n,Math.max(0,n.length-t)):void 0},S.rest=S.tail=S.drop=function(n,t,e){return d.call(n,null==t||e?1:t)},S.compact=function(n){return S.filter(n,S.identity)};var F=function(n,t,e,r){for(var o=[],i=0,a=r||0,s=N(n);s>a;a++){var c=n[a];if(O(c)&&(S.isArray(c)||S.isArguments(c))){t||(c=F(c,t,e));var u=0,l=c.length;for(o.length+=l;l>u;)o[i++]=c[u++]}else e||(o[i++]=c)}return o};S.flatten=function(n,t){return F(n,t,!1)},S.without=function(n){return S.difference(n,d.call(arguments,1))},S.uniq=S.unique=function(n,t,e,r){S.isBoolean(t)||(r=e,e=t,t=!1),null!=e&&(e=A(e,r));for(var o=[],i=[],a=0,s=N(n);s>a;a++){var c=n[a],u=e?e(c,a,n):c;t?(a&&i===u||o.push(c),i=u):e?S.contains(i,u)||(i.push(u),o.push(c)):S.contains(o,c)||o.push(c)}return o},S.union=function(){return S.uniq(F(arguments,!0,!0))},S.intersection=function(n){for(var t=[],e=arguments.length,r=0,o=N(n);o>r;r++){var i=n[r];if(!S.contains(t,i)){for(var a=1;e>a&&S.contains(arguments[a],i);a++);a===e&&t.push(i)}}return t},S.difference=function(n){var t=F(arguments,!0,!0,1);return S.filter(n,function(n){return!S.contains(t,n)})},S.zip=function(){return S.unzip(arguments)},S.unzip=function(n){for(var t=n&&S.max(n,N).length||0,e=Array(t),r=0;t>r;r++)e[r]=S.pluck(n,r);return e},S.object=function(n,t){for(var e={},r=0,o=N(n);o>r;r++)t?e[n[r]]=t[r]:e[n[r][0]]=n[r][1];return e},S.findIndex=i(1),S.findLastIndex=i(-1),S.sortedIndex=function(n,t,e,r){e=A(e,r,1);for(var o=e(t),i=0,a=N(n);a>i;){var s=Math.floor((i+a)/2);e(n[s])<o?i=s+1:a=s}return i},S.indexOf=a(1,S.findIndex,S.sortedIndex),S.lastIndexOf=a(-1,S.findLastIndex),S.range=function(n,t,e){null==t&&(t=n||0,n=0),e=e||1;for(var r=Math.max(Math.ceil((t-n)/e),0),o=Array(r),i=0;r>i;i++,n+=e)o[i]=n;return o};var M=function(n,t,e,r,o){if(!(r instanceof t))return n.apply(e,o);var i=j(n.prototype),a=n.apply(i,o);return S.isObject(a)?a:i};S.bind=function(n,t){if(b&&n.bind===b)return b.apply(n,d.call(arguments,1));if(!S.isFunction(n))throw new TypeError("Bind must be called on a function");var e=d.call(arguments,2),r=function(){return M(n,r,t,this,e.concat(d.call(arguments)))};return r},S.partial=function(n){var t=d.call(arguments,1),e=function(){for(var r=0,o=t.length,i=Array(o),a=0;o>a;a++)i[a]=t[a]===S?arguments[r++]:t[a];for(;r<arguments.length;)i.push(arguments[r++]);return M(n,e,this,this,i)};return e},S.bindAll=function(n){var t,e,r=arguments.length;if(1>=r)throw new Error("bindAll must be passed function names");for(t=1;r>t;t++)e=arguments[t],n[e]=S.bind(n[e],n);return n},S.memoize=function(n,t){var e=function(r){var o=e.cache,i=""+(t?t.apply(this,arguments):r);return S.has(o,i)||(o[i]=n.apply(this,arguments)),o[i]};return e.cache={},e},S.delay=function(n,t){var e=d.call(arguments,2);return setTimeout(function(){return n.apply(null,e)},t)},S.defer=S.partial(S.delay,S,1),S.throttle=function(n,t,e){var r,o,i,a=null,s=0;e||(e={});var c=function(){s=e.leading===!1?0:S.now(),a=null,i=n.apply(r,o),a||(r=o=null)};return function(){var u=S.now();s||e.leading!==!1||(s=u);var l=t-(u-s);return r=this,o=arguments,0>=l||l>t?(a&&(clearTimeout(a),a=null),s=u,i=n.apply(r,o),a||(r=o=null)):a||e.trailing===!1||(a=setTimeout(c,l)),i}},S.debounce=function(n,t,e){var r,o,i,a,s,c=function(){var u=S.now()-a;t>u&&u>=0?r=setTimeout(c,t-u):(r=null,e||(s=n.apply(i,o),r||(i=o=null)))};return function(){i=this,o=arguments,a=S.now();var u=e&&!r;return r||(r=setTimeout(c,t)),u&&(s=n.apply(i,o),i=o=null),s}},S.wrap=function(n,t){return S.partial(t,n)},S.negate=function(n){return function(){return!n.apply(this,arguments)}},S.compose=function(){var n=arguments,t=n.length-1;return function(){for(var e=t,r=n[t].apply(this,arguments);e--;)r=n[e].call(this,r);return r}},S.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},S.before=function(n,t){var e;return function(){return--n>0&&(e=t.apply(this,arguments)),1>=n&&(t=null),e}},S.once=S.partial(S.before,2);var q=!{toString:null}.propertyIsEnumerable("toString"),P=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];S.keys=function(n){if(!S.isObject(n))return[];if(y)return y(n);var t=[];for(var e in n)S.has(n,e)&&t.push(e);return q&&s(n,t),t},S.allKeys=function(n){if(!S.isObject(n))return[];var t=[];for(var e in n)t.push(e);return q&&s(n,t),t},S.values=function(n){for(var t=S.keys(n),e=t.length,r=Array(e),o=0;e>o;o++)r[o]=n[t[o]];return r},S.mapObject=function(n,t,e){t=A(t,e);for(var r,o=S.keys(n),i=o.length,a={},s=0;i>s;s++)r=o[s],a[r]=t(n[r],r,n);return a},S.pairs=function(n){for(var t=S.keys(n),e=t.length,r=Array(e),o=0;e>o;o++)r[o]=[t[o],n[t[o]]];return r},S.invert=function(n){for(var t={},e=S.keys(n),r=0,o=e.length;o>r;r++)t[n[e[r]]]=e[r];return t},S.functions=S.methods=function(n){var t=[];for(var e in n)S.isFunction(n[e])&&t.push(e);return t.sort()},S.extend=C(S.allKeys),S.extendOwn=S.assign=C(S.keys),S.findKey=function(n,t,e){t=A(t,e);for(var r,o=S.keys(n),i=0,a=o.length;a>i;i++)if(r=o[i],t(n[r],r,n))return r},S.pick=function(n,t,e){var r,o,i={},a=n;if(null==a)return i;S.isFunction(t)?(o=S.allKeys(a),r=k(t,e)):(o=F(arguments,!1,!1,1),r=function(n,t,e){return t in e},a=Object(a));for(var s=0,c=o.length;c>s;s++){var u=o[s],l=a[u];r(l,u,a)&&(i[u]=l)}return i},S.omit=function(n,t,e){if(S.isFunction(t))t=S.negate(t);else{var r=S.map(F(arguments,!1,!1,1),String);t=function(n,t){return!S.contains(r,t)}}return S.pick(n,t,e)},S.defaults=C(S.allKeys,!0),S.create=function(n,t){var e=j(n);return t&&S.extendOwn(e,t),e},S.clone=function(n){return S.isObject(n)?S.isArray(n)?n.slice():S.extend({},n):n},S.tap=function(n,t){return t(n),n},S.isMatch=function(n,t){var e=S.keys(t),r=e.length;if(null==n)return!r;for(var o=Object(n),i=0;r>i;i++){var a=e[i];if(t[a]!==o[a]||!(a in o))return!1}return!0};var T=function(n,t,e,r){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof S&&(n=n._wrapped),t instanceof S&&(t=t._wrapped);var o=h.call(n);if(o!==h.call(t))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===o;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var a=n.constructor,s=t.constructor;if(a!==s&&!(S.isFunction(a)&&a instanceof a&&S.isFunction(s)&&s instanceof s)&&"constructor"in n&&"constructor"in t)return!1}e=e||[],r=r||[];for(var c=e.length;c--;)if(e[c]===n)return r[c]===t;if(e.push(n),r.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!T(n[c],t[c],e,r))return!1}else{var u,l=S.keys(n);if(c=l.length,S.keys(t).length!==c)return!1;for(;c--;)if(u=l[c],!S.has(t,u)||!T(n[u],t[u],e,r))return!1}return e.pop(),r.pop(),!0};S.isEqual=function(n,t){return T(n,t)},S.isEmpty=function(n){return null==n?!0:O(n)&&(S.isArray(n)||S.isString(n)||S.isArguments(n))?0===n.length:0===S.keys(n).length},S.isElement=function(n){return!(!n||1!==n.nodeType)},S.isArray=v||function(n){return"[object Array]"===h.call(n)},S.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},S.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){S["is"+n]=function(t){return h.call(t)==="[object "+n+"]"}}),S.isArguments(arguments)||(S.isArguments=function(n){return S.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(S.isFunction=function(n){return"function"==typeof n||!1}),S.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},S.isNaN=function(n){return S.isNumber(n)&&n!==+n},S.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===h.call(n)},S.isNull=function(n){return null===n},S.isUndefined=function(n){return void 0===n},S.has=function(n,t){return null!=n&&m.call(n,t)},S.noConflict=function(){return c._=u,this},S.identity=function(n){return n},S.constant=function(n){return function(){return n}},S.noop=function(){},S.property=z,S.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},S.matcher=S.matches=function(n){return n=S.extendOwn({},n),function(t){return S.isMatch(t,n)}},S.times=function(n,t,e){var r=Array(Math.max(0,n));t=k(t,e,1);for(var o=0;n>o;o++)r[o]=t(o);return r},S.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},S.now=Date.now||function(){return(new Date).getTime()};var G={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},B=S.invert(G),I=function(n){var t=function(t){return n[t]},e="(?:"+S.keys(n).join("|")+")",r=RegExp(e),o=RegExp(e,"g");return function(n){return n=null==n?"":""+n,r.test(n)?n.replace(o,t):n}};S.escape=I(G),S.unescape=I(B),S.result=function(n,t,e){var r=null==n?void 0:n[t];return void 0===r&&(r=e),S.isFunction(r)?r.call(n):r};var L=0;S.uniqueId=function(n){var t=++L+"";return n?n+t:t},S.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var R=/(.)^/,H={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,K=function(n){return"\\"+H[n]};S.template=function(n,t,e){!t&&e&&(t=e),t=S.defaults({},t,S.templateSettings);var r=RegExp([(t.escape||R).source,(t.interpolate||R).source,(t.evaluate||R).source].join("|")+"|$","g"),o=0,i="__p+='";n.replace(r,function(t,e,r,a,s){return i+=n.slice(o,s).replace(D,K),o=s+t.length,e?i+="'+\n((__t=("+e+"))==null?'':_.escape(__t))+\n'":r?i+="'+\n((__t=("+r+"))==null?'':__t)+\n'":a&&(i+="';\n"+a+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var a=new Function(t.variable||"obj","_",i)}catch(s){throw s.source=i,s}var c=function(n){return a.call(this,n,S)},u=t.variable||"obj";return c.source="function("+u+"){\n"+i+"}",c},S.chain=function(n){var t=S(n);return t._chain=!0,t};var J=function(n,t){return n._chain?S(t).chain():t};S.mixin=function(n){S.each(S.functions(n),function(t){var e=S[t]=n[t];S.prototype[t]=function(){var n=[this._wrapped];return g.apply(n,arguments),J(this,e.apply(S,n))}})},S.mixin(S),S.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=l[n];S.prototype[n]=function(){var e=this._wrapped;return t.apply(e,arguments),"shift"!==n&&"splice"!==n||0!==e.length||delete e[0],J(this,e)}}),S.each(["concat","join","slice"],function(n){var t=l[n];S.prototype[n]=function(){return J(this,t.apply(this._wrapped,arguments))}}),S.prototype.value=function(){return this._wrapped},S.prototype.valueOf=S.prototype.toJSON=S.prototype.value,S.prototype.toString=function(){return""+this._wrapped},r=[],o=function(){return S}.apply(t,r),!(void 0!==o&&(n.exports=o))}).call(this)},function(n,t){"use strict";var e=function(){function n(n){this.introStep=n,this.era="ancient",this.year=0,this.time=0}return n}();n.exports=e},function(n,t){"use strict";var e=function(){function n(n,t,e){this.civName=n,this.leaderName=t,this.location=e,this.leaderTraits=[],this.leaderTraitsMax=3,this.happiness=15,this.anger=1,this.health=25,this.pollution=1,this.influence=0,this.legacy=0,this.achievements=0,this.goldenAgeProgress=0,this.goldenAgeGoal=1e5,this.population=1,this.populationGrowthCost=10,this.populationReal=1e3,this.cash=0}return n}();n.exports=e},function(n,t){"use strict";var e=function(){function n(n,t,e,r,o,i,a){this.name=n,this.perClick=t,this.perSecond=e,this.max=r,this.total=o,this.image=i,this.description=a}return n}();n.exports=e},function(n,t){"use strict";var e=function(){function n(n){this.items=n}return n.prototype.push=function(n){this.items.push(n)},n.prototype.get=function(n){var t=this.items;switch(n){case"food":return t[0];case"prod":return t[1];default:return t[2]}},n}();n.exports=e},function(n,t,e){"use strict";var r=e(7),o=new r,i=function(){function n(){this.settingsScreen='\n    <section class=\'clickopolis-intro\'>\n      <img class=\'clickopolis-logo custom-size-img\' src=\'img/clickopolis-logo.png\'>\n      <p>Starting from the flames of the ancient world, you will progress steadily towards modernity&hellip;and beyond. You, the leader of a small faction of hunter-gatherers, have decided to settle\n        <select id="location">\n          <option value="none">select an option!</option>\n          <option value="coast">by the Coast</option>\n          <option value="oasis">in an Oasis</option>\n          <option value="forest">in a Forest</option>\n          <option value="tundra">in a Tundra</option>\n          <option value="iceberg">on an Iceberg</option>\n        </select>\n      </p>\n      <p>Your name is <input type="text" id="leaderName" maxlength="10" size="10" placeholder="Jake"> of <input type="text" id="civName" placeholder="Jaketopia" maxlength="20"></p>\n      <p>You are a(n)\n        <select id="trait">\n          <option value="aggressive">aggressive</option>\n          <option value="cosmpolitan">cosmpolitan</option>\n          <option value="daring">daring</option>\n          <option value="expansionist">expansionist</option>\n          <option value="industrious">industrious</option>\n          <option value="isolationist">isolationist</option>\n          <option value="pacifistic">pacifistic</option>\n          <option value="persuasive">persuasive</option>\n        </select>\n       leader.</p>\n\n       <button class=\'begin-btn\'>Begin Game!</button>\n\n    </section>\n  '}return n.prototype.createStartScreen=function(n,t){var e='\n      <section class=\'clickopolis-intro\'>\n        <h1><img class=\'clickopolis-logo custom-size-img\' alt=\'Clickopolis\' src=\'img/clickopolis-logo.png\'></h1>\n        <div class="start-options">\n          <button class="large-btn start-btn load-btn">Load Game...</button>\n          <button class="large-btn start-btn new-btn">New Game</button>\n          <button class="large-btn start-btn current-btn">\n            <p class="current-game-heading">Current Game: '+n.leaderName+" of "+n.civName+"</p>\n            <p class='center-text'>"+t.era+' era</p>\n            <p>\n              <span>\n                <img src="img/achievements.png"> 5\n              </span>\n              <span>\n                <img src="img/strength.png"> 33\n              </span>\n              <span>\n                <img src="img/defense.png"> 44\n              </span>\n              <span>\n                <img src="img/legacy.png"> 2\n              </span>\n              <span>\n                <img src="img/coin.png"> 1K\n              </span>\n              <span>\n                <img src="img/wonder.png"> 1\n              </span>\n            </p>\n          </button>\n        </div>\n        <!-- <button class=\'next-btn\'>Next &rarr;</button> -->\n      </section>\n    ';return e},n.prototype.createResourcesScreen=function(n,t){var e="\n      <section class='screen resources-screen' id='resources'>\n        <h2><img src='img/resources.png'> Resources</h2>\n        <section class='resources-screen-inner'>\n          <div class='panel food-panel'>\n            <button class='food-btn'><img src='img/food-alt.png'> Grow Food</button>\n\n            <span class='resource-info r-food-pc'>"+t.get("food").perClick+" PC</span>\n            <span class='resource-info r-food-ps'>"+t.get("food").perSecond+" PS</span>\n            <span class='resource-info r-food-max'>"+t.get("food").max+" max</span>\n            <span class='resource-info r-food-total'>"+t.get("food").total+" total</span>\n\n          </div>\n          <div class='panel prod-panel'>\n            <button class='prod-btn'><img src='img/prod.png'> Create Production</button>\n\n            <span class='resource-info'>"+t.get("prod").perClick+" PC</span>\n            <span class='resource-info'>"+t.get("prod").perSecond+" PS</span>\n            <span class='resource-info'>"+t.get("prod").max+" max</span>\n            <span class='resource-info r-prod-total'>"+t.get("prod").total+" total</span>\n\n          </div>\n\n          <div class='panel location-panel'>\n            <p>Biome ("+n.location+") Bonus: +10% <img src='img/food.png'> PC</p>\n          </div>\n\n\n          <div class='panel resources-panel'>\n            <span class='resource'>\n              <img src='img/health.png'> Health\n            </span>\n\n            <span class='resource active' data-resource='fish'>\n              <img src='img/fish.png'> <span>"+t.get("fish").total+"</span>\n            </span>\n\n            <span class='resource' data-resource='banana'>\n              <img src='img/banana.png'> <span>22</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/buildings.png'> Building\n            </span>\n\n            <span class='resource' data-resource='stone'>\n              <img src='img/stone.png'> <span>25</span>\n            </span>\n\n            <span class='resource' data-resource='iron'>\n              <img src='img/iron.png'> <span>22</span>\n            </span>\n\n\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/cavalry.png'> Strategic\n            </span>\n\n            <span class='resource' data-resource='horse'>\n              <img src='img/horse.png'> <span>35</span>\n            </span>\n\n            <span class='resource' data-unlocked='false' data-resource='oil'>\n              <img src='img/oil.png'> <span>22</span>\n            </span>\n\n            <span class='resource' data-resource='uranium'>\n              <img src='img/uranium.png'> <span>22</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/crown.png'> Luxury\n            </span>\n\n            <span class='resource' data-resource='gold'>\n              <img src='img/gold.png'> <span>0</span>\n            </span>\n\n            <span class='resource' data-resource='gems'>\n              <img src='img/gems.png'> <span>34</span>\n            </span>\n\n            <br>\n\n            <span class='resource'>\n              <img src='img/illuminati.png'> Power\n            </span>\n\n            <span class='resource' data-resource='spaghetti'>\n              <img src='img/spaghetti.png'> 22\n            </span>\n\n            <span class='resource' data-resource='chihuahua'>\n              <img src='img/chihuahua.png'> 2\n            </span>\n\n          </div>\n\n\n\n        </section>\n        <br>\n        <section class='resource-screen-inner resource-info-screen'>\n          <h3><img src='img/fish.png'> Fish<br></h3>\n          <p>Fish are caught in nets by citizens every now and then. Each fish provides +.5 <img src='img/health.png'> Fish are a popular trade item with Desert nations.</p>\n\n        </section>\n      </section>\n    ";return e},n.prototype.createScreenHeader=function(n,t){var e="\n      <header class='screen-header'>\n        <h1>Clickopolis</h1>\n        <h2>"+n.leaderName+" of "+n.civName+" &mdash; "+t.era+" era &mdash; "+t.year+" AC</h2>\n      </header>\n    ";return e},n.prototype.createCitizenScreen=function(n){var t="\n      <section class='screen citizens-screen' id='citizens'>\n        <h2><img src='img/citizens.png'> Citizens</h2>\n        <section class='citizens-screen-inner'>\n          <p class='center-text'>Each citizen provides 1 <img src='img/research.png'>, 1 <img src='img/angry.png'>, and 1 <img src='img/pollution.png'></p>\n          <div class='row citizen-farmer'>\n            <button data-citizien-amount='-1'>-1</button>\n            <span class='citizen-icon'><img src='img/farmer.png'></span>\n            <button data-citizen-amount='1'>+1</button>\n            <span class='citizen-info'>\n              Farmers: <strong>12</strong> | Farmers provide +1 <img src='img/food.png'> PC and +.2 PC.\n            </span>\n          </div>\n          <div class='row citizen-miner'>\n            <button data-citizien-amount='-1'>-1</button>\n            <span class='citizen-icon'><img src='img/miner.png'></span>\n            <button data-citizen-amount='1'>+1</button>\n            <span class='citizen-info'>\n              Miners: <strong>14</strong> | Miners provide +1 <img src='img/prod.png'> PC and +.2 PC.\n            </span>\n          </div>\n          <div class='row citizen-soldier'>\n            <button data-citizien-amount='-1'>-1</button>\n            <span class='citizen-icon'><img src='img/soldier-alt.png'></span>\n            <button data-citizen-amount='1'>+1</button>\n            <span class='citizen-info'>\n              Soldiers: <strong>3</strong> | Soldiers defend and fight for your empire. -3 <img src='img/coin.png'>\n            </span>\n          </div>\n        </section>\n      </section>\n    ";return t},n.prototype.createCivilizationScreen=function(n){var t="\n      <section class='screen civilization-screen' id='civilization'>\n        <h2><img src='img/empire.png'> Civilization</h2>\n        <section class='civilization-screen-inner'>\n          <div class='panel population-panel'>\n            <button class='pop-btn'>+1 Population (<img src='img/food.png'> <span class='pop-growth-cost'>"+n.populationGrowthCost+"</span>)</button>\n            <span class='civ-metric metric-population' title='"+(n.populationReal+" people")+"'>Population: <img src='img/citizen.png'> <span class='population-text'>"+n.population+"</span></span>\n          </div>\n          <div class='panel civ-metric-panel'>\n            <span class='civ-metric metric-happiness'>\n              <img src='img/happy.png'> "+n.happiness+"\n            </span>\n            <span class='civ-metric metric-anger'>\n              <img src='img/angry.png'> "+n.anger+"\n            </span>\n            <span class='civ-metric metric-health'>\n              <img src='img/health.png'> "+n.health+"\n            </span>\n            <span class='civ-metric metric-pollution'>\n              <img src='img/pollution.png'> "+n.pollution+"\n            </span>\n            <span class='civ-metric metric-influence'>\n              <img src='img/influence.png'> "+n.influence+"\n            </span>\n            <span class='civ-metric metric-golden-age'>\n              <img src='img/golden-age.png'> Golden Age Points "+n.goldenAgeProgress+" / "+o.abbrNum(n.goldenAgeGoal,2)+"\n            </span>\n          </div>\n        </section>\n      </section>\n    ";
return t},n.prototype.createEconomyScreen=function(n){var t="\n      <section class='screen economy-screen' id='economy'>\n        <h2><img src='img/money.png'> Economy</h2>\n        <section class='economy-screen-inner'>\n          <div class='total-cash'>\n            <img src='img/coin.png'> "+n.cash+"\n          </div>\n        </section>\n      </section>\n    ";return t},n.prototype.createBuildingsScreen=function(){var n="\n      <section class='screen buildings-screen' id='buildings'>\n        <h2><img src='img/buildings.png'> Buildings</h2>\n        <section class='buildings-screen-inner'>\n\n        </section>\n      </section>\n    ";return n},n.prototype.createTechnologyScreen=function(){var n="\n      <section class='screen technology-screen' id='technology'>\n        <h2><img src='img/research.png'> Technology</h2>\n        <section class='technology-screen-inner'>\n\n        </section>\n      </section>\n    ";return n},n}();n.exports=i},function(n,t){"use strict";var e=function(){function n(){}return n.prototype.abbrNum=function(n,t){void 0===t&&(t=2),t=Math.pow(10,t);for(var e=["k","m","b","t"],r=e.length-1;r>=0;r--){var o=Math.pow(10,3*(r+1));if(n>=o){n=Math.round(n*t/o)/t,1e3==n&&r<e.length-1&&(n=1,r++),n+=e[r];break}}return n},n}();n.exports=e}]);
//# sourceMappingURL=bundle.js.map