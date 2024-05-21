import {defineStore} from "pinia";
import {vendorUseApi} from '~/composables/vendorApi'
import Compressor from 'compressorjs';
import { likePost, unlikePost } from "~/composables/useLike";

export const useCreateStore = defineStore('post', {
    state: () => ({
        relatedPosts: [],
        loading: false,
        errorArticle: "",
        load: false,
        load2: false,
        load3: false,
        load4: false,
        pictureInfo: [],
        coverInfo: [],
        errorPost: "",
        scheduleError: "",
        posts: [],
        articles: []
    }),
    persist: {
        enabled: true,
        storage: persistedState.localStorage,
    },

    actions: {
        async getPost(){
            const api = vendorUseApi()
            try{
                const response = await api ({
                    url: "vendor/posts",
                    method: 'GET'
                });
                this.posts = response.data.data
                return
            }catch(error){
                console.error("error fetching post", error)
            }
        },
        async getArticle(){
          const api = vendorUseApi()
          try{
              const response = await api ({
                  url: "vendor/articles",
                  method: 'GET'
              });
              this.articles = response.data.data
              return
          }catch(error){
              console.error("error fetching article", error)
          }
        },
        async getProduct(searchQuery) {
            const api = vendorUseApi()
            this.loading = true
            try {
              const response = await api({
                url: `vendor/products/?search_global=${searchQuery}`,
                method: 'get'
              });
              const loadedPostIds = new Set(this.relatedPosts.map(post => post.id));
              // Filter out any products that are already in relatedPosts
              const newProducts = response.data.data.filter(product => !loadedPostIds.has(product.id));
              // Add only new products to the relatedPosts array
              this.relatedPosts = [...this.relatedPosts, ...newProducts];
              return 
            }catch(error) {
              console.error(error)
            }finally{
                this.loading = false
            }
          },
          deleteProduct(item){
            this.relatedPosts = this.relatedPosts.filter((post) => {
                return post.id !== item;
            });
          },
          async handlephotoUpload(imagePreviews) {
            const api = vendorUseApi();
            const tempCloudinaryLinks = [];
            
            for (let index = 0; index < imagePreviews.length; index++) {
              const imageData = imagePreviews[index];
              
              try {
                if (imageData) {
                  const blob = imageData instanceof Blob ? imageData : await fetch(imageData).then(res => res.blob());
                  
                  const compressedImage = await new Promise((resolve, reject) => {
                    new Compressor(blob, {
                      quality: 1, // Adjust the quality for actual compression
                      maxWidth: 1000,
                      maxHeight: 600,
                      success(result) {
                        resolve(result);
                      },
                      error(err) {
                        reject(err);
                      }
                    });
                  });
                  
                  const formData = new FormData();
                  formData.append('featured_img', compressedImage, 'compressed.jpg');
                  
                  const res = await api({
                    url: 'vendor/posts/upload',
                    method: 'post',
                    data: formData
                  });
                  tempCloudinaryLinks.push(res.data.secure_url);
                }
              } catch (error) {
                console.error('Failed to upload file:', error);
                if (error.response) {
                  this.errorPost = error.response.data.message || 'An error occurred during photo upload.';
                } else if (error.request) {
                  this.errorPost  = 'No response received from server. Please try again later.';
                } else {
                  this.errorPost   = 'An error occurred. Please try again later.';
                }
                return false;
              }
            } 
            this.pictureInfo = tempCloudinaryLinks.join(', ');
            return tempCloudinaryLinks.length > 0; // Return true if at least one image was uploaded
          },
          async handlephotoUpload2(imagePreviews) {
            const api = vendorUseApi();
            const tempCloudinaryLinks = [];
            
            for (let index = 0; index < imagePreviews.length; index++) {
              const imageData = imagePreviews[index];
              
              try {
                if (imageData) {
                  const blob = imageData instanceof Blob ? imageData : await fetch(imageData).then(res => res.blob());
                  
                  const compressedImage = await new Promise((resolve, reject) => {
                    new Compressor(blob, {
                      quality: 0.9, // Adjust the quality for actual compression
                      maxWidth: 1900,
                      maxHeight: 1000,
                      success(result) {
                        resolve(result);
                      },
                      error(err) {
                        reject(err);
                      }
                    });
                  });
                  
                  const formData = new FormData();
                  formData.append('cover_image', compressedImage, 'compressed.jpg');
                  
                  const res = await api({
                    url: 'vendor/articles/upload',
                    method: 'post',
                    data: formData
                  });
                  tempCloudinaryLinks.push(res.data.secure_url);
                }
              } catch (error) {
                console.error('Failed to upload file:', error);
                if (error.response) {
                  this.errorArticle = error.response.data.message || 'An error occurred during photo upload.';
                } else if (error.request) {
                  this.errorArticle  = 'No response received from server. Please try again later.';
                } else {
                  this.errorArticle   = 'An error occurred. Please try again later.';
                }
                return false;
              }
            } 
            this.coverInfo = tempCloudinaryLinks.join(', ');
            return tempCloudinaryLinks.length > 0; // Return true if at least one image was uploaded
          },
          async createPost(imagePreviews, data){
            this.load = true
            try{
                const photoResponse = await this.handlephotoUpload(imagePreviews)
                if (photoResponse){
                    const api = vendorUseApi()
                    const response = await api ({
                        url: 'vendor/posts',
                        method: 'POST',
                        data: {
                            category_id: data.category_id,
                            product_ids: data.product_ids,
                            location: data.location,
                            description: data.description,
                            featured_img: this.pictureInfo
                        }
                    });
                    this.relatedPosts = []
                    return true
                }
            }catch (error) {
                console.error('Failed to upload file:', error);
                if (error.response) {
                  this.errorPost = error.response.data.message || 'An error occurred during post upload.';
                } else if (error.request) {
                  this.errorPost  = 'No response received from server. Please try again later.';
                } else {
                  this.errorPost   = 'An error occurred. Please try again later.';
                }
                return false;
              }finally{
                this.load = false
              }
          },
          async schedulePost(imagePreviews, data){
            this.load2 = true
            try{
                const photoResponse = await this.handlephotoUpload(imagePreviews)
                if (photoResponse){
                    const api = vendorUseApi()
                    const response = await api ({
                        url: 'vendor/posts/schedule',
                        method: 'POST',
                        data: {
                            category_id: data.category_id,
                            product_ids: data.product_ids,
                            location: data.location,
                            description: data.description,
                            featured_img: this.pictureInfo,
                            scheduled_at: data.scheduled_at
                        }
                    });
                    this.relatedPosts = []
                    return true
                }
            }catch (error) {
                console.error('Failed to upload file:', error);
                if (error.response) {
                  this.scheduleError = error.response.data.message || 'An error occurred during post upload.';
                } else if (error.request) {
                  this.scheduleError  = 'No response received from server. Please try again later.';
                } else {
                  this.scheduleError   = 'An error occurred. Please try again later.';
                }
                return false;
              }finally{
                this.load2 = false
              }
          },
          async draftPost(imagePreviews, data){
            this.load3 = true
            try{
                const photoResponse = await this.handlephotoUpload(imagePreviews)
                if (photoResponse){
                    const api = vendorUseApi()
                    const response = await api ({
                        url: 'vendor/posts/draft',
                        method: 'POST',
                        data: {
                            category_id: data.category_id,
                            product_ids: data.product_ids,
                            location: data.location,
                            description: data.description,
                            featured_img: this.pictureInfo
                        }
                    });
                    this.relatedPosts = []
                    return true
                }
            }catch (error) {
                console.error('Failed to upload file:', error);
                if (error.response) {
                  this.errorPost = error.response.data.message || 'An error occurred during post upload.';
                } else if (error.request) {
                  this.errorPost  = 'No response received from server. Please try again later.';
                } else {
                  this.errorPost   = 'An error occurred. Please try again later.';
                }
                return false;
              }finally{
                this.load3 = false
              }
          },
          async postArticle(imagePreview, data){
            this.load4 = true
            try{
                const photoResponse = await this.handlephotoUpload2(imagePreview)
                if (photoResponse){
                    const api = vendorUseApi()
                    const response = await api ({
                        url: 'vendor/articles',
                        method: 'POST',
                        data: {
                          title: data.title,
                          content: data.content,
                          category_id: data.category_id,
                          cover_image: this.coverInfo
                        }
                    });
                    return true
                }
            }catch (error) {
                console.error('Failed to upload file:', error);
                if (error.response) {
                  this.errorArticle = error.response.data.message || 'An error occurred during post upload.';
                } else if (error.request) {
                  this.errorArticle  = 'No response received from server. Please try again later.';
                } else {
                  this.errorArticle   = 'An error occurred. Please try again later.';
                }
                return false;
              }finally{
                this.load4 = false
              }
          }
    }
})