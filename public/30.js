(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{376:function(t,e,r){"use strict";r.r(e);var a=r(2),i=r.n(a);function s(t,e,r,a,i,s,o){try{var n=t[s](o),c=n.value}catch(t){return void r(t)}n.done?e(c):Promise.resolve(c).then(a,i)}var o={data:function(){return{record:{name:""},fullscreenLoading:!1,error:0}},computed:{},methods:{limpiarCriterios:function(){this.record.name=""},setRegistrarTipomoneda:function(){var t,e=this;return(t=i.a.mark((function t(){var r,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.validarRegistrarTipomoneda()){t.next=2;break}return t.abrupt("return");case 2:return e.fullscreenLoading=!0,t.next=6,e.callApi("post","/configuracion/tipomoneda/store",e.record);case 6:if(200==(r=t.sent).status)e.notification("success","Registro creado con éxito",0),e.$router.push("/tipomoneda");else{if(422==r.status)for(a in r.data.errors)e.notification("error",r.data.errors[a][0]);401==r.status&&(e.$router.push({name:"login"}),location.reload(),localStorage.clear()),419==r.status&&(e.notification("error","Fue necesario recargar la página",0),location.reload())}e.fullscreenLoading=!1;case 9:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(a,i){var o=t.apply(e,r);function n(t){s(o,a,i,n,c,"next",t)}function c(t){s(o,a,i,n,c,"throw",t)}n(void 0)}))})()},validarRegistrarTipomoneda:function(){return this.error=0,this.record.name||(this.notification("error","El Tipo Persona es un campo obligatorio",0),this.error=1),this.error}}},n=r(14),c=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"pcoded-content"},[r("div",{staticClass:"page-header"},[r("div",{staticClass:"page-block"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-md-12"},[t._m(0),t._v(" "),r("ul",{staticClass:"breadcrumb"},[r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"tipomoneda.index"}}},[r("i",{staticClass:"fas fa-tasks"})])],1),t._v(" "),r("li",{staticClass:"breadcrumb-item"},[r("router-link",{attrs:{to:{name:"tipomoneda.crear"}}},[t._v("\n                                Crear Tipo\n                            ")])],1)])])])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"card"},[r("div",{staticClass:"card-header"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"btn-actions"},[r("div",{staticClass:"btn-group card-option"},[r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Regresar",placement:"top"}},[r("button",{staticClass:"btn btn-icon btn-outline-primary",on:{click:function(e){return e.preventDefault(),t.goBack(e)}}},[r("i",{staticClass:"fas fa-arrow-left"})])])],1)])])]),t._v(" "),r("div",{staticClass:"card-body"},[r("form",{on:{submit:function(t){t.preventDefault()}}},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"Nombre"}},[t._v("Nombre (*)")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.record.name,expression:"record.name"}],staticClass:"form-control",attrs:{type:"text",id:"Nombre",placeholder:"Nombre"},domProps:{value:t.record.name},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.setRegistrarTipomoneda(e)},input:function(e){e.target.composing||t.$set(t.record,"name",e.target.value)}}})])])]),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-sm-12"},[r("button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"btn btn-outline-primary has-ripple",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.setRegistrarTipomoneda(e)}}},[t._v("Guardar")]),t._v(" "),r("button",{staticClass:"btn btn-outline-info has-ripple ",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.limpiarCriterios(e)}}},[t._v("Limpiar")])])])])])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header-title"},[e("h5",{staticClass:"m-b-10"},[this._v("Gestión Tipomoneda")])])}],!1,null,null,null);e.default=c.exports}}]);