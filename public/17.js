(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{377:function(e,t,a){"use strict";a.r(t);var n=a(2),s=a.n(n);function i(e,t,a,n,s,i,r){try{var o=e[i](r),l=o.value}catch(e){return void a(e)}o.done?t(l):Promise.resolve(l).then(n,s)}var r={data:function(){return{filter:"",listFilter:[],listMensajes:[],fullscreenLoading:!1,currentPage1:1,page:0}},mounted:function(){this.getListarMensajes()},methods:{handleSizeChange:function(e){console.log("".concat(e," items per page"))},handleCurrentChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;this.page=e,0==e?e=0:e-=1;var t=10*e,a=t+10;this.listFilter=this.listMensajes.slice(t,a)},getListarMensajes:function(){var e,t=this;return(e=s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.fullscreenLoading=!0,e.next=4,t.callGetApi("get","/configuracion/mensaje/index",{filter:t.filter});case 4:200==(a=e.sent).status?(t.listMensajes=a.data,t.handleCurrentChange()):(401==a.status&&(t.$router.push({name:"login"}),location.reload(),localStorage.clear()),419==a.status&&(t.notification("error","Fue necesario recargar la página",0),location.reload())),t.fullscreenLoading=!1;case 7:case"end":return e.stop()}}),e)})),function(){var t=this,a=arguments;return new Promise((function(n,s){var r=e.apply(t,a);function o(e){i(r,n,s,o,l,"next",e)}function l(e){i(r,n,s,o,l,"throw",e)}o(void 0)}))})()},setEliminarMensaje:function(e){var t=this;this.$swal.fire({title:"¿Está seguro de eliminar el Mensaje Predeterminado?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#2196F3",cancelButtonColor:"#F44336",confirmButtonText:"Si, eliminar"}).then((function(a){if(a.value){t.fullscreenLoading=!0;var n="/configuracion/mensaje/destroy/"+e;axios.delete(n).then((function(e){t.notification("success","Se eliminó el Mensaje",0),t.getListarMensajes()})).catch((function(e){401==e.response.status&&(t.$router.push({name:"login"}),location.reload(),localStorage.clear(),t.fullscreenLoading=!1),419==e.response.status&&(t.notification("error","Fue necesario recargar la página",0),location.reload())}))}})),this.fullscreenLoading=!1}}},o=a(14),l=Object(o.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pcoded-content"},[a("div",{staticClass:"page-header"},[a("div",{staticClass:"page-block"},[a("div",{staticClass:"row align-items-center"},[a("div",{staticClass:"col-md-12"},[e._m(0),e._v(" "),a("ul",{staticClass:"breadcrumb"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"mensaje.predeterminado.index"}}},[a("i",{staticClass:"far fa-comment"})])],1),e._v(" "),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{attrs:{to:{name:"mensaje.predeterminado.index"}}},[e._v("\n                                Navegar entre Mensajes Predeterminados\n                            ")])],1)])])])])]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-6"},[a("form",{staticClass:"form-inline",on:{submit:function(e){e.preventDefault()}}},[a("div",{staticClass:"form-group mx-sm-3 mb-2 fill"},[a("label",{staticClass:"sr-only"},[e._v("Buscar")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Buscar"},domProps:{value:e.filter},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.getListarMensajes(t))},input:function(t){t.target.composing||(e.filter=t.target.value)}}})]),e._v(" "),a("button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"btn btn-primary mb-2",attrs:{type:"button"},on:{"&click":function(t){return e.getListarMensajes(t)}}},[e._v("Buscar")])])]),e._v(" "),a("div",{staticClass:"col-sm-6"},[a("div",{staticClass:"btn-actions"},[e.listPermissions.includes("mensaje.predeterminado.crear")?a("div",{staticClass:"btn-group card-option"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Nuevo Mensaje Predetermiando",placement:"top"}},[a("router-link",{staticClass:"btn  btn-icon btn-outline-primary",attrs:{to:{name:"mensaje.predeterminado.crear"}}},[a("i",{staticClass:"feather icon-plus"})])],1)],1):e._e()])])])]),e._v(" "),a("div",{staticClass:"card-body table-border-style"},[a("div",{staticClass:"table-responsive"},[e.listFilter.length?[a("table",{staticClass:"table table-hover"},[e._m(1),e._v(" "),a("tbody",e._l(e.listFilter,(function(t,n){return a("tr",{key:n},[a("td",{domProps:{textContent:e._s(t.message)}}),e._v(" "),a("td",[e.listPermissions.includes("mensaje.predeterminado.editar")?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Editar Mensaje Predetermiando",placement:"top"}},[a("router-link",{staticClass:"btn  btn-icon btn-outline-primary",attrs:{to:{name:"mensaje.predeterminado.editar",params:{id:t.id}}}},[a("i",{staticClass:"feather icon-edit"})])],1):e._e(),e._v(" "),e.listPermissions.includes("mensaje.predeterminado.eliminar")?a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Eliminar Mensaje Predeterminado",placement:"top"}},[a("button",{staticClass:"btn  btn-icon btn-outline-danger",on:{click:function(a){return a.preventDefault(),e.setEliminarMensaje(t.id)}}},[a("i",{staticClass:"fas fa-trash"})])]):e._e()],1)])})),0)]),e._v(" "),a("el-pagination",{attrs:{background:"","current-page":e.currentPage1,"page-size":10,layout:"total, prev, pager, next",total:e.listMensajes.length},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage1=t},"update:current-page":function(t){e.currentPage1=t}}})]:[a("div",{staticClass:"alert alert-primary",attrs:{role:"alert"}},[e._v("\n                                No se encontraron registros\n                            ")])]],2)])])])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"page-header-title"},[t("h5",{staticClass:"m-b-10"},[this._v("Gestión Mensajes Predeterminados")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Nombre")]),this._v(" "),t("th",[this._v("Acciones")])])])}],!1,null,null,null);t.default=l.exports}}]);