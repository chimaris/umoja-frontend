<template>
    <div style="z-index: 99999; position: fixed;bottom: 40px;right: 30px;" class="">
        <div :ripple="false" @click="animateBtn(menubol)" :style=" 'width:' + ('64px')"

            style="cursor: pointer; z-index: 99;height: 200px; background-color: transparent;
 background-repeat: no-repeat;   background-position: right;overflow: hidden;
 position: relative; right: 3px; "
            class=" py-4 px-6 card d-flex  align-center" >
<img height="200" width="30" style="position: absolute;left: 0;" src="https://res.cloudinary.com/payhospi/image/upload/v1696060844/Paper_left_ibphsv.png" 
class="left" />
<img height="200" width="500" style="position: absolute;" src="https://res.cloudinary.com/payhospi/image/upload/v1696060863/Paper_center_u1gxbz.png" 
class="center" />
<div v-if="timer" style="position: absolute;height: 150px; width: calc(500px - 48px);overflow-y: scroll;" class="text-center pa-3">

        <p class="nishi">Tutorial starts in</p>
            <h1 class="nishi countdown text-black" style="    border: 1px solid black;
    font-size: 55px;
    width: 87px;
    border-radius: 50%;
    height: 87px;    padding-bottom: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    margin-top: 9px;" >{{count}}</h1>
        </div>
        <div v-show="!timer" style="position: absolute;height: 150px;width: calc(100% - 48px);overflow-y: scroll;" class="d-flex  align-end pa-3">
            <p style="  width: 500px!important;   position: ;
    bottom: ; font-size: 20px;" v-html="text" class="rower nishi"> </p>
    </div>
    <img height="200" width="30" style="position: absolute;right: 0;" src="https://res.cloudinary.com/payhospi/image/upload/v1696060847/Paper_right_llq8uq.png" 
    class="right" />
</div>

           
        </div>
    <div style="z-index: 99999; position: fixed;bottom: 5px;right: 30px;" class="d-flex justify-space-between ">
<v-btn size="x-small" @click="muted = !muted" class=" ml-2" rounded="xl" color="black" :icon="!muted ? 'mdi mdi-volume-high' : 'mdi mdi-volume-off'"></v-btn>
<v-btn size="x-small" class=" ml-2" @click="scrollbol? stopscroll():continuescroll()" rounded="xl" color="black" :icon="scrollbol? 'mdi mdi-stop' : 'mdi mdi-play'"></v-btn>
<v-btn size="x-small" class=" ml-2" @click="previous()" rounded="xl" color="black" icon="mdi mdi-arrow-left"></v-btn>
<v-btn size="x-small" class=" ml-2" @click="nextRoute()" rounded="xl" color="black" icon="mdi mdi-arrow-right"></v-btn>
</div>
</template>

<script>
import { gsap, Back } from 'gsap';
import {Howl, Howler} from 'howler';

export default {
data() {
    return {
        select: '',
        // selectIndex: 0,
        menubol: true,
        sound: null,
        muted: false,
        timer: false,
        scrollbol: true,
        text: '',
        count: 5,
        scrollTimeline: null,
        scrollTarget: null,
        databank:[
        {
        description: 'The homepage of Umoja, is the start page of the platform. Here the users can explore on any part of the map to discover more about the different markets, potential and culture',
        route: '/home2',
        function: 'Homepage – The homepage or the map shows the different African markets around the world. This means by clicking on one of the markets, such as Nigeria, you will be shown the different Nigerian markets around the world. This means that, the businesses are not only based in Africa, but we believe that African representatives can be found all over the world. <br> Landing page – As a marketplace, we want our vendors to stand out, that is why we promote and celebrate their success on our platform. Also, by clicking on any of the category like fashion or Art, our users can get exclusive news or product based on their preferences like fashion, art, cosmetic or home decoration',
        audio: ''
    },

    {
        description : `The Umoja fashion category represents and celebrates everything about fashion in the Umoja platform.`,
        route: `/fashion`,
        function: `Fashion category – In our fashion category, we make it a point to celebrate our fashion sellers. Our users or fashion buyers can connect and have a unique experience through our fashion world with examples like newly launched fashion products, fashion content like posts and videos related to the fashion sellers.`,
        audio: ''
    },
    {
        description : `In our fashion category, we make it a point to celebrate our fashion sellers. Our users or fashion buyers can connect and have a unique experience through our fashion world with examples like newly launched fashion products, fashion content like posts and videos related to the fashion sellers.`,
        route: `/art`,
        function: `Art category – In our art category, we value celebrating our sellers. Our users or art buyers can connect and have a unique experience through our art world with examples such as newly launched art products, art content such as posts and videos about the respective sellers.`,
        audio: ''
    },
    {
        description : `The Umoja cosmetic category represents and celebrates everything about cosmetics vendors in the Umoja platform.`,
        route: `/cosmetics`,
        function: `Cosmetic Category - In our cosmetics category, we emphasize celebrating our vendors. Our users or cosmetic buyers can connect and have a unique experience in our cosmetic world, for example, with newly launched cosmetic products, cosmetic content like posts and videos about the vendors.`,
        audio: ''
    },
    {
        description : `The Umoja Home decoration category represents and celebrates everything about home decoration in the Umoja platform.`,
        route: `/home%20decoration`,
        function: `Home decoration category - in our home decor category, we make it a point to celebrate our home decor vendors. Our users or buyers of natural and home decor can connect and have a unique experience through our home decor world with examples like newly launched decor products, home decor content like posts and videos about the vendors.`,
        audio: ''
    },
    {
        description : `With the Umoja discovery page, we offer our users a creative platform, where they can explore more than just the vendor product but also learn about the different African cultures.`,
        route: `/discovery_page`,
        function: `Discovery page – On the Umoja discovery page, customers (users) can filter by the different African countries. This allows users to experience and learn about the content and cultures of each provider and their countries. Vendors can post content such as videos, images and articles (only related to the product and its business creative content). In this way, Umoja helps businesses connect more with users.`,
        audio: ''
    },
    {
        description : `For the user to explore and interact with our vendors in the Umoja platform, we provided our users with a personalized profile.`,
        route: `/user/profile/Account Settings`,
        function: `Account Settings – The users can add and change its personal and address information as well as deleting its profile in the platform.`,
        audio: ''
    },
    {
        description : `With Umoja being a creative profile, our users can follow their favourites stores & vendors.`,
        route: `/user/profile/Following`,
        function: `Following - in connecting our vendors to their customers, Umoja has built a platform where the vendors can share update with their following through the platform. The users also view and edit its favourites vendors here. `,
        audio: ''
    },
    {
        description : `users can manage their password in the settings.`,
        route: `/user/profile/Manage Password`,
        function: `Manage passwords - Here we offer the user the opportunity to update its password through the Umoja platform.`,
        audio: ''
    },
    {
        description : `In the order history, the users can view the details of their deliveries.`,
        route:`/user/profile/Order%20History`,
        function: `Order history – Umoja is all about simplifying and transparency. The User can get the full details of their orders, which includes the ordered products, or information from the vendor as well as the status of the order.`,
        audio: ''
    },
    {
        description : `Users can view and edit the payment methods`,
        route: `/user/profile/Payment method`,
        function: `Users can add or delete their payment methods with this function.`,
        audio: ''
    },
    {
        description : `The user can view its address here.`,
        route: `/user/profile/Address`,
        function: `Adress - The users can have multiple addresses added to their profile depending on their various locations.`,
        audio: ''
    },
    {
        description : `The user can set their notification parameter here.`,
        route: `/user/profile/Notification`,
        function: `Notifications - In the notification parameter, the users can define their notification settings such as Email settings and other activities like communication settings with vendors.`,
        audio: ''
    },
    {
        description : `When a provider decides to partner with Umoja, they must first register their company on our platform. This allows the Umoja team to process and verify the companies.`,
        route: `/vendor/login`,
        function: `Login - Here the Umoja vendors have already done through the verification process of Umoja. The vendors would be able to access their personalized vendor dashboards and profile through the login option.`,
        audio: ''
    },
    {
        description : `Here the Vendors provide Umoja with their company information.`,
        route: `/vendor/registeration/form`,
        function: `Company information – With the company information, Umoja can verify the basic information of the company such as location, name, and the African country the company is associated with. This allows Umoja to verify that the company fits the Umoja business.`,
        audio: ''
    },
    {
        description : `With the Owner information, Umoja collects the data of the business owner as part of the verification process.`,
        route: `/vendor/registeration/form/owner_info`,
        function: `Ownership information – As part of supporting local businesses and African owned businesses, Umoja is also takes part in reviewing the owner the business as part of keeping the authenticity of the platform.`,
        audio: ''
    },
    {
        description : `Vendors need to prove the legibility of their businesses.`,
        route: `/vendor/registeration/form/business_documentation`,
        function: `Business documentation – To ensure that we work with genuine and proven companies, Umoja requires documents proving the legality of the company. Sellers must provide Umoja with the business registration number and company invoices to ensure the legitimacy of the business.`,
        audio: ''
    },
    {
        description : `After fulfilling the requirements and providing the documents. The vendor submits the application for review.`,
        route: `/vendor/registeration/form/review_submit`,
        function: `Review and Submit –  After submitting the application, the Umoja team processes and verifies the legitimacy of the seller's company. After successful verification, the seller will then receive an email from Umoja regarding the creation of the seller profile.`,
        audio: ''
    },
    {
        description : `With our solution, we provide vendors with various applications and supply chain capabilities that help them gain full business visibility and manage their business with ease.`,
        route: `/vendor/dashboard/homepage`,
        function: `Vendor Homepage – The vendor homepage shows the profile and the content like products, posts, articles of the vendor.The supplier has an overview of his profile with the homepage. The supplier homepage allows the vendor to edit their bio, profile, supplier description and the contents like products, post, and articles.`,
        audio: ''
    },
    {
        description : `With the dashboard, the seller can get an overview of the activities of his online store/ business.`,
        route: `/vendor/dashboard/overview`,
        function: `Dashboard - The dashboard gives the vendors in a blink an overview and understanding of the business. The vendors can get an overview of its total revenue, customer growth, Business growth and product stock management.`,
        audio: ''
    },
    {
        description : `The order management supports the vendors with a detailed overview of all their orders on and off the Umoja marketplace.`,
        route: `/vendor/dashboard/orders`,
        function: `Orders - With the Order management, the vendors can manage all orders seamlessly, view the order details and can communicate with the customers through the Umoja platform regarding the orders, in case of coordination or product issues.`,
        audio: ''
    },
    {
        description : `Vendors can manage and add and edit products and manage their stock in the product page.`,
        route: `/vendor/dashboard/products`,
        function: `Products -  In the product page, the vendors get an overview of all products both available, out of stock and create new products in the platform.`,
        audio: ''
    },
    {
        description : `Our vendors can manage both offline and online customers seamlessly in the customer page.`,
        route: `/vendor/dashboard/customers`,
        function: `Customers – Vendors can analyse their customer base and get valuable information like customer age, country, sex, and shopping history. Which would help them in understanding the users to full potential`,
        audio: ''
    },
    {
        description : `Businesses can get an overview of their product sales performance in the sales page.`,
        route: `/vendor/dashboard/sales`,
        function: `Sales – The sales page shows the businesses the figures and growth performances of each product. Meaning the vendors can analyse the growth of their business per category and per products, which gives the businesses an analytical overview of the business growth.`,
        audio: ''
    },
    {
        description : `The review page, allows vendor to manage the and have an overview of its business reviews, directly from the customer.`,
        route: `/vendor/dashboard/reviews`,
        function: `Review – Vendors can manage and analyse the review of each product being sold in the platform. The vendors can reply directly to the customer review in the Umoja platform. Businesses are also able to view the different ratings of their products.`,
        audio: ''
    },
    {
        description : ` Umoja allows vendors to share their business publications in through the Post page.`,
        route: `/vendor/dashboard/posts`,
        function: `Post – With the post, vendors can directly share their publications like videos, posts and other contents related to their products and businesses. The purpose of this, is for the businesses to communicate more than their products, that means emphasis is on the creativity of the vendors.`,
        audio: ''
    },
    {
        description : `With the articles, the vendors are allowed to share business and cultural contents directly to the customers.`,
        route: `/vendor/dashboard/articles`,
        function: `Article – The Vendors can share articles related to their business with the article post. These articles as well as the post would be part of the publications on the Umoja discovery page.`,
        audio: ''
    },
    {
        description : `With the notifications vendors can manage and have an overview of all actives in the platform.`,
        route: `/vendor/dashboard/notifications`,
        function: `Notification – The notification is split into 4 categories, the “Order notifications”, “Products notifications”, “customer notifications” and “review notifications”. With these, the businesses can manage and have an overview on all activities on the platform.`,
        audio: ''
    },
    {
        description : `Here the vendors can set up their and configure their profile.`,
        route: `/vendor/dashboard/settings`,
        function: `Settings – The settings allow businesses to manage their profile, set their passwords, configure their notifications, as well as add a payment account number to receive payments and select a billing plan from Umoja to start their business with Umoja.`,
        audio: ''
    },
    {
        description : `Here Umoja offers the businesses Applications and tools, that supports their entire supply chain process.`,
        route: `/vendor/dashboard/apps`,
        function: `Umoja Apps – Umoja provides companies with applications to support the entire supply chain process. Our offerings range from tools for procurement, production, forecasting and planning to CRM tools to help companies with internal projects and management. Umoja aims to provide companies with an all-in solution for suppliers to improve visibility and manage the business seamlessly on one platform.`,
        audio: ''
    },
            ]
        }
    },

    computed: {
            res(){
                return this.databank.find((el)=>{
                    return el.route == this.$route.path
                })
            },
            selectIndex(){
                return this.databank.findIndex((el)=>{
                    return el.route == this.$route.path
                })
            },
            prev(){
                var dat = {}
                if (this.selectIndex == 0) {
                             dat = this.databank[this.databank.length - 1]
                            }else{
    
                             dat = this.databank[this.selectIndex - 1] 
                            }
                return dat
            },
            nextR(){
                var dat = {}
                        if (this.selectIndex == (this.databank.length - 1)) {
                            dat = this.databank[0]
                        }else{

                            dat = this.databank[this.selectIndex + 1] 
                        }
                return dat
            },
    },
    mounted(){
        this.scrollTarget = document.documentElement; // You can also use document.body
        gsap.to(this.scrollTarget, { scrollTop: 0,} )

        if (!this.timer && this.$route.path == '/home2') { 
            this.timer = true 
            this.animateBtn(false)
            this.countdown()
            this.scrolltobottom()
        }else{
            this.timer = false
            this.animateBtn(false)
            this.scrolltobottom()
        }
    },
    methods: {
    stopscroll(){
        this.scrollbol = !this.scrollbol
        this.scrollTimeline.kill()
    },
    continuescroll(){
        this.scrollbol = !this.scrollbol
        this.scrollTimeline.play()
    },
    async scrolltobottom(){
                ; // You can also use document.body
     await this.scrollTarget.scrollTo({x:0,y:0, behavior: 'smooth' });
            const duration = 20; // Duration in seconds
const delay = 3;    // Delay in seconds
const sn = this
// Create a GSAP timeline for the scrolling animation
const scrollTimeline = gsap.timeline();
this.scrollTimeline = scrollTimeline
// Add a scroll animation to the timeline
scrollTimeline.fromTo(this.scrollTarget,
{
scrollTop: 0, // Start at the top of the page
},
{
scrollTop: this.scrollTarget.scrollHeight, // Scroll to the bottom
duration: duration,  // Duration of the scroll animation
delay: delay, // Easing function (optional)
});
scrollTimeline.to(this.scrollTarget, 
{
  scrollTop:0, 
  duration:5,
  delay: -3,
  onComplete: ()=> {
      sn.nextRoute()
  }
}
)
        },
        previous(){
            this.animateBtn(true)
            setTimeout(() => {
           this.$router.push(this.prev.route)
            }, 700);
        },
        nextRoute(){
            this.animateBtn(true)
            setTimeout(() => {
           this.$router.push(this.nextR.route)
            }, 700);
        },
        aimateText() {
           this.text = '';
            const res2 = this.res.function;
            let textPosition = 0;
            let speed = 80;
            const typeWriter = () => {
               this.text =
                res2.substring(0, textPosition);
                if (textPosition++ < res2.length) {
                    setTimeout(typeWriter, speed);
                } else {
                  return
                };
            }
            typeWriter();
        },
        countdown(){
            // if(this.count == 0) return
           const intv =  setInterval(() => {
                if(this.count > 0){
                    this.count--
                }else{
                    this.timer = false
                    this.aimateText()

                    clearInterval(intv)
                    return
                }
            }, 1000);
        },
        mksound(){
            this.sound = new Howl({
  src: ['https://res.cloudinary.com/payhospi/video/upload/v1696066412/gamevideo-item-turning-page-paper-sound-effect-186184608_nw_prev33_ce5igm.wav'],
  volume: 0.4,
});
        },
        
        animateBtn(x) {


            // return
            if(!this.sound) this.mksound()
            this.text = '';
        const img = document.querySelector('.img');
        // const img2 = document.querySelector('.img2');
        const card = document.querySelector('.card');
        
        var tl = gsap.timeline();
        
        tl.fromTo([card],
        {
            width: '64px',
            duration: 1,
            
        },
        {
            width: '500px',
            duration: 0.7,
            delay: x? 0 : 0.5,
            reversed: x,
            onStart: ()=> {
                if(!this.muted) this.sound.play()
            },
        ease: Back.easeOut.config(1.7),
        onComplete: ()=> {
            this.text = ''
            if (!this.timer) {
                this.aimateText()
            }
                    }
                })
                
        }
    }
}
</script>