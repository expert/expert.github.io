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
        <RouterLink class="text-white text-lg" to="/resume">Resume</RouterLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  <main> 
    <RouterView />
  </main>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
@media print {
  .menu {
    display: none;
  }
  
}
</style>