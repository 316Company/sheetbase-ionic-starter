(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{F6pH:function(n,e,i){"use strict";i.r(e),i.d(e,"IonSpinner",function(){return o});var s=i("cBjU"),r=i("XGMM"),t={lines:{dur:1e3,lines:12,fn:function(n,e,i){return{y1:17,y2:29,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":n*e/i-n+"ms"}}}},"lines-small":{dur:1e3,lines:12,fn:function(n,e,i){return{y1:12,y2:20,style:{transform:"rotate("+(30*e+(e<6?180:-180))+"deg)","animation-delay":n*e/i-n+"ms"}}}},bubbles:{dur:1e3,circles:9,fn:function(n,e,i){var s=n*e/i-n+"ms",r=2*Math.PI*e/i;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":s}}}},circles:{dur:1e3,circles:8,fn:function(n,e,i){var s=e/i,r=n*s-n+"ms",t=2*Math.PI*s;return{r:5,style:{top:9*Math.sin(t)+"px",left:9*Math.cos(t)+"px","animation-delay":r}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(n,e){return{r:6,style:{left:9-9*e+"px","animation-delay":-110*e+"ms"}}}}},o=function(){function n(){this.paused=!1}return n.prototype.getName=function(){var n=this.name||this.config.get("spinner");return n?("ios"===n?(console.warn('spinner "ios" has been renamed to "lines"'),n="lines"):"ios-small"===n&&(console.warn('spinner "ios-small" has been renamed to "lines-small"'),n="lines-small"),n):"md"===this.mode?"crescent":"lines"},n.prototype.hostData=function(){var n;return{class:Object.assign({},Object(r.a)(this.color),(n={},n["spinner-"+this.getName()]=!0,n["spinner-paused"]=!!this.paused,n))}},n.prototype.render=function(){var n=this.getName(),e=t[n]||t.lines,i="number"==typeof this.duration&&this.duration>10?this.duration:e.dur,s=[];if(e.circles)for(var r=0;r<e.circles;r++)s.push(a(e,i,r,e.circles));else if(e.lines)for(r=0;r<e.lines;r++)s.push(c(e,i,r,e.lines));return s},Object.defineProperty(n,"is",{get:function(){return"ion-spinner"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},duration:{type:Number,attr:"duration"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},paused:{type:Boolean,attr:"paused"}}},enumerable:!0,configurable:!0}),Object.defineProperty(n,"style",{get:function(){return".sc-ion-spinner-ios-h{display:inline-block;position:relative;width:28px;height:28px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ion-color.sc-ion-spinner-ios-h{color:var(--ion-color-base)}svg.sc-ion-spinner-ios{left:0;top:0;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}.spinner-lines.sc-ion-spinner-ios-h   line.sc-ion-spinner-ios, .spinner-lines-small.sc-ion-spinner-ios-h   line.sc-ion-spinner-ios{stroke-width:4px;stroke-linecap:round;stroke:currentColor}.spinner-lines.sc-ion-spinner-ios-h   svg.sc-ion-spinner-ios, .spinner-lines-small.sc-ion-spinner-ios-h   svg.sc-ion-spinner-ios{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out}.spinner-bubbles.sc-ion-spinner-ios-h   svg.sc-ion-spinner-ios{-webkit-animation:1s linear infinite spinner-scale-out;animation:1s linear infinite spinner-scale-out;fill:currentColor}.spinner-circles.sc-ion-spinner-ios-h   svg.sc-ion-spinner-ios{-webkit-animation:1s linear infinite spinner-fade-out;animation:1s linear infinite spinner-fade-out;fill:currentColor}.spinner-crescent.sc-ion-spinner-ios-h   circle.sc-ion-spinner-ios{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}.spinner-crescent.sc-ion-spinner-ios-h   svg.sc-ion-spinner-ios{-webkit-animation:1s linear infinite spinner-rotate;animation:1s linear infinite spinner-rotate}.spinner-dots.sc-ion-spinner-ios-h   circle.sc-ion-spinner-ios{stroke-width:0;fill:currentColor}.spinner-dots.sc-ion-spinner-ios-h   svg.sc-ion-spinner-ios{-webkit-transform-origin:center;transform-origin:center;-webkit-animation:1s linear infinite spinner-dots;animation:1s linear infinite spinner-dots}.spinner-paused.sc-ion-spinner-ios-h   svg.sc-ion-spinner-ios{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1,1);transform:scale(1,1)}100%{-webkit-transform:scale(0,0);transform:scale(0,0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}@keyframes spinner-dots{0%,100%{-webkit-transform:scale(1,1);transform:scale(1,1);opacity:.9}50%{-webkit-transform:scale(.4,.4);transform:scale(.4,.4);opacity:.3}}.spinner-lines.sc-ion-spinner-ios-h{--ion-color-base:var(--ion-text-color-step-400, #666666)}.spinner-bubbles.sc-ion-spinner-ios-h{--ion-color-base:var(--ion-text-color, #000)}.spinner-circles.sc-ion-spinner-ios-h{--ion-color-base:var(--ion-text-color-step-400, #666666)}.spinner-crescent.sc-ion-spinner-ios-h{--ion-color-base:var(--ion-text-color, #000)}.spinner-dots.sc-ion-spinner-ios-h{--ion-color-base:var(--ion-text-color-step-300, #4d4d4d)}"},enumerable:!0,configurable:!0}),Object.defineProperty(n,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),n}();function a(n,e,i,r){var t=n.fn(e,i,r);return t.style["animation-duration"]=e+"ms",Object(s.b)("svg",{viewBox:"0 0 64 64",style:t.style},Object(s.b)("circle",{transform:"translate(32,32)",r:t.r}))}function c(n,e,i,r){var t=n.fn(e,i,r);return t.style["animation-duration"]=e+"ms",Object(s.b)("svg",{viewBox:"0 0 64 64",style:t.style},Object(s.b)("line",{transform:"translate(32,32)",y1:t.y1,y2:t.y2}))}}}]);