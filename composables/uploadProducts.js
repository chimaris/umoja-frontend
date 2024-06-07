import { vendorUseApi } from "./vendorApi";
import imageCompression from 'browser-image-compression';
import { useEditVendorStore } from "~/stores/editProduct";
import { useVendorProductStore } from "~/stores/vendorProducts";
import {ref} from 'vue'

export const pictureErrors = ref("")
export const loading = ref("")

export const handlephotoUpload = async (imagePreviews, method) => {
    const api = vendorUseApi();
    const vendorProducts = useVendorProductStore()
    const tempCloudinaryLinks = [];
    const maxFileSize = 5 * 1024 * 1024; // 5MB
    pictureErrors.value = ""
    
    for (let index = 0; index < imagePreviews.length; index++) {
      const imageData = imagePreviews[index];
      if (!imageData) continue;
      
      loading.value = true; 
      
      try {
        const blob = imageData instanceof Blob ? imageData : await fetch(imageData).then(res => res.blob());
  
        const options = {
          maxSizeMB: 1,
          useWebWorker: true
        };
        const compressedImage = await imageCompression(blob, options);
  
        if (compressedImage.size > maxFileSize) {
          throw new Error('Compressed file size exceeds 5MB.');
        }
  
        const formData = new FormData();
        formData.append('photo', compressedImage, 'compressed.jpg'); // Set a filename for the compressed image
  
        const response = await api({
          url: 'vendor/products/upload',
          method: 'post',
          data: formData
        });
  
        const cloudinaryLink = response.data.secure_url;
        tempCloudinaryLinks.push(cloudinaryLink);
  
      } catch (error) {
        console.error('Failed to upload file:', error);
        if (error.response) {
            pictureErrors.value = error.response.data.message || 'An error occurred during photo upload.';
        } else if (error.request) {
          pictureErrors.value = 'No response received from server. Please try again later.';
        } else {
            pictureErrors.value = 'An error occurred. Please try again later.';
        }
        loading.value = false; // Set loading to false if an error occurs
        return false;
      } finally {
        loading.value = false; // Ensure loading is false after each upload attempt
      }
    }
    const photos = tempCloudinaryLinks.join(', ');
    if (method == "update" && photos){
      try {
        loading.value = true
        const response = await api({
            url: `vendor/products/${useEditVendorStore().currentEditProduct.id}`,
            method: 'post',
            data: {
                _method: 'PUT',
                photo: photos
            }
        });
        return true;
    } catch (error) {
        console.error('Error updating product with photos:', error);
        return false;
    }finally{
        loading.value = false;
    }
    }else{
        vendorProducts.pictureInfo = photos
      return true;
    }
    
  }