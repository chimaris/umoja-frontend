// userStore.js

import { defineStore } from 'pinia';
import axios from 'axios';
import { useApi } from '~/composables/useApi';


export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loading: false,
    error: '',
    loginError: '',
    signUpError: '',
    isLoggedIn: false,
    userToken: null,
  }),
  persist: {
    enabled: true,
    storage: persistedState.localStorage,
  },
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn
  },
  actions: {   
    async login({email, password}) {
      const api = useApi()
      this.loading = true;
      try {
          const response = await api({
          url: 'auth/customer_login', 
          method: 'post',
          data: { email, password}
        });
       
        this.loginError = '';
        const {access_token} = response.data;
        this.userToken = access_token
        this.isLoggedIn = true;
        return true;
      } catch(error) {
          if (error.response) {
            this.loginError = error.response.data.message || 'An error occurred during signup.';
          } else if (error.request) {
            this.loginError = 'No response received from server. Please try again later.';
          } else {
            this.loginError = 'An error occurred. Please try again later.';
          }
          return false;
      } finally {
        this.loading = false;
      }
    },
    async signup({first_name, last_name, email, password, password_confirmation, terms_accepted}) {
      this.loading = true;
      this.signUpError = '';
      const api = useApi()
      try {
        const response = await api({
          url: 'auth/register_customer', 
          method: 'post',
          data: {first_name, last_name, email, password, password_confirmation,terms_accepted}
        });
        this.signUpError = '';
        const {access_token} = response.data;
        this.userToken = access_token
        this.isLoggedIn = true
        return true
      } catch (error) {
        if (error.response) {
          this.signUpError = error.response.data.message || 'An error occurred during signup.';
        } else if (error.request) {
          this.signUpError = 'No response received from server. Please try again later.';
        } else {
          this.signUpError = 'An error occurred. Please try again later.';
        }
        return false;
      }finally {
        this.loading = false;
      }  
    },
    async forgotPassword(email) {
      this.loading = true;
      const api = useApi()
      try {
        const response = await api({
          url: 'auth/forget_customer_password', 
          method: 'post',
          data: {email}
        });
        return true
      } catch (error) {
        if (error.response) {
          this.error = error.response.data.message || 'An error occurred during forgot password request.';
        } else if (error.request) {
          this.error = 'No response received from server. Please try again later.';
        } else {
          this.error = 'An error occurred. Please try again later.';
        }
        return false;
      }finally {
        this.loading = false;
      } 
    },
    async socialLogin(provider) {
      const api = useApi()
      try {
        const response = await api({
          url: `auth/${provider}/redirect`,
          method: 'get'
        });
        return response;
      }catch(error) {
        console.error(error)
      }
    },
    async socialLoginCallBack(provider, code) {
      const api = useApi()
      try {
        const response = await api({
          url :`auth/${provider}/callback?code=${code}`,
          method: 'GET'
        });
        const {access_token} = response.data;
        this.userToken = access_token
        this.isLoggedIn = true
        console.log(access_token, response)
        return true;
      }catch(error) {
        console.error(error)
      }
    },
    logout() {
        this.isLoggedIn = false,
        this.userToken = null
        return true 
    }
  }
});
