import { useApi } from "./useApi";


export const usePaymentMethods = async () => {
    const api = useApi()
    try{
        const response = await api({
        url: 'customer/paymentMethods',
        method: "GET"
      });
      return response.data.data
      }catch(error){
        console.error(error)
      }
}

export const deletPaymentMethod = async (id) => {
    const api = useApi()
    try{
      const response = await api ({
        url: `customer/paymentMethods/${id}`, 
        method: 'POST',
        data: {
          _method: 'DELETE'
        }
      });
      return response 
    }catch(error) {
      console.error(error)
    }
}