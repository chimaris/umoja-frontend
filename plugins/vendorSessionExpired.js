
import { useVendorStore } from '~/stores/vendorStore';

export default defineNuxtPlugin(nuxtApp => {
    const vendorStore = useVendorStore();
    

    function handleSessionExpired() {
        localStorage.removeItem('vendorToken')
        vendorStore.vendorIsLoggedIn = false;
        nuxtApp.$router.push('/vendor/login'); 
    }
  
    window.addEventListener('sessionExpired', handleSessionExpired);
  
    window.addEventListener('beforeunload', () => {
        window.removeEventListener('sessionExpired', handleSessionExpired);
    });
});
