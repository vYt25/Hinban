import { mapState, mapMutations, mapGetters } from 'vuex'
const myPlugins = {
    install(Vue){
        Vue.mixin({
            data: () => ({
                url: process.env.VUE_APP_URL,
            }),
            computed: {
                ...mapState([
                    'user',
                ]),
                ...mapGetters([
                    'getYearList'
                ])

            },
            methods: {
                ...mapMutations([
                    'setUserData',
                ])
            
            },
        })
    }
}
export default myPlugins