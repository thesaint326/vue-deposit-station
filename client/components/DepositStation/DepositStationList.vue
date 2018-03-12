<template>
    <div class="deposit-station--list">
        <filter-box v-if="$store.state.showFilterBox"></filter-box>
        <ul>
            <deposit-station-item v-for="item in items" :key="item.id" :item="item"></deposit-station-item>
        </ul>
    </div>
</template>

<script>
    import DepositStationItem from './DepositStationItem.vue';
    import FilterBox from './../FilterBox.vue';

    export default {
        components: {
            DepositStationItem, FilterBox
        },
        computed: {
            items() {
                return this.$store.getters.collections
            }
        },
        methods : {
            updateFilter (e) {
                this.$store.commit('updateFilter', e.target.value)
            }
        }
    }
</script>


<style>
    .deposit-station--list > ul{
        margin: 0;
        padding: 0;
    }
</style>
