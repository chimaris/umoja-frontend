// appStore.js

import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    integratedApps: [],
    availableApps: [
        {
          id: 1,
          title: 'Jira',
          color: '#2C6E63',
          connected: true,
        },
        {
          id: 2,
          title: 'Intercom',
          color: '#F38218',
          connected: false,
        },
        {
          id: 3,
          title: 'Quick Books',
          color: '#F38218',
          connected: true,
        },
        {
          id: 4,
          title: 'Jira',
          color: '#1273EB',
          connected: false,
        },
        {
          id: 5,
          title: 'Intercom',
          color: '#333333',
          connected: false,
        },
        {
          id: 6,
          title: 'Quick Books',
          color: '#00966D',
          connected: false,
        },
       
        {
          id: 7,
          title: 'Jira',
          color: '#333333',
          connected: true,
        },
        {
          id: 8,
          title: 'Intercom',
          color: '#835353',
          connected: false,
        },
        {
          id: 9,
          title: 'Quick Books',
          color: '#F0B136',
          connected: true,
        },
       
    ],
  }),
  getters: {
    isIntegrated: (state) => (appId) => {
      return state.integratedApps.some((app) => app.id === appId);
    }
  },
  actions: {
    integrate(appId) {
      if (!this.isIntegrated(appId)) {
        const appToIntegrate = this.availableApps.find((app) => app.id === appId);
        if (appToIntegrate) {
          this.integratedApps.push(appToIntegrate);
        }
      }
    },
    uninstall(appId) {
      const appIndex = this.integratedApps.findIndex((app) => app.id === appId);
      if (appIndex !== -1) {
        this.integratedApps.splice(appIndex, 1);
      }
    }
  }
});
