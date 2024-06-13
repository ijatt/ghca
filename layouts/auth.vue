<template>
  <div class="w-screen h-screen">
    <aside class="w-[230px] fixed top-0 left-0 h-full bg-black bg-opacity-70"
    :class="width < 640 && isOpen? 'w-full z-40' : ''"
    @click.self="isOpen = false"
    >
      <div class="" :class="width < 640 ? 'w-1/2' : 'w-full'">
        <Sidebar />
      </div>
    </aside>      
    <main class="sm:ml-[230px] shadow-inner w-full sm:w-[calc(100vw-230px)] h-full bg-gray-100 px-12 md:px-24 py-20 relative">
        <button class="sm:hidden absolute left-5 top-5" @click="isOpen = ! isOpen">
          <Icon name="mdi:menu" class="w-6 h-6" />
        </button>
        <div class="rounded-lg w-full h-full">
          <slot/>
        </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
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

const { width } = useWindowSize()

const isOpen = ref(width.value < 640 ? false : true)
watch(() => route.path, () => width.value < 640 ? isOpen.value = false : isOpen.value = true)
</script>

<style></style>
