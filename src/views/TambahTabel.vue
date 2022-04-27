<template>
    <el-scrollbar>
        <el-row>
            <el-col>
                <add-table @readFile="loadExcel"></add-table>
            </el-col>
        </el-row>
        <el-dialog v-model="showTable" fullscreen  width="100%">
            <template #title>
                <el-row>
                    <el-col :span="16" class="mr-2">
                        <el-input v-model="judul" placeholder="Please input" />
                    </el-col>
                    <el-col :span="4" class="mr-2">
                        <el-input v-model="tahun" placeholder="Please input" />
                    </el-col>
                    <el-col :span="3">
                       Simpan
                    </el-col>
                </el-row>
            </template>
            <el-scrollbar>
                <div id="luckysheet"></div>
            </el-scrollbar>
        </el-dialog>
    </el-scrollbar>
</template>

<script>
    /* eslint-disable no-unused-vars */
    import AddTabel from"../components/AddTabel.vue"
    import LuckyExcel from 'luckyexcel'
    export default {
        components:{
            'add-table': AddTabel
        },
        methods:{
            loadExcel(e){
                this.showTable = true
                LuckyExcel.transformExcelToLucky(e, function (exportJson, luckysheetfile){
                    if (exportJson.sheets == null || exportJson.sheets.length == 0) {
                        alert('Failed to read the content of the excel file, currently does not support xls files!')
                        return
                    }
                    console.log('exportJson', exportJson)
                    window.luckysheet.destroy()
                    window.luckysheet.create({
                        container: 'luckysheet', //luckysheet is the container id
                        showinfobar: false,
                        data: exportJson.sheets,
                        title: exportJson.info.name,
                        userInfo: exportJson.info.name.creator
                    })
                })
            }
        },
        data(){
            return {
                showTable: false,
                judul: '',
                tahun: ''
            }
        }
    }
</script>

<style scoped>
#luckysheet{
  height: 500px;
}
.mr-2{
    margin-right: 10px;
}
</style>