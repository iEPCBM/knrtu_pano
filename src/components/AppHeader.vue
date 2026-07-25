<template>
  <header class="header">
    <nav class="menu">
      <a href="#">Главная</a>
      <a href="#catalog">Каталог экскурсий</a>
      <a href="#team">Команда</a>
    </nav>

    <!--<button class="login-btn">
      Подать заявку
    </button>-->
  </header>
</template>

<style scoped>
.header {
  height: 80px;
  padding: 0 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid #ddd;
  background: white;

  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  box-sizing: border-box;
  
  background: rgba(255, 255, 255, 0.43);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
}

.menu {
  display: flex;
  gap: 40px;
}

.menu a {
  text-decoration: none;
  color: #222;
  font-weight: 500;
}

.login-btn {
  border: none;
  background: #d54d4d;
  color: white;

  padding: 12px 24px;
  border-radius: 30px;
  cursor: pointer;
}
</style>