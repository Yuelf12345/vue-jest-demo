<template>
  <div class="hello-world">
    <h1>This is a simple Vue.js component.</h1>
    <h4>{{ message }}</h4>
    <button @click="increment">Count: {{ count }}</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const message = ref<string>("Hello, World!");
const count = ref<number>(0);
const increment = () => {
  count.value++;
};
</script>

<style></style>
