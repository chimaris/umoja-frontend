// stores/vendorStore.js
import { defineStore } from 'pinia';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

export const useVendorStore = defineStore('vendor', {
  state: () => ({
    vendor: getLocalStorageItem("vendor", []),
    loginError: "",
    vendorIsLoggedIn: getLocalStorageItem("vendorIsLoggedIn", false),
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
      // Add other sections as needed
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
    saveVendor(vendorId, dateRegistered) {
      const emailExists = this.vendors.some(vendor => vendor.ownerInfo.email === this.ownerInfo.email);
      if (emailExists) {
        throw new Error("Email already exists")
      } else {
          const vendorData = {
            vendorId,
            dateRegistered,
            companyInfo: this.companyInfo,
            ownerInfo: this.ownerInfo,
            businessDocumentation: this.businessDocumentation
          };
          this.vendors.push(vendorData);
          setLocalStorageItem('vendors', this.vendors)
      } 
    },
    setVendorPassword(vendorId, password) {
      const vendorIndex = this.vendors.findIndex(vendor => vendor.vendorId == vendorId);
      if (vendorIndex !== -1) {
        this.vendors[vendorIndex].password = password;
        // Persist the updated vendors array to localStorage
        setLocalStorageItem('vendors', this.vendors);
      }
    },
    saveVendorProfileInfo(vendor) {
      const vendorIndex = this.vendors.findIndex(v => v.vendorId === vendor.vendorId);
      if (vendorIndex !== -1) {
          this.vendors[vendorIndex] = vendor;
          setLocalStorageItem("vendor", this.vendor)
          setLocalStorageItem('vendors', this.vendors);
      }
  },
    login({ email, password }) {
      // Simulate a login process
      return new Promise((resolve) => {
        setTimeout(() => {
          const vendor = this.vendors.find((vendor) => vendor.ownerInfo.email === email && vendor.password === password);
          if (vendor) {
            this.loginError = '';
            this.vendor = vendor;
            setLocalStorageItem("vendor", this.vendor)
            this.vendorIsLoggedIn = true;
            setLocalStorageItem('vendorIsLoggedIn', true)
            resolve(true); // Login successful
          } else {
            this.loginError = 'Invalid email or password';
            resolve(false); // Login failed
          }
        }, 500); // Simulate a delay (e.g., API request)
      });
    },
    logout() {
      removeLocalStorageItem('vendorIsLoggedIn');
      this.vendor = null;
      this.vendorIsLoggedIn = false;
    }
  }
});