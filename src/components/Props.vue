<template>
  <div>
    <el-input v-model="password"></el-input>
    <div v-if="error">{{ error }}</div>
    <div v-if="show">{{ greeting }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
const props = withDefaults(
  defineProps<{
    minLength?: number;
    maxLength?: number;
    show?: boolean;
  }>(),
  {
    minLength: 10,
    maxLength: 20,
    show: false,
  }
);
const password = ref("");
const greeting = ref("Hello, World!");
const error = computed(() => {
  if (password.value.length < props.minLength) {
    return `Password must be at least ${props.minLength} characters long`;
  }
  if (password.value.length > props.maxLength) {
    return `Password must be at most ${props.maxLength} characters long`;
  }
  return;
});
</script>

<style scoped>
/* Add your styles here */
</style>
