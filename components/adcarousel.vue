<template>
          <div :style="'background-color:'+ color">

<v-carousel style="overflow: visible;"
height="429" class="promo"
:show-arrows="false" hide-delimiter-background="" cycle>
<v-carousel-item 
v-for="n in 6"
>
<v-row>
    <v-col class="px-0" cols="12" md="6" lg="6">
        <v-img class="heroimg" eager width="100%" height="auto" :src="image" ></v-img>
    </v-col>
    <v-col class="px-0" cols="12" md="6" lg="6">
        <v-card rounded="0" width="100%" height="100%" min-height="429" :color="color" flat class=" d-flex align-center">
            <v-container   style="max-width:1400px" class="px-12">
                <p style="color: var(--magnetic-green-2, #CDD6D4);
font-size: 12px;
font-weight: 500;
letter-spacing: 3.66px;
text-transform: uppercase;">limited offer</p>
<p style="color: #FFF;
font-size: 48px;
font-weight: 500;
letter-spacing: -1.44px;">{{title}}</p>
<p style="color: #FFF;
font-size: 20px;
font-weight: 500;
letter-spacing: -0.2px;" class="mb-8"> GET 20% OFF for your first order</p>
<v-btn color="white" class="green-hover" size="large"  variant="outlined" rounded="xl" >
Shop now <v-icon class="ml-1" icon="mdi mdi-arrow-top-right"></v-icon>
</v-btn>
            </v-container>
        </v-card>
    </v-col>
</v-row>
</v-carousel-item>
</v-carousel>
</div>
</template>

<script>

export default {
props:['color','title', 'image'],
}
</script>