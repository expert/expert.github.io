<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { AppScene } from "@/components/ui/scene"
import HomeView from "@/views/HomeView.vue"

</script>

<template>
  <AppScene></AppScene>
  <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger><RouterLink to="/">Presentation</RouterLink></NavigationMenuTrigger>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <RouterLink to="/resume">Resume</RouterLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  <main> 
    <RouterView />
  </main>
  <div>
    <Button>Click me</Button>
  </div>
  <button class="btn">Button</button>

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
</style>
