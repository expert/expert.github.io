import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useJourneyStore = defineStore('journey', () => {
  const step = ref(-1)
  const name = ref('Alexei')
  const video = ref('/assets/video/portfolio.mp4')
  const doubleCount = computed(() => step.value * 2)
  const setStep = function (s: number) {
    step.value = s
  }
  const setVideo = function(url: string) {
    video.value = url
  }

  return { step, name, doubleCount, setStep, video, setVideo }
})
