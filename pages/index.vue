<template>
  <div class="w-full grid grid-cols-12 gap-4 h-full sm:h-auto overflow-y-auto">
    <div class="col-span-12">
      <h1 class="text-xl font-semibold text-slate-500 dark:text-slate-300">
      Charity Proposal Application System
    </h1>
    </div>
    <!-- <div class="col-span-12 row-start-2  sm:col-start-1 md:col-span-6 md:col-start-4 p-4 bg-white rounded-xl">
      <h1
        class="text-xl font-semibold text-slate-500 dark:text-slate-300 text-center"
      >
        Hello, {{ user.role == "APPLICANT" ? user.applicant?.name : user.admin?.name }}!
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
    </div>  -->
    <Card title="Total Application" :value="applications?.length" color="blue"/>
    <Card title="Approved Application" :value="approved" color="green" />
    <Card title="Pending Application" :value="pending" color="yellow" />
    <Card title="Rejected Application" :value="rejected" color="rose" />
  </div>
</template>

<script lang="ts" setup>
import type { User, Applications } from '~/types/user';
definePageMeta({
  layout: "auth",
  middleware: "auth"
});

import { Vue3Lottie } from 'vue3-lottie';
import animation from '~/public/animation.json'

const user = ref({} as User)
const applications = ref([] as Applications[])

onMounted( async () => {
  user.value = await $fetch("api/user", {
    method: "GET",
    headers: {
      authorization: `Bearer ${useTokenStore().accessToken}`,
    },
  });
  userStore().setUser(user.value)

  if (user?.value?.role == "APPLICANT") {
    applications.value = await $fetch("/api/applications", {
      method: "POST",
      body: {
        userId: userStore().user?.applicant?.id
      }
    })
  } else {
    applications.value = await $fetch("/api/applications/get-all", {
      method: "GET",
    })
  }
})

const pending = computed(() => {
  return applications.value.filter((application) => {
    return application.status == "PENDING"
  }).length
})

const approved = computed(() => {
  return applications.value.filter((application) => {
    return application.status == "APPROVED"
  }).length
})

const rejected = computed(() => {
  return applications.value.filter((application) => {
    return application.status == "REJECTED"
  }).length
})
</script>

<style></style>
