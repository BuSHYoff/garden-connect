<script setup>
defineProps({
  title: String,
  description: String,
  imageSrc: String,
  link: String,
  reverse: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="feature" :class="{ 'reverse': reverse }">
    <img class="feature-image" :src="imageSrc" />
    <div class="feature-gap"></div>
    <div class="feature-text">
      <div>
        <div class="feature-text-title">{{ title }}</div>
        <div>{{ description }}</div>
      </div>
      <RouterLink :to="link" class="feature-see-more">En savoir plus &#8594;</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.feature {
  display: flex;
  flex-direction: row;
  padding-bottom: 10%;
}

.feature.reverse {
  flex-direction: row-reverse;
}

.feature-gap {
  padding: 20px;
}

.feature-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.feature-see-more {
  font-weight: bold;
}

.feature-text-title {
  font-size: 2rem;
  color: #3E603B;
  font-weight: 500;
  padding-bottom: 10px;
  line-height: 2rem;
}

.feature-image {
  width: 50vw;
  height: 33vh;
}
</style>
