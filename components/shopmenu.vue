<template>
     <div style="position: relative;">
        <!-- {{ databank  }} -->
    <div style="width: 100%;position: absolute;top: 40px;" class="d-flex ">
        <img class="rotimg" style="z-index: -1;opacity: 0.1;left: 0;top: 90px;" height="" width="366" contain src="https://res.cloudinary.com/payhospi/image/upload/v1695370409/Frame_5_jyfv_two6l9.png" />
        <img class="rotimg" style="z-index: -1;opacity: 0.1;position: absolute;right: 9%;top: 90px;" height="" width="286" contain src="https://res.cloudinary.com/payhospi/image/upload/v1693848059/vector_xfq7us.png" />
    </div>
        <v-container style="max-width:1200px;width: 100%;" class="">
            <v-row style="min-height: 756px;position: relative;"  class="py-12">
                <v-col cols="12" md="4">
                    <v-img v-show="showImg" class="selecte" eager style="width: 369px;
height: 388px;border-radius: 15px;" cover :src="databank.menu[selectIndex].leftimage"></v-img>
                    </v-col>
                <v-col cols="12" md="4">
                    <p style="color: #000;
text-align: center;
font-size: 16px;
font-weight: 500;
line-height: 20px; /* 125% */
letter-spacing: 1.6px;
text-transform: uppercase;" >Shop By categories</p>

<ul class="text-center my-8" style="list-style:none" >
    <li  style="cursor: pointer;font-size: 14px;color: var(--carbon-6, #1E1E1E);
text-align: center;position: relative;
font-size: 36px;
font-weight: 500;
line-height: 140%; /* 56px */
letter-spacing: -1.2px;" :class="select == n.name? 'text-green': ''" @click="selectCategory(n.name, i)" class="py-4" v-for="(n, i) in databank.menu" :key="i">{{ n.name }}
<img v-show="select == n.name" src="https://res.cloudinary.com/payhospi/image/upload/v1693888075/underline-10_jqkobi.svg" style="bottom:-10px;
    left: 50%;
    transform: translate(-50%, 0);position: absolute;"/>
</li>
</ul>
                </v-col>
                <v-col style="display: flex;align-items: end;" cols="12" md="4">
                    <v-img v-show="showImg" class="selected2"   eager style="width: 369px;
height: 388px;border-radius: 15px;" cover  :src="databank.menu[selectIndex].rightimage"></v-img>
                    </v-col>
                    </v-row>
                    </v-container>

 </div>
</template>
<script>
import { gsap, Back } from 'gsap';

export default {
    data() {
        return {
            select: '',
            selectIndex: 0
        }
    },
    props:['databank', 'showImg'],
    mounted() {
        this.select = this.databank.menu[0].name
    },
    methods: {
        selectCategory(n, i) {
           
            if (n == this.select) {
                return
                
            }
            const sn = this
            sn.select = n;
            
            sn.loader = false;
            const selected = document.querySelector('.selecte');
            const selected2 = document.querySelector('.selected2');
            
            var tl = gsap.timeline();
            tl.to([ selected ],
            {
                 translateX: "-600px",
                 translateY: "119px",
                  rotate: "-45deg",
                  duration: 0.5,
                  ease: Back.easeOut.config(1.7),
                
            })
            tl.to([ selected2 ],
            {
                 translateX: "600px",
                 translateY: "119px",
                  rotate: "45deg",
                  duration: 0.5,
                  delay: -0.5,
                  ease: Back.easeOut.config(1.7),
                  onComplete: function () {
                    sn.selectIndex = i
                  }
            })
            tl.to([ selected, selected2 ],
            {
                 translateX: "0px",
                 translateY: "0px",
                  rotate: "0deg",
                  ease: Back.easeOut.config(1.7),
               

            }
            )
        }
    }
}
</script>