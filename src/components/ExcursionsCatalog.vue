<template>
  <section
    id="catalog"
    class="catalog"
  >
    <h2>Каталог экскурсий</h2>

    <div class="grid">
      <ExcursionCard
        v-for="item in excursions"
        :key="item.id"
        :excursion="item"
      />
    </div>
  </section>
</template>

<script setup>
import ExcursionCard from './ExcursionCard.vue'
import excursions from '../data/excursions'
</script>

<style scoped>
.catalog {
  padding: 100px 80px;
}

.catalog h2 {
  margin-bottom: 50px;
  text-align: center;
  
    font-size: 2.5rem;
}

.grid {
  display: grid;

  grid-template-columns:
    repeat(auto-fit, minmax(320px, 1fr));

  gap: 30px;
}


@media screen and (max-width: 500px) {
  
  .catalog h2 {
    margin-bottom: 50px;
    text-align: left;
    font-size: 2rem;
  }
  .catalog {
    padding: 50px 10px;
  }
}
</style>