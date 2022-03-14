<script setup lang="ts">
    defineProps<{ icon: string, text: string }>();
</script>

<template>
    <div class="sidebar-icon group">
        <!-- <inline-svg :src=icn /> -->
        <svg class="filter-green" v-html="icon" v-inline />
        <span class="sidebar-tooltip group-hover:scale-100">
            {{ text }}
        </span>
    </div>
</template>

<style>
    .filter-green{
        filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);
    }
    svg {
        fill: #ffffff!important;
        stroke: #ffffff!important;
    }
</style>