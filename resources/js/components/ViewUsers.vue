<template>
<div>
    <v-overlay :value="overlay">
        <v-progress-circular indeterminate size="50">
        </v-progress-circular>
    </v-overlay>
    <v-col cols=12>
        <v-row>
            <v-col cols="12" sm="6" md="3">
                Master Maintainance
                <v-btn icon small v-show="!filter" @click="filter = !filter">
                    <v-icon small>mdi-filter</v-icon>
                </v-btn>

                <v-btn icon small v-show="filter" @click="filter = !filter">
                    <v-icon small>mdi-filter-remove</v-icon>
                </v-btn>
            </v-col>
            <v-col v-if="filter" cols="12" sm="6" md="3">
                <v-text-field dense label="Name" outlined hide-details clearable v-model="filterFields.name"></v-text-field>
            </v-col>
            <v-col v-if="filter" cols="12" sm="6" md="3">
                <v-text-field dense label="Email" outlined hide-details clearable v-model="filterFields.email"></v-text-field>
            </v-col>
            <v-col v-if="filter" class="d-flex" cols="12" sm="6" md="3">
                <v-select :items="$store.state.userTypes" label="Type" outlined hide-details clearable dense item-text="type" item-value="id" v-model="filterFields.type"></v-select>
            </v-col>

        </v-row>
        <v-row>

        </v-row>
        <v-row>
            <v-col cols=12 justify="center">
                <v-simple-table dense fixed-header height='70vh' class="myTable">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>E-mail</th>
                            <th>Type</th>
                            <th v-show="$store.state.user.user.rights == 1">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(user,i) in userFilter" :key="i">
                            <td>{{user.firstName}} {{user.lastName}}</td>
                            <td>{{user.email}}</td>
                            <td>{{user.rights == 1 ? 'Administrator' : user.rights != 2 ? 'Local Staff' : 'Japanese Adviser' }}</td>
                            <td v-show="$store.state.user.user.rights == 1">
                                <v-row v-show="$store.state.user.user.id != user.id">
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon color="success" :disabled="user.rights == 1" v-on="on" @click="setUserAccess(user.id,1)" v-show="user.deleted_at == null">
                                                <v-icon>mdi-account-cog</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Set as Administrator</span>
                                    </v-tooltip>

                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon :disabled="user.rights != 1" v-on="on" @click="setUserAccess(user.id,2)" v-show="user.deleted_at == null">
                                                <v-icon>mdi-account</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Set as User</span>
                                    </v-tooltip>

                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon color="success" v-on="on" @click="deleteUserAccountUndo(user.id)" v-show="user.deleted_at != null">
                                                <v-icon>mdi-account-check</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Undo Delete User </span>
                                    </v-tooltip>
                                    <v-tooltip right>
                                        <template v-slot:activator="{ on }">
                                            <v-btn icon color="red lighten-2" v-on="on" @click="deleteUserAccount(user.id)" v-show="user.deleted_at == null" >
                                                <v-icon>mdi-account-remove</v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Delete User</span>
                                    </v-tooltip>
                                </v-row>
                            </td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-col>
        </v-row>
    </v-col>
</div>
</template>

<script>
import Swal from 'sweetalert2';
import AxiosClass from "@/js/AxiosClass";


export default {
    data() {
        return {
            users: null,
            overlay: true,
            filter: false,
            filterFields: {
                name: null,
                type: 1,
                email: null
            }
        }
    },
    computed: {
        userFilter() {
            if(this.users != null){
                return this.users.filter(rec => {
                    if (this.filterFields.name == "" || this.filterFields.name == null) {
                        return rec
                    } else {
                        return (rec.firstName + ' ' + rec.lastName).toLowerCase().includes(this.filterFields.name.toLowerCase())
                    }
                }).filter(rec => {
                    if (this.filterFields.type == "" || this.filterFields.type == null) {
                        return rec
                    } else {
                        return rec.rights == this.filterFields.type
                    }
                }).filter(rec => {
                    if (this.filterFields.email == "" || this.filterFields.email == null) {
                        return rec
                    } else {
                        return rec.email.includes(this.filterFields.email)
                    }
                })
            }
        },
    },
    methods: {
        postUserModification(users) {
            this.users = users
            this.overlay = false

        },
        deleteUserAccountUndo(id){
            this.overlay = true
            new AxiosClass('api/deleteUserAccessUndo',{data: id} ).postWithToken()
            .then(res => {
                this.postUserModification(res.data)
                Swal.fire('Success','Account Has Been Restored!','success')
            }).catch(err => {
                console.log(err)
            })
        },

        deleteUserAccount(id) {
            this.overlay = true
            new AxiosClass('api/deleteUserAccess',{data: id} ).postWithToken()
            .then(res => {
                this.postUserModification(res.data)
                Swal.fire('Success',
                    'Account Has Been Deleted!',
                    'success')
            }).catch(err => {
                console.log(err)
            })
        },
        setUserAccess(id, rights) {
            this.overlay = true
            // let id = this.$store.state.user.user.id
            new AxiosClass('api/setUserAccess',{data: id + '/' + rights} ).postWithToken()
            .then(res => {
                this.postUserModification(res.data)
            }).catch(err => {
                console.log(err)
            })
        },
        getUsers() {
            
            this.overlay = true
            new AxiosClass('api/getUsers').getWithToken()
            .then(res => {
                setTimeout(()=>{
                    this.postUserModification(res.data)
                },200)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getUsers()
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
