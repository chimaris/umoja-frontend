// userStore.js

import { defineStore } from 'pinia';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loginError: '',
    signUpError: '',
    user: getLocalStorageItem("user", []),
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' ,
    users: JSON.parse(localStorage.getItem('users')) || [] 
  }),
  getters: {
    getUser: (state) => state.user,
    getIsLoggedIn: (state) => state.isLoggedIn
  },
  actions: {
    login({ email, password }) {
      // Simulate a login process
      return new Promise((resolve) => {
        setTimeout(() => {
          const user = this.users.find((user) => user.email === email && user.password === password);
          if (user) {
            this.loginError = '';
            this.user = user;
            setLocalStorageItem("user", this.user)
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
            resolve(true); // Login successful
          } else {
            this.loginError = 'Invalid email or password';
            resolve(false); // Login failed
          }
        }, 500); // Simulate a delay (e.g., API request)
      });
    },    
    signup({ first_name, last_name, email, password, dateRegistered}) {
      // Simulate a signup process
      return new Promise((resolve) => {
        setTimeout(() => {
          const existingUser = this.users.find(user => user.email === email);
          if (existingUser) {
            this.signUpError = "Email Already exists";
            resolve(false); // Signup failed
          } else {
            this.signUpError = "";
            this.users.push({ first_name, last_name, email, password, dateRegistered });
            this.user = { first_name, last_name, email, password, dateRegistered };
            setLocalStorageItem("user", this.user)
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('users', JSON.stringify(this.users));
            resolve(true); // Signup successful
          }
        }, 500); // Simulate a delay (e.g., API request)
      });
    },
    logout() {
      localStorage.removeItem('isLoggedIn');
      this.user = removeLocalStorageItem("user");
      this.isLoggedIn = false;
    }
  }
});
