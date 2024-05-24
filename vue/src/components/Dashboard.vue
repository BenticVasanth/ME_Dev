<template>
<!-- <div>
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
    <div>{{ this.sabbathDocList }}</div> -->
<div>
    <b-card no-body class="h-100">
        <b-tabs pills card vertical nav-wrapper-class="w-15">
            <b-tab title="Sabbath Day" active>
                <b-table striped hover bordered :items="sabbathDocTd" :fields="sabbathDocTh">
                    <template v-slot:cell(Download)="{ item }">
                        <span>
                            <b-button @click="downloadFile(item.Title)" variant="outline-success">Download</b-button>
                        </span>
                    </template>
                </b-table>
            </b-tab>
            <b-tab title="Tab 2">
                <b-card-text>Tab contents 2</b-card-text>
            </b-tab>
            <b-tab title="Tab 3">
                <b-card-text>Tab contents 3</b-card-text>
            </b-tab>
        </b-tabs>
    </b-card>
</div>
</template>

<script>
// import FileUpload from './fileUpload.vue'
import aesUtil from '@/assets/js/aesUtil.js';
import axios from 'axios';
export default {
    name: "HomeDashboard",
    data() {
        return {
            sabbathDocTd: [],
            sabbathDocTh: [{
                    label: 'Title',
                    key: 'Title'
                },
                {
                    label: 'Download',
                    key: 'Download',
                    class: 'text-center'
                },
            ],
        }
    },
    components: {
        // FileUpload
    },
    methods: {
        userList() {
            this.service.get(this.$userList).then(res => {
                this.sabbathDocList = res;
            })
        },
        sabbathDayDoc() {
            let formData = {
                limit: 10,
                order: [
                    ['IntId', 'DESC']
                ],
            }
            this.service.post(this.$sabbathDoc, formData).then(res => {
                this.sabbathDocTd = res;
            })
        },
        bibleCommentary() {
            this.sabbathDocList = "";
            this.service.get(this.$bibleCommentaryDoc).then(res => {
                this.sabbathDocList = res;
            })
        },
        downloadFile(obj) {

            this.filename = obj
            console.log(this.filename)
            if (!this.filename) {
                alert('Please enter a filename to download.');
                return;
            }

            try {
                const response = axios({
                    url: `/download/${this.filename}`,
                    method: 'GET',
                    responseType: 'blob'
                });

                // Create a link element
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', this.filename); // The file name to save as
                document.body.appendChild(link);
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
            } catch (error) {
                console.error('Error downloading the file:', error);
                alert('Error downloading the file');
            }
        },
        logout() {
            var formData = {
                userId: "userId",
                sessionId: this.$store.sessionId
            };
            var jsonFormdata = {
                id: '',
                stringValue: aesUtil.methods.encrypt(JSON.stringify(formData), this.$store.tokenId)
            };
            axios.post(this.$logout, jsonFormdata, {
                headers: {
                    'auth_token': this.$store.tokenId
                }
            }).then(res => {
                var base64StringValue = aesUtil.methods.decrypt(res.data, this.$store.tokenId);
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

<style>
.nav-pills.card-header {
    padding: 0 !important;
}
</style>
