<template>
  <div class="w-full">
    <h1 class="text-xl font-semibold text-slate-500 dark:text-slate-300">
      Profile
    </h1>
    <div class="mt-8 w-full flex justify-center">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        class="w-24 h-24 rounded-full"
        alt=""
      />
    </div>
    <div class="mt-8 w-full flex justify-center">
      <div class="w-2/5">
        <div class="flex flex-col w-full space-y-2">
            <div class="flex gap-x-1">
              <Icon
                name="mdi:account"
                size="16"
                class="text-slate-500 my-auto"
              />
              <InputLabel title="Full Name" />
            </div>
            <InputText name="fullName" />
          </div>
          <div class="flex flex-col w-full space-y-2">
            <div class="flex gap-x-1">
              <Icon
                name="mdi:email"
                size="16"
                class="text-slate-500 my-auto"
              />
              <InputLabel title="Email" />
            </div>
            <InputText name="email" />
          </div>
          <div class="flex flex-col w-full space-y-2">
            <div class="flex gap-x-1">
              <Icon
                name="mdi:phone"
                size="16"
                class="text-slate-500 my-auto"
              />
              <InputLabel title="Phone" />
            </div>
            <InputText name="phone" />
          </div>
          <!-- <div class="flex flex-col w-full space-y-2">
            <div class="flex gap-x-1">
              <Icon
                name="mdi:account"
                size="16"
                class="text-slate-500 my-auto"
              />
              <InputLabel title="Full Name" />
            </div>
            <InputText name="fullName" />
          </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import * as yup from 'yup'

definePageMeta({
  layout: "auth",
});

const user = ref()

onMounted( async () => {
  user.value = await $fetch("api/user", {
    method: "GET",
    headers: {
      authorization: `Bearer ${useTokenStore().accessToken}`,
    },
  });
})

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    fullName: yup.string()
  }),
  initialValues: {
    fullName: userStore().user?.applicant?.name,
    email: userStore().user?.email,
    phone: userStore().user?.applicant?.contactNumber
  }
})
</script>

<style></style>
