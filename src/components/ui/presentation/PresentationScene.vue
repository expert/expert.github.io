<script setup lang="ts">
import { onMounted, useTemplateRef, watch, ref } from 'vue';
import { initialize } from './main'
import { useJourneyStore } from "@/stores/journey"
import { storeToRefs } from 'pinia';

const canvas = useTemplateRef('canvas')
onMounted(() => {
  initialize(canvas, useJourneyStore)
})
const journeyStore = useJourneyStore()

const { video } = storeToRefs(journeyStore)
const videoTag = ref()

watch(video, () => {
  videoTag.value.src = video.value
})

</script>
<template>
  <div class="h-full w-full absolute">
      <div ref="canvas" class=" h-full w-full"></div>
  </div>
  <!-- HTML: Create a video element -->
  <video ref="videoTag" id="video" style="display: none;" autoplay loop muted playsinline>
    <source :src="video" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</template>