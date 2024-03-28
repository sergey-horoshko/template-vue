<template>
  <main>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { useMeStore } from '@/stores/me';

export default defineComponent({
  setup() {
    const { getProfile, logOut, user } = useMeStore();

    onMounted(async () => {
      try {
        if (user?.id) {
          await getProfile(1);
        } else {
          await logOut(true);
        }
      } catch (e) {
        await logOut(true);
      }
    });

    return {};
  },

  components: {
    // VSide: defineAsyncComponent(() => import('@/components/blocks/VSide.vue')),
    // VHeader: defineAsyncComponent(() => import('@/components/blocks/VHeader.vue')),
    // VFooter: defineAsyncComponent(() => import('@/components/blocks/VFooter.vue')),
  },
});
</script>

<style lang="scss" scoped>
main {
  padding-left: 214px;
  transition: all 0.3s;
}

@media screen and (width >= 992px) {
  .content {
    min-height: 602px;
  }
}

@media screen and (width <= 992px) {
  main {
    padding-left: 90px;
  }
}

@media screen and (width <= 768px) {
  main {
    padding-left: 0;
  }
}
</style>
