import { useApi } from "./useApi";

export const likePost = async (id) => {
    const api = useApi()
    try{
        const response = await api ({
            url: `vendor/posts/${id}/like`,
            method: 'post'
        });
        return true
    }catch(error){
        console.error("an error occured", error)
        return false
    }
}
export const unlikePost = async (id) => {
    const api = useApi()
    try{
        const response = await api ({
            url: `vendor/posts/${id}/unlike`,
            method: 'post'
        });
        return true
    }catch(error){
        console.error("an error occured", error)
        return false
    }
}