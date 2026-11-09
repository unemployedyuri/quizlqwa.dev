<script setup lang="ts">
import Dock from './components/Dock.vue'
import Body from './components/Body.vue'
import Banner from './components/Banner.vue'
</script>

<template>
  <div class = "app">
    <Banner />

    <div class = "body">
      <Body />
    </div>
    
    <Dock />
  </div>
</template>
