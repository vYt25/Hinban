<template>
  <div>
    <!-- overlay -->
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="50"></v-progress-circular>
    </v-overlay>
      <v-card>
        <v-col cols="12" class="pb-2" style="height: 60px">
            <v-row rows="10">
                <v-col cols="1">
                    <v-row class="ml-1">
                        
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

                        <v-col cols="12" md="4" sm="2">
                            <v-text-field hide-details clearable label="Keyword(Start from 1st character)" outlined dense v-show="filter" v-model="filterVar.queryString" @blur="queryWithFilter()"></v-text-field>
                        </v-col>

                        <!-- <v-col cols="12" md="2" sm="2">
                            <v-text-field hide-details clearable label="CAT_NM" outlined dense v-show="filter" v-model="filterVar.CAT_NM"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2" sm="2">
                            <v-text-field hide-details clearable label="CAT_NM_JP" outlined dense v-show="filter" v-model="filterVar.CAT_NM_JP"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2" sm="2">
                            <v-text-field hide-details clearable label="DIV_CD" outlined dense v-show="filter" v-model="filterVar.DIV_CD"></v-text-field>
                        </v-col>

                        <v-col cols="12" md="2" sm="2">
                            <v-text-field hide-details clearable label="TAX_DEPARTMENT_CD" outlined dense v-show="filter" v-model="filterVar.TAX_DEPARTMENT_CD"></v-text-field>
                        </v-col> -->

                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-simple-table dense fixed-header :height="HinbanFromOracle.length == 0 ? '15vh' : '70vh'" class="myTable table-wrap">
          <thead>
            <tr>
              <th>HINBAN_CODE</th>
              <th>HINBAN_C</th>
              <th>HINBAN</th>
              <th>CLR</th>
              <th>BOX</th>
              <th>PART</th>
              <th>HINBAN_NM</th>
              <th>HINBAN_NM_JP</th>
              <th>SHORT_NM</th>
              <th>SUMMARY</th>
              <th>SUMMARY_JP</th>
              <th>MAT_CD</th>
              <th>USE_FOR</th>
              <th>USE_FOR_JP</th>
              <th>UNIT</th>
              <th>CUSTOM_CD</th>
              <th>SiZE_L</th>
              <th>SiZE_W</th>
              <th>SiZE_H</th>
              <th>P_DIV_CD</th>
              <th>E_DIV_CD</th>
              <th>KIND_CD</th>
              <th>REQ_KIND</th>
              <th>KOZ_CD</th>
              <th>ORS_KIND</th>
              <th>PQTY</th>
              <th>PRD_NO_FLG</th>
              <th>INV_FLG</th>
              <th>PRC_UNT</th>
              <th>ODR_TYPE</th>
              <th>KG_FLG</th>
              <th>CBM_FLG</th>
              <th>TUBO_FLG</th>
              <th>SQM_FLG</th>
              <th>MTR_FLG</th>
              <th>FLOOR_FLG</th>
              <th>KG_QTY</th>
              <th>CBM_QTY</th>
              <th>MTR</th>
              <th>ENT_DT</th>
              <th>UPD_DT</th>
              <th>DEL_DT</th>
              <th>CAT_CD</th>
              <th>PALLET_FLG</th>
              <!--<th>KG_QTY1</th>
              <th>KG_QTY2</th>
              <th>KG_QTY3</th>
               <th>KG_QTY_A</th>
              <th>KG_QTY_B</th>
              <th>KG_QTY_C</th>
              <th>KG_QTY_D</th>
              <th>KG_QTY_E</th>
              <th>KG_QTY_F</th>
              <th>KG_QTY_G</th>
              <th>CBM_QTY_A</th>
              <th>CBM_QTY_B</th>
              <th>CBM_QTY_C</th>
              <th>CBM_QTY_D</th>
              <th>CBM_QTY_E</th>
              <th>CBM_QTY_F</th>
              <th>CBM_QTY_G</th> -->
              <th>ITEMID</th>
              <th>REQ_KIND_NO</th>
              <th>NISSAN_KIND_CD</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(each,ind) in HinbanFromOracle" :key="ind">
              <td>{{each.HINBAN_CODE}}</td>
              <td class="text-nowrap">{{each.HINBAN_C}}</td>
              <td class="text-nowrap">{{each.HINBAN}}</td>
              <td>{{each.CLR}}</td>
              <td class="text-nowrap">{{each.BOX}}</td>
              <td>{{each.PART}}</td>
              <td class="text-nowrap">{{each.HINBAN_NM}}</td>
              <td class="text-nowrap">{{each.HINBAN_NM_JP}}</td>
              <td>{{each.SHORT_NM}}</td>
              <td>{{each.SUMMARY}}</td>
              <td>{{each.SUMMARY_JP}}</td>
              <td>{{each.MAT_CD}}</td>
              <td>{{each.USE_FOR}}</td>
              <td>{{each.USE_FOR_JP}}</td>
              <td>{{each.UNIT}}</td>
              <td>{{each.CUSTOM_CD}}</td>
              <td>{{each.SiZE_L}}</td>
              <td>{{each.SiZE_W}}</td>
              <td>{{each.SiZE_H}}</td>
              <td>{{each.P_DIV_CD}}</td>
              <td>{{each.E_DIV_CD}}</td>
              <td>{{each.KIND_CD}}</td>
              <td>{{each.REQ_KIND}}</td>
              <td>{{each.KOZ_CD}}</td>
              <td>{{each.ORS_KIND}}</td>
              <td>{{each.PQTY}}</td>
              <td>{{each.PRD_NO_FLG}}</td>
              <td>{{each.INV_FLG}}</td>
              <td>{{each.PRC_UNT}}</td>
              <td>{{each.ODR_TYPE}}</td>
              <td>{{each.KG_FLG}}</td>
              <td>{{each.CBM_FLG}}</td>
              <td>{{each.TUBO_FLG}}</td>
              <td>{{each.SQM_FLG}}</td>
              <td>{{each.MTR_FLG}}</td>
              <td>{{each.FLOOR_FLG}}</td>
              <td>{{each.KG_QTY}}</td>
              <td>{{each.CBM_QTY}}</td>
              <td>{{each.MTR}}</td>
              <td>{{each.ENT_DT.split('T')[0]}}</td>
              <td>{{each.UPD_DT.split('T')[0]}}</td>
              <td>{{each.DEL_DT !== null ? each.DEL_DT.split('T')[0] : null}}</td>
              <td>{{each.CAT_CD}}</td>
              <td>{{each.PALLET_FLG}}</td>
              <!-- <td>{{each.KG_QTY1}}</td>
              <td>{{each.KG_QTY2}}</td>
              <td>{{each.KG_QTY3}}</td>
              <td>{{each.KG_QTY_A}}</td>
              <td>{{each.KG_QTY_B}}</td>
              <td>{{each.KG_QTY_C}}</td>
              <td>{{each.KG_QTY_D}}</td>
              <td>{{each.KG_QTY_E}}</td>
              <td>{{each.KG_QTY_F}}</td>
              <td>{{each.KG_QTY_G}}</td>
              <td>{{each.CBM_QTY_A}}</td>
              <td>{{each.CBM_QTY_B}}</td>
              <td>{{each.CBM_QTY_C}}</td>
              <td>{{each.CBM_QTY_D}}</td>
              <td>{{each.CBM_QTY_E}}</td>
              <td>{{each.CBM_QTY_F}}</td>
              <td>{{each.CBM_QTY_G}}</td> -->
              <td>{{each.ITEMID}}</td>
              <td>{{each.REQ_KIND_NO}}</td>
              <td>{{each.NISSAN_KIND_CD}}</td>
            </tr>
            <tr v-if="HinbanFromOracle.length == 0">
              <td colspan="47">No Data</td>
            </tr>
          </tbody>
        </v-simple-table>
        <v-pagination
          v-model="pagination.page"
          :length="pagination.length"
          :total-visible="pagination.visible"
          @input="changePage()"
        ></v-pagination>
      </v-card>
  </div>
</template>

<script>
export default {
  data(){
    return {
      HinbanFromOracle: [],
      rowCount: 0,
      filter:false,
      filterVar: {},
      overlay: true,
      pagination:{
        page: 1,
        length: 1,
        visible: 7,
        perpage: 100,
        rowCount: 0
      },
      previousSearch: null,
    }
  }, 
  methods:{
    changePage(){
      this.queryWithFilter()
    },
    queryWithFilter(){
      this.overlay = true
      var queryString = null
      // console.log(this.filterVar.queryString == undefined) 
      if(this.filterVar.queryString == undefined  || this.filterVar.queryString == 'undefined' || this.filterVar.queryString == null || this.filterVar.queryString == "" ){
        queryString = 'A'
      }else{
        queryString = this.filterVar.queryString
      }
      this.oracleQuery(queryString,this.pagination.page,this.pagination.perpage)
      this.getRowCount()
    },
    filterAction() {
            this.filter = !this.filter;
            if (this.filter == false) {
                this.filterVar.queryString = null;
            }
        },
    oracleQuery(queryString,skip,take){
      if(this.previousSearch != queryString){
          this.previousSearch = queryString
          this.pagination.page = 1
      }
      axios.post(`${window.location.protocol}//${window.location.hostname}:5000/oracleQuery`,{
        queryString:queryString,
        skip: skip,
        take:take
      })
      .then(res=>{

          this.HinbanFromOracle = res.data

          setTimeout(()=>{
            this.overlay = false
          },100)
      })

    },
    getRowCount(){
      var queryString = null
      if(this.filterVar.queryString == undefined  || this.filterVar.queryString == 'undefined' || this.filterVar.queryString == null || this.filterVar.queryString == "" ){
        queryString = 'A'
      }else{
        queryString = this.filterVar.queryString
      }
      axios.post(`${window.location.protocol}//${window.location.hostname}:5000/rowCount`,{
        queryString:queryString,
      })
      .then(res=>{
        // console.log
        this.pagination.rowCount = res.data[0].ROWCOUNT

        this.pagination.length = this.pagination.rowCount%this.pagination.perpage < 50 ? parseInt((this.pagination.rowCount/this.pagination.perpage).toFixed()) + 1 :  parseInt((this.pagination.rowCount/this.pagination.perpage).toFixed())
      })
    }
  },
  created(){
    this.getRowCount()
    this.oracleQuery('A',1,100)
  }

}
</script>

<style scoped>
.theme--light.v-data-table thead tr th {
    color: white;
    background-color: gray;
    border-style: solid;
    border-width: 0.7px;
}

</style>