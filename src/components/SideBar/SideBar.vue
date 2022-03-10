<script setup lang="ts">
import SideBarIcon from './SideBarIcon.vue';
import home from '../../assets/home.svg?raw';
import add from '../../assets/add.svg?raw';
</script>

<template>
    <div class="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
        <SideBarIcon :icon="home" text="Home" />
        <SideBarIcon :icon="add" text="Add" />
    </div>
</template>
