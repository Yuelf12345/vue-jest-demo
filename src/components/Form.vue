<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" v-model="formData.email" placeholder="Email" @blur="handleBlur" />
    <input type="password" v-model="formData.password" placeholder="Password" />
    <button type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const formData = ref({
  email: "",
  password: "",
});

const emit = defineEmits<{
  (e: "submit", data: { email: string; password: string }): void;
  (e: "focus-lost"): void;
}>();
const handleSubmit = () => {
  emit("submit", formData.value);
};

const handleBlur = (event: FocusEvent) => {
  const relatedTarget = event.relatedTarget as Element | null;
  if (relatedTarget?.tagName === "BUTTON") {
    emit("focus-lost");
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
