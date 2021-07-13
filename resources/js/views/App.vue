<template>
<v-app>
    
    <Nav v-if="$store.state.confirmed == true"></Nav>
    <v-content>
        <v-container fluid>
            <!-- VIEWS -->
            <router-view></router-view>
        </v-container>
    </v-content>
    
</v-app>
</template>

<script>
import Nav from '../components/Navbar';
export default {
    components: {
        Nav
    },
    data() {
        return {
        }
    },
    watch: {
        userInfo(val) {
            this.authenticate()
        }
    },
    created() {},
    methods: {}
}
</script>
