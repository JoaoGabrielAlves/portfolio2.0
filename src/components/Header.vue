<template>
  <header>
    <nav class="mx-auto px-4 sm:px-6" aria-label="Top">
      <div class="w-full py-6 flex items-center justify-between">
        <div class="flex items-center">
          <a href="#" @click.prevent>
            <svg
              width="57"
              height="53"
              id="Camada_1"
              data-name="Camada 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 142.58 81.96"
            >
              <title>jg</title>
              <path
                class="jg"
                d="M28.61,101.41a28,28,0,0,1-12.55-2.62,30,30,0,0,1-9.39-7.35L19,79.36a13.56,13.56,0,0,0,4.52,3.94,12,12,0,0,0,5.67,1.31,10.61,10.61,0,0,0,5.14-1.2,9.27,9.27,0,0,0,3.57-3.57,11.76,11.76,0,0,0,1.37-5.94V25.71h18.9V73A30.4,30.4,0,0,1,54.55,88,24.91,24.91,0,0,1,44.41,97.9,33.07,33.07,0,0,1,28.61,101.41Z"
                transform="translate(-3.24 -21.95)"
              />
              <path
                class="jg"
                d="M105,101.31a41.75,41.75,0,0,1-15.64-2.89,38.15,38.15,0,0,1-12.6-8.08A37.25,37.25,0,0,1,68.4,78.1a38.52,38.52,0,0,1-3-15.22,37.3,37.3,0,0,1,3.1-15.23,36.87,36.87,0,0,1,8.66-12.23,40.13,40.13,0,0,1,13-8.08,43,43,0,0,1,15.8-2.89A44.73,44.73,0,0,1,124,28a34,34,0,0,1,13.12,9.71l-12.6,12.6a26,26,0,0,0-8.29-6.77,23.13,23.13,0,0,0-10.5-2.26,21.89,21.89,0,0,0-10.82,2.68,19.47,19.47,0,0,0-7.61,7.56,22.41,22.41,0,0,0-2.78,11.28,24,24,0,0,0,2.62,11.45,18.67,18.67,0,0,0,7.3,7.61,21.21,21.21,0,0,0,10.76,2.68,21.8,21.8,0,0,0,10.35-2.26,14.58,14.58,0,0,0,3.3-2.37c1.3-1.23,2.61-2.37,3.15-4.3a10.15,10.15,0,0,0,.11-3.39L103,72.54V57.1h40.32v2.84q0,13.34-4.83,22.57a33.11,33.11,0,0,1-13.44,14A40.63,40.63,0,0,1,105,101.31Z"
                transform="translate(-3.24 -21.95)"
              />
            </svg>
          </a>
        </div>
        <div class="hidden ml-10 space-x-8 md:block">
          <a
            href="#about"
            class="font-outfit font-normal text-base text-paleBlue hover:text-waterSpout"
          >
            About
          </a>

          <a
            href="#experience"
            class="font-outfit font-normal text-base text-paleBlue hover:text-waterSpout"
          >
            Experience
          </a>

          <a
            href="#contact"
            class="font-outfit font-normal text-base text-paleBlue hover:text-waterSpout"
          >
            Contact
          </a>
        </div>

        <div
          v-if="!showMenu"
          @click="showMenu = !showMenu"
          class="py-4 flex flex-wrap justify-center space-x-6 md:hidden"
        >
          <svg
            width="18"
            height="14"
            viewBox="0 0 18 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1.375C0 0.752734 0.574554 0.25 1.28571 0.25H16.7143C17.4254 0.25 18 0.752734 18 1.375C18 1.99727 17.4254 2.5 16.7143 2.5H1.28571C0.574554 2.5 0 1.99727 0 1.375ZM0 7C0 6.37773 0.574554 5.875 1.28571 5.875H16.7143C17.4254 5.875 18 6.37773 18 7C18 7.62227 17.4254 8.125 16.7143 8.125H1.28571C0.574554 8.125 0 7.62227 0 7ZM18 12.625C18 13.2473 17.4254 13.75 16.7143 13.75H1.28571C0.574554 13.75 0 13.2473 0 12.625C0 12.0027 0.574554 11.5 1.28571 11.5H16.7143C17.4254 11.5 18 12.0027 18 12.625Z"
              fill="#ADF1ED"
            />
          </svg>
        </div>
      </div>

      <HamburgerMenu :show-menu="showMenu" @close="showMenu = false" />
    </nav>
  </header>
</template>

<script setup>
import { defineComponent, ref } from "vue";
import HamburgerMenu from "@/components/HamburgerMenu.vue";

const showMenu = ref(false);

defineComponent({
  name: "DashboardHeader",
});
</script>
