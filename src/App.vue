<template>
  <component :is="layout+'-layout'" v-if="layout" />
</template>
<script>
import { useRoute } from 'vue-router';
import MainLayout from './layout/MainLayout'
import AuthLayout from './layout/AuthLayout'
import { computed } from 'vue';
export default {
  setup() {
    const route = useRoute()
    return {
      layout: computed(() => route.meta.layout)
    }
  },
  components: {MainLayout, AuthLayout}
}
</script>
<style>
</style>