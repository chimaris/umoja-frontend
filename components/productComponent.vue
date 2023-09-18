<template>
    <v-card max-width="254" width="100%" v-if="loaded" style="overflow: visible;    background: transparent!important;" flat class="bg-white parent-card  rounded-lg mb-2">
        <v-img class="rounded-lg bg-grey-lighten-5" :cover="coverbol" width="100%" :height="short?'221px': '303px'" :src="item.image">
        <v-btn @click="toggleLike(item,index)" :ref="item.name+index"  rounded="xl" icon style="position: absolute;right:12px;top:12px;" class="pa-0"  flat size="x-small">
        <v-icon  size="15" :color="!(isLiked(index))? '#1C274C':'red '" :icon="!isLiked(index)? 'mdi mdi-heart-outline':'mdi mdi-heart'"></v-icon></v-btn>
        </v-img>
         <p @click="$router.push('/product_page')" style="font-weight: 600;
    font-size: 14px;
    line-height: 18px;cursor: pointer;
    color: #000000;
    " class=" mt-2 text-wrap">{{filt(item.name)}}</p>
    <p style="font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    " class="mt-1">{{item.subCategory || 'Organic cotton certified'}}</p>
   <p style="font-weight: 600;
    font-size: 10px;
    line-height: 10px;
    color: #000000;
    " class="d-flex mb-1 pb-0 pt-1 align-center">
        <v-rating readonly
        model-value="4"
        color="grey-lighten-2"
        active-color="#E7CE5D"
        class="rts" density="compact"
        size="x-small"
        ></v-rating><span style="margin-left:3px;margin-top: 3px ;" >(65)</span> 
    </p>
    <v-chip v-if="item.deliv" class="mb-2" variant="elevated" size="x-small"  color="#1273EB" style="font-size: 10px;
font-weight: 500;border-radius: 6px;
letter-spacing: 0.5px;">FREE DELIVERY</v-chip>
    <div  v-if="vendorShow">
    <div class="d-flex mt-2">
        <v-avatar size="40"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png"></v-img></v-avatar>
        <div style="cursor: pointer;" @click="$router.push('/vendor_page')" class="ml-2 ">
            <p style="color: #1E1E1E;
font-size: 14px;
font-weight: 600;
letter-spacing: -0.14px;">Genevieve Obukeme</p>
<p style="color: #969696;
font-size: 12px;
font-weight: 500;
letter-spacing: -0.12px;">Accra, Ghana🇬🇭</p>
        </div>
        </div>
        <v-divider color="#a4a4a4" class="my-4"></v-divider>
    </div>
                          <div class="d-flex align-end justify-space-between">
                <div :class="showdisco? 'mt-0':''"> 
                    <h1 
    style="font-size: 20px;
            color: #1A1D1F;
    " class="priceClass mb-1">€{{item.price}}</h1>
                    <div v-if="showdisco" class="d-flex align-center"> 
                    <p style="color: var(--carbon-3, #969696);
                    font-size: 12px;
                    font-weight: 600;
                    line-height: 17.673px;
                    text-decoration: line-through;">€15,000.00</p>
                    <v-chip style="font-size: 9.429px;
                    font-weight: 600;
                    "  class="ml-1" size="x-small" :color="discountColor" rounded="lg">
                        20% OFF </v-chip>
                </div>
                </div>
                <v-btn @click="$router.push('/product_page')" rounded="xl"  style="border: 1px solid #CED2D6;
    border-radius: 6px;" width="106" height="28"  color="green" variant="outlined" flat  class="parent-btn ml-2">
                     <span style="color: #1A1D1F;
font-weight: 600;" class="smallBtn">{{'Add to Cart'}}</span> 
                </v-btn>
    
                </div>
            </v-card>
            <productloader :vendorShow="vendorShow" :short="short" v-else />
</template>
<script>
import { useLikedStore } from '~/stores/likedStore';

export default {
    props: ['item','short', 'category','cover', 'index', 'showVendor' , 'showdisco'],
    computed: {
        likedStore() {
            return useLikedStore();
        },
        discountColor(){
            var ty = this.category == 'fashion'? 'green':
            this.category == 'art'? 'orange':
            this.category == 'cosmetics'? 'orange':
            this.category == 'home decoration'? 'green': 'green'
            return ty
        },
        coverbol() {
    return this.cover !== undefined ? this.cover : true;
    },
    
vendorShow() {
    return this.showVendor !== undefined ? this.showVendor : true;
    },
     
        short(){
            return this.short? this.short : false
        }
    },
    data() {
        return {
            loaded: false,
        };
    },
    mounted() {
        this.mockLoading();
    },
    methods: {
        mockLoading() {
            setTimeout(() => {
                this.loaded = true;
            }, 2000);
        },
        toggleLike(item, index) {
            this.likedStore.toggleLike(item, index);
        },
        isLiked(i) {
            return this.likedStore.isLiked(i);
        },
        filt(text) {
            var newText = text.length > 50 ? text.slice(0, 50) + '...' : text;
            return newText;
        },
    },
};
</script>
<style>

</style>