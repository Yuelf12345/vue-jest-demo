<template>
  <button @click="getPosts">Get posts</button>
  <ul>
    <li v-for="post in posts" :key="post.id" data-test="post">
      {{ post.title }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";

const posts = ref<{ id: number; title: string }[]>([]);
async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  posts.value = await response.json();
}
</script>
