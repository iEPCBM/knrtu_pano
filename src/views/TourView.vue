<template>

<div class="tour-page">

   <AppHeader />
    <MarzipanoViewer
        :tour-id="id"
    />

    <AppFooter />
</div>

</template>

<script setup>
import MarzipanoViewer from '@/components/MarzipanoViewer.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
const props = defineProps({
    id: String
})
</script>

<style scoped>

.tour-page{
    width:100vw;
    height:100vh;
}

</style>