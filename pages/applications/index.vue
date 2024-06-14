<template>
  <div class="w-full h-full">
    <h1 class="text-xl font-semibold text-slate-500 dark:text-slate-300">
      My Applications
    </h1>
    <div class="mt-4 flex w-full justify-end">
      <input
        type="text"
        class="w-64 p-2 text-sm text-slate-500 rounded-md border-0 ring-1 ring-slate-300 focus:ring-2 focus:ring-blue-500 dark:bg-slate-900 focus:outline-none dark:text-slate-300 dark:ring-slate-700 dark:focus:ring-2 dark:focus:ring-blue-500 placeholder:italic"
      />
    </div>
    <div class="w-full mt-4 rounded-md">
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
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});

const config = useRuntimeConfig()
const url = config.public.BUCKET_URL
const applications = ref([])
onMounted(async () => {
  applications.value = await $fetch("/api/applications", {
    method: "POST",
    body: {
      userId: userStore().user?.id
    }
  })
})
</script>

<style></style>
