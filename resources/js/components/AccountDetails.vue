<template>
<div>
    <v-container fluid>
        <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="6">
                <v-card>
                    <v-toolbar dense color="#CFD8DC" flat>
                        <v-toolbar-title>Account Details</v-toolbar-title>
                        <v-spacer></v-spacer>
                    </v-toolbar>
                    <!-- <form id="details"> -->
                    <v-form ref="form" id="details">
                        <v-card-text>
                            <v-text-field name="id" prepend-icon="mdi-account" type="text" :value="$store.state.user.user.id" style="display:none"></v-text-field>
                            <v-text-field :rules="rules.required" id="firstName" label="First Name" name="firstName" :value="details.firstName" prepend-icon="mdi-account" type="text"></v-text-field>
                            <v-text-field :rules="rules.required" id="lastName" label="Last Name" name="lastName" :value="details.lastName" prepend-icon="mdi-account-details" type="text"></v-text-field>
                            <v-text-field :rules="rules.email" id="email" label="Email" name="email" :value="details.email" prepend-icon="mdi-email" type="text"></v-text-field>
                            <v-text-field :rules="rules.required" id="password" label="Password" name="password" prepend-icon="mdi-lock" type="password"></v-text-field>
                            <v-text-field :rules="rules.required" id="confirm_password" label="Confirm Password" name="confirm_password" prepend-icon="mdi-lock-alert" type="password"></v-text-field>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="#388E3C" @click="submit()">Submit</v-btn>
                        </v-card-actions>
                    </v-form>
                    <!-- </form> -->
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import Swal from 'sweetalert2';
import AxiosClass from '@/js/AxiosClass'
export default {
    data() {
        return {
            rules: {
                email: [v => /.+@.+/.test(v) || 'Invalid Email Address'],
                required: [value => !!value || 'Required'],
            },
            details: {}
        }
    },
    computed: {},
    created() {
        this.getUserInfo()
    },
    methods: {
        notification(msg, type) {
            type = type[0].toUpperCase() + type.slice(1);
            Swal.fire({
                icon: type.toLowerCase(),
                title: type,
                text: msg,
                // footer: '<a href>Why do I have this issue?</a>'
            })
        },
        getUserInfo() {
            this.details = JSON.parse(localStorage.getItem('user')).user

        },
        submit(e) {
            var fn = document.getElementById('firstName')
            var ln = document.getElementById('lastName')
            var em = document.getElementById('email')

            var pw = document.getElementById('password')
            var pwc = document.getElementById('confirm_password')
            var form = document.getElementById('details')
            form = new FormData(form)

            if (pw.value === pwc.value && pw.value != '' && pwc.value != '') {

                new AxiosClass('api/updateAccountDetails', form).postWithTokenFormdata().then(res => {
                    this.notification('Account Details Updated!', 'success')
                    pw.value = ''
                    pwc.value = ''
                }).catch(err => {
                    this.notification(err, 'error')
                })

            } else {
                if (fn.value == '' || ln.value == '' || em.value == '' || pw.value == '' || pwc.value == '') {
                    this.$refs.form.validate()
                } else {
                    alert('Password Does not match')
                }
            }

        }
    }

}
</script>

<style>
div .v-application--wrap {
    min-height: 70vh !important;
}
</style>
