<script setup lang="ts">
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

import {
  Stepper,
  StepperDescription,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from '@/components/ui/stepper'

import { Badge } from '@/components/ui/badge'
</script>

<template> 
<div class="journey">
  <Card class="h-auto">
    <CardHeader>
      <CardTitle>Explore my Journey</CardTitle>
      <CardDescription>About me</CardDescription>
    </CardHeader>
    <CardContent>
      <h3>Programming</h3>
      <p>Experienced in programming languages JS, specifically ECMA2017, Typescript, Node.js, Vue.js, React.js, Nuxt.js, Koa.js. Also experienced CSS3/HTML5 coder. Soft skills such as PHP, Mysql, MongoDB, CMS WordPress.</p>
      <h3>Self-development</h3>
      In the ever-evolving landscape of technology, I remain attuned to the latest stacks and seamlessly incorporate them into my ongoing study projects or production work. This approach ensures that even if these tools are not integral to my current development stack, I am enthusiastic about learning and integrating them into my work. For instance, I am adept at adopting technologies like React.js, as well as any other tools that enhance my capabilities.
      <h3>Communication</h3>
      Proficient in collaborative teamwork, adept at time management, and skilled in orchestrating effective teams. Experienced in structuring current workflows using Agile software development methodologies.
      <h3>Best practice</h3>
      Committed to performing my role at a superior standard that aligns with company requirements. Employing tools to ensure meticulous code style and crafting end-to-end tests.
      <h3>Experience</h3>
      Accumulating over a decade of experience as a seasoned Frontend and Fullstack developer, I have successfully crafted websites spanning a spectrum of simplicity to high complexity, numbering in the hundreds. Furthermore, I have undertaken the development of comprehensive product software from the ground up, now catering to a global user base exceeding 5,000 individuals.
    </CardContent>
    <CardFooter>
      Card Footer

      <Badge>Css</Badge>
      <Badge>Html</Badge>
    </CardFooter>
  </Card>

  <Stepper>
    <StepperItem :step="1">
      <StepperTrigger>
        <StepperIndicator>1</StepperIndicator>
        <StepperTitle>Step 1</StepperTitle>
        <StepperDescription>This is the first step</StepperDescription>
      </StepperTrigger>
      <StepperSeparator />
    </StepperItem>
    <StepperItem :step="2">
      <StepperTrigger>
        <StepperIndicator>2</StepperIndicator>
        <StepperTitle>Step 2</StepperTitle>
        <StepperDescription>This is the second step</StepperDescription>
      </StepperTrigger>
    </StepperItem>
  </Stepper>

</div>
</template>