(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{15:function(e){e.exports=["Kombucha, a fermented tea drink, is made from a symbiotic culture of bacteria and yeast. Yeast produces ethyl alcohol (drinking alcohol), and bacteria converts it to acetic acid (vinegar) and other byproducts.",'The binomial name of baking yeast is Saccharomyces cerevisiae, which literally translates to "sugar-fungus of beer".',"Yeast-leavened bread does not contain alcohol because the baking process causes the volatile alcohol molecules to evaporate."]},50:function(e,t,a){e.exports=a.p+"static/media/yeast.0f9c774a.jpg"},51:function(e,t,a){e.exports=function(){return new Worker(a.p+"195ff23df7940fa4801a.worker.js")}},52:function(e,t,a){e.exports={h1:"_79fd",h3:"_18ab",h4:"_6eb6",h5:"d7aa",small:"c50e",container:"aacf","form-control":"_3596",btn:"_8013","btn-light":"_70f0",disabled:"c893","btn-dark":"_1899","btn-lg":"_5ac1","btn-block":"e112","btn-group":"f339","dropdown-toggle":"_6c0d",alert:"_1785","alert-info":"d371",progress:"_7f13","progress-bar":"_8bba","bg-royal":"_3dc8","d-flex":"_2459","justify-content-center":"ecde","align-items-center":"_3bcb","sr-only":"_33b3","w-100":"_9b8e","mb-1":"_0535","my-2":"_0cc2","mt-3":"_14df","my-3":"_4c4d","pb-0":"dfa9","pt-2":"f3a4","py-2":"_2cf5","py-3":"ef3d","pb-3":"_3391","text-center":"f932",ycanvas:"faa2",hide:"a376","svg-icon":"_46a3",micro:"d19b",dragdrop:"e119",or:"_52cc",text:"_73bf",muted:"a55d","progress-bar-stripes":"_0272","spinner-border":"_516a","spinner-grow":"_36d8"}},55:function(e,t,a){e.exports=a(95)},95:function(e,t,a){"use strict";a.r(t);a(56);var n=a(0),r=a.n(n),l=a(45),s=a.n(l),c=a(46),o=a(2),i=a.n(o),u=a(8),m=a(47),h=a(48),d=a(53),p=a(49),f=a(54),b=a(50),g=a.n(b),v=function(){var e=Object(u.a)(i.a.mark(function e(t){var a,n,r,l,s;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.createElement("canvas"),n=document.createElement("img"),r=a.getContext("2d"),n.setAttribute("src",t),e.next=6,new Promise(function(e,t){n.addEventListener("load",function(){return e()}),n.addEventListener("error",function(){return t()})});case 6:return l=n.height,s=n.width,a.width=s,a.height=l,r.drawImage(n,0,0,s,l),e.abrupt("return",r.getImageData(0,0,s,l));case 11:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(i.a.mark(function e(t,a){var n,r,l,s,c;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n=t.height,r=t.width,l=t.data,s=a.getContext("2d"),a.width=r,a.height=n,(c=s.createImageData(r,n)).data.set(l),s.putImageData(c,0,0);case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),w=a(51),y=a.n(w),k=a(52),C=a.n(k),N={}.hasOwnProperty,_=function(){for(var e=[],t=0;t<arguments.length;t+=1){var a=arguments[t];if(a){var n=typeof a;if("string"===n||"number"===n)e.push(this&&this[a]||a);else if(Array.isArray(a))e.push(x.apply(this,a));else if("object"===n)for(var r in a)N.call(a,r)&&a[r]&&e.push(this&&this[r]||r)}}return e.join(" ").split(" ")},x=function(e){return e=e||[],function(){var t=_.apply(C.a,arguments);for(var a in e)t=_.apply(e[a],t);return t.join(" ")}},D=document.createElement("canvas");x.webp="no-webp",D.getContext&&D.getContext("2d")&&(x.webp=0===D.toDataURL("image/webp").indexOf("data:image/webp")?"webp":"no-webp");var S=x,j=S([]),I=function(){return r.a.createElement("i",{className:j("svg-icon")},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.a.createElement("path",{d:"M160 320h12v16c0 8.84 7.16 16 16 16h40c8.84 0 16-7.16 16-16v-16h12c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32V16c0-8.84-7.16-16-16-16h-64c-8.84 0-16 7.16-16 16v16c-17.67 0-32 14.33-32 32v224c0 17.67 14.33 32 32 32zm304 128h-1.29C493.24 413.99 512 369.2 512 320c0-105.88-86.12-192-192-192v64c70.58 0 128 57.42 128 128s-57.42 128-128 128H48c-26.51 0-48 21.49-48 48 0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16 0-26.51-21.49-48-48-48zm-360-32h208c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8H104c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8z"})))},M=a(15),O=S([]),T=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).workerHandler=function(e){var t=e.data;if("serialized"===t.action)E(t.pass,a._canvas),a.setState({step:2});else if("rectangulated"===t.action)E(t.pass,a._canvas),a.setState({step:3,pointStep:0});else if("detected"===t.action)E(t.pass,a._canvas),a.setState({step:5});else if("counted"===t.action)E(t.pass,a._canvas),a.setState({count:t.pass.count,step:7});else if("status"===t.action){if(t.pass.error)return a.setState({error:!0});t.pass.percent>a.state.percent+.01&&a.setState({percent:t.pass.percent})}},a.canvasClick=function(e){var t=e.clientX,n=e.clientY,r=a.state,l=r.points,s=r.pointStep;if(2===r.step){l=l.slice();var c=a._canvas.getBoundingClientRect(),o=c.x,i=c.y,u=c.left,m=c.top;!o&&u&&(o=u),!i&&m&&(i=m),o=Math.round(t-o),i=Math.round(n-i),l[s]=[o,i],4===++s&&(s=0),a.setState({points:l,pointStep:s},function(){0===s&&a.worker.postMessage({action:"rectangulate",pass:l})})}},a.detectImage=function(){a.setState({step:4,percent:0},function(){a.worker.postMessage({action:"detect",pass:a.state.points.slice()})})},a.recopyImage=function(){a.worker.postMessage({action:"copy",pass:null}),a.setState({step:2})},a.countImage=function(){a.setState({step:6},function(){a.worker.postMessage({action:"count",pass:a.state.points.slice()})})},a.updateConfig=function(){var e=a.state,t=e.wall,n=e.res,r=e.mDist,l=e.mCont,s=e.thresh;a.worker.postMessage({action:"config",pass:{wall:t,res:n,mDist:r,mCont:l,thresh:s}})},a.fileChange=function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.target.files||!t.target.files[0]){e.next=5;break}return e.next=3,v(URL.createObjectURL(t.target.files[0]));case 3:n=e.sent,a.worker.postMessage({action:"serialize",pass:n});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.fileDrop=function(){var e=Object(u.a)(i.a.mark(function e(t){var n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),1===a.state.step){e.next=3;break}return e.abrupt("return",!1);case 3:if(!(t.dataTransfer&&t.dataTransfer.files&&t.dataTransfer.files[0])){e.next=8;break}return e.next=6,v(URL.createObjectURL(t.dataTransfer.files[0]));case 6:n=e.sent,a.worker.postMessage({action:"serialize",pass:n});case 8:return e.abrupt("return",!1);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.noEvent=function(e){return e.preventDefault(),!1},a.state={points:[[0,0],[0,0],[0,0],[0,0]],pointStep:0,wall:.06,res:10,mCont:3,thresh:.5,mDist:3,percent:0,error:!1,count:0,step:1,factOne:M[Math.ceil(Math.random()*M.length)-1],factTwo:M[Math.ceil(Math.random()*M.length)-1]},"undefined"!==typeof Worker&&(a.worker=y()(),a.worker.onmessage=a.workerHandler),a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"numCling",value:function(e,t){var a=this;this.setState(Object(c.a)({},e,""===t.target.value?"":Number(t.target.value)),function(){a.updateConfig()})}},{key:"render",value:function(){var e=this,t=this.state,a=t.wall,n=t.res,l=t.mCont,s=t.mDist,c=t.thresh,o=t.step,i=t.percent,u=t.count,m=t.factOne,h=t.factTwo;return r.a.createElement("div",{className:O("container"),onDrop:this.fileDrop,onDragEnter:this.noEvent,onDragOver:this.noEvent},r.a.createElement("header",{className:O("py-3")},r.a.createElement("h1",{className:O("mb-1")},"Scan Cell"),r.a.createElement("div",{className:O("small","muted")},r.a.createElement("i",null,"Yeast Counter for FEH Nano"))),r.a.createElement("div",null,r.a.createElement("div",{className:O("ycanvas",{hide:1===o||4===o||6===o})},r.a.createElement("canvas",{ref:function(t){return e._canvas=t},onClick:this.canvasClick})),1===o?r.a.createElement("div",null,r.a.createElement("p",null,"Upload a photo for processing. Photos have highest accuracy when they are landscape, and when HDR (high dynamic range) enabled."),r.a.createElement("button",{className:O("btn","btn-dark","btn-block","btn-lg"),onClick:function(){return e._file.click()}},"Select Photo"),r.a.createElement("div",{className:O("dragdrop","my-2","d-flex","justify-content-center","align-items-center")},r.a.createElement("div",null,r.a.createElement("div",{className:O("or")},"OR"),r.a.createElement("div",{className:O("text")},"Drag & Drop File"))),r.a.createElement("input",{type:"file",className:O("hide"),ref:function(t){return e._file=t},onChange:this.fileChange}),r.a.createElement("p",null,"To test the tool, ",r.a.createElement("a",{href:g.a,download:"yeast-demo.jpg"},"download a demo image"),".")):null,2===o?r.a.createElement("div",null,r.a.createElement("p",null,"Click on the ",r.a.createElement("b",null,"inner corners")," of the channel in the following order: ",r.a.createElement("b",null,"bottom left")," \u2199, ",r.a.createElement("b",null,"top left")," \u2196, ",r.a.createElement("b",null,"top right")," \u2197, and ",r.a.createElement("b",null,"bottom right")," \u2198."),r.a.createElement("button",{className:O("btn","btn-dark","btn-block"),onClick:function(){return e.setState({step:1,pointStep:0})}},"Change Image")):null,3===o?r.a.createElement("div",null,r.a.createElement("p",null,"Does this area look correct?"),r.a.createElement("div",{className:O("btn-group","w-100")},r.a.createElement("button",{className:O("btn","btn-light","w-100"),onClick:this.recopyImage},"No"),r.a.createElement("button",{className:O("btn","btn-dark","w-100"),onClick:this.detectImage},"Yes"))):null,4===o?r.a.createElement("div",null,r.a.createElement("div",{className:O("text-center","micro")},r.a.createElement(I,null)),r.a.createElement("h3",{className:O("my-3","text-center")},"Processing..."),r.a.createElement("div",{className:O("progress")},r.a.createElement("div",{className:O("progress-bar","bg-royal"),role:"progressbar","aria-valuenow":Math.round(100*i),"aria-valuemin":"0","aria-valuemax":"100",style:{width:100*i+"%"}},r.a.createElement("span",{className:O("sr-only")},Math.round(100*i),"% Complete"))),r.a.createElement("div",{className:O("alert","alert-info","my-3")},r.a.createElement("b",null,"Did you know?")," ",m)):null,5===o?r.a.createElement("div",null,r.a.createElement("p",null,"Do the red spots cover the majority of the yeast cells? If they don't, modify the variables below and recalculate. Otherwise, continue."),r.a.createElement("div",{className:O("btn-group","w-100")},r.a.createElement("button",{className:O("btn","btn-light","w-100"),onClick:this.detectImage},"Recalculate"),r.a.createElement("button",{className:O("btn","btn-dark","w-100"),onClick:this.countImage},"Continue")),r.a.createElement("h4",{className:O("mt-3","pb-0")},"Variables"),r.a.createElement("hr",null),r.a.createElement("h5",{htmlFor:"wall"},"Wall Distance Coefficient"),r.a.createElement("input",{id:"wall",type:"number",min:"0.01",max:"0.15",step:"0.005",placeholder:"Wall Distance Coefficient",value:a,onChange:this.numCling.bind(this,"wall"),className:O("form-control")}),r.a.createElement("ul",null,r.a.createElement("li",null,"This number should be a fraction between 0.01 and 0.15."),r.a.createElement("li",null,r.a.createElement("b",null,"Increase")," this number if there is excess red near the walls."),r.a.createElement("li",null,r.a.createElement("b",null,"Decrease")," this number if cells near the wall are not detected.")),r.a.createElement("h5",{htmlFor:"res"},"Local Contrast Resolution"),r.a.createElement("input",{id:"res",type:"number",min:"3",max:"50",step:"1",placeholder:"Local Contrast Resolution",value:n,onChange:this.numCling.bind(this,"res"),className:O("form-control")}),r.a.createElement("ul",null,r.a.createElement("li",null,"This number should be a whole number between 3 and 50."),r.a.createElement("li",null,r.a.createElement("b",null,"Increase")," this number if yeast cells are not being detected or there is a lot of noise."),r.a.createElement("li",null,r.a.createElement("b",null,"Modify")," this number to find what performs the best. The default is heuristic.")),r.a.createElement("h5",{htmlFor:"res"},"Minimum Contrast"),r.a.createElement("input",{type:"number",min:"1",max:"20",step:"1",placeholder:"Minimum Contrast",value:l,onChange:this.numCling.bind(this,"mCont"),className:O("form-control")}),r.a.createElement("ul",null,r.a.createElement("li",null,"This number should be a whole number between 1 and 20."),r.a.createElement("li",null,r.a.createElement("b",null,"Increase")," this number if non-cells are being detected or there is a lot of noise."),r.a.createElement("li",null,r.a.createElement("b",null,"Decrease")," this number if yeast cells are not being detected."))):null,6===o?r.a.createElement("div",null,r.a.createElement("div",{className:O("text-center","micro")},r.a.createElement(I,null)),r.a.createElement("h3",{className:O("my-3","text-center")},"Processing..."),r.a.createElement("div",{className:O("alert","alert-info")},r.a.createElement("b",null,"Did you know?")," ",h)):null,7===o?r.a.createElement("div",null,r.a.createElement("h3",{className:O("my-2","text-center")},"Cells: ",u),r.a.createElement("p",null,"Do the dots cover the majority of the yeast cells? If they don't, modify the variables below and recalculate. Otherwise, the cell count is ",u,"."),r.a.createElement("div",{className:O("btn-group","w-100")},r.a.createElement("button",{className:O("btn","btn-light","w-100"),onClick:this.countImage},"Recount"),r.a.createElement("button",{className:O("btn","btn-dark","w-100"),onClick:function(){return e.setState({step:1,pointStep:0})}},"New Image")),r.a.createElement("h4",{className:O("mt-3","pb-0")},"Variables"),r.a.createElement("hr",null),r.a.createElement("h5",{htmlFor:"mDist"},"Cell Minimum Detection Distance"),r.a.createElement("input",{id:"mDist",type:"number",min:"2",max:"10",step:"1",placeholder:"Cell Minimum Detection Distance",value:s,onChange:this.numCling.bind(this,"mDist"),className:O("form-control")}),r.a.createElement("ul",null,r.a.createElement("li",null,"This number should be a whole number between 2 and 10."),r.a.createElement("li",null,r.a.createElement("b",null,"Increase")," this number if one yeast cell is being counted as many."),r.a.createElement("li",null,r.a.createElement("b",null,"Decrease")," this number if multiple yeast cells are being counted as one.")),r.a.createElement("h5",{htmlFor:"thresh"},"Cell Size Threshold Coefficient"),r.a.createElement("input",{id:"thresh",type:"number",min:"0.125",max:"0.875",step:"0.125",placeholder:"Cell Size Threshold Coefficient",value:c,onChange:this.numCling.bind(this,"thresh"),className:O("form-control")}),r.a.createElement("ul",null,r.a.createElement("li",null,"This number should be a whole number between 0.125 and 0.875."),r.a.createElement("li",null,"Try changing the cell minimum detection distance before changing this variable."),r.a.createElement("li",null,r.a.createElement("b",null,"Increase")," this number if one yeast cell is being counted as many."),r.a.createElement("li",null,r.a.createElement("b",null,"Decrease")," this number if multiple yeast cells are being counted as one."))):null),r.a.createElement("footer",{className:O("py-2")},r.a.createElement("hr",null),r.a.createElement("div",{className:O("text-center")},r.a.createElement("a",{href:"https://github.com/teamtofu/scancell",target:"_blank",rel:"noopener noreferrer"},"GitHub")," \xb7 ",r.a.createElement("a",{href:"https://github.com/teamtofu/scancell/issues/new?assignees=teamtofu&labels=bug%2C+unresolved&template=bug_report.md&title=",target:"_blank",rel:"noopener noreferrer"},"Report an Issue")),r.a.createElement("div",{className:O("pt-2","pb-3")},"Copyright \xa9 2019 ",r.a.createElement("a",{href:"https://www.russellsteadman.com/?utm_source=scancell&utm_medium=copyright",target:"_blank",rel:"noopener noreferrer"},"Russell Steadman"),". Some Rights Reserved. This work is licensed under a ",r.a.createElement("a",{href:"https://creativecommons.org/licenses/by-sa/4.0/",target:"_blank",rel:"license noopener noreferrer"},"Creative Commons Attribution-ShareAlike 4.0 International License"),".")))}}]),t}(n.Component),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(r.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("","/service-worker.js");R?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):L(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):L(t,e)})}}()}},[[55,1,2]]]);