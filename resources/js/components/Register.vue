<template>
<div>
    <v-tooltip left>
        <template v-slot:activator="{ on }">
            <v-btn fab @click="SyncToJess()" v-on="on" fixed bottom right color="#66BB6A" >
                <v-icon style="color: white;">mdi-refresh</v-icon>
            </v-btn>
        </template>
        <span>Sync Japanese Credentials to JESS</span>
    </v-tooltip>
    <!-- <v-content> -->
        <v-container class="fill-height" fluid>
            <v-row justify="center">
                <v-col cols="6">
                    <!-- <div style="text-align: center; color: grey"><h1>Hinban<br>Registration</h1></div><hr><br> -->
                    <v-card>

                        <v-toolbar color="#CFD8DC" flat>
                            <v-toolbar-title>Register</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <!-- <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn :href="source" icon large target="_blank" v-on="on">
                                        <v-icon>mdi-code-tags</v-icon>
                                    </v-btn>
                                </template>
                                <span>Source</span>
                            </v-tooltip> -->
                        </v-toolbar>
                        <!-- <v-form @submit.prevent="login" ref="form"> -->

                        <v-card-text>
                            <div v-if="errors === undefined" style="color: red">
                                <!-- <div :error="errors.employeeId !== undefined"> {{errors.employeeId}}<br/>
                                <div :error="errors.firstName !== undefined"> {{errors.firstName}}<br/> </div>
                                <div :error="errors.lastName !== undefined"> {{errors.lastName}}<br/> </div>
                                <div :error="errors.department !== undefined"> {{errors.department}}<br/> </div>
                                <div :error="errors.email !== undefined"> {{errors.email}}<br/> </div>
                                <div :error="errors.password !== undefined"> {{errors.password}}<br/> </div> -->
                                {{errors.firstName}}<br/>
                                {{errors.lastName}}<br/>
                                {{errors.department}}<br/>
                                {{errors.email}}<br/>
                                {{errors.password}}
                            </div>
                            <!-- {{errors.employeeId !== undefined}} -->
                            <v-text-field label="Employee ID" 
                                :error="errors.employeeId !== undefined" 
                                :error-messages="errors.employeeId" 
                                dense 
                                prepend-icon="mdi-account-details-outline" 
                                type="text" 
                                v-model="form.employeeId" 
                                style="padding-bottom:5px" 
                                onkeydown="return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106)|| (event.keyCode==8) || (event.keyCode==9) || (event.keyCode>34 && event.keyCode<40) || (event.keyCode==46) )"
                            >
                            </v-text-field>

                            <v-text-field label="First Name" :error="errors.firstName !== undefined" :error-messages="errors.firstName" dense prepend-icon="mdi-account-details-outline" type="text" v-model="form.firstName" style="padding-bottom:5px"></v-text-field>

                            <v-text-field label="Last Name" :error="errors.lastName !== undefined" :error-messages="errors.lastName" dense prepend-icon="mdi-account-details" type="text" v-model="form.lastName" style="padding-bottom:5px"></v-text-field>

                            <!-- <v-text-field label="First Name Japanese(Optional)"  dense prepend-icon="mdi-account-details-outline" type="text" v-model="form.firstNameJp" style="padding-bottom:5px"></v-text-field> -->

                            <!-- <v-text-field label="Last Name Japanese(Optional)" dense prepend-icon="mdi-account-details" type="text" v-model="form.lastNameJp" style="padding-bottom:5px"></v-text-field> -->
                            
                            <v-text-field label="Department" :error="errors.department !== undefined" :error-messages="errors.department" dense prepend-icon="mdi-account-details" type="text" v-model="form.department" style="padding-bottom:5px"></v-text-field>

                            <v-text-field label="Email Address" :error="errors.email !== undefined" :error-messages="errors.email" dense prepend-icon="mdi-email" type="text" v-model="form.email" style="padding-bottom:5px"></v-text-field>

                            <v-text-field label="Password" :error="errors.password !== undefined" :error-messages="errors.password" dense prepend-icon="mdi-lock" type="password" v-model="form.password" style="padding-bottom:5px"></v-text-field>

                            <v-text-field label="Confirm Password" :error="errors.password_confirmation !== undefined" :error-messages="errors.password_confirmation" dense prepend-icon="mdi-lock-alert" type="password" v-model="form.password_confirmation" style="padding-bottom:5px"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="#263238" dark @click.prevent="register()">Submit</v-btn>
                        </v-card-actions>
                        <!-- </v-form> -->
                        <!-- <v-btn color="primary" @click.prevent="register()">Submit</v-btn> -->
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    <!-- </v-content> -->
</div>
</template>

<script>

import Swal from 'sweetalert2';
import AxiosClass from "@/js/AxiosClass";

export default {
    props: {
        source: String,
    },
    data() {
        return {
            rules: {
                email: [v => /.+@.+/.test(v) || 'Invalid Email address'],
                required: [value => !!value || 'Required.'],
            },
            form:{},
            errors: {},
        }
    },
    methods: {
        SyncToJess(){

        //user accounts from soumu system fetching and registering to hinban
        let apiKey = {headers: {"x-api-key": "JUe7mHXOhR6ziaSDHXUDJ310nTfdsH8s1ph44z2q"} };
        axios.get('https://1ze9v428i9.execute-api.us-east-2.amazonaws.com/prod/getUsers', apiKey)
        .then(res => {
            // console.log(res.data)
            new AxiosClass('api/SyncToJess',{ja:res.data}).postWithToken().then(res=>{
                console.log(res.data)
            })
        }).catch(err => {
            console.log(err)
        })
        
            
        },
        notification(type,msg){
            Swal.fire(
                type,
                msg,
                type.toLowerCase()
            )
        },
        login() {
            if (this.$refs.form.validate()) {
                alert()
            }
        },
        register(){
            // this.getCsrf();
            axios.post('api/register',this.form)
            .then(res => {
                // this.$router.push({name: "signin"})
                if(res.data != null){
                    this.errors = res.data
                    this.notification('Success',`${this.form.firstName} has been registered!`)
                    this.form = {}
                }
            }).catch(err=>{
                console.log(err)
            })
        },
        getCsrf(){
            axios.get('/sanctum/csrf-cookie').then(response => {
            });
        },
    }
    // beforeRouteEnter (to, from, next) {
    //   // eslint-disable-next-line
    //   if($cookies.get('user').rights == md5('0')){
    //     next()
    //   }else{
    //     next({ name: 'index' })
    //   }
    // },
}
</script>
<style scoped>
/* .v-input__control{
    padding-bottom: 10px !important;
} */
</style>
