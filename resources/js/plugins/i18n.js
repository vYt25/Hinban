import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);

const messages = {
    'us': {
        welcomeMsg: {
            test1: 'test1',
            test2: 'test2',
        },
    },
    'jp': {
        welcomeMsg: {
            test1: 'test1 japanese',
            test2: 'test2 japanese',
        },
    }
};

export default new VueI18n({
    locale: 'us', // set locale
    fallbackLocale: 'jp', // set fallback locale
    messages, // set locale messages
  });

 