<template>
    <div>

        <v-container   class="py-0">
            <div style="max-width: 1200px;" class="mx-auto d-flex justify-space-between align-center">
                <v-avatar class="logo" style="width:203px; height:150px" rounded="0" flat>
                    <v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689483300/Frame_3_isko6t.png">
                    </v-img>
                </v-avatar>

            <v-btn @click="opendialog()" flat size="large" color="green rounded-xl" >
            <span style="font-size: 14px;">
                Join the Waitlist
            </span>
            </v-btn>
        </div>
    </v-container>
    <v-container style=" position: relative;   max-width: 1417px;" class="pt-0" fluid>

        <v-card flat class="rounded-xl d-flex justify-center align-center" height="auto" min-height="calc(100vh  + 122px)"  image="https://res.cloudinary.com/payhospi/image/upload/v1689483514/african-safari-animals-11_k5q3lr.png">
           
            <div
             style="
            position: absolute;
            top: 0;
            height: 100%;
            width: 100%;">
                <v-btn style="height: auto;top: 15%;left: 10%;"  flat rounded="xl" class="rw px-2 py-2" height="auto" >
                    <v-avatar size="30.88" class="mr-1"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/rw-rwanda-medium_oui3ln.png"></v-img></v-avatar>
                    <span class="mr-2" style="color: var(--carbon-4, #333);
                        font-size: 14px;letter-spacing: 2.38px;
                        font-weight: 500;">

                        RWANDA
                    </span>
                </v-btn>
                <v-btn style="height: auto;position: absolute;right: 25%;top: 8%;"  flat rounded="xl" class="gh px-2 py-2" height="auto" >
                    <v-avatar size="30.88" class="mr-1"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/gh-ghana-medium_rvbvcj.png"></v-img></v-avatar>
                    <span class="mr-2" style="color: var(--carbon-4, #333);
                        font-size: 14px;letter-spacing: 2.38px;
                        font-weight: 500;">

                        GHANA
                    </span>
                </v-btn>
                <v-btn style="position: absolute;
    top: 50%;" flat rounded="xl" class="ng px-2 py-2" height="auto" >
                    <v-avatar size="30.88" class="mr-1"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ng-nigeria_puk1kr.png"></v-img></v-avatar>
                    <span class="mr-2" style="color: var(--carbon-4, #333);
                        font-size: 14px;letter-spacing: 2.38px;
                        font-weight: 500;">

                        NIGERIA
                    </span>
                </v-btn>
                <v-btn style="    position: absolute;
    top: 40%;
    right: 5%;" flat rounded="xl" class="sa px-2 py-2" height="auto" >
                    <v-avatar size="30.88" class="mr-1"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689486634/za-south-africa_h5tfp8.png"></v-img></v-avatar>
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
                    <v-avatar size="30.88" class="mr-1"><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1689486623/ke-kenya_bcsssx.png"></v-img></v-avatar>
                    <span class="mr-2" style="color: var(--carbon-4, #333);
                        font-size: 14px;letter-spacing: 2.38px;
                        font-weight: 500;">

                        KENYA
                    </span>
                </v-btn>

            </div>
            <v-container class="">

                <div class="text-center  mx-auto mt-12" style="position:relative;bottom:100px;max-width:834px ;">
                    <p style="color:  #F38218;
                        font-size: 14px;
                        font-weight: 500;
                        line-height: 120%; /* 16.8px */
                        letter-spacing: 0.7px;
                        text-transform: uppercase;">
                        Growing the African Market Space
                    </p>
                    <p style="color:#1E1E1E;
font-size: 64px;
font-weight: 600;
line-height: 120%;
letter-spacing: -1.92px;" class="bigTitle mt-4">Buy/Sell quality African products from any part of the world!</p>
<p style="color: var(--carbon-4, #333);
font-size: 20px;
font-weight: 400;" class="mt-4">The world first and largest e-commerce platform with a wide variety of authentic and sustainable African products.</p>

<div class="py-8">
    <v-btn @click="opendialog()"  color="green" flat class="mx-auto" size="x-large" rounded="xl">Join the Waitlist</v-btn>
</div>
                </div>
            </v-container>

        </v-card>
<webdiscover />
<webexplore />

    </v-container>
  <webfooter @opendialog="opendialog"/>
  <v-dialog max-width="1200" class="d-flex justify-center" v-model="dialog">
  <webdialog />
  </v-dialog>
    </div>

</template>
<style>

.bto .v-btn__overlay {
display: none;
}
.imgs{
    transition: all 0.5s ease!important;;
}
@media only screen and (max-width: 768px) {
  /* CSS rules for smaller screens */
  .bigTitle{
    font-size: 46px !important;
  }
  .gh{
    right: -9%!important;
    top: 2%!important;
  }
  .rw{
    top: 7%!important;
    left: -6%!important;
  }
  .ng{

    bottom: 9%!important;
    top: unset!important;
    left: 3%!important;
    
}
.logo{
    width: 161px!important;
    height: 100px!important;
}
.subtitles{

    font-size: 40px!important;

}
.alignc{
    text-align: center!important;
}
.bentcard:hover .imgs {
    transform: rotate(0deg) !important;
    right: 0!important;}
.ke{
    bottom: 19%!important;
    top: unset!important;
    right: -9%!important;
}
.dialogrow{
    padding:12px 12px 0px 12px!important;
    text-align: center!important;
}
.sa{
    bottom: 28%!important;
    top: unset!important;
    right: 55%!important;
  }
  /* Add more rules here as needed */
  .cardtitle{
      font-size: 30px;
  }
  .cardsub{
      font-size: 18px;
  }
  .conte{
    padding-left: 0!important;
    padding-right: 0!important;
  }
}
</style>
<script>

export default {
  data() {
    return {
        dialog: false,
        mods:1,
  
     
    };
  },
  methods: {
    opendialog(){
        this.dialog = true
    }
  }

};
</script>