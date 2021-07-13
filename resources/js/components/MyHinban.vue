<template>
  <div>
    <v-card>
      <!-- {{$t('welcomeMsg.test1')}} -->
      <!-- {{$store.state.user.token}} -->
      <v-col cols="12">
        <v-row rows="10">
          <v-col cols="1">
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
          </v-col>
          <v-col cols="12" md="11" sm="11" v-if="filter">
            <v-row cols="12" md="3" sm="3">
              <v-col cols="12" md="2" sm="2">
                <!-- <v-select hide-details clearable :items="$store.state.status" item-text="name" label="Status" dense outlined v-show="filter" v-model="filterVar.status"></v-select> -->
                <v-text-field
                  hide-details
                  clearable
                  label="Hinban  ID"
                  outlined
                  dense
                  v-show="filter"
                  v-model="filterVar.hinbanId"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="2" sm="2">
                <v-select
                  hide-details
                  clearable
                  :items="$store.state.class"
                  item-text="name"
                  label="Class"
                  dense
                  outlined
                  v-show="filter"
                  v-model="filterVar.class"
                ></v-select>
              </v-col>

              <v-col cols="12" md="2" sm="2">
                <v-text-field
                  hide-details
                  clearable
                  label="Shipment Week"
                  onkeydown="return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )"
                  outlined
                  dense
                  v-show="filter"
                  v-model="filterVar.shipmentWeek"
                ></v-text-field>
              </v-col>

              <v-col cols="12" md="2" sm="2">
                <v-text-field
                  hide-details
                  clearable
                  label="Shipment Year"
                  onkeydown="return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )"
                  outlined
                  dense
                  v-show="filter"
                  v-model="filterVar.shipmentYear"
                ></v-text-field>
              </v-col>

              <!-- <v-col cols="2">
                            <v-text-field hide-details clearable label="Manufacture Name" outlined dense v-show="filter" v-model="filterVar.manufactureName"></v-text-field>
              </v-col>-->

              <v-col cols="12" md="2" sm="2">
                <v-text-field
                  hide-details
                  clearable
                  label="Applicant"
                  outlined
                  dense
                  v-show="filter"
                  v-model="filterVar.applicant"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-tabs v-model="tab" background-color="#006064" dark center-active>
        <v-tabs-slider></v-tabs-slider>

        <v-tab
          href="#WaitingForApproval"
          v-if="($store.state.user.user.rights == 3 || $store.state.user.user.rights == 2 ) && $store.state.user.user.rights != 4"
        >Waiting For Approval</v-tab>

        <v-tab
          href="#ForApproval"
          v-if="$store.state.user.user.rights == 2 || $store.state.user.user.rights == 1 || $store.state.user.user.rights == 4"
        >For Approval</v-tab>

        <v-tab
          href="#Approved"
          v-if="$store.state.user.user.rights == 2 || $store.state.user.user.rights == 3"
        >Approved</v-tab>

        <v-tab
          href="#Disapproved"
          v-if="$store.state.user.user.rights == 2 || $store.state.user.user.rights == 3"
        >Disapproved</v-tab>
        <v-tab href="#ForExport" v-if="$store.state.user.user.rights == 1 && $store.state.user.user.id != 99">For Export</v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item v-for="(tab,index) in tabs" :key="index" :value="tab.name">
          <v-simple-table dense fixed-header height="60vh">
            <thead>
              <tr>
                <th>Hinban ID</th>
                <th>Status</th>
                <th>Class</th>
                <th>Shipment Week</th>
                <th>Shipment Year</th>
                <th>Applicant</th>
                <th>Encoded By</th>
                <th>Created At</th>
                <th>Revisions</th>
                <th>Disapproval Reasons</th>
                <th>View</th>
                <th v-if="$store.state.user.user.department == '開発' || $store.state.user.user.id == 99">Recieve</th>
                <th v-if="$store.state.user.user.rights == 1 && $store.state.user.user.id != 99">Recieve logisics</th>
                <th>Export</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(hinban,index) in paginatedList" :key="index">
                <td>{{hinban.hinbanId}}</td>
                <td>{{hinban.status}}</td>
                <td>{{hinban.class}}</td>
                <td>{{hinban.shipmentWeek}}</td>
                <td>{{hinban.shipmentYear}}</td>
                <td>{{hinban.applicantName}}</td>
                <td>{{hinban.encoderName}}</td>
                <td>{{hinban.created_at.split('T')[0]}}</td>
                <td align="center">
                  <span v-show="hinban.rev == null">0</span>
                  <v-btn
                    v-show="hinban.rev != null"
                    text
                    @click="showRevisionDialog(hinban.id)"
                  >{{hinban.rev}}</v-btn>
                </td>
                <td align="center">
                  <span v-show="hinban.disapprovalCount == null">0</span>
                  <v-btn
                    v-show="hinban.disapprovalCount != null"
                    text
                    @click="showDisapprovalDialog(hinban.id)"
                  >{{hinban.disapprovalCount}}</v-btn>
                </td>
                <td>
                  <v-btn icon @click="showHinbanDetails(hinban.id)">
                    <v-icon>mdi-eye-outline</v-icon>
                  </v-btn>
                </td>
                <td
                  v-if="$store.state.user.user.department == '開発' || $store.state.user.user.id == 99"
                >
                  <v-switch
                    v-if="hinban.class == 'C' && (hinban.rndJaApproval == 0 || hinban.rndJaApproval == 2) && hinban.encodedBy != $store.state.user.user.id"
                    color="success"
                    inset
                    v-model="hinban.approverRecieve"
                    dense
                    @change="handleRecieveByRndJa(hinban.id, hinban.approverRecieve)"
                  ></v-switch>
                  <v-switch
                    v-if="hinban.class == 'A' && (hinban.classAApproval == 0 || hinban.classAApproval == 2) && $store.state.user.user.id == 99"
                    color="success"
                    inset
                    v-model="hinban.approverRecieve"
                    dense
                    @change="handleRecieveByClassAApprover(hinban.id, hinban.approverRecieve)"
                  ></v-switch>
                </td>
                <td v-if="$store.state.user.user.rights == 1 && $store.state.user.user.id != 99">
                  <template
                    v-if="hinban.rndJaApproval == 1 && hinban.logisticsFields != 1 && (hinban.logisticsRecievedBy == $store.state.user.user.id || hinban.logisticsRecievedBy == null )"
                  >
                    <v-switch
                      color="success"
                      dense
                      inset
                      v-model="hinban.logisticsRecieve"
                      @change="recieveHinbanByLogistics(hinban.id, hinban.logisticsRecieve)"
                    ></v-switch>
                  </template>
                  <!-- <span v-show="hinban.recieved == 1 && $store.state.user.user.rights == 2">{{hinban.recievedDate != null ? hinban.recievedDate.split(' ')[0] : ''}} </span> -->
                </td>
                <td>
                  <v-btn
                    icon
                    color="#0D47A1"
                    v-if="hinban.logisticsFields != null && $store.state.user.user.rights == 1 && hinban.logisticsFields == 1 && hinban.rndJaApproval == 1"
                    @click="exportToCsv(hinban.id)"
                  >
                    <v-icon>mdi-file-export</v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-tab-item>
      </v-tabs-items>

      <v-col cols="12">
        <v-row style="margin-top: 5vh">
          <v-spacer></v-spacer>
          <v-col cols="6" md="1" sm="6">
            <v-select
              dense
              :items="perPageOpt"
              item-text="cnt"
              item-value="cnt"
              label="Per page"
              v-model="pagination.perPage"
              @change="paginationLength()"
            ></v-select>
          </v-col>
          <v-col cols="6" md="5" sm="5">
            <v-pagination
              circle
              v-model="pagination.selected"
              :total-visible="pagination.visible"
              :length="pagination.length"
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
            ></v-pagination>
          </v-col>
        </v-row>
      </v-col>
    </v-card>

    <!-- overlay -->
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="50"></v-progress-circular>
    </v-overlay>

    <!-- dialog for viewing of disapproval reason -->
    <v-dialog v-model="disapprovalDialog" scrollable max-width="500px">
      <v-card>
        <v-card-title>Disapproval Details</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-simple-table dense>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Disapproved By</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rec,i) in disapprovalDialogData" :key="i">
                <th>{{i+1}}</th>
                <td>{{rec.created_at.split('T')[0]}}</td>
                <td>{{rec.firstName}} {{rec.lastName}}</td>
                <td>{{rec.disapprovalReason}}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="disapprovalDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- dialog for viewing of revisions -->
    <v-dialog v-model="revisionDialog" scrollable max-width="500px">
      <v-card>
        <v-card-title>Revisions</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="height: 300px;">
          <v-simple-table dense>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Revised By</th>
                <th>Reason For Revision</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(rec,i) in revisionDialogData" :key="i">
                <th>{{i+1}}</th>
                <td>{{rec.created_at.split('T')[0]}}</td>
                <td>{{rec.revisedBy}}</td>
                <td>{{rec.reasonForRevision}}</td>
              </tr>
            </tbody>
          </v-simple-table>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="revisionDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Dialog For Hinban Viewing of details -->
    <v-row justify="center">
      <v-dialog
        v-model="dialog"
        dense
        fullscreen
        hide-overlay
        transition="dialog-bottom-transition"
        style="z-index:999"
      >
        <v-card>
          <v-toolbar dark color="#006064" dense>
            <v-btn icon dark @click="closeDialog()">
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Hinban Details</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <!-- Class A Approve Buttons -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    color="green lighten-2"
                    v-show="$store.state.user.user.id == 99 &&  hinbanDetails.approverRecieve && hinbanDetails.rndJaApproval == 0"
                    @click="handleApprovalClassA(1)"
                  >
                    <v-icon>mdi-sticker-check</v-icon>
                  </v-btn>
                </template>
                <span>Approve</span>
              </v-tooltip>

              <!-- Class A Disapprove Buttons -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    color="red lighten-2"
                    v-show="$store.state.user.user.id == 99  && hinbanDetails.approverRecieve && hinbanDetails.rndJaApproval == 0"
                    @click="handleApprovalClassA(0)"
                  >
                    <v-icon>mdi-sticker-remove</v-icon>
                  </v-btn>
                </template>
                <span>Disapprove</span>
              </v-tooltip>

              <!-- Class C Approve Button -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    color="green lighten-2"
                    v-show="$store.state.user.user.id == hinbanDetails.rndJaApprover  &&  hinbanDetails.approverRecieve && hinbanDetails.rndJaApproval == 0 && hinbanDetails.class == 'C'"
                    @click="handleRndJAActions(1)"
                  >
                    <v-icon>mdi-sticker-check</v-icon>
                  </v-btn>
                </template>
                <span>Approve</span>
              </v-tooltip>

              <!-- Class C Disapprove Button -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    color="red lighten-2"
                    v-show="$store.state.user.user.id == hinbanDetails.rndJaApprover  && hinbanDetails.approverRecieve && hinbanDetails.rndJaApproval == 0 && hinbanDetails.class == 'C'"
                    @click="handleRndJAActions(0)"
                  >
                    <v-icon>mdi-sticker-remove</v-icon>
                  </v-btn>
                </template>
                <span>Disapprove</span>
              </v-tooltip>

              <!-- Logistics Edit Button -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    v-show="$store.state.user.user.rights == 1 && hotSettings.readOnly && $store.state.user.user.id != '99'"
                    @click="handleEventEdit()"
                  >
                    <v-icon>mdi-file-edit</v-icon>
                  </v-btn>
                </template>
                <span>Edit edit</span>
              </v-tooltip>

              <!-- Logistics Approve Button -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    color="success"
                    v-show="hotSettings.readOnly && hinbanDetails.logisticsRecieve == 1 && $store.state.user.user.rights == 1 && hinbanDetails.logisticsFields != 1"
                    @click="handleUpdateByLogistics()"
                    :disabled="emptyFieldChecker"
                  >
                    <v-icon>mdi-update</v-icon>
                  </v-btn>
                </template>
                <span>Update Record</span>
              </v-tooltip>

              <!-- Logistics Disapprove Button -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    color="red lighten-2"
                    v-show="hotSettings.readOnly && hinbanDetails.logisticsRecieve == 1 && $store.state.user.user.rights == 1 && hinbanDetails.logisticsFields != 1"
                    @click="handleDisapproveByLogistics()"
                  >
                    <v-icon>mdi-sticker-remove</v-icon>
                  </v-btn>
                </template>
                <span>Disapprove</span>
              </v-tooltip>

              <!-- Local Staff Edit Button -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    v-show="hotSettings.readOnly && hinbanDetails.rndJaRecieve == 0  && $store.state.user.user.rights != 1 && hinbanDetails.encodedBy == $store.state.user.user.id && hinbanDetails.class == 'C' && !hinbanDetails.logisticsRecieve"
                    @click="handleEventEdit()"
                  >
                    <v-icon>mdi-file-edit</v-icon>
                  </v-btn>
                </template>
                <span>Edit</span>
              </v-tooltip>

              <!-- JA Applicant Edit Button  -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    v-show="hotSettings.readOnly && hinbanDetails.classARecieve == 0 && $store.state.user.user.rights != 1 && hinbanDetails.encodedBy == $store.state.user.user.id && hinbanDetails.class == 'A' && !hinbanDetails.approverRecieve"
                    @click="handleEventEdit()"
                  >
                    <v-icon>mdi-file-edit</v-icon>
                  </v-btn>
                </template>
                <span>Edit</span>
              </v-tooltip>

              <!-- JA and Local Staff Shared Update Button -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    color="success"
                    v-on="on"
                    v-show="!hotSettings.readOnly"
                    @click="revisionReasonDialog = true"
                  >
                    <v-icon>mdi-update</v-icon>
                  </v-btn>
                </template>
                <span>Update</span>
              </v-tooltip>

              <!-- JA and Local Staff Shared Edit Cancel Button -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    color="red"
                    v-on="on"
                    v-show="!hotSettings.readOnly"
                    @click="handleEditCancel()"
                  >
                    <v-icon>mdi-cancel</v-icon>
                  </v-btn>
                </template>
                <span>Cancel</span>
              </v-tooltip>

              <!-- NTS Approve Button -->
              <v-tooltip left>
                <template v-slot:activator="{ on }">
                  <v-btn
                    dark
                    fab
                    icon
                    v-on="on"
                    color="success"
                    v-show="hinbanDetails.logisticsFields == 1 && hinbanDetails.ntsField == 0 && $store.state.user.user.rights == 4"
                    @click="handleNtsApprove()"
                  >
                    <v-icon>mdi-update</v-icon>
                  </v-btn>
                </template>
                <span>Update / Confirm</span>
              </v-tooltip>
            </v-toolbar-items>
          </v-toolbar>
          <v-list three-line subheader>
            <!-- {{hinbanDetails}} -->
            <v-list-item>
              <v-row>
                <v-col cols="12" md="3" sm="3">
                  <v-select
                    hide-details
                    clearable
                    dense
                    item-text="year"
                    :disabled="hotSettings.readOnly"
                    :rules="rules.required"
                    :items="yearList"
                    label="Shipment Year"
                    outlined
                    v-model="hinbanDetails.shipmentYear"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3" sm="3">
                  <v-select
                    hide-details
                    clearable
                    dense
                    item-text="name"
                    :disabled="hotSettings.readOnly"
                    :rules="rules.required"
                    :items="weekNos"
                    label="Shipment Week"
                    outlined
                    v-model="hinbanDetails.shipmentWeek"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3" sm="3">
                  <v-select
                    hide-details
                    clearable
                    dense
                    item-text="name"
                    :disabled="hotSettings.readOnly"
                    :rules="rules.required"
                    item-value="name"
                    :items="$store.state.class"
                    label="Class"
                    outlined
                    v-model="hinbanDetails.class"
                  ></v-select>
                </v-col>
                <v-col cols="12" md="3" sm="3">
                  <v-btn
                    v-if="hinbanDetails.attachment != undefined"
                    @click="showAttachmentDialog = true"
                    :disabled="hinbanDetails.attachment == 0"
                    block
                  >Show Attachment List</v-btn>
                </v-col>
              </v-row>
            </v-list-item>
            <v-list-item>
              <div
                style="border-style: solid; border-width: 0.5px; width:100%; border-color:grey; border-radius: 5px;"
              >
                <hot-table
                  id="hot"
                  v-if="dialog"
                  :data="hotData"
                  :settings="hotSettings"
                  :row-headers="true"
                  :col-headers="true"
                  ref="myTable"
                >
                  <hot-column
                    v-for="(setting,ind) in hotSettings.columns"
                    :key="ind"
                    :settings="hotSettings.columns[ind]"
                  ></hot-column>
                </hot-table>
              </div>
            </v-list-item>
          </v-list>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialogVisible" max-width="500px">
        <v-card class="mx-auto" max-width="450">
          <v-img class="white--text align-end" :src="imagePathForPreview">
            <v-card-actions>
              <v-row>
                <v-spacer></v-spacer>
                <v-btn color="red" icon style="margin-right: 2%" @click="dialogVisible = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-img>
        </v-card>
      </v-dialog>
      <v-btn
        class="dialogVisibleButton"
        color="primary"
        dark
        @click="dialogVisible = true"
        style="display:none"
      >DialogViewingImage</v-btn>
    </v-row>
    <v-dialog v-model="revisionReasonDialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Save Changes?</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-form ref="revisionReasonForm">
                  <v-text-field
                    label="Reason For Revision"
                    v-model="hinbanDetails.revisionReason"
                    :rules="rules.required"
                  ></v-text-field>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="revisionReasonDialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="updateRecords()">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="logisticsDisapproveDialog" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="headline">Disapprove Application</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12" md="12">
                <v-form ref="revisionReasonForm">
                  <v-text-field
                    label="Reason For Disapproval"
                    v-model="hinbanDetails.logisticsDisapproveReason"
                    :rules="rules.required"
                  ></v-text-field>
                </v-form>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="logisticsDisapproveDialog = false">Close</v-btn>
          <v-btn
            color="blue darken-1"
            v-if="$store.state.user.user.id == 99"
            text
            @click="updateDisaproveClassA(2)"
          >Disapprove Class A</v-btn>
          <v-btn color="blue darken-1" v-else text @click="updateDisapprovedByLogistics()">Disapprove Logistics</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="showAttachmentDialog" scrollable max-width="400px" persistent>
      <v-card>
        <v-toolbar dark color="#006064" dense>
          <v-toolbar-title>Attachment</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn small icon dark @click="showAttachmentDialog = false">
            <v-icon small>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list-item>
          <v-list-item-content>
            <ul>
              <li
                v-for="(path,ind) in hinbanDetails.attachment"
                :key="ind"
                @click="viewBatchAttachment(path.filename)"
              >
                <a>{{ path.filename.split('/')[2] }}</a>
              </li>
            </ul>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { HotTable, HotColumn } from "@handsontable/vue";
import Handsontable from "handsontable";
import Swal from "sweetalert2";
import AxiosClass from "@/js/AxiosClass";

export default {
  data() {
    return {
      hinbanBatchObject:{},
      tabs: [
        {
          name: "WaitingForApproval"
        },
        {
          name: "ForApproval"
        },
        {
          name: "Approved"
        },
        {
          name: "Disapproved"
        },
        {
          name: "ForExport"
        }
      ],
      tab: "tab-1",
      showAttachmentDialog: false,
      logisticsDisapproveDialog: false,
      revisionReasonDialog: false,
      filterVar: {
        class: null,
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
        columns: [
          {
            title: "HINBAN",
            data: "hinbanCode",
            validator: "duplicate-validator",
            width: 400
          },
          {
            title: "CLR",
            type: "dropdown",
            source: null,
            data: "color",
            width: 200
          },
          {
            title: "HINBAN NAME (JAPANESE)",
            data: "hinbanNameJp",
            width: 220
          },
          {
            title: "HINBAN NAME",
            data: "hinbanName",
            width: 150
          },
          {
            title: "SIZE_L",
            data: "sizeL",
            width: 70
          },
          {
            title: "SIZE_W",
            data: "sizeW",
            width: 70
          },
          {
            title: "SIZE_H",
            data: "sizeH",
            width: 70
          },
          {
            title: "CBM",
            data: "cbmQty",
            width: 90,
            readOnly: true
          },
          {
            title: "KGS",
            data: "kgQty",
            width: 100,
            type: "numeric",
            numericFormat: {
              pattern: "0.000"
            }
          },
          {
            title: "PRICE ¥",
            data: "unitPrc",
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
            title: "MAERIAL CODE",
            type: "dropdown",
            data: "matCd",
            source: null,
            width: 200
          },
          {
            title: "CATEGORY",
            type: "dropdown",
            data: "catCd",
            source: null,
            width: 200
          },
          {
            title: "REQUEST KIND",
            data: "reqKind",
            type: "dropdown",
            source: null,
            width: 300
          },
          {
            title: "REQUEST KIND NO",
            data: "reqKindNo",
            readonly: true,
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
            data: "useFor",
            type: "dropdown",
            source: null,
            width: 200
          },
          {
            title: "MANUFACTURE NAME",
            data: "manufactureName",
            source: null,
            width: 200
          },
          {
            title: "USAGE DESCRIPTION",
            data: "description",
            width: 200
          },
          {
            title: "PROCESSING STEP DESCRIPTION",
            data: "processingDescription",
            source: null,
            width: 275
          },
          {
            title: "HS CODE",
            data: "hsCode",
            readOnly: true,
            width: 200
          },
          {
            title: "PROCESS FLAG",
            data: "processFlag",
            type: "dropdown",
            readOnly: true,
            width: 300
          },
          {
            title: "GROUP CODE",
            data: "groupCode",
            readOnly: true,
            width: 200
          },
          // {
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
          }
        ],
        beforeChangeRender: function(changes, source) {},
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

      rules: {
        email: [v => /.+@.+/.test(v) || "Invalid Email Address"],
        required: [value => !!value || "Required"],
        year: [x => /^(?![01]|20[01])\d{4}$/.test(x) || "Invalid Year Format"]
      },

      perPageOpt: [
        {
          cnt: 5
        },
        {
          cnt: 10
        },
        {
          cnt: 20
        },
        {
          cnt: 50
        }
      ],
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
    emptyFieldChecker() {
      return (
        this.hotData.filter(rec => {
          return (
            rec.hsCode == null || rec.processFlag == "" || rec.groupCode == null
          );
        }).length != 0
      );
    },
    yearList() {
      return this.$store.getters["getYearList"];
    },
    userAccessFilter() {
      let hinbanList = JSON.parse(JSON.stringify(this.hinbans));
      return hinbanList.filter(each => {
        if (each.rights == 3 && each.rndJaRecieve == 0) {
          each.status = "For Recieve(RND)";
        }
        if (each.rights == 2 && each.class == "A" && !each.approverRecieve) {
          each.status = "For Recieve(Mr. President)";
        }
        if (each.rights == 2 && each.class == "A" && each.approverRecieve) {
          each.status = "For Approve(Mr. President)";
        }
        if (each.rights == 3 && each.rndJaRecieve == 1) {
          each.status = "For Approval(RND)";
        }
        if (
          (each.rights == 3 && each.rndJaApproval == 1) ||
          (!each.logisticsRecieve && each.rndJaApproval == 1) ||
          (each.class == "A" && each.classAApproval == 1)
        ) {
          each.status = "For Recieve(Logistics)";
        }

        if (each.logisticsRecieve && each.rndJaApproval == 1) {
          each.status = "For Review(Logistics)";
        }
        if (each.logisticsFields == 1 && each.ntsField == 0) {
          each.status = "Approved By Logistics";
        }
        if (
          each.logisticsFields == 1 &&
          each.ntsField == 1 &&
          each.toCsv == 0
        ) {
          each.status = "For Export CSV";
        }
        if (
          each.logisticsFields == 1 &&
          each.ntsField == 1 &&
          each.toCsv == 1
        ) {
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

        var approval = null;
       
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //                                                            LOGISTICS VIEWING                                                           //
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // console.log(this.$store.state.user.user.employeeId != '0041')
        if ( this.$store.state.user.user.rights == 1 && this.$store.state.user.user.id != each.rndJaApprover && this.$store.state.user.user.id != 99) {
          if (this.tab == "ForApproval") {
            
            return (
              (each.rndJaApproval == 1 && each.logisticsFields == null && each.class == 'C' && (each.logisticsRecievedBy == this.$store.state.user.user.id || each.logisticsRecievedBy == null)) ||
              (each.class == "A" && each.classAApproval == 1 && each.logisticsFields == null)
            );

          }
          
          if(this.tab == "ForExport"){
            return each.ntsField == 1 && each.toCsv == 0
          }

          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //                                                              ENCODER VIEWING                                                           //
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        } else if (
          (this.$store.state.user.user.id == each.rndJaApprover ||
            this.$store.state.user.user.id == each.encodedBy) &&
          this.$store.state.user.user.rights == 3
        ) {
          if (this.tab == "WaitingForApproval") {
            return each.rndJaApproval == 0 && each.logisticsFields != 1 && each.classAApproval == null;
            
          }
          if (this.tab == "Approved") {
            return each.rndJaApproval == 1;
          }
          if (this.tab == "Disapproved") {
            console.log(each.rndJaApproval == 2 || each.logisticsFields == 2)
            return each.rndJaApproval == 2 || each.logisticsFields == 2;
          }
          // if (this.tab == "All") {
          //   return each.logisticsFields == 1 && each.ntsField == 1;
          // }

          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //                                                            CLASS A APPROVER VIEWING                                                    //
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        } else if (this.$store.state.user.user.id == 99) {
            
          if (this.tab == "ForApproval") {
            console.log(each.classAApproval == 0)
            return each.class == "A" && each.classAApproval == 0 && each.logisticsFields != 2;
          }
            
          // }
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
        } else if (this.$store.state.user.user.rights == 2) {

          if (this.tab == "WaitingForApproval") {
            return ( each.encodedBy == this.$store.state.user.user.id &&  each.logisticsFields == null && each.rndJaApproval == 1 && each.classAApproval != 2 );
          }
          if (this.tab == "ForApproval") {
            return (
              each.rndJaApproval == 0 && each.rndJaApprover == this.$store.state.user.user.id && each.logisticsFields != 2 && each.class == 'C'
            );
          }
          if (this.tab == "Approved") {
            return (
              each.logisticsFields == 1 &&
              each.rndJaApprover == this.$store.state.user.user.id &&
              each.ntsField == 1
            );
          }
          if (this.tab == "Disapproved") {
            return (
              (each.encodedBy == this.$store.state.user.user.id &&
                each.classAApproval == 2) ||
              (each.encodedBy == this.$store.state.user.user.id &&
                each.logisticsFields == 2) ||
              (each.encodedBy == this.$store.state.user.user.id &&
                each.ntsField == 2)
            );
          }
          // if (this.tab == "All") {
          //   return each.logisticsFields == 1 && each.ntsField == 1;
          // }
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          //                                                            NTS VIEWING                                                                 //
          ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        } else if (this.$store.state.user.user.rights == 4) {
          if (this.tab == "ForApproval") {
            return each.logisticsFields == 1 && each.ntsField == 0;
          }
          // if (this.tab == "All") {
          //   return each.logisticsFields == 1 && each.ntsField == 1;
          // }
        }
      });
    },
    hinbanFilter() {
      let hinbanList = JSON.parse(JSON.stringify(this.userAccessFilter));
      return hinbanList
        .filter(rec => {
          if (
            this.filterVar.hinbanId != null &&
            this.filterVar.hinbanId != ""
          ) {
            return rec.hinbanId
              .toLowerCase()
              .includes(this.filterVar.hinbanId.toLowerCase());
          } else {
            return rec;
          }
        })
        .filter(rec => {
          if (this.filterVar.class != null && this.filterVar.class != "") {
            return rec.class == this.filterVar.class;
          } else {
            return rec;
          }
        })
        .filter(rec => {
          if (
            this.filterVar.shipmentWeek != null &&
            this.filterVar.shipmentWeek != ""
          ) {
            return rec.shipmentWeek == this.filterVar.shipmentWeek;
          } else {
            return rec;
          }
        })
        .filter(rec => {
          if (
            this.filterVar.shipmentYear != null &&
            this.filterVar.shipmentYear != ""
          ) {
            return rec.shipmentYear == this.filterVar.shipmentYear;
          } else {
            return rec;
          }
        })
        .filter(rec => {
          if (
            this.filterVar.applicant != null &&
            this.filterVar.applicant != ""
          ) {
            return rec.fullName
              .toLowerCase()
              .includes(this.filterVar.applicant.toLowerCase());
          } else {
            return rec;
          }
        });
    },

    paginatedList() {
      let hinbanList = JSON.parse(JSON.stringify(this.hinbanFilter));
      this.paginationLength();
      return hinbanList.splice(
        (this.pagination.selected - 1) * this.pagination.perPage,
        this.pagination.perPage
      );
    },
    weekNos() {
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
      handler(hinbans) {}
    }
  },
  created() {
    this.getHinbanAll();
    this.$EventBus.$on('updateHinbanList', data => {
        this.updateHinbanList(data)
    });

    this.$EventBus.$on('recieveHinbanByRndToggle', data => {
      this.recieveHinbanByRndToggle(data)
      // this.updateHinbans(data)

    });

    this.$EventBus.$on('hinbanApprovalByRndJa', data => {
      this.hinbanApprovalByRndJa(data)
      // this.updateHinbans(data)

    });

    this.$EventBus.$on('hinbanRevisionByLocalStaff', data => {
      this.hinbanRevisionByLocalStaff(data)
      // this.updateHinbans(data)

    });
    
    this.$EventBus.$on('recieveHinbanByLogisticsToggle', data => {
      this.recieveHinbanByLogisticsToggle(data)
      // this.updateHinbans(data)

    });
    
    this.$EventBus.$on('recieveHinbanByClassAApproverToggle', data => {
      this.recieveHinbanByClassAApproverToggle(data)
      // this.updateHinbans(data)

    });
    
    this.$EventBus.$on('hinbanApprovalbyClassAApprover', data => {

      data.val.classAApproval == 1 ? this.hinbanApproveByClassAApprover(data) : this.hinbanDisapproveByClassAApprover(data)
      // this.updateHinbans(data)

      
    });
    
    this.$EventBus.$on('hinbanApprovalByLogistics', data => {

      data.val.logisticsApproval == 1 ? this.hinbanApproveByLogistics(data) : this.hinbanDisapproveByLogistics(data)
      // this.updateHinbans(data)

      
    });
    
    this.$EventBus.$on('hinbanApproveByNts', data => {
      this.updateHinbans(data)
    });



  },
  methods: {
    updateHinbans(data){
      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );

      this.getBatchObject(data).then(res=>{
        this.$set(this.hinbans, index, res.data)
      })

    },
    hinbanDisapproveByLogistics(data){

      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );

      this.getBatchObject(data).then(res=>{
        this.$set(this.hinbans, index, res.data)
      })


    },
    hinbanApproveByLogistics(data){

      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );

      // this.hinbans[index].logisticsFields = 1;
      this.getBatchObject(data).then(res=>{
        this.$set(this.hinbans, index, res.data)
      })

    },
    updateDisaproveClassA(){

      var index = this.hinbans.findIndex(hinban => hinban.id === this.hinbanDetails.id );
      new AxiosClass("api/disapprovalClassA", {
        id: this.hinbanDetails.id,
        approval: 2,
        reason: this.hinbanDetails.logisticsDisapproveReason,
        user: this.$store.state.user.user.id
      }).postWithToken().then(res=>{

          this.logisticsDisapproveDialog = false;
          this.dialog = false;
          this.$socket.emit('hinban-approval-by-class-a-approver', {
            val: {
              id: this.hinbans[index].id,
              hinbanId:this.hinbans[index].hinbanId,
              classAApproval: 2 
            },
            user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
          });

        
      }).then(err=>{
        console.log(err)
      })
    },
    hinbanDisapproveByClassAApprover(data){
      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );

      // this.hinbans[index].classAApproval = 2;
      // this.hinbans[index].classARecieve = 0;
      this.getBatchObject(data).then(res=>{
        this.$set(this.hinbans, index, res.data)
      })
    },
    hinbanApproveByClassAApprover(data){

      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );
      // this.$set( this.hinbans[index] , 'classAApproval' , 1 )
      // this.$set( this.hinbans[index] , 'rndJAApproval', 1 )
      this.getBatchObject(data).then(res=>{
        this.$set(this.hinbans, index, res.data)
      })

    },
    recieveHinbanByClassAApproverToggle(data){
      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );
      if(this.hinbanDetails.id == data.val.id){

        if(data.val.classARecieve){
          this.information(data)
        }

        if(!this.hotSettings.readOnly){
          this.hotSettings.readOnly = true;
        }

        this.$set(this.hinbanDetails, 'classARecieve', data.val.classARecieve ? 1 : 0 )
        this.$set(this.hinbanDetails, 'approverRecieve', data.val.classARecieve )

      }

      this.$set(this.hinbans[index],'classARecieve', data.val.classARecieve ? 1 : 0 )
      this.$set(this.hinbans[index],'approverRecieve', data.val.classARecieve )
        // this.getBatchObject(data).then(res=>{
        //   this.$set(this.hinbans, index, res.data)
        // })
    },
    recieveHinbanByLogisticsToggle(data){
      
      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );
      if(this.hinbanDetails.id == data.val.id){

        if(data.val.recieveByLogisics){
          this.information(data)
        }

        if(!this.hotSettings.readOnly){
          this.hotSettings.readOnly = true;
        }

        this.$set(this.hinbanDetails, 'logisticsRecieve',data.val.recieveByLogisics)

      }

      this.$set(this.hinbans[index],'logisticsRecieve',data.val.recieveByLogisics)
      // this.getBatchObject(data).then(res=>{
      //   this.$set(this.hinbans, index, res.data)
      // })
      

    },
    updateHinbanList(data){
      this.getBatchObject(data).then(res=>{
        this.hinbans.unshift(res.data)
      })
    },
    hinbanRevisionByLocalStaff(data){
      
      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );
      this.getBatchObject(data).then(res=>{
        this.$set(this.hinbans,index,res.data)
        
      })
    },
    information(data){
      Swal.fire({
        title: 'Information',
        text: 'This Hinban was recieved by the Approver and would be no longer editable.',
        icon: 'info',
      })
    },
    hinbanApprovalByRndJa(data){       

      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );
      

      // this.hinbans[index].rndJaApproval = data.val.approval ? 1 : 2
      this.getBatchObject(data).then(res=>{
        this.$set(this.hinbans, index, res.data)
      })
    },
    recieveHinbanByRndToggle(data){

      var index = this.hinbans.findIndex(hinban => hinban.id === data.val.id );

      if(this.hinbanDetails.id == data.val.id ){

        this.hinbanDetails.approverRecieve = data.val.approverRecieve
        this.hinbanDetails.rndJaRecieve = data.val.approverRecieve ? 1 : 0

        if(data.val.approverRecieve){
          this.information(data)
        }

        if(!this.hotSettings.readOnly){
          this.hotSettings.readOnly = true;
        }
        
      }
      this.hinbans[index].approverRecieve = data.val.approverRecieve
      this.hinbans[index].rndJaRecieve = data.val.approverRecieve ? 1 : 0
      // this.getBatchObject(data).then(res=>{
      //   this.$set(this.hinbans, index, res.data)
      
      // })
    },
    getBatchObject(data){
        var query =  new AxiosClass("api/getBatchObject", {id: data.val.id}).postWithToken()
        return query;
    },
    closeDialog(){
      this.dialog = false
      this.hinbanDetails = {}
    },
    handleNtsApprove() {
      var hinbanDetails = JSON.parse(JSON.stringify(this.hinbanDetails));
      hinbanDetails.items = this.hotData;
      var index = this.hinbans.findIndex(hinban => hinban.id === hinbanDetails.id );

      new AxiosClass("api/ntsApproval", hinbanDetails)
        .postWithToken()
        .then(res => {

            this.$socket.emit('hinban-approve-by-nts', {
              val: {
                id: this.hinbans[index].id,
                hinbanId:this.hinbans[index].hinbanId
              },
              user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
            });

        })
        .catch(err => {
          console.log(err);
        });
    },
    showDisapprovalDialog(id) {
      this.getDisapprovalList(id);
    },

    getDisapprovalList(id) {
      new AxiosClass("api/getDisapprovalList", { id: id })
        .postWithToken()
        .then(res => {
          this.disapprovalDialogData = res.data;
          this.disapprovalDialog = true;
        })
        .catch(err => {
          this.notificationError(err);
        });
    },
    updateDisaproveClassALogistics(approval) {
      new AxiosClass("api/updateDisaproveClassALogistics", {
        id: this.hinbanDetails.id,
        approval: approval,
        reason: this.hinbanDetails.logisticsDisapproveReason,
        user: this.$store.state.user.user.id
      })
        .postWithToken()
        .then(res => {
          var index = this.hinbans.findIndex(
            hinban => hinban.id === this.hinbanDetails.id
          );

          this.getHinbanAll();
          this.notificationSuccess("Hinban Disapproved!");
          this.logisticsDisapproveDialog = false;
          this.dialog = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    updateClassAApproval(approval) {
      var index = this.hinbans.findIndex(hinban => hinban.id === this.hinbanDetails.id);
      
      new AxiosClass("api/approvalClassA", {
        id: this.hinbanDetails.id,
        approval: approval,
        reason: this.hinbanDetails.logisticsDisapproveReason,
        user: this.$store.state.user.user.id
      })
        .postWithToken()
        .then(res => {
          // var index = this.hinbans.findIndex(hinban => hinban.id === this.hinbanDetails.id);
          // approval == 1 ? this.notificationSuccess("Hinban Approved!") : this.notificationSuccess("Hinban Disapproved!");
          // this.getHinbanAll();
          this.logisticsDisapproveDialog = false;
          this.dialog = false;
          this.$socket.emit('hinban-approval-by-class-a-approver', {
            val: {
              id: this.hinbans[index].id,
              hinbanId:this.hinbans[index].hinbanId,
              classAApproval: approval 
            },
            user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
          });
          

        })
        .catch(err => {
          console.log(err);
        });
    },
    handleApprovalClassA(approval) {
      if (approval == 1) {
        this.updateClassAApproval(approval);
      } else {
        this.logisticsDisapproveDialog = true;
      }
    },
    handleRecieveByClassAApprover(id, status) {
      
      // console.log(id, status);
      new AxiosClass("api/classARecieve", {
        id: id,
        status: status
      })
        .postWithToken()
        .then(res => {
          var index = this.hinbans.findIndex(hinban => hinban.id === id);
          // this.hinbans[index].classARecieve = status ? 1 : 0;
          // this.hinbans[index].approverRecieve = status;

      this.$socket.emit('hinban-recieve-by-class-a-approver', {
          val: {
            id: this.hinbans[index].id,
            hinbanId:this.hinbans[index].hinbanId,
            classARecieve: status
          },
          user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
      });
          

        })
        .catch(err => {
          console.log(err);
        });
    },
    viewBatchAttachment(filename) {
      console.log(filename);
      var filePath = filename.split("/");
      filePath[0] = "batch_attachment";
      window.open(filePath.join("/"));
    },
    updateDisapprovedByLogistics() {
      var index = this.hinbans.findIndex( hinban => hinban.id === this.hinbanDetails.id );
      new AxiosClass("api/disapproveByLogistics", {
        id: this.hinbanDetails.id,
        disapproveReason: this.hinbanDetails.logisticsDisapproveReason,
        user: this.$store.state.user.user.id
      })
        .postWithToken()
        .then(res => {
          // this.hinbans[index].logisticsRecieve = false;
          // this.hinbans[index].rndJaApproval = 0;
          // this.hinbans[index].logisticsFields = 2;
          // this.notificationSuccess("Hinban Disapproved!");
          // this.getHinbanAll();

          this.$socket.emit('hinban-approval-by-logistics', {
            val: {
              id: this.hinbans[index].id,
              hinbanId:this.hinbans[index].hinbanId,
              logisticsApproval: 2,
              reason: this.hinbanDetails.logisticsDisapproveReason
            },
            user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
          });

          this.dialog = false;
          this.logisticsDisapproveDialog = false;
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleDisapproveByLogistics() {
      this.logisticsDisapproveDialog = true;
    },
    handleRndJAActions(approval) {
      var val = approval == 0 ? 2 : 1;
      new AxiosClass("api/rndJaActions", {
        approval: val,
        id: this.hinbanDetails.id,
        approver: this.$store.state.user.user.id
      })
        .postWithToken()
        .then(res => {
          var index = this.hinbans.findIndex( hinban => hinban.id === this.hinbanDetails.id)
          // this.hinbans[index].rndJaApproval = val;
          // this.getHinbanAll();
          // val == 1 ? this.notificationSuccess("Hinban Approved!") : this.notificationSuccess("Hinban Disapproved!");
          this.dialog = false;
          this.$socket.emit('hinban-approval-by-rnd-ja', {
              val: {
                id: this.hinbans[index].id,
                hinbanId:this.hinbans[index].hinbanId,
                approval: val == 0 ? false: true
              },
              user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
          });
          
        })
        .catch(err => {
          this.notificationError(err);
        });
    },
    handleRecieveByRndJa(i, toggle) {
      this.$store.state.linearLoader = true;
      var index = this.hinbans.findIndex(hinban => hinban.id === i)
      this.hinbans[index].rndJaRecieve = toggle ? 1 : 0;
      this.hinbans[index].approverRecieve = toggle;
      
      new AxiosClass("api/rndJaRecieveHinban", {
        id: i,
        status: toggle == true ? 1 : 0
      })
        .postWithToken()
        .then(res => {
          this.$store.state.linearLoader = false;
          this.$socket.emit('recieve-hinban-by-rnd-ja', {
              val: {id: this.hinbans[index].id, hinbanId:this.hinbans[index].hinbanId, approverRecieve:this.hinbans[index].approverRecieve},
              user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
          });
        })
        .catch(err => {
          this.notificationError(err);
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
        // footer: '<a href>Why do I have this issue?</a>'
      });
    },
    handleEditCancel() {
      this.hotData = this.temp.hotData;
      this.hinbanDetails = this.temp.hinbanDetails;
      this.$refs.myTable.hotInstance.updateSettings({
        readOnly: true
      });
      this.hotSettings.readOnly = true;
    },
    handleUpdateByLogistics() {
      var index = this.hinbans.findIndex( hinban => hinban.id === this.hinbanDetails.id );
      new AxiosClass("api/updateHinbanFieldsByLogistics", { 
          data:{
            id: this.hinbanDetails.id,
            updatedBy: this.$store.state.user.user.id,
            items: this.hotData
          }
        }).postWithToken()
        .then(res => {
          // this.notificationSuccess("The Hinban can now be exported!");
          this.dialog = false;
          // this.getHinbanAll();

          this.$socket.emit('hinban-approval-by-logistics', {
            val: {
              id: this.hinbans[index].id,
              hinbanId:this.hinbans[index].hinbanId,
              logisticsApproval: 1 ,
              reason: null
            },
            user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
          });

        })
        .catch(err => {
          this.notificationError(err);
        });
    },
    handleEventEdit() {
      this.temp.hinbanDetails = JSON.parse(JSON.stringify(this.hinbanDetails));
      this.temp.hotData = JSON.parse(JSON.stringify(this.hotData));
      this.hotSettings.readOnly = false;
      this.$refs.myTable.hotInstance.updateSettings({
        readOnly: false
      });
    },
    filterAction() {
      this.filter = !this.filter;
      if (this.filter == false) {
        this.filterVar.class = null;
        this.filterVar.shipmentWeek = null;
        this.filterVar.shipmentYear = null;
        this.filterVar.manufactureName = null;
        this.filterVar.applicant = null;
      }
    },
    exportToCsv(id) {
      window.open("api/export?id=" + id);
    },
    showRevisionDialog(id) {
      this.getRevisionList(id);
    },

    getRevisionList(id) {
       new AxiosClass("api/getRevisionList", { data:{id: id }}).postWithToken()
        .then(res => {
          this.revisionDialogData = res.data;
          this.revisionDialog = true;
        })
        .catch(err => {
          this.notificationError(err);
        });
    },

    recieveHinbanByLogistics(id, status) {
      this.$store.state.linearLoader = true;
      new AxiosClass('api/recieveHinbanByLogistics', {data: { id: id, status: status, logisticsRecievedBy: this.$store.state.user.user.id }}).postWithToken().then(res => {
        var index = this.hinbans.findIndex(hinban => hinban.id === id)
        // this.hinbans[index].logisticsRecieve = status;
        this.$store.state.linearLoader = false;

        this.$socket.emit('recieve-hinban-by-logistics', {
              val: {
                id: id,
                hinbanId:this.hinbans[index].hinbanId,
                recieveByLogisics: status
              },
              user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
            });
      })
      .catch(err => {
        this.notificationError(err);
      });
    },
    updateRecords() {
      this.$refs.revisionReasonForm.validate();

      if (this.hinbanDetails.revisionReason != null) {
         new AxiosClass('api/updateHinban', {data: {details: this.hinbanDetails,items: this.hotData}}).postWithToken()
          .then(res => {
            // this.getHinbanAll();
            // this.dialog = false;
            // this.notificationSuccess("The Record was Updated");
            // this.hotSettings.readOnly = true;
            // this.revisionReasonDialog = false;

            this.$socket.emit('hinban-revision-by-localstaff', {
              val: {
                id: this.hinbanDetails.id,
                hinbanId:this.hinbanDetails.hinbanId,
                revisionReason: this.hinbanDetails.revisionReason
              },
              user: `${this.$store.state.user.user.firstName} ${this.$store.state.user.user.lastName}`
            });
            
            this.hotSettings.readOnly = true;
            this.revisionReasonDialog = false;
            this.dialog = false;
            this.hinbanDetails = {}
          })
          .catch(err => {
            this.notificationError(err);
          });
      }
    },
    setLists() {
      var lists = JSON.parse(localStorage.getItem('lists'))
      this.hotSettings.columns[22].source = lists.process.map(rec => {
        if(rec.deleted_at == null){
          return `${rec.id}/${rec.processName}`;
        }
      });
      this.hotSettings.columns[1].source = lists.color.map(rec => {
        if(rec.deleted_at == null){
          return `${rec.CLR_CD}/${rec.CLR_NM_JP}`;
        }
      });
      this.hotSettings.columns[10].source = lists.unit.map(rec => {
        if(rec.deleted_at == null){
          return `${rec.UNIT_CD}/${rec.UNIT_PLURAL}`;
        }
      });
      this.hotSettings.columns[11].source = lists.material.map(rec => {
        if(rec.deleted_at == null){
          return `${rec.MAT_CD}/${rec.MAT_NM_JP}`;
        }
      });
      this.hotSettings.columns[12].source = lists.category.map(rec => {
        if(rec.deleted_at == null){
          return `${rec.CAT_CD}/${rec.CAT_NM_JP}`;
        }
      });
      this.hotSettings.columns[13].source = lists.requestKind.map(rec => {
        if(rec.deleted_at == null){
          return `${rec.REQ_KIND_CD}/${rec.REQ_KIND_DTL_NAME_JP}`;
        }
      });
      this.hotSettings.columns[17].source = lists.country.map(rec => {
        if(rec.deleted_at == null){
          return `${rec.country_code}/${rec.country_name_jp}`;
        }
      });

      

      this.load = true;
    },

    paginationLength() {
      let x = this.hinbanFilter.length / this.pagination.perPage;
      this.pagination.length =
        x % 1 != 0 ? parseInt(x.toString().split(".")[0]) + 1 : x;
    },

    getHinbanDetails(id) {
      new AxiosClass('api/getHinbanDetails', {data:id}).postWithToken().then(res => {
          this.hinbanDetails = JSON.parse(
            JSON.stringify(
              this.hinbans.filter(rec => {
                return rec.id == id;
              })[0]
            )
          );
          this.hinbanDetails.revisedBy = this.$store.state.user.user.id;
          this.hotData = res.data;
          this.dialog = true;
          this.hotSettings.readOnly = true;
          if (
            this.$store.state.user.user.rights === 1 &&
            this.hinbanDetails.logisticsRecieve === true &&
            this.hinbanDetails.logisticsFields != 1
          ) {
            this.hotSettings.columns[21].readOnly = false;
            this.hotSettings.columns[22].readOnly = false;
            this.hotSettings.columns[23].readOnly = false;
          } else if (
            this.$store.state.user.user.rights === 4 &&
            this.hinbanDetails.logisticsFields == 1 &&
            this.hinbanDetails.ntsField == 0
          ) {
            this.hotSettings.columns[21].readOnly = false;
          } else {
            this.hotSettings.columns[21].readOnly = true;
            this.hotSettings.columns[22].readOnly = true;
            this.hotSettings.columns[23].readOnly = true;
          }
          setTimeout(() => {
            this.$refs["myTable"].hotInstance.render();
          }, 50);
        });
    },

    showHinbanDetails(id) {
      this.getHinbanDetails(id);
    },

    getHinbanAll() {
      new AxiosClass("api/getHinbanAll").getWithToken()
        .then(res => {
          this.hinbans = res.data;
          setTimeout(() => {
            this.overlay = false;
            this.paginationLength();
          }, 50);
        });
    },

    suspendOverlay(val) {
      setTimeout(() => {
        this.overlay = false;
      }, val);
    }
  },
  
  components: {
    HotTable,
    HotColumn
  },
  mounted() {
    this.setLists();

    Handsontable.validators.registerValidator(
      "duplicate-validator",
      (query, callback) => {
        if (query != null) {
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

    var self = this;
    $(document).on("click", ".preview", function() {
      let index = $(this)
        .closest("tr")
        .index();
      self.imagePathForPreview =
        "attachments/" + self.hotData[index].attachments;
      // console.log(self.hotData[index].attachments)
      $(".dialogVisibleButton").click();
    });
  }
};
</script>

<style scoped>
.v-data-table--fixed-header thead tr:nth-child(2) th {
  top: 30px;
  font-weight: normal;
}

.theme--light.v-data-table thead tr th {
  background-color: #90a4ae;
  color: white;
}

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
