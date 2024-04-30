import {defineStore} from "pinia";
import {vendorUseApi} from '~/composables/vendorApi'
import Compressor from 'compressorjs';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

const api = vendorUseApi()
export const useVendorProductStore = defineStore('vendor-product', {
    state: () => ({
        Products: [],
        generalInfo: getLocalStorageItem("general", []),
        textInfo:  getLocalStorageItem("text", []),
        priceInfo:  getLocalStorageItem("price", []),
        pictureInfo:  getLocalStorageItem("picture", []),
        inventoryInfo:  getLocalStorageItem("inventory", []),
        shippingInfo: getLocalStorageItem("shipping", []),
        variantsInfo: getLocalStorageItem("variant", []),
        newProductAdded: false,
        newProductName: "",
        newProductsku: "",
        loading: false,
        productError: "",
        pictureError : "",
       
    }),
    getters: {
        getProducts: (state) => state.Products
    },
    actions: {
      async getAllProduct() {
        try {
          const response = await api({
            url: 'vendor/products',
            method: 'get'
          });
          this.Products = response.data.data;
        }catch(error) {
          console.error(error)
        }
      },
      async addVendorProduct(){
          this.loading = true;
          this.productError = ""
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
                  category_id: this.textInfo.Category,
                  sub_category_id: this.textInfo.SubCategory,
                  gender: this.textInfo.Gender,
                  photo: this.pictureInfo,
                  ust_index: this.priceInfo.ustIndex,
                  price: this.priceInfo.price,
                  commission: this.priceInfo.commission,
                  compare_at_price: this.priceInfo.comparePrice,
                  tax_charge_on_product: this.priceInfo.chargeTax,
                  cost_per_item: this.priceInfo.costPerItem,
                  profit: this.priceInfo.profit,
                  margin: this.priceInfo.margin,
                  track_quantity: this.inventoryInfo.trackQty,
                  made_with_ghana_leather:this.inventoryInfo.productQty,
                  mini_stock: this.inventoryInfo.minimumQty,
                  sell_out_of_stock: this.inventoryInfo.continueSellingNoStock,
                  has_sku: this.inventoryInfo.hasSkuBarCode,
                  storage_location: this.inventoryInfo.storageAddress,
                  product_ship_internationally: this.shippingInfo.shipsInternational,
                  gross_weight: this.shippingInfo.grossWeight,
                  net_weight:  this.shippingInfo.netWeight,
                  length: this.shippingInfo.length,
                  weight: this.shippingInfo.width,
                  height: this.shippingInfo.height,
                  shipping_method: this.shippingInfo.shippingOption,
                  digital_product_or_service: this.shippingInfo.digitalProduct,
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
        saveGeneralInfo(info) {
            this.generalInfo = info
            setLocalStorageItem('general', this.generalInfo)
          },
          async handlephotoUpload(imagePreviews) {
            this.loading = true;
            try {
              const tempCloudinaryLinks = [];
              
              for (let index = 0; index < imagePreviews.length; index++) {
                const imageData = imagePreviews[index];
                
                if (imageData) {
                  // Convert imageData to a Blob object if it's not already a Blob
                  const blob = imageData instanceof Blob ? imageData : await fetch(imageData).then(res => res.blob());
                  
                  // Compress the image using Compressor.js
                  const compressedImage = await new Promise((resolve, reject) => {
                    new Compressor(blob, {
                      quality: 0.5,
                      maxWidth: 800,
                      maxHeight: 600,

                      success(result) {
                        resolve(result);
                      },
                      error(error) {
                        reject(error);
                      }
                    });
                  });
          
                  const formData = new FormData();
                  formData.append('photo', compressedImage, 'compressed.jpg'); // Set a filename for the compressed image
                
                  const response = await api({
                    url: 'vendor/products/upload',
                    method: 'post',
                    data: formData
                  });
                  const cloudinaryLink = response.data.secure_url;
                  tempCloudinaryLinks.push(cloudinaryLink);
                }
              } 
              this.pictureInfo = tempCloudinaryLinks.join(', ');
              return true;
              
            } catch (error) {
              console.error('Failed to upload file:', error);
              if (error.response) {
                this.pictureError = error.response.data.message || 'An error occurred during photo upload.';
              } else if (error.request) {
                this.pictureError  = 'No response received from server. Please try again later.';
              } else {
                this.pictureError   = 'An error occurred. Please try again later.';
              }
              return false;
            } finally {
              this.loading = false;
            }
          },                   
        saveTextInfo(info) {
            this.textInfo = info
            setLocalStorageItem('text', this.textInfo)
          },
          savePriceInfo(info) {
            this.priceInfo = info
            setLocalStorageItem('picture', this.pictureInfo)
          },
          savePictureInfo(info) {
            this.priceInfo= info
            setLocalStorageItem('price', this.priceInfo)
          },
          saveInventoryInfo(info) {
            this.inventoryInfo= info
            setLocalStorageItem('inventory', this.inventoryInfo)
          },
          saveShippingInfo(info) {
            this.shippingInfo = info
            setLocalStorageItem('shipping', this.shippingInfo)
          },
          saveVariantsInfo(info) {
            this.variantsInfo = info
            setLocalStorageItem('variant', this.variantsInfo)
          },

    }
})