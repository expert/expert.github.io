<script setup lang="ts">
import { ref, watch } from "vue";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

import { Badge } from "@/components/ui/badge";
import { DATA } from '@/data/resume.ts';
import ResumeCard from "@/components/ui/resume/ResumeCard.vue";
import ProjectCard from "@/components/ui/project/ProjectCard.vue";
import { useJourneyStore } from "@/stores/journey"

// type Content = {
//   tag: string;
//   css?: string;
//   value: string;
// };

const currentStep = ref(0)
const stepper = ["About", "Education", "Experience", "Projects"]
const { setStep } = useJourneyStore()
watch(currentStep, () => {
  setStep(currentStep.value)
})

</script>

<template>
  <div class="journey pr-4 max-w-[750px] mt-32 ml-auto mr-auto">

    <div class="">
      <Card v-if="currentStep == 0"  class="h-auto animate-border bg-black">
        <CardHeader>
          <CardTitle>About</CardTitle>
          <CardDescription class="card-title">Hi, I'm Cernobai Alexei</CardDescription>
        </CardHeader>
        <CardContent>
          {{ DATA.summary }}
        </CardContent>
        <CardFooter class="flex-wrap gap-2">
          Skills:

          <Badge class="gap-2" v-for="skill of DATA.skills">{{ skill }}</Badge>
        </CardFooter>
      </Card>
      <Card v-if="currentStep == 1" class="h-auto animate-border bg-black">
        <CardHeader>
          <CardTitle>Education</CardTitle>
          <CardDescription class="card-title">Hi, I'm Alexei</CardDescription>
        </CardHeader>
        <CardContent class="grid grid-cols-1 space-y-4 overflow-scroll">
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
        </CardContent>
      
      </Card>
      <Card v-if="currentStep == 2" class="h-auto  animate-border bg-black">
        <CardHeader>
          <CardTitle>Work Experience</CardTitle>
          <CardDescription class="card-title">Hi, I'm Alexei</CardDescription>
        </CardHeader>
        <CardContent class="overflow-y-auto max-h-72">
          <div class="grid grid-cols-1 gap-4">
          <div
            v-for="work in DATA.work"
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
              :period="`${work.start} - ${work?.end ?? 'Present'}`"
              :description="work.description"
            />
          </div>

          </div>
        </CardContent>
      
      </Card>
      <Card v-if="currentStep == 3" class="h-auto animate-border bg-black">
        <CardHeader>
          <CardTitle>My Projects</CardTitle>
          <CardDescription class="card-title">Check out my latest work</CardDescription>
        </CardHeader>
        <CardContent class="overflow-auto max-h-72">
          <div class="grid grid-cols-1 gap-4 ">
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
        </CardContent>
      
      </Card>
    </div>

    <Stepper v-model="currentStep" class="bg-white dark:bg-black p-2 rounded-md mt-2">
      <div class="mt-4">Click on the steps: </div>
      <StepperItem v-for="(title, index) of stepper" :step="index">
        <StepperTrigger>
          <StepperIndicator>{{ index + 1 }}</StepperIndicator>
          <StepperTitle>{{ title }}</StepperTitle>
          <!-- <StepperDescription>{{ stepper.description }}</StepperDescription> -->
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
    </Stepper>


  </div>
</template>
