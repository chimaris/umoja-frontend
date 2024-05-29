import { vendorUseApi } from "./vendorApi";
import {ref} from 'vue'

export const loadingSub = ref(false)
export 	async function fetchCategories() {
    const api = vendorUseApi()
    try {
        const response = await api({
            url: 'admin/categories',
            method: 'get'
        });
        const categoryNames = response.data.data;
        return response.data.data;

    }catch(error) {
        console.error(error)
    }
    
}

export const getCategoryId = (selectedCat, Categories) => {
    const category = Categories.findIndex(category => category.name === selectedCat);
    if (category === -1) {
        return
    }
    const category_id = Categories[category].id
    return category_id
}


export const getCategoryName = (selectedCat, Categories) => {
    const category = Categories.findIndex(category => category.name === selectedCat);
    if (category === -1) {
        return
    }
    const category_name = Categories[category].name
    return category_name
}

export const fetchSubCategories = async (selectedCat, Categories) => {
    loadingSub.value = true
    const api = vendorUseApi()
    const category_id = getCategoryId(selectedCat, Categories)
    const category_name = getCategoryName(selectedCat, Categories)
    try {
        const response = await api({
            url: `admin/sub_categories/category/${category_id}`,
            data: {
                name: category_name,
                category_id: category_id,
                photo: ""
            }
        });
           return response.data.data
    } catch(error) {
        console.error(error)
        return [];
    }finally{
        loadingSub.value = false
    }
}