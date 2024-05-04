import { defineStore } from 'pinia';
import axios from 'axios';
import { useApi } from '~/composables/useApi';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

const api = useApi()
export const useProductStore = defineStore('productStore', {
  state: () => ({
    recentSearches: getLocalStorageItem("recentSearches", []),
    searchTerm: "",
    allProducts: [],
    products: {
      main: [],
      row: [],
      hotDeals: [],
      popular: [],
      vendorProducts: [],
      recently_viewed: [],
      sale: [],
      customArray: [], // You can add more arrays based on your needs
    },
  }),
  actions: {
    filteredProducts() {
      let result = this.products.main

      if (this.searchTerm) {
        result = this.allProducts.filter(product => {
        return product.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
             product.description.toLowerCase().includes(this.searchTerm.toLowerCase());
          });
      this.updateRecentSearches(this.searchTerm)
      }

      return result
    },
    updateRecentSearches(searchTerm) {
			const maxRecentSearches = 6;
			this.recentSearches.unshift(searchTerm);

			if (this.recentSearches.length > maxRecentSearches) {
				this.recentSearches.pop(); // Remove the oldest search term from the end
				
			}

			setLocalStorageItem("recentSearches", this.recentSearches)
    	},
      clearSearchHistory() {
        this.recentSearches = [];
        setLocalStorageItem("recentSearches", this.recentSearches)
      },
    async fetchProducts() {
      const response = await axios.get('https://umoja-production-9636.up.railway.app/api/allproducts');
      this.products.row = response.data.data.slice(0, 15);
      this.products.main = response.data.data
      this.allProducts = response.data.data
      this.products.vendorProducts = response.data.data.slice(0, 20);
      this.products.hotDeals = response.data.data.slice(0, 10);
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
    async  searchProducts(searchTerm) {
      try {
          const response = await api({
              url: `search?search_global=${searchTerm}`
          });
          console.log(response.data)
          this.products.main = response.data.products.data
          return true;
      } catch (error) {
          console.error('Error searching products:', error);
          throw error;
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
