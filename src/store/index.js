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
    akun:"BPS Kabupaten Minahasa Utara",
    sektorKegiatan:[
        {
            label: 'Pertanian dan Perikanan',
            value: 1
        },
        {
            label: 'Demografi dan Kependudukan',
            value: 2
        },
        {
            label: 'Pembangunan',
            value: 3
        },
        {
            label: 'Proyeksi Ekonomi',
            value: 4
        },
        {
            label: 'Pendidikan dan Pelatihan',
            value: 5
        },
        {
            label: 'Lingkungan',
            value: 6
        },
        {
            label: 'Keuangan',
            value: 7
        },
        {
            label: 'Globalisasi',
            value: 8
        },
        {
            label: 'Kesehatan',
            value: 9
        },
        {
            label: 'Industri dan Jasa',
            value: 10
        },
        {
            label: 'Teknologi Informasi dan Komunikasi',
            value: 11
        },
        {
            label: 'Perdagangan Internasional dan Neraca Perdagangan',
            value: 12
        },
        {
            label: 'Ketenagakerjaan',
            value: 13
        },
        {
            label: 'Neraca Nasional',
            value: 14
        },
        {
            label: 'Indikator Ekonomi Bulanan',
            value: 15
        },
        {
            label: 'Produktivitas',
            value: 16
        },
        {
            label: 'Harga dan Paritas Daya Beli',
            value: 17
        },
        {
            label: 'Sektor Publik, Perpajakan, dan Regulasi Pasar',
            value: 18
        },
        {
            label: 'Perwilayahan dan Perkotaan',
            value: 19
        },
        {
            label: 'Ilmu Pengetahuan dan Hak Paten',
            value: 20
        },
        {
            label: 'Perlindungan Sosial dan Kesejahteraan',
            value: 21
        },
        {
            label: 'Transportasi',
            value: 22
        },
    ],
    metodeKegiatan:[
        {
            label: 'Pencacahan Lengkap',
            value: 1
        },
        {
            label: 'Survei',
            value: 2
        },
        {
            label: 'Kompilasi Produk Administrasi',
            value: 3
        },
        {
            label: 'Cara lain sesuai dengan perkembangan TI',
            value: 4
        }
    ]
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
