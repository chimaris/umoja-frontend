// store/likedStore.js
import { defineStore } from 'pinia';

export const useLikedStore = defineStore('liked', {
  state: () => ({
    likedItems: [],
  }),
  actions: {
    toggleLike(item, b) {
      const index = this.likedItems.findIndex(i => i.id === b);
      if (index !== -1) {
        this.likedItems.splice(index, 1);
      } else {
        item.id = b
        this.likedItems.push(item);
      }
    },
    isLiked(b) {
      return this.likedItems.some((i) => i.id === b)
    },
  },
});
