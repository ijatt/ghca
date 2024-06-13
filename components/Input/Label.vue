<script setup>
defineProps({
    title: {
        type: String,
        default: "Title",
    },
})
</script>
<template>
  <label class="text-sm tracking-wide text-slate-500 dark:text-slate-300">
    {{title}}
  </label>
</template>