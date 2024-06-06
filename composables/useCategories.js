import { vendorUseApi } from "./vendorApi";
import { useApi } from "./useApi";
import {ref} from 'vue'

export const loadingSub = ref(false)
export 	async function fetchCategories(role) {
    let api = vendorUseApi()
    if (role = "customer"){
        api = useApi()
    }
    try {
        const response = await api({
            url: 'allcategory',
            method: 'get'
        });
       
        return response.data.data;

    }catch(error) {
        console.error(error)
    }
    
}

export const getCategoryId = (selectedCat, Categories) => {
    const category = Categories?.findIndex(category => category.name === selectedCat);
    if (category === -1) {
        return
    }
    const category_id = Categories[category].id
    return category_id
}


export const getCategoryName = (selectedCat, Categories) => {
    const category = Categories?.findIndex(category => category.name === selectedCat);
    if (category === -1) {
        return
    }
    const category_name = Categories[category].name
    return category_name
}

export const fetchSubCategories = async ({selectedCat, Categories, gender, role}) => {
    loadingSub.value = true;
    let api = vendorUseApi();
    if (role === "customer") {
        api = useApi();
    }
    const category_id = getCategoryId(selectedCat, Categories);
    const category_name = getCategoryName(selectedCat, Categories);
    try {
        const response = await api({
            url: `sub_categories/category/${category_id}`,
            data: {
                name: category_name,
                category_id: category_id,
                photo: ""
            }
        });
        const subCats = response.data.data;
        let filteredSubCats;

        if (gender === 'Male') {
            filteredSubCats = subCats.filter(category => category.gender_subcategory === 'Male');
        } else if (gender === 'Female') {
            filteredSubCats = subCats.filter(category => category.gender_subcategory === 'Female');
        } else {
            filteredSubCats = subCats;
        }

        const resultCategories = [];

        filteredSubCats.forEach(category => {
            if (category.neted_subcategories && category.neted_subcategories.length > 0) {
                category.neted_subcategories.forEach(sub => {
                    resultCategories.push({
                        id: category.id,
                        name: sub
                    });
                });
            } else {
                resultCategories.push({
                    id: category.id,
                    name: category.subcategory_name
                });
            }
        });
        return resultCategories;
    } catch (error) {
        console.error(error);
        return [];
    } finally {
        loadingSub.value = false;
    }
};

