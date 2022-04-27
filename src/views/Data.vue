<template>
    <el-container direction="vertical">
        <header-nav></header-nav>
        <el-main>
            <el-form>
                <el-form-item>
                    <el-col :span="12">
                        <el-input
                            v-model="input1"
                            class="w-50 m-2"
                            size="large"
                            placeholder="Cari Judul Data"
                            :suffix-icon="ISearch"
                        />
                    </el-col>
                    <el-col :span="8" style="margin-left: 10px;">
                        <el-select size="large" v-model="kat" placeholder="Pilih metode pengumpulan data">
                            <el-option v-for="lab in kats" :key="`lab-${lab}`" :label="lab" :value="lab" />
                        </el-select>
                        <el-button type="primary" style="margin-left: 10px;">Cari</el-button>
                    </el-col>
                </el-form-item>
            </el-form>
            
        </el-main>
    </el-container>
</template>

<script>
    import HeaderNav from "../components/HeaderNav.vue"
    import {Search} from '@element-plus/icons-vue'
    export default {
        components:{
            'header-nav': HeaderNav,
        },
        computed:{
            ISearch(){
                return Search
            }
        },
        data(){
            return {
                input1: "",
                kat:'',
                kats:[
                    "Sosial dan Kesejahteraan",
                    "Pertanian, Perikanan, Pertenakan dan Kehutanan",
                    "Pemerintahan",
                    "Pertambangan dan Energi",
                    "Industri dan Manufaktur",
                    "Pariwisata",
                    "Transportasi dan Komunikasi",
                    "Perekonomian",
                    "Perbandingan Antar Kabupaten/Kota",
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>