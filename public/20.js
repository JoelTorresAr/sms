(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/phone/createOrUpdate.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/phone/createOrUpdate.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      record: {
        id: '',
        phone_number: ''
      },
      fullscreenLoading: false,
      currentPage1: 1,
      error: 0
    };
  },
  mounted: function mounted() {
    this.getPhoneNumberById();
  },
  methods: {
    getPhoneNumberById: function getPhoneNumberById() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.fullscreenLoading = true;
                url = '/configuracion/telefono/show';
                _context.next = 4;
                return _this.callApi('get', url);

              case 4:
                res = _context.sent;

                if (res.status == 200) {
                  if (Object.keys(res.data).length > 0) {
                    _this.record.id = res.data.id;
                    _this.record.phone_number = res.data.phone_number;
                  }
                } else {
                  if (res.status == 401) {
                    _this.$router.push({
                      name: 'login'
                    });

                    location.reload();
                    localStorage.clear();
                  }

                  if (res.status == 419) {
                    _this.notification('error', 'Fue necesario recargar la página', 0);

                    location.reload();
                  }
                }

                _this.fullscreenLoading = false;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    limpiarCriterios: function limpiarCriterios() {
      this.record.phone_number = '';
    },
    setGuardarPhoneNumber: function setGuardarPhoneNumber() {
      if (!this.record.id) {
        this.setRegistrarAbout();
      } else {
        this.setEditarAbout();
      }
    },
    setRegistrarAbout: function setRegistrarAbout() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var url, res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_this2.validarRegistrarPhoneNumber()) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _this2.fullscreenLoading = true;
                url = '/configuracion/telefono/store';
                _context2.next = 6;
                return _this2.callApi('post', url, _this2.record);

              case 6:
                res = _context2.sent;

                if (res.status == 200) {
                  _this2.notification('success', 'Registro creado con éxito', 0);

                  _this2.getPhoneNumberById();
                } else {
                  if (res.status == 422) {
                    for (i in res.data.errors) {
                      _this2.notification('error', res.data.errors[i][0]);
                    }
                  }

                  if (res.status == 401) {
                    _this2.$router.push({
                      name: 'login'
                    });

                    location.reload();
                    localStorage.clear();
                  }

                  if (res.status == 419) {
                    _this2.notification('error', 'Fue necesario recargar la página', 0);

                    location.reload();
                  }
                }

                _this2.fullscreenLoading = false;

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    setEditarAbout: function setEditarAbout() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var url, res, i;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!_this3.validarRegistrarPhoneNumber()) {
                  _context3.next = 2;
                  break;
                }

                return _context3.abrupt("return");

              case 2:
                _this3.fullscreenLoading = true;
                url = '/configuracion/telefono/update/' + _this3.record.id;
                _context3.next = 6;
                return _this3.callApi('put', url, _this3.record);

              case 6:
                res = _context3.sent;

                if (res.status == 200) {
                  _this3.notification('success', 'Registro actualizado con éxito', 0);

                  _this3.getPhoneNumberById();
                } else {
                  if (res.status == 422) {
                    for (i in res.data.errors) {
                      _this3.notification('error', res.data.errors[i][0]);
                    }
                  }

                  if (res.status == 401) {
                    _this3.$router.push({
                      name: 'login'
                    });

                    location.reload();
                    localStorage.clear();
                  }

                  if (res.status == 419) {
                    _this3.notification('error', 'Fue necesario recargar la página', 0);

                    location.reload();
                  }
                }

                _this3.fullscreenLoading = false;

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    validarRegistrarPhoneNumber: function validarRegistrarPhoneNumber() {
      this.error = 0;

      if (!this.record.phone_number) {
        this.notification('error', 'El Teléfono Celular es un campo obligatorio', 0);
        this.error = 1;
      }

      return this.error;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/phone/createOrUpdate.vue?vue&type=template&id=7f5f9e98&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/phone/createOrUpdate.vue?vue&type=template&id=7f5f9e98& ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "pcoded-content" }, [
    _c("div", { staticClass: "page-header" }, [
      _c("div", { staticClass: "page-block" }, [
        _c("div", { staticClass: "row align-items-center" }, [
          _c("div", { staticClass: "col-md-12" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("ul", { staticClass: "breadcrumb" }, [
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "telefono.configurar" } } },
                    [_c("i", { staticClass: "fas fa-mobile-alt" })]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "telefono.configurar" } } },
                    [
                      _vm._v(
                        "\n                                Guardar Teléfono\n                            "
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-sm-12" }, [
        _c("div", { staticClass: "card" }, [
          _c("div", { staticClass: "card-header" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c(
                "div",
                { staticClass: "btn-actions" },
                [
                  _c(
                    "el-tooltip",
                    {
                      staticClass: "item",
                      attrs: {
                        effect: "dark",
                        content: "Regresar",
                        placement: "top"
                      }
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-icon btn-outline-primary",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.goBack($event)
                            }
                          }
                        },
                        [_c("i", { staticClass: "fas fa-arrow-left" })]
                      )
                    ]
                  )
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body" }, [
            _c(
              "form",
              {
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                  }
                }
              },
              [
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c("div", { staticClass: "form-group" }, [
                      _c("label", { attrs: { for: "PhoneNumber" } }, [
                        _vm._v("Teléfono Celular (*)")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.record.phone_number,
                            expression: "record.phone_number"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          id: "PhoneNumber",
                          placeholder: "PhoneNumber"
                        },
                        domProps: { value: _vm.record.phone_number },
                        on: {
                          keyup: function($event) {
                            if (
                              !$event.type.indexOf("key") &&
                              _vm._k(
                                $event.keyCode,
                                "enter",
                                13,
                                $event.key,
                                "Enter"
                              )
                            ) {
                              return null
                            }
                            return _vm.setGuardarPhoneNumber($event)
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.record,
                              "phone_number",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "loading",
                            rawName: "v-loading.fullscreen.lock",
                            value: _vm.fullscreenLoading,
                            expression: "fullscreenLoading",
                            modifiers: { fullscreen: true, lock: true }
                          }
                        ],
                        staticClass: "btn btn-outline-primary has-ripple",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.setGuardarPhoneNumber($event)
                          }
                        }
                      },
                      [_vm._v("Guardar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-outline-info has-ripple ",
                        attrs: { type: "button" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.limpiarCriterios($event)
                          }
                        }
                      },
                      [_vm._v("Limpiar")]
                    )
                  ])
                ])
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header-title" }, [
      _c("h5", { staticClass: "m-b-10" }, [_vm._v("Gestión Teléfono")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/phone/createOrUpdate.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/phone/createOrUpdate.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createOrUpdate_vue_vue_type_template_id_7f5f9e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createOrUpdate.vue?vue&type=template&id=7f5f9e98& */ "./resources/js/components/phone/createOrUpdate.vue?vue&type=template&id=7f5f9e98&");
/* harmony import */ var _createOrUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createOrUpdate.vue?vue&type=script&lang=js& */ "./resources/js/components/phone/createOrUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _createOrUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _createOrUpdate_vue_vue_type_template_id_7f5f9e98___WEBPACK_IMPORTED_MODULE_0__["render"],
  _createOrUpdate_vue_vue_type_template_id_7f5f9e98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/phone/createOrUpdate.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/phone/createOrUpdate.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/phone/createOrUpdate.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createOrUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./createOrUpdate.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/phone/createOrUpdate.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_createOrUpdate_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/phone/createOrUpdate.vue?vue&type=template&id=7f5f9e98&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/phone/createOrUpdate.vue?vue&type=template&id=7f5f9e98& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createOrUpdate_vue_vue_type_template_id_7f5f9e98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./createOrUpdate.vue?vue&type=template&id=7f5f9e98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/phone/createOrUpdate.vue?vue&type=template&id=7f5f9e98&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createOrUpdate_vue_vue_type_template_id_7f5f9e98___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_createOrUpdate_vue_vue_type_template_id_7f5f9e98___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);