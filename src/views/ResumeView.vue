<template>
  <main class="flex flex-col min-h-[100dvh] space-y-10 bg-white dark:bg-black relative z-10 p-4">
      <section id="hero">
        <div class="mx-auto w-full max-w-2xl space-y-8">
          <div class="gap-2 flex justify-between">
            <div class="flex-col flex flex-1 space-y-1.5">
              <div 
                class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mt-4"
              >
                Hi, I'm Alexei
              </div>
              <div class="flex mt-4">
                <div 
                  class="max-w-[600px] md:text-xl" 
                  v-html="DATA.description"
                >
                </div>
                <Avatar class="h-32 w-32">
                  <AvatarImage :src="DATA.avatarUrl" :alt="DATA.name" />
                  <AvatarFallback>{{ DATA.initials }}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          
        </div>
      </section>
      <section id="about">
        <div class="mx-auto w-full max-w-2xl space-y-2">
          <div>
            <h2 class="text-xl font-bold">{{ DATA.section.about.title }}</h2>
          </div>
          <div>
            <div 
              class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
              v-html="wrapperSummary"
              >
            </div>
            <div 
              v-for="content in DATA.section.about.content"
              class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert"
              >
              <h2 class="text-md text-white font-bold mt-4">{{ content.title  }}</h2>
              <p class="text-sm mt-0.5">{{  content.description }}</p>
            </div>
          </div>
        </div>
      </section>
      <section id="work">
        <div class="mx-auto w-full max-w-2xl space-y-2">
          <div class="flex min-h-0 flex-col gap-y-3">
            <div>
              <h2 class="text-xl font-bold">{{ DATA.section.work.title }}</h2>
            </div>
            <div
              v-for="(work, id) in DATA.work"
              :key="work.company"
            >
              <ResumeCard
                :key="work.company"
                :logoUrl="work.logoUrl"
                :altText="work.company"
                :title="work.company"
                :subtitle="work.title"
                :href="work.href"
                :badges="work.badges"
                :period="`${work.start} - ${work.end ?? 'Present'}`"
                :description="work.description"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="education">
        <div class="mx-auto w-full max-w-2xl space-y-2">
          <div class="flex min-h-0 flex-col gap-y-3">
            <div>
              <h2 class="text-xl font-bold">{{  DATA.section.education.title }}</h2>
            </div>
            <div
              v-for="education in DATA.education"
              :key="education.school"
            >
              <ResumeCard
                :key="education.school"
                :href="education.href"
                :logoUrl="education.logoUrl"
                :altText="education.school"
                :title="education.school"
                :subtitle="education.degree"
                :period="`${education.start} - ${education.end}`"
              />
            </div>
          </div>
      </div>
      </section>
      <section id="skills">
        <div class="mx-auto w-full max-w-2xl space-y-2">
          <div class="flex min-h-0 flex-col gap-y-3">
            <div>
              <h2 class="text-xl font-bold">Skills</h2>
            </div>
            <div class="flex flex-wrap gap-1">
              <div v-for="skill in DATA.skills" :key="skill">
                <Badge>{{ skill }}</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>
     <section id="projects">
        <div class="space-y-12 w-full py-12">
          <div>
            <div class="flex flex-col items-center justify-center space-y-4 text-center">
              <div class="space-y-2">
                <div class="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {{  DATA.section.projects.title }}
                </div>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {{ DATA.section.projects.headline }}
                </h2>
                <p class="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              <div
                v-for="project in DATA.projects"
                :key="project.title"
              >
                <ProjectCard
                  :href="project.href"
                  :key="project.title"
                  :title="project.title"
                  :description="project.description"
                  :dates="project.dates"
                  :tags="project.technologies"
                  :image="project.image"
                  :video="project.video"
                  :links="project.links"
                />
              </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div class="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <div>
            <div class="space-y-3">
              <div class="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                {{ DATA.section.contact.title }}
              </div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                {{ DATA.section.contact.headline }}
              </h2>
              <p class="mx-auto max-w-[600px] text-muted-foreground text-xs md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-ellipsis">
                <!-- Here are my contacts:  -->
                <dl v-for="contact of DATA.contact.social">
                  <dt>{{ contact.name }}:</dt>
                  <dd> 
                    <a :href="contact.url" class="underline text-primary "  target="_blank">{{ contact.url.replace('mailto:', '') }}</a> 
                  </dd>
                </dl>
                
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
</template>

<script setup lang="ts">
import { DATA } from '@/data/resume.ts'
import ResumeCard from '@/components/ui/resume/ResumeCard.vue';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ui/project/ProjectCard.vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { wrapWordsInKbdTags  } from '@/lib/utils';
import { computed } from 'vue';

const wordsToWrap = [
  { word: 'Vue.js', class: 'kbd kbd-xs font-bold' },
  { word: 'Three.js', class: 'kbd kbd-xs font-bold' },
  { word: 'Babylon.js', class: 'kbd kbd-xs font-bold' },
]

const wrapperSummary = computed(() => wrapWordsInKbdTags(DATA.summary, wordsToWrap))
</script>