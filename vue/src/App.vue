<template>
<div id="app">
    <div>
        <router-view />
    </div>
</div>
</template>

<script>
import { useCommonStore } from '@/stores/store';
import { getCurrentInstance } from 'vue'

export default {
    name: 'App',
    components: { },
    data() {
        return { }
    },
    computed: {
        getloadeddatas() {
            return this.$commonstore.getStore().pageloading
        }
    },
    methods: {
        assignCommonStore() {
            const $global = getCurrentInstance().appContext.config.globalProperties;
            $global.$store = useCommonStore();
            $global.$commonstore = this.service;
        }
    },
    created() {
        this.assignCommonStore()
        this.service.intercept();
    }
}
</script>
