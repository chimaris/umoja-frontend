<template>
    <v-card v-if="loaded" style="overflow: hidden;border-radius: 15px;" flat color="#F8F8F8" class=" parent-card rounded-lg ">
        <v-img class=" bg-grey-lighten-2" cover width="100%" :height="'313'" :src="item.image">

        </v-img>
        <div class="pa-6">

         <p @click="$router.push('/product_page')" style="font-weight: 600;
    font-size: 20px;
    line-height: 18px;cursor: pointer;
    color: #000000;
    " class=" mt-2">{{filt(item.name)}}</p>
    <p style="color:#969696;
font-size: 14px;
font-weight: 500;
letter-spacing: -0.42px;
    " class="mt-1">Sold by 
    <span style="color: #1273EB;
font-weight: 600;">

        Nweke Franklin O.
    </span>
    </p>


  
                          <div class="d-flex mt-4 align-end">

                <v-btn height="44" width="161" @click="$router.push('/product_page')" rounded="xl"  style="border: 1px solid #CED2D6;
    border-radius: 6px;"   variant="outlined" flat  class="green-hover parent-btn">
                     <span style="
font-weight: 600;" class="">Shop Now</span> 
                </v-btn>
    
                </div>
            </div>

            </v-card>
            <popularloader  v-else />
</template>
<script>
import { useLikedStore } from '~/stores/likedStore';

export default {
    props: ['item', 'index'],
    computed: {
        likedStore() {
            return useLikedStore();
        },
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