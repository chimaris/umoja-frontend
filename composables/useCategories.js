import { vendorUseApi } from "./vendorApi";
import { useApi } from "./useApi";
import {ref} from 'vue'


export const loadingSub = ref(false)
export const genders = [
                        {
                            id: 1,
                            name: "male"
                        },
                        {
                            id: 2,
                            name: "female"
                        },
                        {
                            id: 3,
                            name: "unisex"
                        }
                        ]
export const getGenderId = (gender) => {
    const gen = genders.findIndex(item => item.name === gender);
    if (gen === -1) {
        return
    }
    const gender_id = genders[gen].id
    return gender_id
}
export const getGenderName = (id) => {
    const gen = genders.findIndex(item => item.id === id);
    if (gen === -1) {
        return
    }
    const gender_name = genders[gen].name
    return gender_name
}
export 	async function fetchCategories(role) {
    const transformResponse = (data) => {
        const jsonData = JSON.parse(data);
        return jsonData.data;
    }
    let api = vendorUseApi(transformResponse);
    if (role = "customer"){
        api = useApi(transformResponse)
    }
    
    try {
        const response = await api({
            url: 'allcategory',
            method: 'get'
        });
        return response.data;

    }catch(error) {
        console.error(error)
    }
    
}
export 	async function fetchBusinessCategories() {
    let api = useApi()
    try {
        const response = await api({
            url: 'allbusinesstypes',
            method: 'get'
        });
       
        return response.data.data;

    }catch(error) {
        console.error(error)
    }
    
}
export const getbusinessCategoryId = (selectedCat, Categories) => {
    const category = Categories?.findIndex(category => category.name === selectedCat);
    if (category === -1) {
        return
    }
    const category_id = Categories[category].id
    return category_id
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

export const fetchSubCategories = async ({selectedCat, Categories, role}) => {
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
        // console.log(response.data.data)
        return subCats;
    } catch (error) {
        console.error(error);
        return [];
    } finally {
        loadingSub.value = false;
    }
};

