<template>
    <el-header class="header-nav">
        <el-menu
            mode="horizontal"
            :router="true"
        >
            <el-image style="width: 120px; margin-left: 1em; margin-right: 1em; height: auto" :src="logoImg" fit="contain" />
            <!-- <span style="margin-left: 1em; margin-right: 1em; font-size: var(--el-font-size-extra-large); align-self: center;">Portal Satu Data Kabupaten Minahasa Utara</span> -->
            <el-menu-item index="1" :route="{name: `Beranda`}">Beranda</el-menu-item>
            <el-menu-item index="2" :route="{name: `Data`}">Data</el-menu-item>
            <el-menu-item index="3" :route="{name: `Publikasi`}">Publikasi</el-menu-item>
            <!-- <el-menu-item index="4" :route="{name: `Tentang`}">Tentang</el-menu-item> -->
        </el-menu>
    </el-header>
</template>

<script>
    export default {
        computed:{
            logoImg(){
                return require("../assets/logo-2.png")
            }
        },
        data(){
            return{
            }
        }
    }
</script>

<style scoped>
.header-nav{
    padding: 0%;
}
</style>