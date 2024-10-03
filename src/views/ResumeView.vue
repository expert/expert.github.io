<template>
  <main class="flex flex-col min-h-[100dvh] space-y-10 bg-white relative z-10">
      <section id="hero">
        <div class="mx-auto w-full max-w-2xl space-y-8">
          <div class="gap-2 flex justify-between">
            <div class="flex-col flex flex-1 space-y-1.5">
              <div 
                class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mt-4"
              >
                Hi, I'm Cernobai Alexei
              </div>
              <div class="flex mt-4">
                <div 
                  class="max-w-[600px] md:text-xl" 
                >
                  {{  DATA.description }}
                </div>
                <Avatar>
                  <AvatarImage :src="DATA.avatarUrl" :alt="DATA.name" />
                  <AvatarFallback>{{ DATA.initials }}</AvatarFallback>
                </Avatar>
              </div>
            </div>
            </div>
            
          </div>
      </section>
      <!-- <section id="about">
        <div class="mx-auto w-full max-w-2xl space-y-2">
          <div>
            <h2 class="text-xl font-bold">About</h2>
          </div>
          <div>
            <div class="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {{ DATA.summary }}
            </div>
          </div>
        </div>
      </section> -->
      <section id="work">
        <div class="mx-auto w-full max-w-2xl space-y-2">
          <div class="flex min-h-0 flex-col gap-y-3">
            <div>
              <h2 class="text-xl font-bold">Work Experience</h2>
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
              <h2 class="text-xl font-bold">Education</h2>
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
                  My Projects
                </div>
                <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
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
                  hide-preview
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
                Contact
              </div>
              <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p class="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Here are my contacts: 
                <div v-for="contact of DATA.contact.social">
                  {{ contact.name }}: <br> <a :href="contact.url" class="underline text-primary"  target="_blank">{{ contact.url }}</a> 
                </div>
                
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

</script>