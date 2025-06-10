<template>
    <section class="header">
        <img class="image" :src="imageSrc" />
        <div class="titles">
            <img v-if="logoSrc" class="logo" :src="logoSrc" />
            <div class="title">{{ title }}</div>
            <div class="subtitle">{{ subtitle }}</div>
        </div>
    </section>
</template>

<script setup>

defineProps({
logoSrc: {
    type: String,
},
imageSrc: {
    type: String,
    required: true,
},
title: {
    type: String,
    required: true,
},
subtitle: {
    type: String,
    required: true,
},
});
</script>

<style scoped>
.header {
  display: flex;
}

.titles {
  width: 50vw;
  display: flex;
  justify-content: center;
  margin: 0 5%;
  flex-direction: column;
  position: relative;
}

.title {
  font-size: 7.7rem;
  font-weight: 500;
  color: #3E603B;
  line-height: 7rem;
  z-index: 1;
  overflow-wrap: break-word;
}

.subtitle {
  font-size: 1.5rem;
  color: #5c5c5c;
  z-index: 1;
  padding-right: 20%;
  padding-top: 2%;
}

.logo {
  position: absolute;
  z-index: 0;
  width: 200px;
  height: 200px;
  transform: rotate(20deg);
  right: 32%;
  top: 29%;
}

.image {
  width: 50vw;
  height: 100vh;
  object-fit: cover;
}
</style>
