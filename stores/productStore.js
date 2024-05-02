import { defineStore } from 'pinia';
import { mainProducts, row, vendorPro, hotDeals } from './mockData';
import axios from 'axios';

export const useProductStore = defineStore('productStore', {
  state: () => ({
    products: {
      main: mainProducts,
      row: row,
      hotDeals: hotDeals,
      popular: [],
      vendorProducts: vendorPro,
      recently_viewed: [],
      sale: [],
      customArray: [], // You can add more arrays based on your needs
    },
  }),
  actions: {
    async fetchProducts() {
      const response = await axios.get('https://umoja-production-9636.up.railway.app/api/allproducts');
      console.log(response);
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
