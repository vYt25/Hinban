/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')
import Vue from 'vue';

import Vuetify from 'vuetify';
import myPlugins from './plugins/myPlugins';
import Routes from '@/js/routes';
import App from '@/js/views/App';
import store from './store';
import ElementUI from 'element-ui';
import FlagIcon from 'vue-flag-icon';
import AxiosClass from '@/js/AxiosClass';
import i18n from '@/js/plugins/i18n';
import VueIziToast from 'vue-izitoast';
import io from 'socket.io-client';

const socket = io(`${window.location.protocol}//${window.location.hostname}:9090`);

import EventBus from './EventBus.js';

window.moment = require('moment');

Vue.prototype.$EventBus = EventBus;
Vue.prototype.$socket = socket;


Vue.use(VueIziToast);
Vue.use(myPlugins);
Vue.use(ElementUI);
Vue.use(FlagIcon);
Vue.use(Vuetify, {
  iconfont: 'mdi',
});

// const i18n = new VueI18n({
//   locale: 'us', // set locale
//   fallbackLocale: 'jp', // set fallback locale
//   messages, // set locale messages
// });


/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example', () => import('./components/ExampleComponent.vue'));

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
  el: '#app',
  i18n,
  store,
  vuetify: new Vuetify(),
  router: Routes,
  created() {
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
      response => response,
      error => {
        const { status } = error.response;
        if (status === UNAUTHORIZED) {
          this.$store.dispatch('logout')
        }
        return Promise.reject(error)
      }
    )

    this.$store.setLists
  },
  mounted() {
    if (this.$store.state.lists == null) {
      new AxiosClass('api/lists').get().then(res => {
        this.$store.commit('SET_LISTS', res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },
  render: h => h(App),
});

export default app;
