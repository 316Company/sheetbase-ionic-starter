(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{MnbF:function(t,e,n){"use strict";n.r(e),n.d(e,"startTapClick",function(){return i});var a=n("kk3N");function i(t){var e,n,i=10*-s,u=0,d=!1,v=new WeakMap;function l(t){i=Object(a.a)(t),b(t)}function f(){clearTimeout(n),e&&(m(!1),e=void 0),d=!0}function p(t){e||(d=!1,w(function(t){return t.closest(":not([tappable]) > a, :not([tappable]) > button, [tappable]")}(t.target),t))}function b(t){w(void 0,t),d&&t.cancelable&&t.preventDefault()}function w(t,i){if(!t||t!==e){clearTimeout(n),n=void 0;var r=Object(a.i)(i),s=r.x,u=r.y;if(e){if(v.has(e))throw new Error("internal error");e.classList.contains(o)||L(e,s,u),m(!0)}if(t){var d=v.get(t);d&&(clearTimeout(d),v.delete(t)),t.classList.remove(o),n=setTimeout(function(){L(t,s,u),n=void 0},c)}e=t}}function L(t,e,n){u=Date.now(),t.classList.add(o);var a=new CustomEvent("ionActivated",{bubbles:!1,detail:{x:e,y:n}});t.dispatchEvent(a)}function m(t){var n=e;if(n){var a=r-Date.now()+u;if(t&&a>0){var i=setTimeout(function(){n.classList.remove(o),v.delete(n)},r);v.set(n,i)}else n.classList.remove(o)}}t.body.addEventListener("click",function(t){d&&(t.preventDefault(),t.stopPropagation())},!0),t.body.addEventListener("ionScrollStart",f),t.body.addEventListener("ionGestureCaptured",f),t.addEventListener("touchstart",function(t){i=Object(a.a)(t),p(t)},!0),t.addEventListener("touchcancel",l,!0),t.addEventListener("touchend",l,!0),t.addEventListener("mousedown",function(t){var e=Object(a.a)(t)-s;i<e&&p(t)},!0),t.addEventListener("mouseup",function(t){var e=Object(a.a)(t)-s;i<e&&b(t)},!0)}var o="activated",c=200,r=200,s=2500}}]);