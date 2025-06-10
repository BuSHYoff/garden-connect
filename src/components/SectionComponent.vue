<script setup>
defineProps({
title: {
    type: String,
    required: true,
},
content: {
    type: String,
    required: true,
},
});
</script>

<template>
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
</template>

<style scoped>
.title {
  font-size: 2rem;
  color: #3E603B;
  font-weight: 500;
  padding-bottom: 10px;
  line-height: 2rem;
  text-align: center;
  padding-bottom: 5%;
}

.content {
  text-align: center;
}

</style>