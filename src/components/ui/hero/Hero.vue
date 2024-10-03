<template>
  <div class="hero min-h-screen items-start">
  <div class="hero-content flex-col lg:flex-row-reverse justify-items-start items-start mt-32">
    <div>
      <h2 class="text-white text-center">Cernobai Alexei Portfolio</h2>
      <h1 class="text-white text-center text-5xl font-bold">I'm a Senior JavaScript Front-End Developer</h1>
      <p class="text-white text-center py-6">
        I specialize in Vue.js, Three.js, and Babylon.js to create dynamic user interfaces and immersive 3D web experiences. My focus is on delivering high-performance, visually stunning applications that drive user engagement and bring real value to clients.
      </p>
      <button class="btn btn-primary" @click="startJourney">Explore My Journey</button>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
const emit = defineEmits(['startJourney'])

const startJourney = () => {
  emit('startJourney')
}
</script>