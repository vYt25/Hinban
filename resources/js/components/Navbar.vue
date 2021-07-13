<template>
<div id="inspire" style="background-color:lightgrey">
    <v-navigation-drawer v-model="drawer" color="#ECEFF1" app style="z-index: 999">
        <v-list dense>
            <v-list-item two-line>
                <v-list-item-avatar>
                    <img src="/img/avatar.png" />
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>
                        <span>{{$store.state.user.user.firstName}} {{$store.state.user.user.lastName}}</span>
                    </v-list-item-title>
                    <v-list-item-subtitle>{{$store.state.user.user.userAccess}}</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>
            <template v-for="(item,index) in items" :to="item.to">
                <div :key="index">
                    <v-divider v-show="index == 2"></v-divider>
                    <v-subheader v-show="index == 2">Settings</v-subheader>
                </div>
                <v-row v-if="item.heading" :key="item.heading" align="center">
                    <v-col cols="6">
                        <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
                    </v-col>
                    <v-col cols="6" class="text-center">
                        <a href="#!" class="body-2 black--text">EDIT</a>
                    </v-col>
                </v-row>
                <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model" v-show="navigationShow(item)" :prepend-icon="item.icon" :append-icon="item['icon-alt']" :to="item.to">
                    <!-- <v-list-group v-else-if="item.children" :key="item.text" v-model="item.model" :prepend-icon="item.text_en != 'Hinban' ? (item.model ? item.icon : item['icon-alt']) : item.icon" :append-icon="item.text_en == 'Hinban' ? item['icon-alt'] :  item.icon" :to="item.to"> -->
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>{{ item.text_en }}</v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item v-for="(child, i) in item.children" :key="i" link :to="child.to">
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>{{ child.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <v-list-item v-else :key="item.text" link :to="item.to" v-show="navigationShow(item)">
                    <v-list-item-action>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text_en }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </template>
        </v-list>
        <!-- sidebar bottom part append -->
        <template v-slot:append>
            <!-- <div class="pa-2" style="height: 50px;" justify>
                <v-row>

                    <v-btn icon color="black">
                        <v-icon>mdi-cog</v-icon>
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn icon color="black">
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </v-row>
        </div>-->
        </template>
    </v-navigation-drawer>

    <v-app-bar dense color="#FFFFFF" app style="z-index: 900">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down">Hinban Registration</span>
        </v-toolbar-title>

        <v-progress-linear :active="$store.state.linearLoader" indeterminate absolute bottom color="blue lighten-2"></v-progress-linear>
        <!-- <v-text-field flat solo-inverted hide-details prepend-inner-icon="mdi-magnify" label="Search" class="hidden-sm-and-down" /> -->
        <!-- {{$store.state.user.token == null}} -->
        <v-spacer />

        <v-menu v-model="menu" :close-on-content-click="false" :nudge-width="100" offset-x>
            <template v-slot:activator="{ on }">
                <el-badge :is-dot="(notifications.a+notifications.c) > 0 ? true: false" v-show="$store.state.user.user.rights == 1" class="item" style="margin-right: 15px">
                    <v-btn icon small v-on="on" v-show="$store.state.user.user.rights == 1">
                        <v-icon>mdi-bell</v-icon>
                    </v-btn>
                </el-badge>
            </template>
            <v-card color="grey lighten-3">
                <v-card-title style="background-color:rgb(96,125,139); color:white;">
                    <span style="font-weight: bold; font-size: 16px" class="mt-n3">ACTIVE HINBAN(S)</span>
                </v-card-title>

                <v-divider class="mt-0"></v-divider>

                <v-card-text class="mt-n4">
                    <v-badge :content="notifications.a" color="green" overlap bordered style="font-weight: bold;">
                        <v-btn small block style="font-weight: bold;" :disabled="notifications.a == 0" @click="routerLink('c')">
                            Hinban Type A
                            <v-icon class="ml-12 mr-n2">mdi-chevron-double-right</v-icon>
                        </v-btn>
                    </v-badge>
                    <br />
                    <v-badge :content="notifications.c" color="green" overlap bordered style="font-weight: bold;" class="mt-3">
                        <v-btn small block style="font-weight: bold;" :disabled="notifications.c == 0" @click="routerLink('c')">
                            Hinban Type C
                            <v-icon class="ml-12 mr-n2">mdi-chevron-double-right</v-icon>
                        </v-btn>
                    </v-badge>
                </v-card-text>
            </v-card>
        </v-menu>

        <v-menu offset-y transition="slide-y-transition" bottom rounded>
            <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on" icon small style="margin-right: 15px">
                    <flag :iso="$store.state.selectedLanguage" style="font-size: 25px; border: 0.2px groove #CFD8DC; border-radius:2px" />
                </v-btn>
            </template>
            <v-list color="#ECEFF1">
                <v-list-item v-for="(flag, index) in $store.state.language" :key="index" @click="handleChangeLanguage(index)">
                    <v-list-item-title>
                        <flag :iso="flag.iso" style="font-size: 25px" />
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn small icon @click="logout()">
            <v-icon>mdi-logout</v-icon>
        </v-btn>
    </v-app-bar>
    
</div>
</template>

<script>
import i18n from "@/js/plugins/i18n";
import AxiosClass from "@/js/AxiosClass";
// import io from 'socket.io-client';
// const socket = io(`${window.location.protocol}//${window.location.hostname}:9090`);
export default {
    props: {
        source: String
    },
    data: () => ({
        language: "en",
        dialog: false,
        drawer: false,
        fav: true,
        menu: false,
        message: false,
        hints: true,
        items: [{
                icon: "mdi-pencil-plus",
                text_en: "Register Hinban",
                text_jp: "Register Hinban",
                rights: [1,2, 3],
                to: "register_hinban"
            },
            {
                icon: "mdi-format-list-bulleted",
                icon_left: "mdi-chevron-up",
                "icon-alt": "mdi-chevron-down",
                text_en: "Hinban",
                to: "hinban",
                rights: [1, 2, 3, 4],
                model: false,
                children: [{
                        text: "My Hinban",
                        icon: "mdi-blank",
                        to: "my_hinban"
                    },
                    {
                        text: 'View All',
                        icon: 'mdi-blank',
                        to: 'view_all'
                    },
                    // {
                    //     text: 'Type C',
                    //     icon: 'mdi-blank',
                    //     to: 'hinban_c'
                    // },
                ]
            },
            {
                icon: "mdi-cog",
                text_en: "Account Details",
                text_jp: "Account Details",
                rights: [1, 2, 3, 4],
                to: "account_details"
            },
            {
                icon: "mdi-account-supervisor",
                text_en: "Master Maintainance",
                text_jp: "",
                rights: [1],
                to: "maintainance",
                children: [{
                        text: "View Users",
                        icon: "mdi-blank",
                        to: "view_users"
                    },
                    {
                        text: "Register User",
                        icon: "mdi-blank",
                        to: "register"
                    }
                ]
            },
            {
                icon: "mdi-format-list-bulleted",
                text_en: "Masterlists",
                text_jp: "",
                rights: [1],
                // to: "maintainance",
                children: [{
                        text: "Categories",
                        icon: "mdi-blank",
                        to: "categories"
                    },
                    {
                        text: "Colors",
                        icon: "mdi-blank",
                        to: "colors"
                    },
                    {
                        text: "Countries",
                        icon: "mdi-blank",
                        to: "countries"
                    },
                    {
                        text: "Divisions",
                        icon: "mdi-blank",
                        to: "divisions"
                    },
                    {
                        text: "Materials",
                        icon: "mdi-blank",
                        to: "materials"
                    },
                    {
                        text: "Processes",
                        icon: "mdi-blank",
                        to: "processes"
                    },
                    {
                        text: "Request Kinds",
                        icon: "mdi-blank",
                        to: "request_kinds"
                    },
                    {
                        text: "Units",
                        icon: "mdi-blank",
                        to: "units"
                    }
                ]
            }
        ],
        notifications: {
            a: 0,
            c: 0
        }
    }),
    methods: {
        navigationShow(item) {
            return item.rights.includes(this.$store.state.user.user.rights);
            // console.log(!item.rights.includes(this.$store.state.user.user.rights));
            // if (item.rights.includes(this.$store.state.user.user.rights)) {
            //   return true;
            // } else {
            //   return false;
            // }
        },
        handleChangeLanguage(index) {
            this.$store.dispatch("changeLanguage", {
                language: this.$store.state.language[index].iso
            });
            // console.log(this.$store.state.language[index].iso)
            i18n.locale = this.$store.state.language[index].iso;
        },
        logout() {
            axios
                .post("api/logout", {
                    token: this.$store.state.user.token
                })
                .then(res => {
                    this.$store.commit("LOGOUT");
                    this.$router.redirect("/login");
                })
                .catch(err => {
                    console.log(err);
                });
        },
        checkNotifications() {
            axios
                .get("api/notification", {
                    headers: {
                        Authorization: `Bearer ${this.$store.state.user.token}`
                    }
                })
                .then(res => {
                    this.$store.state.notifications = res.data;
                    this.notifications = res.data;
                });
        },
        notice(notice){
            this.$toast.show(notice,'Notice!',{
                id: 'haduken',
                theme: 'dark',
                icon: 'icon-contacts',
                timeout: 10000,
                // title: 'Hey',
                displayMode: 2,
                // message: 'This is Layout <b>2</b> example',
                position: 'topCenter',
                transitionIn: 'flipInX',
                transitionOut: 'flipOutX',
                progressBarColor: 'rgb(0, 255, 184)',
                image: 'img/mail.png',
                imageWidth: 70,
                layout: 2,
                iconColor: 'rgb(0, 255, 184)'
            })
        },
    },
    mounted() {
        
        if (this.$store.state.user.token != null) {
            this.checkNotifications();
        }

        i18n.locale = this.$store.state.selectedLanguage;

        
        delete axios.defaults.headers.common["X-Requested-With"];

        
        // if(localStorage.get)

        // this.$socket.on('connect', () => {
        //     console.log('connected');
        // });

        this.$socket.on('register-hinban', (data) => {
            this.notice(`${data.user} has registered Hinban Application ${data.val.hinbanId}`)
            this.$EventBus.$emit('updateHinbanList',data);
        });
        
        this.$socket.on('recieve-hinban-by-rnd-ja', (data) => {
            this.$EventBus.$emit('recieveHinbanByRndToggle',data);
        })

        this.$socket.on('hinban-approval-by-rnd-ja', (data) => {
            var approval = data.val.approval ? 'Approved' : 'Disapproved'
            this.notice(`${data.user}(RND) has ${approval} Hinban Application ${data.val.hinbanId}`)
            this.$EventBus.$emit('hinbanApprovalByRndJa',data);
        })

        this.$socket.on('hinban-revision-by-localstaff', (data) => {
            // var approval = data.val.approval ? 'Approved' : 'Disapproved'
            this.notice(`${data.user} has Revised Hinban Application ${data.val.hinbanId} due to ${data.val.revisionReason}`)
            this.$EventBus.$emit('hinbanRevisionByLocalStaff',data);
        })
        
        this.$socket.on('recieve-hinban-by-logistics', (data) => {
            this.$EventBus.$emit('recieveHinbanByLogisticsToggle',data);
        })

        this.$socket.on('hinban-recieve-by-class-a-approver', (data) => {
            this.$EventBus.$emit('recieveHinbanByClassAApproverToggle',data);
        })

        this.$socket.on('hinban-approval-by-class-a-approver', (data) => {

            var approval = data.val.classAApproval == 1 ? 'Approved' : 'Disapproved'

            this.notice(`${data.user} has ${approval} Hinban Application ${data.val.hinbanId}`)

            this.$EventBus.$emit('hinbanApprovalbyClassAApprover',data);

        })

        this.$socket.on('hinban-approval-by-logistics', (data) => {

            var approval = data.val.logisticsApproval == 1 ? 'Approved' : 'Disapproved'
            var reason = data.val.logisticsApproval == 1 ? '' : ('('+data.val.reason+')')
            console.log(data.val.logisticsApproval == 1, reason)

            this.notice(`${data.user}(Logistics) has ${approval} Hinban Application ${data.val.hinbanId}${reason}`)

            this.$EventBus.$emit('hinbanApprovalByLogistics',data);

        })
        
        this.$socket.on('hinban-approve-by-nts', (data) => {

            this.notice(`${data.user}(NTS) has Validated/Approved Hinban Application ${data.val.hinbanId}`)

            this.$EventBus.$emit('hinbanApproveByNts',data);

        })

    }
};
</script>

<style>
.v-card__title {
    height: 40px;
}

a {
    text-decoration: none !important;
}
</style>
