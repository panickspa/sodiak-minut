<template>
    <el-container direction="vertical">
        <header-nav></header-nav>
        <el-main>
            <el-row>
                <el-col :span="8" v-for="p in publikasi" :key="`pub-${p}`">
                    <el-card :body-style="{ padding: '0px' }">
                        <el-image
                            style="width: 240px;margin-left: 1em; margin-right: 1em; height: auto"
                            :src="p.content"
                            class="image"
                        />
                        <div>
                            <h3>{{p.title}}</h3>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-main>
    </el-container>
</template>

<script>
    import HeaderNav from "../components/HeaderNav.vue"
    export default {
        components:{
            'header-nav': HeaderNav
        },
        data(){
            return {
                publikasi:[{
                    title: 'Gubernur Olly Lantik Dewan Pengurus P2TM Periode 2021-2026',
                    content: 'https://sulutprov.go.id/l-content/uploads/berita/11042022/P2TM/20220411_205209.jpg'
                },{
                    title: 'Gubernur Sulawesi Utara Ajak Putra/Putri Sulut Ikut Mendaftar di Sekolah Kedinasan',
                    content: 'https://sulutprov.go.id/l-content/uploads/berita/11042022/WhatsApp_Image_2022-04-11_at_17-52-25.jpeg'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>