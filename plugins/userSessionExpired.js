
import { useUserStore } from "~/stores/userStore"; 

export default defineNuxtPlugin(nuxtApp => {
    const userStore = useUserStore();

    userStore.initializeStore();

    function handleSessionExpired() {
        localStorage.removeItem('token');
        userStore.isLoggedIn = false;
        nuxtApp.$router.push('/user/login'); 
    }
  
    window.addEventListener('userSessionExpired', handleSessionExpired);
  
    window.addEventListener('beforeunload', () => {
        window.removeEventListener('userSessionExpired', handleSessionExpired);
    });
});
