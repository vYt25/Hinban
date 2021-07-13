(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterHinban.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegisterHinban.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      notificationSystem: {
        options: {
          show: {
            theme: "dark",
            icon: "icon-person",
            position: "topCenter",
            progressBarColor: "rgb(0, 255, 184)",
            buttons: [["<button>Ok</button>", function (instance, toast) {
              alert("Hello world!");
            }, true], ["<button>Close</button>", function (instance, toast) {
              instance.hide({
                transitionOut: "fadeOutUp",
                onClosing: function onClosing(instance, toast, closedBy) {
                  console.info("closedBy: " + closedBy);
                }
              }, toast, "buttonName");
            }]],
            onOpening: function onOpening(instance, toast) {
              console.info("callback abriu!");
            },
            onClosing: function onClosing(instance, toast, closedBy) {
              console.info("closedBy: " + closedBy);
            }
          }
        }
      },
      fileList: [],
      imageReferenceDialog: false,
      rndJapaneseAdvisors: null,
      overlay: true,
      retrieveDialog: false,
      draftList: [],
      draftListSearch: null,
      draftsDialogOverlay: false,
      draftListHeaders: [{
        text: "Title",
        value: "draftTitle"
      }, {
        text: "Date Created",
        value: "date"
      }, {
        text: "Actions",
        value: "actions",
        sortable: false
      }],
      batch: {
        "class": null,
        shipmentWeek: null,
        shipmentYear: null,
        rndApprover: null
      },
      load: false,
      language: "eng",
      additionalRows: null,
      dialog_other_details: false,
      hotRef: null,
      imagePreview: null,
      dialogVisible: false,
      hotData: [],
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
      hotSettings: {
        lists: null,
        licenseKey: "non-commercial-and-evaluation",
        autoRowSize: true,
        data: null,
        // autoColumnSize: true,
        manualColumnResize: true,
        fixedColumnsLeft: 1,
        allowEmpty: false,
        contextMenu: ["remove_row"],
        height: "57vh",
        comments: true,
        fillHandle: {
          direction: "vertical",
          autoInsertRow: false
        },
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
      columnSettings: [{
        title: "HINBAN",
        data: "hinban",
        validator: "duplicate-validator",
        width: 400
      }, {
        title: "CLR",
        type: "dropdown",
        source: null,
        data: "clr",
        width: 200
      }, {
        title: "HINBAN NAME (JAPANESE)",
        data: "hinban_nm_jp",
        validator: "required-validator",
        width: 220
      }, {
        title: "HINBAN NAME",
        data: "hinban_nm",
        validator: "required-validator",
        width: 220
      }, {
        title: "SIZE_L",
        data: "size_l",
        type: "numeric",
        width: 70
      }, {
        title: "SIZE_W",
        data: "size_w",
        type: "numeric",
        width: 70
      }, {
        title: "SIZE_H",
        data: "size_h",
        type: "numeric",
        width: 70
      }, {
        title: "CBM",
        data: "cbm_qty",
        width: 90,
        readOnly: true
      }, {
        title: "KGS",
        data: "kg_qty",
        width: 100,
        type: "numeric",
        numericFormat: {
          pattern: "0.00"
        }
      }, {
        title: "PRICE ¥",
        data: "unit_prc",
        type: "numeric",
        width: 150
      }, {
        title: "UNIT",
        type: "dropdown",
        data: "unit",
        source: null,
        width: 200
      }, {
        title: "MATERIAL CODE",
        type: "dropdown",
        data: "mat_cd",
        source: null,
        width: 200
      }, {
        title: "CATEGORY",
        type: "dropdown",
        data: "cat_cd",
        source: null,
        width: 200
      }, {
        title: "REQUEST KIND",
        data: "req_kind",
        type: "dropdown",
        source: null,
        width: 300
      }, {
        title: "REQUEST KIND NO.",
        data: "req_kind_no",
        readOnly: true,
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
        data: "use_for",
        type: "dropdown",
        comment: {
          value: "各材質は、大よその％で表示してください。原産国とは、原材料から作っている国のことになります。輸入国がすべて原産国の基準ではありません。（フィリピン国で購入した物でも原産国は中国や台湾の場合があります。"
        },
        source: null,
        width: 200
      }, {
        title: "MANUFACTURE NAME",
        data: "manufacture_name",
        validator: "required-validator",
        source: null,
        width: 200
      }, {
        title: "USAGE DESCRIPTION",
        data: "description",
        comment: {
          value: "住宅のどの部分にどう使用する商品なのか詳細を記載してください"
        },
        validator: "required-validator",
        width: 200
      }, {
        title: "PROCESSING STEP DESCRIPTION",
        data: "processing_description",
        validator: "required-validator",
        comment: {
          value: "（HRD加工の場合のみ） この加工工程により、原産国がフィリピンであることが確認されています。"
        },
        source: null,
        width: 275
      }, // {
      //   title: "IMAGE",
      //   data: "insert",
      //   renderer: "html",
      //   className: "htCenter htMiddle",
      //   width: 120,
      //   readOnly: true
      // },
      {
        title: "PREVIEW",
        data: "preview",
        renderer: "html",
        width: 200,
        className: "htCenter htMiddle preivew",
        readOnly: true
      }]
    };
  },
  created: function created() {
    var _this = this;

    // this.$store.getters.setLists
    this.setClassIfLocalStaff();
    this.getRndJapaneseAdvisors();
    setTimeout(function () {
      _this.setLists();
    }, 500);
  },
  components: {
    HotTable: _handsontable_vue__WEBPACK_IMPORTED_MODULE_0__["HotTable"],
    HotColumn: _handsontable_vue__WEBPACK_IMPORTED_MODULE_0__["HotColumn"]
  },
  computed: {
    weekNos: function weekNos() {
      var weeks = [];

      for (var x = 1; x <= 53; x++) {
        weeks.push(x);
      }

      return weeks;
    },
    yearList: function yearList() {
      var year = this.$store.getters["getYearList"];
      this.$set(this.batch, "shipmentYear", year[1].year);
      return year;
    }
  },
  methods: {
    assignImageToItems: function assignImageToItems(i) {
      // console.log(this.fileList[i]);
      // console.log(
      //   this.fileList[i].range.split("-")[0] - 1,
      //   this.fileList[i].range.split("-")[1] - 1
      // );
      var btn = '<i class="fa fa-search-plus preview" ></i>';

      for (var x = 0; x < this.hotData.length; x++) {
        if (x >= this.fileList[i].range.split("-")[0] - 1 && x < this.fileList[i].range.split("-")[1]) {
          this.hotData[x].imageIndex = i;
          this.hotData[x].fileName = this.fileList[i].name;
          this.hotData[x].image = this.fileList[i].blob;
          this.hotData[x].preview = btn;
        }
      }

      this.$refs.myTable.hotInstance.render();
    },
    imageListSet: function imageListSet() {
      //   this.fileList = $("#imageFiles")[0].files;
      this.fileList = [];

      for (var x = 0; x < $("#imageFiles")[0].files.length; x++) {
        this.converter($("#imageFiles")[0].files[x], x);
        this.fileList.push({
          name: $("#imageFiles")[0].files[x].name,
          blob: null
        });
      }
    },
    converter: function converter(file, i) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      var self = this;

      reader.onload = function () {
        self.fileList[i].blob = reader.result;
      };
    },
    getRndJapaneseAdvisors: function getRndJapaneseAdvisors() {
      var _this2 = this;

      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/rndJapaneseAdvisors").getWithToken().then(function (res) {
        _this2.rndJapaneseAdvisors = res.data;
      })["catch"](function (err) {
        console.log(err);
      });
    },
    setClassIfLocalStaff: function setClassIfLocalStaff() {
      if (this.$store.state.user.user.rights == 3) {
        this.batch["class"] = "C";
      }
    },
    handleImportDraft: function handleImportDraft(val) {
      this.hotData = JSON.parse(val.items).filter(function (rec) {
        rec.preview = '<button class="btn-outline-primary btn-sm btn preview" style="width:30%; display:none"><i class="fa fa-search-plus"></i></button>';
        return rec;
      });
      this.batch = JSON.parse(val.batch);
      this.retrieveDialog = false;
      this.$refs.myTable.hotInstance.render();
    },
    handleDeleteDraft: function handleDeleteDraft(val) {
      var _this3 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(function (result) {
        if (result.value) {
          new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/draftDelete", {
            draftId: val.id
          }).postWithToken().then(function (res) {
            _this3.draftList = JSON.parse(JSON.stringify(_this3.draftList.filter(function (each) {
              return each.id != val.id;
            })));

            _this3.notificationSuccess("Draft has been deleted.");
          })["catch"](function (err) {
            console.log(err);
          });
        }
      });
    },
    handleRetrieveDialog: function handleRetrieveDialog() {
      var _this4 = this;

      this.draftsDialogOverlay = true;
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/draftList", {
        user: this.$store.state.user.user.id
      }).postWithToken().then(function (res) {
        _this4.draftList = res.data;
        setTimeout(function () {
          _this4.retrieveDialog = true;
          _this4.draftsDialogOverlay = false;
        }, 200);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    saveAsDraft: function saveAsDraft(draftTitle) {
      new _js_AxiosClass__WEBPACK_IMPORTED_MODULE_3__["default"]("api/saveAsDraft", {
        items: this.hotData,
        batch: this.batch,
        user: this.$store.state.user.user.id,
        draftTitle: draftTitle
      }).postWithToken().then(function (res) {
        console.log(res.data);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    handleSaveAsDraft: function handleSaveAsDraft() {
      var _this5 = this;

      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        title: "<small><span style='font-weight:normal;'>Note: Image(s) and or Attachement(s) will not be included in saving as draft.</span><small>",
        html: '<input id="draftTitle" placeholder="Draft Name" class="form-control">',
        showCancelButton: true,
        preConfirm: function preConfirm() {
          return new Promise(function (resolve) {
            resolve({
              draftTitle: $("#draftTitle").val()
            });
          });
        },
        onOpen: function onOpen() {
          $("#draftTitle").focus();
        }
      }).then(function (result) {
        if (result.value !== undefined) {
          _this5.saveAsDraft(result.value.draftTitle);
        }
      });
    },
    notificationSuccess: function notificationSuccess(msg) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire("Success", msg, "success");
    },
    notificationError: function notificationError(msg) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
        icon: "error",
        title: "Error",
        text: msg
      });
    },
    addRows: function addRows() {
      this.addTableRow(this.additionalRows);
    },
    setLists: function setLists() {
      var _this6 = this;

      var token = this.$store.state.user.token; // return false;
      // new AxiosClass('api/lists').getWithToken().then(res=>{
      //     this.$store.state.lists = res.data
      //     localStorage.setItem('lists', JSON.stringify(res.data))

      var lists = this.$store.state.lists;
      this.columnSettings[1].source = lists.color.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.CLR_CD, "/").concat(rec.CLR_NM_JP);
        }
      });
      this.columnSettings[10].source = lists.unit.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.UNIT_CD, "/").concat(rec.UNIT_PLURAL);
        }
      });
      this.columnSettings[11].source = lists.material.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.MAT_CD, "/").concat(rec.MAT_NM_JP);
        }
      });
      this.columnSettings[12].source = lists.category.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.CAT_CD, "/").concat(rec.CAT_NM_JP);
        }
      });
      this.columnSettings[13].source = lists.requestKind.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.REQ_KIND_CD, "/").concat(rec.REQ_KIND_DTL_NAME_JP);
        }
      });
      this.columnSettings[17].source = lists.country.map(function (rec) {
        if (rec.deleted_at == null) {
          return "".concat(rec.country_code, "/").concat(rec.country_name_jp);
        }
      });
      this.load = true;
      this.overlay = false;
      setTimeout(function () {
        _this6.renderMytable();
      }, 300); // }).catch(err => {
      //     console.log(err)
      // })
    },
    addTableRow: function addTableRow(val) {
      for (var i = 0; i < val; i++) {
        this.hotData.push({
          // row:parseInt(this.hotSettings.data.length)+1,
          hinban: null,
          clr: null,
          hinban_nm_jp: null,
          hinban_nm: null,
          size_l: null,
          size_w: null,
          size_h: null,
          cbm_qty: null,
          kg_qty: null,
          unit_prc: null,
          unit: null,
          mat_cd: null,
          cat_cd: null,
          req_kind_no: null,
          req_kind: null,
          p_div_cd: null,
          e_div_cd: null,
          use_for: null,
          manufacture_name: null,
          description: null,
          processing_description: null,
          imageIndex: null,
          image: null,
          fileName: null,
          // insert: '<i class="fa fa-upload  browseafile"></i>',
          preview: '<i class="fa fa-search-plus preview" style="display:none"></i>'
        });
      }

      $('.htCommentTextArea').css('height', "2000px");
    },
    fileInput: function fileInput(index) {
      var self = this;
      var file = $(".image")[index].files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = function () {
        self.hotData[index].image = reader.result;
        self.hotData[index].file_name = $(".image")[index].files[0].name;
      };
    },
    handlePictureCardPreview: function handlePictureCardPreview(index) {
      this.imagePreview = this.hotData[index].image;
      this.dialogVisible = true;
    },
    handleSave: function handleSave() {
      var _this7 = this;

      // socket.emit('register-hinban', {
      //     data: 'test',
      //     user: this.$store.state.user.user.firstName
      // });
      // return false
      var formData = new FormData($("form")[1]);
      var token = this.$store.state.user.token;
      this.batch.toCsv = 0; // this.batch.approved = 0

      this.batch.registeredBy = this.$store.state.user.user.id; // this.batch.rndJARecieve = 0

      this.$refs.batch.validate(); // console.log(this.$store.state.user)
      // console.log(this.hotData)
      // return false

      if (this.batch["class"].toLowerCase() == "c") {
        this.batch.rndJAApproval = this.$store.state.user.user.rights == 2 ? 1 : 0;
      } else {
        this.batch.rndJAApproval = 0;
      }

      formData.append("batch", JSON.stringify(this.batch));
      formData.append("items", JSON.stringify(this.hotData));

      for (var x = 0; x < $("#attachment_file")[0]["files"].length; x++) {
        formData.append("attachment_file[".concat(x, "]"), $("#attachment_file")[0]["files"][x]);
      } // return false


      axios({
        method: "POST",
        url: "upload",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }).then(function (res) {
        _this7.notificationSuccess("Hinban Successfully Registered!");

        _this7.$refs.batch.reset();

        setTimeout(function () {
          _this7.batch["class"] = null;
          _this7.batch.shipmentWeek = parseInt(new Date().getWeekNumber());
          _this7.batch.shipmentYear = _this7.yearList[1].year;
          _this7.hotData = [];

          _this7.addTableRow(1);

          _this7.$socket.emit('register-hinban', {
            val: {
              id: res.data.id,
              hinbanId: res.data.hinbanId
            },
            user: "".concat(_this7.$store.state.user.user.firstName, " ").concat(_this7.$store.state.user.user.lastName)
          });
        }, 200);
      })["catch"](function (err) {
        _this7.notificationError(err);
      });
    },
    renderMytable: function renderMytable() {
      if (this.$refs.myTable !== undefined) {
        this.$refs.myTable.hotInstance.render();
      }
    }
  },
  mounted: function mounted() {
    var _this8 = this;

    Date.prototype.getWeekNumber = function () {
      var d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
      var dayNum = d.getUTCDay() || 7;
      d.setUTCDate(d.getUTCDate() + 4 - dayNum);
      var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
    };

    this.$set(this.batch, "shipmentWeek", parseInt(new Date().getWeekNumber()));
    this.addTableRow(1);
    var self = this; // $(document).on("click", ".browseafile", function() {
    //   $(".image")
    //     .eq(
    //       $(this)
    //         .closest("tr")
    //         .index()
    //     )
    //     .click();
    // });
    // $(document).on("change", ".image", function() {
    //   if (
    //     $(".image")[
    //       $(this)
    //         .closest("tr")
    //         .index()
    //     ].files.length > 0
    //   ) {
    //     self.hotData[
    //       $(this)
    //         .closest("tr")
    //         .index()
    //     ].preview = '<i class="fa fa-search-plus preview"></i>';
    //   } else {
    //     self.hotData[
    //       $(this)
    //         .closest("tr")
    //         .index()
    //     ].preview =
    //       '<i class="fa fa-search-plus preview" style="display:none"></i>';
    //   }
    //   self.renderMytable();
    // });

    $(document).on("click", ".preview", function () {
      self.handlePictureCardPreview($(this).closest("tr").index());
    });
    handsontable__WEBPACK_IMPORTED_MODULE_1__["default"].validators.registerValidator("duplicate-validator", function (query, callback) {
      if (query != null) {
        // console.log(query.match(/^[A-Z0-9*()+\-\\\/]*$/) === null)
        if (query.match(/^[A-Z0-9*()+\-\\\/]*$/) === null || query.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/) !== "" && query.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/) !== null) {
          callback(false);
        } else {
          var count = _this8.hotData.filter(function (rec) {
            return rec.hinban == query;
          }).length;

          callback(count > 1 ? false : true);
        }
      } else {
        callback(false);
      }
    });
    handsontable__WEBPACK_IMPORTED_MODULE_1__["default"].validators.registerValidator("required-validator", function (query, callback) {
      return query != null ? callback(true) : callback(false);
    }); // this.$toast.show('Welcome!', 'Hey', this.notificationSystem.options.show)
    // Handsontable.validators.registerValidator(
    //     "whole-number-validator",
    //     (query, callback) => {
    //         return query != null ? callback(true) : callback(false);
    //     }
    // );
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.v-text-field.v-text-field--enclosed[data-v-13926690],\r\n.v-text-field__details[data-v-13926690] {\r\n    color: #7f7f7f;\r\n    margin-bottom: 0px !important;\n}\n.col[data-v-13926690],\r\n.col-1[data-v-13926690],\r\n.col-2[data-v-13926690],\r\n.col-3[data-v-13926690],\r\n.col-4[data-v-13926690],\r\n.col-5[data-v-13926690],\r\n.col-6[data-v-13926690],\r\n.col-7[data-v-13926690],\r\n.col-8[data-v-13926690],\r\n.col-9[data-v-13926690],\r\n.col-10[data-v-13926690],\r\n.col-11[data-v-13926690],\r\n.col-12[data-v-13926690],\r\n.col-auto[data-v-13926690],\r\n.col-lg[data-v-13926690],\r\n.col-lg-1[data-v-13926690],\r\n.col-lg-2[data-v-13926690],\r\n.col-lg-3[data-v-13926690],\r\n.col-lg-4[data-v-13926690],\r\n.col-lg-5[data-v-13926690],\r\n.col-lg-6[data-v-13926690],\r\n.col-lg-7[data-v-13926690],\r\n.col-lg-8[data-v-13926690],\r\n.col-lg-9[data-v-13926690],\r\n.col-lg-10[data-v-13926690],\r\n.col-lg-11[data-v-13926690],\r\n.col-lg-12[data-v-13926690],\r\n.col-lg-auto[data-v-13926690],\r\n.col-md[data-v-13926690],\r\n.col-md-2[data-v-13926690],\r\n.col-md-3[data-v-13926690],\r\n.col-md-4[data-v-13926690],\r\n.col-md-5[data-v-13926690],\r\n.col-md-6[data-v-13926690],\r\n.col-md-7[data-v-13926690],\r\n.col-md-8[data-v-13926690],\r\n.col-md-9[data-v-13926690],\r\n.col-md-10[data-v-13926690],\r\n.col-md-11[data-v-13926690],\r\n.col-md-12[data-v-13926690],\r\n.col-md-auto[data-v-13926690],\r\n.col-sm[data-v-13926690],\r\n.col-sm-1[data-v-13926690],\r\n.col-sm-2[data-v-13926690],\r\n.col-sm-3[data-v-13926690],\r\n.col-sm-4[data-v-13926690],\r\n.col-sm-5[data-v-13926690],\r\n.col-sm-6[data-v-13926690],\r\n.col-sm-7[data-v-13926690],\r\n.col-sm-8[data-v-13926690],\r\n.col-sm-9[data-v-13926690],\r\n.col-sm-10[data-v-13926690],\r\n.col-sm-11[data-v-13926690],\r\n.col-sm-12[data-v-13926690],\r\n.col-sm-auto[data-v-13926690],\r\n.col-xl[data-v-13926690],\r\n.col-xl-1[data-v-13926690],\r\n.col-xl-2[data-v-13926690],\r\n.col-xl-3[data-v-13926690],\r\n.col-xl-4[data-v-13926690],\r\n.col-xl-5[data-v-13926690],\r\n.col-xl-6[data-v-13926690],\r\n.col-xl-7[data-v-13926690],\r\n.col-xl-8[data-v-13926690],\r\n.col-xl-9[data-v-13926690],\r\n.col-xl-10[data-v-13926690],\r\n.col-xl-11[data-v-13926690],\r\n.col-xl-12[data-v-13926690],\r\n.col-xl-auto[data-v-13926690] {\r\n    padding-top: 3px;\r\n    padding-bottom: 3px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterHinban.vue?vue&type=template&id=13926690&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/RegisterHinban.vue?vue&type=template&id=13926690&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
        "v-overlay",
        {
          staticStyle: { "z-index": "200" },
          attrs: { value: _vm.draftsDialogOverlay }
        },
        [
          _c("v-progress-circular", {
            attrs: { indeterminate: "", size: "50" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.overlay,
              expression: "!overlay"
            }
          ]
        },
        [
          _c(
            "v-card",
            { attrs: { hover: "" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12" } },
                [
                  _c(
                    "v-col",
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-form",
                                { ref: "batch" },
                                [
                                  _c(
                                    "v-row",
                                    [
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "2",
                                            sm: "2"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              dense: "",
                                              "item-text": "year",
                                              "menu-props": { maxHeight: 100 },
                                              "item-value": "year",
                                              rules: _vm.rules.required,
                                              items: _vm.yearList,
                                              label: "Shipment Year",
                                              outlined: ""
                                            },
                                            model: {
                                              value: _vm.batch.shipmentYear,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.batch,
                                                  "shipmentYear",
                                                  $$v
                                                )
                                              },
                                              expression: "batch.shipmentYear"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "2",
                                            sm: "2"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              dense: "",
                                              "item-text": "name",
                                              "menu-props": { maxHeight: 100 },
                                              rules: _vm.rules.required,
                                              items: _vm.weekNos,
                                              label: "Shipment Week",
                                              outlined: ""
                                            },
                                            model: {
                                              value: _vm.batch.shipmentWeek,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.batch,
                                                  "shipmentWeek",
                                                  $$v
                                                )
                                              },
                                              expression: "batch.shipmentWeek"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "2",
                                            sm: "2"
                                          }
                                        },
                                        [
                                          _c("v-select", {
                                            attrs: {
                                              dense: "",
                                              "item-text": "name",
                                              disabled:
                                                _vm.$store.state.user.user
                                                  .rights == 3,
                                              rules: _vm.rules.required,
                                              "item-value": "name",
                                              items: _vm.$store.state.class,
                                              label: "Class",
                                              outlined: ""
                                            },
                                            model: {
                                              value: _vm.batch.class,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.batch,
                                                  "class",
                                                  $$v
                                                )
                                              },
                                              expression: "batch.class"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "2",
                                            sm: "2"
                                          }
                                        },
                                        [
                                          _c("v-autocomplete", {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.$store.state.user.user
                                                    .rights == 3,
                                                expression:
                                                  "$store.state.user.user.rights == 3"
                                              }
                                            ],
                                            attrs: {
                                              dense: "",
                                              "item-text":
                                                _vm.$store.state
                                                  .selectedLanguage == "us"
                                                  ? "name_en"
                                                  : "name_jp",
                                              "menu-props": { maxHeight: 100 },
                                              rules: _vm.rules.required,
                                              "item-value": "id",
                                              items: _vm.rndJapaneseAdvisors,
                                              label: "Japanese Adviser",
                                              outlined: ""
                                            },
                                            model: {
                                              value: _vm.batch.rndApprover,
                                              callback: function($$v) {
                                                _vm.$set(
                                                  _vm.batch,
                                                  "rndApprover",
                                                  $$v
                                                )
                                              },
                                              expression: "batch.rndApprover"
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "2",
                                            sm: "2"
                                          }
                                        },
                                        [
                                          _c("v-file-input", {
                                            attrs: {
                                              label: "Attachment",
                                              id: "attachment_file",
                                              name: "attachment_file",
                                              clearable: "",
                                              "show-size": "",
                                              outlined: "",
                                              dense: "",
                                              multiple: ""
                                            }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "v-col",
                                        {
                                          attrs: {
                                            cols: "12",
                                            md: "2",
                                            sm: "2"
                                          }
                                        },
                                        [
                                          _c(
                                            "v-btn",
                                            {
                                              staticStyle: {
                                                "margin-top": "3px"
                                              },
                                              attrs: {
                                                width: "100%",
                                                color: "grey"
                                              },
                                              on: {
                                                click: function($event) {
                                                  _vm.imageReferenceDialog = true
                                                }
                                              }
                                            },
                                            [_vm._v("Image Reference")]
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
                                [
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "2" } },
                                    [
                                      _c("v-text-field", {
                                        attrs: {
                                          label: "Additional Rows",
                                          outlined: "",
                                          dense: "",
                                          onkeydown:
                                            "return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )"
                                        },
                                        model: {
                                          value: _vm.additionalRows,
                                          callback: function($$v) {
                                            _vm.additionalRows = $$v
                                          },
                                          expression: "additionalRows"
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-col",
                                    { attrs: { cols: "1" } },
                                    [
                                      _c(
                                        "v-btn",
                                        {
                                          staticStyle: { "margin-top": "3px" },
                                          attrs: {
                                            color: "grey",
                                            depressed: ""
                                          },
                                          on: { click: _vm.addRows }
                                        },
                                        [_vm._v("Add")]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("v-spacer"),
                                  _vm._v(" "),
                                  _c(
                                    "v-btn",
                                    {
                                      staticStyle: {
                                        "margin-top": "3px",
                                        "margin-right": "1.3%"
                                      },
                                      attrs: { color: "teal" },
                                      on: {
                                        click: function($event) {
                                          _vm.dialog_other_details = true
                                        }
                                      }
                                    },
                                    [_c("span", [_vm._v("Notes/Rules")])]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { top: "" },
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
                                                    staticStyle: {
                                                      "margin-top": "3px",
                                                      "margin-right": "1.3%"
                                                    },
                                                    attrs: {
                                                      color: "#26C6DA",
                                                      icon: ""
                                                    },
                                                    on: {
                                                      click:
                                                        _vm.handleRetrieveDialog
                                                    }
                                                  },
                                                  on
                                                ),
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "35px"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "mdi-file-download"
                                                      )
                                                    ]
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
                                      _c("span", [_vm._v("Retrieve Draft")])
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "v-tooltip",
                                    {
                                      attrs: { top: "" },
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
                                                    staticStyle: {
                                                      "margin-top": "3px",
                                                      "margin-right": "1.3%"
                                                    },
                                                    attrs: {
                                                      color: "#66BB6A",
                                                      icon: ""
                                                    },
                                                    on: {
                                                      click: function($event) {
                                                        return _vm.handleSaveAsDraft()
                                                      }
                                                    }
                                                  },
                                                  on
                                                ),
                                                [
                                                  _c(
                                                    "v-icon",
                                                    {
                                                      staticStyle: {
                                                        "font-size": "35px"
                                                      }
                                                    },
                                                    [
                                                      _vm._v(
                                                        "mdi-content-save-all"
                                                      )
                                                    ]
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
                                      _c("span", [_vm._v("Save As Draft")])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticStyle: {
                                    "border-style": "solid",
                                    "border-width": "0.5px"
                                  }
                                },
                                [
                                  _vm.load
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
                                        _vm._l(_vm.columnSettings, function(
                                          setting,
                                          ind
                                        ) {
                                          return _c("hot-column", {
                                            key: ind,
                                            attrs: {
                                              settings: _vm.columnSettings[ind]
                                            }
                                          })
                                        }),
                                        1
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
                      )
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
                    "v-row",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticStyle: { "margin-right": "2%" },
                          attrs: { color: "#1B5E20", dark: "" },
                          on: {
                            click: function($event) {
                              return _vm.handleSave()
                            }
                          }
                        },
                        [_vm._v("Register")]
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
              attrs: { scrollable: "", "max-width": "50%" },
              model: {
                value: _vm.imageReferenceDialog,
                callback: function($$v) {
                  _vm.imageReferenceDialog = $$v
                },
                expression: "imageReferenceDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c("v-card-title", [_vm._v("Image Reference")]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("v-card-text", [
                    _c(
                      "form",
                      {
                        attrs: {
                          action: "POST",
                          enctype: "multipart/form-data"
                        }
                      },
                      [
                        _c("v-file-input", {
                          staticClass: "mt-1",
                          attrs: {
                            id: "imageFiles",
                            placeholder: "Insert Images Here",
                            "hide-details": "",
                            label: "Image",
                            outlined: "",
                            name: "files[]",
                            dense: "",
                            multiple: "",
                            "show-size": "",
                            "prepend-icon": "mdi-camera",
                            clearable: ""
                          },
                          on: {
                            change: function($event) {
                              return _vm.imageListSet()
                            }
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("small", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(
                        "NOTE : Must include (-) on the item range to indentify the scope of reference to the images. Eg. 1-10."
                      )
                    ]),
                    _vm._v(" "),
                    _vm.fileList.length != 0
                      ? _c(
                          "ol",
                          _vm._l(_vm.fileList, function(file, ind) {
                            return _c(
                              "li",
                              { key: ind },
                              [
                                _vm._v(
                                  "\r\n                            " +
                                    _vm._s(file.name) +
                                    "\r\n                            "
                                ),
                                _c(
                                  "v-row",
                                  [
                                    _c(
                                      "v-col",
                                      {
                                        attrs: {
                                          cols: "12",
                                          sm: "12",
                                          md: "12"
                                        }
                                      },
                                      [
                                        _c(
                                          "v-card",
                                          [
                                            _c("v-img", {
                                              attrs: {
                                                src: file.blob,
                                                "lazy-src": file.blob,
                                                "aspect-ratio": "1.7",
                                                contain: ""
                                              },
                                              scopedSlots: _vm._u(
                                                [
                                                  {
                                                    key: "placeholder",
                                                    fn: function() {
                                                      return [
                                                        _c(
                                                          "v-row",
                                                          {
                                                            staticClass:
                                                              "fill-height ma-0",
                                                            attrs: {
                                                              align: "center",
                                                              justify: "center"
                                                            }
                                                          },
                                                          [
                                                            _c(
                                                              "v-progress-circular",
                                                              {
                                                                attrs: {
                                                                  indeterminate:
                                                                    "",
                                                                  color:
                                                                    "grey lighten-5"
                                                                }
                                                              }
                                                            )
                                                          ],
                                                          1
                                                        )
                                                      ]
                                                    },
                                                    proxy: true
                                                  }
                                                ],
                                                null,
                                                true
                                              )
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "v-row",
                                          { staticClass: "mx-auto" },
                                          [
                                            _c("v-text-field", {
                                              attrs: {
                                                cols: "6",
                                                label: "Item Range",
                                                outlined: "",
                                                dense: "",
                                                "hide-details": ""
                                              },
                                              on: {
                                                blur: function($event) {
                                                  return _vm.assignImageToItems(
                                                    ind
                                                  )
                                                }
                                              },
                                              model: {
                                                value: file.range,
                                                callback: function($$v) {
                                                  _vm.$set(file, "range", $$v)
                                                },
                                                expression: "file.range"
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c("v-text-field", {
                                              attrs: {
                                                cols: "6",
                                                label: "Description",
                                                outlined: "",
                                                dense: "",
                                                "hide-details": ""
                                              },
                                              model: {
                                                value: file.desc,
                                                callback: function($$v) {
                                                  _vm.$set(file, "desc", $$v)
                                                },
                                                expression: "file.desc"
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
                          }),
                          0
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { color: "blue darken-1", text: "" },
                          on: {
                            click: function($event) {
                              _vm.imageReferenceDialog = false
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
            "el-dialog",
            {
              attrs: {
                title: "【注意事項】/【Notes】",
                visible: _vm.dialog_other_details,
                width: "95%"
              },
              on: {
                "update:visible": function($event) {
                  _vm.dialog_other_details = $event
                }
              }
            },
            [
              _c("table", [
                _c("tbody", [
                  _c("tr", [
                    _c("td", [
                      _c("ol", { staticStyle: { "margin-left": "20px" } }, [
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      'All part fill in the yellow (if there is a blank in one place, acceptance are not allowed), Blue item refers to the "CODE sheet", please fill in the code.'
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "黄色の部分をすべて記入（1箇所でも空欄がある場合、受理不可。） 青字の項目は「CODEシート」のコード表参照"
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "Be sure to attach photos and drawings. (If the photo / drawing is not, acceptance are not allowed.)"
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "必ず写真及び図面を添付。（写真/図面が無い場合、受理不可。"
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "\r\n                                            PROCESSING COUNTRY is, in the case of PHILLIPINES please teach the manufacturer name.\r\n                                            "
                                    ),
                                    _c("br"),
                                    _vm._v(
                                      "[Note] also suppliers in the Philippines, not a made Philippines. Country of origin judgment, where confirmation if it were made of is needed.\r\n                                        "
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "\r\n                                            PROCESSING COUNTRYがPHILLIPINESの場合 HRD製以外のものはメーカー名をご教示願います。\r\n                                            "
                                    ),
                                    _c("br"),
                                    _vm._v(" "),
                                    _c("br"),
                                    _vm._v(
                                      "【注意】サプライヤーがフィリピンだからといってフィリピン製にはなりません。商品/部品等がどこで作られたものかで原産国は判断されます。\r\n                                        "
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "Additional, please attach if there are drawings and documents."
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "別途、図面や資料がございましたら、本シートをメール送信される際に添付願います。"
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "A material is pristine in the case of (wood) is, fill in the wood species (EX: hinoki / cedar / Douglas fir / red pine / white pine / US Khiva / hemlock / SPF, etc.)"
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "材質が、無垢（木材）の場合には、材種を記入（EX：檜/杉/米松/赤松/白松/米ヒバ/米栂/SPF等）"
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "The material is, in the case of plywood class describes how lauan group or broadleaf group.In the case of lauan group, and the presence or absence of meranti group tree species, also it is also described thickness."
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "材質が、合板類の場合には、ラワン系か広葉樹系かを記載 ラワン系の場合はメランチ系樹種を含むかどうかも記載 さらに厚みも記載"
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "The material is, in the case of metals, fill in the type of metal (EX: iron / copper / brass / stainless steel / aluminum, etc.)"
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "材質が、金属類の場合には、金属の種類を記入（EX：鉄/銅/真鍮/ステンレス/アルミニウム等）"
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "The material is, in the case of tile class is, fill in the type of tile (EX: ceramic / brick / granite, etc.) In the case of the described ceramic the square meter number and size per sheet is also described the presence or absence of the glaze."
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "材質が、タイル類の場合には、タイルの種類を記入（EX：セラミック/レンガ/御影石等）また1枚あたりの平米数とサイズを記載 セラミックの場合は釉薬の有無も記載。"
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "In the case of non-woven fabrics, to describe the length or fiber or short fiber. In the case of long fibers, describe any of the nylon / polyester / polypropylene / viscose rayon. Further described the number of grams per square meter"
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "不織布の場合、長繊維か短繊維かを記載 また長繊維の場合、ナイロン製/ポリエステル製/ポリプロピレン製/ビスコースレーヨン製のいづれかを記載 さらに1平方メートルあたりのグラム数を記載"
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          [
                            _vm.language == "eng"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "Chemicals / liquid, be sure to attach the MSDS ,Other questions the point, please contact the HRD Logistics Department."
                                    )
                                  ])
                                ]
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.language == "jp"
                              ? [
                                  _c("span", [
                                    _vm._v(
                                      "化学品/液体の場合は、MSDSを必ず添付 その他ご不明は点は、HRD物流部に気軽にお問い合わせ下さい。"
                                    )
                                  ])
                                ]
                              : _vm._e()
                          ],
                          2
                        )
                      ])
                    ])
                  ])
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "v-dialog",
            {
              attrs: { "min-height": "", width: "500" },
              model: {
                value: _vm.retrieveDialog,
                callback: function($$v) {
                  _vm.retrieveDialog = $$v
                },
                expression: "retrieveDialog"
              }
            },
            [
              _c(
                "v-card",
                [
                  _c(
                    "v-card-title",
                    [
                      _vm._v(
                        "\r\n                    Draft List\r\n                    "
                      ),
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          "append-icon": "mdi-magnify",
                          label: "Search",
                          "hide-details": "",
                          clearable: ""
                        },
                        model: {
                          value: _vm.draftListSearch,
                          callback: function($$v) {
                            _vm.draftListSearch = $$v
                          },
                          expression: "draftListSearch"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-data-table", {
                    staticStyle: { "margin-top": "20px" },
                    attrs: {
                      headers: _vm.draftListHeaders,
                      items: _vm.draftList,
                      search: _vm.draftListSearch
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "item.actions",
                        fn: function(ref) {
                          var item = ref.item
                          return [
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.handleImportDraft(item)
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { small: "" } }, [
                                  _vm._v("mdi-pencil")
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "v-btn",
                              {
                                attrs: { icon: "", small: "" },
                                on: {
                                  click: function($event) {
                                    return _vm.handleDeleteDraft(item)
                                  }
                                }
                              },
                              [
                                _c("v-icon", { attrs: { small: "" } }, [
                                  _vm._v("mdi-delete")
                                ])
                              ],
                              1
                            )
                          ]
                        }
                      }
                    ])
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-dialog",
            {
              attrs: { visible: _vm.dialogVisible },
              on: {
                "update:visible": function($event) {
                  _vm.dialogVisible = $event
                }
              }
            },
            [
              _c("img", {
                attrs: { width: "100%", src: _vm.imagePreview, alt: "" }
              })
            ]
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

/***/ "./resources/js/components/RegisterHinban.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/RegisterHinban.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegisterHinban_vue_vue_type_template_id_13926690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegisterHinban.vue?vue&type=template&id=13926690&scoped=true& */ "./resources/js/components/RegisterHinban.vue?vue&type=template&id=13926690&scoped=true&");
/* harmony import */ var _RegisterHinban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegisterHinban.vue?vue&type=script&lang=js& */ "./resources/js/components/RegisterHinban.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _RegisterHinban_vue_vue_type_style_index_0_id_13926690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css& */ "./resources/js/components/RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _RegisterHinban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegisterHinban_vue_vue_type_template_id_13926690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegisterHinban_vue_vue_type_template_id_13926690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "13926690",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/RegisterHinban.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/RegisterHinban.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/RegisterHinban.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterHinban.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterHinban.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_style_index_0_id_13926690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterHinban.vue?vue&type=style&index=0&id=13926690&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_style_index_0_id_13926690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_style_index_0_id_13926690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_style_index_0_id_13926690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_style_index_0_id_13926690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_style_index_0_id_13926690_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/RegisterHinban.vue?vue&type=template&id=13926690&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/RegisterHinban.vue?vue&type=template&id=13926690&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_template_id_13926690_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./RegisterHinban.vue?vue&type=template&id=13926690&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/RegisterHinban.vue?vue&type=template&id=13926690&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_template_id_13926690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegisterHinban_vue_vue_type_template_id_13926690_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);