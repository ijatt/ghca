<template>
  <div
    class="col-span-12 sm:row-start-2 sm:col-span-6 md:col-span-3 bg-gradient-to-br flex justify-between flex-col p-4 text-white rounded-xl"
    :class="classes"
  >
    <p class="text-sm tracking-wide">
      {{ title }}
    </p>
    <p class="text-3xl font-bold tracking-wide">
      {{ value }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const classes = computed(() => {
  if (props.color === "blue") {
    return "from-blue-800 to-blue-500 shadow-sm shadow-blue-500 dark:shadow-none";
  } else if (props.color === "rose") {
    return "from-rose-500 to-rose-700 shadow-sm shadow-rose-500 dark:shadow-none";
  } else if (props.color === "pink") {
    return "from-pink-700 to-pink-500 shadow-sm shadow-pink-500 dark:shadow-none";
  } else if (props.color === "emerald") {
    return "from-emerald-500 to-emerald-600 shadow-sm shadow-emerald-500 dark:shadow-none";
  } else {
    return "from-blue-800 to-blue-500 shadow-sm shadow-blue-500 dark:shadow-none";
  }
});

const percentageClasses = computed(() => {
  if (props.color == "blue") {
    return "text-blue-700";
  } else if (props.color == "rose") {
    return "text-rose-600";
  } else if (props.color == "pink") {
    return "text-pink-600";
  } else if (props.color == "emerald") {
    return "text-emerald-600";
  } else {
    return "text-blue-700";
  }
});
</script>