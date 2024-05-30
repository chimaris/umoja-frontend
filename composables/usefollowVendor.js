import { useApi } from "./useApi";

export const follow = async (id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `vendor/${id}/follow`,
            method: 'post'
        });
        return true
    }catch(error){
        console.error("an error occured", error)
        return false
    }
}
export const unFollowVendor = async (id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `vendor/${id}/unfollow`,
            method: 'post'
        });
        return true
    }catch(error){
        console.error("an error occured", error)
        return false
    }
}
export const isFollowing = async (id) => {
    const api = useApi()
    try{
        const res = await api ({
            url: `customer/has_followed/${id}`
        });
        return res.data.has_followed
    }catch(error){
        console.error(error)
    }
}