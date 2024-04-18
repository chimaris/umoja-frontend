import {defineStore} from 'pinia';
import { useVendorStore } from './vendorStore';




export const useVendorProfileStore = defineStore('vendor-profile', {
    state: () => ({
        
    }), 
    actions: {
        addBusinessInfo(businessInfo) {
            const vendorStore = useVendorStore();
            const vendor = vendorStore.getVendor
            vendor.businessInfo = businessInfo;
            vendorStore.saveVendorProfileInfo(vendor);
        },
        addContactInfo(contactInfo) {
            const vendorStore = useVendorStore();
            const vendor = vendorStore.getVendor
            vendor.contactInfo = contactInfo;
            vendorStore.saveVendorProfileInfo(vendor);
        },
        addBankInfo(bankInfo) {
            const vendorStore = useVendorStore();
            const vendor = vendorStore.getVendor
            vendor.bankInfo = bankInfo;
            vendorStore.saveVendorProfileInfo(vendor);
        },
        
    }
})