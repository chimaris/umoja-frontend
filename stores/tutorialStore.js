// tutorialStore.js
import { defineStore } from 'pinia';

export const useTutorialStore = defineStore({
  id: 'tutorial',
  state: () => ({
    tutorial: false,
    loading: false,
    databank:[
      {
      description: 'The homepage of Umoja, is the start page of the platform. Here the users can explore on any part of the map to discover more about the different markets, potential and culture',
      route: '/home2',
      function: `Hi I am Dorothy, I will be taking you on a tour of the Umoja Platform. <br> Exploring African Markets: Begin your Umoja journey on the homepage, a vibrant map revealing African markets worldwide. Click on markets like Nigeria to explore businesses not just in Africa but globally. Our platform celebrates vendors' success and offers exclusive news and products in fashion, art, cosmetics, and home decoration.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590688/umoja%20audio/Hi_I_am_Dorothy_1_v72cbv.wav'
  },

  {
      description : `The Umoja fashion category represents and celebrates everything about fashion in the Umoja platform.`,
      route: `/fashion`,
      function: `Fashion Fiesta: Step into the Fashion Category, where we celebrate fashion sellers. Dive into a world of style, discover new fashion trends, and engage with fashion content like posts and videos that showcase seller creativity.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590230/umoja%20audio/03_-_Fashion_Fiesta_1_trkzrq.wav'
  },
  {
      description : `In our fashion category, we make it a point to celebrate our fashion sellers. Our users or fashion buyers can connect and have a unique experience through our fashion world with examples like newly launched fashion products, fashion content like posts and videos related to the fashion sellers.`,
      route: `/art`,
      function: `Artistic Escapade: In our Art Category, we cherish our sellers. Immerse yourself in artistic experiences with newly launched art products and captivating art content, including posts and videos.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590237/umoja%20audio/04_-_Artistic_Escapa_1_l6ww6v.wav'
  },
  {
      description : `The Umoja cosmetic category represents and celebrates everything about cosmetics vendors in the Umoja platform.`,
      route: `/cosmetics`,
      function: `Cosmetic Charm: Our Cosmetic Category is a celebration of beauty. Connect with cosmetic vendors and explore new products, along with engaging cosmetic content like posts and videos.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590231/umoja%20audio/05_-_Cosmetic_Charm_1_vuswko.wav'
  },
  {
      description : `The Umoja Home decoration category represents and celebrates everything about home decoration in the Umoja platform.`,
      route: `/home%20decoration`,
      function: `Home Decor Delight: Enter our Home Decoration Category and celebrate home decor vendors. Connect with natural and home decor sellers, discover fresh decor products, and engage with inspiring decor content.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590236/umoja%20audio/06_-_Home_Decor_Deli_1_fyevpd.wav'
  },
  {
      description : `With the Umoja discovery page, we offer our users a creative platform, where they can explore more than just the vendor product but also learn about the different African cultures.`,
      route: `/discovery_page`,
      function: `Discover Africa: On the Umoja Discovery Page, immerse yourself in African cultures. Filter by countries to learn about diverse cultures, with vendors sharing videos, images, and articles related to their businesses, fostering connections.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590248/umoja%20audio/07_-_Discover_Africa_1_cicgvh.wav'
  },
//   {
//       description : `With the Umoja discovery page, we offer our users a creative platform, where they can explore more than just the vendor product but also learn about the different African cultures.`,
//       route: `/market_place`,
//       function: `Discover Africa: On the Umoja Discovery Page, immerse yourself in African cultures. Filter by countries to learn about diverse cultures, with vendors sharing videos, images, and articles related to their businesses, fostering connections.`,
//       audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590248/umoja%20audio/07_-_Discover_Africa_1_cicgvh.wav'
//   },
  {
      description : `For the user to explore and interact with our vendors in the Umoja platform, we provided our users with a personalized profile.`,
      route: `/user/profile/Account Settings`,
      function: `Personalize Your Journey: Customize your profile in Account Settings. Manage personal information, addresses, and profile deletion for a personalized Umoja experience.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590235/umoja%20audio/08_-_Personalize_You_1_h1oabw.wav'
  },
  {
      description : `With Umoja being a creative profile, our users can follow their favourites stores & vendors.`,
      route: `/user/profile/Following`,
      function: `Stay Connected: Follow vendors in our Following feature. Vendors share updates, and you can manage your favorite vendors with ease.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590237/umoja%20audio/09_-_Stay_Connected_1_oywawu.wav'
  },
  {
      description : `users can manage their password in the settings.`,
      route: `/user/profile/Manage Password`,
      function: `Password Management: Update your password securely through Umoja.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590235/umoja%20audio/10_-_Password_Manage_1_o3e9ew.wav'
  },
  {
      description : `In the order history, the users can view the details of their deliveries.`,
      route:`/user/profile/Order%20History`,
      function: `Order Transparency: Access complete order details, including product information, vendor communication, and order status, ensuring transparency.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590245/umoja%20audio/11_-_Order_Transpare_1_iqdpvd.wav'
  },
  {
      description : `Users can view and edit the payment methods`,
      route: `/user/profile/Payment method`,
      function: `Payment Convenience: Manage payment methods effortlessly.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590239/umoja%20audio/12_-_Payment_Conveni_1_zpuu1d.wav'
  },
  {
      description : `The user can view its address here.`,
      route: `/user/profile/Address`,
      function: `Address Flexibility: Add multiple addresses to your profile, catering to various locations.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590240/umoja%20audio/13_-_Address_Flexibi_1_ic05u1.wav'
  },
  {
      description : `The user can set their notification parameter here.`,
      route: `/user/profile/Notification`,
      function: `Stay Informed: Define notification settings, including email preferences and communication with vendors.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590238/umoja%20audio/14_-_Stay_Informed_1_hdqpmg.wav'
  },
  {
      description : `When a provider decides to partner with Umoja, they must first register their company on our platform. This allows the Umoja team to process and verify the companies.`,
      route: `/vendor/login`,
      function: `Vendor Access: Vendors login to access personalized dashboards and profiles, simplifying business management.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590244/umoja%20audio/15_-_Vendor_Access_1_ohk9x5.wav'
  },
  {
      description : `Here the Vendors provide Umoja with their company information.`,
      route: `/vendor/registeration/form/Companys Information`,
      function: `Verify Business: Submit company information for verification, ensuring authenticity.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590240/umoja%20audio/16_-_Verify_Business_1_mzx54t.wav'
  },
  {
      description : `With the Owner information, Umoja collects the data of the business owner as part of the verification process.`,
      route: `/vendor/registeration/form/Ownership Information`,
      function: `Owner Authentication: Umoja reviews business owners to maintain platform authenticity.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590241/umoja%20audio/17_-_Owner_Authentic_1_hvcgfo.wav'
  },
  {
      description : `Vendors need to prove the legibility of their businesses.`,
      route: `/vendor/registeration/form/Business Documentation`,
      function: `Legal Documentation: Verify your business with legal documents, ensuring trustworthiness.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590230/umoja%20audio/18_-_Legal_Documenta_1_qb0xtu.wav'
  },
  {
      description : `After fulfilling the requirements and providing the documents. The vendor submits the application for review.`,
      route: `/vendor/registeration/form/Review and Submit`,
      function: `Profile Creation: After verification, receive an email confirming your seller profile creation.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590241/umoja%20audio/19_-_Profile_Creatio_1_qhnrcn.wav'
  },
  {
      description : `With our solution, we provide vendors with various applications and supply chain capabilities that help them gain full business visibility and manage their business with ease.`,
      route: `/vendor/dashboard/Homepage`,
      function: `Vendor Showcase: The Vendor Homepage displays profiles, products, and content. Edit your bio, profile, and product listings with ease.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590247/umoja%20audio/20_-_Vendor_Showcase_1_usjrso.wav'
  },
  {
      description : `With the dashboard, the seller can get an overview of the activities of his online store/ business.`,
      route: `/vendor/dashboard/Dashboard`,
      function: `Business Insights: Access the Dashboard for a quick overview of your business, including revenue, customer growth, and stock management.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590245/umoja%20audio/21_-_Business_Insigh_1_yytgra.wav'
  },
  {
      description : `The order management supports the vendors with a detailed overview of all their orders on and off the Umoja marketplace.`,
      route: `/vendor/dashboard/Orders`,
      function: `Order Management: Seamlessly manage orders, communicate with customers, and address coordination or product issues.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590243/umoja%20audio/22_-_Order_Managemen_1_p5mcjq.wav'
  },
  {
      description : `Vendors can manage and add and edit products and manage their stock in the product page.`,
      route: `/vendor/dashboard/Products`,
      function: `Product Control: View all products, manage stock, and create new listings conveniently.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590242/umoja%20audio/23_-_Product_Control_1_s0yd0h.wav'
  },
  {
      description : `Our vendors can manage both offline and online customers seamlessly in the customer page.`,
      route: `/vendor/dashboard/Customers`,
      function: `Customer Analysis: Analyze your customer base, gaining insights into demographics and shopping history.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590244/umoja%20audio/24_-_Customer_Analys_1_sglalx.wav'
  },
  {
      description : `Businesses can get an overview of their product sales performance in the sales page.`,
      route: `/vendor/dashboard/Sales`,
      function: `Sales Performance: Track product sales and business growth for data-driven decisions.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590241/umoja%20audio/25_-_Sales_Performan_1_zuqk3h.wav'
  },
  {
      description : `The review page, allows vendor to manage the and have an overview of its business reviews, directly from the customer.`,
      route: `/vendor/dashboard/Reviews`,
      function: `Review Management: Manage product reviews, reply to customers, and view product ratings.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590241/umoja%20audio/26_-_Review_Manageme_1_tzdj8g.wav'
  },
  {
      description : ` Umoja allows vendors to share their business publications in through the Post page.`,
      route: `/vendor/dashboard/Posts`,
      function: `Content Sharing: Share publications, videos, and posts to connect beyond products, emphasizing your creativity.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590247/umoja%20audio/27_-_Content_Sharing_1_qzyidv.wav'
  },
  {
      description : `With the articles, the vendors are allowed to share business and cultural contents directly to the customers.`,
      route: `/vendor/dashboard/Articles`,
      function: `Article Showcase: Share insightful articles related to your business, featured on the Umoja Discovery Page.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590244/umoja%20audio/28_-_Article_Showcas_1_ksnpr8.wav'
  },
  {
      description : `With the notifications vendors can manage and have an overview of all actives in the platform.`,
      route: `/vendor/dashboard/Notifications`,
      function: `Stay Informed: Manage notifications for orders, products, customers, and reviews.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590246/umoja%20audio/29_-_Stay_Informed_1_u8luae.wav'
  },
  {
      description : `Here the vendors can set up their and configure their profile.`,
      route: `/vendor/dashboard/Settings`,
      function: `Profile Configuration: Customize your profile, manage passwords, configure notifications, and set up payment accounts.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590248/umoja%20audio/30_-_Profile_Configu_1_z3quhx.wav'
  },
  {
      description : `Here Umoja offers the businesses Applications and tools, that supports their entire supply chain process.`,
      route: `/vendor/dashboard/All Apps`,
      function: `All-in-One Solution: Explore Umoja Apps for comprehensive supply chain support, from procurement to CRM, providing an integrated solution for seamless business management.`,
      audio: 'https://res.cloudinary.com/payhospi/video/upload/v1696590249/umoja%20audio/31_-_All-in-One_Solu_1_xknly5.wav'
  },
          ],
  }),
  getters: {
    getTutorial: (state) => state.tutorial,
    getLoading: (state) => state.loading,
    getDataBank: (state) => state.databank,
  },
  actions: {
    // Load the initial state from localStorage when the store is created
    // init() {
    //   const tutorialState = localStorage.getItem('tutorial');
    //   if (tutorialState !== null) {
    //     this.tutorial = JSON.parse(tutorialState);
    //   }
    // },
    setLoading() {
      this.loading = true;
    },
    resetLoading() {
      this.loading = false;
    },
    // Set the tutorial state and save it to localStorage
    setTutorial() {
      this.tutorial = true;
      // localStorage.setItem('tutorial', JSON.stringify(true));
    },
    // Reset the tutorial state and remove it from localStorage
    resetTutorial() {
      this.tutorial = false;
     
      // localStorage.removeItem('tutorial');
    },
  },
});

// Call the init action when the store is created to load the initial state

