import { removeLocalStorageItem } from '~/utils/storage';
import { useUserStore } from "~/stores/userStore"; 

export default defineNuxtPlugin(nuxtApp => {
    function handleSessionExpired() {
        removeLocalStorageItem('token'); 
        const userStore = useUserStore();
        userStore.isLoggedIn = false;
        alert("Your login session has expired");
        nuxtApp.$router.push('/user/login'); 
    }
  
    window.addEventListener('userSessionExpired', handleSessionExpired);
  
    window.addEventListener('beforeunload', () => {
        window.removeEventListener('userSessionExpired', handleSessionExpired);
    });
});
