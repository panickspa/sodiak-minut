<template>
    <el-scrollbar>
        <h2>Tambah Survei</h2>
        <el-form :model="form" label-width="120px">
            <el-form-item label="Judul Survei">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Penyelengara">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="Metode">
                <el-select v-model="form.metode" placeholder="Pilih metode pengumpulan data">
                    <el-option label="Kompilasi Produk" value="Kompilasi Produk" />
                    <el-option label="Survei" value="Survei" />
                    <el-option label="Pencacahan Lengkap" value="Pencacahan Lengkap" />
                </el-select>
            </el-form-item>
            <el-form-item label="Jadwal Kegiatan">
                <el-col :span="11">
                    <el-date-picker
                    v-model="form.jadwalkeg1"
                    type="date"
                    placeholder="Mulai Kegiatan"
                    style="width: 100%"
                    />
                </el-col>
                <el-col :span="2" align="center"  class="text-center">
                    sampai
                </el-col>
                <el-col :span="11">
                    <el-date-picker
                    v-model="form.jadwalkeg2"
                    placeholder="Akhir Kegiatan"
                    style="width: 100%"
                    />
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
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
        data(){
            return{
                form:{
                    judul: '',
                    penyelengara: '',
                    metode: '',
                    jadwalkeg1: '',
                    jadwalkeg2: '',
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>