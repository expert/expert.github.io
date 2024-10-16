<template>
  <div class="hero min-h222-screen items-start">
  <div class="hero-content flex-col lg:flex-row-reverse justify-items-start items-start md:mt-32">
    <div class="flex flex-wrap justify-center">
      <h2 class="text-white  w-fulltext-center">Cernobai Alexei Portfolio</h2>
      <h1 class="text-white w-full text-center text-2xl md:text-5xl font-bold">I'm a Senior JavaScript Front-End Developer</h1>
      <p class="text-white w-full text-center py-6" v-html="wrappedSummary"></p>
      <span class="animate-border">
        <button class="btn btn-primary hidden sm:block" @click="startJourney">Explore My Journey</button>
        <RouterLink class="btn btn-primary sm:hidden " to="resume">Show Resume</RouterLink>
      </span>
    </div>
  </div>
</div>
</template>
<script setup lang="ts">
import { DATA } from '@/data/resume.ts'
import { wrapWordsInKbdTags  } from '@/lib/utils';
import { computed } from 'vue';

const wordsToWrap = [
  { word: 'Vue.js', class: 'kbd kbd-md font-bold' },
  { word: 'Three.js', class: 'kbd kbd-md font-bold' },
  { word: 'Babylon.js', class: 'kbd kbd-md font-bold' },
]

const wrappedSummary = computed(() => wrapWordsInKbdTags(DATA.summary, wordsToWrap))

const emit = defineEmits(['startJourney'])

const startJourney = () => {
  emit('startJourney')
}
</script>