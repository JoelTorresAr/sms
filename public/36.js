(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{355:function(e,t,r){"use strict";r.r(t);var n=r(12);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var i={name:"signin",data:function(){return{form:{username:"",password:""},fullscreenLoading:!1,error:!1}},methods:o(o({},Object(n.b)({signIn:"usuario/signIn"})),{},{login:function(){var e=this;return this.form.username?this.form.password?(this.fullscreenLoading=!0,localStorage.setItem("rolSelected","nothing"),void this.signIn(this.form).then((function(){e.$router.replace({name:"Escritorio"}),e.notification("success","Bienvenido al SGC",0)})).catch((function(t){401==t.response.status&&e.notification("error",t.response.data.error,0)})).finally((function(){e.fullscreenLoading=!1}))):this.notification("warning","La contraseña es un campo obligatorio"):this.notification("warning","El usuario es un campo obligatorio")}})},c=r(14),l=Object(c.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"auth-wrapper"},[r("div",{staticClass:"auth-content"},[r("div",{staticClass:"card"},[r("div",{staticClass:"row align-items-center text-center"},[r("div",{staticClass:"col-md-12"},[r("div",{staticClass:"card-body"},[r("img",{staticClass:"img-fluid mb-4",attrs:{src:"/images/auth/auth-logo-dark.jpeg",alt:""}}),e._v(" "),r("h4",{staticClass:"mb-3 f-w-400"},[e._v("Iniciar Sesión")]),e._v(" "),r("div",{staticClass:"form-group mb-3"},[r("label",{staticClass:"floating-label"}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.username,expression:"form.username"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Usuario *"},domProps:{value:e.form.username},on:{input:function(t){t.target.composing||e.$set(e.form,"username",t.target.value)}}})]),e._v(" "),r("div",{staticClass:"form-group mb-4"},[r("label",{staticClass:"floating-label"}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Contaseña +"},domProps:{value:e.form.password},on:{input:function(t){t.target.composing||e.$set(e.form,"password",t.target.value)}}})]),e._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"btn btn-block btn-primary mb-4",on:{click:function(t){return t.preventDefault(),e.login(t)}}},[e._v("Iniciar Sesión")])])])])])])])}),[],!1,null,"0c72a216",null);t.default=l.exports}}]);