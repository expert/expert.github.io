<template>
  <div 
    :class="['grid relative z-10', shouldStartJourney ? 'grid-cols-2' : 'grid-cols-1']"
  >
    <Hero v-if="!shouldStartJourney" @start-journey="startJourneyClicked" />
    <Journey class="col-start-2" v-else />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Hero } from "@/components/ui/hero"
import { Journey } from "@/components/ui/journey"
import { useJourneyStore } from '@/stores/journey';
// import { nextTick } from 'vue';

const shouldStartJourney = ref(false)
const { setStep }  = useJourneyStore()
const startJourneyClicked = () => {
  shouldStartJourney.value = true
  setStep(0)

  
}
</script>