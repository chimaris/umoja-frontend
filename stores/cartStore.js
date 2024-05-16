// stores/cartStore.js
import { defineStore } from 'pinia';
import { useApi } from '~/composables/useApi';


export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    checkoutItems: [],
    shippingDetails: [],
    cardDetails: [],
    paymentLoading: false,
    addressError: "",
    billingError: "",
    loading: false,
    discountError: "",
    updateLoading: false,
    load: false,
  }),
  persist: {
    enabled: true,
    storage: persistedState.localStorage,
  },
  getters: {
    totalCost() {
      const total = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
      return total.toLocaleString('en-US');
    },
    checkoutTotalCost() {
      const totalCost = this.checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return totalCost;
    },

    totalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    },
    totalCartItems() {
      return this.items.length;
    },
    totalCheckoutItems() {
      return this.checkoutItems.length
    }
  },

  actions: {
    saveCardDetails(card) {
      this.cardDetails = card;
    },
    addItem(item, quantity) {
      const existingItem = this.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: quantity, selected: false });
      }
    
    },
    clearItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
    removeItem(item) {
      const existingItemIndex = this.items.findIndex((i) => i.id === item.id);

      if (existingItemIndex !== -1) {
        const existingItem = this.items[existingItemIndex];
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          this.items.splice(existingItemIndex, 1);
        }
      }
    },
    async reduceItem(itemId) {
      const newQuantity = this.getItemQuantity(itemId) - 1;
      const itemIndex = this.items.findIndex((i) => i.id === itemId);
  
        if (itemIndex !== -1) {
          this.items[itemIndex].quantity = newQuantity;
        }
    },
    async clearCart() {
      this.items = [];
    },
    async applyDiscountCode(code) {
      const api = useApi()
      this.load = true
      try{
        const response = await api({
          url: "customer/apply_discount",
          method: "post",
          data: {code: code}
        });
      }catch(error){
        if (error.response) {
          this.discountError = error.response.data.message || 'An error occurred while applying discount code.';
        } else if (error.request) {
          this.discountError = 'No response received from server. Please try again later.';
        } else {
          this.discountError = 'An error occurred. Please try again later.';
        }
        return false;
      }finally {
        this.load = false
      }
    },
   async createBillingAddress(data){
    const api = useApi()
    this.billingError = ""
        try {
          const response = await api ({
            url: 'customer/billingAddresses',
            method: 'post',
            data: data
          });
          return response
      }catch (error) {
        if (error.response) {
          this.billingError = error.response.data.message || 'An error occurred while adding billing address.';
        } else if (error.request) {
          this.billingError = 'No response received from server. Please try again later.';
        } else {
          this.billingError = 'An error occurred. Please try again later.';
        }
        return false;
      }
   },
   async editBillingAddress(data, id){
    const api = useApi()
    this.billingError = ""
    try {
      const response = await api({
        url: `customer/billingAddresses/${id}`,
        method: 'post',
        data: {
          _method: 'PUT',
          ...data
        }
      });
      return true
    }catch (error) {
      if (error.response) {
        this.billingError = error.response.data.message || 'An error occurred while adding billing address.';
      } else if (error.request) {
        this.billingError = 'No response received from server. Please try again later.';
      } else {
        this.billingError = 'An error occurred. Please try again later.';
      }
      return false;
    }
   },
    setItemQuantity(itemId, newQuantity) {
        const itemIndex = this.items.findIndex((i) => i.id === itemId);
  
        if (itemIndex !== -1) {
          this.items[itemIndex].quantity = newQuantity;
        }
      },
      checkoutProducts() {
        const selectedItems = this.items.filter(item => item.selected);
        this.checkoutItems = [...this.checkoutItems, ...selectedItems]
        this.items = this.items.filter(item => !item.selected);
      },
      selectAllItems() {
        this.items.forEach(item => item.selected = true)
      },
      deSelectAllItems() {
        this.items.forEach(item => item.selected = false)
      },
      saveShippingDetails(details) {
        this.shippingDetails = details
      },
      handleSelect(id) {
        const itemIndex = this.items.findIndex(item => item.id == id)
        if (itemIndex == -1) {
          return
        }

        if (this.items[itemIndex].selected) {
          this.items[itemIndex].selected = false
        }else {
          this.items[itemIndex].selected = true
        }
        
      },
      
    getItemQuantity(itemId) {
        const item = this.items.find((i) => i.id === itemId);
        return item ? item.quantity : 0;
      }
  },
});
