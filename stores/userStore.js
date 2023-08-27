// userStore.js

import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: null,
    isLoggedIn: false,
    users: [
        {
            email: 'demo@gmail.com',
            password: '123456'
        }
    ] // Array to store signed up users
  }),
  getters: {
    getUser: (state) => state.user,
    getIsLoggedIn: (state) => state.isLoggedIn
  },
  actions: {
    login({ email, password }) {
      // Simulate a login process
      const user = this.users.find((user) => user.email === email && user.password === password);
      if (user) {
        this.user = user;
        this.isLoggedIn = true;
        return true;
      }
      return false;
    },
    signup({ email, password }) {
      // Simulate a signup process
      // Store user information in this.user and set isLoggedIn to true
      this.users.push({ email, password });
      this.user = { email };
      this.isLoggedIn = true;
    },
    logout() {
      this.user = null;
      this.isLoggedIn = false;
    }
  }
});
