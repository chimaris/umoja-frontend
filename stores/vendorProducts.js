import {defineStore} from "pinia";
import {vendorUseApi} from '~/composables/vendorApi'
import { useVendorStore } from './vendorStore';
import imageCompression from 'browser-image-compression';
import { useEditVendorStore } from "./editProduct";

export const useVendorProductStore = defineStore('vendor-product', {
    state: () => ({
        Products: [],
        promoProducts: [],
        allProducts: [],
        generalInfo: [],
        textInfo: [],
        priceInfo: [],
        pictureInfo: [],
        inventoryInfo: [],
        shippingInfo: [],
        variantsInfo: [],
        colorInfo: [],
        sizeInfo: [],
        styleInfo: [],
        materialInfo: [],
        newProductAdded: false,
        newProductName: "",
        newProductsku: "",
        loading: false,
        productError: "",
        pictureError : "",
        pagesNo: null,
        currentPage: null,
        from: null,
        toPage: null,
        successArchive: false,
        successRestore: false,
        successDelete: false,
       
    }),
     persist: {
    enabled: true,
    storage: persistedState.localStorage,
   },
    getters: {
        getProducts: (state) => state.Products
    },
    actions: {
      clearProducts(){
        this.allProducts = []
        this.promoProducts = []
      },
      async addVendorProduct(){
        const vendorStore = useVendorStore()
          this.loading = true;
          this.productError = ""
          const api = vendorUseApi()
           try {
              const response = await api({
                url: 'vendor/products',
                method: 'post',
                data: {
                  sku: this.generalInfo.productNumber,
                  unit: this.generalInfo.unit,
                  material: this.generalInfo.material,
                  condition: this.generalInfo.Condition,
                  sell_online: this.generalInfo.storeOption,
                  name: this.textInfo.productName,
                  description: this.textInfo.Description,
                  product_spec:this.textInfo.productSpec,
                  status: this.textInfo.productStatus,
                  tags: this.textInfo.Tags,
                  sizes: this.sizeInfo,
                  colors: this.colorInfo,
                  materials: this.materialInfo,
                  styles: this.styleInfo,
                  category_id: this.textInfo.Category,
                  sub_category_id: this.textInfo.SubCategory,
                  gender_id: this.textInfo.gender_id,
                  photo: this.pictureInfo,
                  price: this.priceInfo.price,
                  commission: this.priceInfo.commission,
                  compare_at_price: this.priceInfo.comparePrice,
                  cost_per_item: this.priceInfo.costPerItem,
                  profit: this.priceInfo.profit,
                  margin: this.priceInfo.margin,
                  track_quantity: this.inventoryInfo.trackQty,
                  made_with_ghana_leather:this.inventoryInfo.productQty,
                  mini_stock: this.inventoryInfo.minimumQty,
                  sell_out_of_stock: this.inventoryInfo.continueSellingNoStock,
                  has_sku: this.inventoryInfo.hasSkuBarCode,
                  storage_location: this.inventoryInfo.storageAddress,
                  gross_weight: this.shippingInfo.grossWeight,
                  net_weight:  this.shippingInfo.netWeight,
                  length: this.shippingInfo.length,
                  weight: this.shippingInfo.width,
                  height: this.shippingInfo.height,
                  unit_per_item: this.generalInfo.unitperItem
                }
              });
              const productId = response.data.product.id;
              if (this.variantsInfo && this.variantsInfo.length > 0) {
              for (const variant of this.variantsInfo) {
                const variantResponse = await api({
                  url: `vendor/products/${productId}/variations`,
                  method: 'post',
                  data: {
                    name: variant.name,
                    sku: variant.sku,
                    no_available: variant.quantity,
                    price: variant.price,
                  }
                });
              }}
              this.newProductName = this.textInfo.productName;
              this.newProductsku = this.generalInfo.productNumber;
              this.productError = "";
              await vendorStore.getUser(vendorStore.vendor.id)
              return true
            
           }catch(error) {
            if (error.response) {
              this.productError = error.response.data.message || 'An error occurred during add product.';
            } else if (error.request) {
              this.productError  = 'No response received from server. Please try again later.';
            } else {
              this.productError   = 'An error occurred. Please try again later.';
            }
            return false;
           } finally {
            this.loading = false
           }
        },
        async archiveProduct(product){
          const api = vendorUseApi()
          const response = await api({
            url: `vendor/products/${product.id}`,
            method: "post",
            data: {
              _method: 'DELETE',
              name: ""
            }
          });
          return response 
        },
        async deleteProductPerm(product){
          const api = vendorUseApi()
          const response = await api({
            url: `vendor/products/${product.id}/delete_perm`,
            method: "post",
            data: {
              _method: 'DELETE',
              name: ""
            }
          });
          return response 
        },
        async restoreArchived(product){
          const api = vendorUseApi()
          const response = await api({
            url: `vendor/products/${product.id}/restore`,
            method: "post",
            data: {
              _method: 'PUT',
              name: ""
            }
          });
          return response 
        },
        saveGeneralInfo(info) {
            this.generalInfo = info
          },                   
        saveTextInfo(info) {
            this.textInfo = info
          },
          savePriceInfo(info) {
            this.priceInfo = info
          },
          savePictureInfo(info) {
            this.priceInfo= info
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
          saveColorOptions(info) {
            this.colorInfo = info
          },
          saveSizeOptions(info) {
            this.sizeInfo = info;
          },
          saveStyleOptions(info) {
            this.styleInfo = info;
          },
          saveMaterialOptions(info) {
            this.materialInfo = info;
          }

    }
})