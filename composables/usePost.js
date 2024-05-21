import { useApi } from "./useApi";
import { useUserStore } from "~/stores/userStore";

export const fetchAllPosts = async (page) => {
    const api = useApi()
    const userStore = useUserStore()
    userStore.loadPost = true
    try{
        const response = await api({
            url: `allposts/?page=${page}`,
            method: 'GET'
        });
        userStore.allPosts = response.data.data
        userStore.currentPage = response.data.meta.current_page
        userStore.lastPage = response.data.meta.last_page
        return 
    }catch(error){
        console.error(error)
    }finally{
        userStore.loadPost = false
    }
}
export const fetchAllArticle = async (page) => {
    const api = useApi()
    const userStore = useUserStore()
    userStore.loadArticle = true
    try{
        const response = await api({
            url: `allarticles/?page=${page}`,
            method: 'GET'
        });
        userStore.allArticles = response.data.data
        userStore.artCurrentPage = response.data.meta.current_page
        userStore.artLastPage = response.data.meta.last_page
        return 
    }catch(error){
        console.error(error)
    }finally{
        userStore.loadArticle = false
    }
}