import { useApi } from "./useApi";

export const fetchArticles = async(id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `${id}/articles`,
            method: 'GET'
        });
        return res.data.data
    }catch(error){
        console.error(error)
    }
}

export const fetchPosts = async(id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `${id}/posts`,
            method: 'GET'
        });
        return res.data.data
    }catch(error){
        console.error(error)
    }
}
export const fetchPromos = async(id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `${id}/promos`,
            method: 'GET'
        });
        return res.data.products
    }catch(error){
        console.error(error)
    }
}
export const fetchProducts = async(id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `${id}/products`,
            method: 'GET'
        });
        return res.data.data
    }catch(error){
        console.error(error)
    }
}
export const fetchDetails = async(id) => {
    const api = useApi()
    try{
        const res = await api({
            url: `${id}/details`,
            method: 'GET'
        });
        return res.data.data
    }catch(error){
        console.error(error)
    }
}