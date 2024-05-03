// stores/cartStore.js
import { defineStore } from 'pinia';
import { useApi } from '~/composables/useApi';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

const api = useApi()
export const useCartStore = defineStore('cart', {
  state: () => ({
    items: getLocalStorageItem('cartItem', []),
    checkoutItems: getLocalStorageItem('allcheckoutItem', []),
    shippingDetails: getLocalStorageItem("shipping-details", []),
    addressError: "",
    loading: false,
    shippingAdress: getLocalStorageItem("shippingAdress", []),
    discountError: "",
    updateLoading: false,
    load: false,
  }),

  getters: {
    totalCost() {
      const total = this.items.reduce((total, item) => total + item.price * item.quantity, 0);
      return total.toLocaleString('en-US');
    },
    checkoutTotalCost() {
      const totalCost = this.checkoutItems.reduce((total, item) => total + item.price * item.quantity, 0);
      return totalCost.toLocaleString('en-US');
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
    addItem(item, quantity) {
      const existingItem = this.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: quantity, selected: false });
      }
      setLocalStorageItem('cartItem', this.items)
    
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
      setLocalStorageItem('cartItem', this.items)
    },
    async applyDiscountCode(code) {
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
   async shippingMethods() {
    try {
      const response = await api ({
        url: 'admin/shippingMethods',
        method: 'get'
      });
      return response
    }catch(error) {
      console.error(error);
    }
   },
   async createShippingAddress(data) {
    this.addressError = "";
    try {
        const response = await api ({
          url: 'customer/shippingAddresses',
          method: 'post',
          data: data
        });
        return true
    }catch (error) {
      if (error.response) {
        this.addressError = error.response.data.message || 'An error occurred while adding shipping address.';
      } else if (error.request) {
        this.addressError = 'No response received from server. Please try again later.';
      } else {
        this.addressError = 'An error occurred. Please try again later.';
      }
      return false;
    }
   },
   async updateShippingAddress(data) {
    this.addressError = "";
    try {
        const response = await api ({
          url: `customer/shippingAddresses/${data.id}`,
          method: 'post',
          data: {
            _method: 'PUT',
            shipping_full_name: data.full_name, 
            shipping_email: data.email,
            shipping_phone_number: data.phone_number,
            shipping_address: data.shipping_address,
            shipping_region: data.shipping_region,
            shipping_city: data.shipping_city,
            shipping_postal_code: data.shipping_postal_code
          }
        });
        return true
    }catch (error) {
      if (error.response) {
        this.addressError = error.response.data.message || 'An error occurred while updating shipping address.';
      } else if (error.request) {
        this.addressError = 'No response received from server. Please try again later.';
      } else {
        this.addressError = 'An error occurred. Please try again later.';
      }
      return false;
    }
   },
   async fetchShippingAdress() {
    try {
      const response = await api({
        url: "customer/shippingAddresses",
        method: "get",
      });
      this.shippingAdress = response.data.data;
      setLocalStorageItem('shippingAdress', this.shippingAdress)
    }catch(error) {
      console.error(error)
    }
   },
    setItemQuantity(itemId, newQuantity) {
        const itemIndex = this.items.findIndex((i) => i.id === itemId);
  
        if (itemIndex !== -1) {
          this.items[itemIndex].quantity = newQuantity;
        }
      },
      checkoutProducts() {
        // this.checkoutItems = [...this.checkoutItems, ...this.items.filter(item => item.selected)]
        const selectedItems = this.items.filter(item => item.selected);
        this.checkoutItems.push(...selectedItems)
        setLocalStorageItem('allcheckoutItem', this.checkoutItems)
        this.items = this.items.filter(item => !item.selected);
        setLocalStorageItem('cartItem', this.items)
      },
      selectAllItems() {
        this.items.forEach(item => item.selected = true)
        setLocalStorageItem('cartItem', this.items)
      },
      deSelectAllItems() {
        this.items.forEach(item => item.selected = false)
        setLocalStorageItem('cartItem', this.items)
      },
      saveShippingDetails(details) {
        this.shippingDetails = details
        setLocalStorageItem("shipping-details", this.shippingDetails)
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
        
        setLocalStorageItem('cartItem', this.items)
      },
      
    getItemQuantity(itemId) {
        const item = this.items.find((i) => i.id === itemId);
        return item ? item.quantity : 0;
      }
  },
});
