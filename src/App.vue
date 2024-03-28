<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>

  <Toast />
</template>

<script>
import { onMounted, defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handleLoad = () => {
      const spinner = document.getElementById('spinner');

      spinner?.classList.add('-hide');
    };

    // hooks
    onMounted(() => {
      window.addEventListener('load', handleLoad);
    });
  },
});
</script>
