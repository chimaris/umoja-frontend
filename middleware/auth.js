import { useUserStore } from '@/store/user'; // Adjust the import path

export default function ({ redirect }) {
  const userStore = useUserStore();

  if (!userStore.isLoggedIn) {
    return redirect('/login'); // Redirect to login page if not authenticated
  }
}