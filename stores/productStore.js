import { defineStore } from 'pinia';
import axios from 'axios';
import { useApi } from '~/composables/useApi';
import { debounce } from 'lodash';


export const useProductStore = defineStore('productStore', {
  state: () => ({
    params: {
      gender: "",
      category_name: "",
      sizes: "",
      product_rating: "",
      compare_at_price: "",
      sub_category_name: "",
      priceMinimum: null,
      priceMaximum: null
    },
    recentSearches: [],
    discoveryCurrentPage: null,
    discoveryLastPage: null,
    discoveryPage: 1,
    productFrom: "",
    allProducts: [],
    productTo: "",
    totalProducts: '',
    searchError: "",
    loadProduct: false,
    searchTerm: "",
    searching: false,
    products: {
      main: [],
      row: [],
      hotDeals: [],
      popular: [],
      recently_viewed: [],
      sale: [],
      customArray: [],
       // You can add more arrays based on your needs
    },
  }),
  persist: {
    enabled: true,
    storage: persistedState.localStorage,
  },
  actions: {
    saveParams(data){
      this.params = data
    },
    removeParam(key) {
      this.params[key] = "";
    },
    async fetchFilteredProducts() {
      const api = useApi()
      const params = new URLSearchParams(this.params).toString();
      try{
        const res = await api({
          url: `allproducts?${params}`,
          method: 'GET'
        });
        this.products.main = res.data.data
        this.productFrom = res.data.meta.from;
        this.productTo = res.data.meta.to;
        this.totalProducts = res.data.meta.total
      }catch(error){
        console.error(error)
      }
    },
    search: debounce(async function() {
      const api = useApi()
      
      if (this.searchTerm.trim()) {
        try{
          this.updateRecentSearches(this.searchTerm);
            this.searching = true
            this.searchError = ""
            const response = await api({
              url: `search?search_global=${this.searchTerm}`,
              method: 'get'
            });
            if (response.data.products.data.length <= 0){
              this.searchError = "Sorry the product you are looking for is not available"
            }
            this.products.main = response.data.products.data
            return true
        }catch(error){
          if (error.response) {
            this.searchError = error.response.data.message || 'An error while searching.';
          } else if (error.request) {
            this.searchError = 'No response received from server. Please try again later.';
          } else {
            this.searchError = 'An error occurred. Please try again later.';
          }
          return false;
        }finally {
          this.searching = false
        }
        
      }
    }, 500),
    // ... other actions ...
    updateRecentSearches(searchTerm) {
			const maxRecentSearches = 6;
			this.recentSearches.unshift(searchTerm);

			if (this.recentSearches.length > maxRecentSearches) {
				this.recentSearches.pop(); // Remove the oldest search term from the end
				
			}

    	},
      clearSearchHistory() {
        this.recentSearches = [];
      },
    async fetchProducts() {
      const response = await axios.get('https://umoja-production-9636.up.railway.app/api/allproducts');
      this.products.row = response.data.data.slice(0, 15);
      this.allProducts = response.data.data
      this.products.hotDeals = response.data.data.slice(0, 10);
    },
    async discoverPageProducts() {
      const api = useApi()
      this.loadProduct = true
      try{
        const response = await api({
          url: `allproducts/?page=${this.discoveryPage}`
        });
        this.products.popular = response.data.data
        this.discoveryCurrentPage = response.data.meta.current_page
        this.discoveryLastPage = response.data.meta.last_page
      }catch(error){
        console.error(error)
      }finally{
          this.loadProduct = false
      }
     
    },
    // Method to add a product to a specific array
    addProductToArray(product, arrayName) {
      if (this.products[arrayName]) {
        this.products[arrayName].push(product);
      }
    },

    // Method to update a product in a specific array
    updateProductInArray(updatedProduct, arrayName) {
      if (this.products[arrayName]) {
        const index = this.products[arrayName].findIndex(
          (product) => product.id === updatedProduct.id
        );
        if (index !== -1) {
          this.products[arrayName][index] = updatedProduct;
        }
      }
    },
    addProductsToSection(section, products) {
        this.products.section = products;
      },
    // Method to remove a product from a specific array
    removeProductFromArray(productId, arrayName) {
      if (this.products[arrayName]) {
        this.products[arrayName] = this.products[arrayName].filter(
          (product) => product.id !== productId
        );
      }
    },
  },
  getters: {
    // Getter to get a specific array of products
    getProductsArray: (state) => (arrayName) => {
      return state.products[arrayName] || [];
    },
  },
});

// // Usage example
// const productStore = useProductStore();

// // Adding a product to a specific array
// const newProduct = { id: 123, name: 'New Product', price: 99.99 };
// productStore.addProductToArray(newProduct, 'newArrivals');

// // Updating a product in a specific array
// const updatedProduct = { id: 123, name: 'Updated Product', price: 109.99 };
// productStore.updateProductInArray(updatedProduct, 'newArrivals');

// // Removing a product from a specific array
// const productIdToRemove = 123;
// productStore.removeProductFromArray(productIdToRemove, 'newArrivals');

// // Getting a specific array of products
// const newArrivals = productStore.getProductsArray('newArrivals');
// console.log(newArrivals);
