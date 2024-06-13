<template>
  <div class="w-[240px] sm:w-[360px]">
    <h1
      class="sm:text-2xl font-bold text-slate-500 dark:text-slate-300 text-center"
    >
      Create a new account
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
            <Icon name="mdi:account" size="16" class="text-slate-500 my-auto" />
            <InputLabel title="Full Name" />
          </div>
          <InputText name="fullName" />
        </div>
        <div class="flex flex-col w-full space-y-2 mt-4">
          <div class="flex gap-x-1">
            <Icon name="mdi:lock" size="16" class="text-slate-500 my-auto" />
            <InputLabel title="Password" />
          </div>
          <InputPassword name="password" />
        </div>
        <div class="flex flex-col w-full space-y-2 mt-4">
          <div class="flex gap-x-1">
            <Icon name="mdi:lock" size="16" class="text-slate-500 my-auto" />
            <InputLabel title="Confirm Password" />
          </div>
          <InputPassword name="confirmPassword" />
        </div>
      </div>
      <div class="mt-4">
        <button
          type="submit"
          class="bg-blue-500 w-full dark:bg-blue-700 dark:hover:bg-blue-800 hover:bg-blue-700 text-white text-xs uppercase tracking-widest py-2 px-4 rounded transform transition-transform active:scale-95"
        >
          <span v-if="!loading">Sign Up</span>
          <Icon v-else name="line-md:loading-loop" class="w-4 h-4 mx-auto" />
        </button>
      </div>
      <div class="mt-4">
        <p
          class="text-sm text-center text-slate-500 dark:text-slate-300 cursor-pointer"
        >
          Already have an account?
          <NuxtLink to="/auth" class="font-semibold hover:underline">
            Login
          </NuxtLink>
        </p>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import * as yup from "yup";
const loading = ref(false);

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Email is not a valid email."),
    fullName: yup.string().required('Full name is required'),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
      .matches(/\d/, "Password must contain at least one number")
      .matches(
        /[@$!%*?&._]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
  }),
});

const toast = useToast()

const login = handleSubmit(async (data) => {
  loading.value = true
    await $fetch("/api/user/sign-up", {
      method: "POST",
      body: data
    })
    .then(async () => {
      await navigateTo("/auth");
      toast.add({
        id: "sign-up-success",
        title: "Sign Up Success",
        description: "You have successfully signed up. Please sign in to continue.",
        color: "green",
      });
    })
    .catch((error) => 
      toast.add({
        id: "sign-up-error",
        title: "Sign Up Error",
        description: error.statusMessage,
        color: "red",
      })
    ).finally(() => loading.value = false);
});
</script>

<style></style>
