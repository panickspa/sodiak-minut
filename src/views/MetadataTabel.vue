<template>
    <el-scrollbar>
        <el-table :data="$store.state.metaDataTable">
            <el-table-column prop="judul" label="Judul"/>
            <el-table-column prop="sumber" label="Sumber" />
            <el-table-column fixed="right" label="Aksi">
                <template #default="scope">
                    <el-button @click="view(scope.$index, scope.row)" :icon="eye" type="primary">Lihat</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-scrollbar>
    <el-dialog v-model="showDialog"  width="75%">
        <template #title>
            <h1>{{selectedData.judul}}</h1>
        </template>
        <el-table :data="selectedData.metadata">
            <el-table-column prop="indikator" label="Indikator"/>
            <el-table-column prop="konsep" label="Konsep" />
            <el-table-column prop="definisi" label="Definisi" />
            <el-table-column prop="referensi" label="Referensi" />
            <el-table-column prop="referensiwaktu" label="Referensi Waktu" />
            <el-table-column prop="satuan" label="Satuan" />
        </el-table>
    </el-dialog>
</template>

<script>
import {
  View as EyeIcon
} from '@element-plus/icons-vue'
    export default {
        components:{
            // Eye
        },
        name: 'Metadata Tabel',
        computed:{
            eye(){
                return EyeIcon
            }
        },
        methods:{
            view(e, r){
                this.selectedData = r
                this.showDialog = true
            }
        },
        data(){
            return{
                showDialog: false,
                selectedData:{
                    judul: '',
                    tahun: '',
                    sumber: '',
                    metadata:[
                        {
                            indikator: '',
                            konsep: '',
                            definisi: '',
                            referensi: '',
                            referensiwaktu: '',
                            satuan: ''
                        }
                    ]
                }
            }
        },
        watch:{
            selectedData(e){
                if(e){
                    this.showDialog = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>