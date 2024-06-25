// userStore.js

import { defineStore } from 'pinia';
import axios from 'axios';
import { useApi } from '~/composables/useApi';
import {getUser} from '~/composables/useUser';


export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    loading: false,
    userCountry: null,
    allPosts: [],
    allArticles: [],
    postPage: 1,
    articlePage: 1,
    currentPage: null,
    lastPage: null,
    loadPost: false,
    loadArticle: false,
    artCurrentPage: null,
    artLastPage: null,
    error: '',
    isLoggedIn: false,
    userToken: null,
    user: null
  }),
  persist: {
    enabled: true,
    storage: persistedState.localStorage,
  },
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
    getCountry: (state) => state.country,
  },
  actions: {  
    setCountry(country) {
      this.userCountry = country;
  }, 
  async login({ email, password }) {
    const api = useApi();
    this.loading = true;
    try {
      const response = await api({
        url: 'auth/customer_login', 
        method: 'post',
        data: { email, password }
      });
     
      const { access_token, user_id } = response.data;
      this.userToken = access_token;
      this.isLoggedIn = true;
      this.user = await getUser(user_id); // Assuming getUser is a function that fetches user details
      return { success: true };
    } catch (error) {
      let errorMessage = 'An error occurred. Please try again later.';
      if (error.response) {
        errorMessage = error.response.data.message || 'An error occurred during login.';
      } else if (error.request) {
        errorMessage = 'No response received from server. Please try again later.';
      }
      return { success: false, message: errorMessage };
    } finally {
      this.loading = false;
    }
  },
    async signup({first_name, last_name, email, password, password_confirmation, terms_accepted}) {
      this.loading = true;
      const api = useApi()
      try {
        const response = await api({
          url: 'auth/register_customer', 
          method: 'post',
          data: {first_name, last_name, email, password, password_confirmation,terms_accepted}
        });
        const {access_token} = response.data;
        this.user = await getUser(response.data.user_id)
        this.userToken = access_token
        this.isLoggedIn = true
        return {success: true}
      } catch (error) {
        let errorMessage = 'An error occurred. Please try again later.';
        if (error.response) {
          errorMessage= error.response.data.message || 'An error occurred during signup.';
        } else if (error.request) {
          errorMessage = 'No response received from server. Please try again later.';
        } 
        return {success: false, message: errorMessage}
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
        this.user = await getUser(response.data.user.user_id)
        return true;
      }catch(error) {
        console.error(error)
      }
    },
    logout() {
        this.isLoggedIn = false,
        this.userToken = null
        this.user = null
        return true 
    }
  }
});
