(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/log/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/log/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
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
      listLogs: [],
      modalLog: false,
      record: {
        json: ''
      },
      fullscreenLoading: false,
      currentPage1: 1,
      page: 0
    };
  },
  filters: {
    pretty: function pretty(value) {
      if (value) {
        return JSON.stringify(JSON.parse(value), null, 2);
      }

      return '';
    }
  },
  mounted: function mounted() {
    this.getListarLogs();
  },
  methods: {
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
      this.listFilter = this.listLogs.slice(inicio, fin);
    },
    getListarLogs: function getListarLogs() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var url, res, response;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.fullscreenLoading = true;
                url = '/seguridad/log/index';
                _context.next = 4;
                return _this.callGetApi('get', url, {
                  'filter': _this.filter
                });

              case 4:
                res = _context.sent;
                _this.listLogs = [];

                if (res.status == 200) {
                  response = res.data;

                  if (Object.keys(response).length > 0) {
                    response.forEach(function (element) {
                      _this.listLogs.push({
                        'id': element.id,
                        'model': element.model,
                        'description': element.description,
                        'response': element.response,
                        'user_id': element.user_id,
                        'user_name': element.user ? element.user.name : 'Generado por migración',
                        'fecha': moment(element.created_at).format('YYYY-MM-DD hh:mm')
                      });
                    });
                  }

                  _this.handleCurrentChange();
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

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    abrirModalByOption: function abrirModalByOption(modulo, accion, data) {
      switch (modulo) {
        case "log":
          {
            switch (accion) {
              case "ver":
                {
                  //Setear información del arreglo
                  this.record.json = data.response;
                  this.modalLog = true;
                }
                break;

              default:
                break;
            }
          }
          break;

        default:
          break;
      }
    },
    abrirModal: function abrirModal() {
      this.modalLog = !this.modalLog;
      this.limpiarModal();
    },
    limpiarModal: function limpiarModal() {
      this.record.json = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/log/index.vue?vue&type=template&id=f671e5e8&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/log/index.vue?vue&type=template&id=f671e5e8& ***!
  \************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "pcoded-content" },
    [
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
                      { attrs: { to: { name: "log.index" } } },
                      [_c("i", { staticClass: "feather icon-power" })]
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
                      { attrs: { to: { name: "log.index" } } },
                      [
                        _vm._v(
                          "\n                                Navegar entre Logs\n                            "
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
                      _c(
                        "div",
                        { staticClass: "form-group mx-sm-3 mb-2 fill" },
                        [
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
                                return _vm.getListarLogs($event)
                              },
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.filter = $event.target.value
                              }
                            }
                          })
                        ]
                      ),
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
                              return _vm.getListarLogs($event)
                            }
                          }
                        },
                        [_vm._v("Buscar")]
                      )
                    ]
                  )
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
                                  domProps: {
                                    textContent: _vm._s(item.user_name)
                                  }
                                }),
                                _vm._v(" "),
                                _c("td", {
                                  domProps: {
                                    textContent: _vm._s(item.description)
                                  }
                                }),
                                _vm._v(" "),
                                _c("td", {
                                  domProps: { textContent: _vm._s(item.fecha) }
                                }),
                                _vm._v(" "),
                                _c(
                                  "td",
                                  [
                                    _c(
                                      "el-tooltip",
                                      {
                                        staticClass: "item",
                                        attrs: {
                                          effect: "dark",
                                          content: "Ver Detalle",
                                          placement: "top"
                                        }
                                      },
                                      [
                                        _c(
                                          "button",
                                          {
                                            staticClass:
                                              "btn  btn-icon btn-outline-primary",
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                                return _vm.abrirModalByOption(
                                                  "log",
                                                  "ver",
                                                  item
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("i", {
                                              staticClass: "fas fa-eye"
                                            })
                                          ]
                                        )
                                      ]
                                    )
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
                            total: _vm.listLogs.length
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
      ]),
      _vm._v(" "),
      _c(
        "el-dialog",
        {
          attrs: {
            title: "Detalle de la Acción",
            visible: _vm.modalLog,
            width: "85%",
            "close-on-click-modal": false
          },
          on: {
            "update:visible": function($event) {
              _vm.modalLog = $event
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-sm-12" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body table-border-style" }, [
                  _c("pre", [_vm._v(_vm._s(_vm._f("pretty")(_vm.record.json)))])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "dialog-footer",
              attrs: { slot: "footer" },
              slot: "footer"
            },
            [
              _c("el-button", { on: { click: _vm.abrirModal } }, [
                _vm._v("Cerrar")
              ])
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "page-header-title" }, [
      _c("h5", { staticClass: "m-b-10" }, [_vm._v("Gestión de Logs")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Usuario")]),
        _vm._v(" "),
        _c("th", [_vm._v("Proceso")]),
        _vm._v(" "),
        _c("th", [_vm._v("Fecha")]),
        _vm._v(" "),
        _c("th", [_vm._v("Acciones")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/log/index.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/log/index.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_f671e5e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f671e5e8& */ "./resources/js/components/log/index.vue?vue&type=template&id=f671e5e8&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/log/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_f671e5e8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_f671e5e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/log/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/log/index.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/log/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/log/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/log/index.vue?vue&type=template&id=f671e5e8&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/log/index.vue?vue&type=template&id=f671e5e8& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f671e5e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=f671e5e8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/log/index.vue?vue&type=template&id=f671e5e8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f671e5e8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f671e5e8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);