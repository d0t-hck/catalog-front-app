<script setup lang="ts">
// defineProps<{ id: number }>();
</script>

<template>
    <div class="content-container">
        <div class="content-list">
            <Title v-for="title in titles" :title="title"/>
        </div>
    </div>
</template>

<script lang="ts">
import Title from './Title.vue';
import { Title as model } from '../services/titles.api';
import { getTitles } from '../services/titles.api';

export default {
    data() {
        return {
            titles: Array<model>(),
        };
    },
    async created() {
        const [error, data] = await getTitles();
        if (error) console.error(error);
        else this.titles = data;
    }
}
</script>