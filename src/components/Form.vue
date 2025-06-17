<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" v-model="formData.email" placeholder="Email" />
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
}>();
const handleSubmit = () => {
  emit("submit", formData.value);
};
</script>

<style scoped>
/* Add your styles here */
</style>
