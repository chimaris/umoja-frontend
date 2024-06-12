import { vendorUseApi } from "./vendorApi";

function getCurrentMonthIndex() {
  const date = new Date();
  return date.getMonth() + 1; 
  }
export const getRevenue = async (filterby) => {
        const api = vendorUseApi()
			let url;
			if (filterby == 'Last 24 hours'){
				url = `vendor/revenue_growth?filter=24hours`
			}
			if (filterby == 'Last 7 days'){
				url = `vendor/revenue_growth?filter=last7days`
			}
			if (filterby == 'This Month'){
				url = `vendor/revenue_growth?filter=month&months=${getCurrentMonthIndex()}`
			}
			if (filterby == 'This Year'){
				const year = new Date().getFullYear()
				url = `vendor/revenue_growth?filter=year&years=${year}`
			}
            try{
                const res = await api({
                    url: url,
                    method: 'GET'
                });
				
				return res.data
            }catch(error){
                console.error(error)
            }
    }
export const getSales = async (filterby) => {
      const api = vendorUseApi()
    let url = 'vendor/sold_products?last_days=7'
    if (filterby == 'This Year'){
      const year = new Date().getFullYear()
      url = `vendor/sold_products?year=${year}`
    }
    if (filterby == 'This Month'){
      url = `vendor/sold_products?month=${getCurrentMonthIndex()}`
    }
          try{
              const res = await api({
                  url: url,
                  method: 'GET'
              });
      
      return res.data
          }catch(error){
              console.error(error)
          }
}
export const getCategories = async(filterby) => {
  const api = vendorUseApi()
  let url = 'vendor/top_categories?last_days=7'
  if (filterby == 'This Year'){
    const year = new Date().getFullYear()
    url = `vendor/top_categories?year=${year}`
  }
  if (filterby == 'This Month'){
    url = `vendor/top_categories?month=${getCurrentMonthIndex()}`
  }
  try{
            const res = await api({
                url: url,
                method: 'GET'
            });
    
     return res.data
        }catch(error){
            console.error(error)
        }
}
export const getAllCategories = async () => {
  const api = vendorUseApi()
  try{
    const res = await api({
      url: "vendor/purchased_catgeory",
      method: 'GET'
    });
    return res.data
  }catch(error){
    console.error(error)
    return []
  }
}
export const getAllProducts = async () => {
  const api = vendorUseApi()
  try{
    const res = await api({
      url: "vendor/popular_products",
      method: 'GET'
    });
    return res.data
  }catch(error){
    console.error(error)
    return []
  }
}