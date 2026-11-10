<script setup lang="ts">
const baseUrl = import.meta.env.BASE_URL
</script>

<template>
    <div class = "banner">
        <img class = "pride-flag" :src="`${baseUrl}pride-flag.svg`" alt="Pride Flag" />
        <p>Much love to all my queer friends !!</p>
    </div>
</template>