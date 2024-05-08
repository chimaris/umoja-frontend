import { removeLocalStorageItem } from '~/utils/storage';
import { useVendorStore } from '~/stores/vendorStore';

export default defineNuxtPlugin(nuxtApp => {
    function handleSessionExpired() {
        removeLocalStorageItem('vendorToken'); 
        const vendorStore = useVendorStore();
        vendorStore.vendorIsLoggedIn = false;
        alert("Your login session has expired");
        nuxtApp.$router.push('/vendor/login'); 
    }
  
    window.addEventListener('sessionExpired', handleSessionExpired);
  
    window.addEventListener('beforeunload', () => {
        window.removeEventListener('sessionExpired', handleSessionExpired);
    });
});
