<script setup>
const props = defineProps({
  name: String,
  disabled: {
    type: Boolean,
    default: false,
  },
});

const { value, errorMessage } = useField(() => props.name);
</script>
<template>
  <input
    v-model="value"
    :disabled="disabled"
    :validate-on-input="true"
    @input="$emit('update:modelValue', $event.target.value)"
    class="px-4 py-2 text-sm text-slate-500 rounded-md border-0 ring-1 w-full focus:ring-2 dark:bg-slate-900 dark:text-slate-300 focus:outline-none"
    :class="
      errorMessage
        ? 'ring-red-500 focus:ring-red-500'
        : 'ring-slate-300 dark:ring-slate-700 focus:ring-blue-500'
    "
  />
  <span class="text-red-500 text-xs">{{ errorMessage }}</span>
</template>