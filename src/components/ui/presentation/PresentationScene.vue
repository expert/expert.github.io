<script setup lang="ts">
import { onMounted, useTemplateRef  } from 'vue';
import { initialize } from './main-three'

const canvas = useTemplateRef('canvas')
onMounted(() => {
  initialize(canvas)
})

</script>
<template>
  <div class="h-full w-full absolute">
    <!-- <img class="inset-0 h-full w-full object-cover" src="/assets/images/scene.jpg" alt="scene"> -->
      <div ref="canvas" class=" h-full w-full"></div>
  </div>
</template>
