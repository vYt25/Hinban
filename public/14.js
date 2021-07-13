(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/masterlist/Processes.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/masterlist/Processes.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_AxiosClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/js/AxiosClass */ "./resources/js/AxiosClass.js");
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
      booleanAdd: true,
      newVal: {},
      addDialog: false,
      "boolean": false,
      editDialog: false,
      filter: false,
      filterVar: {},
      process: [],
      pagination: {
        selected: 1,
        length: 0,
        visible: 5,
        perPage: 20
      },
      perPageOpt: [{
        cnt: 5
      }, {
        cnt: 10
      }, {
        cnt: 20
      }, {
        cnt: 50
      }],
      oldVal: {},
      currentVal: {},
      required: [function (value) {
        return !!value || 'Required';
      }]
    };
  },
  computed: {
    filterProcess: function filterProcess() {
      var _this = this;

      return this.process.filter(function (rec) {
        if (_this.filterVar.processCode != undefined) {
          return rec.processCode.toString().toLowerCase().includes(_this.filterVar.processCode.toLowerCase());
        } else {
          return rec;
        }
      }).filter(function (rec) {
        if (_this.filterVar.processName != undefined) {
          return rec.processName.toString().toLowerCase().includes(_this.filterVar.processName.toLowerCase());
        } else {
          return rec;
        }
      });
    },
    paginatedList: function paginatedList() {
      var processList = JSON.parse(JSON.stringify(this.filterProcess));
      this.paginationLength();
      return processList.splice((this.pagination.selected - 1) * this.pagination.perPage, this.pagination.perPage);
    }
  },
  created: function created() {
    this.fetchProcessFromLocalStorage();
  },
  methods: {
    handleUndoDelete: function handleUndoDelete(obj) {
      var _this2 = this;

      var i = this.process.findIndex(function (rec) {
        return rec.id === obj.id;
      });
      var lists = JSON.parse(localStorage.getItem('lists'));
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_0__["default"]("api/undoDeleteProcess", obj).postWithToken().then(function (res) {
        _this2.process[i].deleted_at = null;
        lists.process = _this2.process;
        localStorage.setItem('lists', JSON.stringify(lists));
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleDelete: function handleDelete(obj) {
      var _this3 = this;

      var i = this.process.findIndex(function (rec) {
        return rec.id === obj.id;
      });
      var lists = JSON.parse(localStorage.getItem('lists'));
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_0__["default"]("api/deleteProcess", obj).postWithToken().then(function (res) {
        _this3.process[i].deleted_at = res.data;
        lists.process = _this3.process;
        localStorage.setItem('lists', JSON.stringify(lists));
      })["catch"](function (err) {
        console.log(err);
      });
    },
    checkUpperCase: function checkUpperCase(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      return !(charCode >= 65 && charCode <= 90) ? evt.preventDefault() : true;
    },
    checkNumber: function checkNumber(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      return !(charCode < 48 || charCode > 57) ? true : evt.preventDefault();
    },
    checkAddDisabled: function checkAddDisabled() {
      if (this.newVal.processCode == null || this.newVal.processCode == '') {
        this.booleanAdd = true;
      } else if (this.newVal.processName == null || this.newVal.processName == '') {
        this.booleanAdd = true;
      } else {
        this.booleanAdd = false;
      }
    },
    handleAddSave: function handleAddSave() {
      var _this4 = this;

      var lists = JSON.parse(localStorage.getItem('lists'));
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_0__["default"]("api/addProcess", this.newVal).postWithToken().then(function (res) {
        _this4.process.push(res.data);

        lists.process = _this4.process;
        localStorage.setItem('lists', JSON.stringify(lists));
        _this4.addDialog = false;
        _this4.newVal = {};
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleAddCancel: function handleAddCancel() {
      this.newVal = {};
      this.addDialog = false;
    },
    checkDisabled: function checkDisabled() {
      if (this.currentVal.processCode == null || this.currentVal.processCode == '') {
        this["boolean"] = true;
      } else if (this.currentVal.processName == null || this.currentVal.processName == '') {
        this["boolean"] = true;
      } else {
        this["boolean"] = false;
      }
    },
    updatedValueSetter: function updatedValueSetter(i) {
      var newVal = JSON.parse(JSON.stringify(this.currentVal));
      this.$set(this.process[i], "processCode", newVal.processCode);
      this.$set(this.process[i], "processName", newVal.processName);
      var lists = JSON.parse(localStorage.getItem('lists'));
      lists.process = this.process;
      localStorage.setItem('lists', JSON.stringify(lists));
    },
    handleEditSave: function handleEditSave() {
      var _this5 = this;

      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_0__["default"]("api/updateProcess", this.currentVal).postWithToken().then(function (res) {
        _this5.editDialog = false;

        var i = _this5.process.findIndex(function (rec) {
          return rec.id === _this5.currentVal.id;
        });

        _this5.updatedValueSetter(i);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleEditCancel: function handleEditCancel() {
      var _this6 = this;

      this.editDialog = false;
      this.process[this.process.findIndex(function (rec) {
        return rec.id === _this6.oldVal.id;
      })] = JSON.parse(JSON.stringify(this.oldVal));
      this.currentVal = {};
    },
    handleEditDialog: function handleEditDialog(obj) {
      this["boolean"] = false;
      this.editDialog = true;
      this.oldVal = JSON.parse(JSON.stringify(obj));
      var obj = JSON.parse(JSON.stringify(obj));
      this.currentVal = obj;
    },
    paginationLength: function paginationLength() {
      var x = this.filterProcess.length / this.pagination.perPage;
      this.pagination.length = x % 1 != 0 ? parseInt(x.toString().split(".")[0]) + 1 : x;
    },
    fetchProcessFromLocalStorage: function fetchProcessFromLocalStorage() {
      this.process = JSON.parse(localStorage.getItem("lists")).process;
    },
    filterAction: function filterAction() {
      this.filter = !this.filter;

      if (this.filter == false) {
        this.filterVar.processCode = null;
        this.filterVar.processName = null;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/masterlist/Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/masterlist/Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".theme--light.v-data-table thead tr th[data-v-bb53a08e] {\n  background-color: #90a4ae;\n  color: white;\n}\n.col[data-v-bb53a08e],\n.col-1[data-v-bb53a08e],\n.col-2[data-v-bb53a08e],\n.col-3[data-v-bb53a08e],\n.col-4[data-v-bb53a08e],\n.col-5[data-v-bb53a08e],\n.col-6[data-v-bb53a08e],\n.col-7[data-v-bb53a08e],\n.col-8[data-v-bb53a08e],\n.col-9[data-v-bb53a08e],\n.col-10[data-v-bb53a08e],\n.col-11[data-v-bb53a08e],\n.col-12[data-v-bb53a08e],\n.col-auto[data-v-bb53a08e],\n.col-lg[data-v-bb53a08e],\n.col-lg-1[data-v-bb53a08e],\n.col-lg-2[data-v-bb53a08e],\n.col-lg-3[data-v-bb53a08e],\n.col-lg-4[data-v-bb53a08e],\n.col-lg-5[data-v-bb53a08e],\n.col-lg-6[data-v-bb53a08e],\n.col-lg-7[data-v-bb53a08e],\n.col-lg-8[data-v-bb53a08e],\n.col-lg-9[data-v-bb53a08e],\n.col-lg-10[data-v-bb53a08e],\n.col-lg-11[data-v-bb53a08e],\n.col-lg-12[data-v-bb53a08e],\n.col-lg-auto[data-v-bb53a08e],\n.col-md[data-v-bb53a08e],\n.col-md-1[data-v-bb53a08e],\n.col-md-2[data-v-bb53a08e],\n.col-md-3[data-v-bb53a08e],\n.col-md-4[data-v-bb53a08e],\n.col-md-5[data-v-bb53a08e],\n.col-md-6[data-v-bb53a08e],\n.col-md-7[data-v-bb53a08e],\n.col-md-8[data-v-bb53a08e],\n.col-md-9[data-v-bb53a08e],\n.col-md-10[data-v-bb53a08e],\n.col-md-11[data-v-bb53a08e],\n.col-md-12[data-v-bb53a08e],\n.col-md-auto[data-v-bb53a08e],\n.col-sm[data-v-bb53a08e],\n.col-sm-1[data-v-bb53a08e],\n.col-sm-2[data-v-bb53a08e],\n.col-sm-3[data-v-bb53a08e],\n.col-sm-4[data-v-bb53a08e],\n.col-sm-5[data-v-bb53a08e],\n.col-sm-6[data-v-bb53a08e],\n.col-sm-7[data-v-bb53a08e],\n.col-sm-8[data-v-bb53a08e],\n.col-sm-9[data-v-bb53a08e],\n.col-sm-10[data-v-bb53a08e],\n.col-sm-11[data-v-bb53a08e],\n.col-sm-12[data-v-bb53a08e],\n.col-sm-auto[data-v-bb53a08e],\n.col-xl[data-v-bb53a08e],\n.col-xl-1[data-v-bb53a08e],\n.col-xl-2[data-v-bb53a08e],\n.col-xl-3[data-v-bb53a08e],\n.col-xl-4[data-v-bb53a08e],\n.col-xl-5[data-v-bb53a08e],\n.col-xl-6[data-v-bb53a08e],\n.col-xl-7[data-v-bb53a08e],\n.col-xl-8[data-v-bb53a08e],\n.col-xl-9[data-v-bb53a08e],\n.col-xl-10[data-v-bb53a08e],\n.col-xl-11[data-v-bb53a08e],\n.col-xl-12[data-v-bb53a08e],\n.col-xl-auto[data-v-bb53a08e] {\n  padding-top: 3px;\n  padding-bottom: 3px;\n  padding-left: 10px;\n  padding-right: 10px;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/masterlist/Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/masterlist/Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/masterlist/Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/masterlist/Processes.vue?vue&type=template&id=bb53a08e&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/masterlist/Processes.vue?vue&type=template&id=bb53a08e&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-tooltip",
        {
          attrs: { left: "" },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      {
                        attrs: {
                          fab: "",
                          fixed: "",
                          bottom: "",
                          right: "",
                          color: "#66BB6A"
                        },
                        on: {
                          click: function($event) {
                            _vm.addDialog = true
                          }
                        }
                      },
                      on
                    ),
                    [
                      _c("v-icon", { staticStyle: { color: "white" } }, [
                        _vm._v("mdi-plus")
                      ])
                    ],
                    1
                  )
                ]
              }
            }
          ])
        },
        [_vm._v(" "), _c("span", [_vm._v("Add Process")])]
      ),
      _vm._v(" "),
      _c(
        "v-card",
        { attrs: { width: "100%" } },
        [
          _c(
            "v-col",
            { staticStyle: { height: "60px" }, attrs: { cols: "12" } },
            [
              _c(
                "v-row",
                { attrs: { rows: "10" } },
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "1" } },
                    [
                      _c(
                        "v-row",
                        { staticClass: "ml-1" },
                        [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { right: "" },
                              scopedSlots: _vm._u([
                                {
                                  key: "activator",
                                  fn: function(ref) {
                                    var on = ref.on
                                    return [
                                      _c(
                                        "v-btn",
                                        _vm._g(
                                          {
                                            staticClass: "mt-1",
                                            attrs: { icon: "" },
                                            on: {
                                              click: function($event) {
                                                return _vm.filterAction()
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c(
                                            "v-icon",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: !_vm.filter,
                                                  expression: "!filter"
                                                }
                                              ]
                                            },
                                            [_vm._v("mdi-filter")]
                                          ),
                                          _vm._v(" "),
                                          _c(
                                            "v-icon",
                                            {
                                              directives: [
                                                {
                                                  name: "show",
                                                  rawName: "v-show",
                                                  value: _vm.filter,
                                                  expression: "filter"
                                                }
                                              ]
                                            },
                                            [_vm._v("mdi-filter-remove")]
                                          )
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.filter,
                                      expression: "!filter"
                                    }
                                  ]
                                },
                                [_vm._v("Filter")]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: _vm.filter,
                                      expression: "filter"
                                    }
                                  ]
                                },
                                [_vm._v("Remove Filter")]
                              )
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.filter
                    ? _c(
                        "v-col",
                        { attrs: { cols: "12", md: "11", sm: "11" } },
                        [
                          _c(
                            "v-row",
                            { attrs: { cols: "12", md: "3", sm: "3" } },
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "2", sm: "2" } },
                                [
                                  _c("v-text-field", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.filter,
                                        expression: "filter"
                                      }
                                    ],
                                    attrs: {
                                      "hide-details": "",
                                      clearable: "",
                                      label: "Process Code",
                                      outlined: "",
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.filterVar.processCode,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filterVar,
                                          "processCode",
                                          $$v
                                        )
                                      },
                                      expression: "filterVar.processCode"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "2", sm: "2" } },
                                [
                                  _c("v-text-field", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.filter,
                                        expression: "filter"
                                      }
                                    ],
                                    attrs: {
                                      "hide-details": "",
                                      clearable: "",
                                      label: "Process Name(Eng)",
                                      outlined: "",
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.filterVar.processName,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filterVar,
                                          "processName",
                                          $$v
                                        )
                                      },
                                      expression: "filterVar.processName"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-simple-table",
                { attrs: { dense: "", "fixed-header": "", height: "70vh" } },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th", [_vm._v("Process Code")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Process Name (Eng)")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("ACTION")])
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.paginatedList, function(pro, index) {
                      return _c("tr", { key: index }, [
                        _c("td", [_vm._v(_vm._s(pro.processCode))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(pro.processName))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            _c(
                              "v-row",
                              { attrs: { cols: "12", justify: "center" } },
                              [
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { right: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            pro.deleted_at ==
                                                            null,
                                                          expression:
                                                            "pro.deleted_at == null"
                                                        }
                                                      ],
                                                      attrs: {
                                                        icon: "",
                                                        small: "",
                                                        color: "primary"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.handleEditDialog(
                                                            pro
                                                          )
                                                        }
                                                      }
                                                    },
                                                    "v-btn",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { attrs: { small: "" } },
                                                    [_vm._v("mdi-pencil")]
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [_vm._v(" "), _c("span", [_vm._v("Edit")])]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { right: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            pro.deleted_at ==
                                                            null,
                                                          expression:
                                                            "pro.deleted_at == null"
                                                        }
                                                      ],
                                                      attrs: {
                                                        icon: "",
                                                        small: "",
                                                        color: "error"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.handleDelete(
                                                            pro
                                                          )
                                                        }
                                                      }
                                                    },
                                                    "v-btn",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { attrs: { small: "" } },
                                                    [_vm._v("mdi-delete")]
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [_vm._v(" "), _c("span", [_vm._v("Edit")])]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-tooltip",
                                  {
                                    attrs: { right: "" },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "activator",
                                          fn: function(ref) {
                                            var on = ref.on
                                            var attrs = ref.attrs
                                            return [
                                              _c(
                                                "v-btn",
                                                _vm._g(
                                                  _vm._b(
                                                    {
                                                      directives: [
                                                        {
                                                          name: "show",
                                                          rawName: "v-show",
                                                          value:
                                                            pro.deleted_at !=
                                                            null,
                                                          expression:
                                                            "pro.deleted_at != null"
                                                        }
                                                      ],
                                                      attrs: {
                                                        icon: "",
                                                        small: "",
                                                        color: "success"
                                                      },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          return _vm.handleUndoDelete(
                                                            pro
                                                          )
                                                        }
                                                      }
                                                    },
                                                    "v-btn",
                                                    attrs,
                                                    false
                                                  ),
                                                  on
                                                ),
                                                [
                                                  _c(
                                                    "v-icon",
                                                    { attrs: { small: "" } },
                                                    [
                                                      _vm._v(
                                                        "mdi-delete-restore"
                                                      )
                                                    ]
                                                  )
                                                ],
                                                1
                                              )
                                            ]
                                          }
                                        }
                                      ],
                                      null,
                                      true
                                    )
                                  },
                                  [_vm._v(" "), _c("span", [_vm._v("Edit")])]
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-row",
                { staticStyle: { "margin-top": "1vh" } },
                [
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", md: "1", sm: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          dense: "",
                          items: _vm.perPageOpt,
                          "item-text": "cnt",
                          "item-value": "cnt",
                          label: "Per page"
                        },
                        on: {
                          change: function($event) {
                            return _vm.paginationLength()
                          }
                        },
                        model: {
                          value: _vm.pagination.perPage,
                          callback: function($$v) {
                            _vm.$set(_vm.pagination, "perPage", $$v)
                          },
                          expression: "pagination.perPage"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "6", md: "5", sm: "5" } },
                    [
                      _c("v-pagination", {
                        attrs: {
                          circle: "",
                          "total-visible": _vm.pagination.visible,
                          length: _vm.pagination.length,
                          "prev-icon": "mdi-menu-left",
                          "next-icon": "mdi-menu-right"
                        },
                        model: {
                          value: _vm.pagination.selected,
                          callback: function($$v) {
                            _vm.$set(_vm.pagination, "selected", $$v)
                          },
                          expression: "pagination.selected"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "600px" },
              model: {
                value: _vm.editDialog,
                callback: function($$v) {
                  _vm.editDialog = $$v
                },
                expression: "editDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Edit Process")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Division Code*",
                                      dense: "",
                                      rules: _vm.required
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.checkDisabled()
                                      }
                                    },
                                    model: {
                                      value: _vm.currentVal.processCode,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.currentVal,
                                          "processCode",
                                          $$v
                                        )
                                      },
                                      expression: "currentVal.processCode"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Division Name*",
                                      dense: "",
                                      rules: _vm.required
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.checkDisabled()
                                      }
                                    },
                                    model: {
                                      value: _vm.currentVal.processName,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.currentVal,
                                          "processName",
                                          $$v
                                        )
                                      },
                                      expression: "currentVal.processName"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("small", [_vm._v("*indicates required field")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.handleEditCancel()
                            }
                          }
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "blue darken-1",
                            text: "",
                            disabled: _vm.boolean
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleEditSave()
                            }
                          }
                        },
                        [_vm._v("Save")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-row",
        { attrs: { justify: "center" } },
        [
          _c(
            "v-dialog",
            {
              attrs: { persistent: "", "max-width": "600px" },
              model: {
                value: _vm.addDialog,
                callback: function($$v) {
                  _vm.addDialog = $$v
                },
                expression: "addDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [
                    _c("span", { staticClass: "headline" }, [
                      _vm._v("Add Process")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "v-card-text",
                    [
                      _c(
                        "v-container",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Process Code*",
                                      dense: "",
                                      rules: _vm.required
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.checkAddDisabled()
                                      },
                                      keypress: function($event) {
                                        return _vm.checkUpperCase($event)
                                      }
                                    },
                                    model: {
                                      value: _vm.newVal.processCode,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newVal, "processCode", $$v)
                                      },
                                      expression: "newVal.processCode"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", sm: "12", md: "12" } },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Process Name*",
                                      dense: "",
                                      rules: _vm.required
                                    },
                                    on: {
                                      keyup: function($event) {
                                        return _vm.checkAddDisabled()
                                      },
                                      keypress: function($event) {
                                        return _vm.checkUpperCase($event)
                                      }
                                    },
                                    model: {
                                      value: _vm.newVal.processName,
                                      callback: function($$v) {
                                        _vm.$set(_vm.newVal, "processName", $$v)
                                      },
                                      expression: "newVal.processName"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("small", [_vm._v("*indicates required field")])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.handleAddCancel()
                            }
                          }
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: {
                            color: "blue darken-1",
                            text: "",
                            disabled: _vm.booleanAdd
                          },
                          on: {
                            click: function($event) {
                              return _vm.handleAddSave()
                            }
                          }
                        },
                        [_vm._v("Save")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/masterlist/Processes.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/masterlist/Processes.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Processes_vue_vue_type_template_id_bb53a08e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Processes.vue?vue&type=template&id=bb53a08e&scoped=true& */ "./resources/js/components/masterlist/Processes.vue?vue&type=template&id=bb53a08e&scoped=true&");
/* harmony import */ var _Processes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Processes.vue?vue&type=script&lang=js& */ "./resources/js/components/masterlist/Processes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Processes_vue_vue_type_style_index_0_id_bb53a08e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true& */ "./resources/js/components/masterlist/Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Processes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Processes_vue_vue_type_template_id_bb53a08e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Processes_vue_vue_type_template_id_bb53a08e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "bb53a08e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/masterlist/Processes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/masterlist/Processes.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/masterlist/Processes.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Processes.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/masterlist/Processes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/masterlist/Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/components/masterlist/Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_style_index_0_id_bb53a08e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/masterlist/Processes.vue?vue&type=style&index=0&id=bb53a08e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_style_index_0_id_bb53a08e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_style_index_0_id_bb53a08e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_style_index_0_id_bb53a08e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_style_index_0_id_bb53a08e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_style_index_0_id_bb53a08e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/masterlist/Processes.vue?vue&type=template&id=bb53a08e&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/masterlist/Processes.vue?vue&type=template&id=bb53a08e&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_template_id_bb53a08e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Processes.vue?vue&type=template&id=bb53a08e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/masterlist/Processes.vue?vue&type=template&id=bb53a08e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_template_id_bb53a08e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Processes_vue_vue_type_template_id_bb53a08e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);