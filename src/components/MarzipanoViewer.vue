<template>

<div
    ref="viewer"
    class="viewer"
></div>

</template>

<script setup>
import { ref, onMounted } from 'vue'
import Marzipano from 'marzipano'

const props = defineProps({
    tourId: String
})

const viewer = ref()

onMounted(async () => {

    const data = await import(
        `/public/tours/${props.tourId}/data.js`
    )

    /*
        Здесь выполняется инициализация
        Marzipano Viewer.
    */

})
</script>

<style scoped>

.viewer{
    width:100%;
    height:100%;
}

</style>