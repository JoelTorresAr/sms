(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/role/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/role/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      filter: '',
      listFilter: [],
      listRoles: [],
      listPermisos: [],
      fullscreenLoading: false,
      currentPage1: 1,
      page: 0
    };
  },
  mounted: function mounted() {
    this.loadUser();
    this.getListarRoles();
  },
  methods: _objectSpread(_objectSpread({
    handleSizeChange: function handleSizeChange(val) {
      console.log("".concat(val, " items per page"));
    },
    handleCurrentChange: function handleCurrentChange() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      this.page = val;

      if (val == 0) {
        val = 0;
      } else {
        val = val - 1;
      }

      var inicio = val * 10,
          fin = inicio + 10;
      this.listFilter = this.listRoles.slice(inicio, fin);
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    attempt: 'usuario/attempt'
  })), {}, {
    loadUser: function loadUser() {
      var _this = this;

      this.attempt(localStorage.getItem('token')).then(function () {})["catch"](function (error) {
        if (error.response.status == 401) {
          _this.notification('error', error.response.data.error, 0);
        }
      })["finally"](function () {
        _this.fullscreenLoading = false;
      });
    },
    getListarRoles: function getListarRoles() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this2.fullscreenLoading = true;
                url = '/seguridad/rol/index';
                _context.next = 4;
                return _this2.callGetApi('get', url, {
                  'filter': _this2.filter
                });

              case 4:
                res = _context.sent;

                if (res.status == 200) {
                  _this2.listRoles = res.data;

                  _this2.handleCurrentChange();
                } else {
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

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/role/index.vue?vue&type=template&id=6d74fa04&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/role/index.vue?vue&type=template&id=6d74fa04& ***!
  \*************************************************************************************************************************************************************************************************************/
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
                  _c("router-link", { attrs: { to: { name: "rol.index" } } }, [
                    _c("i", { staticClass: "feather icon-unlock" })
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "breadcrumb-item" },
                [
                  _c("router-link", { attrs: { to: { name: "rol.index" } } }, [
                    _vm._v(
                      "\n                                Navegar entre Roles\n                            "
                    )
                  ])
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
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-sm-6" }, [
                _c(
                  "form",
                  {
                    staticClass: "form-inline",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                      }
                    }
                  },
                  [
                    _c("div", { staticClass: "form-group mx-sm-3 mb-2 fill" }, [
                      _c("label", { staticClass: "sr-only" }, [
                        _vm._v("Buscar")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.filter,
                            expression: "filter"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", placeholder: "Buscar" },
                        domProps: { value: _vm.filter },
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
                            $event.preventDefault()
                            return _vm.getListarRoles($event)
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.filter = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
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
                        staticClass: "btn btn-primary mb-2",
                        attrs: { type: "button" },
                        on: {
                          "&click": function($event) {
                            return _vm.getListarRoles($event)
                          }
                        }
                      },
                      [_vm._v("Buscar")]
                    )
                  ]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-sm-6" }, [
                _c("div", { staticClass: "btn-actions" }, [
                  _vm.listPermissions.includes("rol.crear")
                    ? _c(
                        "div",
                        { staticClass: "btn-group card-option" },
                        [
                          _c(
                            "el-tooltip",
                            {
                              staticClass: "item",
                              attrs: {
                                effect: "dark",
                                content: "Nuevo Rol",
                                placement: "top"
                              }
                            },
                            [
                              _c(
                                "router-link",
                                {
                                  staticClass:
                                    "btn  btn-icon btn-outline-primary",
                                  attrs: { to: { name: "rol.crear" } }
                                },
                                [_c("i", { staticClass: "feather icon-plus" })]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card-body table-border-style" }, [
            _c(
              "div",
              { staticClass: "table-responsive" },
              [
                _vm.listFilter.length
                  ? [
                      _c("table", { staticClass: "table table-hover" }, [
                        _vm._m(1),
                        _vm._v(" "),
                        _c(
                          "tbody",
                          _vm._l(_vm.listFilter, function(item, index) {
                            return _c("tr", { key: index }, [
                              _c("td", {
                                domProps: { textContent: _vm._s(item.name) }
                              }),
                              _vm._v(" "),
                              _c("td", {
                                domProps: { textContent: _vm._s(item.slug) }
                              }),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _vm.listPermissions.includes("rol.editar")
                                    ? _c(
                                        "el-tooltip",
                                        {
                                          staticClass: "item",
                                          attrs: {
                                            effect: "dark",
                                            content: "Editar Rol",
                                            placement: "top"
                                          }
                                        },
                                        [
                                          _c(
                                            "router-link",
                                            {
                                              staticClass:
                                                "btn  btn-icon btn-outline-primary",
                                              attrs: {
                                                to: {
                                                  name: "rol.editar",
                                                  params: { id: item.id }
                                                }
                                              }
                                            },
                                            [
                                              _c("i", {
                                                staticClass: "feather icon-edit"
                                              })
                                            ]
                                          )
                                        ],
                                        1
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ])
                          }),
                          0
                        )
                      ]),
                      _vm._v(" "),
                      _c("el-pagination", {
                        attrs: {
                          background: "",
                          "current-page": _vm.currentPage1,
                          "page-size": 10,
                          layout: "total, prev, pager, next",
                          total: _vm.listPermisos.length
                        },
                        on: {
                          "size-change": _vm.handleSizeChange,
                          "current-change": _vm.handleCurrentChange,
                          "update:currentPage": function($event) {
                            _vm.currentPage1 = $event
                          },
                          "update:current-page": function($event) {
                            _vm.currentPage1 = $event
                          }
                        }
                      })
                    ]
                  : [
                      _c(
                        "div",
                        {
                          staticClass: "alert alert-primary",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n                                No se encontraron registros\n                            "
                          )
                        ]
                      )
                    ]
              ],
              2
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
      _c("h5", { staticClass: "m-b-10" }, [_vm._v("Gestión Roles")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Nombre")]),
        _vm._v(" "),
        _c("th", [_vm._v("Url Amigable")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/role/index.vue":
/*!************************************************!*\
  !*** ./resources/js/components/role/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_6d74fa04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6d74fa04& */ "./resources/js/components/role/index.vue?vue&type=template&id=6d74fa04&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/role/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6d74fa04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_6d74fa04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/role/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/role/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/role/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/role/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/role/index.vue?vue&type=template&id=6d74fa04&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/role/index.vue?vue&type=template&id=6d74fa04& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d74fa04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=6d74fa04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/role/index.vue?vue&type=template&id=6d74fa04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d74fa04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6d74fa04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);