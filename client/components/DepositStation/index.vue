<template>
    <el-container>
        <el-main>
            <deposit-station-list></deposit-station-list>
        </el-main>
        <el-aside>
            <deposit-station-navigation></deposit-station-navigation>
        </el-aside>
    </el-container>
</template>

<script>
    import DepositStationList from './DepositStationList.vue';
    import DepositStationNavigation from './DepositStationNavigation.vue';

    export default {
        components: {
            DepositStationList, DepositStationNavigation
        },
        created() {
            this.$store.dispatch('initActiveTab');
        }
    }
</script>