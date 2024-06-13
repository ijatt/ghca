import { defineStore } from 'pinia'

interface UserData {
  id: number,
}

export const userStore = defineStore("user", () => {
  const user = ref<UserData | null>(null)
  const setUser = (newUser: UserData) => {
    user.value = newUser
  }
  const clearUser = () => {
    user.value = null
  }
  return {
    user,
    setUser,
    clearUser
  };
}, {persist: true})