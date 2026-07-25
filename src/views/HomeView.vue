<template>
  <div class="page">
    <AppHeader />

    <HeroSection />

    <ExcursionsCatalog />

    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import HeroSection from '@/components/HeroSection.vue'
import ExcursionsCatalog from '@/components/ExcursionsCatalog.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
.page {
  background: #fff;
}
</style>