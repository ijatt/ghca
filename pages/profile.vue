<template>
  <div class="w-full">
    <h1 class="text-xl font-semibold text-slate-500 dark:text-slate-300">
      Profile
    </h1>
    <div class="w-full flex justify-center">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        class="w-24 h-24 rounded-full"
        alt=""
      />
    </div>
    <form @submit.prevent="updateProfile">
      <div class="mt-4 w-full flex justify-center">
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
            <InputText name="name" />
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
            <InputText name="icNumber" />
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
                <InputText name="contactNumber" />
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
              <InputLabel title="Address" />
            </div>
            <InputText name="address" />
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
                <InputText name="city" />
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
                <InputText name="postcode" />
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
                <InputText name="occupation" />
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
                <InputText name="universityName" />
              </div>
            </div>
          </div>
          <div class="w-full flex justify-end mt-2">
            <button
              type="submit"
              class="bg-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 hover:bg-blue-700 text-white text-xs uppercase tracking-widest py-2 px-4 rounded transform transition-transform active:scale-95"
            >
              <span v-if="!loading">Save</span>
              <Icon
                v-else
                name="line-md:loading-loop"
                class="w-4 h-4 mx-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import * as yup from "yup";

definePageMeta({
  layout: "auth",
  middleware: "auth",
});

const user = ref();

onMounted(async () => {
  user.value = await $fetch("api/user", {
    method: "GET",
    headers: {
      authorization: `Bearer ${useTokenStore().accessToken}`,
    },
  });
});

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string(),
    icNumber: yup.string(),
    contactNumber: yup.string(),
    email: yup.string(),
    address: yup.string(),
    city: yup.string(),
    postcode: yup.string(),
    occupation: yup.string(),
    universityName: yup.string(),
    id: yup.number(),
  }),
  initialValues: {
    name: userStore().user?.applicant?.name,
    icNumber: userStore().user?.applicant?.icNumber,
    email: userStore().user?.email,
    contactNumber: userStore().user?.applicant?.contactNumber,
    address: userStore().user?.applicant?.address,
    city: userStore().user?.applicant?.city,
    postcode: userStore().user?.applicant?.postcode,
    occupation: userStore().user?.applicant?.occupation,
    universityName: userStore().user?.applicant?.universityName,
    id: userStore().user?.id,
  },
});

const loading = ref(false);
const toast = useToast();
const updateProfile = handleSubmit(async (data) => {
  loading.value = true;
  await $fetch("/api/user/update", {
    body: data,
    method: "POST",
  }).then(async () => {
    user.value = await $fetch("/api/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${useTokenStore().accessToken}`,
      },
    });
    userStore().setUser(user.value);
    toast.add({
      id: "update-profile-success",
      title: "Update Profile Success",
      description: "You have successfully updated your profile.",
    });
    loading.value = false;
  });
});
</script>

<style></style>
