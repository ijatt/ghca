<template>
  <div class="w-[240px] sm:w-[360px]">
    <h1
      class="text-xl sm:text-2xl font-bold text-slate-500 dark:text-slate-300 text-center"
    >
      Login
    </h1>    
    <form @submit.prevent="login" enctype="multipart/form-data">
      <div class="mt-4 gap-2">
        <div class="mt-4 md:mt-0 flex flex-col w-full space-y-2">
          <div class="flex gap-x-1">
            <Icon name="mdi:email" size="16" class="text-slate-500 my-auto" />
            <InputLabel title="Email" />
          </div>
          <InputText name="email" />
        </div>
        <div class="flex flex-col w-full space-y-2 mt-4">
          <div class="flex gap-x-1">
            <Icon name="mdi:lock" size="16" class="text-slate-500 my-auto" />
            <InputLabel title="Password" />
          </div>
          <InputPassword name="password" />
        </div>
      </div>
      <div class="flex w-full justify-end mt-2">
        <NuxtLink
          to="/"
          class="text-xs text-slate-500 dark:text-slate-300 cursor-pointer hover:underline"
        >
          Forgot password?
        </NuxtLink>
      </div>
      <div class="mt-4">
        <button
          type="submit"
          class="bg-blue-500 w-full dark:bg-blue-700 dark:hover:bg-blue-800 hover:bg-blue-700 text-white text-xs uppercase tracking-widest py-2 px-4 rounded transform transition-transform active:scale-95"
        >
          <span v-if="!loading">Login</span>
          <Icon v-else name="line-md:loading-loop" class="w-4 h-4 mx-auto" />
        </button>
      </div>
      <div class="mt-4">
        <p class="text-sm text-center text-slate-500 dark:text-slate-300 cursor-pointer">
          Don't have an account?
          <NuxtLink to="/register" class="font-semibold hover:underline">
            Register
          </NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import * as yup from "yup";
const loading = ref(false)

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not a valid email."),
    password: yup.string().required("Password is required"),
  }),
});

const toast = useToast()

const login = handleSubmit(async (data) => {
  loading.value = true;
  await $fetch("/api/user/sign-in", {
    body: data,
    method: 'POST'
  }).then(async (res) => {    
    await navigateTo('/');
    toast.add({
      id: "login-success",
      title: "Login Success",
      description: `Welcome back, ${res}!`,
      color: "green",
    })
  })
  .catch((error) => 
    toast.add({
      id: "login-error",
      title: "Login Error",
      description: error.statusMessage,
      color: "red",
    })
  ).finally(() => loading.value = false);;
});
</script>

<style></style>
