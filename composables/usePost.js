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
        const data = response.data.data
        userStore.allPosts = [...userStore.allPosts, ...data]
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
        const data = response.data.data
        userStore.allArticles = [...userStore.allArticles, ...data]
        userStore.artCurrentPage = response.data.meta.current_page
        userStore.artLastPage = response.data.meta.last_page
        return 
    }catch(error){
        console.error(error)
    }finally{
        userStore.loadArticle = false
    }
}
export const getArticleById = async (id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `vendor/articles/${id}/show_article`,
            method: 'get'
        });
        return res.data.data
    }catch(error){
        console.error(error)
    }
}
export const getPostById = async (id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `vendor/posts/${id}/show_post`,
            method: 'get'
        });
        return res.data.data
    }catch(error){
        console.error(error)
    }
}