<template>
  <JHeader />

  <div class="mx-auto px-12 py-8 lg:py-0 lg:pt-24">
    <div class="flex items-center justify-center md:block">
      <p
        class="font-source-code font-normal text-turquoise text-xl md:text-2xl lg:text-3xl"
      >
        Hi, my name is
      </p>
    </div>
    <div class="flex items-center justify-center md:block">
      <h1
        class="font-outfit font-extrabold text-paleBlue text-4xl md:text-4xl lg:text-7xl mt-2"
      >
        João Gabriel,
      </h1>
    </div>
    <div class="flex items-center justify-center md:block">
      <p
        class="font-outfit font-semibold text-xl md:text-4xl lg:text-7xl mt-4 text-turquoise"
      >
        I build things for the web.
      </p>
    </div>
  </div>

  <div class="mx-auto mx-12 py-6 lg:py-36">
    <hr
      class="bg-gunMetal border-gunMetal text-gunMetal h-1.5 rounded"
      id="about"
    />
  </div>

  <div class="mx-auto px-12 py-8 lg:py-0">
    <div
      class="grid grid-cols-1 lg:grid-cols-2 space-y-12 lg:space-y-0 space-x-0 lg:space-x-24"
    >
      <div
        class="border-solid border-2 border-turquoise button-shadow rounded w-[320px] md:w-[420px] justify-self-center"
      >
        <img :src="profileImage" alt="profile image" class="w-full h-full" />
      </div>
      <div>
        <div class="flex items-center justify-center lg:justify-start">
          <h2 class="font-outfit font-extrabold text-paleBlue text-4xl">
            About me
          </h2>
        </div>
        <p class="font-outfit text-xl md:text-xl mt-8 md:mt-10 text-white">
          I am a software developer who is passionate about learning and
          expanding my knowledge of various technologies, with a focus on the
          Laravel framework and its ecosystem. I help businesses launch and grow
          their products. My main technologies at the moment are:
        </p>
        <div class="mt-4">
          <div class="grid grid-cols-2 md:grid-cols-3 md:gap-2">
            <p
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
              <span> Laravel </span>
            </p>
            <p
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
              <span> Livewire </span>
            </p>
            <p
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
              <span> TailwindCSS </span>
            </p>
            <p
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
              <span> React </span>
            </p>
            <p
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
              <span> Vue </span>
            </p>
            <p
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
              <span> Typescript </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mx-auto mx-12 mx-auto mx-12 py-6 lg:py-36">
    <hr
      class="bg-gunMetal border-gunMetal text-gunMetal h-1.5 rounded"
      id="experience"
    />
  </div>

  <div class="mx-auto px-12 py-8 lg:py-0">
    <div class="flex items-center justify-center lg:justify-start">
      <h2 class="font-outfit font-extrabold text-paleBlue text-4xl">
        Experience
      </h2>
    </div>

    <JExperience />
  </div>

  <div class="mx-auto mx-12 mx-auto mx-12 py-6 lg:py-36">
    <hr class="bg-gunMetal border-gunMetal text-gunMetal h-1.5 rounded" />
  </div>

  <div class="mx-auto px-12 py-8 lg:py-0 lg:pb-16" id="contact">
    <div class="flex items-center justify-center">
      <h2 class="font-outfit font-extrabold text-paleBlue text-4xl">Contact</h2>
    </div>

    <p class="font-outfit text-xl md:text-xl mt-10 text-white text-center">
      Interested to work with me? Get in touch.
    </p>

    <div class="hidden md:flex items-center justify-center mt-10 space-x-12">
      <a
        href="mailto:joaogabrielapsss@gmail.com"
        target="_blank"
        class="font-source-code font-normal text-base text-paleBlue inline-flex items-center px-4 py-2 rounded border-solid border-2 border-turquoise button-shadow hover:outline-noe hover:bg-aquamarine hover:bg-opacity-10"
      >
        <svg
          class="-ml-1 mr-3 h-8 w-8"
          viewBox="0 0 21 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0312 0.625C20.1182 0.625 21 1.50643 21 2.59375C21 3.21309 20.7088 3.79551 20.2125 4.16875L11.2875 10.8625C10.8199 11.2111 10.1801 11.2111 9.7125 10.8625L0.7875 4.16875C0.291744 3.79551 0 3.21309 0 2.59375C0 1.50643 0.881426 0.625 1.96875 0.625H19.0312ZM8.925 11.9125C9.86016 12.6139 11.1398 12.6139 12.075 11.9125L21 5.21875V13.75C21 15.1979 19.8229 16.375 18.375 16.375H2.625C1.1751 16.375 0 15.1979 0 13.75V5.21875L8.925 11.9125Z"
            fill="#41E4BD"
          />
        </svg>
        E-mail
      </a>
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-alves-pereira-da-silva-b38b261b5/?locale=en_US"
        target="_blank"
        class="font-source-code font-normal text-base text-paleBlue inline-flex items-center px-4 py-2 rounded border-solid border-2 border-turquoise button-shadow hover:outline-noe hover:bg-aquamarine hover:bg-opacity-10"
      >
        <svg
          class="-ml-1 mr-3 h-8 w-8"
          viewBox="0 0 15 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.39296 18.3751H0.433171V6.1073H3.39296V18.3751ZM1.91147 4.43387C0.965028 4.43387 0.197357 3.42488 0.197357 2.20672C0.197357 1.62159 0.377951 1.06043 0.69941 0.646678C1.02087 0.23293 1.45686 0.000488281 1.91147 0.000488281C2.36608 0.000488281 2.80207 0.23293 3.12353 0.646678C3.44499 1.06043 3.62559 1.62159 3.62559 2.20672C3.62559 3.42488 2.8576 4.43387 1.91147 4.43387ZM14.4705 18.3751H11.5171V12.4032C11.5171 10.98 11.4948 9.15477 9.97823 9.15477C8.43938 9.15477 8.20357 10.7011 8.20357 12.3007V18.3751H5.24697V6.1073H8.08566V7.78074H8.12709C8.52223 6.81687 9.48748 5.79969 10.9275 5.79969C13.923 5.79969 14.4737 8.33855 14.4737 11.6362V18.3751H14.4705Z"
            fill="#41E4BD"
          />
        </svg>
        LinkedIn
      </a>
    </div>
    <div class="md:hidden grid grid-cols-1 gap-4 mt-10">
      <a
        href="mailto:joaogabrielapsss@gmail.com"
        target="_blank"
        class="place-self-center w-36 font-source-code font-normal text-base text-paleBlue inline-flex items-center px-4 py-2 rounded border-solid border-2 border-turquoise button-shadow hover:outline-noe hover:bg-aquamarine hover:bg-opacity-10"
      >
        <svg
          class="-ml-1 mr-3 h-8 w-8"
          viewBox="0 0 21 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.0312 0.625C20.1182 0.625 21 1.50643 21 2.59375C21 3.21309 20.7088 3.79551 20.2125 4.16875L11.2875 10.8625C10.8199 11.2111 10.1801 11.2111 9.7125 10.8625L0.7875 4.16875C0.291744 3.79551 0 3.21309 0 2.59375C0 1.50643 0.881426 0.625 1.96875 0.625H19.0312ZM8.925 11.9125C9.86016 12.6139 11.1398 12.6139 12.075 11.9125L21 5.21875V13.75C21 15.1979 19.8229 16.375 18.375 16.375H2.625C1.1751 16.375 0 15.1979 0 13.75V5.21875L8.925 11.9125Z"
            fill="#41E4BD"
          />
        </svg>
        E-mail
      </a>
      <a
        href="https://www.linkedin.com/in/jo%C3%A3o-gabriel-alves-pereira-da-silva-b38b261b5/?locale=en_US"
        target="_blank"
        class="place-self-center w-36 font-source-code font-normal text-base text-paleBlue inline-flex items-center px-4 py-2 border-solid rounded border-2 border-turquoise button-shadow hover:outline-noe hover:bg-aquamarine hover:bg-opacity-10"
      >
        <svg
          class="-ml-1 mr-3 h-8 w-8"
          viewBox="0 0 15 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.39296 18.3751H0.433171V6.1073H3.39296V18.3751ZM1.91147 4.43387C0.965028 4.43387 0.197357 3.42488 0.197357 2.20672C0.197357 1.62159 0.377951 1.06043 0.69941 0.646678C1.02087 0.23293 1.45686 0.000488281 1.91147 0.000488281C2.36608 0.000488281 2.80207 0.23293 3.12353 0.646678C3.44499 1.06043 3.62559 1.62159 3.62559 2.20672C3.62559 3.42488 2.8576 4.43387 1.91147 4.43387ZM14.4705 18.3751H11.5171V12.4032C11.5171 10.98 11.4948 9.15477 9.97823 9.15477C8.43938 9.15477 8.20357 10.7011 8.20357 12.3007V18.3751H5.24697V6.1073H8.08566V7.78074H8.12709C8.52223 6.81687 9.48748 5.79969 10.9275 5.79969C13.923 5.79969 14.4737 8.33855 14.4737 11.6362V18.3751H14.4705Z"
            fill="#41E4BD"
          />
        </svg>
        LinkedIn
      </a>
    </div>
  </div>

  <div class="mx-auto px-20 lg:px-12 py-8 lg:py-0 text-center lg:pb-16">
    <span
      class="font-source-code font-normal text-paleBlue text-xs md:text-base"
    >
      @2023 Joao Global Software Development LLC | 30 N Gould St Ste R,
      Sheridan, WY 82801, USA | +1 (628) 600-5184
    </span>
  </div>
</template>
<script setup>
import JHeader from "@/components/JHeader.vue";

import profileImage from "./assets/profile.jpeg";
import JExperience from "@/components/JExperience.vue";
</script>
<style>
.jg {
  fill: none;
  stroke: #41e4bd;
  stroke-miterlimit: 10;
  stroke-width: 5px;
}
</style>
