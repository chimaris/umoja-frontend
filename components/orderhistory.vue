<template>
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
</template>