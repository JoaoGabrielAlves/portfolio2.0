<template>
  <Transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="opacity-0 scale-95"
    enter-to-class="opacity-100 scale-100"
    leave-active-class="duration-100 ease-in"
    leave-from-class="opacity-100 scale-100"
    leave-to-class="opacity-0- scale-95"
  >
    <div
      v-if="props.showMenu"
      class="m-4 absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden border rounded border-turquoise"
    >
      <div
        class="divide-y-2 divide-gray-50 rounded-lg bg-darkGunmetal shadow-lg ring-1 ring-black ring-opacity-5"
      >
        <div class="px-5 pt-5 pb-6">
          <div class="flex items-center justify-between">
            <div>
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
            <div class="-mr-2">
              <button
                @click="emits('close')"
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-darkGunmetal p-2 font-outfit font-normal text-base text-paleBlue hover:text-waterSpout focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span class="sr-only">Close menu</span>
                <svg
                  class="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div class="mt-6">
            <nav class="grid gap-y-8">
              <a
                href="#about"
                @click="emits('close')"
                class="font-outfit font-normal text-base text-paleBlue hover:text-waterSpout"
              >
                About
              </a>

              <a
                href="#experience"
                @click="emits('close')"
                class="font-outfit font-normal text-base text-paleBlue hover:text-waterSpout"
              >
                Experience
              </a>

              <a
                href="#contact"
                @click="emits('close')"
                class="font-outfit font-normal text-base text-paleBlue hover:text-waterSpout"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
// eslint-disable-next-line no-undef
const emits = defineEmits(["close"]);

// eslint-disable-next-line no-undef
const props = defineProps({
  showMenu: {
    default: false,
    type: Boolean,
  },
});
</script>
