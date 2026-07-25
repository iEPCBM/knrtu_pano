<template>
  <section class="hero">

    <video
      autoplay
      muted
      loop
      playsinline
      
      class="video-bg"
    >
      <source src="/videos/video.webm" type="video/webm">
    </video>

    <div class="overlay"></div>

    <div class="content">
      <h1>КНИТУ</h1>
      <h2>Виртуальные экскурсии</h2>

      <a href="#catalog" class="scroll-btn">
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>

  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.video-bg {
  position: absolute;
  inset: 0;

  width: 100%;
  height: 100%;

  object-fit: cover;
}

.overlay {
  position: absolute;
  inset: 0;

  background: rgba(0,0,0,.2);
}

.content {
  position: relative;
  top: 80px;
  z-index: 2;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  text-align: center;

  mix-blend-mode: difference;
}

h1 {
  font-size: 72px;
  margin: 0 0 1rem;
}

h2 {
  font-size: 42px;
  font-weight: 300;
}

.scroll-btn {
  margin-top: 40px;

  font-size: 40px;
  text-decoration: none;
  color: white;

  animation: bounce 1.5s infinite;
}

@keyframes bounce {
  50% {
    transform: translateY(10px);
  }
}
</style>