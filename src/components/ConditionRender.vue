<template>
  <div>
    <a id="profile" href="/profile">My Profile</a>
    <a id="admin" href="/admin" v-if="admin">Admin Panel</a>
    <ul v-show="shouldShowDropdown" id="user-dropdown">
      <!-- dropdown content -->
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

const admin = ref(false);
const shouldShowDropdown = ref(false);

defineExpose({
  admin
})
</script>
