<template>
    <div>
        <v-container style="max-width:1200px;min-height:100vh;width: 100%;" class=" py-12">
        <v-row style="position: relative;">
            <div style="border-radius: 50px;
                height: calc(100% - 16px);
    position: absolute;
    transform: translate(-50%, 0%);
    z-index: 99;
    left: calc(50% - 18px);
    width: 5px;
    top: 10px;overflow: hidden;
    background-color: rgb(203, 203, 203);">
<div
  :style="'height:calc(' + (100 / item.length) + '%);background-color:' + (selectIndex === i ? '#2C6E63' : '')"
  style="width: 5px;"
  v-for="(n, i) in item"
  :key="i"
>
<div   :style="'background-color:' + (selectIndex === i ? '#F8B735' : '')+';height:'+ prog+'%;'" style="width: 5px ;" ></div>
</div> </div>
            <v-col class=" pr-12" cols="12" md="6">
                <v-img class="img2 bg-grey-lighten-2" style="border-radius: 15px;" cover :src="item[selectIndex].mainImg"  width="535" height="693" ></v-img>
            </v-col>
            <v-col class="d-flex flex-column justify-space-between" cols="12" md="6">
              <div>

            <v-chip class="chip pa-3" rounded="lg" color="green" style="color:  #2C6E63;
font-size: 12px;
font-weight: 500;
line-height: 140%; /* 16.8px */
letter-spacing: 0.72px;
text-transform: uppercase;" variant="tonal">Newly launched</v-chip> 
<p style="color: #1E1E1E;
font-size: 40px;
font-weight: 600;
line-height: 140%; /* 56px */
letter-spacing: -1.2px;" class="title2 mt-3 mb-2">{{item[selectIndex].title}}</p>
<p style="width: 345px;
color:#969696;
font-size: 16px;
font-weight: 500;
line-height: 140%; /* 22.4px */
letter-spacing: -0.48px;" class="sub2">Lorem ipsum dolor sit amet consectetur et nibh id aliquam proin.</p>
            <div class="profile d-flex mt-4">
            <v-avatar  size="40"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1691149309/rectangle-22437_hlbqwt.png"></v-img></v-avatar>
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
        </div> 
            <v-row dense="" class="items align-end">
                <v-col v-for="(n, i) in item[selectIndex].items" :key="i" cols="6">
                    <product-component :showVendor="false" :short="true"  :index="0" :item="n" />
                </v-col>
            </v-row>
            </v-col>
        </v-row>
        </v-container>
    </div>
</template>
<script>
import { gsap, Back, CSSPlugin } from 'gsap';

export default {
    data() {
        return {
            select: '',
            prog:0,
            selectIndex: 0
        }
    },
    props:['item'],
    mounted(){
        this.animateCard()
    },
    
    methods: {
        animateCard(){
            // get all the card elements and animate them from bottom to top

            const img2 = document.querySelector('.img2');
            const chip = document.querySelector('.chip');
            const title2 = document.querySelector('.title2');
            const sub2 = document.querySelector('.sub2');
            const profile = document.querySelector('.profile');
            const items = document.querySelector('.items');
            const sn = this
            var tl = gsap.timeline({
                repeat: -1,onUpdate: () => {
          const progress = tl.progress();
          sn.prog = progress * 100
        },
            });
            tl.fromTo([ img2, chip, title2, sub2, profile, items ],
            {
                 translateY: "100px",
                 opacity: 0,
                 delay:-0.3
                 
                },
                {
                opacity: 1,
                 translateY: "0px",
                  stagger: 0.1,
                  ease: Back.easeOut.config(2),
                  
                }
                )
                tl.to([ img2, chip, title2, sub2, profile, items ],
                {
                    translateY: "-50px",
                    opacity: 0,
                    delay: 3,
                    stagger: 0.1,
                    onComplete:  () => {
                        // this.$router.push('/shop')
                        this.selectIndex = this.item.length - 1 == this.selectIndex ? 0 : this.selectIndex + 1
                    }
                 
                })
        },
        selectCategory(n) {
            this.select = n
        }
    }
}
</script>