(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{361:function(t,e,r){"use strict";r.r(e);var a=r(2),s=r.n(a),n=r(12);function i(t,e,r,a,s,n,i){try{var o=t[n](i),l=o.value}catch(t){return void r(t)}o.done?e(l):Promise.resolve(l).then(a,s)}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={data:function(){return{filter:"",listFilter:[],listRoles:[],listPermisos:[],fullscreenLoading:!1,currentPage1:1,page:0}},mounted:function(){this.loadUser(),this.getListarRoles()},methods:l(l({handleSizeChange:function(t){console.log("".concat(t," items per page"))},handleCurrentChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.page=t,0==t?t=0:t-=1;var e=10*t,r=e+10;this.listFilter=this.listRoles.slice(e,r)}},Object(n.b)({attempt:"usuario/attempt"})),{},{loadUser:function(){var t=this;this.attempt(localStorage.getItem("token")).then((function(){})).catch((function(e){401==e.response.status&&t.notification("error",e.response.data.error,0)})).finally((function(){t.fullscreenLoading=!1}))},getListarRoles:function(){var t,e=this;return(t=s.a.mark((function t(){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.fullscreenLoading=!0,t.next=4,e.callGetApi("get","/seguridad/rol/index",{filter:e.filter});case 4:200==(r=t.sent).status?(e.listRoles=r.data,e.handleCurrentChange()):(401==r.status&&(e.$router.push({name:"login"}),location.reload(),localStorage.clear()),419==r.status&&(e.notification("error","Fue necesario recargar la página",0),location.reload())),e.fullscreenLoading=!1;case 7:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(a,s){var n=t.apply(e,r);function o(t){i(n,a,s,o,l,"next",t)}function l(t){i(n,a,s,o,l,"throw",t)}o(void 0)}))})()}})},d=r(14),p=Object(d.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pcoded-content"},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"page-block"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-md-12"},[t._m(0),t._v(" "),r("ul",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"rol.index"}}},[r("i",{staticClass:"feather icon-unlock"})])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"rol.index"}}},[t._v("\n                                Navegar entre Roles\n                            ")])],1)])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("form",{staticClass:"form-inline",on:{submit:function(t){t.preventDefault()}}},[r("div",{staticClass:"form-group mx-sm-3 mb-2 fill"},[r("label",{staticClass:"sr-only"},[t._v("Buscar")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Buscar"},domProps:{value:t.filter},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.getListarRoles(e))},input:function(e){e.target.composing||(t.filter=e.target.value)}}})]),t._v(" "),r("button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"btn btn-primary mb-2",attrs:{type:"button"},on:{"&click":function(e){return t.getListarRoles(e)}}},[t._v("Buscar")])])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"btn-actions"},[t.listPermissions.includes("rol.crear")?r("div",{staticClass:"btn-group card-option"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Nuevo Rol",placement:"top"}},[r("router-link",{staticClass:"btn  btn-icon btn-outline-primary",attrs:{to:{name:"rol.crear"}}},[r("i",{staticClass:"feather icon-plus"})])],1)],1):t._e()])])])]),t._v(" "),r("div",{staticClass:"card-body table-border-style"},[r("div",{staticClass:"table-responsive"},[t.listFilter.length?[r("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),r("tbody",t._l(t.listFilter,(function(e,a){return r("tr",{key:a},[r("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),r("td",{domProps:{textContent:t._s(e.slug)}}),t._v(" "),r("td",[t.listPermissions.includes("rol.editar")?r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Editar Rol",placement:"top"}},[r("router-link",{staticClass:"btn  btn-icon btn-outline-primary",attrs:{to:{name:"rol.editar",params:{id:e.id}}}},[r("i",{staticClass:"feather icon-edit"})])],1):t._e()],1)])})),0)]),t._v(" "),r("el-pagination",{attrs:{background:"","current-page":t.currentPage1,"page-size":10,layout:"total, prev, pager, next",total:t.listPermisos.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage1=e},"update:current-page":function(e){t.currentPage1=e}}})]:[r("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[t._v("\n                                No se encontraron registros\n                            ")])]],2)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-title"},[e("h5",{staticClass:"m-b-10"},[this._v("Gestión Roles")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Nombre")]),this._v(" "),e("th",[this._v("Url Amigable")]),this._v(" "),e("th",[this._v("Acciones")])])])}],!1,null,null,null);e.default=p.exports}}]);