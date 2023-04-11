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
                v-if="index !== 3"
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
import zapietLogo from "../assets/zapiet_logo.png";
import devsquadLogo from "../assets/devsquad_logo.jpeg";
import lbaLogo from "../assets/lba_logo.jpeg";

const selectedJob = ref(0);

const jobs = ref([
  {
    company: "Friday Finance",
    logo: fridayFinanceLogo,
    title: "Remote Fullstack software developer (GE)",
    description:
      "Continued development of Friday Finance main project using Nuxt and Graphql.",
    period: "Sep 2022 - Now",
    skills: ["Graphql", "Vue", "Nuxt", "Prisma", "ApolloServer", "PostgreSQL"],
  },
  {
    company: "Zapiet",
    logo: zapietLogo,
    title: "Remote full stack software developer (UK)",
    description:
      "Build Shopify apps using React and Laravel APIs integrated Shopify APIs.",
    period: "Sep 2021 - Sep 2022",
    skills: ["APIs", "Laravel", "Typescript", "React", "MySQL", "Bootstrap"],
  },
  {
    company: "DevSquad",
    logo: devsquadLogo,
    title: "Remote full stack software developer (USA)",
    description:
      "Build multiple projects for DevsQuad clients using TALL stack along side frontend frameworks like React and Vue.",
    period: "Oct 2020 - Sep 2021",
    skills: [
      "Laravel",
      "TailwindCSS",
      "Livewire",
      "AlpineJS",
      "MySQL",
      "Vue & React",
    ],
  },
  {
    company: "LBA",
    logo: lbaLogo,
    title: "Remote full stack web developer (BR)",
    description:
      "Continued development of the LBA - Diligências Jurídicas web site using TALL stack.",
    period: "May 2020 - Oct 2020",
    skills: [
      "Laravel",
      "TailwindCSS",
      "Livewire",
      "AlpineJS",
      "MySQL",
      "Digital Ocean",
    ],
  },
]);
</script>
