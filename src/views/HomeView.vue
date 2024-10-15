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
import { GtmSupport, useGtm } from '@gtm-support/vue-gtm';

const shouldStartJourney = ref(false)
const { setStep }  = useJourneyStore()
const startJourneyClicked = () => {
  shouldStartJourney.value = true
  setStep(0)
}

const gtm: GtmSupport | undefined = useGtm()
console.log('gtm', gtm?.enabled(), gtm?.debugEnabled())

gtm?.trackEvent({
  event: 'HomeView',
  category: 'visits',
  action: 'open',
  label: 'Open HomePage trigger',
  value: 5000,
  noninteraction: false,
});

</script>