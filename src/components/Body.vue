<script setup lang="ts">
import Footer from '../components/Footer.vue';
</script>

<template>
    <div class="body">
        <div class="clothes">
            <slot></slot>
        </div>
        <div class="toes">
            <slot name="toes"><Footer></Footer></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../assets/global.scss" as glob;

.body {
    height: 100%;
    display:flex;
    flex-direction: column;
}
.clothes {
    flex-grow: 1;
}
.toes {
    flex-shrink: 0;
}
</style>