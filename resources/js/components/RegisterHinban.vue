<template>
<div>
    <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="50"></v-progress-circular>
    </v-overlay>
    <v-overlay :value="draftsDialogOverlay" style="z-index:200">
        <v-progress-circular indeterminate size="50"></v-progress-circular>
    </v-overlay>
    <div v-show="!overlay">
        <!-- <v-form ref="batch">
            <v-card height="65" hover>
                <v-row>
                    <v-col cols="12">
                        <v-col>
                            <v-row>
                                <v-col cols=3>
                                    <v-select dense item-text="year" :menu-props="{'maxHeight': 140}"  item-value="year" :rules="rules.required" :items="yearList" label="Shipment Year" outlined v-model="batch.shipmentYear"></v-select>

                                </v-col>
                                <v-col cols=3>
                                    <v-select dense item-text="name" :menu-props="{'maxHeight': 140}" :rules="rules.required" :items="weekNos" label="Shipment Week" outlined v-model="batch.shipmentWeek"></v-select>
                                </v-col>
                                <v-col cols=2>
                                    <v-select dense item-text="name" :rules="rules.required" item-value="name" :items="$store.state.class" label="Class" outlined v-model="batch.class"></v-select>
                                </v-col>
                                <v-col cols=4>

                                </v-col>
                            </v-row>
                                <v-row>
                                <v-col>
                                    <v-textarea :no-resize="true" cols=4 rows=2 outlined :rules="rules.required" label="Manufacture Name" v-model="batch.manufactureName"></v-textarea>
                                </v-col>
                                <v-col cols=4>
                                    <v-textarea :no-resize="true" cols="12" rows=2 outlined :rules="rules.required" name="input-7-4" label="Description of Application" v-model="batch.descriptionOfApplication"></v-textarea>
                                </v-col>
                                <v-col cols=4>
                                    <v-textarea :no-resize="true" cols="12" rows=2 outlined name="input-7-4" label="Processing description(Optional) " v-model="batch.processingProcess"></v-textarea>
                                </v-col>
                            </v-row> 
                        </v-col>
                    </v-col>
                </v-row>
            </v-card>
      </v-form>-->

        <v-card hover>
            <v-col cols="12">
                <v-col>
                    <v-row>
                        <v-col>
                            <v-form ref="batch">
                                <v-row>
                                    <v-col cols="12" md="2" sm="2">
                                        <!-- <v-text-field label="Shipment Year"  :rules="rules.year" outlined dense v-model="$store.state.batch.shipmentYear" onkeyup="this.value=this.value.replace(/[^\d]/,'')"></v-text-field> -->
                                        <!-- <v-text-field label="Shipment Week" :rules="$store.state.rules.required" outlined dense v-model="$store.state.batch.shipmentWeek" onkeyup="this.value=this.value.replace(/[^\d]/,'')"></v-text-field> -->
                                        <v-select dense item-text="year" :menu-props="{'maxHeight': 100}" item-value="year" :rules="rules.required" :items="yearList" label="Shipment Year" outlined v-model="batch.shipmentYear"></v-select>
                                    </v-col>
                                    <v-col cols="12" md="2" sm="2">
                                        <v-select dense item-text="name" :menu-props="{'maxHeight': 100}" :rules="rules.required" :items="weekNos" label="Shipment Week" outlined v-model="batch.shipmentWeek"></v-select>
                                    </v-col>
                                    <v-col cols="12" md="2" sm="2">
                                        <v-select dense item-text="name" :disabled="$store.state.user.user.rights == 3" :rules="rules.required" item-value="name" :items="$store.state.class" label="Class" outlined v-model="batch.class"></v-select>
                                    </v-col>
                                    <v-col cols="12" md="2" sm="2">
                                        <v-autocomplete v-show="$store.state.user.user.rights == 3" dense :item-text="$store.state.selectedLanguage == 'us' ? 'name_en':'name_jp'" :menu-props="{'maxHeight': 100}" :rules="rules.required" item-value="id" :items="rndJapaneseAdvisors" label="Japanese Adviser" outlined v-model="batch.rndApprover"></v-autocomplete>
                                    </v-col>
                                    <v-col cols="12" md="2" sm="2">
                                        <v-file-input label="Attachment" id="attachment_file" name="attachment_file" clearable show-size outlined dense multiple></v-file-input>
                                    </v-col>
                                    <v-col cols="12" md="2" sm="2">
                                        <v-btn width="100%"  color="grey" style="margin-top:3px" @click="imageReferenceDialog = true">Image Reference</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                            <v-row>
                                <v-col cols="2">
                                    <v-text-field label="Additional Rows" outlined dense v-model="additionalRows" onkeydown="return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )"></v-text-field>
                                </v-col>
                                <v-col cols="1">
                                    <v-btn color="grey" style="margin-top:3px" depressed @click="addRows">Add</v-btn>
                                </v-col>
                                <!-- <v-col cols="2">
                                    <v-btn color="grey" style="margin-top:3px" @click="imageReferenceDialog = true">Image Reference</v-btn>
                                </v-col> -->
                                <v-spacer></v-spacer>

                                <v-btn color="teal" style="margin-top: 3px; margin-right: 1.3% " @click="dialog_other_details = true">
                                    <span>Notes/Rules</span>
                                </v-btn>

                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="#26C6DA" icon v-on="on" style="margin-top: 3px; margin-right: 1.3% " @click="handleRetrieveDialog">
                                            <v-icon style="font-size: 35px">mdi-file-download</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Retrieve Draft</span>
                                </v-tooltip>

                                <v-tooltip top>
                                    <template v-slot:activator="{ on }">
                                        <v-btn color="#66BB6A" icon v-on="on" style="margin-top: 3px; margin-right: 1.3% " @click="handleSaveAsDraft()">
                                            <v-icon style="font-size: 35px">mdi-content-save-all</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Save As Draft</span>
                                </v-tooltip>
                                <!-- </v-col> -->
                                <!-- </v-col> -->
                            </v-row>
                            <!-- <el-button type="success" size="mini" @click="dialog_other_details = true"><span>Notes/Rules</span></el-button> -->

                            <div style="border-style: solid; border-width: 0.5px;">
                                <hot-table v-if="load" id="hot" :data="hotData" :settings="hotSettings" :row-headers="true" :col-headers="true" ref="myTable">
                                    <hot-column v-for="(setting,ind) in columnSettings" :key="ind" :settings="columnSettings[ind]"></hot-column>
                                </hot-table>
                            </div>
                        </v-col>
                    </v-row>
                </v-col>
            </v-col>
            <v-col cols="12">
                <v-row>
                    <v-spacer></v-spacer>
                    <v-btn color="#1B5E20" @click="handleSave()" dark style="margin-right:2%">Register</v-btn>
                </v-row>
            </v-col>
            <!-- <form action="POST" enctype="multipart/form-data" style="display:none">
          <table class="table table-bordered">
            <tr v-for="(input,i)  in hotData" :key="i">
              <td>
                <input type="file" class="image" name="files[]" @change="fileInput(i)" id />
              </td>
            </tr>
          </table>
        </form>-->
        </v-card>
        <v-dialog v-model="imageReferenceDialog" scrollable max-width="50%">
            <v-card>
                <v-card-title>Image Reference</v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <form action="POST" enctype="multipart/form-data">
                        <v-file-input id="imageFiles" placeholder="Insert Images Here" hide-details label="Image" outlined name="files[]" dense multiple show-size prepend-icon="mdi-camera" clearable @change="imageListSet()" class="mt-1"></v-file-input>
                    </form>
                    <hr />
                    <small style="font-weight: bold">NOTE : Must include (-) on the item range to indentify the scope of reference to the images. Eg. 1-10.</small>
                    <ol v-if="fileList.length != 0">
                        <li v-for="(file,ind) in fileList" :key="ind">
                            {{file.name}}
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-card>
                                        <v-img :src="file.blob" :lazy-src="file.blob" aspect-ratio="1.7" contain>
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align="center" justify="center">
                                                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                    </v-card>
                                    <v-row class="mx-auto">
                                        <v-text-field cols="6" label="Item Range" v-model="file.range" @blur="assignImageToItems(ind)" outlined dense hide-details></v-text-field>
                                        <v-text-field cols="6" label="Description" v-model="file.desc" outlined dense hide-details></v-text-field>
                                    </v-row>
                                </v-col>
                            </v-row>
                        </li>
                    </ol>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions>
                    <v-btn color="blue darken-1" text @click="imageReferenceDialog = false">Close</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <el-dialog title="【注意事項】/【Notes】" :visible.sync="dialog_other_details" :width="'95%'">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <ol style="margin-left: 20px;">
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>All part fill in the yellow (if there is a blank in one place, acceptance are not allowed), Blue item refers to the "CODE sheet", please fill in the code.</span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>黄色の部分をすべて記入（1箇所でも空欄がある場合、受理不可。） 青字の項目は「CODEシート」のコード表参照</span>
                                    </template>
                                </li>
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>Be sure to attach photos and drawings. (If the photo / drawing is not, acceptance are not allowed.)</span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>必ず写真及び図面を添付。（写真/図面が無い場合、受理不可。</span>
                                    </template>
                                </li>
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>
                                            PROCESSING COUNTRY is, in the case of PHILLIPINES please teach the manufacturer name.
                                            <br />[Note] also suppliers in the Philippines, not a made Philippines. Country of origin judgment, where confirmation if it were made of is needed.
                                        </span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>
                                            PROCESSING COUNTRYがPHILLIPINESの場合 HRD製以外のものはメーカー名をご教示願います。
                                            <br />

                                            <br />【注意】サプライヤーがフィリピンだからといってフィリピン製にはなりません。商品/部品等がどこで作られたものかで原産国は判断されます。
                                        </span>
                                    </template>
                                </li>
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>Additional, please attach if there are drawings and documents.</span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>別途、図面や資料がございましたら、本シートをメール送信される際に添付願います。</span>
                                    </template>
                                </li>
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>A material is pristine in the case of (wood) is, fill in the wood species (EX: hinoki / cedar / Douglas fir / red pine / white pine / US Khiva / hemlock / SPF, etc.)</span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>材質が、無垢（木材）の場合には、材種を記入（EX：檜/杉/米松/赤松/白松/米ヒバ/米栂/SPF等）</span>
                                    </template>
                                </li>
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>The material is, in the case of plywood class describes how lauan group or broadleaf group.In the case of lauan group, and the presence or absence of meranti group tree species, also it is also described thickness.</span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>材質が、合板類の場合には、ラワン系か広葉樹系かを記載 ラワン系の場合はメランチ系樹種を含むかどうかも記載 さらに厚みも記載</span>
                                    </template>
                                </li>
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>The material is, in the case of metals, fill in the type of metal (EX: iron / copper / brass / stainless steel / aluminum, etc.)</span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>材質が、金属類の場合には、金属の種類を記入（EX：鉄/銅/真鍮/ステンレス/アルミニウム等）</span>
                                    </template>
                                </li>
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>The material is, in the case of tile class is, fill in the type of tile (EX: ceramic / brick / granite, etc.) In the case of the described ceramic the square meter number and size per sheet is also described the presence or absence of the glaze.</span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>材質が、タイル類の場合には、タイルの種類を記入（EX：セラミック/レンガ/御影石等）また1枚あたりの平米数とサイズを記載 セラミックの場合は釉薬の有無も記載。</span>
                                    </template>
                                </li>
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>In the case of non-woven fabrics, to describe the length or fiber or short fiber. In the case of long fibers, describe any of the nylon / polyester / polypropylene / viscose rayon. Further described the number of grams per square meter</span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>不織布の場合、長繊維か短繊維かを記載 また長繊維の場合、ナイロン製/ポリエステル製/ポリプロピレン製/ビスコースレーヨン製のいづれかを記載 さらに1平方メートルあたりのグラム数を記載</span>
                                    </template>
                                </li>
                                <li>
                                    <template v-if="language == 'eng'">
                                        <span>Chemicals / liquid, be sure to attach the MSDS ,Other questions the point, please contact the HRD Logistics Department.</span>
                                    </template>
                                    <template v-if="language == 'jp'">
                                        <span>化学品/液体の場合は、MSDSを必ず添付 その他ご不明は点は、HRD物流部に気軽にお問い合わせ下さい。</span>
                                    </template>
                                </li>
                            </ol>
                        </td>
                    </tr>
                </tbody>
            </table>
        </el-dialog>
        <v-dialog v-model="retrieveDialog" min-height width="500">
            <!-- <v-card>
                    <v-card-title class="headline grey lighten-2" primary-title style="height: 55px">
                        Retrieve Draft
                    </v-card-title>
                    <v-card-text style="margin-top: 20px">
                        <v-row>
                            <v-text-field dense label="Title" outlined></v-text-field>
                            <v-text-field dense label="Outlined" outlined></v-text-field>
                            <v-btn style="height: 40px">
                                <v-icon>mdi-magnify</v-icon>
                            </v-btn>
                        </v-row>
                    </v-card-text>
                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">
                            I accept
                        </v-btn>
                    </v-card-actions>
        </v-card>-->
            <v-card>
                <v-card-title>
                    Draft List
                    <v-spacer></v-spacer>
                    <v-text-field outlined dense v-model="draftListSearch" append-icon="mdi-magnify" label="Search" hide-details clearable></v-text-field>
                </v-card-title>
                <v-data-table :headers="draftListHeaders" :items="draftList" :search="draftListSearch" style="margin-top: 20px">
                    <template v-slot:item.actions="{ item }">
                        <v-btn icon small @click="handleImportDraft(item)">
                            <v-icon small>mdi-pencil</v-icon>
                        </v-btn>
                        <v-btn icon small @click="handleDeleteDraft(item)">
                            <v-icon small>mdi-delete</v-icon>
                        </v-btn>
                    </template>
                </v-data-table>
                <!--<v-divider></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                        I accept
                    </v-btn>
          </v-card-actions>-->
            </v-card>
        </v-dialog>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="imagePreview" alt />
        </el-dialog>
    </div>
</div>
</template>

<script>
import {
    HotTable,
    HotColumn
} from "@handsontable/vue";
import Handsontable from "handsontable";
import Swal from "sweetalert2";
import AxiosClass from "@/js/AxiosClass";

export default {
    data() {
        return {
            notificationSystem: {
                options: {
                    show: {
                        theme: "dark",
                        icon: "icon-person",
                        position: "topCenter",
                        progressBarColor: "rgb(0, 255, 184)",
                        buttons: [
                        [
                            "<button>Ok</button>",
                            function(instance, toast) {
                            alert("Hello world!");
                            },
                            true
                        ],
                        [
                            "<button>Close</button>",
                            function(instance, toast) {
                            instance.hide(
                                {
                                transitionOut: "fadeOutUp",
                                onClosing: function(instance, toast, closedBy) {
                                    console.info("closedBy: " + closedBy);
                                }
                                },
                                toast,
                                "buttonName"
                            );
                            }
                        ]
                        ],
                        onOpening: function(instance, toast) {
                        console.info("callback abriu!");
                        },
                        onClosing: function(instance, toast, closedBy) {
                        console.info("closedBy: " + closedBy);
                        }
                    },
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
                },
                {
                    text: "Date Created",
                    value: "date"
                },
                {
                    text: "Actions",
                    value: "actions",
                    sortable: false
                }
            ],
            batch: {
                class: null,
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
                email: [v => /.+@.+/.test(v) || "Invalid Email Address"],
                required: [value => !!value || "Required"],
                year: [x => /^(?![01]|20[01])\d{4}$/.test(x) || "Invalid Year Format"]
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
                afterChange: function (changes, source) {
                    var lists = JSON.parse(localStorage.getItem("lists"));

                    if (changes != null) {
                        for (var x = 0; x < changes.length; x++) {
                            if (changes[x][1] == "hinban") {
                                if (changes[x][2] != changes[x][3]) {
                                    this.setDataAtRowProp(
                                        changes[x][0],
                                        "hinban",
                                        changes[x][3].toUpperCase()
                                    );
                                }
                            }

                            if (changes[x][1] == "clr") {
                                if(changes[x][2] != changes[x][3]){

                                    var clr = lists.color.filter(rec => {
                                        return (
                                            rec.CLR_CD.toLowerCase() == changes[x][3].toLowerCase()
                                        );
                                    });
                                    if (clr.length == 1) {
                                        this.setDataAtRowProp(changes[x][0],"clr",`${clr[0].CLR_CD}/${clr[0].CLR_NM_JP}`);
                                    }
                                    
                                }
                                
                            }
                            if (changes[x][1] == "unit") {
                                if(changes[x][2] != changes[x][3]){
                                    var unit = lists.unit.filter(rec => {return rec.UNIT_CD == parseInt(changes[x][3])});
                                    if (unit.length == 1) {
                                        this.setDataAtRowProp(changes[x][0],"unit",`${unit[0].UNIT_CD}/${unit[0].UNIT_PLURAL}`);
                                    }
                                }
                            }

                            if (changes[x][1] == "mat_cd") {
                                if(changes[x][2] != changes[x][3]){
                                    var material = lists.material.filter(rec => {return rec.MAT_CD == changes[x][3]});
                                    if (material.length == 1) {
                                        this.setDataAtRowProp(changes[x][0],"mat_cd",`${material[0].MAT_CD}/${material[0].MAT_NM_JP}`);
                                    }
                                }

                            }
                            
                            if (changes[x][1] == "cat_cd") {
                                if(changes[x][2] != changes[x][3]){

                                    var category = lists.category.filter(rec => {return rec.CAT_CD == changes[x][3]});
                                    if (category.length == 1) {
                                        this.setDataAtRowProp(changes[x][0],"cat_cd",`${category[0].CAT_CD}/${category[0].CAT_NM_JP}`);
                                        this.setDataAtRowProp(changes[x][0], 'p_div_cd',`${category[0].DIV_CD}/${category[0].DIV_NM}`);
                                        this.setDataAtRowProp( changes[x][0],'e_div_cd',`${category[0].DIV_CD}/${category[0].COM_CD}` );
                                    }
                                }
                            }

                            if (changes[x][1] == "unit_prc") {
                              if(changes[x][2] != changes[x][3]){
                                  this.setDataAtRowProp(changes[x][0],"unit_prc",parseInt(changes[x][3]));
                              }
                            }

                            if (changes[x][1] == "size_l" || changes[x][1] == "size_w" || changes[x][1] == "size_h") {
                                var l = this.getDataAtRowProp(changes[x][0], "size_l") != "" ?  parseFloat(this.getDataAtRowProp(changes[x][0], "size_l")) : 0;
                                var w = this.getDataAtRowProp(changes[x][0], "size_w") != "" ? parseFloat(this.getDataAtRowProp(changes[x][0], "size_w")) : 0;
                                var h = this.getDataAtRowProp(changes[x][0], "size_h") != "" ? parseFloat(this.getDataAtRowProp(changes[x][0], "size_h")) : 0;
                                var t = (l * w * h) / 1000000000;

                                if (t > 0) {
                                    this.setDataAtRowProp(changes[x][0], "cbm_qty", t.toFixed(4));
                                }
                            }

                            if (changes[x][1] == "req_kind") {
                                if(changes[x][2] != changes[x][3]){

                                    let value = lists.requestKind.filter(rec => {
                                        if(changes[x][3].includes('/')){                                       
                                            if (changes[x][3].split("/").length == 3) {
                                                return (rec.REQ_KIND_DTL_NAME_JP ==changes[x][3].split("/")[1] +"/" + changes[x][3].split("/")[2] );
                                            }else {
                                                return (rec.REQ_KIND_DTL_NAME_JP == changes[x][3].split("/")[1])
                                            }
                                        }else{
                                            return rec.REQ_KIND_CD == changes[x][3].toUpperCase()
                                        }
                                    });


                                    this.setDataAtRowProp(changes[x][0], 'req_kind_no', value[0].REQ_KIND_NO);
                                    this.setDataAtRowProp(changes[x][0], 'req_kind', `${value[0].REQ_KIND_CD}/${value[0].REQ_KIND_DTL_NAME_JP}`);
                                }
                            }
                        }
                    }
                    this.validateCells();
                }
            },
            columnSettings: [
                {
                    title: "HINBAN",
                    data: "hinban",
                    validator: "duplicate-validator",
                    width: 400
                },
                {
                    title: "CLR",
                    type: "dropdown",
                    source: null,
                    data: "clr",
                    width: 200
                },
                {
                    title: "HINBAN NAME (JAPANESE)",
                    data: "hinban_nm_jp",
                    validator: "required-validator",
                    width: 220
                },
                {
                    title: "HINBAN NAME",
                    data: "hinban_nm",
                    validator: "required-validator",
                    width: 220
                },
                {
                    title: "SIZE_L",
                    data: "size_l",
                    type: "numeric",
                    width: 70
                },
                {
                    title: "SIZE_W",
                    data: "size_w",
                    type: "numeric",
                    width: 70
                },
                {
                    title: "SIZE_H",
                    data: "size_h",
                    type: "numeric",
                    width: 70
                },
                {
                    title: "CBM",
                    data: "cbm_qty",
                    width: 90,
                    readOnly: true
                },
                {
                    title: "KGS",
                    data: "kg_qty",
                    width: 100,
                    type: "numeric",
                    numericFormat: {
                        pattern: "0.00"
                    }
                },
                {
                    title: "PRICE ¥",
                    data: "unit_prc",
                    type: "numeric",
                    width: 150
                },
                {
                    title: "UNIT",
                    type: "dropdown",
                    data: "unit",
                    source: null,
                    width: 200
                },
                {
                    title: "MATERIAL CODE",
                    type: "dropdown",
                    data: "mat_cd",
                    source: null,
                    width: 200
                },
                {
                    title: "CATEGORY",
                    type: "dropdown",
                    data: "cat_cd",
                    source: null,
                    width: 200
                },
                {
                    title: "REQUEST KIND",
                    data: "req_kind",
                    type: "dropdown",
                    source: null,
                    width: 300
                },
                {
                    title: "REQUEST KIND NO.",
                    data: "req_kind_no",
                    readOnly: true,
                    width: 200
                },
                {
                    title: "PRODUCT DIVISION",
                    data: "p_div_cd",
                    readOnly: true,
                    width: 170
                },
                {
                    title: "EXPORT DIVISION",
                    data: "e_div_cd",
                    readOnly: true,
                    width: 170
                },
                {
                    title: "PROCESSING COUNTRY",
                    data: "use_for",
                    type: "dropdown",
                    comment: {value: "各材質は、大よその％で表示してください。原産国とは、原材料から作っている国のことになります。輸入国がすべて原産国の基準ではありません。（フィリピン国で購入した物でも原産国は中国や台湾の場合があります。"},
                    source: null,
                    width: 200
                },
                {
                    title: "MANUFACTURE NAME",
                    data: "manufacture_name",
                    validator: "required-validator",
                    source: null,
                    width: 200
                },
                {
                    title: "USAGE DESCRIPTION",
                    data: "description",
                    comment: {value: "住宅のどの部分にどう使用する商品なのか詳細を記載してください"},
                    validator: "required-validator",
                    width: 200
                },
                {
                    title: "PROCESSING STEP DESCRIPTION",
                    data: "processing_description",
                    validator: "required-validator",
                    comment: {value: "（HRD加工の場合のみ） この加工工程により、原産国がフィリピンであることが確認されています。"},
                    source: null,
                    width: 275
                },
                // {
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
                }
            ]
        };
    },
    created() {
        // this.$store.getters.setLists

        this.setClassIfLocalStaff();
        this.getRndJapaneseAdvisors();
        setTimeout(() => {
            this.setLists();
        }, 500);
    },
    components: {
        HotTable,
        HotColumn
    },
    computed: {
        weekNos() {
            var weeks = [];
            for (var x = 1; x <= 53; x++) {
                weeks.push(x);
            }
            return weeks;
        },
        yearList() {
            let year = this.$store.getters["getYearList"];
            this.$set(this.batch, "shipmentYear", year[1].year);
            return year;
        }
    },

    methods: {
        assignImageToItems(i) {
            // console.log(this.fileList[i]);
            // console.log(
            //   this.fileList[i].range.split("-")[0] - 1,
            //   this.fileList[i].range.split("-")[1] - 1
            // );
            var btn = '<i class="fa fa-search-plus preview" ></i>';
            for (var x = 0; x < this.hotData.length; x++) {
                if (
                    x >= this.fileList[i].range.split("-")[0] - 1 &&
                    x < this.fileList[i].range.split("-")[1]
                ) {
                    this.hotData[x].imageIndex = i;
                    this.hotData[x].fileName = this.fileList[i].name;
                    this.hotData[x].image = this.fileList[i].blob;
                    this.hotData[x].preview = btn;
                }
            }
            this.$refs.myTable.hotInstance.render();
        },
        imageListSet() {
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
        converter(file, i) {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            var self = this;
            reader.onload = () => {
                self.fileList[i].blob = reader.result;
            };
        },
        getRndJapaneseAdvisors() {
            new AxiosClass("api/rndJapaneseAdvisors")
                .getWithToken()
                .then(res => {
                    this.rndJapaneseAdvisors = res.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        setClassIfLocalStaff() {
            if (this.$store.state.user.user.rights == 3) {
                this.batch.class = "C";
            }
        },
        handleImportDraft(val) {
            this.hotData = JSON.parse(val.items).filter(rec => {
                rec.preview =
                    '<button class="btn-outline-primary btn-sm btn preview" style="width:30%; display:none"><i class="fa fa-search-plus"></i></button>';
                return rec;
            });
            this.batch = JSON.parse(val.batch);
            this.retrieveDialog = false;
            this.$refs.myTable.hotInstance.render();
        },
        handleDeleteDraft(val) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then(result => {
                if (result.value) {
                    new AxiosClass("api/draftDelete", {
                            draftId: val.id
                        })
                        .postWithToken()
                        .then(res => {
                            this.draftList = JSON.parse(
                                JSON.stringify(
                                    this.draftList.filter(each => {
                                        return each.id != val.id;
                                    })
                                )
                            );
                            this.notificationSuccess("Draft has been deleted.");
                        })
                        .catch(err => {
                            console.log(err);
                        });
                }
            });
        },
        handleRetrieveDialog() {
            this.draftsDialogOverlay = true;

            new AxiosClass("api/draftList", {
                    user: this.$store.state.user.user.id
                })
                .postWithToken()
                .then(res => {
                    this.draftList = res.data;
                    setTimeout(() => {
                        this.retrieveDialog = true;
                        this.draftsDialogOverlay = false;
                    }, 200);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        saveAsDraft(draftTitle) {
            new AxiosClass("api/saveAsDraft", {
                    items: this.hotData,
                    batch: this.batch,
                    user: this.$store.state.user.user.id,
                    draftTitle: draftTitle
                })
                .postWithToken()
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        handleSaveAsDraft() {
            Swal.fire({
                title: "<small><span style='font-weight:normal;'>Note: Image(s) and or Attachement(s) will not be included in saving as draft.</span><small>",
                html: '<input id="draftTitle" placeholder="Draft Name" class="form-control">',
                showCancelButton: true,
                preConfirm: () => {
                    return new Promise(function (resolve) {
                        resolve({
                            draftTitle: $("#draftTitle").val()
                        });
                    });
                },
                onOpen: () => {
                    $("#draftTitle").focus();
                }
            }).then(result => {
                if (result.value !== undefined) {
                    this.saveAsDraft(result.value.draftTitle);
                }
            });
        },
        notificationSuccess(msg) {
            Swal.fire("Success", msg, "success");
        },
        notificationError(msg) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: msg
            });
        },
        addRows() {
            this.addTableRow(this.additionalRows);
        },
        setLists() {
            let token = this.$store.state.user.token;
            // return false;

            // new AxiosClass('api/lists').getWithToken().then(res=>{
            //     this.$store.state.lists = res.data
            //     localStorage.setItem('lists', JSON.stringify(res.data))

            let lists = this.$store.state.lists;

            this.columnSettings[1].source = lists.color.map(rec => {
                if (rec.deleted_at == null) {
                    return `${rec.CLR_CD}/${rec.CLR_NM_JP}`;
                }
            });
            this.columnSettings[10].source = lists.unit.map(rec => {
                if (rec.deleted_at == null) {
                    return `${rec.UNIT_CD}/${rec.UNIT_PLURAL}`;
                }
            });
            this.columnSettings[11].source = lists.material.map(rec => {
                if (rec.deleted_at == null) {
                    return `${rec.MAT_CD}/${rec.MAT_NM_JP}`;
                }
            });
            this.columnSettings[12].source = lists.category.map(rec => {
                if (rec.deleted_at == null) {
                    return `${rec.CAT_CD}/${rec.CAT_NM_JP}`;
                }
            });
            this.columnSettings[13].source = lists.requestKind.map(rec => {
                if (rec.deleted_at == null) {
                    return `${rec.REQ_KIND_CD}/${rec.REQ_KIND_DTL_NAME_JP}`;
                }
            });
            this.columnSettings[17].source = lists.country.map(rec => {
                if (rec.deleted_at == null) {
                    return `${rec.country_code}/${rec.country_name_jp}`;
                }
            });

            this.load = true;
            this.overlay = false;
            setTimeout(() => {
                this.renderMytable();
            }, 300);
            // }).catch(err => {
            //     console.log(err)
            // })
        },
        addTableRow(val) {
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

            $('.htCommentTextArea').css('height',"2000px")
        },
        fileInput(index) {
            var self = this;
            const file = $(".image")[index].files[0];
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                self.hotData[index].image = reader.result;
                self.hotData[index].file_name = $(".image")[index].files[0].name;
            };
        },
        handlePictureCardPreview(index) {
            this.imagePreview = this.hotData[index].image;
            this.dialogVisible = true;
        },
        handleSave() {
            // socket.emit('register-hinban', {
            //     data: 'test',
            //     user: this.$store.state.user.user.firstName
            // });
            // return false
            var formData = new FormData($("form")[1]);
            var token = this.$store.state.user.token;
            this.batch.toCsv = 0;
            // this.batch.approved = 0
            this.batch.registeredBy = this.$store.state.user.user.id;
            // this.batch.rndJARecieve = 0
            this.$refs.batch.validate();
            // console.log(this.$store.state.user)
            // console.log(this.hotData)
            // return false
            if (this.batch.class.toLowerCase() == "c") {
                this.batch.rndJAApproval =
                    this.$store.state.user.user.rights == 2 ? 1 : 0;
            } else {
                this.batch.rndJAApproval = 0;
            }

            formData.append("batch", JSON.stringify(this.batch));
            formData.append("items", JSON.stringify(this.hotData));
            for (var x = 0; x < $("#attachment_file")[0]["files"].length; x++) {
                formData.append(
                    `attachment_file[${x}]`,
                    $("#attachment_file")[0]["files"][x]
                );
            }

            // return false
            axios({
                    method: "POST",
                    url: "upload",
                    data: formData,
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })
                .then(res => {
                    this.notificationSuccess("Hinban Successfully Registered!");
                    this.$refs.batch.reset();

                    setTimeout(() => {
                        this.batch.class = null;
                        this.batch.shipmentWeek = parseInt(new Date().getWeekNumber());
                        this.batch.shipmentYear = this.yearList[1].year;
                        this.hotData = [];
                        this.addTableRow(1);

                        this.$socket.emit('register-hinban', {
                            val: {id: res.data.id, hinbanId:res.data.hinbanId},
                            user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
                        });
                    }, 200);
                })
                .catch(err => {
                    this.notificationError(err);
                });
        },
        renderMytable() {
            if (this.$refs.myTable !== undefined) {
                this.$refs.myTable.hotInstance.render();
            }
        }
    },
    mounted() {
        Date.prototype.getWeekNumber = function () {
            var d = new Date(
                Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())
            );
            var dayNum = d.getUTCDay() || 7;
            d.setUTCDate(d.getUTCDate() + 4 - dayNum);
            var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
            return Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
        };

        this.$set(this.batch, "shipmentWeek", parseInt(new Date().getWeekNumber()));

        this.addTableRow(1);
        var self = this;

        // $(document).on("click", ".browseafile", function() {
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
            self.handlePictureCardPreview(
                $(this)
                .closest("tr")
                .index()
            );
        });

        Handsontable.validators.registerValidator(
            "duplicate-validator",
            (query, callback) => {
                if (query != null) {
                    // console.log(query.match(/^[A-Z0-9*()+\-\\\/]*$/) === null)
                    if (
                        query.match(/^[A-Z0-9*()+\-\\\/]*$/) === null ||
                        (query.match(
                                /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/
                            ) !== "" &&
                            query.match(
                                /[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff66-\uff9f]/
                            ) !== null)
                    ) {
                        callback(false);
                    } else {
                        var count = this.hotData.filter(rec => {
                            return rec.hinban == query;
                        }).length;
                        callback(count > 1 ? false : true);
                    }
                } else {
                    callback(false);
                }
            }
        );

        Handsontable.validators.registerValidator(
            "required-validator",
            (query, callback) => {
                return query != null ? callback(true) : callback(false);
            }
        );

        // this.$toast.show('Welcome!', 'Hey', this.notificationSystem.options.show)
        
        // Handsontable.validators.registerValidator(
        //     "whole-number-validator",
        //     (query, callback) => {
        //         return query != null ? callback(true) : callback(false);
        //     }
        // );
    }
};
</script>

<style scoped>
.v-text-field.v-text-field--enclosed,
.v-text-field__details {
    color: #7f7f7f;
    margin-bottom: 0px !important;
}

.col,
.col-1,
.col-2,
.col-3,
.col-4,
.col-5,
.col-6,
.col-7,
.col-8,
.col-9,
.col-10,
.col-11,
.col-12,
.col-auto,
.col-lg,
.col-lg-1,
.col-lg-2,
.col-lg-3,
.col-lg-4,
.col-lg-5,
.col-lg-6,
.col-lg-7,
.col-lg-8,
.col-lg-9,
.col-lg-10,
.col-lg-11,
.col-lg-12,
.col-lg-auto,
.col-md,
.col-md-2,
.col-md-3,
.col-md-4,
.col-md-5,
.col-md-6,
.col-md-7,
.col-md-8,
.col-md-9,
.col-md-10,
.col-md-11,
.col-md-12,
.col-md-auto,
.col-sm,
.col-sm-1,
.col-sm-2,
.col-sm-3,
.col-sm-4,
.col-sm-5,
.col-sm-6,
.col-sm-7,
.col-sm-8,
.col-sm-9,
.col-sm-10,
.col-sm-11,
.col-sm-12,
.col-sm-auto,
.col-xl,
.col-xl-1,
.col-xl-2,
.col-xl-3,
.col-xl-4,
.col-xl-5,
.col-xl-6,
.col-xl-7,
.col-xl-8,
.col-xl-9,
.col-xl-10,
.col-xl-11,
.col-xl-12,
.col-xl-auto {
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>
