!function(r){var e={};function t(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return r[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=r,t.c=e,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{enumerable:!0,get:n})},t.r=function(r){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})},t.t=function(r,e){if(1&e&&(r=t(r)),8&e)return r;if(4&e&&"object"===typeof r&&r&&r.__esModule)return r;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:r}),2&e&&"string"!=typeof r)for(var a in r)t.d(n,a,function(e){return r[e]}.bind(null,a));return n},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t(t.s=0)}([function(r,e,t){"use strict";function n(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var a,o,i,u,s,c,f,l;t.r(e);var h={wall:.06,res:10,thresh:.5,mDist:3,mCont:3,orbThresh:.7,enableDiamond:!0,enableOrb:!1},d=function(r,e){postMessage({action:"status",pass:{error:!!e,percent:r}})},p=function(r,e,t){for(var n=!1,a=0,o=t.length-1;a<t.length;o=a++)t[a][1]>e!==t[o][1]>e&&r<(t[o][0]-t[a][0])*(e-t[a][1])/(t[o][1]-t[a][1])+t[a][0]&&(n=!n);return n},v=function(r,e,t,n){for(var i=Math.abs(t-r)+1,u=r>t?t:r,s=Math.abs(n-e)+1,c=e>n?n:e,f=new Uint8ClampedArray(i*s),l=0;l<s;l++)for(var h=0;h<i;h++)f[l*i+h]=a[(c+l)*o*4+4*(u+h)];return f},g=function(r){return a[r]-function(r){var e=Math.ceil(o/h.res),t=Math.floor((r-r%o)/o/h.res)*e+Math.floor(r%o/h.res);return u[t]}(r/4)},b=function(r){!function(){var r,e,t,n=Math.ceil(i/h.res),a=Math.ceil(o/h.res);u=new Uint8ClampedArray(n*a);for(var s=0;s<u.length;s++){var c=s%a*h.res,f=(s-s%a)/a*h.res;for(var l in e=0,t=0,r=v(c,f,c+h.res-1,f+h.res-1))"undefined"!==typeof r[l]&&(e+=r[l],t++);u[s]=Math.round(e/t)}}(),d(.1),s=new Uint8Array(a.length/4);var e=new Uint8ClampedArray(a.length);e.set(a);for(var t=0;t<a.length;t+=4)t%8e4===0&&d(.4*t/a.length+.1),1===c[t/4]&&g(t)<=-1*h.mCont?s[t/4]=1:s[t/4]=0;d(.5);var n=r.map(function(e,t){var n=3===t?r[0]:r[t+1];return Math.pow(Math.pow(e[0]-n[0],2)+Math.pow(e[1]-n[1],2),.5)}),f=Math.round(n.reduce(function(r,e){return e<r&&(r=e),r},n[0])*h.wall);for(var l in s)(l=Number(l))%2e4===0&&d(.375*l/s.length+.5),!c[l]||c[l+f]&&c[l-f]&&c[l+f*o]&&c[l-f*o]||(s[l]=0);for(var p in d(.875),s)p%1e5===0&&d(.125*p/s.length+.875),1===s[p]&&(a[4*p]=242,a[4*p+1]=46,a[4*p+2]=36);postMessage({action:"detected",pass:{data:a,height:i,width:o}}),a.set(e)},m=function(r,e){var t=[];r=Number(r);for(var n=-e;n<=e;n++)for(var a=-e;a<=e;a++)Math.abs(n)+Math.abs(a)<=e&&t.push(r+n*o+a);return t},y=function r(e,t){t||(t=1),e=Number(e);var n=m(e,t),a=2*Math.pow(t,2)-2*t+1,o=4*t,i=0;for(var u in n)"number"===typeof f[n[u]]&&1===f[n[u]]&&i++;return(i-a)/o>=h.thresh?r(e,t+1):t},M=function(r,e){var t=[];r=Number(r);for(var n=-e;n<=e;n++)for(var a=-e;a<=e;a++)n*n+a*a<=e*e&&t.push(r+n*o+a);return t},w=function(r,e){var t=Math.round(.707*e),n=Math.round(.5*e),a=Math.round(.866*e),i=[r+e,r-e,r+e*o,r-e*o,r-t*o-t,r-t*o+t,r+t*o-t,r+t*o+t,r-n*o+a,r-n*o-a,r+n*o+a,r+n*o-a,r-a*o+n,r-a*o-n,r+a*o+n,r+a*o-n],u=0;for(var s in i)1===f[i[s]]&&(u+=1);var c=u/i.length>=h.orbThresh;if(c)for(var d in i)l[4*i[d]]=0,l[4*i[d]+1]=255,l[4*i[d]+2]=255,l[4*i[d]+4]=0,l[4*i[d]+5]=0,l[4*i[d]+6]=0;return c},O=function(r){var e=0;d(0),(f=new Uint8Array(s.length)).set(s),(l=new Uint8Array(a.length)).set(a),d(.05),h.enableOrb&&(e+=function(r){for(var e=0,t=h.mDist-2>=3?h.mDist-2:3,n=2;n>=0;n--){for(var a in f)if(c[a]&&(a=Number(a),w(a,t+n))){e++;var o=M(a,t+n);for(var i in o)f[o[i]]=0;l[4*a]=0,l[4*a+1]=0,l[4*a+2]=0,l[4*a+4]=255,l[4*a+5]=255,l[4*a+6]=0}d(.33*(3-n)*(h.enableDiamond?.8:1))}return e}()),!h.enableDiamond&&h.enableOrb||(e+=function(r){var e=0;for(var t in f)if(t=Number(t),1===f[t]){var n=y(t,1);if(n>=h.mDist){e++;var a=m(t,n);for(var o in a)f[a[o]]=0;l[4*t]=0,l[4*t+1]=0,l[4*t+2]=0,l[4*t+4]=255,l[4*t+5]=255,l[4*t+6]=0}}return e}()),postMessage({action:"counted",pass:{data:l,height:i,width:o,count:e}})};onmessage=function(r){var e=r.data;console.log("Running action:",e.action);try{"serialize"===e.action?function(r){var e=r.data,t=r.height,n=r.width;a=new Uint8ClampedArray(e.length),o=n,i=t;for(var u=0;u<e.length;u+=4){var s=Math.round((e[u]+e[u+1]+e[u+2])/3);a[u]=s,a[u+1]=s,a[u+2]=s,a[u+3]=255}postMessage({action:"serialized",pass:{data:a,height:t,width:n}})}(e.pass):"rectangulate"===e.action?function(r){var e=new Uint8ClampedArray(a.length);c=new Uint8ClampedArray(a.length/4),e.set(a);for(var t=0;t<e.length;t+=4){var n=t%(4*o)/4;p(n,(t-4*n)/o/4,r)?c[t/4]=1:(e[t]=0,e[t+1]=0,e[t+2]=0,c[t/4]=0)}postMessage({action:"rectangulated",pass:{data:e,height:i,width:o}})}(e.pass):"detect"===e.action?b(e.pass):"count"===e.action?O(e.pass):"config"===e.action?(h=function(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),a.forEach(function(e){n(r,e,t[e])})}return r}({},h,e.pass),console.log("Config:",h)):"copy"===e.action&&postMessage({action:"serialized",pass:{data:a,height:i,width:o}})}catch(t){console.error(t),d(0,!0)}console.log("Finished action:",e.action)}}]);