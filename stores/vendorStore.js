// stores/vendorStore.js
import { defineStore } from 'pinia';
import {vendorUseApi} from '~/composables/vendorApi'
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

const api = vendorUseApi()
export const useVendorStore = defineStore('vendor', {
  state: () => ({
    vendor: getLocalStorageItem("vendor", []),
    vendorCleared: false,
    showRegistrationModal: false,
    loading: false,
    loginError: "",
    signupError: "",
    resendError: "",
    verifyError: "",
    verified:  localStorage.getItem("verified") == "true",
    error: "",
    vendorIsLoggedIn: false,
    vendorEmail: localStorage.getItem("vendor-email", ""),
    vendorToken: null,
    companyInfo: {},
    ownerInfo: {},
    businessDocumentation: {},
    isCompanyInfoComplete: false,
    isOwnerInfoComplete: false,
    isBusinessDocumentationComplete: false,
  }),
  getters: {
    getVendor: (state) => state.vendor,
    getVendorIsLoggedIn: (state) => state.vendorIsLoggedIn
  },
  actions: {
    initializeStore() {
      if (process.client) {
        this.vendorToken = localStorage.getItem("vendorToken") || null;
        this.vendorIsLoggedIn = !!this.vendorToken;
       
      }
    },
    markSectionComplete(section) {
      this[section] = true;
    },
    areAllFormsSubmitted() {
      return this.isCompanyInfoComplete && this.isOwnerInfoComplete && this.isBusinessDocumentationComplete;
    },
    setCompanyInfo(data) {
      this.companyInfo = data;
    },
    setOwnerInfo(data) {
      this.ownerInfo = data;
    },
    setBusinessDocumentation(data) {
      this.businessDocumentation = data;
    },
    async signupVendor({first_name, last_name, email, password, password_confirmation, terms_accepted}){
      this.loading = true;
      try{
        const response = await api ({
          url: 'auth/register_vendor',
          method: 'POST',
          data: {first_name, last_name, email, password, password_confirmation, terms_accepted}
        });
        this.signupError = '';
        this.vendorEmail = email;
        localStorage.setItem('vendor-email', this.vendorEmail)
        const {access_token} = response.data;
        localStorage.setItem('vendorToken', access_token);
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
      try{
        const response = await api({
          url: 'auth/verify',
          method: 'POST',
          data: {
            email: this.vendorEmail,
            verification_code: otp
          }
        });
        localStorage.setItem("verified", "true");
        this.verified = true;
        this.vendorIsLoggedIn = true;
        this.verifyError = ""
        const id = response.data.user_id
        const profileResponse = await api ({
          url: `users/${id}`,
          method: 'get',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('vendorToken')}`
          }
        });
        this.vendor = profileResponse.data.data;
        setLocalStorageItem('vendor', this.vendor)
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
      try {
          const response = await api({
          url: 'auth/vendor_login', 
          method: 'post',
          data: { email, password}
        });
        const {access_token} = response.data;
        localStorage.setItem('vendorToken', access_token);
        localStorage.setItem("verified", "true");
        this.verified = true;
        this.vendorIsLoggedIn = true;
        const id = response.data.user_id
          const profileResponse = await api ({
            url: `users/${id}`,
            method: 'get',
            headers: {
              Authorization: `Bearer ${localStorage.getItem('vendorToken')}`
            }
          });
          this.vendor = profileResponse.data.data;
          setLocalStorageItem('vendor', this.vendor)
        

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
    async socialLogin(provider){
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
      try {
        const response = await axios.get(`https://umoja-store.netlify.app/auth/${provider}/vendor/callback`) 
        const {access_token} = response.data;
        localStorage.setItem('vendorToken', access_token);
        this.vendorIsLoggedIn = true
        this.verified = true;
        localStorage.setItem('verified', "true")
        axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
        console.log(response)
        return true;
      }catch(error) {
        console.error(error)
      }
    },
    async forgotPassword(email) {
      this.loading = true;
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
    async logout() {
      try{
        await api({
        url: 'auth/logout',
        method: 'post'
        });
        localStorage.removeItem('vendorToken')
        this.vendorIsLoggedIn = false
        localStorage.removeItem('verified')
        this.verified = false
        return true
      }catch(error){
        console.error(error)
      }
       
    }
  }
});