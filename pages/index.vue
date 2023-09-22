<template>
  <div>

      <v-container   class="py-0">
          <div style="max-width: 1200px;" class="mx-auto d-flex justify-space-between align-center">
              <v-avatar class="logo" style="width:123px; height:80px" rounded="0" flat>
                  <v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689483300/Frame_3_isko6t.png">
                  </v-img>
              </v-avatar>

          <v-btn @click="opendialog()" flat size="large" color="green rounded-xl" >
          <span style="font-size: 14px;">
              Join the Waitlist
          </span>
          </v-btn>
      </div>
  </v-container>
  <v-container style=" position: relative;   ;" class="pt-0 padzero" fluid>

      <v-card flat class="topcard height1 rounded-xl d-flex justify-center align-center" height="100vh" min-height="900px"  image="https://res.cloudinary.com/payhospi/image/upload/c_fit,w_1300/v1689483514/african-safari-animals-11_k5q3lr.png">
         
          <div v-if="$vuetify.display.smAndUp"
           style="
          position: absolute;
          top: 0;
          height: 100%;
          width: 100%;">
              <v-btn style="height: auto;top: 15%;left: 10%;"  flat rounded="xl" class="rw px-2 py-2" height="auto" >
                  <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img></v-avatar>
                  <span class="mr-2" style="color: var(--carbon-4, #333);
                      font-size: 14px;letter-spacing: 2.38px;
                      font-weight: 500;">

                      RWANDA
                  </span>
              </v-btn>
              <v-btn style="height: auto;position: absolute;right: 25%;top: 8%;"  flat rounded="xl" class="gh px-2 py-2" height="auto" >
                  <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/gh-ghana-medium_rvbvcj.png"></v-img></v-avatar>
                  <span class="mr-2" style="color: var(--carbon-4, #333);
                      font-size: 14px;letter-spacing: 2.38px;
                      font-weight: 500;">

                      GHANA
                  </span>
              </v-btn>
              <v-btn style="position: absolute;
  top: 50%;" flat rounded="xl" class="ng px-2 py-2" height="auto" >
                  <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ng-nigeria_puk1kr.png"></v-img></v-avatar>
                  <span class="mr-2" style="color: var(--carbon-4, #333);
                      font-size: 14px;letter-spacing: 2.38px;
                      font-weight: 500;">

                      NIGERIA
                  </span>
              </v-btn>
              <v-btn style="    position: absolute;
  top: 40%;
  right: 5%;" flat rounded="xl" class="sa px-2 py-2" height="auto" >
                  <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486634/za-south-africa_h5tfp8.png"></v-img></v-avatar>
                  <span class="mr-2" style="color: var(--carbon-4, #333);
                      font-size: 14px;letter-spacing: 2.38px;
                      font-weight: 500;">

                      SOUTH AFRICA
                  </span>
              </v-btn>
              <v-btn style="
  position: absolute;
  bottom: 25%;
  right: 20%;
" flat rounded="xl" class="ke px-2 py-2" height="auto" >
                  <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ke-kenya_bcsssx.png"></v-img></v-avatar>
                  <span class="mr-2" style="color: var(--carbon-4, #333);
                      font-size: 14px;letter-spacing: 2.38px;
                      font-weight: 500;">

                      KENYA
                  </span>
              </v-btn>

          </div>
          <v-container class="">

              <div class="text-center bottom0 mx-auto mt-0" style="position:relative;bottom:100px;max-width:834px ;">
                  <p class="tinytext1" style="color:  #F38218;
                      font-size: 14px;
                      font-weight: 500;
                      line-height: 120%; /* 16.8px */
                      letter-spacing: 0.9px;
                      text-transform: uppercase;">
                      Growing the African Market Space
                  </p>
                  <p style="color:#1E1E1E;
font-size: 64px;
font-weight: 600;
line-height: 120%;
letter-spacing: -1.92px;" class="bigTitle mt-4">
<span style="color: #2C6E63;">
Explore
</span> a new digital African marketplace from any part of the world!</p>
<p style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 400;" class="mt-4">The world first and largest e-commerce platform with a wide variety of authentic and sustainable African products.</p>

<div class="py-8">
  <v-btn @click="opendialog()"  color="green" flat class="mx-auto" size="x-large" rounded="xl">Join the Waitlist</v-btn>
</div>
              </div>
          </v-container>
          <div v-if="!$vuetify.display.smAndUp" class="scroll">
<div class="m-scroll">

  <span class="upspan">

    <v-btn style="height: auto;"  flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
                    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img></v-avatar>
                    <span class="mr-2" style="color: var(--carbon-4, #333);
                        font-size: 14px;letter-spacing: 2.38px;
                        font-weight: 500;">

                        RWANDA
                    </span>
                </v-btn>
  </span>
  <span class="upspan">
    <v-btn style="height: auto;"  flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
                    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/gh-ghana-medium_rvbvcj.png"></v-img></v-avatar>
                    <span class="mr-2" style="color: var(--carbon-4, #333);
                        font-size: 14px;letter-spacing: 2.38px;
                        font-weight: 500;">

                        GHANA
                    </span>
                </v-btn>
</span>   
<span class="upspan">
<v-btn style="" flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ng-nigeria_puk1kr.png"></v-img></v-avatar>
    <span class="mr-2" style="color: var(--carbon-4, #333);
        font-size: 14px;letter-spacing: 2.38px;
        font-weight: 500;">

        NIGERIA
    </span>
</v-btn>

</span>    
<span class="upspan">

<v-btn style=" " flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486634/za-south-africa_h5tfp8.png"></v-img></v-avatar>
    <span class="mr-2" style="color: var(--carbon-4, #333);
        font-size: 14px;letter-spacing: 2.38px;
        font-weight: 500;">

        SOUTH AFRICA
    </span>
</v-btn>
</span> 
<span class="upspan">

<v-btn style="

" flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ke-kenya_bcsssx.png"></v-img></v-avatar>
    <span class="mr-2" style="color: var(--carbon-4, #333);
        font-size: 14px;letter-spacing: 2.38px;
        font-weight: 500;">

        KENYA
    </span>
</v-btn>
</span>
  <span class="upspan">

    <v-btn style="height: auto;"  flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
                    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img></v-avatar>
                    <span class="mr-2" style="color: var(--carbon-4, #333);
                        font-size: 14px;letter-spacing: 2.38px;
                        font-weight: 500;">

                        RWANDA
                    </span>
                </v-btn>
  </span>
  <span class="upspan">
    <v-btn style="height: auto;"  flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
                    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/gh-ghana-medium_rvbvcj.png"></v-img></v-avatar>
                    <span class="mr-2" style="color: var(--carbon-4, #333);
                        font-size: 14px;letter-spacing: 2.38px;
                        font-weight: 500;">

                        GHANA
                    </span>
                </v-btn>
</span>   
<span class="upspan">
<v-btn style="" flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ng-nigeria_puk1kr.png"></v-img></v-avatar>
    <span class="mr-2" style="color: var(--carbon-4, #333);
        font-size: 14px;letter-spacing: 2.38px;
        font-weight: 500;">

        NIGERIA
    </span>
</v-btn>

</span>    
<span class="upspan">

<v-btn style=" " flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486634/za-south-africa_h5tfp8.png"></v-img></v-avatar>
    <span class="mr-2" style="color: var(--carbon-4, #333);
        font-size: 14px;letter-spacing: 2.38px;
        font-weight: 500;">

        SOUTH AFRICA
    </span>
</v-btn>
</span> 
<span class="upspan">

<v-btn style="

" flat rounded="xl" class=" px-2  mx-3 py-2" height="auto" >
    <v-avatar size="30.88" class="mr-1"><v-img eager src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ke-kenya_bcsssx.png"></v-img></v-avatar>
    <span class="mr-2" style="color: var(--carbon-4, #333);
        font-size: 14px;letter-spacing: 2.38px;
        font-weight: 500;">

        KENYA
    </span>
</v-btn>
</span>
 </div></div>
      </v-card>
      </v-container>
      <v-container style=" position: relative;   max-width: 1417px;" class="pt-0 " fluid>

<webdiscover />
<webexplore />

  </v-container>
<webfooter @opendialog="opendialog"/>
<v-dialog max-width="1200" class="d-flex justify-center" v-model="dialog">
    <v-sheet class="mx-auto " width="100%" style="max-width: 1200px;overflow-x: hidden; border-radius: 15px;" >
      <v-row class="dialogrow">
          <v-col cols="12" md="7" class="pa-0 d-flex align-center justify-center ">
              <div class="py-12">

              <p class="mb-4 px-3 subtitles" style="color: #000;
font-size: 48px;
font-weight: 600;
line-height: 120%; /* 76.8px */
letter-spacing: -1.44px;">Join the Umoja Waitlist</p>
<div class="px-8 text-left" style="max-width: 400px;">
<v-form ref="form" >

  <p class="inputLabel">Full Name</p>             
  <v-text-field :rules="[required]" v-model="name" placeholder="Enter your full name" density="comfortable"  >
  </v-text-field>
  <p class="inputLabel">Email Address</p>             
  <v-text-field :rules="[rules.email]"  v-model="email" placeholder="Enter your email address" density="comfortable"  >
  </v-text-field>
  <p class="inputLabel">User Category Name</p>             
  <v-select :rules="[required]" :items="['User', 'Vendor']" v-model="category" placeholder="Select Buyer or Vendor" append-inner-icon="mdi mdi-chevron-down" density="comfortable"  >
  </v-select>
</v-form>
<div class="alignc">

  <v-btn :loading="loading" @click="submitForm()" width="235" class="my-4" flat size="large" color="green rounded-xl" >
      <span style="font-size: 14px;">
          Join the Waitlist
      </span>
  </v-btn>
</div>
</div>

       </div>
          </v-col>
          <v-col v-if="!$vuetify.display.smAndDown" cols="12" class="pa-0" md="5">
              <v-carousel continuous :interval="3000" height="568"  cycle hide-delimiter-background hide-delimiters hide-controls :show-arrows="false">
              <v-carousel-item  v-for="n in ['https://res.cloudinary.com/payhospi/image/upload/c_fit,w_700/v1689518404/rectangle-1922_a41ixf.png', 'https://res.cloudinary.com/payhospi/image/upload/c_fit,w_700/v1689486649/rectangle-1922_rfqjbp.png']" :key="n" height="568">
                  <v-card height="568"  rounded="0" width="100%" :image="n">
                  <div class="pa-8" style="width: 100%; left: 0;bottom:0;position: absolute;">
                  <p  style="color: #FFF;
font-size: 14px;max-width: 413px;
font-weight: 400;
line-height: 140%;">Join our waitlist today and be the first to experience our social commerce platform.</p>
<p class="my-4" style="color: var(--magnetic-green-2, #CDD6D4);
font-size: 10px;
font-weight: 400;
line-height: 180%; /* 18px */
letter-spacing: -0.3px;">© Copyright 2023. All Rights Reserved.</p>
</div>
              </v-card>
                  </v-carousel-item>
              </v-carousel>
          
          </v-col>
      </v-row>
  </v-sheet>  
</v-dialog>

<v-dialog  max-width="504" v-model="dialog2">
      <div class="pa-4">

          <v-sheet class="pa-4 mx-auto" width="100%" style="max-width: 504px; border-radius: 20px;" >
          <div class="d-flex justify-end">
              <v-btn @click="dialog2 = false" icon="mdi mdi-close" size="x-small" flat color="#E6F0ED" rounded="xl"></v-btn>
          </div>
          <div class="text-center">
              <v-avatar size="82"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689486634/https-lottiefiles-com-91001-success_hwwtuz.png"></v-img></v-avatar>
              <p class="mx-auto mt-6 mb-3" style="color: var(--carbon-4, #333);
text-align: center;
max-width: 311px;
font-size: 32px;
font-weight: 600;
line-height: 102.7%; /* 32.864px */
letter-spacing: -1px;">We’ve added you to our waitlist</p>
<p style="color: var(--carbon-3, #969696);
text-align: center;
font-size: 16px;
font-weight: 400;
letter-spacing: -0.351px;">We’ll let you know when Umoja is ready</p>

<v-btn width="215" color="#EDF0EF" flat rounded="xl" class="mt-4 mb-6"><v-icon size="15" color="green" icon="mdi mdi-email-outline" class="mr-2"></v-icon> <span style="color: var(--magnetic-green-4, #2C6E63);
text-align: center;
font-size: 12px;
font-weight: 400;
line-height: 102.7%; ">{{emailtxt}}</span></v-btn>
          </div>
          </v-sheet>
      </div>
                    </v-dialog>
  </div>

</template>
<style>
.scroll {
position: absolute;
width: 100vw;
bottom: 37px;
overflow: hidden;
z-index: 1;
margin: 0;
padding: 0;
}

.m-scroll {
overflow: hidden;
height: 100%;
white-space: nowrap;
animation: scrollText 20s infinite linear;
margin: 0;
font-size: 0;
display: flex;
justify-content: space-between;
width: fit-content;
}

.upspan {
display: inline-block;
margin: 0;
padding: 0;
color: white;
}

@keyframes scrollText {
from {
  transform: translateX(0%);
}
to {
  transform: translateX(-50%);
}
}
.bto .v-btn__overlay {
display: none;
}
.smlimg{
  animation: float 6s ease-in-out infinite;
  transform: translatey(0px);
}
@keyframes float {
0% {
  transform: translatey(0px);
}
50% {
  transform: translatey(-20px);
}
100% {
  transform: translatey(0px);
}
}
.imgs{
  transition: all 0.5s ease!important;
  transform: rotate(-15deg);
  right: -160px;
}
.discoimgs{
  transition: all 0.5s ease!important;
  scale:1.0
}
.discocard:hover .discoimgs, .discoimgs:hover { 
  scale:1.05
}
.customimgs{
  transition: all 0.5s ease!important;
  top: 30%;
  left: 30%;
}
.customcard:hover .customimgs, .customimgs:hover { 
  top: 22%;
  left: 24%;
}
.rw {
  background: #fff;
  backdrop-filter: blur(3px);
animation: slide 20s linear infinite;
}

@keyframes slide {
0% {
  transform: translateX(0px);
}
50% {
  transform: translateX(50px);
}
100% {
  transform: translateX(0px);
}
}
.ng {
  background: #fff;
  backdrop-filter: blur(3px);
animation: slide2 13s linear infinite;
}

@keyframes slide2 {
0% {
  transform: translateX(0px);
}
50% {
  transform: translateX(15px);
}
100% {
  transform: translateX(0px);
}
}
.sa {
animation: slide3 12s linear infinite;
background: #fff;
  backdrop-filter: blur(3px);
}

@keyframes slide3 {
0% {
  transform: translateX(0px);
}
50% {
  transform: translateX(45px);
}
100% {
  transform: translateX(0px);
}
}

.gh {
animation: slide4 10s linear infinite;
}

@keyframes slide4 {
0% {
  transform: translateX(0px);
}
50% {
  transform: translateX(-50px);
}
100% {
  transform: translateX(0px);
}
}
.ke {
  background: #fff;
  backdrop-filter: blur(3px);
animation: slide5 10s linear infinite;
}

@keyframes slide5 {
0% {
  transform: translateX(0px);
}
50% {
  transform: translateX(-50px);
}
100% {
  transform: translateX(0px);
}
}

.bentcard:hover .imgs, .imgs:hover {
  transform: rotate(0deg) !important;
  right: 0!important;}
  .height0{
    height: 436px!important;

  }
  @media only screen and (max-width: 768px) {
    .row0{
      margin-top: 0px!important;
    }
    .imgs {
  transform: rotate(0deg) !important;
  right: 0!important;}
    .height1{
  min-height: 852px!important;
    }
    .bottom0{
      bottom: 0!important;
      padding-top: 49px!important;
    }
   .topcard {
      align-items: start!important;
    }
    .height0{
      height: 376px!important;

    }
    .padzero{
      padding: 0!important;
    }
      .rotimg {
  top: -11%!important;
  left: 65%!important;        }
      /* CSS rules for smaller screens */
.bigTitle{
  font-size: 48px !important;
}
.gh{
  scale: 0.9;
  right: -9%!important;
  top: 2%!important;
}
.rw{
  scale: 0.9;
  top: 7%!important;
  left: -6%!important;
}
.ng{
  scale: 0.9;
  bottom: 9%!important;
  top: unset!important;
  left: 3%!important;
  
}
.ke{
  scale: 0.9;
  bottom: 19%!important;
  top: unset!important;
  right: -9%!important;
}
.sa{
  scale: 0.9;
  bottom: 28%!important;
  top: unset!important;
  right: 55%!important;
}
.logo{
  width: 122px!important;
  height: 80px!important;
}
.card2{
padding-top: 45px!important;
  padding-left: 24px !important;

}
.card2div{
padding-right: 24px !important;

}
.titlesub{

  font-size:18px!important;

}
.subtitles{

  font-size: 36px!important;

}
.alignc{
  text-align: center!important;
}

.dialogrow{
  padding:12px 12px 0px 12px!important;
  text-align: center!important;
}
/* Add more rules here as needed */
.cardtitle{
    font-size: 28px!important;
}
.tinytext1{
    font-size: 12px!important;
}
.cardsub{
    font-size: 16px!important;
}
.footcard{
  padding-bottom: 100px!important;

}
.footbot{
  padding-bottom: 20px !important;

}
.conte{
  padding-left: 0!important;
  padding-right: 0!important;
}
.customimgs {
  scale: 1!important;
    position: relative!important;
    bottom: -5px!important;
  transition: all 0.5s ease!important;
  top: unset!important;
  left: 0!important;
}
}
</style>
<script>
import axios from 'axios';

export default {
data() {
  return {
      dialog: false,
      mods:1,
      name: '',
      dialog2: false,
      loading: false,
      category:null,
      email: '',
      emailtxt: '',
      rules: {
      email: (value) => {
        const pattern =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return pattern.test(value) || "Invalid e-mail.";
      },
    },
  };
},
computed: {
  required() {
      return (value) => {
        if (!value) {
          return "Required.";
        } else if (value.length < 3) {
          return "Must be at least 3 characters.";
        } else {
          return true;
        }
      };
    },
  },
methods: {
  opendialog(){
      this.dialog = true
  },
  async submitForm() {
 var validator = await this.$refs.form.validate()
    if (validator.valid) {
   

  this.loading = true;
    axios.post('https://umoja-eaac4dc3d4d4.herokuapp.com/api/join_waitlist', {
      name: this.name,
      category: this.category,
      email: this.email
    })
    .then(response => {
      this.loading = false;
      this.emailtxt = this.email
      this.name = ''
      this.email = ''
      this.category = null
      this.dialog = false
      this.dialog2 = true
      
      console.log(response.data);
      // Handle successful response here
    })
    .catch(error => {
    this.dialog = false
        this.loading = false;
      console.error(error);
      alert('An error occurred')
      // Handle error here
    });
  }else{
    this.loading = false;
  }
  }
}
};
</script>