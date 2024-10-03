import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application
export const useJourneyStore = defineStore('journey', () => {
  const step = ref(-1)
  const name = ref('Alexei')
  const doubleCount = computed(() => step.value * 2)
  const setStep = function (s: number) {
    console.log('ste[', s)
    step.value = s
  }

  return { step, name, doubleCount, setStep }
})
