<template>
    <div class="deposit-station--navigation">
        <el-menu class="el-menu-vertical-demo">
            <el-menu-item index="navigator.id" @click="filter(navigator)" v-for='navigator in navigation' :key="navigator.id"
                          :class="{'is-active' : activeTab.id == navigator.id}">
                <i :class="`el-icon-${navigator.name}`"></i>
                <span>{{ navigator.title }}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        computed: {
            navigation() {
                return this.$store.state.navigation;
            },
            activeTab() {
                return this.$store.state.activeTab;
            }
        },
        methods: {
            filter(item) {
                this.$store.dispatch('filter', item);
            }
        }
    };
</script>