<template>
    <div class="aaa">
        {{ a }}
    </div>
</template>

<script setup>
import { ref } from 'vue';
const a = ref('welcome')
</script>

<style lang="less">
.aaa {
    color: red;
}
</style>

