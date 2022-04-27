<template>
  <div class="home">
    <h1>Selamat Datang Admin Badan Pusat Statistik</h1>
    <el-container>
      <el-main>
        <h2>Daftar Tabel Kabupaten Minahasa Utara</h2>
        <el-table :data="$store.state.tabelData" fit>
            <el-table-column wrap prop="judul" label="Judul Tabel" />
            <el-table-column prop="sumber" label="Sumber" />
            <el-table-column fixed="right" label="Aksi" width="60">
                <template #default>
                    <el-row>
                        <el-col>
                            <el-button type="text" size="small" @click="view">Lihat</el-button>
                        </el-col>
                    </el-row>
                </template>
            </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      tableData:[
          {
              judul: 'Jumlah Penduduk Menurut Jenis Kelamin dan Usia Tahun 2021 Kabupaten Minahasa Utara',
              tahun: '2021',
              sumber: 'Badan Pusat Statistik'
          },
          {
              judul: 'Produksi Perkebunan Menurut Komoditas Tahun 2021 Kabupaten Minahasa Utara',
              tahun: '2020',
              sumber: 'Dinas Pertanian'
          }
      ]
    }
  }
}
</script>
