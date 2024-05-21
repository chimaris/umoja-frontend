import { useApi } from "./useApi";
import { vendorUseApi } from "./vendorApi";
import { fetchAllPosts } from "./usePost";

export const likePost = async (id, role) => {
    let api = useApi()
    if (role && role == "vendor"){
        api = vendorUseApi()
    }
    try{
        const response = await api ({
            url: `vendor/posts/${id}/like`,
            method: 'post'
        });
        await fetchAllPosts()
        return true
    }catch(error){
        console.error("an error occured", error)
        return false
    }
}
export const unlikePost = async (id, role) => {
    let api = useApi()
    if (role && role == "vendor"){
        api = vendorUseApi()
    }
    try{
        const response = await api ({
            url: `vendor/posts/${id}/unlike`,
            method: 'post'
        });
        await fetchAllPosts()
        return true
    }catch(error){
        console.error("an error occured", error)
        return false
    }
}

export const hasLiked = async (id, role) => {
    let api = useApi()
    if (role && role == "vendor"){
        api = vendorUseApi()
    }
    try{
        const res = await api ({
            url: `vendor/posts/${id}/has_liked`
        });
        return res.data.has_liked
    }catch(error){
        console.error(error)
    }
}