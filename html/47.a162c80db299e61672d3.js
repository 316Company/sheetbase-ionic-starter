(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"/zSp":function(t,e,o){"use strict";o.r(e),o.d(e,"IonToast",function(){return u}),o.d(e,"IonToastController",function(){return p});var n=o("cBjU"),s=o("ccrQ"),a=o("XGMM");function i(t,e,o){var n,s=new t,a=new t,i=e.querySelector(".toast-wrapper");a.addElement(i),CSS.supports("bottom","env(safe-area-inset-bottom)")?n="env":CSS.supports("bottom","constant(safe-area-inset-bottom)")&&(n="constant");var r=n?"calc(-10px - "+n+"(safe-area-inset-bottom))":"-10px",l=n?"calc("+n+"(safe-area-inset-top) + 10px)":"10px";switch(o){case"top":a.fromTo("translateY","-100%",l);break;case"middle":var c=Math.floor(e.clientHeight/2-i.clientHeight/2);i.style.top=c+"px",a.fromTo("opacity",.01,1);break;default:a.fromTo("translateY","100%",r)}return Promise.resolve(s.addElement(e).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).add(a))}function r(t,e,o){var n,s=new t,a=new t,i=e.querySelector(".toast-wrapper");a.addElement(i),CSS.supports("bottom","env(safe-area-inset-bottom)")?n="env":CSS.supports("bottom","constant(safe-area-inset-bottom)")&&(n="constant");var r=n?"calc(-10px - "+n+"(safe-area-inset-bottom))":"-10px",l=n?"calc("+n+"(safe-area-inset-top) + 10px)":"10px";switch(o){case"top":a.fromTo("translateY",l,"-100%");break;case"middle":a.fromTo("opacity",.99,0);break;default:a.fromTo("translateY",r,"100%")}return Promise.resolve(s.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(a))}function l(t,e,o){var n=new t,s=new t,a=e.querySelector(".toast-wrapper");switch(s.addElement(a),o){case"top":s.fromTo("translateY","-100%","0%");break;case"middle":var i=Math.floor(e.clientHeight/2-a.clientHeight/2);a.style.top=i+"px",s.fromTo("opacity",.01,1);break;default:s.fromTo("translateY","100%","0%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(400).add(s))}function c(t,e,o){var n=new t,s=new t,a=e.querySelector(".toast-wrapper");switch(s.addElement(a),o){case"top":s.fromTo("translateY","0px","-100%");break;case"middle":s.fromTo("opacity",.99,0);break;default:s.fromTo("translateY","0px","100%")}return Promise.resolve(n.addElement(e).easing("cubic-bezier(.36,.66,.04,1)").duration(300).add(s))}var u=function(){function t(){this.presented=!1,this.keyboardClose=!1,this.showCloseButton=!1,this.translucent=!1,this.willAnimate=!0}return t.prototype.componentDidLoad=function(){this.ionToastDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionToastDidUnload.emit()},t.prototype.onDismiss=function(t){t.stopPropagation(),t.preventDefault(),this.dismiss()},t.prototype.present=function(){return t=this,void 0,o=function(){var t=this;return function(t,e){var o,n,s,a,i={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return a={next:r(0),throw:r(1),return:r(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function r(a){return function(r){return function(a){if(o)throw new TypeError("Generator is already executing.");for(;i;)try{if(o=1,n&&(s=2&a[0]?n.return:a[0]?n.throw||((s=n.return)&&s.call(n),0):n.next)&&!(s=s.call(n,a[1])).done)return s;switch(n=0,s&&(a=[2&a[0],s.value]),a[0]){case 0:case 1:s=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(s=(s=i.trys).length>0&&s[s.length-1])&&(6===a[0]||2===a[0])){i=0;continue}if(3===a[0]&&(!s||a[1]>s[0]&&a[1]<s[3])){i.label=a[1];break}if(6===a[0]&&i.label<s[1]){i.label=s[1],s=a;break}if(s&&i.label<s[2]){i.label=s[2],i.ops.push(a);break}s[2]&&i.ops.pop(),i.trys.pop();continue}a=e.call(t,i)}catch(t){a=[6,t],n=0}finally{o=s=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,r])}}}(this,function(e){switch(e.label){case 0:return[4,Object(s.i)(this,"toastEnter",i,l,this.position)];case 1:return e.sent(),this.duration&&(this.durationTimeout=setTimeout(function(){return t.dismiss()},this.duration)),[2]}})},new((e=void 0)||(e=Promise))(function(n,s){function a(t){try{r(o.next(t))}catch(t){s(t)}}function i(t){try{r(o.throw(t))}catch(t){s(t)}}function r(t){t.done?n(t.value):new e(function(e){e(t.value)}).then(a,i)}r((o=o.apply(t,[])).next())});var t,e,o},t.prototype.dismiss=function(t,e){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(s.f)(this,t,e,"toastLeave",r,c,this.position)},t.prototype.onDidDismiss=function(t){return Object(s.g)(this.el,"ionToastDidDismiss",t)},t.prototype.onWillDismiss=function(t){return Object(s.g)(this.el,"ionToastWillDismiss",t)},t.prototype.hostData=function(){var t=this.translucent?Object(a.b)(this.mode,"toast-translucent"):{};return{class:Object.assign({},t,Object(a.b)(this.mode,"toast"),Object(a.e)(this.cssClass))}},t.prototype.render=function(){var t,e=this,o=((t={"toast-wrapper":!0})["toast-"+(this.position?this.position:"bottom")]=!0,t);return Object(n.b)("div",{class:o},Object(n.b)("div",{class:"toast-container"},this.message?Object(n.b)("div",{class:"toast-message"},this.message):null,this.showCloseButton?Object(n.b)("ion-button",{fill:"clear",color:"light",class:"toast-button",onClick:function(){return e.dismiss()}},this.closeButtonText||"Close"):null))},Object.defineProperty(t,"is",{get:function(){return"ion-toast"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animationCtrl:{connect:"ion-animation-controller"},closeButtonText:{type:String,attr:"close-button-text"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},duration:{type:Number,attr:"duration"},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayId:{type:Number,attr:"overlay-id"},position:{type:String,attr:"position"},present:{method:!0},showCloseButton:{type:Boolean,attr:"show-close-button"},translucent:{type:Boolean,attr:"translucent"},willAnimate:{type:Boolean,attr:"will-animate"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionToastDidLoad",method:"ionToastDidLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionToastDidUnload",method:"ionToastDidUnload",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"ion-toast{left:0;top:0;display:block;position:absolute;width:100%;height:100%;contain:strict;z-index:1000;pointer-events:none}.toast-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;pointer-events:auto;contain:content}.toast-button{font-size:15px}.toast-message{-webkit-box-flex:1;-ms-flex:1;flex:1}.toast-ios{font-family:var(--ion-font-family,inherit)}.toast-ios .toast-wrapper{left:10px;right:10px;margin:auto;border-radius:14px;display:block;position:absolute;max-width:700px;background:var(--ion-background-color-step-50,#f2f2f2);z-index:10}.toast-translucent-ios .toast-wrapper{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.toast-ios .toast-wrapper.toast-top{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);top:0}.toast-ios .toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);bottom:0}.toast-ios .toast-wrapper.toast-middle{opacity:.01}.toast-ios .toast-message{padding:15px;color:var(--ion-text-color-step-150,#262626);font-size:14px}.toast-ios .toast-button{color:var(--ion-text-color-step-400,#666)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),p=function(){function t(){this.toasts=new Map}return t.prototype.toastWillPresent=function(t){this.toasts.set(t.target.overlayId,t.target)},t.prototype.toastWillDismiss=function(t){this.toasts.delete(t.target.overlayId)},t.prototype.escapeKeyUp=function(){Object(s.d)(this.toasts)},t.prototype.create=function(t){return Object(s.a)(this.doc.createElement("ion-toast"),t)},t.prototype.dismiss=function(t,e,o){return void 0===o&&(o=-1),Object(s.b)(t,e,this.toasts,o)},t.prototype.getTop=function(){return Object(s.c)(this.toasts)},Object.defineProperty(t,"is",{get:function(){return"ion-toast-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ionToastWillPresent",method:"toastWillPresent"},{name:"body:ionToastWillDismiss",method:"toastWillDismiss"},{name:"body:ionToastDidUnload",method:"toastWillDismiss"},{name:"body:keyup.escape",method:"escapeKeyUp"}]},enumerable:!0,configurable:!0}),t}()}}]);