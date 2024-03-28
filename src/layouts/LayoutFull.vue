<template>
  <router-view v-slot="{ Component }">
    <keep-alive/>
      <component :is="Component"/>
  </router-view>
</template>
<script setup>
</script>
