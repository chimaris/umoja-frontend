
import { useVendorStore } from '~/stores/vendorStore';

export default defineNuxtPlugin(nuxtApp => {
    function handleSessionExpired() {

        localStorage.removeItem('vendorToken')
        const vendorStore = useVendorStore();
        vendorStore.vendorIsLoggedIn = false;
        nuxtApp.$router.push('/vendor/login'); 
    }
  
    window.addEventListener('sessionExpired', handleSessionExpired);
  
    window.addEventListener('beforeunload', () => {
        window.removeEventListener('sessionExpired', handleSessionExpired);
    });
});
