<script setup lang="ts">
import { Title } from '../services/titles.api';
defineProps<{ title: Title }>();
</script>

<template>
    <div class="title">
        <div class="poster-wrapper">
            <!-- <img :src="`http://localhost:8000/public/images/${title.normalized_name}/poster.png`" /> -->
        </div>
        <p>{{title.name}}</p>
        <p>{{title.release_year}}</p>
    </div>
</template>