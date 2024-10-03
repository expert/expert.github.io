<template>
<RouterLink :to="href || '#'" class="block cursor-pointer" @click="handleClick">
    <Card class="flex pb-6">
      <div class="flex-none pt-6 pl-6">
        <Avatar class="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage :src="logoUrl" :alt="altText" class="object-contain" />
          <AvatarFallback>{{ altText[0] }}</AvatarFallback>
        </Avatar>
      </div>
      <div class="flex-grow ml-4 items-center flex-col group">
        <CardHeader class="pl-0">
          <div class="flex items-center justify-between gap-x-2 text-base">
            <h3 class="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {{ title }}
              <span v-if="badges" class="inline-flex gap-x-1">
                <Badge
                  v-for="(badge, index) in badges"
                  :key="index"
                  variant="secondary"
                  class="align-middle text-xs"
                >
                  {{ badge }}
                </Badge>
              </span>
              <!-- <ChevronRightIcon
                class="size-4 transform opacity-0 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:opacity-100"
                :class="isExpanded ? 'rotate-90' : 'rotate-0'"
              /> -->
            </h3>
            <div class="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {{ period }}
            </div>
          </div>
          <div v-if="subtitle" class="font-sans text-xs">{{ subtitle }}</div>
        </CardHeader>
        <div
          v-if="description"
          :initial="{ opacity: 0, height: 0 }"
          :animate="{ opacity: isExpanded ? 1 : 0, height: isExpanded ? 'auto' : 0 }"
          :transition="{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }"
          class="mt-2 text-xs sm:text-sm"
        >
          {{ description }}
        </div>
      </div>
    </Card>
  </RouterLink>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader } from '@/components/ui/card';
// import { ChevronRightIcon } from 'lucide-vue'; // lucide-react as vue icons

// import { motion } from '@vueuse/motion'; // For animations
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

const props = defineProps<ResumeCardProps>();

const isExpanded = ref(false);

const handleClick = (e: MouseEvent) => {
  if (props.description) {
    e.preventDefault();
    isExpanded.value = !isExpanded.value;
  }
};
</script>
