(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{grqq:function(e,n,t){"use strict";t.r(n),t.d(n,"IonNavPop",function(){return o}),t.d(n,"IonNavPush",function(){return r}),t.d(n,"IonNavSetRoot",function(){return i});var o=function(){function e(){}return e.prototype.pop=function(){var e=this.el.closest("ion-nav");return e&&!e.isAnimating()?e.pop():Promise.resolve(null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-pop"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"pop"}]},enumerable:!0,configurable:!0}),e}(),r=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),n=this.component;return e&&n&&!e.isAnimating()?e.push(n,this.componentProps):Promise.resolve(null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-push"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}(),i=function(){function e(){}return e.prototype.push=function(){var e=this.el.closest("ion-nav"),n=this.component;return e&&n?e.setRoot(n,this.componentProps):Promise.resolve(null)},Object.defineProperty(e,"is",{get:function(){return"ion-nav-set-root"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},el:{elementRef:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"child:click",method:"push"}]},enumerable:!0,configurable:!0}),e}()}}]);