import { vendorUseApi } from "./vendorApi";

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