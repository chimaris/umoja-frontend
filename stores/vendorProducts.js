import {defineStore} from "pinia";
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

export const useVendorProductStore = defineStore('vendor-product', {
    state: () => ({
        Products: getLocalStorageItem('Products', []),
        generalInfo: {},
        textInfo: {},
        priceInfo: {},
        pictureInfo: {},
        inventoryInfo: {},
        shippingInfo: {},
        variantsInfo: {},
    }),
    getters: {
        getProducts: (state) => state.Products
    },
    actions: {
        addProduct(newProduct){
            this.Products = [...this.Products, newProduct]
            setLocalStorageItem("Products", this.Products)
        },
        saveGeneralInfo(info) {
            this.generalInfo = info
          },
        saveTextInfo(info) {
            this.textInfo = info
          },
          savePriceInfo(info) {
            this.pictureInfo = info
          },
          savePictureInfo(info) {
            this.pictureInfo= info
          },
          saveInventoryInfo(info) {
            this.inventoryInfo= info
          },
          saveShippingInfo(info) {
            this.shippingInfo = info
          },
          saveVariantsInfo(info) {
            this.variantsInfo = info
          },

    }
})