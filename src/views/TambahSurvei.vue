<template>
    <el-scrollbar>
        <h2>Tambah Survei</h2>
        <el-form :model="form" label-width="120px">
            <el-row>
                <el-col :span="16">
                    <el-form-item label="Judul Survei">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
                <el-col :span="8">
                    <el-form-item label="Tahun">
                        <el-input v-model="form.name" />
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="Penyelengara">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="Metode">
                        <el-select v-model="form.metode" placeholder="Pilih metode pengumpulan data">
                            <el-option v-for="opt in $store.state.metodeKegiatan" :label="opt.label" :value="opt.value"  v-bind:key="`metode-${opt.label}-${opt.value}`" />
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="Sektor Kegiatan">
                        <el-select v-model="form.sektor" placeholder="Pilih sektor kegiatan">
                            <el-option v-for="opt in $store.state.sektorKegiatan" :label="opt.label" :value="opt.value"  v-bind:key="`sektor-${opt.label}-${opt.value}`" />
                            <!-- <el-option label="Kompilasi Produk" value="Kompilasi Produk" />
                            <el-option label="Survei" value="Survei" />
                            <el-option label="Pencacahan Lengkap" value="Pencacahan Lengkap" /> -->
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-form-item label="Rekomendasi Statistik">
                <el-col :span="6">
                    <el-row>
                        Apakah mendapatkan rekomendasi statistik?
                    </el-row>
                    <el-radio-group v-model="form.rekomendasi" size="small">
                        <el-radio-button label="Ya" />
                        <el-radio-button label="Tidak" />
                    </el-radio-group>
                </el-col>
                <el-col :span="16">
                    <el-row :span="4">
                        &nbsp;Jika "Ya" &nbsp; , Identitas Rekomendasi :
                    </el-row>
                    <el-input placeholder='Identitas Rekomendasi ' v-model="form.idRekomendasi"></el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onCreateMeta">Create</el-button>
            </el-form-item>
        </el-form>
    </el-scrollbar>
</template>

<script>
    // import AddTabel from"../components/AddTabel.vue"
    export default {
        name: 'Tambah Tabel',
        components:{
            // 'add-table': AddTabel
        },
        methods:{
            onCreateMeta(){
                
            }
        },
        data(){
            return{
                form:{
                    judul: '',
                    penyelengara: '',
                    tahun: 2022,
                    metode: 1,
                    sektor: 1,
                    idRekomendasi: '',
                    reokomendasi: '',
                },
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
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>