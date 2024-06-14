<template>
  <div class="w-full h-full overflow-y-auto">
    <h1 class="text-xl font-semibold text-slate-500 dark:text-slate-300">
      New Applications Form
    </h1>
    <p class="text-sm text-slate-500 italic">
      Please fill all fields in the form
    </p>
    <form @submit.prevent="submit">
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
                <InputLabel title="Home Address" />
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
                  <input
                    type="radio"
                    name="finding"
                    v-model="finding"
                    value="website"
                  />
                  <span class="ml-2">Website</span>
                </label>
                <label class="flex items-center text-slate-600 mt-1">
                  <input
                    type="radio"
                    name="finding"
                    v-model="finding"
                    value="newspaper"
                  />
                  <span class="ml-2">Newspaper</span>
                </label>
                <label class="flex items-center text-slate-600 mt-1">
                  <input
                    type="radio"
                    name="finding"
                    v-model="finding"
                    value="friendsFamily"
                  />
                  <span class="ml-2">Friends or families</span>
                </label>
                <label class="flex items-center text-slate-600 mt-1 mb-2">
                  <input
                    type="radio"
                    name="finding"
                    v-model="finding"
                    value="socialMedia"
                  />
                  <span class="ml-2">Social Media</span>
                </label>
                <span class="text-red-500 text-xs">{{ errorMessage }}</span>
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
              <InputText name="projectName" />
            </div>
            <div class="flex flex-col w-full space-y-2">
              <div class="flex gap-x-1">
                <Icon
                  name="mdi:file"
                  size="16"
                  class="text-slate-500 my-auto"
                />
                <InputLabel
                  title="Attach proposal (accepted format is PDF only)"
                />
              </div>
              <label for="small-file-input" class="sr-only">Choose file</label>
              <input
                type="file"
                ref="file"
                @change="hanldeChange"
                accept="application/pdf"
                name="small-file-input"
                id="small-file-input"
                class="block w-full border border-slate-300 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-white file:border-0 file:me-4 file:py-2 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400"
              />
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
    </form>
  </div>
</template>

<script lang="ts" setup>
import * as yup from "yup";

definePageMeta({
  layout: "auth",
});

const loading = ref(false);
const user = ref(userStore().user);

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    name: yup.string().required("Name is required."),
    contactNumber: yup.string().required("Contact number is required."),
    email: yup.string().required("Email is required."),
    address: yup.string().required("Address is required."),
    city: yup.string().required("City is required."),
    postcode: yup.string().required("Postcode is required."),
    occupation: yup.string().required("Occupation is required."),
    universityName: yup.string().required("University name is required."),
    finding: yup.string().required("Please select one."),
    icNumber: yup.string().required("IC number is required."),
    projectName: yup.string().required("Project name is required.")
  }),
  initialValues: {
    name: user.value?.applicant?.name,
    icNumber: user.value?.applicant?.icNumber,
    contactNumber: user.value?.applicant?.contactNumber,
    email: user.value?.email,
    address: user.value?.applicant?.address,
    city: user.value?.applicant?.city,
    postcode: user.value?.applicant?.postcode,
    occupation: user.value?.applicant?.occupation,
    universityName: user.value?.applicant?.universityName,
  },
});

const { value: finding, errorMessage } = useField("finding");
const file = ref<HTMLInputElement | null>();
const fileToUpload = ref<File>();

const hanldeChange = () => {
  const selectedFile = file.value?.files?.[0] as File;
  if (selectedFile) {
    fileToUpload.value = selectedFile;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
  }
};

const fileName = ref<string>("");
const toast = useToast();
const submit = handleSubmit(async (data) => {
  let fileNames
  if (!fileToUpload.value) {
    toastInfo("Please upload your file!", "")
    return
  } else {
    toastInfo("File uploading.", "")
    loading.value = true;
    fileNames = await uploadImage(fileToUpload.value, "proposal");
  }

  toastSuccess("File uploaded", "")

  await $fetch("/api/applications/create", {
    method: "POST",
    body: {
      ...data,
      fileNames,
      userID: userStore().user?.id
    }
  }).then(() => {
    toastSuccess("Application Success", "Your application has been sent and waiting for approval.")
    loading.value = false;
  })
  .catch((error) => toastError("Error Sending Application", error.statusMessage))
});
</script>

<style></style>
