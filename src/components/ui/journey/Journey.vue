<script setup lang="ts">
import { ref, reactive, type Reactive } from "vue";
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
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

import { Badge } from "@/components/ui/badge";
import JourneyData from "./journey.json";
type Content = {
  tag: string;
  css?: string;
  value: string;
};

type Journey = {
  title: string,
  description: string,
  stepper: {
    title: string,
    description: string
  }
  body: Content[];
  skills: string[];
};

const journey: Reactive<Journey[]> = reactive(JourneyData);
const currentStep = ref(0)

// const Curre = computed(() => {
//   return journey[currentStep.value]
// })

</script>

<template>
  <div class="journey pr-4">
    <template v-for="(card, index) in journey">
      <Card v-if="index == currentStep" class="h-auto" v-motion-slide-visible-bottom>
        <CardHeader>
          <CardTitle>{{ card.title }}</CardTitle>
          <CardDescription class="card-title">{{ card.description }}</CardDescription>
        </CardHeader>
        <CardContent>
          <component
            v-for="content in card.body"
            :class="content.css"
            :is="content.tag"
            >{{ content.value }}</component
          >
        </CardContent>
        <CardFooter>
          Skils:

          <Badge v-for="skill of card.skills">{{ skill }}</Badge>
          <Badge>Html</Badge>
        </CardFooter>
      </Card>
    </template>

    <Stepper v-model="currentStep">
      <StepperItem v-for="({ stepper }, index) of journey" :step="index">
        <StepperTrigger>
          <StepperIndicator>{{ index + 1 }}</StepperIndicator>
          <StepperTitle>{{ stepper.title }}</StepperTitle>
          <StepperDescription>{{ stepper.description }}</StepperDescription>
        </StepperTrigger>
        <StepperSeparator />
      </StepperItem>
    </Stepper>
  </div>
</template>
