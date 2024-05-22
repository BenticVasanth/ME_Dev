<template>
<form class="multipleform" @submit.prevent="sendMultiFile" enctype="multiple/form-data">
    <div class="filed">
        <label for="file" class="label">Multiple Upload File</label>
        <input multiple type="file" id="files" ref="files" @change="selectMultiFile">
    </div>
    <div class="filed1">
        <div v-for="(file,index) in files" :key="index">
            <div>
                <div class="level-item">{{file.name}}<br /></div>
            </div>
            <div>
                <div class="level-item">
                    <a class="delete" @click="removefile(index)"><i class="material-icons">delete</i></a>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div class="" style="text-align: center;padding: 20px;">
            <button>Send</button>
        </div>
    </div>
</form>
</template>

<script>
export default {
    name: "simpleUpload",
    data() {
        return {
            files: [],
            uploadFiles: []
        }
    },
    methods: {
        removefile(index) {
            this.files.splice(index, 1)
            this.uploadFiles.splice(index, 1)
        },
        selectMultiFile() {
            const files = this.$refs.files.files;
            this.files = [...this.files, ...files]
            this.uploadFiles = [...this.uploadFiles, ...files]

        },
        async sendMultiFile() {
            const formData = new FormData();
            this.files.map(element => {
                formData.append('files', element)
            });
            try {
                this.service.post(this.$sabbathDocUpload, formData, 'file', {
                    headers: {
                        'auth_token': this.$store.tokenId
                    }
                }).then(res => {
                    alert(res.data)
                })
                this.files = [];
                this.uploadFiles = [];
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>

<style>
.filed {

    margin: 20px;
    padding: 20px;
}

.multipleform {
    border: 2px solid black;
    width: 50%;
    margin: 10px;
    float: right;
}

.level-item {
    margin: 10px;
    padding: 10px;

}

.delete i {
    float: inline-end;
    margin-right: 82%;
    margin-top: -50px;

}
</style>
