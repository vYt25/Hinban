<template>
<div>
    <v-tooltip left>
        <template v-slot:activator="{ on }">
            <v-btn fab @click="addDialog = true" v-on="on" fixed bottom right color="#66BB6A">
                <v-icon style="color: white;">mdi-plus</v-icon>
            </v-btn>
        </template>
        <span>Add Request Kind</span>
    </v-tooltip>
    <v-card width="100%">
        <v-col cols="12"  style="height: 60px">
            <v-row rows="10">
                <v-col cols="1">
                    <v-row class="ml-1">
                        <!-- <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn fab x-small @click="addDialog = true" v-on="on" class="mt-1">
                                    <v-icon>mdi-plus</v-icon>
                                </v-btn>
                            </template>
                            <span>Add Request Kind</span>
                        </v-tooltip> -->
                        <v-tooltip right>
                            <template v-slot:activator="{ on }">
                                <v-btn icon @click="filterAction()" v-on="on" class="mt-1">
                                    <v-icon v-show="!filter">mdi-filter</v-icon>
                                    <v-icon v-show="filter">mdi-filter-remove</v-icon>
                                </v-btn>
                            </template>
                            <span v-show="!filter">Filter</span>
                            <span v-show="filter">Remove Filter</span>
                        </v-tooltip>
                    </v-row>
                </v-col>
                <v-col cols="12" md="11" sm="11" v-if="filter">
                    <v-row cols="12" md="3" sm="3">
                        <v-col cols="12" md="2" sm="2">
                            <v-text-field hide-details clearable label="REQ_KIND_CD" outlined dense v-show="filter" v-model="filterVar.REQ_KIND_CD"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2" sm="2">
                            <v-text-field hide-details clearable label="REQ_KIND_NO" outlined dense v-show="filter" v-model="filterVar.REQ_KIND_NO"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="3">
                            <v-text-field hide-details clearable label="REQ_KIND_DTL_NAME" outlined dense v-show="filter" v-model="filterVar.REQ_KIND_DTL_NAME"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="3" sm="3">
                            <v-text-field hide-details clearable label="REQ_KIND_DTL_NAME_JP" outlined dense v-show="filter" v-model="filterVar.REQ_KIND_DTL_NAME_JP"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2" sm="2">
                            <v-text-field hide-details clearable label="NON_PREFAB_KBN" outlined dense v-show="filter" v-model="filterVar.NON_PREFAB_KBN"></v-text-field>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="12">
            <v-simple-table dense fixed-header height="70vh">
                <thead>
                    <tr>
                        <th>REQ_KIND_CD</th>
                        <th>REQ_KIND_NO</th>
                        <th>REQ_KIND_DTL_NAME</th>
                        <th>REQ_KIND_DTL_NAME_JP</th>
                        <th>NON_PREFAB_KBN</th>
                        <th>MIX_KBN</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(req,index) in paginatedList" :key="index">
                        <td>{{req.REQ_KIND_CD}}</td>
                        <td>{{req.REQ_KIND_NO}}</td>
                        <td>{{req.REQ_KIND_DTL_NAME}}</td>
                        <td>{{req.REQ_KIND_DTL_NAME_JP}}</td>
                        <td>{{req.NON_PREFAB_KBN}}</td>
                        <td>{{req.MIX_KBN}}</td>
                        <!-- <td>{{cat.NCV_KBN}}</td> -->
                        <td>
                            <v-row cols="12" justify="center">

                                <v-tooltip right>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon small color="primary" @click="handleEditDialog(req)" v-show="req.deleted_at == null" v-on="on" v-bind="attrs">
                                            <v-icon small>mdi-pencil</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Edit</span>
                                </v-tooltip>

                                <v-tooltip right>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon small color="error" @click="handleDelete(req)" v-show="req.deleted_at == null" v-on="on" v-bind="attrs">
                                            <v-icon small>mdi-delete</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Delete</span>
                                </v-tooltip>

                                <v-tooltip right>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn icon small color="success" @click="handleUndoDelete(req)" v-show="req.deleted_at != null" v-on="on" v-bind="attrs">
                                            <v-icon small>mdi-delete-restore</v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Restore</span>
                                </v-tooltip>
                            </v-row>
                        </td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-col>
        <v-col cols="12">
            <v-row style="margin-top:1vh">
                <v-spacer></v-spacer>
                <v-col cols="6" md="1" sm="6">
                    <v-select dense :items="perPageOpt" item-text="cnt" item-value="cnt" label="Per page" v-model="pagination.perPage" @change="paginationLength()"></v-select>
                </v-col>
                <v-col cols="6" md="5" sm="5">
                    <v-pagination circle v-model="pagination.selected" :total-visible="pagination.visible" :length="pagination.length" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
                </v-col>
            </v-row>
        </v-col>
    </v-card>
    <v-row justify="center">
        <v-dialog v-model="editDialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Edit Request Kind</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="REQ_KIND_CD*" dense required v-model="currentVal.REQ_KIND_CD" @keyup="checkDisabled()"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="REQ_KIND_NO" dense v-model="currentVal.REQ_KIND_NO" @keyup="checkDisabled()"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="REQ_KIND_DTL_NAME*" dense required v-model="currentVal.REQ_KIND_DTL_NAME" @keyup="checkDisabled()"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="REQ_KIND_DTL_NAME_JP*" dense required v-model="currentVal.REQ_KIND_DTL_NAME_JP" @keyup="checkDisabled()"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="NON_PREFAB_KBN*" dense required v-model="currentVal.NON_PREFAB_KBN" @keyup="checkDisabled()"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="MIX_KBN*" dense required v-model="currentVal.MIX_KBN" @keyup="checkDisabled()"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="handleEditCancel()">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="handleEditSave()" :disabled="boolean">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
    <v-row justify="center">
        <v-dialog v-model="addDialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">Add Request Kind</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="REQ_KIND_CD*" dense required v-model="newVal.REQ_KIND_CD" :rules="required" @keyup="checkAddDisabled()"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="REQ_KIND_NO" dense v-model="newVal.REQ_KIND_NO" :rules="required" @keyup="checkAddDisabled()" @keypress="checkUNumber($event)"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="REQ_KIND_DTL_NAME*" dense required v-model="newVal.REQ_KIND_DTL_NAME" :rules="required" @keyup="checkAddDisabled()" @keypress="checkUpperCase($event)"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="12" md="12">
                                <v-text-field label="REQ_KIND_DTL_NAME_JP*" dense required v-model="newVal.REQ_KIND_DTL_NAME_JP" :rules="required" @keyup="checkAddDisabled()"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="NON_PREFAB_KBN*" dense required v-model="newVal.NON_PREFAB_KBN" :rules="required" @keyup="checkAddDisabled()" @keypress="checkUNumber($event)"></v-text-field>
                            </v-col>
                            <v-col cols="12" sm="6" md="6">
                                <v-text-field label="MIX_KBN*" dense required v-model="newVal.MIX_KBN" :rules="required" @keyup="checkAddDisabled()" @keypress="checkUNumber($event)"></v-text-field>
                            </v-col>
                        </v-row>
                    </v-container>
                    <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="handleAddCancel()">Close</v-btn>
                    <v-btn color="blue darken-1" text @click="handleAddSave()" :disabled="booleanAdd">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</div>
</template>

<script>
import AxiosClass from "@/js/AxiosClass";
export default {
    data() {
        return {
            booleanAdd: true,
            newVal: {},
            addDialog: false,
            boolean: false,
            editDialog: false,
            filter: false,
            filterVar: {},
            requestKind: [],
            pagination: {
                selected: 1,
                length: 0,
                visible: 5,
                perPage: 20,
            },
            perPageOpt: [{
                    cnt: 5,
                },
                {
                    cnt: 10,
                },
                {
                    cnt: 20,
                },
                {
                    cnt: 50,
                },
            ],
            oldVal: {},
            currentVal: {},
            required: [value => !!value || 'Required'],
        };
    },
    computed: {
        filterRequestKind() {
            return this.requestKind
                .filter((rec) => {
                    if (this.filterVar.REQ_KIND_CD != undefined) {
                        return rec.REQ_KIND_CD.toString().includes(this.filterVar.REQ_KIND_CD);
                    } else {
                        return rec;
                    }
                })
                .filter((rec) => {
                    if (this.filterVar.REQ_KIND_NO != undefined) {
                        return rec.REQ_KIND_NO.toString().includes(this.filterVar.REQ_KIND_NO);
                    } else {
                        return rec;
                    }
                })
                .filter((rec) => {
                    if (this.filterVar.REQ_KIND_DTL_NAME != undefined) {
                        return rec.REQ_KIND_DTL_NAME.toString().includes(this.filterVar.REQ_KIND_DTL_NAME);
                    } else {
                        return rec;
                    }
                })
                .filter((rec) => {
                    if (this.filterVar.REQ_KIND_DTL_NAME_JP != undefined) {
                        return rec.REQ_KIND_DTL_NAME_JP.toString().includes(this.filterVar.REQ_KIND_DTL_NAME_JP);
                    } else {
                        return rec;
                    }
                })
                .filter((rec) => {
                    if (this.filterVar.NON_PREFAB_KBN != undefined) {
                        return rec.NON_PREFAB_KBN.toString().includes(this.filterVar.NON_PREFAB_KBN);
                    } else {
                        return rec;
                    }
                });
        },
        paginatedList() {
            let requestKindList = JSON.parse(JSON.stringify(this.filterRequestKind));
            this.paginationLength();
            return requestKindList.splice((this.pagination.selected - 1) * this.pagination.perPage, this.pagination.perPage);
        },
    },
    created() {
        this.fetchRequestKindFromLocalStorage();
    },
    methods: {
        handleUndoDelete(obj) {

            var i = this.requestKind.findIndex(rec => rec.id === obj.id)
            var lists = JSON.parse(localStorage.getItem('lists'))

            new AxiosClass("api/undoDeleteRequestKind", obj).postWithToken().then((res) => {

                this.requestKind[i].deleted_at = null
                lists.requestKind = this.requestKind
                localStorage.setItem('lists', JSON.stringify(lists))

            }).catch(err => {
                console.log(err)
            })
        },
        handleDelete(obj) {
            var i = this.requestKind.findIndex(rec => rec.id === obj.id)
            var lists = JSON.parse(localStorage.getItem('lists'))

            new AxiosClass("api/deleteRequestKind", obj).postWithToken().then((res) => {

                this.requestKind[i].deleted_at = res.data
                lists.requestKind = this.requestKind
                localStorage.setItem('lists', JSON.stringify(lists))

            }).catch(err => {
                console.log(err)
            })
        },
        checkUpperCase(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            return !(charCode >= 65 && charCode <= 90) ? evt.preventDefault() : true
        },
        checkNumber(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            return !(charCode < 48 || charCode > 57) ? true : evt.preventDefault()
        },
        checkAddDisabled() {
            if (this.newVal.REQ_KIND_CD == null || this.newVal.REQ_KIND_CD == '') {
                this.booleanAdd = true
            } else if (this.newVal.REQ_KIND_NO == null || this.newVal.REQ_KIND_NO == '') {
                this.booleanAdd = true
            } else if (this.newVal.REQ_KIND_DTL_NAME == null || this.newVal.REQ_KIND_DTL_NAME == '') {
                this.booleanAdd = true
            } else if (this.newVal.REQ_KIND_DTL_NAME_JP == null || this.newVal.REQ_KIND_DTL_NAME_JP == '') {
                this.booleanAdd = true
            } else if (this.newVal.MIX_KBN == null || this.newVal.MIX_KBN == '') {
                this.booleanAdd = true
            } else if (this.newVal.NON_PREFAB_KBN == null || this.newVal.NON_PREFAB_KBN == '') {
                this.booleanAdd = true
            } else {
                this.booleanAdd = false
            }
        },
        handleAddSave() {
            var lists = JSON.parse(localStorage.getItem('lists'))

            new AxiosClass("api/addRequestKind", this.newVal).postWithToken().then((res) => {
                this.requestKind.push(res.data)
                lists.requestKind = this.requestKind
                localStorage.setItem('lists', JSON.stringify(lists))
                this.addDialog = false
                this.newVal = {}

            }).catch(err => {
                console.log(err)
            })
        },
        handleAddCancel() {
            this.newVal = {}
            this.addDialog = false
        },
        checkDisabled() {
            if (this.currentVal.REQ_KIND_CD == null || this.currentVal.REQ_KIND_CD == '') {
                this.boolean = true
            } else if (this.currentVal.REQ_KIND_NO == null || this.currentVal.REQ_KIND_NO == '') {
                this.boolean = true
            } else if (this.currentVal.REQ_KIND_DTL_NAME == null || this.currentVal.REQ_KIND_DTL_NAME == '') {
                this.boolean = true
            } else if (this.currentVal.REQ_KIND_DTL_NAME_JP == null || this.currentVal.REQ_KIND_DTL_NAME_JP == '') {
                this.boolean = true
            } else if (this.currentVal.MIX_KBN == null || this.currentVal.MIX_KBN == '') {
                this.boolean = true
            } else {
                this.boolean = false
            }
        },
        updatedValueSetter(i) {
            var newVal = JSON.parse(JSON.stringify(this.currentVal));
            this.$set(this.requestKind[i], "REQ_KIND_CD", newVal.REQ_KIND_CD);
            this.$set(this.requestKind[i], "REQ_KIND_NO", newVal.REQ_KIND_NO);
            this.$set(this.requestKind[i], "REQ_KIND_DTL_NAME", newVal.REQ_KIND_DTL_NAME);
            this.$set(this.requestKind[i], "REQ_KIND_DTL_NAME_JP", newVal.REQ_KIND_DTL_NAME_JP);
            this.$set(this.requestKind[i], "MIX_KBN", newVal.MIX_KBN);
            this.$set(this.requestKind[i], "NCV_KBN", newVal.NCV_KBN);
            this.$set(this.requestKind[i], "NON_PREFAB_KBN", newVal.NON_PREFAB_KBN);
            var lists = JSON.parse(localStorage.getItem('lists'))
            lists.requestKind = this.requestKind
            localStorage.setItem('lists', JSON.stringify(lists))
        },
        handleEditSave() {
            new AxiosClass("api/updateRequestKind", this.currentVal).postWithToken().then((res) => {
                this.editDialog = false;
                var i = this.requestKind.findIndex(rec => rec.id === this.currentVal.id);
                this.updatedValueSetter(i);
            }).catch((err) => {
                console.log(err);
            });
        },
        handleEditCancel() {
            this.editDialog = false;
            this.requestKind[this.requestKind.findIndex(rec => rec.id === this.oldVal.id)] = JSON.parse(JSON.stringify(this.oldVal));
            this.currentVal = {};
        },
        handleEditDialog(obj) {
            this.boolean = false
            this.editDialog = true;
            this.oldVal = JSON.parse(JSON.stringify(obj));
            this.currentVal = JSON.parse(JSON.stringify(obj));
        },
        paginationLength() {
            let x = this.filterRequestKind.length / this.pagination.perPage;
            this.pagination.length = x % 1 != 0 ? parseInt(x.toString().split(".")[0]) + 1 : x;
        },

        fetchRequestKindFromLocalStorage() {
            this.requestKind = JSON.parse(localStorage.getItem("lists")).requestKind;
        },
        filterAction() {
            this.filter = !this.filter;
            if (this.filter == false) {
                this.filterVar.REQ_KIND_CD = null;
                this.filterVar.REQ_KIND_NO = null;
                this.filterVar.REQ_KIND_DTL_NAME = null;
                this.filterVar.REQ_KIND_DTL_NAME_JP = null;
                this.filterVar.MIX_KBN = null;
                this.filterVar.NON_PREFAB_KBN = null;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.theme--light.v-data-table thead tr th {
    background-color: #90a4ae;
    color: white;
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
.col-md-1,
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
