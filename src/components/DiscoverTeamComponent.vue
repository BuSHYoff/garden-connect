<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import baptisteImg from '@/assets/baptiste.png'
import leoImg from '@/assets/leo.jpeg'
import gaetanImg from '@/assets/gaetan.jpeg'
import matthieuImg from '@/assets/matthieu.jpeg'
import benjaminImg from '@/assets/benjamin.jpeg'
import paulImg from '@/assets/paul.jpeg'
import mohamedImg from '@/assets/mohamed.jpeg'
import denysImg from '@/assets/denys.png'

const teamMembers = ref([
  {
    name: 'Baptiste Salaud',
    role: 'Développeur Mobile / Web',
    quote: '« Une serre connectée qui répond aux enjeux technologiques actuels est un grand atout pour le maraîchage. »',
    image: baptisteImg,
  },
  {
    name: 'Mohamed Azdoud',
    role: 'Développeur Mobile / Web',
    quote: '« Des outils connectés pour faciliter le travail des maraîchers »',
    image: mohamedImg,
  },
  {
    name: 'Léo Verger',
    role: 'Développeur Backend',
    quote: '« On fait gagner du temps aux agris, et ça, c\'est cool ! »',
    image: leoImg,
  },
  {
    name: 'Denys Navarro',
    role: 'Ingénieur IoT',
    quote: '« Bio + Techno = L\'agriculture de demain »',
    image: denysImg,
  },
  {
    name: 'Benjamin Couet',
    role: 'Designer UI/UX',
    quote: '« Une visibilité claire pour une gestion simplifié »',
    image: benjaminImg,
  },
  {
    name: 'Paul Favreau',
    role: 'Ingénieur IoT',
    quote: '« Une solution accessible et ouvert à tous pour aider les agriculteurs au quotidien »',
    image: paulImg,
  },
  {
    name: 'Matthieu Deroir',
    role: 'Ingénieur IoT',
    quote: '« Dans un contexte aussi instable, l\'enjeu de la souveraineté alimentaire est primordial. »',
    image: matthieuImg,
  },
  {
    name: 'Gaëtean Pecqueux',
    role: 'Cheffe de projet',
    quote: '« Simplifier la gestion des cultures pour une agriculture plus durable et accessible. »',
    image: gaetanImg,
  },
])

const currentIndex = ref(0)
const slideDirection = ref('right')
let intervalId = null

const startTimer = () => {
  intervalId = setInterval(() => {
    slideDirection.value = 'right'
    currentIndex.value = (currentIndex.value + 1) % teamMembers.value.length
  }, 5000)
}

const resetTimer = () => {
  clearInterval(intervalId)
  startTimer()
}

const prevMember = () => {
  slideDirection.value = 'left'
  currentIndex.value = (currentIndex.value - 1 + teamMembers.value.length) % teamMembers.value.length
  resetTimer()
}

const nextMember = () => {
  slideDirection.value = 'right'
  currentIndex.value = (currentIndex.value + 1) % teamMembers.value.length
  resetTimer()
}

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
    <div class="discover-team">
        <div class="discover-team-title">Rencontre l'équipe !</div>

        <div class="team-slider">
            <div class="arrow left-arrow" @click="prevMember">&#8592;</div>

            <transition :name="`slide-${slideDirection}`">
            <div class="team-member" :key="teamMembers[currentIndex].name">
                <img class="discover-team-image" :src="teamMembers[currentIndex].image" />
                <div class="discover-team-text">
                <div class="discover-team-description">{{ teamMembers[currentIndex].quote }}</div>
                <div>{{ teamMembers[currentIndex].name }}</div>
                <div>{{ teamMembers[currentIndex].role }}</div>
                </div>
            </div>
            </transition>

            <div class="arrow right-arrow" @click="nextMember">&#8594;</div>
        </div>
    </div>
</template>

<style scoped>

.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
  position: absolute;
  width: 100%;
}

.slide-right-enter-from {
  opacity: 0;
  transform: translateX(100%);
}
.slide-right-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-right-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

/* Animations vers la gauche (flèche gauche) */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
  position: absolute;
  width: 100%;
}

.slide-left-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-left-enter-to {
  opacity: 1;
  transform: translateX(0);
}
.slide-left-leave-from {
  opacity: 1;
  transform: translateX(0);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.team-slider {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  min-height: 250px;
}

.team-member {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  width: 85%;
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 3rem;
  color: #3E603B;
  cursor: pointer;
  padding: 0 10px;
  z-index: 10;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.left-arrow {
  left: 0px;
}

.right-arrow {
  right: 0px;
}

.discover-team {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 350px;
  position: relative;
}

.discover-team-description {
  font-size: 1.3rem;
  color: #3E603B;
  text-align: center;
  padding-bottom: 10px;
}

.discover-team-title {
  font-size: 5rem;
  color: #3E603B;
  font-weight: 500;
  z-index: 1;
}

.discover-team-image {
  object-fit: contain;
  width: 200px;
  height: 200px;
}

.discover-team-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.discover-team-text {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
</style>