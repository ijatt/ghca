<template>
  <div class="px-8 h-full">
    <div class="flex items-center h-full w-screen max-w-full justify-between">
      <div class="flex items-center">
        <button class="block sm:hidden">
          this is button
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-6 h-6 text-slate-500 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </button>
        <button
          type="button"
          @click="toggleDarkMode"
          class="ml-4 p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            data-slot="icon"
            class="w-6 h-6 text-yellow-400 fill-yellow-400">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        </button>
      </div>
      <div
        class="flex items-center gap-x-2 text-slate-500 dark:text-slate-300 mr-12 sm:mr-0 relative"
      >
        <UDropdown
          :items="items"
          :popper="{ placement: 'bottom-start' }"
          mode="click"
        >
          <UButton
            color="white"
            trailing-icon="i-heroicons-chevron-down-20-solid"
            class="ring-0 shadow-none text-slate-500 dark:text-slate-300 tracking-wider"
          />
        </UDropdown>
      </div>       
    </div>
  </div>
</template>

<script setup>
const items = [
  [
    {
      label: "Profile",
      icon: "i-heroicons-user-circle-20-solid",
      click: () => {
        navigateTo("/profile");
      },
    },
  ],
  [
    {
      label: "Settings",
      icon: "i-heroicons-cog-20-solid",
      click: () => {
        navigateTo("/settings");
      },
    },
  ],
  [
    {
      label: "Sign Out",
      icon: "i-heroicons-arrow-right-end-on-rectangle-16-solid",
    },
  ],
];
</script>