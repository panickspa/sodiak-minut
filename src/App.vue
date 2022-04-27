<template>
  <router-view v-if="landing"></router-view>
 <el-container direction="horizontal" class="app-container" v-else>
    <el-aside width="240px">
      <el-menu
        :default-active="activeRoute"
        class="el-menu-vertical-demo"
        style="height: 100%;"
        :router="true"
      >
      <el-scrollbar>
        <el-row>
          <el-col style="margin-top: 0;" align="center">
            <el-avatar shape="circle" :size="100" fit="cover" :src="logo" />
            <h1 style="margin: 0%;">SODIAK</h1>
            <h3 style="margin: 0%;">Sistem Informasi Diseminasi dan Metadata Statistik</h3>
          </el-col>
        </el-row>
        <el-menu-item index="home" :route="{name: `Home`}">
          <el-icon><home-filled /></el-icon>
          <span>Home</span>
        </el-menu-item>
        <el-sub-menu index="tabel">
          <template v-slot:title>
            <el-icon><collection /></el-icon>
            <span>Koleksi Tabel</span> 
          </template>
          <el-menu-item index="tabel-daftar" :route="{name: `Daftar Tabel`}">Daftar Tabel</el-menu-item>
          <el-menu-item index="tabel-tambah" :route="{name: `Tambah Tabel`}">Tambah Tabel</el-menu-item>
          <el-menu-item index="tabel-metadata" :route="{name: `Metadata Tabel`}">Metadata Tabel</el-menu-item>         
        </el-sub-menu>
        <el-sub-menu index="survei">
          <template #title>
            <el-icon><list /></el-icon>
            <span>Survei</span>
          </template>
          <el-menu-item index="survei-daftar" :route="{name: `Daftar Survei`}">Daftar Survei</el-menu-item>
          <el-menu-item index="survei-tambah" :route="{name: `Tambah Survei`}">Tambah Survei</el-menu-item>
        </el-sub-menu>
        <!-- <el-menu-item @click="gotoUrl(`https://romantik.bps.go.id`)">
            Rekomendasi Statistik
        </el-menu-item>
        <el-menu-item @click="gotoUrl(`https://skd.bps.go.id/SKD2021/web/entri/responden/selesai`)">
            Survey Kebutuhan Data
        </el-menu-item> -->
        <!-- <el-sub-menu index="4">
          <template #title>
            <el-icon><avatar /></el-icon>
            <span>Akun</span>
          </template>
          <el-menu-item index="edit-akun">Edit Akun</el-menu-item>
          <el-menu-item index="logout">Keluar</el-menu-item>
        </el-sub-menu> -->
      </el-scrollbar>
      </el-menu>
    </el-aside>
    <el-container>
      <!-- <el-header>
      </el-header> -->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import {
  HomeFilled,
  // Avatar,
  Collection,
  List
} from '@element-plus/icons-vue'
export default {
  computed:{
    logo(){
      return require('./assets/logo-2.png')
    },
    landing(){
      return this.$route.name == "Beranda" ? true : this.$route.name == "Data" ? true : this.$route.name == "Publikasi" ? true : this.$route.name == "Tentang" ? true : false
    }
  },
  components: {
    // HelloWorld
    HomeFilled,
    // Avatar,
    Collection,
    List
  },
  methods:{
    handleOpen(key, keyPath){
      console.log(key, keyPath)
    },
    handleClose(key, keyPath){
      console.log(key, keyPath)
    },
    gotoUrl(e){
      window.location.replace(e)
    }
  },
  data(){
    return {
      slotname: 'title',
      activeRoute: 'Home',
      defRoute: 'Home',
    }
  },
  watch:{
    activeRoute(e){
      console.log(e)
      if(isNaN(Number(e))) this.$router.push({path: `/${e}`})
    }
  }
}
</script>
<style>
*{
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}
html, body , #app{
  height: 100%;
}
body{
  margin: 0%;
}
.app-container{
  height: 100%;
}
.el-table .cell {
    word-break: break-word;
}
</style>
