<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { PresentationScene } from "@/components/ui/presentation"
import { useJourneyStore  } from "./stores/journey";

const  { setStep } = useJourneyStore()
const restartScene = () => {
  setStep(0)
  triggerResize()
}

const triggerResize = () => {
  setTimeout(() => {
    window.dispatchEvent(new Event('resize'));
  }, 50)
}

</script>

<template>
  <PresentationScene></PresentationScene>
  <NavigationMenu class="menu p-4 bg-black">
    <NavigationMenuList>
      <NavigationMenuItem>
        <RouterLink class="text-white text-lg" to="/" @click="restartScene">Presentation</RouterLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <RouterLink class="text-white text-lg" to="/resume" @click="triggerResize">Resume</RouterLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  <main> 
    <RouterView />
  </main>

</template>
