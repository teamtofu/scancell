!function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/",r(r.s=0)}([function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var a,o,i,s,c;r.r(e);var u={wall:.06,res:10,thresh:.5,mDist:3,mCont:3},f=function(t,e){postMessage({action:"status",pass:{error:!!e,percent:t}})},l=function(t,e){for(var r=t[0],n=t[1],a=!1,o=0,i=e.length-1;o<e.length;i=o++)e[o][1]>n!==e[i][1]>n&&r<(e[i][0]-e[o][0])*(n-e[o][1])/(e[i][1]-e[o][1])+e[o][0]&&(a=!a);return a},h=function(t,e,r,n){for(var i=Math.abs(r-t)+1,s=t>r?r:t,c=Math.abs(n-e)+1,u=e>n?n:e,f=new Uint8ClampedArray(i*c),l=0;l<c;l++)for(var h=0;h<i;h++)f[l*i+h]=a[(u+l)*o*4+4*(s+h)];return f},p=function(t){return a[t]-function(t){var e=Math.ceil(o/u.res),r=Math.floor((t-t%o)/o/u.res)*e+Math.floor(t%o/u.res);return s[r]}(t/4)},d=function t(e){1===c[e]&&(c[e]=0,1===c[e-1]&&t(e-1),1===c[e+1]&&t(e+1),1===c[e-o]&&t(e-o),1===c[e+o]&&t(e+o))},g=function(t){!function(){var t,e,r,n=Math.ceil(i/u.res),a=Math.ceil(o/u.res);s=new Uint8ClampedArray(n*a);for(var c=0;c<s.length;c++){var f=c%a*u.res,l=(c-c%a)/a*u.res;for(var p in e=0,r=0,t=h(f,l,f+u.res-1,l+u.res-1))"undefined"!==typeof t[p]&&(e+=t[p],r++);s[c]=Math.round(e/r)}}(),f(.1),c=new Uint8Array(a.length/4);var e=new Uint8ClampedArray(a.length);e.set(a);for(var r=0;r<a.length;r+=4){var n=r%(4*o)/4,g=(r-4*n)/o/4;r%8e4===0&&f(.4*r/a.length+.1),l([n,g],t)&&p(r)<=-1*u.mCont?c[r/4]=1:c[r/4]=0}var v=t.map(function(e,r){var n=3===r?t[0]:t[r+1];return Math.pow(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2),.5)}),b=Math.round(v.reduce(function(t,e){return e<t&&(t=e),t},v[0])*u.wall);for(var y in c){var M=y%o,m=(y-M)/o;y%2e4===0&&f(.375*y/c.length+.5),!l([M,m],t)||l([M,m+b],t)&&l([M,m-b],t)&&l([M-b,m],t)&&l([M+b,m],t)||d(y)}for(var w in c)w%1e5===0&&f(.125*w/c.length+.875),1===c[w]&&(a[4*w]=242,a[4*w+1]=46,a[4*w+2]=36);postMessage({action:"detected",pass:{data:a,height:i,width:o}}),a.set(e)},v=function(t,e){var r=[];t=Number(t);for(var n=-e;n<=e;n++)for(var a=-e;a<=e;a++)Math.abs(n)+Math.abs(a)<=e&&r.push(t+n*o+a);return r},b=function t(e,r){r||(r=1),e=Number(e);var n=v(e,r),a=2*Math.pow(r,2)-2*r+1,o=4*r,i=0;for(var s in n)"number"===typeof c[n[s]]&&1===c[n[s]]&&i++;return(i-a)/o>=u.thresh?t(e,r+1):r};onmessage=function(t){var e=t.data;console.log("Running action:",e.action);try{"serialize"===e.action?function(t){var e=t.data,r=t.height,n=t.width;a=new Uint8ClampedArray(e.length),o=n,i=r;for(var s=0;s<e.length;s+=4){var c=Math.round((e[s]+e[s+1]+e[s+2])/3);a[s]=c,a[s+1]=c,a[s+2]=c,a[s+3]=255}postMessage({action:"serialized",pass:{data:a,height:r,width:n}})}(e.pass):"rectangulate"===e.action?function(t){var e=new Uint8ClampedArray(a.length);e.set(a);for(var r=0;r<e.length;r+=4){var n=r%(4*o)/4;l([n,(r-4*n)/o/4],t)||(e[r]=0,e[r+1]=0,e[r+2]=0)}postMessage({action:"rectangulated",pass:{data:e,height:i,width:o}})}(e.pass):"detect"===e.action?g(e.pass):"count"===e.action?function(t){var e=0,r=new Uint8Array(c.length);r.set(c);var n=new Uint8Array(a.length);for(var s in n.set(a),c)if(s=Number(s),1===c[s]){var f=b(s,1);if(f>=u.mDist){e++;var l=v(s,f);for(var h in l)c[l[h]]=0;a[4*s]=0,a[4*s+1]=0,a[4*s+2]=0,a[4*s+4]=255,a[4*s+5]=255,a[4*s+6]=0}}c.set(r),postMessage({action:"counted",pass:{data:a,height:i,width:o,count:e}}),a.set(n)}(e.pass):"config"===e.action?(u=function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(e){n(t,e,r[e])})}return t}({},u,e.pass),console.log("Config:",u)):"copy"===e.action&&postMessage({action:"serialized",pass:{data:a,height:i,width:o}})}catch(r){console.error(r),f(0,!0)}console.log("Finished action:",e.action)}}]);
//# sourceMappingURL=69f6d2911453a31a2d2c.worker.js.map