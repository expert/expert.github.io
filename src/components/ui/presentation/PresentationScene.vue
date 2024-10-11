<script setup lang="ts">
import { onMounted, useTemplateRef  } from 'vue';
import { initialize } from './main'
import { useJourneyStore } from "@/stores/journey"

const canvas = useTemplateRef('canvas')
onMounted(() => {
  initialize(canvas, useJourneyStore)
})

</script>
<template>
  <div class="h-full w-full absolute">
      <div ref="canvas" class=" h-full w-full"></div>
  </div>

  <!-- HTML: Create a video element -->
  <video id="video" style="display:none; border-radius: 20px;" autoplay loop muted playsinline>
    <source src="/assets/video/realtyspace.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>