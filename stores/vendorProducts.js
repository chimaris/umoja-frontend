import {defineStore} from "pinia";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

export const useVendorProductStore = defineStore('vendor-product', {
    state: () => ({
        Products: getLocalStorageItem('Products', [])
    }),
    getters: {
        getProducts: (state) => state.Products
    },
    actions: {
        addProduct(newProduct){
            this.Products = [...this.Products, newProduct]
            setLocalStorageItem("Products", this.Products)
        }
    }
})