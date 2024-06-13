<template>
  <div class="w-full grid grid-cols-12 gap-4 h-full sm:h-auto overflow-y-auto">
    <div class="col-span-12 row-start-1  sm:col-start-1 md:col-span-6 md:col-start-4 p-4 bg-white rounded-xl">
      <h1
        class="text-xl font-semibold text-slate-500 dark:text-slate-300 text-center"
      >
        Hello, {{ user.role == "APPLICANT" ? user.applicant.name : user.admin?.name }}!
      </h1>
      <ClientOnly>
        <Vue3Lottie 
          :animation-data="animation"
          :speed="1"  
          :loop="true"
          :autoplay="true"
          style="width: 300px; height: 200px;"
        />
      </ClientOnly> 
    </div> 
    <Card title="Total Application" :value="2" color="blue"/>
    <Card title="Approved Application" :value="1" color="rose" />
    <Card title="Pending Application" :value="1" color="pink" />
    <Card title="Rejected Application" :value="0" color="emerald" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
  middleware: "auth"
});

import { Vue3Lottie } from 'vue3-lottie';
import animation from '~/public/animation.json'

const user = ref({})

onMounted( async () => {
  user.value = await $fetch("api/user", {
    method: "GET",
    headers: {
      authorization: `Bearer ${useTokenStore().accessToken}`,
    },
  });
  userStore().setUser(user.value)
})
</script>

<style></style>
