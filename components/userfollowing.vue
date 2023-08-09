<template>
    <div class="px-6 py-10"> 
    <p style="color: #000;
font-size: 24px;
font-weight: 600;
">Following (1920)</p>
    <p style="color: var(--carbon-3, #969696);
font-family: Faktum;
font-size: 14px;
font-style: normal;
font-weight: 500;">List of all the business accounts your are following</p>
</div>
<div class="d-flex px-6 pb-6 w-100 align-center">
        <v-text-field hide-details="" prepend-inner-icon="mdi mdi-magnify" placeholder="Search for Order ID or Product"
            density="compact">
        </v-text-field>
        <v-btn width="154" flat style="border: 1px solid var(--carbon-2, #CECECE);" class=" ml-3" rounded="xl">

            <span style="color: #333;
font-size: 14px;
font-weight: 600;">
                <v-icon class="mr-1" icon="mdi mdi-tune-vertical"></v-icon>
                Filters
            </span>
        </v-btn>
    </div>
<div class="ma-6 cardStyle">
    <div v-for="n in 8">
    <div  class="pa-6 d-flex align-center justify-space-between">
<div class="d-flex">
        <v-avatar size="50" color="grey-lighten-2" class="mr-3"></v-avatar>
        <div>
            <p class="inputLabel my-0">Da Creative Zik</p>
            <p class="catlight mb-0">Fashions and Style</p>
            <a class="smallLink my-0">View Business Profile</a>
        </div>
    </div>
    <v-btn width="154" flat style="border: 1px solid var(--carbon-2, #CECECE);" class=" ml-3" rounded="xl">

<span style="color: #333;
font-size: 14px;
font-weight: 600;">
    Following
</span>
</v-btn>
</div>
<v-divider v-if="n < 8" ></v-divider>
</div>

</div>

</template>