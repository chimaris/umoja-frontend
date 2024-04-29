// stores/cartStore.js
import { defineStore } from 'pinia';
import { getLocalStorageItem, setLocalStorageItem, removeLocalStorageItem } from '~/utils/storage';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: getLocalStorageItem('cartItems', []),
    checkoutItems: getLocalStorageItem('checkoutItems', []),
    shippingDetails: [],
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
    addItem(item) {
      const existingItem = this.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        this.items.push({ ...item, quantity: 1, selected: false });
      }

      setLocalStorageItem('cartItems', this.items)
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
        setLocalStorageItem('checkoutItems', this.checkoutItems)

        this.items = this.items.filter(item => !item.selected);
        setLocalStorageItem('cartItems', this.items);
      },
      selectAllItems() {
        this.items.forEach(item => item.selected = true)
        setLocalStorageItem('cartItems', this.items)
      },
      deSelectAllItems() {
        this.items.forEach(item => item.selected = false)
        setLocalStorageItem('cartItems', this.items)
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
        
        setLocalStorageItem('cartItems', this.items)
      },
      
    getItemQuantity(itemId) {
        const item = this.items.find((i) => i.id === itemId);
        return item ? item.quantity : 0;
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
    clearItem(itemId) {
      this.items = this.items.filter(item => item.id !== itemId);
    },
    clearCart() {
      this.items = [];
    },
  },
});
