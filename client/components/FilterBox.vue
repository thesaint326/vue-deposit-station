<template>
    <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="">
            <el-input :value="filterText" @input="updateFilter" placeholder="Search ..."></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="resetFilter">Clear</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        computed: {
            filterText() {
                return this.$store.state.filterText
            }
        },
        methods: {
            updateFilter(value) {
                this.$store.commit('updateFilter', value)
            },
            resetFilter(e) {
                this.$store.commit('updateFilter', '')
            }
        }
    }
</script>
