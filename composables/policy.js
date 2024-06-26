import { vendorUseApi } from "./vendorApi"

export const usePolicy = async() => {
  const api = vendorUseApi()
  try{
    const res = await api({
      url: '/vendor/policies',
      method: 'GET'
    });
    console.log(res)
    return res.data.data
  }catch(err){
    console.error(err)
  }
}
