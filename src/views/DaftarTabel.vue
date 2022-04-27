<template>
    <el-scrollbar>
        <el-table :data="$store.state.tabelData" fit>
            <el-table-column wrap prop="judul" label="Judul Tabel" />
            <el-table-column prop="sumber" label="Sumber" />
            <el-table-column fixed="right" label="Aksi">
                <template #default>
                    <el-button @click="view" :icon="eye" type="primary">Lihat</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-scrollbar>
</template>

<script>
    import {
        View as EyeIcon
    } from '@element-plus/icons-vue'
    export default {
        name: 'Daftar Tabel',
         components:{
            // Eye
        },
        computed:{
            eye(){
                return EyeIcon
            }
        },
        methods:{
            sortNumber(a,b){
                return Number(a)-Number(b)
            },
            view(){

            },
            edit(){

            }
        },
        data(){
            return{
                showDialog: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>