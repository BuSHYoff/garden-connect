<template>
  <div>
    <div class="hamburger-button" @click="toggleMenu">
      <span :class="{ open: isOpen }">&#9776;</span>
    </div>
     
    <div class="menu-wrapper" :class="{ open: isOpen }">
      <div class="menu">
        <RouterLink to="/" @click="closeMenu">Accueil</RouterLink>
        <div class="divider"></div>
        <RouterLink to="/tracking-precision" @click="closeMenu">Suivi précis et personnalisable</RouterLink>
        <div class="divider"></div>
        <RouterLink to="/modular-solution" @click="closeMenu">Solution modulaire</RouterLink>
        <div class="divider"></div>
        <RouterLink to="/financial-accessibility" @click="closeMenu">Accessibilité financière</RouterLink>
        <div class="divider"></div>
        <RouterLink to="/opensource-approach" @click="closeMenu">Approche open source</RouterLink>
        <div class="divider"></div>
        <RouterLink to="/accessibility-tools" @click="closeMenu">Outils accessibles</RouterLink>
        <div class="divider"></div>
        <RouterLink to="/scalability" @click="closeMenu">Évolutivité et possibilités futures</RouterLink>
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

const closeMenu = () => {
  isOpen.value = false
  const body = document.body
  body.classList.remove('menu-open')
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
  transition: color 0.2s ease;
}

.menu a:hover {
  color: #C7E8CA;
}

.menu a.router-link-active {
  color: #C7E8CA;
  font-weight: 600;
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