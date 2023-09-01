// appStore.js

import { defineStore } from 'pinia';

export const useAppStore = defineStore({
  id: 'app',
  state: () => ({
    integratedApps: [],
    availableApps: [
        {
          id: 1,
          title: 'Merchandise & Sales',
          color: '#2C6E63',
          description: 'Merchandising is the marketing and sales of your products. With our merchandise feature, you can influence and control the sales of your product in the Umoja platform.',
          connected: true,
        },
        {
          id: 2,
          title: 'Forecast',
          color: '#F38218',
          description: 'The Forecast tool supports you with the process of using historical data to predict future trends. This can be used to make better inventory, budgeting, and operational decisions.',
          connected: false,
        },
        {
          id: 3,
          title: 'Product development',
          color: '#F38218',
          description: ' This App supports the businesses with series of stages such as design, conceptualization and development of new products.',
          connected: true,
        },
        {
          id: 4,
          title: 'Procurement & Sourcing',
          color: '#1273EB',
          description: 'Umoja procurement feature offers businesses the process of purchasing goods such as raw materials and services directly from their vendors.',
          connected: false,
        },
        {
          id: 5,
          title: 'Production planning',
          color: '#333333',
          description: `Production planning describes in detail how your company's products will be manufactured with accurate raw material planning.`,
          connected: false,
        },
        {
          id: 6,
          title: 'Project & Tasks',
          color: '#00966D',
          description: 'This tool assists your initiation, planning, control, monitoring, implementation, and follow-up of projects and tasks in your organization.',
          connected: false,
        },
       
        {
          id: 7,
          title: 'Umoja customer insights',
          color: '#333333',
          description: 'This tool offers businesses insights to understand the customer behaviour in Umoja. We offer our vendors analysed customer data to better attract and create more useful products.',
          connected: true,
        },
        {
          id: 8,
          title: 'Warehousing',
          color: '#835353',
          description: 'Warehousing – This App helps businesses encompass the principle and process involved in running the day-to-day operations of a warehouse.',
          connected: false,
        },
        {
          id: 9,
          title: 'Store & Online channel',
          color: '#F0B136',
          description: 'With this tool, we offer businesses the opportunity to manage their physical and online stores.',
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
