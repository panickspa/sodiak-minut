<template>
    <el-container direction="vertical">
        <header-nav></header-nav>
        <el-main>
            <el-image style="width: 100%; height: auto" :src="bupatiImg" fit="contain" />
            <h1 class="title">Kategori Data</h1>
            <el-carousel :interval="4000" type="card" height="500px">
                <el-carousel-item v-for="item in kategoriData" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </el-main>
    </el-container>
</template>

<script>
    import HeaderNav from "../components/HeaderNav.vue"
    export default {
        components:{
            'header-nav': HeaderNav
        },
        computed:{
            bupatiImg(){
                return require("../assets/bupati.png")
            }
        },
        data(){
            return{
                kategoriData:[
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

<style scoped>
.el-carousel__item h3 {
  color: #850f0f;
  font-size: var(--el-font-size-large);
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.title{
    margin: 1em 0% 1em 0%;
    text-align: center;
}
</style>