<template>
  <div class="hero min-h222-screen items-start">
  <div class="hero-content flex-col lg:flex-row-reverse justify-items-start items-start mt-32">
    <div class="flex flex-wrap justify-center">
      <h2 class="text-white  w-fulltext-center">Cernobai Alexei Portfolio</h2>
      <h1 class="text-white w-full text-center text-5xl font-bold">I'm a Senior JavaScript Front-End Developer</h1>
      <p class="text-white w-full text-center py-6">
        I specialize in <kbd class="kbd kbd-md font-bold">Vue.js</kbd>, <kbd class="kbd kbd-md font-bold">Three.js</kbd>, and <kbd class="kbd kbd-md font-bold">Babylon.js</kbd> to create dynamic user interfaces and immersive 3D web experiences. <br> My focus is on delivering high-performance, visually stunning applications that drive user engagement and bring real value to clients.
      </p>
      <span class="animate-border">
        <button class="btn btn-primary hidden sm:block" @click="startJourney">Explore My Journey</button>
      </span>
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