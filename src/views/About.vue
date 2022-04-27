<template>
    <div class="common-layout">
        <el-container>
            <header-nav></header-nav>
            <el-main>

            </el-main>
        </el-container>
    </div>
</template>

<script>
    import HeaderNav from "../components/HeaderNav.vue"
    export default {
        components:{
            'header-nav': HeaderNav
        }
    }
</script>

<style lang="scss" scoped>

</style>