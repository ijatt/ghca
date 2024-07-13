<template>
  <div class="w-full h-full overflow-y-auto">
    <h1 class="text-xl font-semibold text-slate-500 dark:text-slate-300">
      My Applications
    </h1>
    <div class="mt-4 flex w-full justify-end">
      <input
        type="text"
        v-model="search"
        class="w-64 p-2 mr-4 text-sm text-slate-500 rounded-md border-0 ring-1 ring-slate-300 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 focus:outline-none dark:text-slate-300 dark:ring-slate-700 dark:focus:ring-2 dark:focus:ring-blue-500 placeholder:italic"
      />
    </div>
    <div v-if="userStore().user?.role === 'APPLICANT'" class="w-full mt-4 rounded-md">
      <table class="w-full divide-y divide-slate-300 dark:divide-slate-700">
        <thead>
          <tr
            class="bg-slate-100 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 divide-x"
          >
            <th
              class="text-xs uppercase bg-slate-100 text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              Application ID
            </th>
            <th
              class="text-xs uppercase bg-transparent text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              Project Name
            </th>
            <th
              class="text-xs uppercase bg-transparent text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              Status
            </th>
            <th
              class="text-xs uppercase bg-transparent text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              View
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="application in applications" class="border bg-white border-slate-300 dark:border-slate-700 divide-x">
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              {{ application.id }}
            </td>
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              {{ application.name }}
            </td>
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              {{ application.status }}
            </td>
            <td class="text-sm flex justify-center text-slate-500 whitespace-nowrap tracking-wide px-2 py-2 dark:text-slate-300">
              <a :href="`${url}proposal/${application.fileName}`" target="_blank"
                class="bg-slate-200 hover:bg-slate-300 py-1 rounded-md px-2"
              >View</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else class="w-full mt-4 rounded-md">
      <table class="w-full divide-y divide-slate-300 dark:divide-slate-700">
        <thead>
          <tr
            class="bg-slate-100 border border-slate-300 dark:border-slate-700 dark:bg-slate-800 divide-x"
          >
            <th
              class="text-xs uppercase bg-slate-100 text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              Application ID
            </th>
            <th
              class="text-xs uppercase bg-transparent text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              Project Name
            </th>
            <th
              class="text-xs uppercase bg-transparent text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              Status
            </th>
            <th
              class="text-xs uppercase bg-transparent text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              View
            </th>
            <th
              class="text-xs uppercase bg-transparent text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              Approval
            </th>
            <th
              class="text-xs uppercase bg-transparent text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              Approved By
            </th>
            <th
              class="text-xs uppercase bg-transparent text-left whitespace-nowrap font-bold text-slate-500 tracking-wide px-2 py-4 dark:text-slate-300"
            >
              Approved Date
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="filteredApplication.length > 0" v-for="application in filteredApplication" class="border bg-white border-slate-300 dark:border-slate-700 divide-x">
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              {{ application.id }}
            </td>
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              {{ application.name }}
            </td>
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              {{ application.status }}
            </td>
            <td class="text-sm flex justify-center text-slate-500 whitespace-nowrap tracking-wide px-2 py-2 dark:text-slate-300">
              <a :href="`${url}proposal/${application.fileName}`" target="_blank"
                class="bg-slate-200 hover:bg-slate-300 py-1 rounded-md px-2"
              >View</a>
            </td>
            <td
              class="text-sm  justify-between text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300"
            >
              <div class="flex w-full justify-around">
                <button 
                  @click="updateApplication(application.id, 'APPROVED')"
                  :disabled="application.status !== 'PENDING'"
                class="rounded-full bg-green-600 text-white flex items-center p-1 disabled:bg-green-400"><Icon name="mdi:check" /></button>
              <button 
                @click="updateApplication(application.id, 'REJECTED')"
                :disabled="application.status !== 'PENDING'"
              class="rounded-full bg-red-600 text-white flex items-center disabled:bg-red-400 p-1"><Icon name="mdi:close" /></button>
              </div>
            </td>
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              {{ application.admin?.name }}
            </td>
            <td class="text-sm text-center text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              {{ useDateFormat(application.approvedAt, "YYYY-MM-DD").value.split('"').join('') }}
            </td>
          </tr>
          <tr v-else>
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              No Applications Found
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Applications } from '~/types/user';

definePageMeta({
  layout: "auth",
});

const config = useRuntimeConfig()
const url = config.public.BUCKET_URL
const applications = ref([] as Applications[]);
onMounted(async () => {
  if (userStore().user?.role == "APPLICANT") {
    applications.value = await $fetch("/api/applications", {
      method: "POST",
      body: {
        userId: userStore().user?.id
      }
    })
  } else {
    applications.value = await $fetch("/api/applications/get-all", {
      method: "GET",
    })
  }
})

const updateApplication = async (id: number, status: string) => {
  console.log(id, status);
  
  await $fetch("/api/applications/update-application", {
    method: "POST",
    body: {
      id: id,
      status: status,
      approvedBy: userStore().user?.admin.id
    }
  })
  applications.value = await $fetch("/api/applications/get-all", {
    method: "GET",
  })
}

const search = ref("")
//sort based on application id
const sortedApplication = computed(() => {
  return applications.value.sort((a, b) => a.id - b.id)
})

const filteredApplication = computed(() => {
  return sortedApplication.value.filter((application) => {
    return (application.name.toLowerCase().includes(search.value.toLowerCase())
    || application.status.toLowerCase().includes(search.value.toLowerCase()))
  })
})
</script>

<style></style>
