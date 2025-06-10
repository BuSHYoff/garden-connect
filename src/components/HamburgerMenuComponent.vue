<template>
  <div>
    <div class="hamburger-button" @click="toggleMenu">
      <span :class="{ open: isOpen }">&#9776;</span>
    </div>

    <div class="menu-wrapper" :class="{ open: isOpen }">
      <div class="menu">
        <a href="/">Accueil</a>
        <div class="divider"></div>
        <a href="/tracking-precision">Suivi précis et personnalisable</a>
        <div class="divider"></div>
        <a href="/modular-solution">Solution modulaire</a>
        <div class="divider"></div>
        <a href="/financial-accessibility">Accessibilité financière</a>
        <div class="divider"></div>
        <a href="/opensource-approach">Approche open source</a>
        <div class="divider"></div>
        <a href="/accessibility-tools">Outils accessibles</a>
        <div class="divider"></div>
        <a href="/scalability">Évolutivité et possibilités futures</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isOpen = ref(false)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  const body = document.body
  if (isOpen.value) {
    body.classList.add('menu-open')
  } else {
    body.classList.remove('menu-open')
  }
}
</script>

<style scoped>
.hamburger-button {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 30px;
  z-index: 1001;
  cursor: pointer;
  background: none;
  border: none;
  color: black;
  transition: color 0.3s ease;
}

.hamburger-button span {
  display: inline-block;
  transition: transform 0.3s ease;
}

.hamburger-button span.open {
  color: white;
  transform: rotate(90deg);
}

.menu-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 100vh;
  overflow: hidden;
  background-color: transparent;
  transition: width 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;
}

.menu-wrapper.open {
  width: 300px;
  background-color: #3E603B;
  box-shadow: -4px 0 10px rgba(0, 0, 0, 0.2);
}

.menu {
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.menu a {
  text-decoration: none;
  color: #F8F0ED;
  font-weight: 500;
}

.divider {
  height: 1px;
  background-color: rgba(248, 240, 237, 0.3);
  margin: 0.5rem 0;
}
</style>

<style>
body.menu-open main {
  transition: transform 0.3s ease;
}
</style>