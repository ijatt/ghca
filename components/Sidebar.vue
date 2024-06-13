<template>
  <div class="bg-gray-50 w-full h-screen py-4 shadow"
  :class="!isOpen ? 'w-0 opacity-0' : 'w-64 opacity-100'"
  >
    <div class="flex items-center justify-center gap-x-2 m-4">
      <Icon name="mdi:pac-man" size="32" />
      <h1
        class="text-2xl inline-block font-bold dark:text-slate-200 font-sans tracking-wide"
      >
        NGO
      </h1>
    </div>
    <div class="mt-12">
      <NuxtLink
        to="/"
        class="flex w-full py-4 px-8 hover:text-blue-500 hover:bg-slate-100 items-center gap-2 cursor-pointer dark:hover:bg-slate-800"
        :class="
          currentRoute.path === '/'
            ? 'bg-slate-200 dark:bg-slate-700 text-blue-500'
            : 'dark:text-slate-300 text-slate-500'
        "
      >
        <Icon name="material-symbols:home" class="w-6 h-6" />
        Home
      </NuxtLink>
      <div
        class="flex w-full py-4 px-8 hover:text-blue-500 hover:bg-slate-100 items-center gap-2 cursor-pointer dark:hover:bg-slate-800"
        :class="
          currentRoute.path.includes('/applications')
            ? 'bg-slate-200 dark:bg-slate-700 text-blue-500'
            : 'dark:text-slate-300 text-slate-500'
        "
        @click="open = !open"
      >
        <Icon name="mdi:application" class="w-6 h-6" />
        Applications
        <Icon
          name="mdi:chevron-down"
          class="w-6 h-6 transform transition-all duration-300 ml-auto"
          :class="open ? 'rotate-180' : ''"
        />
      </div>
      <div v-if="open" class="my-2">
        <NuxtLink
          to="/applications/new"
          class="flex w-full px-8 py-4 text-sm hover:text-blue-500 whitespace-nowrap hover:bg-slate-200 items-center gap-2 cursor-pointer dark:hover:bg-slate-800"
          :class="
            currentRoute.path === '/crawler/twitter'
              ? 'bg-slate-200 dark:bg-slate-700 text-blue-500'
              : 'dark:text-slate-300 text-slate-500'
          "
        >
          <Icon name="mdi:application-edit" class="w-6 h-6" />
          New Applications
        </NuxtLink>
        <NuxtLink
          to="/applications"
          class="flex w-full px-8 py-4 text-sm hover:text-blue-500 hover:bg-slate-200 items-center gap-2 cursor-pointer dark:hover:bg-slate-800"
          :class="
            currentRoute.path === '/crawler/facebook'
              ? 'bg-slate-200 dark:bg-slate-700 text-blue-500'
              : 'dark:text-slate-300 text-slate-500'
          "
        >
          <Icon name="mdi:application-outline" class="w-6 h-6" />
          My Applications
        </NuxtLink>
      </div>
      <NuxtLink
        to="/profile"
        class="flex w-full py-4 px-8 hover:text-blue-500 hover:bg-slate-100 items-center gap-2 cursor-pointer dark:hover:bg-slate-800"
        :class="
          currentRoute.path === '/profile'
            ? 'bg-slate-200 dark:bg-slate-700 text-blue-500'
            : 'dark:text-slate-300 text-slate-500'
        "
      >
        <Icon name="mdi:account" class="w-6 h-6" />
        Profile
      </NuxtLink>
    </div>
    <button
        @click="signOut"
        class="flex  w-full py-4 px-8 dark:text-slate-300 text-slate-500 hover:text-blue-500 hover:bg-slate-100 items-center gap-2 cursor-pointer dark:hover:bg-slate-800"
      >
        <Icon name="mdi:logout" class="w-6 h-6" />
        Sign Out
  </button>
  </div>
</template>

<script setup>
const router = useRouter();
const { currentRoute } = router;

defineEmits(["closeSidebar"]);
const open = ref(false);

const route = useRoute();

watch(
  () => route.path,
  () => {
    if (route.path.includes("/crawler")) {
      open.value = true;
    } else {
      open.value = false;
    }
  }
);

const signOut = async () => {
  await $fetch("api/user/sign-out", {
    method: "POST",
  }).then(async () => {
    useTokenStore().accessToken = "";
    await navigateTo('/auth');
  });

}
const isOpen = ref(true)
</script>
