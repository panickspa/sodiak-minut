<template>
    <div v-bind:class="{ hide: hideUpload }">
        <el-upload
            ref="uploadRef"
            class="upload-demo"
            action="#"
            :fileList="fileList"
            drag
            accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel, .csv"
            :auto-upload="false"
            :on-change="readFile"
            :multiple="false"
        >
            <el-icon class="el-icon--upload"><upload-filled /></el-icon>
            <template #tip>
            <div class="el-upload__tip">
                Taruh tabel diatas atau <em>Klik untuk mengunggah fail tabel</em> .xls atau .xlsx
            </div>
            </template>
        </el-upload>
    </div>
</template>

<script>
    import { UploadFilled } from '@element-plus/icons-vue'
    export default {
        name: 'add-table',
        components:{
            UploadFilled
        },
        computed:{
            hideUpload(){
                return this.fileList.length > 0
            }
        },
        methods:{
            readFile(e){
                this.$emit("readFile", e.raw)
            },
        },
        data(){
            return {
                fileList: []
            }
        },
        watch:{
            fileList(e){
                console.log(e)
            }
        }
    }
</script>

<style scoped>

</style>