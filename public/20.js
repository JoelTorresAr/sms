(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{358:function(t,e,s){"use strict";s.r(e);var a=s(2),i=s.n(a);function r(t,e,s,a,i,r,n){try{var l=t[r](n),o=l.value}catch(t){return void s(t)}l.done?e(o):Promise.resolve(o).then(a,i)}var n={data:function(){return{filter:"",listFilter:[],listPermisos:[],fullscreenLoading:!1,currentPage1:1,page:0}},mounted:function(){this.getListarPermisos()},methods:{handleSizeChange:function(t){console.log("".concat(t," items per page"))},handleCurrentChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.page=t,0==t?t=0:t-=1;var e=10*t,s=e+10;this.listFilter=this.listPermisos.slice(e,s)},getListarPermisos:function(){var t,e=this;return(t=i.a.mark((function t(){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.fullscreenLoading=!0,t.next=4,e.callGetApi("get","/seguridad/permiso/index",{filter:e.filter});case 4:200==(s=t.sent).status?(e.listPermisos=s.data,e.handleCurrentChange()):(401==s.status&&(e.$router.push({name:"login"}),location.reload(),localStorage.clear()),419==s.status&&(e.notification("error","Fue necesario recargar la página",0),location.reload())),e.fullscreenLoading=!1;case 7:case"end":return t.stop()}}),t)})),function(){var e=this,s=arguments;return new Promise((function(a,i){var n=t.apply(e,s);function l(t){r(n,a,i,l,o,"next",t)}function o(t){r(n,a,i,l,o,"throw",t)}l(void 0)}))})()}}},l=s(14),o=Object(l.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pcoded-content"},[s("div",{staticClass:"page-header"},[s("div",{staticClass:"page-block"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-12"},[t._m(0),t._v(" "),s("ul",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:{name:"permiso.index"}}},[s("i",{staticClass:"feather icon-power"})])],1),t._v(" "),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:{name:"permiso.index"}}},[t._v("\n                                Navegar entre Permisos\n                            ")])],1)])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6"},[s("form",{staticClass:"form-inline",on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"form-group mx-sm-3 mb-2 fill"},[s("label",{staticClass:"sr-only"},[t._v("Buscar")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Buscar"},domProps:{value:t.filter},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.getListarPermisos(e))},input:function(e){e.target.composing||(t.filter=e.target.value)}}})]),t._v(" "),s("button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"btn btn-primary mb-2",attrs:{type:"button"},on:{"&click":function(e){return t.getListarPermisos(e)}}},[t._v("Buscar")])])]),t._v(" "),s("div",{staticClass:"col-sm-6"},[s("div",{staticClass:"btn-actions"},[t.listPermissions.includes("permiso.crear")?s("div",{staticClass:"btn-group card-option"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Nuevo Permiso",placement:"top"}},[s("router-link",{staticClass:"btn  btn-icon btn-outline-primary",attrs:{to:{name:"permiso.crear"}}},[s("i",{staticClass:"feather icon-plus"})])],1)],1):t._e()])])])]),t._v(" "),s("div",{staticClass:"card-body table-border-style"},[s("div",{staticClass:"table-responsive"},[t.listFilter.length?[s("table",{staticClass:"table table-hover"},[t._m(1),t._v(" "),s("tbody",t._l(t.listFilter,(function(e,a){return s("tr",{key:a},[s("td",{domProps:{textContent:t._s(e.name)}}),t._v(" "),s("td",{domProps:{textContent:t._s(e.slug)}}),t._v(" "),s("td",[t.listPermissions.includes("permiso.editar")?s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Editar Permiso",placement:"top"}},[s("router-link",{staticClass:"btn  btn-icon btn-outline-primary",attrs:{to:{name:"permiso.editar",params:{id:e.id}}}},[s("i",{staticClass:"feather icon-edit"})])],1):t._e()],1)])})),0)]),t._v(" "),s("el-pagination",{attrs:{background:"","current-page":t.currentPage1,"page-size":10,layout:"total, prev, pager, next",total:t.listPermisos.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage1=e},"update:current-page":function(e){t.currentPage1=e}}})]:[s("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[t._v("\n                                No se encontraron registros\n                            ")])]],2)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-title"},[e("h5",{staticClass:"m-b-10"},[this._v("Gestión Permisos")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Nombre")]),this._v(" "),e("th",[this._v("Url Amigable")]),this._v(" "),e("th",[this._v("Acciones")])])])}],!1,null,null,null);e.default=o.exports}}]);