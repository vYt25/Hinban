import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

let router = new VueRouter({
    mode: "history",
    routes: [
        {
            path: "*",
            name: "not_found",
            component: () => import('../js/components/NotFound.vue')
        },
        {
            path: "/register_hinban",
            name: "register_hinban",
            component: () => import('../js/components/RegisterHinban.vue'),
            // meta: {
            //     auth: true
            // },
            // beforeEnter: (to, from, next) => {
            //     JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next({ name: "not_found" }) : next();
            // }
        },
        {
            path: "/view_users",
            name: "view_users",
            component: () => import('../js/components/ViewUsers.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        {
            path: "/",
            name: "landing",
            component: () => import('../js/components/RegisterHinban.vue'),
            // meta: {
            //     auth: true
            // },
            // beforeEnter: (to, from, next) => {
            //     JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next({ name: "not_found" }) : next();
            // },
        },
        {
            path: "/signin",
            name: "signin",
            component: () => import('../js/components/Signin.vue'),
            meta: {
                auth: false
            }
        },
        {
            path: "/register",
            name: "register",
            component: () => import('../js/components/Register.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        {
            path: "/my_hinban",
            name: "my_hinban",
            component: () => import('../js/components/MyHinban.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: "/view_all",
            name: "view_all",
            component: () => import('../js/components/ViewAll.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: "/account_details",
            name: "account_details",
            component: () => import('../js/components/AccountDetails.vue'),
            meta: {
                auth: true
            }
        },
        {
            path: "/categories",
            name: "categories",
            component: () => import('../js/components/masterlist/Categories.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        {
            path: "/colors",
            name: "colors",
            component: () => import('../js/components/masterlist/Colors.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        {
            path: "/countries",
            name: "countries",
            component: () => import('../js/components/masterlist/Countries.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        {
            path: "/divisions",
            name: "divisions",
            component: () => import('../js/components/masterlist/Divisions.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        {
            path: "/materials",
            name: "materials",
            component: () => import('../js/components/masterlist/Materials.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        {
            path: "/processes",
            name: "processes",
            component: () => import('../js/components/masterlist/Processes.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        {
            path: "/request_kinds",
            name: "request_kinds",
            component: () => import('../js/components/masterlist/RequestKinds.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        {
            path: "/units",
            name: "units",
            component: () => import('../js/components/masterlist/Units.vue'),
            meta: {
                auth: true
            },
            beforeEnter: (to, from, next) => {
                JSON.parse(localStorage.getItem("user")).user.rights == 1 ? next() : next({ name: "not_found" });
            }
        },
        // {
        //     path: "/PDF",
        //     name: "pdf",
        //     component: PDF,
        //     meta: {
        //         auth: true
        //     }
        // }
    ]
});


router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem("user");

    if (to.path !== "/signin") {
        if (loggedIn != undefined) {
            next();
        } else {
            next({ name: "signin" });
        }
    } else if (loggedIn != undefined) {
        next({ name: "home" });
    } else {
        next();
    }
});

export default router;
