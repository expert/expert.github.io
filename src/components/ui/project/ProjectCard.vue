<template>
  <Card 
  class="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
  @mouseenter="cardHover"
  >
    <a v-if="!hidePreview" :href="href || '#'" target="_blank" class="block cursor-pointer">
      <template v-if="video">
        <video
          :src="video"
          autoPlay
          loop
          muted
          playsinline
          class="pointer-events-none mx-auto h-40 w-full object-cover object-top"
        />
      </template>
      <template v-if="image">
        <img
          :src="image"
          :alt="title"
          class="h-40 w-full overflow-hidden object-cover object-top"
        />
      </template>
    </a>

    <CardHeader class="px-2">
      <div class="space-y-1">
        <CardTitle class="mt-1 text-base">{{ title }}</CardTitle>
        <time class="font-sans text-xs">{{ dates }}</time>
        <div class="hidden font-sans text-xs underline print:visible">
          {{ cleanedLink }}
        </div>
        <p>{{ description }}</p>
        <!-- <MarkdownContent :content="description" /> -->
      </div>
    </CardHeader>

    <CardContent class="mt-auto flex flex-col px-2">
      <template v-if="tags && tags.length > 0">
        <div class="mt-2 flex flex-wrap gap-1">
          <Badge
            v-for="(tag, index) in tags"
            :key="index"
            class="px-4 py-2 text-[12px]"
            variant="secondary"
          >
            {{ tag }}
          </Badge>
        </div>
      </template>
    </CardContent>

    <CardFooter class="px-2 pb-2">
      <template v-if="links && links.length > 0">
        <div class="flex flex-row flex-wrap items-start gap-1">
          <a
            v-for="(link, idx) in links"
            :key="idx"
            :href="link.href"
            target="_blank"
          >
            <Badge class="flex gap-2 px-2 py-1 text-[10px]">
              {{ link.icon }}
              {{ link.type }}
            </Badge>
          </a>
        </div>
      </template>
    </CardFooter>
  </Card>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RouterLink } from 'vue-router';
import { useJourneyStore } from '@/stores/journey';

interface ProjectLink {
  icon?: string;
  type: string;
  href: string;
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly ProjectLink[];
  className?: string;
  hidePreview?: boolean;
}

const props = defineProps<Props>();

// Computed property to clean the link
const cleanedLink = computed(() =>
  props.link?.replace('https://', '').replace('www.', '').replace('/', '')
);

const { setVideo } = useJourneyStore()

const cardHover = () => {
  if (props.video) {
    setVideo(props.video)
  }
}


</script>
