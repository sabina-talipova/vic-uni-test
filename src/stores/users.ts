import type { Person } from '@/types'
import { REMOTE_URL } from '@/constants'
import { defineStore, acceptHMRUpdate } from 'pinia'

interface User extends Person {
  amount: number
}

export const useUserStore = defineStore('users', {
  state: () => ({
    rawUsers: [] as Person[],
    isLoading: false,
    error: null as string | null,
  }),
  getters: {
    users: (state) => state.rawUsers,
    length: (state) => state.rawUsers.length,
  },
  actions: {
    async getData(num: Number = 6) {
      this.isLoading = true
      this.error = null
      try {
        const response = await fetch(REMOTE_URL + `/?results=${num}`)
        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`)
        }

        const result = await response.json()
        if (result?.results) {
          const newUsers: Person[] = result.results.map(
            (user: any): Person => ({
              name: {
                title: user.name.title,
                first: user.name.first,
                last: user.name.last,
              },
              country: user.location.country,
              city: user.location.city,
              email: user.email,
              image: user.picture.large,
            }),
          )

          this.rawUsers.push(...newUsers)
        }
      } catch (error: any) {
        this.error = error.message
      } finally {
        this.isLoading = false
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
