import { useUserStore } from "~/stores/userStore"; // Adjust the import path

export default defineNuxtRouteMiddleware((to, from) => {
	const userStore = useUserStore();
	if (!userStore.isLoggedIn) {
		return navigateTo("/user/login");
	}
});
