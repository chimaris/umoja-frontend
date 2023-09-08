<template>
    <Header2 :maxwidth="'1200px'" />
    <div style="    position: sticky;
    top: 65px;
    background: white;
    z-index: 999;">
        <v-container style="max-width:1200px;width: 100%;" class="py-1">
            <div class="d-flex">
                <p style="cursor: pointer;font-size: 14px;" :class="select == n ? 'text-green font-weight-bold' : ''"
                    @click="selectCategory(n)" class="font-weight-medium text-capitalize py-3 px-4 mr-4 text-grey"
                    v-for="n in ['fashion', 'art', 'cosmetics', 'home decoration']" :key="n">{{ n }}</p>
            </div>
        </v-container>
    </div>

    <fashionhero v-if="select == 'fashion'" style="margin-bottom: 100px;" />
    <art v-else-if="select == 'art'" style="margin-bottom: 100px;" />
    <Decoration v-else-if="select == 'home decoration'" style="margin-bottom: 100px;" />
    <Cosmetics v-else-if="select == 'cosmetics'" style="margin-bottom: 100px;" />

    <shopmenu :databank="databank" />

    <product-row :vendorlist="databank.vendor.items" :category="select" style="margin: 100px auto;" :vendor="true" :maxwidth="'1200px'" :showVendor="true"
        :title="databank.vendor.title" />

    <newlylaunched :item="databank.newlylaunched" style="margin-bottom: 100px;" />

    <product-row style="margin-bottom: 100px;" :maxwidth="'1200px'" :showVendor="true"
    :title="databank.postadrow.title" :cover="false" :items="databank.postadrow.items"/>

    <PopularTwoRow style="margin-bottom: 100px;" :maxwidth="'1200px'" :items="databank.twocardrow.items" :title="databank.twocardrow.title" />
    <div :style="'background-color: #' + categoryColor">
        <Adcarousel :image="databank.adrow.image" :title="databank.adrow.title" :color="databank.adrow.color" style="margin-bottom: 50px;margin-top: 100px;" />
        <product-row
         :showdisco="true"
         style="padding-bottom: 140px; margin-bottom: 100px;" 
        :category="select" :cover="databank.postcarorow.cover" 
            :maxwidth="'1200px'"
             :showVendor="false" 
            :title="databank.postcarorow.title" 
             :items="databank.postcarorow.items"
             />
    </div>
    <PostsRow style="margin-bottom: 100px;" :maxwidth="'1200px'" :showVendor="true" 
    :title="databank.postRow.title" 
             :items="databank.postRow.items"
     />
    <Toplist style="margin-bottom:100px;" :maxwidth="'1200px'" :title="databank.toplist" />
    <Mainfooter :maxwidth="'1200px'" />
</template>
<script>
export default {
    data() {
        return {
            // select: 'Fashion'
        }
    },
    computed: {
        databank() {
            var fashion = {
                toplist: 'Vendors',
                menu: ['Men Clothes', 'Female Clothes', 'Shoes', 'Bags', 'Hats', 'Materials'],
                leftimage: 'https://res.cloudinary.com/payhospi/image/upload/v1693886644/Rectangle_22446_vukaqj.png',
                rightimage: 'https://res.cloudinary.com/payhospi/image/upload/v1693886640/Rectangle_22449_gc29v8.png',
                vendor:{
                    title :'🔥 Best Selling Fashion Stores',
                    items:[
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694165862/rectangle-22439pointgftg_tpujdo.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1693922523/ellipse-107_pajkls.png',
                            vendorName: 'Orderly Fashion',
                            subCategory: 'Unisex Wears'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694165862/rectangle-22439bangli8_wxwwk9.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107hgcj_boyj1l.png',
                            vendorName: 'Fashion De Africana',
                            subCategory: 'Jewelry'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694165862/rectangle-22439sunglasses_zpydih.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107jgchgx_suyemd.png',
                            vendorName: 'Woman Elegant',
                            subCategory: 'Materials'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694165861/rectangle-22439baggd_c4bkra.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107mhgs_j5208p.png',
                            vendorName: 'Me-Kweku Bags',
                            subCategory: 'Bags'
                        },
                    

                    ]
                },
                newlylaunched: {
                    mainImg: 'https://res.cloudinary.com/payhospi/image/upload/v1693923891/rectangle-22448hj_er8azk.png',
                    title:'Nawi’s Kente Materials',
                    items: [
                    {
        name: 'Nawi’s Kente Material, Blue - Available 100 - 30,000 yards',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-796-d-416305-eb-4758-b-6-bbba-310-e-078-fb-7-u-1gf_ps19db.png',
        price: '79.00',
        subCategory: 'Organic cotton certified',
        location: 'Accra, Ghana',
        likes: '66',
        oos: true
    },        {
        name: 'Nawi’s Kente Material, Blue - Available 100 - 30,000 yards',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cohff_d1hbgf.png',
        price: '79.00',
        subCategory: 'Organic cotton certified',
        location: 'Accra, Ghana',
        likes: '66',
        oos: true
    },
                    ]
                },
                postadrow:{
                    title: '💰 Most Selling Products',
                    items: [
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-796-d-416305-eb-4758-b-6-bbba-310-e-078-fb-7-u-2capjy_a5tncs.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170676/s-2-gs-x-1-po-lshoeuhyf_acrhye.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170674/ankara-sneakers-1500-xchapkufk_ykmili.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cosahoes_oifr7p.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ]
                },
                twocardrow:{
                    title: '⚡️ Popular fashion products of the week',
                    items: [
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1693932651/rectangle-22440j_qr3baf.png',
                            name: 'Koko Rachel Deco Set',
                            vendorName: 'Nweke Franklin O.'
                        },
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1693932635/rectangle-22440_iixqtu.png',
                            name: 'The Nawi Scarfs',
                            vendorName: 'Okoli Cecilia Bona.'
                        },
                    ]
                },
                adrow:{
                    title:'Style Meets Substance',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1690541372/rectangle-69_jzdwc3.png',
                    color: '#2C6E63',
                },
                postcarorow:{
                    title: '💰 Discounted% Fashion',
                    items: [
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-796-d-416305-eb-4758-b-6-bbba-310-e-078-fb-7-u-1gf_ps19db.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1691574327/s-2-gs-x-1-po-l_ckeqxo.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694170675/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cosahoes_oifr7p.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694169115/h-468-a-70379-a-6043119-f-5077-bf-8-ba-35-a-7-cohff_d1hbgf.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ],
                    cover:false
                },
                postRow: {
                    title: 'Top Fashion Posts',
                    items: [
                {
                    vendorName: 'Nana Akufo-Addo',
                    vendorCategory: 'Fashion',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png',
                   
                    name: 'Koko Rachel Deco Set',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1693937412/rectangle-53ml_m1ypgc.png',
                    price: '115.32',
                    
                    location: 'Accra, Ghana',
                    likes: '1.2k',
                    imgs: '2'
                },
                {
                    vendorName: 'Bonsu Thompson',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png',
                    vendorCategory: 'Stylist',
                    name: 'The Nawi Scarfs',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1693937299/rectangle-53kn_cwwmsk.png',
                    price: '79.00',
                    location: 'Accra, Ghana',
                    likes: '66',
                    video:true,
                    imgs: '4',
                    oos: true
                },
                {
                    vendorName: 'Dede Ayew',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png',
                    vendorCategory: 'Leather',
                    name: 'Koko Rachel Deco Set',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1693937337/rectangle-53_j6orgd.png',
                    price: '115.32',
                    location: 'Accra, Ghana',
                    imgs: '5',
                    likes: '1.2k',
                },
                {
                    vendorName: 'Bonsu Thompson',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png',
                    vendorCategory: 'Stylist',
                    name: 'The Nawi Scarfs',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694179222/rectangle-53tstdey6_lqnbcj.png',
                    price: '79.00',
                    video:true,
                    imgs: '4',
                    location: 'Accra, Ghana',
                    likes: '66',
                    oos: true
                },
            ]
                }

            }
            var art = {
                toplist: 'Artists',
                menu: ['Drawing', 'Painting', 'Sculpting', 'Photography', 'Decorative Ads'],
                leftimage: 'https://res.cloudinary.com/payhospi/image/upload/v1694074702/rectangle-22446menuimg_cdaffb.png',
                rightimage: 'https://res.cloudinary.com/payhospi/image/upload/v1694074702/rectangle-22449menuim_rgo5y3.png',
                vendor:{
                    title :'🔥 Top Artist of the Week',
                    items:[
                       {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22439top_tpijcc.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107jgchgx_suyemd.png',
                            vendorName: 'Dami the Illustrator',
                            subCategory: 'Illustrator'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074699/rectangle-22439top2_lqkqnb.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166901/ellipse-107jmdjusytx_aouwg2.png',
                            vendorName: 'Quill Pen',
                            subCategory: 'Illustrations'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074688/rectangle-22439de434_xd9cda.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107hdj34_bl9fbu.png',
                            vendorName: 'Zendiya Photography',
                            subCategory: 'Photographer'
                        },
                    
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22439decgtt5_rnk30c.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107nhgfer56_jtbt6v.png',
                            vendorName: 'Wakanda Painting',
                            subCategory: 'Carpentry'
                        },
                ]
            },
            newlylaunched: {
                    mainImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694074716/rectangle-22448-ape_pdjj7z.png',
                    title:'The African Giant',
                    items: [
                    {
        name: 'The African Giant - 02',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899-ape_t7onzg.png',
        price: '150000.00',
        subCategory: 'Oil Canvas',
        location: 'Accra, Ghana',
        likes: '66',
        oos: true
    },        {
        name: 'The African Giant - 03',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899aep_yaihtb.png',
        price: '15000.00',
        subCategory: 'Oil Canvas',
        location: 'Accra, Ghana',
        likes: '66',
        oos: true
    },
                    ]
                },
                postadrow:{
                    title: '💰 Popular Collection',
                    items: [
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074696/rectangle-1899popular_us0ywj.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074689/rectangle-1899-popular3_q0cyie.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899-popular_q1v0dp.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074686/rectangle-1899-pop_vbpz4e.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ]
                },
                  twocardrow:{
                    title: '⚡️ Ongoing Bids',
                    items: [
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074723/rectangle-22440ele_ceelbp.png',
                            name: 'Elephant Hand Painting',
                            vendorName: 'Nweke Franklin O.',
                            bid: 2430.00
                        },
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074703/rectangle-22440childh_cih4ih.png',
                            name: 'The Child',
                            vendorName: 'Okoli Cecilia Bona.',
                            bid: 2430.00
                        },
                    ]
                },
                   adrow:{
                    title:`From Hands to Heart: A Glimpse of Africa's Soul`,
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074687/rectangle-69nhf_cfnrsk.png',
                    color: '#F38218',
                },
                postcarorow:{
                    title: '💰 Discounted% Art',
                    items: [
                    {
        name: 'The African Lady Digital Painting representing the African heritage.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074688/rectangle-1899nhytr_lluczc.png',
        price: '150000.00',
        subCategory: 'Digitized Art',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Monumental Faces of Africa',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074694/rectangle-1899mjgf_ksuqy2.png',
        price: '150000.00',
        subCategory: 'Hand Drawing',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Sangos Wooden Head Sculpture',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074691/rectangle-1899mkjhgf_rxc7tm.png',
        price: '150000.00',
        subCategory: 'Sculpture',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Four Singing Slave of the Oduduwa Dynasty 18th Century Era',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-1899bhtd_toet5d.png',
        price: '150000.00',
        subCategory: 'Painting',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ]
                },   postRow: {
                    title: 'Top Art Posts',
                    items: [
                {
                    vendorName: 'Nana Akufo-Addo',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png',
                    vendorCategory: 'Sculptor',
                   
                    name: 'Koko Rachel Deco Set',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074681/rectangle-53mkjg_wvuwp4.png',
                    price: '115.32',
                    
                    location: 'Accra, Ghana',
                    likes: '1.2k',
                    imgs: '2'
                },
                {
                    vendorName: 'Bonsu Thompson',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png',
                    vendorCategory: 'Artist',
                    name: 'The Nawi Scarfs',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074680/rectangle-53fres_hpe8fi.png',
                    price: '79.00',
                    location: 'Accra, Ghana',
                    likes: '66',
                    video:true,
                    imgs: '4',
                    oos: true
                },
                {
                   vendorName: 'Dede Ayew',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png',
                    vendorCategory: 'Painter',
                    
                    name: 'Koko Rachel Deco Set',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-53mjgd_b1w4zw.png',
                    price: '115.32',
                    location: 'Accra, Ghana',
                    imgs: '5',
                    likes: '1.2k',
                },
                {
                    vendorName: 'Bonsu Thompson',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png',
                    vendorCategory: 'Sculptor', 
                    name: 'The Nawi Scarfs',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694179128/rectangle-53gchh_i4oodq.png',
                    price: '79.00',
                    video:true,
                    imgs: '4',
                    location: 'Accra, Ghana',
                    likes: '66',
                    oos: true
                },
            ]
                }
            }
            var decoration = {
                toplist: ' Home Decorators',
                menu: ['Traditional Textiles', 'Handcrafted Furniture', 'Lighting and Lamps', 'Ethnic Wall Art', 'Ceramics and Pottery', 'Woven Baskets'],
                leftimage: 'https://res.cloudinary.com/payhospi/image/upload/v1694074704/rectangle-22446decor1_rqmkk9.png',
                rightimage: 'https://res.cloudinary.com/payhospi/image/upload/v1694074706/rectangle-22449deco2_ahqyc3.png',
                vendor:{
                    title :'🔥 Top Decor of the Week',
                    items:[
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074687/rectangle-22439decpr3_q2sgqw.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107jgchgx_suyemd.png',
                            vendorName: 'Dami the Illustrator',
                            subCategory: 'Illustrator'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074686/rectangle-1899decre43_gwsqgj.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166901/ellipse-107jmdjusytx_aouwg2.png',
                            vendorName: 'Quill Pen',
                            subCategory: 'Illustrations'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899jar_qnpb9n.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107hdj34_bl9fbu.png',
                            vendorName: 'Zendiya Photography',
                            subCategory: 'Crafts'
                        },
                    
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074693/rectangle-22439decgtt5_rnk30c.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107nhgfer56_jtbt6v.png',
                            vendorName: 'Wakanda Painting',
                            subCategory: 'Vase'
                        },
                ]
                    },
                    newlylaunched: {
                    mainImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694074722/rectangle-22448chair_o4slfz.png',
                    title:'The Wooden Chair',
                    items: [
                    {
        name: 'The African Chair - 02',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-1899chair32_s5rvxi.png',
        price: '150000.00',
        subCategory: 'Chair Canvas',
        location: 'Accra, Ghana',
        likes: '66',
        oos: true
    },        {
        name: 'The African Chair - 03',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899chair54_cjabfa.png',
        price: '15000.00',
        subCategory: 'Decor Canvas',
        location: 'Accra, Ghana',
        likes: '66',
        oos: true
    },
                    ]
                },
                postadrow:{
                    title: '💰 Popular Collection',
                    items: [
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074688/rectangle-1899decre_j9o27l.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074686/rectangle-1899decre43_gwsqgj.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-1899drscrt6_phtmzb.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074690/rectangle-1899nhdec_pcfegg.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ]
                }, 
                twocardrow:{
                    title: '⚡️ Ongoing Bids',
                    items: [
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074705/rectangle-22440ongodec_tjw2sp.png',
                            name: 'Bespoke Chair',
                            vendorName: 'Nweke Franklin O.',
                            bid: 2430.00
                        },
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074705/rectangle-22440gdy_g3ghz5.png',
                            name: 'Koko Rachel Deco Set',
                            vendorName: 'Okoli Cecilia Bona.',
                            bid: 2430.00
                        },
                    ]
                },
                   adrow:{
                    title:'The Woven Rafia Chair set by Wale Adeniyi.',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074701/rectangle-69artad_ctba3q.png',
                    color: '#000',
                },
                postcarorow:{
                    title: '💰 Discounted% Decor',
                    items: [
                    {
        name: 'Wooden Keg.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899jar_qnpb9n.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Multi colored Lantern.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-1899lmp_sradwn.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Vibrant Clay Pot',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074700/vse_mbwrbb.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Raft Fronds Basket',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074690/rectangle-1899bsk_s7kpta.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ]
                },
                postRow: {
                    title: 'Top Decor Posts',
                    items: [
                {
                    
                    vendorName: 'Nana Akufo-Addo',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png',
                    vendorCategory: 'Sculptor',
                   name: 'Koko Rachel Deco Set',

                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-53artpost_i1dui9.png',
                    price: '115.32',
                    
                    location: 'Accra, Ghana',
                    likes: '1.2k',
                    imgs: '2'
                },
                {
                    vendorName: 'Bonsu Thompson',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png',
                    vendorCategory: 'Artist',
                      
                    name: 'The Nawi Scarfs',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074680/rectangle-53artpt_qhdriv.png',
                    price: '79.00',
                    location: 'Accra, Ghana',
                    likes: '66',
                    video:true,
                    imgs: '4',
                    oos: true
                },
                {
                    vendorName: 'Dede Ayew',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png',
                    vendorCategory: 'Painter',
                    
                    name: 'Koko Rachel Deco Set',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074679/rectangle-53artre4_acefqy.png',
                    price: '115.32',
                    location: 'Accra, Ghana',
                    imgs: '5',
                    likes: '1.2k',
                },
                {
                    vendorName: 'Bonsu Thompson',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png',
                    vendorCategory: 'Artist',
                   name: 'The Nawi Scarfs',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694179608/rectangle-53mkiut_ae1wpt.png',
                    price: '79.00',
                    video:true,
                    imgs: '4',
                    location: 'Accra, Ghana',
                    likes: '66',
                    oos: true
                },
            ]
                }
            }
            var cosmetics = {
                toplist: ' Cosmetics Vendors',
                menu: ['Fragrances', 'Facial Care', 'Serums', 'Shaving & Beard Care', 'Body Care', 'Hair Care'],
                leftimage: 'https://res.cloudinary.com/payhospi/image/upload/v1694074699/rectangle-22446cosme_px0esl.png',
                rightimage: 'https://res.cloudinary.com/payhospi/image/upload/v1694074699/rectangle-22449cosme23_afjd41.png',
                vendor:{
                    title :'🔥 Top Product of the Week',
                    items:[
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074690/rectangle-22439cosme1_hwu3gn.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166638/ellipse-107jgchgx_suyemd.png',
                            vendorName: 'Dami the Illustrator',
                            subCategory: 'Illustrator'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074692/rectangle-22439cosme32_qndf2y.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694166901/ellipse-107jmdjusytx_aouwg2.png',
                            vendorName: 'Quill Pen',
                            subCategory: 'Illustrations'
                        },
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074691/rectangle-22439khcosme_pfez12.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107hdj34_bl9fbu.png',
                            vendorName: 'Zendiya Photography',
                            subCategory: 'Crafts'
                        },
                    
                        {
                            image:'https://res.cloudinary.com/payhospi/image/upload/v1694074689/rectangle-22439cosre43_cfwwf9.png',
                            vendorImage: 'https://res.cloudinary.com/payhospi/image/upload/v1694167820/ellipse-107nhgfer56_jtbt6v.png',
                            vendorName: 'Wakanda Painting',
                            subCategory: 'Vase'
                        },
                ]
                    },
                    newlylaunched: {
                    mainImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694074709/rectangle-22448cosmeade_czirqy.png',
                    title:'The Aloe - Ve Lotion',
                    items: [
                    {
        name: 'The African Lotion - 02',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899jkgg_mb8rbj.png',
        price: '150000.00',
        subCategory: 'Chair Canvas',
        location: 'Accra, Ghana',
        likes: '66',
        oos: true
    },        {
        name: 'https://res.cloudinary.com/payhospi/image/upload/v1694074683/rectangle-1899hgdx_afojsx.png',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899chair54_cjabfa.png',
        price: '15000.00',
        subCategory: 'Oil Canvas',
        location: 'Accra, Ghana',
        likes: '66',
        oos: true
    },
                    ]
                },
                postadrow:{
                    title: '💰 Most Selling Products',
                    items: [
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074687/rectangle-1899cseme_z9iltx.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899mlkjh_wqnarx.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074688/rectangle-1899mkjhgse_v2blcw.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Green and brown kente scarf material, Made in Lagos Nigeria.',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074685/rectangle-1899csme432_mfrgkf.png',
        price: '150000.00',
        subCategory: 'Organic cotton certified',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ]
                },
                  twocardrow:{
                    title: '⚡️ Top products for the week',
                    items: [
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074701/rectangle-22440khkhkg_ivjjja.png',
                            name: 'Kino Make Up Set',
                            vendorName: 'Nweke Franklin O.',
                            bid: 2430.00

                        },
                        {
                            image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074701/rectangle-22440csmepyt_ubmuxa.png',
                            name: 'Safari Scent',
                            vendorName: 'Okoli Cecilia Bona.',
                            bid: 2430.00

                        },
                    ]
                },
                   adrow:{
                    title:'The Full Make-Over Kit by Ngozi Oluwafemi',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074733/rectangle-69adsert_zpuueh.png',
                    color: '#8A95A3',
                },
                postcarorow:{
                    title: '💰 Discounted% Products',
                    items: [
                    {
        name: 'Diffused Perfume Oil',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074686/rectangle-1899csme4325_n9cesb.png',
        price: '150000.00',
        subCategory: 'Fragrances',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'African Black Lotion',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074689/rectangle-1899mlhfsme_ignt3c.png',
        price: '150000.00',
        subCategory: 'Body care',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Sango Serum',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074689/rectangle-1899oilsme_ta5dig.png',
        price: '150000.00',
        subCategory: 'Serums',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    {
        name: 'Brown Skin Ebony Cream',
        image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074684/rectangle-1899cre_s_e_dvgj4e.png',
        price: '150000.00',
        subCategory: 'Facial care',
        location: 'Lagos, Nigeria',
        likes: '66',
        oos: true},
                    ],
                    cover:true
                },
                postRow: {
                    title: 'Top Cosmetics Posts',
                    items: [
                {
                    vendorName: 'Nana Akufo-Addo',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png',
                    vendorCategory: 'Sculptor',
                    
                    name: 'Koko Rachel Deco Set',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074682/rectangle-53mlhfdf_oh47th.png',
                    price: '115.32',
                    
                    location: 'Accra, Ghana',
                    likes: '1.2k',
                    imgs: '2'
                },
                {
                    vendorName: 'Bonsu Thompson',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png',
                    vendorCategory: 'Artist',
                    name: 'The Nawi Scarfs',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074680/rectangle-53jgjgsme_z8nbyd.png',
                    price: '79.00',
                    location: 'Accra, Ghana',
                    likes: '66',
                    video:true,
                    imgs: '4',
                    oos: true
                },
                {
                    vendorName: 'Dede Ayew',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png',
                    vendorCategory: 'Painter',
                    
                    name: 'Koko Rachel Deco Set',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694074682/rectangle-53smpost54_b9ugyu.png',
                    price: '115.32',
                    location: 'Accra, Ghana',
                    imgs: '5',
                    likes: '1.2k',
                },
                {
                    vendorName: 'Bonsu Thompson',
                    vendorImg: 'https://res.cloudinary.com/payhospi/image/upload/v1694180194/frame-221hyjfutd_wjuuzh.png',
                    vendorCategory: 'Stylist',
                    name: 'The Nawi Scarfs',
                    image: 'https://res.cloudinary.com/payhospi/image/upload/v1694179784/rectangle-53chcgxgs_araqoq.png',
                    price: '79.00',
                    video:true,
                    imgs: '4',
                    location: 'Accra, Ghana',
                    likes: '66',
                    oos: true
                },
            ]
                }
            }
            return this.select == 'fashion' ? fashion :
                this.select == 'art' ? art :
                    this.select == 'cosmetics' ? cosmetics :
                        this.select == 'home decoration' ? decoration : fashion
        },
        select() {
            return this.$route.params.name
        },
        categoryColor() {
            return this.select == 'fashion' ? 'EDF0EF' :
                this.select == 'art' ? 'FDF1ED' :
                    this.select == 'cosmetics' ? 'FDF5ED' :
                        this.select == 'home decoration' ? 'EDEDED' : 'EDF0EF'
        }
    },
    methods: {
        selectCategory(n) {
            this.$router.push('/' + n)
        }
    }
}
</script>