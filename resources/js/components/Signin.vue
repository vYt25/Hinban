<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <div style="text-align: center; color: grey">
              <h1>Hinban Registration</h1>
            </div>
            <hr />
            <br />
            <v-card class="elevation-12">
              <v-toolbar color="#CFD8DC" dense flat justify="center">
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-row align="center" v-show="error">
                  <v-col cols="8">
                    <span style="color: red">{{error_msg}}</span>
                  </v-col>
                </v-row>
                <v-text-field
                  label="Employee ID"
                  :error="error"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                  v-model="form.employeeId"
                  @keyup.enter="login()"
                ></v-text-field>

                <v-text-field
                  id="password"
                  :error="error"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  v-model="form.password"
                  @keyup.enter="login()"
                ></v-text-field>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#BBDEFB" @click="login">Submit</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Swal from "sweetalert2";
import AxiosClass from "@/js/AxiosClass";
export default {
  props: {
    source: String
  },
  data() {
    return {
      rules: {
        email: [v => /.+@.+/.test(v) || "Invalid Email address"],
        required: [value => !!value || "Required"]
      },
      form: {},
      error: false,
      error_msg: null
    };
  },
  methods: {
    login() {
      new AxiosClass("api/login", this.form)
        .post()
        .then(res => {
          if ( res.data == "Invalid Employee ID Or Password!" ||res.data == "Your Account was Disabled!") {
            this.error_msg = res.data;
            this.error = true;
          } else {
            this.error = false;
            this.$store.dispatch("login", res.data).then(() => {
              window.location.href = `http://${window.location.host}/my_hinban`;
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.error = true;
        });
    },
    getCookie() {
      axios.get("/sanctum/csrf-cookie");
    }
  }
};
</script>
