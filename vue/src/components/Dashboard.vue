<template>
<div>
    <h1 @click="bibleCommentary">Welcome Dashboard</h1>
    <div>{{ this.sabbathDocList }}</div>
</div>
</template>

<script>
export default {
    name: "HomeDashboard",
    data() {
        return {
            sabbathDocList: "",
        }
    },
    methods: {
        sabbathDayDoc() {
            this.service.get(this.$sabbathDoc).then(res => {
                this.sabbathDocList = res;
            })
        },
        bibleCommentary() {
            this.sabbathDocList = "";
            this.service.get(this.$bibleCommentaryDoc).then(res => {
                this.sabbathDocList = res;
            })
        }
    },
    created() {
        this.sabbathDayDoc();
    }
}
</script>
