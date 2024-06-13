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
          <tr class="border bg-white border-slate-300 dark:border-slate-700 divide-x">
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              AP1001
            </td>
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              Rumah Anak Yatim
            </td>
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              Pending
            </td>
            <td class="text-sm text-start text-slate-500 whitespace-nowrap tracking-wide px-2 py-4 dark:text-slate-300">
              View
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
</script>

<style></style>
