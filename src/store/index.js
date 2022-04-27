import { createStore } from 'vuex'

export default createStore({
  state: {
    tabelDataKabupaten:[
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
  ],
    tabelData:[
        {
            judul: 'Jumlah Penduduk Menurut Jenis Kelamin dan Usia Tahun 2021 Kabupaten Minahasa Utara',
            tahun: '2021',
            sumber: 'Badan Pusat Statistik'
        },
    ],
    surveyData:[
      {
        judul: 'Survei Ekonomi Nasional Tahun 2021',
        penyelengara: 'Badan Pusat Statistik',
        metode: 'Survei',
        jadwalkeg1: '01 Maret 2021',
        jadwalkeg2: '31 Desember 2021',
      }
    ],
    metaDataTable:[
        {
          judul: 'Jumlah Penduduk Menurut Kecamatan di Kabupaten Minahasa Utara, 2021',
          tahun: '2021',
          sumber: 'Badan Pusat Statistik',
          metadata:[
              {
                indikator: 'Jumlah Penduduk',
                konsep: 'Jumlah Penduduk',
                definisi: 'Ukuran absolut dari penduduk, dinyatakan dalam ribuan jiwa atau jutaan jiwa.',
                referensi: 'sirusa.bps.go.id',
                referensiwaktu: '2021',
                satuan: 'juta jiwa'
              }
          ]
        }
    ],
    akun:"BPS Kabupaten Minahasa Utara"
  },
  mutations: {
    deleteTabel(state, payload){
      let nTabel = state.tabelData.filter(e => e.judul != payload.judul && e.sumber != payload.sumber && e.tahun != payload.tahun)
      state.tabelData = nTabel
    },
    deletTabelList(state, payload){
      let nTabel = state.tabelData.filter(e => e.judul != payload.judul && e.sumber != payload.sumber && e.tahun != payload.tahun)
      state.tabelData = nTabel
    },
    addTable(state, payload){
      state.tabelData.push(payload)
    },
    addTableList(state, payload){
      state.tabelData.push(payload)
    },
    gantiAkun(state, payload){
      state.akun(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
