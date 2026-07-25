<template>
  <div
    class="card"
    @click="openTour"
  >
    <img
      :src="excursion.image"
      :alt="excursion.title"
    />
    <div class="mz-wrapper" :id="'mz-wrapper-'+excursion.id"></div>

    <div class="body">
      <h3>{{ excursion.title }}</h3>

      <button>
        <span>Открыть</span> 
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9 6L15 12L9 18"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  excursion: {
    type: Object,
    required: true
  }
});

const router = useRouter()

function openTour() {
    /*router.push({
        name: 'tour',
        params: {
            id: props.excursion.id
        }
    })*/
   window.location.href = `/tours/${props.excursion.id}/index.html`
}
</script>

<style scoped>
.card {
  overflow: hidden;
  border-radius: 18px;
  background: white;

  box-shadow: 0 10px 30px rgba(0,0,0,.1);

  cursor: pointer;
  transition: .3s;
}

.card:hover {
  transform: translateY(-8px);
}

.card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.body {
  padding: 20px;
}

.body h3 {
  margin-bottom: 15px;
}

button {
  border: none;
  background: #004aad;
  color: white;

  padding: 10px 20px;
  border-radius: 8px;

  cursor: pointer;
}
</style>