<script setup>
import { useRoute, useRouter , RouterView } from "vue-router";
import Heading from "./components/Heading.vue";
import {computed, ref, onMounted, onUnmounted } from 'vue'
</script>

<template>
  <header>
    <Heading />
  </header>

  <main class="main">
    <RouterView />
  </main>
</template>

<style scoped>
.main {
	height: calc(100% - (75px));
	/* border: 1px solid black; */
	/* overflow-y: scroll; */
}
</style>
