<template>
<div>
    <h1 @click="sabbathDayDoc">sabbathDayDoc</h1>
    <br>
    <br>
    <FileUpload />
    <br>
    <br>
    <h1 @click="userList">userList</h1>
    <br>
    <br>
    <h2 @click="logout">Logout</h2>
    <br>
    <br>
    <div>{{ this.sabbathDocList }}</div>
</div>
</template>

<script>
import FileUpload from './fileUpload.vue'
import aesUtil from '@/assets/js/aesUtil.js';
import axios from 'axios';
export default {
    name: "HomeDashboard",
    data() {
        return {
            sabbathDocList: "",
        }
    },
    components: {
        FileUpload
    },
    methods: {
        userList() {
            this.service.get(this.$userList).then(res => {
                this.sabbathDocList = res;
            })
        },
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
        },
        logout() {
            var formData = {
                userId: "userId",
                sessionId: this.$store.sessionId
            };
            var jsonFormdata = {
                id: '',
                stringValue: aesUtil.methods.testEncrypt(JSON.stringify(formData), this.$store.tokenId)
            };
            axios.post(this.$logout, jsonFormdata, {
                headers: {
                    'auth_token': this.$store.tokenId
                }
            }).then(res => {
                var base64StringValue = aesUtil.methods.testDecrypt(res.data, this.$store.tokenId);
                var jsonString = JSON.parse(base64StringValue);
                if (jsonString.id == 1) {
                    alert(jsonString.stringValue)
                    this.router.push({
                        path: "/"
                    });
                    this.$store.sessionId = "";
                } else if (jsonString.id == 0) {
                    alert(jsonString.stringValue)
                }
            })
        }
    },
    created() {
        this.sabbathDayDoc();
    }
}
</script>
