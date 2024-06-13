<template>
  <div class="w-full h-full overflow-y-auto">
    <h1 class="text-xl font-semibold text-slate-500 dark:text-slate-300">
      New Applications Form
    </h1>
    <p class="text-sm text-slate-500 italic">
      Please fill all fields in the form
    </p>
    <div class="w-full flex flex-col md:flex-row gap-x-8 mt-4 px-1">
      <div class="w-full">
        <div class="mt-4 gap-2">
          <div class="md:mt-0 flex flex-col w-full space-y-2">
            <div class="flex gap-x-1">
              <Icon
                name="mdi:account"
                size="16"
                class="text-slate-500 my-auto"
              />
              <InputLabel title="Full Name as per NRIC" />
            </div>
            <InputText name="email" />
          </div>
          <div class="flex flex-col w-full space-y-2">
            <div class="flex gap-x-1">
              <Icon
                name="mdi:card-account-details"
                size="16"
                class="text-slate-500 my-auto"
              />
              <InputLabel title="NRIC" />
            </div>
            <InputText name="email" />
          </div>
          <div class="flex flex-col w-full mb-2">
            <div class="flex flex-row gap-x-4">
              <div class="w-full space-y-2">
                <div class="flex gap-x-1">
                  <Icon
                    name="mdi:phone"
                    size="16"
                    class="text-slate-500 my-auto"
                  />
                  <InputLabel title="Contact Number" />
                </div>
                <InputText name="email" />
              </div>
              <div class="w-full space-y-2">
                <div class="flex gap-x-1">
                  <Icon
                    name="mdi:email-newsletter"
                    size="16"
                    class="text-slate-500 my-auto"
                  />
                  <InputLabel title="Email" />
                </div>
                <InputText name="email" />
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full space-y-2">
            <div class="flex gap-x-1">
              <Icon
                name="mdi:map-marker"
                size="16"
                class="text-slate-500 my-auto"
              />
              <InputLabel title="Home Address" />
            </div>
            <InputText name="email" />
          </div>
          <div class="flex flex-col w-full mb-2">
            <div class="flex flex-row gap-x-4">
              <div class="w-3/5 space-y-2">
                <div class="flex gap-x-1">
                  <Icon
                    name="ph:city"
                    size="16"
                    class="text-slate-500 my-auto"
                  />
                  <InputLabel title="City" />
                </div>
                <InputText name="email" />
              </div>
              <div class="w-2/5 space-y-2">
                <div class="flex gap-x-1">
                  <Icon
                    name="ph:city"
                    size="16"
                    class="text-slate-500 my-auto"
                  />
                  <InputLabel title="Postcode" />
                </div>
                <InputText name="email" />
              </div>
            </div>
          </div>
          <div class="flex flex-col w-full mb-2">
            <div class="flex flex-row gap-x-4">
              <div class="w-full space-y-2">
                <div class="flex gap-x-1">
                  <Icon
                    name="mdi:office-building"
                    size="16"
                    class="text-slate-500 my-auto"
                  />
                  <InputLabel title="Occupation" />
                </div>
                <InputText name="email" />
              </div>
              <div class="w-full space-y-2">
                <div class="flex gap-x-1">
                  <Icon
                    name="mdi:school"
                    size="16"
                    class="text-slate-500 my-auto"
                  />
                  <InputLabel title="University" />
                </div>
                <InputText name="email" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full">
        <div class="mt-4 gap-2">
          <div class="flex flex-col w-full space-y-2">
            <div class="flex flex-col gap-x-1">
              <InputLabel
                title="How do you know about Great Heart Charity Association?"
              />
              <label class="flex items-center text-slate-600 mt-2">
                <input type="radio" name="finding" />
              <span class="ml-2">Website</span>
            </label>
            <label class="flex items-center text-slate-600 mt-1">
                <input type="radio" name="finding" />
              <span class="ml-2">Newspaper</span>
            </label>
            <label class="flex items-center text-slate-600 mt-1">
                <input type="radio" name="finding" />
              <span class="ml-2">Friends or families</span>
            </label>
            <label class="flex items-center text-slate-600 mt-1 mb-2">
                <input type="radio" name="finding" />
              <span class="ml-2">Social Media</span>
            </label>
            </div>
          </div>
          <div class="flex flex-col w-full space-y-2">
            <div class="flex gap-x-1">
              <Icon
                name="ant-design:project-filled"
                size="16"
                class="text-slate-500 my-auto"
              />
              <InputLabel title="Project Name" />
            </div>
            <InputText name="email" />
          </div>
          <div class="flex flex-col w-full space-y-2">
            <div class="flex gap-x-1">
              <Icon name="mdi:file" size="16" class="text-slate-500 my-auto" />
              <InputLabel
                title="Attach proposal (accepted format is PDF only)"
              />
            </div>
            <InputText name="email" />
          </div>
          <div class="mt-4">
            <button
              type="submit"
              class="bg-blue-500 w-full dark:bg-blue-700 dark:hover:bg-blue-800 hover:bg-blue-700 text-white text-xs uppercase tracking-widest py-2 px-4 rounded transform transition-transform active:scale-95"
            >
              <span v-if="!loading">Submit</span>
              <Icon
                v-else
                name="line-md:loading-loop"
                class="w-4 h-4 mx-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "auth",
});

const loading = ref(false);
</script>

<style></style>
