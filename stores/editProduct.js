import {defineStore} from "pinia"
import {vendorUseApi} from '~/composables/vendorApi'
import Compressor from 'compressorjs';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

const api = vendorUseApi()
export const useEditVendorStore = defineStore('edit-product',{
    state: () => ({
        currentEditProduct: getLocalStorageItem("current-edit"),
        loading: false,
        allVariations: [],
    }),
    actions: {
        saveVariantsInfo(info) {
            this.allVariations = info
          },
        setCurrentProduct(product) {
            this.currentEditProduct = product;
            setLocalStorageItem("current-edit", this.currentEditProduct)
        },
        async editProduct(datas) {
                const response = await api({
                    url: `vendor/products/${this.currentEditProduct.id}`,
                    method: 'post',
                    data: {
                        _method: 'PUT',
                        ...datas
                    }
                });
                return response
        },
        async handleEditphotoUpload(imagePreviews) {
            this.loading = true;
            const tempCloudinaryLinks = [];
        
            for (let index = 0; index < imagePreviews.length; index++) {
                const imageData = imagePreviews[index];
        
                if (imageData) {
                    try {
                        const blob = imageData instanceof Blob ? imageData : await fetch(imageData).then(res => res.blob());
                        const compressedImage = await new Promise((resolve, reject) => {
                            new Compressor(blob, {
                                quality: 1, // Adjust quality as needed
                                maxWidth: 1000,
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
                        formData.append('photo', compressedImage, 'compressed.jpg');
        
                        const response = await api({
                            url: 'vendor/products/upload',
                            method: 'post',
                            data: formData
                        });
        
                        const cloudinaryLink = response.data.secure_url;
                        tempCloudinaryLinks.push(cloudinaryLink);
                    } catch (error) {
                        console.error('Error uploading image:', error);
                        // Handle error (e.g., show error message to user)
                    }
                }
            }
        
            const photos = tempCloudinaryLinks.join(', ');
            if (photos) {
                try {
                    const response = await api({
                        url: `vendor/products/${this.currentEditProduct.id}`,
                        method: 'post',
                        data: {
                            _method: 'PUT',
                            photo: photos
                        }
                    });
                    return response;
                } catch (error) {
                    console.error('Error updating product with photos:', error);
                    // Handle error (e.g., show error message to user)
                    return null; // Or handle error in a different way
                }
            } else {
                return null;
            }
        },
        async handleEditVariant(datas) {
            this.editProduct(datas);

            if (this.allVariations && this.allVariations.length > 0) {
                for (const variant of this.allVariations) {
                    try{
                        const variantResponse = await api({
                            url: `vendor/products/${this.currentEditProduct.id}/variations`,
                            method: 'post',
                            data: {
                              name: variant.name,
                              sku: variant.sku,
                              no_available: variant.quantity,
                              price: variant.price,
                            }
                          });
                    }catch (error) {
                        console.error('Error uploading image:', error);
                        // Handle error (e.g., show error message to user)
                    
                    }
                }}
                     
            }
        
    }
})