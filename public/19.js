(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{360:function(t,e,r){"use strict";r.r(e);var a=r(2),s=r.n(a);function i(t,e,r,a,s,i,o){try{var n=t[i](o),c=n.value}catch(t){return void r(t)}n.done?e(c):Promise.resolve(c).then(a,s)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(a,s){var o=t.apply(e,r);function n(t){i(o,a,s,n,c,"next",t)}function c(t){i(o,a,s,n,c,"throw",t)}n(void 0)}))}}var n={data:function(){return{record:{id:this.$attrs.id,name:"",slug:""},fullscreenLoading:!1,error:0}},mounted:function(){this.getPermisoById()},methods:{getPermisoById:function(){var t=this;return o(s.a.mark((function e(){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.fullscreenLoading=!0,r="/seguridad/permiso/show/"+t.record.id,e.next=4,t.callApi("get",r);case 4:200==(a=e.sent).status?(t.record.name=a.data.name,t.record.slug=a.data.slug,t.fullscreenLoading=!1):(401==a.status&&(t.$router.push({name:"login"}),location.reload(),localStorage.clear()),419==a.status&&(t.notification("error","Fue necesario recargar la página",0),location.reload())),t.fullscreenLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},limpiarCriterios:function(){this.record.name="",this.record.slug=""},setEditarPermiso:function(){var t=this;return o(s.a.mark((function e(){var r,a,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.validarEditarPermiso()){e.next=2;break}return e.abrupt("return");case 2:return t.fullscreenLoading=!0,r="/seguridad/permiso/update/"+t.record.id,e.next=6,t.callApi("put",r,t.record);case 6:if(200==(a=e.sent).status)t.notification("success","Registro actualizado con éxito",0),t.$router.push("/permiso");else{if(422==a.status)for(i in a.data.errors)t.notification("error",a.data.errors[i][0]);401==a.status&&(t.$router.push({name:"login"}),location.reload(),localStorage.clear()),419==a.status&&(t.notification("error","Fue necesario recargar la página",0),location.reload())}t.fullscreenLoading=!1;case 9:case"end":return e.stop()}}),e)})))()},validarEditarPermiso:function(){return this.error=0,this.record.name||(this.notification("error","El Nombre es un campo obligatorio",0),this.error=1),this.record.slug||(this.notification("error","La Url Amigable es un campo obligatorio",10),this.error=1),this.error}}},c=r(14),l=Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pcoded-content"},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"page-block"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-md-12"},[t._m(0),t._v(" "),r("ul",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"permiso.index"}}},[r("i",{staticClass:"feather icon-power"})])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"permiso.index"}}},[t._v("\n                                Editar Permiso\n                            ")])],1)])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"btn-actions"},[r("div",{staticClass:"btn-group card-option"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Regresar",placement:"top"}},[r("button",{staticClass:"btn btn-icon btn-outline-primary",on:{click:function(e){return e.preventDefault(),t.goBack(e)}}},[r("i",{staticClass:"fas fa-arrow-left"})])])],1)])])]),t._v(" "),r("div",{staticClass:"card-body"},[r("form",{on:{submit:function(t){t.preventDefault()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"Nombre"}},[t._v("Nombre (*)")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.record.name,expression:"record.name"}],staticClass:"form-control",attrs:{type:"text",id:"Nombre",placeholder:"Nombre"},domProps:{value:t.record.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setEditarPermiso(e)},input:function(e){e.target.composing||t.$set(t.record,"name",e.target.value)}}})])]),t._v(" "),r("div",{staticClass:"col-sm-6"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"Url"}},[t._v("Url Amigable (*)")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.record.slug,expression:"record.slug"}],staticClass:"form-control",attrs:{type:"text",for:"Url",placeholder:"Url Amigable"},domProps:{value:t.record.slug},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setEditarPermiso(e)},input:function(e){e.target.composing||t.$set(t.record,"slug",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"btn btn-outline-primary has-ripple",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.setEditarPermiso(e)}}},[t._v("Guardar")]),t._v(" "),r("button",{staticClass:"btn btn-outline-info has-ripple ",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.limpiarCriterios(e)}}},[t._v("Limpiar")])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-title"},[e("h5",{staticClass:"m-b-10"},[this._v("Gestión Permisos")])])}],!1,null,null,null);e.default=l.exports}}]);