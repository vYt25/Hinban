import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import axios from 'axios';
import AxiosClass from '@/js/AxiosClass'

Vue.use(Vuex);

export default new Vuex.Store({

    state: {  // = data
        language: [
            {
                iso: 'us',
                src: 'flag/us.svg'
            },
            {
                iso: 'jp',
                src: 'flag/jpn.svg'
            }
        ],
        userTypes: [
            { id: 1, type: 'Administrator' },
            { id: 2, type: 'Japanese Adviser' },
            { id: 3, type: 'Local Staff' }
        ],
        status: [
            { name: "For Recieve(JA)" },
            { name: "For Approval(JA)" },
            { name: "For Recieve(Logistics)" },
            { name: "For Review(Logistics)" },
            { name: "Exported to CSV" },
            { name: "Disapproved" }
        ],
        selectedLanguage: 'us',
        linearLoader: false,
        filter: {
            class: null,
            shipmentWeek: null,
            shipmentYear: null,
            manufactureName: null,
            applicant: null
        },
        confirmed: false,
        user: {},
        users: [],
        batch: {},
        rules: {
            email: [v => /.+@.+/.test(v) || 'Invalid Email Address'],
            required: [value => !!value || 'Required'],
            year: [x => /^(?![01]|20[01])\d{4}$/.test(x) || 'Invalid Year Format'],
        },
        class: [
            { name: "A" },
            { name: "C" },
        ],
        notifications: { a: 0, c: 0 },
        batch: {
            shipmentWeek: null,
            shipmentYear: null,
            manufactureName: null,
            descriptionOfApplication: null,
            processingProcess: null,
            toCsv: null,
            approved: null,
            approvedBy: null,
            // application:null,
        },
        lists: null,
    },

    mutations: {
        setUserData(state, userData) {
            // userData.user.rights != 3 ? state.class[0].disabled = false : state.class[0].disabled = true
            state.confirmed = true
            state.batch.approvedBy = userData.user.id
            state.user = userData
            localStorage.setItem('user', JSON.stringify(userData))
            axios.defaults.headers.common.Authorization = `Bearer ${userData.token}`
        },

        LOGOUT(state) {
            state.user = ''
            state.confirmed = false
            state.lists = null
            localStorage.clear()
            location.reload()
        },
        CHANGE_LANGUAGE(state, language) {
            state.selectedLanguage = language
        },
        SET_LISTS(state, lists) {
            state.lists = lists
            localStorage.setItem('lists', JSON.stringify(lists))
        }


    },

    actions: { // methods
        login({ commit }, credentials) {
            commit('setUserData', credentials)
        },

        // logout({ commit }, state) {
        //     commit('clearUserData')
        // },

        changeLanguage({ commit }, val) {
            commit('CHANGE_LANGUAGE', val.language)

        }
    },

    getters: {  ////computed

        isLogged: state => !!state.user,

        getYearList(state) {
            let year = new Date()
            year = (year.getFullYear()) - 1
            let arr = [];
            for (var x = year; x < year + 3; x++) {
                arr.push({
                    'year': x
                })
            }
            return arr;
        },

        // test(state) {
        //     var users = ''
        //     new AxiosClass('api/getUsers').getWithToken().then(res => {
        //         state.users = res.data

        //     })
        //     return state.users;
        // }
    },
    plugins: [createPersistedState()]
})