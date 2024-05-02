// stores/vendorStore.js
import { defineStore } from 'pinia';
import {vendorUseApi} from '~/composables/vendorApi'
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

const api = vendorUseApi()
export const useVendorStore = defineStore('vendor', {
  state: () => ({
    vendor: getLocalStorageItem("vendor", []),
    loading: false,
    loginError: "",
    signupError: "",
    error: "",
    vendorIsLoggedIn: !!localStorage.getItem('vendorToken'),
    companyInfo: {},
    ownerInfo: {},
    businessDocumentation: {},
    vendors: getLocalStorageItem("vendors", []),
    isCompanyInfoComplete: false,
    isOwnerInfoComplete: false,
    isBusinessDocumentationComplete: false,
  }),
  getters: {
    getVendor: (state) => state.vendor,
    getVendorIsLoggedIn: (state) => state.vendorIsLoggedIn
  },
  actions: {
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
  //   saveVendorProfileInfo(vendor) {
  //     const vendorIndex = this.vendors.findIndex(v => v.vendorId === vendor.vendorId);
  //     if (vendorIndex !== -1) {
  //         this.vendors[vendorIndex] = vendor;
  //         setLocalStorageItem("vendor", this.vendor)
  //         setLocalStorageItem('vendors', this.vendors);
  //     }
  // },
  async registerVendor() {
    this.loading = true;
    this.signupError = ""
    try {
      const response = await api({
        url: 'auth/register_vendor',
        method: 'post',
        data: {
          first_name: this.ownerInfo.firstName,
          last_name: this.ownerInfo.lastName,
          email: this.ownerInfo.email,
          language: "",
          rep_country: this.companyInfo.selectedCountry,
          gender: this.ownerInfo.Gender,
          date_birth: this.ownerInfo.dateofBirth,
          country_name:this.companyInfo.selectedBusinessCountry,
          vendor_id_form_type: this.ownerInfo.formofId,
          vendor_id_number: this.ownerInfo.idNumber,
          phone_number: this.ownerInfo.phoneNumber,
          company: "",
          address: this.companyInfo.businessAddress,
          apartment_suite: "",
          state: this.companyInfo.selectedState,
          city: this.companyInfo.selectedCity,
          business_name: this.companyInfo.businessName,
          business_type: this.companyInfo.selectedCompanyCategory,
          business_website: this.companyInfo.businessWebsite,
          business_number: this.businessDocumentation.BN_Number,
          tax_id_number: this.businessDocumentation.Tax_ID,
          utility_bill_type: this.businessDocumentation.Utility_Bill,
          business_image: this.companyInfo.business_image,
          profile_photo: "",
          picture_vendor_id_number: this.ownerInfo.picture_vendor_id_number,
          utility_photo: this.businessDocumentation.utility_photo,
          business_number_photo: this.businessDocumentation.business_number_photo,
        }
      });
      this.signupError = "";
      return true
    } catch (error) {
        if (error.response) {
          this.signupError = error.response.data.message || 'An error occurred during registration.';
        } else if (error.request) {
          this.signupError = 'No response received from server. Please try again later.';
        } else {
          this.signupError  = 'An error occurred. Please try again later.';
        }
        return false;
    } finally {
      this.loading = false;
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
        
        const id = response.data.user_id
        if (id) {
          const profileResponse = await api ({
            url: `users/${id}`,
            method: 'get'
          });
          this.vendor = profileResponse.data.data;
          setLocalStorageItem('vendor', this.vendor)
        }
        
        

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
    logout() {
      removeLocalStorageItem('vendorIsLoggedIn');
      this.vendor = null;
      this.vendorIsLoggedIn = false;
    }
  }
});