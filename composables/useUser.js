import { useApi } from "./useApi";

export const getUser = async (id) => {
    const api = useApi()
    try{
        const profileResponse = await api ({
            url: `users/${id}`,
            method: 'get',
          });
          return profileResponse.data.data;
    }catch(error){
        console.error(error)
    }
}