<template>
  <div class="lg:flex lg:justify-around lg:items-center mt-4 lg:mx-12">
    <nav
      aria-label="Experience navigation desktop"
      class="w-full py-8 block justify-center items-center lg:flex"
    >
      <div class="flow-root">
        <ul role="list" class="-mb-8 block justify-center items-center">
          <li v-for="(job, index) in jobs" :key="'list' + index">
            <div class="relative pb-8">
              <span
                v-if="index !== jobs.length - 1"
                class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-paleBlue"
                aria-hidden="true"
              ></span>
              <div class="relative flex space-x-7">
                <div>
                  <span
                    class="h-8 w-8 rounded-full bg-white flex items-center justify-center"
                    @click="selectedJob = index"
                    :class="
                      selectedJob === index
                        ? 'ring-8 ring-turquoise'
                        : 'ring-4 hover:ring-8 ring-turquoise cursor-pointer'
                    "
                  >
                    <img
                      :src="job.logo"
                      :alt="job.company"
                      class="rounded-full w-full h-full object-cover"
                    />
                  </span>
                </div>
                <div class="min-w-0 flex-1 pt-1.5 flex justify-start space-x-4">
                  <div>
                    <p
                      class="font-source-code text-base text-white font-extrabold"
                    >
                      {{ job.company }}
                    </p>
                  </div>
                  <div>
                    <a
                      href="#"
                      class="font-outfit text-base font-medium text-turquoise"
                      >{{ job.period }}</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <div class="w-full min-h-full mt-4 lg:mt-0">
      <h3 class="inline font-outfit text-xl font-bold text-white">
        {{ jobs[selectedJob].title }}
      </h3>

      <p class="font-outfit font-normal text-xl mt-4 text-white">
        {{ jobs[selectedJob].description }}
      </p>

      <div class="mt-4">
        <div class="grid grid-cols-2 md:grid-cols-3 gap-2">
          <p
            v-for="(skill, index) in jobs[selectedJob].skills"
            :key="'skills' + index"
            class="font-source-code font-normal text-white text-base flex items-center space-x-2"
          >
            <span>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="7.5" r="7.5" fill="#ADF1ED" />
              </svg>
            </span>
            <span>
              {{ skill }}
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import fridayFinanceLogo from "../assets/logo_friday_finance.png";
import abraLogo from "../assets/abra_logo.jpeg";
import zapietLogo from "../assets/zapiet_logo.png";
import devsquadLogo from "../assets/devsquad_logo.jpeg";
import lbaLogo from "../assets/lba_logo.jpeg";

const selectedJob = ref(0);

const jobs = ref([
  {
    company: "Abra",
    logo: abraLogo,
    title: "Senior FullStack Engineer",
    description:
      "As a Senior Software Engineer at Abra, I take a lead role in designing and developing critical new features from scratch, ensuring they align with business goals and meet the highest standards of quality and performance. My work involves full-cycle development, from gathering requirements and designing architecture to coding, testing, and deploying scalable solutions. I collaborate closely with cross-functional teams, including product managers, designers, and other engineers, to deliver innovative software solutions that drive significant value for the company.",
    period: "Feb 2024 - Now",
    skills: [
      "Node.JS",
      "Javascript",
      "CSS",
      "Typescript",
      "Git",
      "Next.js",
      "React",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
      "API",
      "Full Stack Development",
      "Rest",
      "Google Cloud/GCloud",
    ],
  },
  {
    company: "Friday Finance",
    logo: fridayFinanceLogo,
    title: "Full Stack Engineer",
    description:
      "Responsible for developing and maintaining Friday Finance’s main product, contributing to its success by providing daily updates, resolving blockers, and building custom components with strict adherence to code guidelines for optimal performance. This includes optimizing the database for better scalability and security, integrating third-party APIs to enhance functionality, and ensuring a cohesive user interface. Additionally, thorough documentation using tools like Storybook and GitHub supports efficient onboarding and bug tracking.",
    period: "Sep 2022 - Feb 2024",
    skills: [
      "Node.JS",
      "Javascript",
      "CSS",
      "TailwindCSS",
      "Git",
      "HTML5",
      "Typescript",
      "Storybook",
      "Nuxt",
      "Vue",
      "GraphQL",
      "PostgreSQL",
      "Prisma",
      "API",
      "Web Development",
      "SQL",
    ],
  },
  {
    company: "Zapiet",
    logo: zapietLogo,
    title: "Full Stack Developer",
    description:
      "As a Full Stack Developer at Zapiet, I implemented automated tests using PHPUnit, PestPHP, and Laravel Dusk, integrating them into Bitbucket CI/CD pipelines with Docker, which reduced user errors by 60%. I conducted code reviews to improve quality and contributed to frontend development using React, Shopify app bridge, and Node.js, optimizing user experience and performance. On the backend, I managed databases with Laravel, Vapor, and Redis, enhancing security and scalability. I also integrated third-party APIs to boost efficiency and refactored legacy code to reduce technical debt while continually learning new technologies to stay up-to-date.",
    period: "Sep 2021 - Sep 2022",
    skills: [
      "Laravel",
      "Redis",
      "MyySQL",
      "Node.JS",
      "React",
      "Git",
      "Bitbucket",
      "CI/CD",
      "Docker",
      "Containers",
    ],
  },
  {
    company: "DevSquad",
    logo: devsquadLogo,
    title: "Full Stack Engineer",
    description:
      "As a Full Stack Engineer at DevSquad, I estimated tasks using Agile methodologies and managed them via Jira. I implemented automated tests with PHPUnit, PestPHP, and Laravel Dusk, improving software quality and reliability. Through query optimization and database tuning, I achieved a 40% improvement in API response times. I resolved bugs, leading to a 20% reduction in customer-reported issues, and contributed to frontend tasks, enhancing user satisfaction by 25%. I also refactored legacy code to reduce technical debt and participated in GitHub PR reviews to improve code quality.",
    period: "Oct 2020 - Sep 2021",
    skills: [
      "Laravel",
      "Livewire",
      "React",
      "PHPUnit",
      "PestPHP",
      "MySQL",
      "Jira",
      "Eloquent",
      "Git",
      "TailwindCSS",
      "Redis",
      "Multitenancy",
      "Laravel Dusk",
    ],
  },
  {
    company: "LBA",
    logo: lbaLogo,
    title: "Full Stack Engineer",
    description:
      "As a Full Stack Engineer at LBA Diligências Juridicas, I set sprint goals using Agile methodologies and managed tasks to align with business objectives. I gathered requirements through Jira and Kanban to define project scope and improve communication. By managing server infrastructure, I optimized costs, reducing them by 20% while maintaining scalability and reliability. On the frontend, I enhanced user experience with Livewire, AlpineJS, and TailwindCSS, improving load times by 20%. I also implemented automated tests using PHPUnit and Laravel Dusk and improved UI/UX to boost user satisfaction and reduce support costs.",
    period: "May 2020 - Oct 2020",
    skills: [
      "Laravel",
      "TailwindCSS",
      "Redis",
      "MySQL",
      "PHPUnit",
      "TailwindCSS",
      "Blade",
      "AlpineJS",
      "Livewire",
      "Jira",
      "Digital Ocean",
    ],
  },
]);
</script>
