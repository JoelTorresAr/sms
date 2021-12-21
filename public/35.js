(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{367:function(t,r,s){"use strict";s.r(r);var e=s(2),a=s.n(e);function i(t,r,s,e,a,i,o){try{var n=t[i](o),c=n.value}catch(t){return void s(t)}n.done?r(c):Promise.resolve(c).then(e,a)}function o(t){return function(){var r=this,s=arguments;return new Promise((function(e,a){var o=t.apply(r,s);function n(t){i(o,e,a,n,c,"next",t)}function c(t){i(o,e,a,n,c,"throw",t)}n(void 0)}))}}var n={data:function(){return{record:{id:this.$attrs.id,permisos:[]},listPermisos:[],fullscreenLoading:!1,error:0}},mounted:function(){this.getListarPermisos(),this.getUserById()},methods:{limpiarCriterios:function(){this.record.permisos=[]},getListarPermisos:function(){var t=this;return o(a.a.mark((function r(){var s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.fullscreenLoading=!0,"/seguridad/permiso/index",r.next=4,t.callApi("get","/seguridad/permiso/index");case 4:200==(s=r.sent).status?t.listPermisos=s.data:(401==s.status&&(t.$router.push({name:"login"}),location.reload(),localStorage.clear()),419==s.status&&(t.notification("error","Fue necesario recargar la página",0),location.reload())),t.fullscreenLoading=!1;case 7:case"end":return r.stop()}}),r)})))()},getUserById:function(){var t=this;return o(a.a.mark((function r(){var s,e;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.fullscreenLoading=!0,s="/seguridad/usuario/show/"+t.record.id,r.next=4,t.callApi("get",s);case 4:200==(e=r.sent).status?t.setDataUserById(e.data.permissions):(401==e.status&&(t.$router.push({name:"login"}),location.reload(),localStorage.clear()),419==e.status&&(t.notification("error","Fue necesario recargar la página",0),location.reload())),t.fullscreenLoading=!1;case 7:case"end":return r.stop()}}),r)})))()},setDataUserById:function(t){if(t){var r=this,s=t;s.length>0&&s.map((function(t,s){r.record.permisos.push(t.id)}))}},setRegistrarPermisoByUsuario:function(){var t=this;return o(a.a.mark((function r(){var s,e;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t.validarRegistrarPermisosByUsuario()){r.next=2;break}return r.abrupt("return");case 2:return"/seguridad/usuario/permission",r.next=5,t.callApi("post","/seguridad/usuario/permission",t.record);case 5:if(200==(s=r.sent).status)t.notification("success","Permisos asignados con éxito",0),t.$router.push("/usuario");else{if(422==s.status)for(e in s.data.errors)t.notification("error",s.data.errors[e][0]);401==s.status&&(t.$router.push({name:"login"}),location.reload(),localStorage.clear()),419==s.status&&(t.notification("error","Fue necesario recargar la página",0),location.reload())}t.fullscreenLoading=!0;case 8:case"end":return r.stop()}}),r)})))()},validarRegistrarPermisosByUsuario:function(){return this.error=0,this.mensajeError=[],this.record.permisos&&0!=this.record.permisos.length||(this.notification("error","Debe seleccionar al menos un Permiso",15),this.error=1),this.error}}},c=s(14),l=Object(c.a)(n,(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("div",{staticClass:"pcoded-content"},[s("div",{staticClass:"page-header"},[s("div",{staticClass:"page-block"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col-md-12"},[t._m(0),t._v(" "),s("ul",{staticClass:"breadcrumb"},[s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:{name:"usuario.index"}}},[s("i",{staticClass:"fas fa-key"})])],1),t._v(" "),s("li",{staticClass:"breadcrumb-item"},[s("router-link",{attrs:{to:{name:"usuario.index"}}},[t._v("\n                                Gestionar Permisos del Usuario\n                            ")])],1)])])])])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"btn-actions"},[s("div",{staticClass:"btn-group card-option"},[s("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Regresar",placement:"top"}},[s("button",{staticClass:"btn btn-icon btn-outline-primary",on:{click:function(r){return r.preventDefault(),t.goBack(r)}}},[s("i",{staticClass:"fas fa-arrow-left"})])])],1)])])]),t._v(" "),s("div",{staticClass:"card-body"},[s("form",{on:{submit:function(t){t.preventDefault()}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("div",{staticClass:"form-group"},[s("label",{attrs:{for:"Asingar Permisos"}},[t._v("Asingar Permisos (*)")]),t._v(" "),s("el-select",{attrs:{multiple:"",placeholder:"Asingar Permisos",filterable:""},model:{value:t.record.permisos,callback:function(r){t.$set(t.record,"permisos",r)},expression:"record.permisos"}},t._l(t.listPermisos,(function(t){return s("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})})),1)],1)])]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-12"},[s("button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"btn btn-outline-primary has-ripple",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.setRegistrarPermisoByUsuario(r)}}},[t._v("Guardar")]),t._v(" "),s("button",{staticClass:"btn btn-outline-info has-ripple ",attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),t.limpiarCriterios(r)}}},[t._v("Limpiar")])])])])])])])])])}),[function(){var t=this.$createElement,r=this._self._c||t;return r("div",{staticClass:"page-header-title"},[r("h5",{staticClass:"m-b-10"},[this._v("Gestión Usuarios")])])}],!1,null,"380a2c6c",null);r.default=l.exports}}]);