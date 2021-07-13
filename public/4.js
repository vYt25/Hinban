(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyHinban.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MyHinban.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handsontable_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @handsontable/vue */ "./node_modules/@handsontable/vue/es/vue-handsontable.js");
/* harmony import */ var handsontable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! handsontable */ "./node_modules/handsontable/es/index.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/js/AxiosClass */ "./resources/js/AxiosClass.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      hinbanBatchObject: {},
      tabs: [{
        name: "WaitingForApproval"
      }, {
        name: "ForApproval"
      }, {
        name: "Approved"
      }, {
        name: "Disapproved"
      }, {
        name: "ForExport"
      }],
      tab: "tab-1",
      showAttachmentDialog: false,
      logisticsDisapproveDialog: false,
      revisionReasonDialog: false,
      filterVar: {
        "class": null,
        shipmentWeek: null,
        shipmentYear: null,
        manufactureName: null,
        applicant: null,
        status: null
      },
      hotData: [],
      disapprovalDialog: false,
      disapprovalDialogData: null,
      revisionDialog: false,
      dialogVisible: false,
      revisionDialogData: null,
      imagePathForPreview: null,
      hotSettings: {
        readOnly: true,
        lists: null,
        licenseKey: "non-commercial-and-evaluation",
        autoRowSize: true,
        data: null,
        // autoColumnSize: true,
        contextMenu: ["remove_row"],
        manualColumnResize: true,
        allowEmpty: false,
        height: "75vh",
        fixedColumnsLeft: 1,
        fillHandle: {
          direction: "vertical",
          autoInsertRow: false
        },
        columns: [{
          title: "HINBAN",
          data: "hinbanCode",
          validator: "duplicate-validator",
          width: 400
        }, {
          title: "CLR",
          type: "dropdown",
          source: null,
          data: "color",
          width: 200
        }, {
          title: "HINBAN NAME (JAPANESE)",
          data: "hinbanNameJp",
          width: 220
        }, {
          title: "HINBAN NAME",
          data: "hinbanName",
          width: 150
        }, {
          title: "SIZE_L",
          data: "sizeL",
          width: 70
        }, {
          title: "SIZE_W",
          data: "sizeW",
          width: 70
        }, {
          title: "SIZE_H",
          data: "sizeH",
          width: 70
        }, {
          title: "CBM",
          data: "cbmQty",
          width: 90,
          readOnly: true
        }, {
          title: "KGS",
          data: "kgQty",
          width: 100,
          type: "numeric",
          numericFormat: {
            pattern: "0.000"
          }
        }, {
          title: "PRICE ¥",
          data: "unitPrc",
          width: 150
        }, {
          title: "UNIT",
          type: "dropdown",
          data: "unit",
          source: null,
          width: 200
        }, {
          title: "MAERIAL CODE",
          type: "dropdown",
          data: "matCd",
          source: null,
          width: 200
        }, {
          title: "CATEGORY",
          type: "dropdown",
          data: "catCd",
          source: null,
          width: 200
        }, {
          title: "REQUEST KIND",
          data: "reqKind",
          type: "dropdown",
          source: null,
          width: 300
        }, {
          title: "REQUEST KIND NO",
          data: "reqKindNo",
          readonly: true,
          width: 200
        }, {
          title: "PRODUCT DIVISION",
          data: "p_div_cd",
          readOnly: true,
          width: 170
        }, {
          title: "EXPORT DIVISION",
          data: "e_div_cd",
          readOnly: true,
          width: 170
        }, {
          title: "PROCESSING COUNTRY",
          data: "useFor",
          type: "dropdown",
          source: null,
          width: 200
        }, {
          title: "MANUFACTURE NAME",
          data: "manufactureName",
          source: null,
          width: 200
        }, {
          title: "USAGE DESCRIPTION",
          data: "description",
          width: 200
        }, {
          title: "PROCESSING STEP DESCRIPTION",
          data: "processingDescription",
          source: null,
          width: 275
        }, {
          title: "HS CODE",
          data: "hsCode",
          readOnly: true,
          width: 200
        }, {
          title: "PROCESS FLAG",
          data: "processFlag",
          type: "dropdown",
          readOnly: true,
          width: 300
        }, {
          title: "GROUP CODE",
          data: "groupCode",
          readOnly: true,
          width: 200
        }, // {
        //     title: "ATTACHMENT",
        //     data: 'insert',
        //     renderer: "html",
        //     className: "htCenter htMiddle",
        //     width: 120,
        //     readOnly: true
        // },
        {
          title: "PRE-VIEW",
          data: "preview",
          renderer: "html",
          width: 200,
          className: "htCenter htMiddle preivew",
          readOnly: true
        }],
        beforeChangeRender: function beforeChangeRender(changes, source) {},
        afterChange: function afterChange(changes, source) {
          var lists = JSON.parse(localStorage.getItem("lists"));

          if (changes != null) {
            for (var x = 0; x < changes.length; x++) {
              if (changes[x][1] == "hinban") {
                if (changes[x][2] != changes[x][3]) {
                  this.setDataAtRowProp(changes[x][0], "hinban", changes[x][3].toUpperCase());
                }
              }

              if (changes[x][1] == "clr") {
                if (changes[x][2] != changes[x][3]) {
                  var clr = lists.color.filter(function (rec) {
                    return rec.CLR_CD.toLowerCase() == changes[x][3].toLowerCase();
                  });

                  if (clr.length == 1) {
                    this.setDataAtRowProp(changes[x][0], "clr", "".concat(clr[0].CLR_CD, "/").concat(clr[0].CLR_NM_JP));
                  }
                }
              }

              if (changes[x][1] == "unit") {
                if (changes[x][2] != changes[x][3]) {
                  var unit = lists.unit.filter(function (rec) {
                    return rec.UNIT_CD == parseInt(changes[x][3]);
                  });

                  if (unit.length == 1) {
                    this.setDataAtRowProp(changes[x][0], "unit", "".concat(unit[0].UNIT_CD, "/").concat(unit[0].UNIT_PLURAL));
                  }
                }
              }

              if (changes[x][1] == "mat_cd") {
                if (changes[x][2] != changes[x][3]) {
                  var material = lists.material.filter(function (rec) {
                    return rec.MAT_CD == changes[x][3];
                  });

                  if (material.length == 1) {
                    this.setDataAtRowProp(changes[x][0], "mat_cd", "".concat(material[0].MAT_CD, "/").concat(material[0].MAT_NM_JP));
                  }
                }
              }

              if (changes[x][1] == "cat_cd") {
                if (changes[x][2] != changes[x][3]) {
                  var category = lists.category.filter(function (rec) {
                    return rec.CAT_CD == changes[x][3];
                  });

                  if (category.length == 1) {
                    this.setDataAtRowProp(changes[x][0], "cat_cd", "".concat(category[0].CAT_CD, "/").concat(category[0].CAT_NM_JP));
                    this.setDataAtRowProp(changes[x][0], 'p_div_cd', "".concat(category[0].DIV_CD, "/").concat(category[0].DIV_NM));
                    this.setDataAtRowProp(changes[x][0], 'e_div_cd', "".concat(category[0].DIV_CD, "/").concat(category[0].COM_CD));
                  }
                }
              }

              if (changes[x][1] == "unit_prc") {
                if (changes[x][2] != changes[x][3]) {
                  this.setDataAtRowProp(changes[x][0], "unit_prc", parseInt(changes[x][3]));
                }
              }

              if (changes[x][1] == "size_l" || changes[x][1] == "size_w" || changes[x][1] == "size_h") {
                var l = this.getDataAtRowProp(changes[x][0], "size_l") != "" ? parseFloat(this.getDataAtRowProp(changes[x][0], "size_l")) : 0;
                var w = this.getDataAtRowProp(changes[x][0], "size_w") != "" ? parseFloat(this.getDataAtRowProp(changes[x][0], "size_w")) : 0;
                var h = this.getDataAtRowProp(changes[x][0], "size_h") != "" ? parseFloat(this.getDataAtRowProp(changes[x][0], "size_h")) : 0;
                var t = l * w * h / 1000000000;

                if (t > 0) {
                  this.setDataAtRowProp(changes[x][0], "cbm_qty", t.toFixed(4));
                }
              }

              if (changes[x][1] == "req_kind") {
                if (changes[x][2] != changes[x][3]) {
                  var value = lists.requestKind.filter(function (rec) {
                    if (changes[x][3].includes('/')) {
                      if (changes[x][3].split("/").length == 3) {
                        return rec.REQ_KIND_DTL_NAME_JP == changes[x][3].split("/")[1] + "/" + changes[x][3].split("/")[2];
                      } else {
                        return rec.REQ_KIND_DTL_NAME_JP == changes[x][3].split("/")[1];
                      }
                    } else {
                      return rec.REQ_KIND_CD == changes[x][3].toUpperCase();
                    }
                  });
                  this.setDataAtRowProp(changes[x][0], 'req_kind_no', value[0].REQ_KIND_NO);
                  this.setDataAtRowProp(changes[x][0], 'req_kind', "".concat(value[0].REQ_KIND_CD, "/").concat(value[0].REQ_KIND_DTL_NAME_JP));
                }
              }
            }
          }

          this.validateCells();
        }
      },
      rules: {
        email: [function (v) {
          return /.+@.+/.test(v) || "Invalid Email Address";
        }],
        required: [function (value) {
          return !!value || "Required";
        }],
        year: [function (x) {
          return /^(?![01]|20[01])\d{4}$/.test(x) || "Invalid Year Format";
        }]
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
      dialog: false,
      hinbans: [],
      overlay: true,
      filter: false,
      filterValues: {},
      scrollbarSettings: {
        maxScrollbarLength: 60
      },
      pagination: {
        selected: 1,
        length: 0,
        visible: 5,
        perPage: 10
      },
      hinbanDetails: {},
      edit: false,
      temp: {
        hinbanDetails: null,
        hotData: null
      }
    };
  },
  computed: {
    emptyFieldChecker: function emptyFieldChecker() {
      return this.hotData.filter(function (rec) {
        return rec.hsCode == null || rec.processFlag == "" || rec.groupCode == null;
      }).length != 0;
    },
    yearList: function yearList() {
      return this.$store.getters["getYearList"];
    },
    userAccessFilter: function userAccessFilter() {
      var _this = this;

      var hinbanList = JSON.parse(JSON.stringify(this.hinbans));
      return hinbanList.filter(function (each) {
        if (each.rights == 3 && each.rndJaRecieve == 0) {
          each.status = "For Recieve(RND)";
        }

        if (each.rights == 2 && each["class"] == "A" && !each.approverRecieve) {
          each.status = "For Recieve(Mr. President)";
        }

        if (each.rights == 2 && each["class"] == "A" && each.approverRecieve) {
          each.status = "For Approve(Mr. President)";
        }

        if (each.rights == 3 && each.rndJaRecieve == 1) {
          each.status = "For Approval(RND)";
        }

        if (each.rights == 3 && each.rndJaApproval == 1 || !each.logisticsRecieve && each.rndJaApproval == 1 || each["class"] == "A" && each.classAApproval == 1) {
          each.status = "For Recieve(Logistics)";
        }

        if (each.logisticsRecieve && each.rndJaApproval == 1) {
          each.status = "For Review(Logistics)";
        }

        if (each.logisticsFields == 1 && each.ntsField == 0) {
          each.status = "Approved By Logistics";
        }

        if (each.logisticsFields == 1 && each.ntsField == 1 && each.toCsv == 0) {
          each.status = "For Export CSV";
        }

        if (each.logisticsFields == 1 && each.ntsField == 1 && each.toCsv == 1) {
          each.status = "Exported To CSV";
        }

        if (each.rndJaApproval == 2) {
          each.status = "Disapproved";
        }

        if (each.logisticsFields == 2) {
          each.status = "Disapproved(Logistics)";
        }

        if (each.classAApproval == 2) {
          each.status = "Disapproved(Class A)";
        }

        var approval = null; ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //                                                            LOGISTICS VIEWING                                                           //
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // console.log(this.$store.state.user.user.employeeId != '0041')

        if (_this.$store.state.user.user.rights == 1 && _this.$store.state.user.user.id != each.rndJaApprover && _this.$store.state.user.user.id != 99) {
          if (_this.tab == "ForApproval") {
            return each.rndJaApproval == 1 && each.logisticsFields == null && each["class"] == 'C' && (each.logisticsRecievedBy == _this.$store.state.user.user.id || each.logisticsRecievedBy == null) || each["class"] == "A" && each.classAApproval == 1 && each.logisticsFields == null;
          }

          if (_this.tab == "ForExport") {
            return each.ntsField == 1 && each.toCsv == 0;
          } ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //                                                              ENCODER VIEWING                                                           //
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        } else if ((_this.$store.state.user.user.id == each.rndJaApprover || _this.$store.state.user.user.id == each.encodedBy) && _this.$store.state.user.user.rights == 3) {
          if (_this.tab == "WaitingForApproval") {
            return each.rndJaApproval == 0 && each.logisticsFields != 1 && each.classAApproval == null;
          }

          if (_this.tab == "Approved") {
            return each.rndJaApproval == 1;
          }

          if (_this.tab == "Disapproved") {
            console.log(each.rndJaApproval == 2 || each.logisticsFields == 2);
            return each.rndJaApproval == 2 || each.logisticsFields == 2;
          } // if (this.tab == "All") {
          //   return each.logisticsFields == 1 && each.ntsField == 1;
          // }
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //                                                            CLASS A APPROVER VIEWING                                                    //
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        } else if (_this.$store.state.user.user.id == 99) {
          if (_this.tab == "ForApproval") {
            console.log(each.classAApproval == 0);
            return each["class"] == "A" && each.classAApproval == 0 && each.logisticsFields != 2;
          } // }
          // if (this.tab == "Approved") {
          //   return each.class == "A" && each.classAApproval == 1;
          // }
          // if (this.tab == "Disapproved") {
          //   return each.class == "A" && each.classAApproval == 2;
          // }
          // if (this.tab == "All") {
          //   return each.logisticsFields == 1 && each.ntsField == 1;
          // }
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //                                                            RND APPROVER VIEWING                                                        //
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        } else if (_this.$store.state.user.user.rights == 2) {
          if (_this.tab == "WaitingForApproval") {
            return each.encodedBy == _this.$store.state.user.user.id && each.logisticsFields == null && each.rndJaApproval == 1 && each.classAApproval != 2;
          }

          if (_this.tab == "ForApproval") {
            return each.rndJaApproval == 0 && each.rndJaApprover == _this.$store.state.user.user.id && each.logisticsFields != 2 && each["class"] == 'C';
          }

          if (_this.tab == "Approved") {
            return each.logisticsFields == 1 && each.rndJaApprover == _this.$store.state.user.user.id && each.ntsField == 1;
          }

          if (_this.tab == "Disapproved") {
            return each.encodedBy == _this.$store.state.user.user.id && each.classAApproval == 2 || each.encodedBy == _this.$store.state.user.user.id && each.logisticsFields == 2 || each.encodedBy == _this.$store.state.user.user.id && each.ntsField == 2;
          } // if (this.tab == "All") {
          //   return each.logisticsFields == 1 && each.ntsField == 1;
          // }
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //                                                            NTS VIEWING                                                                 //
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        } else if (_this.$store.state.user.user.rights == 4) {
          if (_this.tab == "ForApproval") {
            return each.logisticsFields == 1 && each.ntsField == 0;
          } // if (this.tab == "All") {
          //   return each.logisticsFields == 1 && each.ntsField == 1;
          // }

        }
      });
    },
    hinbanFilter: function hinbanFilter() {
      var _this2 = this;

      var hinbanList = JSON.parse(JSON.stringify(this.userAccessFilter));
      return hinbanList.filter(function (rec) {
        if (_this2.filterVar.hinbanId != null && _this2.filterVar.hinbanId != "") {
          return rec.hinbanId.toLowerCase().includes(_this2.filterVar.hinbanId.toLowerCase());
        } else {
          return rec;
        }
      }).filter(function (rec) {
        if (_this2.filterVar["class"] != null && _this2.filterVar["class"] != "") {
          return rec["class"] == _this2.filterVar["class"];
        } else {
          return rec;
        }
      }).filter(function (rec) {
        if (_this2.filterVar.shipmentWeek != null && _this2.filterVar.shipmentWeek != "") {
          return rec.shipmentWeek == _this2.filterVar.shipmentWeek;
        } else {
          return rec;
        }
      }).filter(function (rec) {
        if (_this2.filterVar.shipmentYear != null && _this2.filterVar.shipmentYear != "") {
          return rec.shipmentYear == _this2.filterVar.shipmentYear;
        } else {
          return rec;
        }
      }).filter(function (rec) {
        if (_this2.filterVar.applicant != null && _this2.filterVar.applicant != "") {
          return rec.fullName.toLowerCase().includes(_this2.filterVar.applicant.toLowerCase());
        } else {
          return rec;
        }
      });
    },
    paginatedList: function paginatedList() {
      var hinbanList = JSON.parse(JSON.stringify(this.hinbanFilter));
      this.paginationLength();
      return hinbanList.splice((this.pagination.selected - 1) * this.pagination.perPage, this.pagination.perPage);
    },
    weekNos: function weekNos() {
      var weeks = [];

      for (var x = 1; x <= 52; x++) {
        weeks.push(x);
      }

      return weeks;
    }
  },
  watch: {
    hinbans: {
      deep: true,
      handler: function handler(hinbans) {}
    }
  },
  created: function created() {
    var _this3 = this;

    this.getHinbanAll();
    this.$EventBus.$on('updateHinbanList', function (data) {
      _this3.updateHinbanList(data);
    });
    this.$EventBus.$on('recieveHinbanByRndToggle', function (data) {
      _this3.recieveHinbanByRndToggle(data); // this.updateHinbans(data)

    });
    this.$EventBus.$on('hinbanApprovalByRndJa', function (data) {
      _this3.hinbanApprovalByRndJa(data); // this.updateHinbans(data)

    });
    this.$EventBus.$on('hinbanRevisionByLocalStaff', function (data) {
      _this3.hinbanRevisionByLocalStaff(data); // this.updateHinbans(data)

    });
    this.$EventBus.$on('recieveHinbanByLogisticsToggle', function (data) {
      _this3.recieveHinbanByLogisticsToggle(data); // this.updateHinbans(data)

    });
    this.$EventBus.$on('recieveHinbanByClassAApproverToggle', function (data) {
      _this3.recieveHinbanByClassAApproverToggle(data); // this.updateHinbans(data)

    });
    this.$EventBus.$on('hinbanApprovalbyClassAApprover', function (data) {
      data.val.classAApproval == 1 ? _this3.hinbanApproveByClassAApprover(data) : _this3.hinbanDisapproveByClassAApprover(data); // this.updateHinbans(data)
    });
    this.$EventBus.$on('hinbanApprovalByLogistics', function (data) {
      data.val.logisticsApproval == 1 ? _this3.hinbanApproveByLogistics(data) : _this3.hinbanDisapproveByLogistics(data); // this.updateHinbans(data)
    });
    this.$EventBus.$on('hinbanApproveByNts', function (data) {
      _this3.updateHinbans(data);
    });
  },
  methods: {
    updateHinbans: function updateHinbans(data) {
      var _this4 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      });
      this.getBatchObject(data).then(function (res) {
        _this4.$set(_this4.hinbans, index, res.data);
      });
    },
    hinbanDisapproveByLogistics: function hinbanDisapproveByLogistics(data) {
      var _this5 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      });
      this.getBatchObject(data).then(function (res) {
        _this5.$set(_this5.hinbans, index, res.data);
      });
    },
    hinbanApproveByLogistics: function hinbanApproveByLogistics(data) {
      var _this6 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      }); // this.hinbans[index].logisticsFields = 1;

      this.getBatchObject(data).then(function (res) {
        _this6.$set(_this6.hinbans, index, res.data);
      });
    },
    updateDisaproveClassA: function updateDisaproveClassA() {
      var _this7 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === _this7.hinbanDetails.id;
      });
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/disapprovalClassA", {
        id: this.hinbanDetails.id,
        approval: 2,
        reason: this.hinbanDetails.logisticsDisapproveReason,
        user: this.$store.state.user.user.id
      }).postWithToken().then(function (res) {
        _this7.logisticsDisapproveDialog = false;
        _this7.dialog = false;

        _this7.$socket.emit('hinban-approval-by-class-a-approver', {
          val: {
            id: _this7.hinbans[index].id,
            hinbanId: _this7.hinbans[index].hinbanId,
            classAApproval: 2
          },
          user: "".concat(_this7.$store.state.user.user.firstName, " ").concat(_this7.$store.state.user.user.lastName)
        });
      }).then(function (err) {
        console.log(err);
      });
    },
    hinbanDisapproveByClassAApprover: function hinbanDisapproveByClassAApprover(data) {
      var _this8 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      }); // this.hinbans[index].classAApproval = 2;
      // this.hinbans[index].classARecieve = 0;

      this.getBatchObject(data).then(function (res) {
        _this8.$set(_this8.hinbans, index, res.data);
      });
    },
    hinbanApproveByClassAApprover: function hinbanApproveByClassAApprover(data) {
      var _this9 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      }); // this.$set( this.hinbans[index] , 'classAApproval' , 1 )
      // this.$set( this.hinbans[index] , 'rndJAApproval', 1 )

      this.getBatchObject(data).then(function (res) {
        _this9.$set(_this9.hinbans, index, res.data);
      });
    },
    recieveHinbanByClassAApproverToggle: function recieveHinbanByClassAApproverToggle(data) {
      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      });

      if (this.hinbanDetails.id == data.val.id) {
        if (data.val.classARecieve) {
          this.information(data);
        }

        if (!this.hotSettings.readOnly) {
          this.hotSettings.readOnly = true;
        }

        this.$set(this.hinbanDetails, 'classARecieve', data.val.classARecieve ? 1 : 0);
        this.$set(this.hinbanDetails, 'approverRecieve', data.val.classARecieve);
      }

      this.$set(this.hinbans[index], 'classARecieve', data.val.classARecieve ? 1 : 0);
      this.$set(this.hinbans[index], 'approverRecieve', data.val.classARecieve); // this.getBatchObject(data).then(res=>{
      //   this.$set(this.hinbans, index, res.data)
      // })
    },
    recieveHinbanByLogisticsToggle: function recieveHinbanByLogisticsToggle(data) {
      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      });

      if (this.hinbanDetails.id == data.val.id) {
        if (data.val.recieveByLogisics) {
          this.information(data);
        }

        if (!this.hotSettings.readOnly) {
          this.hotSettings.readOnly = true;
        }

        this.$set(this.hinbanDetails, 'logisticsRecieve', data.val.recieveByLogisics);
      }

      this.$set(this.hinbans[index], 'logisticsRecieve', data.val.recieveByLogisics); // this.getBatchObject(data).then(res=>{
      //   this.$set(this.hinbans, index, res.data)
      // })
    },
    updateHinbanList: function updateHinbanList(data) {
      var _this10 = this;

      this.getBatchObject(data).then(function (res) {
        _this10.hinbans.unshift(res.data);
      });
    },
    hinbanRevisionByLocalStaff: function hinbanRevisionByLocalStaff(data) {
      var _this11 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      });
      this.getBatchObject(data).then(function (res) {
        _this11.$set(_this11.hinbans, index, res.data);
      });
    },
    information: function information(data) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        title: 'Information',
        text: 'This Hinban was recieved by the Approver and would be no longer editable.',
        icon: 'info'
      });
    },
    hinbanApprovalByRndJa: function hinbanApprovalByRndJa(data) {
      var _this12 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      }); // this.hinbans[index].rndJaApproval = data.val.approval ? 1 : 2

      this.getBatchObject(data).then(function (res) {
        _this12.$set(_this12.hinbans, index, res.data);
      });
    },
    recieveHinbanByRndToggle: function recieveHinbanByRndToggle(data) {
      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === data.val.id;
      });

      if (this.hinbanDetails.id == data.val.id) {
        this.hinbanDetails.approverRecieve = data.val.approverRecieve;
        this.hinbanDetails.rndJaRecieve = data.val.approverRecieve ? 1 : 0;

        if (data.val.approverRecieve) {
          this.information(data);
        }

        if (!this.hotSettings.readOnly) {
          this.hotSettings.readOnly = true;
        }
      }

      this.hinbans[index].approverRecieve = data.val.approverRecieve;
      this.hinbans[index].rndJaRecieve = data.val.approverRecieve ? 1 : 0; // this.getBatchObject(data).then(res=>{
      //   this.$set(this.hinbans, index, res.data)
      // })
    },
    getBatchObject: function getBatchObject(data) {
      var query = new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/getBatchObject", {
        id: data.val.id
      }).postWithToken();
      return query;
    },
    closeDialog: function closeDialog() {
      this.dialog = false;
      this.hinbanDetails = {};
    },
    handleNtsApprove: function handleNtsApprove() {
      var _this13 = this;

      var hinbanDetails = JSON.parse(JSON.stringify(this.hinbanDetails));
      hinbanDetails.items = this.hotData;
      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === hinbanDetails.id;
      });
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/ntsApproval", hinbanDetails).postWithToken().then(function (res) {
        _this13.$socket.emit('hinban-approve-by-nts', {
          val: {
            id: _this13.hinbans[index].id,
            hinbanId: _this13.hinbans[index].hinbanId
          },
          user: "".concat(_this13.$store.state.user.user.firstName, " ").concat(_this13.$store.state.user.user.lastName)
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    showDisapprovalDialog: function showDisapprovalDialog(id) {
      this.getDisapprovalList(id);
    },
    getDisapprovalList: function getDisapprovalList(id) {
      var _this14 = this;

      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/getDisapprovalList", {
        id: id
      }).postWithToken().then(function (res) {
        _this14.disapprovalDialogData = res.data;
        _this14.disapprovalDialog = true;
      })["catch"](function (err) {
        _this14.notificationError(err);
      });
    },
    updateDisaproveClassALogistics: function updateDisaproveClassALogistics(approval) {
      var _this15 = this;

      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/updateDisaproveClassALogistics", {
        id: this.hinbanDetails.id,
        approval: approval,
        reason: this.hinbanDetails.logisticsDisapproveReason,
        user: this.$store.state.user.user.id
      }).postWithToken().then(function (res) {
        var index = _this15.hinbans.findIndex(function (hinban) {
          return hinban.id === _this15.hinbanDetails.id;
        });

        _this15.getHinbanAll();

        _this15.notificationSuccess("Hinban Disapproved!");

        _this15.logisticsDisapproveDialog = false;
        _this15.dialog = false;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    updateClassAApproval: function updateClassAApproval(approval) {
      var _this16 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === _this16.hinbanDetails.id;
      });
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/approvalClassA", {
        id: this.hinbanDetails.id,
        approval: approval,
        reason: this.hinbanDetails.logisticsDisapproveReason,
        user: this.$store.state.user.user.id
      }).postWithToken().then(function (res) {
        // var index = this.hinbans.findIndex(hinban => hinban.id === this.hinbanDetails.id);
        // approval == 1 ? this.notificationSuccess("Hinban Approved!") : this.notificationSuccess("Hinban Disapproved!");
        // this.getHinbanAll();
        _this16.logisticsDisapproveDialog = false;
        _this16.dialog = false;

        _this16.$socket.emit('hinban-approval-by-class-a-approver', {
          val: {
            id: _this16.hinbans[index].id,
            hinbanId: _this16.hinbans[index].hinbanId,
            classAApproval: approval
          },
          user: "".concat(_this16.$store.state.user.user.firstName, " ").concat(_this16.$store.state.user.user.lastName)
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleApprovalClassA: function handleApprovalClassA(approval) {
      if (approval == 1) {
        this.updateClassAApproval(approval);
      } else {
        this.logisticsDisapproveDialog = true;
      }
    },
    handleRecieveByClassAApprover: function handleRecieveByClassAApprover(id, status) {
      var _this17 = this;

      // console.log(id, status);
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/classARecieve", {
        id: id,
        status: status
      }).postWithToken().then(function (res) {
        var index = _this17.hinbans.findIndex(function (hinban) {
          return hinban.id === id;
        }); // this.hinbans[index].classARecieve = status ? 1 : 0;
        // this.hinbans[index].approverRecieve = status;


        _this17.$socket.emit('hinban-recieve-by-class-a-approver', {
          val: {
            id: _this17.hinbans[index].id,
            hinbanId: _this17.hinbans[index].hinbanId,
            classARecieve: status
          },
          user: "".concat(_this17.$store.state.user.user.firstName, " ").concat(_this17.$store.state.user.user.lastName)
        });
      })["catch"](function (err) {
        console.log(err);
      });
    },
    viewBatchAttachment: function viewBatchAttachment(filename) {
      console.log(filename);
      var filePath = filename.split("/");
      filePath[0] = "batch_attachment";
      window.open(filePath.join("/"));
    },
    updateDisapprovedByLogistics: function updateDisapprovedByLogistics() {
      var _this18 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === _this18.hinbanDetails.id;
      });
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/disapproveByLogistics", {
        id: this.hinbanDetails.id,
        disapproveReason: this.hinbanDetails.logisticsDisapproveReason,
        user: this.$store.state.user.user.id
      }).postWithToken().then(function (res) {
        // this.hinbans[index].logisticsRecieve = false;
        // this.hinbans[index].rndJaApproval = 0;
        // this.hinbans[index].logisticsFields = 2;
        // this.notificationSuccess("Hinban Disapproved!");
        // this.getHinbanAll();
        _this18.$socket.emit('hinban-approval-by-logistics', {
          val: {
            id: _this18.hinbans[index].id,
            hinbanId: _this18.hinbans[index].hinbanId,
            logisticsApproval: 2,
            reason: _this18.hinbanDetails.logisticsDisapproveReason
          },
          user: "".concat(_this18.$store.state.user.user.firstName, " ").concat(_this18.$store.state.user.user.lastName)
        });

        _this18.dialog = false;
        _this18.logisticsDisapproveDialog = false;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleDisapproveByLogistics: function handleDisapproveByLogistics() {
      this.logisticsDisapproveDialog = true;
    },
    handleRndJAActions: function handleRndJAActions(approval) {
      var _this19 = this;

      var val = approval == 0 ? 2 : 1;
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/rndJaActions", {
        approval: val,
        id: this.hinbanDetails.id,
        approver: this.$store.state.user.user.id
      }).postWithToken().then(function (res) {
        var index = _this19.hinbans.findIndex(function (hinban) {
          return hinban.id === _this19.hinbanDetails.id;
        }); // this.hinbans[index].rndJaApproval = val;
        // this.getHinbanAll();
        // val == 1 ? this.notificationSuccess("Hinban Approved!") : this.notificationSuccess("Hinban Disapproved!");


        _this19.dialog = false;

        _this19.$socket.emit('hinban-approval-by-rnd-ja', {
          val: {
            id: _this19.hinbans[index].id,
            hinbanId: _this19.hinbans[index].hinbanId,
            approval: val == 0 ? false : true
          },
          user: "".concat(_this19.$store.state.user.user.firstName, " ").concat(_this19.$store.state.user.user.lastName)
        });
      })["catch"](function (err) {
        _this19.notificationError(err);
      });
    },
    handleRecieveByRndJa: function handleRecieveByRndJa(i, toggle) {
      var _this20 = this;

      this.$store.state.linearLoader = true;
      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === i;
      });
      this.hinbans[index].rndJaRecieve = toggle ? 1 : 0;
      this.hinbans[index].approverRecieve = toggle;
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/rndJaRecieveHinban", {
        id: i,
        status: toggle == true ? 1 : 0
      }).postWithToken().then(function (res) {
        _this20.$store.state.linearLoader = false;

        _this20.$socket.emit('recieve-hinban-by-rnd-ja', {
          val: {
            id: _this20.hinbans[index].id,
            hinbanId: _this20.hinbans[index].hinbanId,
            approverRecieve: _this20.hinbans[index].approverRecieve
          },
          user: "".concat(_this20.$store.state.user.user.firstName, " ").concat(_this20.$store.state.user.user.lastName)
        });
      })["catch"](function (err) {
        _this20.notificationError(err);
      });
    },
    notificationSuccess: function notificationSuccess(msg) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Success", msg, "success");
    },
    notificationError: function notificationError(msg) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        icon: "error",
        title: "Error",
        text: msg // footer: '<a href>Why do I have this issue?</a>'

      });
    },
    handleEditCancel: function handleEditCancel() {
      this.hotData = this.temp.hotData;
      this.hinbanDetails = this.temp.hinbanDetails;
      this.$refs.myTable.hotInstance.updateSettings({
        readOnly: true
      });
      this.hotSettings.readOnly = true;
    },
    handleUpdateByLogistics: function handleUpdateByLogistics() {
      var _this21 = this;

      var index = this.hinbans.findIndex(function (hinban) {
        return hinban.id === _this21.hinbanDetails.id;
      });
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/updateHinbanFieldsByLogistics", {
        data: {
          id: this.hinbanDetails.id,
          updatedBy: this.$store.state.user.user.id,
          items: this.hotData
        }
      }).postWithToken().then(function (res) {
        // this.notificationSuccess("The Hinban can now be exported!");
        _this21.dialog = false; // this.getHinbanAll();

        _this21.$socket.emit('hinban-approval-by-logistics', {
          val: {
            id: _this21.hinbans[index].id,
            hinbanId: _this21.hinbans[index].hinbanId,
            logisticsApproval: 1,
            reason: null
          },
          user: "".concat(_this21.$store.state.user.user.firstName, " ").concat(_this21.$store.state.user.user.lastName)
        });
      })["catch"](function (err) {
        _this21.notificationError(err);
      });
    },
    handleEventEdit: function handleEventEdit() {
      this.temp.hinbanDetails = JSON.parse(JSON.stringify(this.hinbanDetails));
      this.temp.hotData = JSON.parse(JSON.stringify(this.hotData));
      this.hotSettings.readOnly = false;
      this.$refs.myTable.hotInstance.updateSettings({
        readOnly: false
      });
    },
    filterAction: function filterAction() {
      this.filter = !this.filter;

      if (this.filter == false) {
        this.filterVar["class"] = null;
        this.filterVar.shipmentWeek = null;
        this.filterVar.shipmentYear = null;
        this.filterVar.manufactureName = null;
        this.filterVar.applicant = null;
      }
    },
    exportToCsv: function exportToCsv(id) {
      window.open("api/export?id=" + id);
    },
    showRevisionDialog: function showRevisionDialog(id) {
      this.getRevisionList(id);
    },
    getRevisionList: function getRevisionList(id) {
      var _this22 = this;

      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/getRevisionList", {
        data: {
          id: id
        }
      }).postWithToken().then(function (res) {
        _this22.revisionDialogData = res.data;
        _this22.revisionDialog = true;
      })["catch"](function (err) {
        _this22.notificationError(err);
      });
    },
    recieveHinbanByLogistics: function recieveHinbanByLogistics(id, status) {
      var _this23 = this;

      this.$store.state.linearLoader = true;
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]('api/recieveHinbanByLogistics', {
        data: {
          id: id,
          status: status,
          logisticsRecievedBy: this.$store.state.user.user.id
        }
      }).postWithToken().then(function (res) {
        var index = _this23.hinbans.findIndex(function (hinban) {
          return hinban.id === id;
        }); // this.hinbans[index].logisticsRecieve = status;


        _this23.$store.state.linearLoader = false;

        _this23.$socket.emit('recieve-hinban-by-logistics', {
          val: {
            id: id,
            hinbanId: _this23.hinbans[index].hinbanId,
            recieveByLogisics: status
          },
          user: "".concat(_this23.$store.state.user.user.firstName, " ").concat(_this23.$store.state.user.user.lastName)
        });
      })["catch"](function (err) {
        _this23.notificationError(err);
      });
    },
    updateRecords: function updateRecords() {
      var _this24 = this;

      this.$refs.revisionReasonForm.validate();

      if (this.hinbanDetails.revisionReason != null) {
        new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]('api/updateHinban', {
          data: {
            details: this.hinbanDetails,
            items: this.hotData
          }
        }).postWithToken().then(function (res) {
          // this.getHinbanAll();
          // this.dialog = false;
          // this.notificationSuccess("The Record was Updated");
          // this.hotSettings.readOnly = true;
          // this.revisionReasonDialog = false;
          _this24.$socket.emit('hinban-revision-by-localstaff', {
            val: {
              id: _this24.hinbanDetails.id,
              hinbanId: _this24.hinbanDetails.hinbanId,
              revisionReason: _this24.hinbanDetails.revisionReason
            },
            user: "".concat(_this24.$store.state.user.user.firstName, " ").concat(_this24.$store.state.user.user.lastName)
          });

          _this24.hotSettings.readOnly = true;
          _this24.revisionReasonDialog = false;
          _this24.dialog = false;
          _this24.hinbanDetails = {};
        })["catch"](function (err) {
          _this24.notificationError(err);
        });
      }
    },
    setLists: function setLists() {
      var lists = JSON.parse(localStorage.getItem('lists'));
      this.hotSettings.columns[22].source = lists.process.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.id, "/").concat(rec.processName);
        }
      });
      this.hotSettings.columns[1].source = lists.color.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.CLR_CD, "/").concat(rec.CLR_NM_JP);
        }
      });
      this.hotSettings.columns[10].source = lists.unit.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.UNIT_CD, "/").concat(rec.UNIT_PLURAL);
        }
      });
      this.hotSettings.columns[11].source = lists.material.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.MAT_CD, "/").concat(rec.MAT_NM_JP);
        }
      });
      this.hotSettings.columns[12].source = lists.category.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.CAT_CD, "/").concat(rec.CAT_NM_JP);
        }
      });
      this.hotSettings.columns[13].source = lists.requestKind.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.REQ_KIND_CD, "/").concat(rec.REQ_KIND_DTL_NAME_JP);
        }
      });
      this.hotSettings.columns[17].source = lists.country.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.country_code, "/").concat(rec.country_name_jp);
        }
      });
      this.load = true;
    },
    paginationLength: function paginationLength() {
      var x = this.hinbanFilter.length / this.pagination.perPage;
      this.pagination.length = x % 1 != 0 ? parseInt(x.toString().split(".")[0]) + 1 : x;
    },
    getHinbanDetails: function getHinbanDetails(id) {
      var _this25 = this;

      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]('api/getHinbanDetails', {
        data: id
      }).postWithToken().then(function (res) {
        _this25.hinbanDetails = JSON.parse(JSON.stringify(_this25.hinbans.filter(function (rec) {
          return rec.id == id;
        })[0]));
        _this25.hinbanDetails.revisedBy = _this25.$store.state.user.user.id;
        _this25.hotData = res.data;
        _this25.dialog = true;
        _this25.hotSettings.readOnly = true;

        if (_this25.$store.state.user.user.rights === 1 && _this25.hinbanDetails.logisticsRecieve === true && _this25.hinbanDetails.logisticsFields != 1) {
          _this25.hotSettings.columns[21].readOnly = false;
          _this25.hotSettings.columns[22].readOnly = false;
          _this25.hotSettings.columns[23].readOnly = false;
        } else if (_this25.$store.state.user.user.rights === 4 && _this25.hinbanDetails.logisticsFields == 1 && _this25.hinbanDetails.ntsField == 0) {
          _this25.hotSettings.columns[21].readOnly = false;
        } else {
          _this25.hotSettings.columns[21].readOnly = true;
          _this25.hotSettings.columns[22].readOnly = true;
          _this25.hotSettings.columns[23].readOnly = true;
        }

        setTimeout(function () {
          _this25.$refs["myTable"].hotInstance.render();
        }, 50);
      });
    },
    showHinbanDetails: function showHinbanDetails(id) {
      this.getHinbanDetails(id);
    },
    getHinbanAll: function getHinbanAll() {
      var _this26 = this;

      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/getHinbanAll").getWithToken().then(function (res) {
        _this26.hinbans = res.data;
        setTimeout(function () {
          _this26.overlay = false;

          _this26.paginationLength();
        }, 50);
      });
    },
    suspendOverlay: function suspendOverlay(val) {
      var _this27 = this;

      setTimeout(function () {
        _this27.overlay = false;
      }, val);
    }
  },
  components: {
    HotTable: _handsontable_vue__WEBPACK_IMPORTED_MODULE_0__["HotTable"],
    HotColumn: _handsontable_vue__WEBPACK_IMPORTED_MODULE_0__["HotColumn"]
  },
  mounted: function mounted() {
    var _this28 = this;

    this.setLists();
    handsontable__WEBPACK_IMPORTED_MODULE_1__["default"].validators.registerValidator("duplicate-validator", function (query, callback) {
      if (query != null) {
        if (query.match(/^[A-Z0-9*()+\-\\\/]*$/) === null || query.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/) !== "" && query.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/) !== null) {
          callback(false);
        } else {
          var count = _this28.hotData.filter(function (rec) {
            return rec.hinban == query;
          }).length;

          callback(count > 1 ? false : true);
        }
      } else {
        callback(false);
      }
    });
    var self = this;
    $(document).on("click", ".preview", function () {
      var index = $(this).closest("tr").index();
      self.imagePathForPreview = "attachments/" + self.hotData[index].attachments; // console.log(self.hotData[index].attachments)

      $(".dialogVisibleButton").click();
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-data-table--fixed-header thead tr:nth-child(2) th[data-v-57770ece] {\r\n  top: 30px;\r\n  font-weight: normal;\n}\n.theme--light.v-data-table thead tr th[data-v-57770ece] {\r\n  background-color: #90a4ae;\r\n  color: white;\n}\n.v-text-field.v-text-field--enclosed[data-v-57770ece],\r\n.v-text-field__details[data-v-57770ece] {\r\n  color: #7f7f7f;\r\n  margin-bottom: 0px !important;\n}\n.col[data-v-57770ece],\r\n.col-1[data-v-57770ece],\r\n.col-2[data-v-57770ece],\r\n.col-3[data-v-57770ece],\r\n.col-4[data-v-57770ece],\r\n.col-5[data-v-57770ece],\r\n.col-6[data-v-57770ece],\r\n.col-7[data-v-57770ece],\r\n.col-8[data-v-57770ece],\r\n.col-9[data-v-57770ece],\r\n.col-10[data-v-57770ece],\r\n.col-11[data-v-57770ece],\r\n.col-12[data-v-57770ece],\r\n.col-auto[data-v-57770ece],\r\n.col-lg[data-v-57770ece],\r\n.col-lg-1[data-v-57770ece],\r\n.col-lg-2[data-v-57770ece],\r\n.col-lg-3[data-v-57770ece],\r\n.col-lg-4[data-v-57770ece],\r\n.col-lg-5[data-v-57770ece],\r\n.col-lg-6[data-v-57770ece],\r\n.col-lg-7[data-v-57770ece],\r\n.col-lg-8[data-v-57770ece],\r\n.col-lg-9[data-v-57770ece],\r\n.col-lg-10[data-v-57770ece],\r\n.col-lg-11[data-v-57770ece],\r\n.col-lg-12[data-v-57770ece],\r\n.col-lg-auto[data-v-57770ece],\r\n.col-md[data-v-57770ece],\r\n.col-md-1[data-v-57770ece],\r\n.col-md-2[data-v-57770ece],\r\n.col-md-3[data-v-57770ece],\r\n.col-md-4[data-v-57770ece],\r\n.col-md-5[data-v-57770ece],\r\n.col-md-6[data-v-57770ece],\r\n.col-md-7[data-v-57770ece],\r\n.col-md-8[data-v-57770ece],\r\n.col-md-9[data-v-57770ece],\r\n.col-md-10[data-v-57770ece],\r\n.col-md-11[data-v-57770ece],\r\n.col-md-12[data-v-57770ece],\r\n.col-md-auto[data-v-57770ece],\r\n.col-sm[data-v-57770ece],\r\n.col-sm-1[data-v-57770ece],\r\n.col-sm-2[data-v-57770ece],\r\n.col-sm-3[data-v-57770ece],\r\n.col-sm-4[data-v-57770ece],\r\n.col-sm-5[data-v-57770ece],\r\n.col-sm-6[data-v-57770ece],\r\n.col-sm-7[data-v-57770ece],\r\n.col-sm-8[data-v-57770ece],\r\n.col-sm-9[data-v-57770ece],\r\n.col-sm-10[data-v-57770ece],\r\n.col-sm-11[data-v-57770ece],\r\n.col-sm-12[data-v-57770ece],\r\n.col-sm-auto[data-v-57770ece],\r\n.col-xl[data-v-57770ece],\r\n.col-xl-1[data-v-57770ece],\r\n.col-xl-2[data-v-57770ece],\r\n.col-xl-3[data-v-57770ece],\r\n.col-xl-4[data-v-57770ece],\r\n.col-xl-5[data-v-57770ece],\r\n.col-xl-6[data-v-57770ece],\r\n.col-xl-7[data-v-57770ece],\r\n.col-xl-8[data-v-57770ece],\r\n.col-xl-9[data-v-57770ece],\r\n.col-xl-10[data-v-57770ece],\r\n.col-xl-11[data-v-57770ece],\r\n.col-xl-12[data-v-57770ece],\r\n.col-xl-auto[data-v-57770ece] {\r\n  padding-top: 3px;\r\n  padding-bottom: 3px;\r\n  padding-left: 10px;\r\n  padding-right: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyHinban.vue?vue&type=template&id=57770ece&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MyHinban.vue?vue&type=template&id=57770ece&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c(
        "v-card",
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
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
                                      label: "Hinban  ID",
                                      outlined: "",
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.filterVar.hinbanId,
                                      callback: function($$v) {
                                        _vm.$set(_vm.filterVar, "hinbanId", $$v)
                                      },
                                      expression: "filterVar.hinbanId"
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
                                  _c("v-select", {
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
                                      items: _vm.$store.state.class,
                                      "item-text": "name",
                                      label: "Class",
                                      dense: "",
                                      outlined: ""
                                    },
                                    model: {
                                      value: _vm.filterVar.class,
                                      callback: function($$v) {
                                        _vm.$set(_vm.filterVar, "class", $$v)
                                      },
                                      expression: "filterVar.class"
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
                                      label: "Shipment Week",
                                      onkeydown:
                                        "return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )",
                                      outlined: "",
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.filterVar.shipmentWeek,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filterVar,
                                          "shipmentWeek",
                                          $$v
                                        )
                                      },
                                      expression: "filterVar.shipmentWeek"
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
                                      label: "Shipment Year",
                                      onkeydown:
                                        "return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )",
                                      outlined: "",
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.filterVar.shipmentYear,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filterVar,
                                          "shipmentYear",
                                          $$v
                                        )
                                      },
                                      expression: "filterVar.shipmentYear"
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
                                      label: "Applicant",
                                      outlined: "",
                                      dense: ""
                                    },
                                    model: {
                                      value: _vm.filterVar.applicant,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.filterVar,
                                          "applicant",
                                          $$v
                                        )
                                      },
                                      expression: "filterVar.applicant"
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
            "v-tabs",
            {
              attrs: {
                "background-color": "#006064",
                dark: "",
                "center-active": ""
              },
              model: {
                value: _vm.tab,
                callback: function($$v) {
                  _vm.tab = $$v
                },
                expression: "tab"
              }
            },
            [
              _c("v-tabs-slider"),
              _vm._v(" "),
              (_vm.$store.state.user.user.rights == 3 ||
                _vm.$store.state.user.user.rights == 2) &&
              _vm.$store.state.user.user.rights != 4
                ? _c("v-tab", { attrs: { href: "#WaitingForApproval" } }, [
                    _vm._v("Waiting For Approval")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.$store.state.user.user.rights == 2 ||
              _vm.$store.state.user.user.rights == 1 ||
              _vm.$store.state.user.user.rights == 4
                ? _c("v-tab", { attrs: { href: "#ForApproval" } }, [
                    _vm._v("For Approval")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.$store.state.user.user.rights == 2 ||
              _vm.$store.state.user.user.rights == 3
                ? _c("v-tab", { attrs: { href: "#Approved" } }, [
                    _vm._v("Approved")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.$store.state.user.user.rights == 2 ||
              _vm.$store.state.user.user.rights == 3
                ? _c("v-tab", { attrs: { href: "#Disapproved" } }, [
                    _vm._v("Disapproved")
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.$store.state.user.user.rights == 1 &&
              _vm.$store.state.user.user.id != 99
                ? _c("v-tab", { attrs: { href: "#ForExport" } }, [
                    _vm._v("For Export")
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tabs-items",
            {
              model: {
                value: _vm.tab,
                callback: function($$v) {
                  _vm.tab = $$v
                },
                expression: "tab"
              }
            },
            _vm._l(_vm.tabs, function(tab, index) {
              return _c(
                "v-tab-item",
                { key: index, attrs: { value: tab.name } },
                [
                  _c(
                    "v-simple-table",
                    {
                      attrs: { dense: "", "fixed-header": "", height: "60vh" }
                    },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("Hinban ID")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Status")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Class")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Shipment Week")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Shipment Year")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Applicant")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Encoded By")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Created At")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Revisions")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Disapproval Reasons")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("View")]),
                          _vm._v(" "),
                          _vm.$store.state.user.user.department == "開発" ||
                          _vm.$store.state.user.user.id == 99
                            ? _c("th", [_vm._v("Recieve")])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm.$store.state.user.user.rights == 1 &&
                          _vm.$store.state.user.user.id != 99
                            ? _c("th", [_vm._v("Recieve logisics")])
                            : _vm._e(),
                          _vm._v(" "),
                          _c("th", [_vm._v("Export")])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.paginatedList, function(hinban, index) {
                          return _c("tr", { key: index }, [
                            _c("td", [_vm._v(_vm._s(hinban.hinbanId))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(hinban.status))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(hinban.class))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(hinban.shipmentWeek))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(hinban.shipmentYear))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(hinban.applicantName))]),
                            _vm._v(" "),
                            _c("td", [_vm._v(_vm._s(hinban.encoderName))]),
                            _vm._v(" "),
                            _c("td", [
                              _vm._v(_vm._s(hinban.created_at.split("T")[0]))
                            ]),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { align: "center" } },
                              [
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: hinban.rev == null,
                                        expression: "hinban.rev == null"
                                      }
                                    ]
                                  },
                                  [_vm._v("0")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: hinban.rev != null,
                                        expression: "hinban.rev != null"
                                      }
                                    ],
                                    attrs: { text: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.showRevisionDialog(hinban.id)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(hinban.rev))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              { attrs: { align: "center" } },
                              [
                                _c(
                                  "span",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: hinban.disapprovalCount == null,
                                        expression:
                                          "hinban.disapprovalCount == null"
                                      }
                                    ]
                                  },
                                  [_vm._v("0")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "v-btn",
                                  {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: hinban.disapprovalCount != null,
                                        expression:
                                          "hinban.disapprovalCount != null"
                                      }
                                    ],
                                    attrs: { text: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.showDisapprovalDialog(
                                          hinban.id
                                        )
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(hinban.disapprovalCount))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                _c(
                                  "v-btn",
                                  {
                                    attrs: { icon: "" },
                                    on: {
                                      click: function($event) {
                                        return _vm.showHinbanDetails(hinban.id)
                                      }
                                    }
                                  },
                                  [_c("v-icon", [_vm._v("mdi-eye-outline")])],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm.$store.state.user.user.department == "開発" ||
                            _vm.$store.state.user.user.id == 99
                              ? _c(
                                  "td",
                                  [
                                    hinban.class == "C" &&
                                    (hinban.rndJaApproval == 0 ||
                                      hinban.rndJaApproval == 2) &&
                                    hinban.encodedBy !=
                                      _vm.$store.state.user.user.id
                                      ? _c("v-switch", {
                                          attrs: {
                                            color: "success",
                                            inset: "",
                                            dense: ""
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.handleRecieveByRndJa(
                                                hinban.id,
                                                hinban.approverRecieve
                                              )
                                            }
                                          },
                                          model: {
                                            value: hinban.approverRecieve,
                                            callback: function($$v) {
                                              _vm.$set(
                                                hinban,
                                                "approverRecieve",
                                                $$v
                                              )
                                            },
                                            expression: "hinban.approverRecieve"
                                          }
                                        })
                                      : _vm._e(),
                                    _vm._v(" "),
                                    hinban.class == "A" &&
                                    (hinban.classAApproval == 0 ||
                                      hinban.classAApproval == 2) &&
                                    _vm.$store.state.user.user.id == 99
                                      ? _c("v-switch", {
                                          attrs: {
                                            color: "success",
                                            inset: "",
                                            dense: ""
                                          },
                                          on: {
                                            change: function($event) {
                                              return _vm.handleRecieveByClassAApprover(
                                                hinban.id,
                                                hinban.approverRecieve
                                              )
                                            }
                                          },
                                          model: {
                                            value: hinban.approverRecieve,
                                            callback: function($$v) {
                                              _vm.$set(
                                                hinban,
                                                "approverRecieve",
                                                $$v
                                              )
                                            },
                                            expression: "hinban.approverRecieve"
                                          }
                                        })
                                      : _vm._e()
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.$store.state.user.user.rights == 1 &&
                            _vm.$store.state.user.user.id != 99
                              ? _c(
                                  "td",
                                  [
                                    hinban.rndJaApproval == 1 &&
                                    hinban.logisticsFields != 1 &&
                                    (hinban.logisticsRecievedBy ==
                                      _vm.$store.state.user.user.id ||
                                      hinban.logisticsRecievedBy == null)
                                      ? [
                                          _c("v-switch", {
                                            attrs: {
                                              color: "success",
                                              dense: "",
                                              inset: ""
                                            },
                                            on: {
                                              change: function($event) {
                                                return _vm.recieveHinbanByLogistics(
                                                  hinban.id,
                                                  hinban.logisticsRecieve
                                                )
                                              }
                                            },
                                            model: {
                                              value: hinban.logisticsRecieve,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  hinban,
                                                  "logisticsRecieve",
                                                  $$v
                                                )
                                              },
                                              expression:
                                                "hinban.logisticsRecieve"
                                            }
                                          })
                                        ]
                                      : _vm._e()
                                  ],
                                  2
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "td",
                              [
                                hinban.logisticsFields != null &&
                                _vm.$store.state.user.user.rights == 1 &&
                                hinban.logisticsFields == 1 &&
                                hinban.rndJaApproval == 1
                                  ? _c(
                                      "v-btn",
                                      {
                                        attrs: { icon: "", color: "#0D47A1" },
                                        on: {
                                          click: function($event) {
                                            return _vm.exportToCsv(hinban.id)
                                          }
                                        }
                                      },
                                      [
                                        _c("v-icon", [
                                          _vm._v("mdi-file-export")
                                        ])
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
                    ]
                  )
                ],
                1
              )
            }),
            1
          ),
          _vm._v(" "),
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-row",
                { staticStyle: { "margin-top": "5vh" } },
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
        "v-overlay",
        { attrs: { value: _vm.overlay } },
        [
          _c("v-progress-circular", {
            attrs: { indeterminate: "", size: "50" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "500px" },
          model: {
            value: _vm.disapprovalDialog,
            callback: function($$v) {
              _vm.disapprovalDialog = $$v
            },
            expression: "disapprovalDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Disapproval Details")]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "300px" } },
                [
                  _c("v-simple-table", { attrs: { dense: "" } }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("#")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Disapproved By")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Reason")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.disapprovalDialogData, function(rec, i) {
                        return _c("tr", { key: i }, [
                          _c("th", [_vm._v(_vm._s(i + 1))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(rec.created_at.split("T")[0]))
                          ]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(
                              _vm._s(rec.firstName) + " " + _vm._s(rec.lastName)
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(rec.disapprovalReason))])
                        ])
                      }),
                      0
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
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
                          _vm.disapprovalDialog = false
                        }
                      }
                    },
                    [_vm._v("Close")]
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
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "500px" },
          model: {
            value: _vm.revisionDialog,
            callback: function($$v) {
              _vm.revisionDialog = $$v
            },
            expression: "revisionDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [_vm._v("Revisions")]),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticStyle: { height: "300px" } },
                [
                  _c("v-simple-table", { attrs: { dense: "" } }, [
                    _c("thead", [
                      _c("tr", [
                        _c("th", [_vm._v("#")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Date")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Revised By")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Reason For Revision")])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.revisionDialogData, function(rec, i) {
                        return _c("tr", { key: i }, [
                          _c("th", [_vm._v(_vm._s(i + 1))]),
                          _vm._v(" "),
                          _c("td", [
                            _vm._v(_vm._s(rec.created_at.split("T")[0]))
                          ]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(rec.revisedBy))]),
                          _vm._v(" "),
                          _c("td", [_vm._v(_vm._s(rec.reasonForRevision))])
                        ])
                      }),
                      0
                    )
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("v-divider"),
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
                          _vm.revisionDialog = false
                        }
                      }
                    },
                    [_vm._v("Close")]
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
              staticStyle: { "z-index": "999" },
              attrs: {
                dense: "",
                fullscreen: "",
                "hide-overlay": "",
                transition: "dialog-bottom-transition"
              },
              model: {
                value: _vm.dialog,
                callback: function($$v) {
                  _vm.dialog = $$v
                },
                expression: "dialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-toolbar",
                    { attrs: { dark: "", color: "#006064", dense: "" } },
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { icon: "", dark: "" },
                          on: {
                            click: function($event) {
                              return _vm.closeDialog()
                            }
                          }
                        },
                        [_c("v-icon", [_vm._v("mdi-close")])],
                        1
                      ),
                      _vm._v(" "),
                      _c("v-toolbar-title", [_vm._v("Hinban Details")]),
                      _vm._v(" "),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-toolbar-items",
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.$store.state.user.user
                                                    .id == 99 &&
                                                  _vm.hinbanDetails
                                                    .approverRecieve &&
                                                  _vm.hinbanDetails
                                                    .rndJaApproval == 0,
                                                expression:
                                                  "$store.state.user.user.id == 99 &&  hinbanDetails.approverRecieve && hinbanDetails.rndJaApproval == 0"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: "",
                                              color: "green lighten-2"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleApprovalClassA(
                                                  1
                                                )
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-sticker-check")
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Approve")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.$store.state.user.user
                                                    .id == 99 &&
                                                  _vm.hinbanDetails
                                                    .approverRecieve &&
                                                  _vm.hinbanDetails
                                                    .rndJaApproval == 0,
                                                expression:
                                                  "$store.state.user.user.id == 99  && hinbanDetails.approverRecieve && hinbanDetails.rndJaApproval == 0"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: "",
                                              color: "red lighten-2"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleApprovalClassA(
                                                  0
                                                )
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-sticker-remove")
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Disapprove")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.$store.state.user.user
                                                    .id ==
                                                    _vm.hinbanDetails
                                                      .rndJaApprover &&
                                                  _vm.hinbanDetails
                                                    .approverRecieve &&
                                                  _vm.hinbanDetails
                                                    .rndJaApproval == 0 &&
                                                  _vm.hinbanDetails.class ==
                                                    "C",
                                                expression:
                                                  "$store.state.user.user.id == hinbanDetails.rndJaApprover  &&  hinbanDetails.approverRecieve && hinbanDetails.rndJaApproval == 0 && hinbanDetails.class == 'C'"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: "",
                                              color: "green lighten-2"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleRndJAActions(1)
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-sticker-check")
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Approve")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.$store.state.user.user
                                                    .id ==
                                                    _vm.hinbanDetails
                                                      .rndJaApprover &&
                                                  _vm.hinbanDetails
                                                    .approverRecieve &&
                                                  _vm.hinbanDetails
                                                    .rndJaApproval == 0 &&
                                                  _vm.hinbanDetails.class ==
                                                    "C",
                                                expression:
                                                  "$store.state.user.user.id == hinbanDetails.rndJaApprover  && hinbanDetails.approverRecieve && hinbanDetails.rndJaApproval == 0 && hinbanDetails.class == 'C'"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: "",
                                              color: "red lighten-2"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleRndJAActions(0)
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-sticker-remove")
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Disapprove")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.$store.state.user.user
                                                    .rights == 1 &&
                                                  _vm.hotSettings.readOnly &&
                                                  _vm.$store.state.user.user
                                                    .id != "99",
                                                expression:
                                                  "$store.state.user.user.rights == 1 && hotSettings.readOnly && $store.state.user.user.id != '99'"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleEventEdit()
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-file-edit")
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Edit edit")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.hotSettings.readOnly &&
                                                  _vm.hinbanDetails
                                                    .logisticsRecieve == 1 &&
                                                  _vm.$store.state.user.user
                                                    .rights == 1 &&
                                                  _vm.hinbanDetails
                                                    .logisticsFields != 1,
                                                expression:
                                                  "hotSettings.readOnly && hinbanDetails.logisticsRecieve == 1 && $store.state.user.user.rights == 1 && hinbanDetails.logisticsFields != 1"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: "",
                                              color: "success",
                                              disabled: _vm.emptyFieldChecker
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleUpdateByLogistics()
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-update")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Update Record")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.hotSettings.readOnly &&
                                                  _vm.hinbanDetails
                                                    .logisticsRecieve == 1 &&
                                                  _vm.$store.state.user.user
                                                    .rights == 1 &&
                                                  _vm.hinbanDetails
                                                    .logisticsFields != 1,
                                                expression:
                                                  "hotSettings.readOnly && hinbanDetails.logisticsRecieve == 1 && $store.state.user.user.rights == 1 && hinbanDetails.logisticsFields != 1"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: "",
                                              color: "red lighten-2"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleDisapproveByLogistics()
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-sticker-remove")
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Disapprove")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.hotSettings.readOnly &&
                                                  _vm.hinbanDetails
                                                    .rndJaRecieve == 0 &&
                                                  _vm.$store.state.user.user
                                                    .rights != 1 &&
                                                  _vm.hinbanDetails.encodedBy ==
                                                    _vm.$store.state.user.user
                                                      .id &&
                                                  _vm.hinbanDetails.class ==
                                                    "C" &&
                                                  !_vm.hinbanDetails
                                                    .logisticsRecieve,
                                                expression:
                                                  "hotSettings.readOnly && hinbanDetails.rndJaRecieve == 0  && $store.state.user.user.rights != 1 && hinbanDetails.encodedBy == $store.state.user.user.id && hinbanDetails.class == 'C' && !hinbanDetails.logisticsRecieve"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleEventEdit()
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-file-edit")
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Edit")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.hotSettings.readOnly &&
                                                  _vm.hinbanDetails
                                                    .classARecieve == 0 &&
                                                  _vm.$store.state.user.user
                                                    .rights != 1 &&
                                                  _vm.hinbanDetails.encodedBy ==
                                                    _vm.$store.state.user.user
                                                      .id &&
                                                  _vm.hinbanDetails.class ==
                                                    "A" &&
                                                  !_vm.hinbanDetails
                                                    .approverRecieve,
                                                expression:
                                                  "hotSettings.readOnly && hinbanDetails.classARecieve == 0 && $store.state.user.user.rights != 1 && hinbanDetails.encodedBy == $store.state.user.user.id && hinbanDetails.class == 'A' && !hinbanDetails.approverRecieve"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: ""
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleEventEdit()
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [
                                          _c("v-icon", [
                                            _vm._v("mdi-file-edit")
                                          ])
                                        ],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Edit")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !_vm.hotSettings
                                                  .readOnly,
                                                expression:
                                                  "!hotSettings.readOnly"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: "",
                                              color: "success"
                                            },
                                            on: {
                                              click: function($event) {
                                                _vm.revisionReasonDialog = true
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-update")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Update")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !_vm.hotSettings
                                                  .readOnly,
                                                expression:
                                                  "!hotSettings.readOnly"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: "",
                                              color: "red"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleEditCancel()
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-cancel")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Cancel")])]
                          ),
                          _vm._v(" "),
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
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.hinbanDetails
                                                    .logisticsFields == 1 &&
                                                  _vm.hinbanDetails.ntsField ==
                                                    0 &&
                                                  _vm.$store.state.user.user
                                                    .rights == 4,
                                                expression:
                                                  "hinbanDetails.logisticsFields == 1 && hinbanDetails.ntsField == 0 && $store.state.user.user.rights == 4"
                                              }
                                            ],
                                            attrs: {
                                              dark: "",
                                              fab: "",
                                              icon: "",
                                              color: "success"
                                            },
                                            on: {
                                              click: function($event) {
                                                return _vm.handleNtsApprove()
                                              }
                                            }
                                          },
                                          on
                                        ),
                                        [_c("v-icon", [_vm._v("mdi-update")])],
                                        1
                                      )
                                    ]
                                  }
                                }
                              ])
                            },
                            [
                              _vm._v(" "),
                              _c("span", [_vm._v("Update / Confirm")])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { "three-line": "", subheader: "" } },
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "3", sm: "3" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      "hide-details": "",
                                      clearable: "",
                                      dense: "",
                                      "item-text": "year",
                                      disabled: _vm.hotSettings.readOnly,
                                      rules: _vm.rules.required,
                                      items: _vm.yearList,
                                      label: "Shipment Year",
                                      outlined: ""
                                    },
                                    model: {
                                      value: _vm.hinbanDetails.shipmentYear,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.hinbanDetails,
                                          "shipmentYear",
                                          $$v
                                        )
                                      },
                                      expression: "hinbanDetails.shipmentYear"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "3", sm: "3" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      "hide-details": "",
                                      clearable: "",
                                      dense: "",
                                      "item-text": "name",
                                      disabled: _vm.hotSettings.readOnly,
                                      rules: _vm.rules.required,
                                      items: _vm.weekNos,
                                      label: "Shipment Week",
                                      outlined: ""
                                    },
                                    model: {
                                      value: _vm.hinbanDetails.shipmentWeek,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.hinbanDetails,
                                          "shipmentWeek",
                                          $$v
                                        )
                                      },
                                      expression: "hinbanDetails.shipmentWeek"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "3", sm: "3" } },
                                [
                                  _c("v-select", {
                                    attrs: {
                                      "hide-details": "",
                                      clearable: "",
                                      dense: "",
                                      "item-text": "name",
                                      disabled: _vm.hotSettings.readOnly,
                                      rules: _vm.rules.required,
                                      "item-value": "name",
                                      items: _vm.$store.state.class,
                                      label: "Class",
                                      outlined: ""
                                    },
                                    model: {
                                      value: _vm.hinbanDetails.class,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.hinbanDetails,
                                          "class",
                                          $$v
                                        )
                                      },
                                      expression: "hinbanDetails.class"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                { attrs: { cols: "12", md: "3", sm: "3" } },
                                [
                                  _vm.hinbanDetails.attachment != undefined
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            disabled:
                                              _vm.hinbanDetails.attachment == 0,
                                            block: ""
                                          },
                                          on: {
                                            click: function($event) {
                                              _vm.showAttachmentDialog = true
                                            }
                                          }
                                        },
                                        [_vm._v("Show Attachment List")]
                                      )
                                    : _vm._e()
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
                      _c("v-list-item", [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              "border-style": "solid",
                              "border-width": "0.5px",
                              width: "100%",
                              "border-color": "grey",
                              "border-radius": "5px"
                            }
                          },
                          [
                            _vm.dialog
                              ? _c(
                                  "hot-table",
                                  {
                                    ref: "myTable",
                                    attrs: {
                                      id: "hot",
                                      data: _vm.hotData,
                                      settings: _vm.hotSettings,
                                      "row-headers": true,
                                      "col-headers": true
                                    }
                                  },
                                  _vm._l(_vm.hotSettings.columns, function(
                                    setting,
                                    ind
                                  ) {
                                    return _c("hot-column", {
                                      key: ind,
                                      attrs: {
                                        settings: _vm.hotSettings.columns[ind]
                                      }
                                    })
                                  }),
                                  1
                                )
                              : _vm._e()
                          ],
                          1
                        )
                      ])
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
            "v-dialog",
            {
              attrs: { "max-width": "500px" },
              model: {
                value: _vm.dialogVisible,
                callback: function($$v) {
                  _vm.dialogVisible = $$v
                },
                expression: "dialogVisible"
              }
            },
            [
              _c(
                "v-card",
                { staticClass: "mx-auto", attrs: { "max-width": "450" } },
                [
                  _c(
                    "v-img",
                    {
                      staticClass: "white--text align-end",
                      attrs: { src: _vm.imagePathForPreview }
                    },
                    [
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-row",
                            [
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-btn",
                                {
                                  staticStyle: { "margin-right": "2%" },
                                  attrs: { color: "red", icon: "" },
                                  on: {
                                    click: function($event) {
                                      _vm.dialogVisible = false
                                    }
                                  }
                                },
                                [_c("v-icon", [_vm._v("mdi-close")])],
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
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-btn",
            {
              staticClass: "dialogVisibleButton",
              staticStyle: { display: "none" },
              attrs: { color: "primary", dark: "" },
              on: {
                click: function($event) {
                  _vm.dialogVisible = true
                }
              }
            },
            [_vm._v("DialogViewingImage")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "500px" },
          model: {
            value: _vm.revisionReasonDialog,
            callback: function($$v) {
              _vm.revisionReasonDialog = $$v
            },
            expression: "revisionReasonDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v("Save Changes?")
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
                              _c(
                                "v-form",
                                { ref: "revisionReasonForm" },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Reason For Revision",
                                      rules: _vm.rules.required
                                    },
                                    model: {
                                      value: _vm.hinbanDetails.revisionReason,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.hinbanDetails,
                                          "revisionReason",
                                          $$v
                                        )
                                      },
                                      expression: "hinbanDetails.revisionReason"
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
                  )
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
                          _vm.revisionReasonDialog = false
                        }
                      }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { color: "blue darken-1", text: "" },
                      on: {
                        click: function($event) {
                          return _vm.updateRecords()
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
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: { persistent: "", "max-width": "500px" },
          model: {
            value: _vm.logisticsDisapproveDialog,
            callback: function($$v) {
              _vm.logisticsDisapproveDialog = $$v
            },
            expression: "logisticsDisapproveDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c("v-card-title", [
                _c("span", { staticClass: "headline" }, [
                  _vm._v("Disapprove Application")
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
                              _c(
                                "v-form",
                                { ref: "revisionReasonForm" },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Reason For Disapproval",
                                      rules: _vm.rules.required
                                    },
                                    model: {
                                      value:
                                        _vm.hinbanDetails
                                          .logisticsDisapproveReason,
                                      callback: function($$v) {
                                        _vm.$set(
                                          _vm.hinbanDetails,
                                          "logisticsDisapproveReason",
                                          $$v
                                        )
                                      },
                                      expression:
                                        "hinbanDetails.logisticsDisapproveReason"
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
                  )
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
                          _vm.logisticsDisapproveDialog = false
                        }
                      }
                    },
                    [_vm._v("Close")]
                  ),
                  _vm._v(" "),
                  _vm.$store.state.user.user.id == 99
                    ? _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.updateDisaproveClassA(2)
                            }
                          }
                        },
                        [_vm._v("Disapprove Class A")]
                      )
                    : _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.updateDisapprovedByLogistics()
                            }
                          }
                        },
                        [_vm._v("Disapprove Logistics")]
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
        "v-dialog",
        {
          attrs: { scrollable: "", "max-width": "400px", persistent: "" },
          model: {
            value: _vm.showAttachmentDialog,
            callback: function($$v) {
              _vm.showAttachmentDialog = $$v
            },
            expression: "showAttachmentDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "#006064", dense: "" } },
                [
                  _c("v-toolbar-title", [_vm._v("Attachment")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      attrs: { small: "", icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.showAttachmentDialog = false
                        }
                      }
                    },
                    [
                      _c("v-icon", { attrs: { small: "" } }, [
                        _vm._v("mdi-close")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                [
                  _c("v-list-item-content", [
                    _c(
                      "ul",
                      _vm._l(_vm.hinbanDetails.attachment, function(path, ind) {
                        return _c(
                          "li",
                          {
                            key: ind,
                            on: {
                              click: function($event) {
                                return _vm.viewBatchAttachment(path.filename)
                              }
                            }
                          },
                          [
                            _c("a", [
                              _vm._v(_vm._s(path.filename.split("/")[2]))
                            ])
                          ]
                        )
                      }),
                      0
                    )
                  ])
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

/***/ "./resources/js/components/MyHinban.vue":
/*!**********************************************!*\
  !*** ./resources/js/components/MyHinban.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MyHinban_vue_vue_type_template_id_57770ece_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MyHinban.vue?vue&type=template&id=57770ece&scoped=true& */ "./resources/js/components/MyHinban.vue?vue&type=template&id=57770ece&scoped=true&");
/* harmony import */ var _MyHinban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MyHinban.vue?vue&type=script&lang=js& */ "./resources/js/components/MyHinban.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MyHinban_vue_vue_type_style_index_0_id_57770ece_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css& */ "./resources/js/components/MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MyHinban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MyHinban_vue_vue_type_template_id_57770ece_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MyHinban_vue_vue_type_template_id_57770ece_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57770ece",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MyHinban.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MyHinban.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/components/MyHinban.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MyHinban.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyHinban.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_style_index_0_id_57770ece_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyHinban.vue?vue&type=style&index=0&id=57770ece&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_style_index_0_id_57770ece_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_style_index_0_id_57770ece_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_style_index_0_id_57770ece_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_style_index_0_id_57770ece_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_style_index_0_id_57770ece_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/MyHinban.vue?vue&type=template&id=57770ece&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/MyHinban.vue?vue&type=template&id=57770ece&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_template_id_57770ece_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MyHinban.vue?vue&type=template&id=57770ece&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MyHinban.vue?vue&type=template&id=57770ece&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_template_id_57770ece_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MyHinban_vue_vue_type_template_id_57770ece_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);