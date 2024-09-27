<script setup lang="ts">
import { onMounted, useTemplateRef  } from 'vue';
import { initialize } from './main'

const canvas = useTemplateRef('canvas')
onMounted(() => {
  initialize(canvas)
})

</script>
<template>
  <div class="h-full w-full absolute">
      <div ref="canvas" class=" h-full w-full"></div>
  </div>
</template>