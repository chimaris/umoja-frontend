<template>
     <div style="position: relative;">
    <div style="width: 100%;position: absolute;top: 40px;" class="d-flex ">
        <img style="z-index: -1;opacity: 0.1;left: 0;top: 90px;" height="" width="366" contain src="https://res.cloudinary.com/payhospi/image/upload/v1693886879/rounder_wpgz89.png" />
        <img style="z-index: -1;opacity: 0.1;position: absolute;right: 9%;top: 90px;" height="" width="286" contain src="https://res.cloudinary.com/payhospi/image/upload/v1693848059/vector_xfq7us.png" />
    </div>
        <v-container style="max-width:1200px;width: 100%;" class="">
            <v-row style="min-height: 756px;position: relative;"  class="py-12">
                <v-col cols="12" md="4">
                    <v-img eager style="width: 369px;
height: 388px;border-radius: 15px;" cover :src="databank.leftimage"></v-img>
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
letter-spacing: -1.2px;" :class="select == n? 'text-green': ''" @click="selectCategory(n)" class="py-4" v-for="n in databank.menu" :key="n">{{ n }}
<img v-show="select == n" src="https://res.cloudinary.com/payhospi/image/upload/v1693888075/underline-10_jqkobi.svg" style="bottom:-10px;
    left: 50%;
    transform: translate(-50%, 0);position: absolute;"/>
</li>
</ul>
                </v-col>
                <v-col style="display: flex;align-items: end;" cols="12" md="4">
                    <v-img  eager style="width: 369px;
height: 388px;border-radius: 15px;" cover  :src="databank.rightimage"></v-img>
                    </v-col>
                    </v-row>
                    </v-container>

 </div>
</template>
<script>
export default {
    data() {
        return {
            select: ''
        }
    },
    props:['databank'],
    mounted() {
        this.select = this.databank.menu[0]
    },
    methods: {
        selectCategory(n) {
            this.select = n
        }
    }
}
</script>