// stores/vendorStore.js
import { defineStore } from 'pinia';
import {vendorUseApi} from '~/composables/vendorApi'
import axios from 'axios';


export const useVendorStore = defineStore('vendor', {
  state: () => ({
    vendor: [],
    sideBtn: true,
    selectedItem: 'Homepage',
    vendorCleared: false,
    showRegistrationModal: false,
    loading: false,
    loginError: "",
    signupError: "",
    resendError: "",
    verifyError: "",
    verified:  "",
    error: "",
    vendorIsLoggedIn: false,
    vendorEmail: "",
    vendorToken: null,
  }),
  persist: {
    enabled: true,
    storage: persistedState.localStorage,
  },
  getters: {
    getVendor: (state) => state.vendor,
    getVendorIsLoggedIn: (state) => state.vendorIsLoggedIn
  },
  actions: {
 
    async signupVendor({first_name, last_name, email, password, password_confirmation, terms_accepted}){
      this.loading = true;
      const api = vendorUseApi()
      try{
        const response = await api ({
          url: 'auth/register_vendor',
          method: 'POST',
          data: {first_name, last_name, email, password, password_confirmation, terms_accepted}
        });
        this.signupError = '';
        this.vendorEmail = email;
        const {access_token} = response.data;
        this.vendorToken = access_token
        return true
      }catch (error) {
        if (error.response) {
          this.signUpError = error.response.data.message || 'An error occurred during signup.';
        } else if (error.request) {
          this.signUpError = 'No response received from server. Please try again later.';
        } else {
          this.signUpError = 'An error occurred. Please try again later.';
        }
        return false;
      }finally{
        this.loading = false
      }
    },
    async verifyVendor(otp){
      this.loading = true
      this.verifyError = ""
      const api = vendorUseApi()
      try{
        const response = await api({
          url: 'auth/verify',
          method: 'POST',
          data: {
            email: this.vendorEmail,
            verification_code: otp
          }
        });
        this.verified = true;
        this.vendorIsLoggedIn = true;
        this.verifyError = ""
        const id = response.data.user_id
        await this.getUser(id)
        return true
      }catch(error){
        if (error.response) {
          this.verifyError = error.response.data.message || 'An error occurred';
        } else if (error.request) {
          this.verifyError = 'No response received from server. Please try again later.';
        } else {
          this.verifyError = 'An error occurred. Please try again later.';
        }
        return false
      }finally{
        this.loading = false 
      }
    },
    async resendOtp(){
      this.resendError = ""
      const api = vendorUseApi()
      try{
        await api({
          url: 'auth/resend_code',
          method: 'POST',
          data: {email: this.vendorEmail}
        });
        this.resendError = ""
        return true
      }catch(error){
        if (error.response) {
          this.resendError = error.response.data.message || 'An error occurred';
        } else if (error.request) {
          this.resendError = 'No response received from server. Please try again later.';
        } else {
          this.resendError = 'An error occurred. Please try again later.';
        }
        return false
      }
    },
    async login({email, password}) {
      this.loading = true;
      const api = vendorUseApi()
      try {
          const response = await api({
          url: 'auth/vendor_login', 
          method: 'post',
          data: { email, password}
        });
        const {access_token} = response.data;
        this.vendorToken = access_token
        const id = response.data.user_id
        await this.getUser(id)
        this.verified = true;
        this.vendorIsLoggedIn = true;
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

    async getUser(id){
      const api = vendorUseApi()
      const profileResponse = await api ({
        url: `users/${id}`,
        method: 'get',
        headers: {
          Authorization: `Bearer ${this.vendorToken}`
        }
      });
      this.vendor = profileResponse.data.data;
      return 
    },
    async socialLogin(provider){
      const api = vendorUseApi()
      try{
        const response = await api ({
          url: `auth/${provider}/vendor/redirect`,
          method: 'GET'
        });
        console.log(response)
        return response 
      }catch(error) {
        console.error(error)
      }
    },
    async socialLoginCallBack(provider) {
      const api = vendorUseApi()
      try {
        const response = await api({
          url :`auth/${provider}/vendor/callback?code=${code}`,
          method: 'GET'
        });
        const {access_token} = response.data;
        this.vendorToken = access_token
        this.vendorIsLoggedIn = true
        this.verified = true;
        console.log(response)
        return true;
      }catch(error) {
        console.error(error)
      }
    },
    async forgotPassword(email) {
      this.loading = true;
      const api = vendorUseApi()
      try {
        const response = await api({
          url: 'auth/forget_vendor_password', 
          method: 'post',
          data: {email}
        });
        this.error = ""
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
    async registerVendor(data){
      const api = vendorUseApi()
        const response = await api ({
          url: `vendor/setup/${this.vendor.id}`,
          method: 'POST',
          data: data,
          headers: {
            Authorization: `Bearer ${this.vendorToken}`
          }
        });
        await this.getUser(this.vendor.id)
        return response
    },
    logout() {
        this.vendor = []
        this.vendorIsLoggedIn = false
        this.vendorEmail = ""
        this.vendorToken = null
        return true
      }

  }
});