<template>
    <li class="deposit-station--list__item">
        <div class="deposit-station--list__item-id" v-if="item.id"><strong>Id:</strong> {{ item.id }}</div>
        <div class="deposit-station--list__item-label" v-if="item.label"><strong>Label:</strong> {{ item.label }}</div>
        <div class="deposit-station--list__item-group" v-if="item.group"><strong>Group:</strong> {{ item.group }}</div>
        <div class="deposit-station--list__item-status" v-if="item.status"><strong>Status:</strong> {{ item.status }}</div>
        <div class="deposit-station--list__item-items" v-if="item.items"><strong>Count:</strong> {{ item.items.length }}</div>
    </li>
</template>

<script>
    import _ from 'lodash';

    export default {
        props: {
            item: Object
        }
    };
</script>

<style>
    .deposit-station--list__item{
        display: block;
        margin: 20px 0;
    }
</style>