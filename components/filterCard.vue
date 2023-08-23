  <template>

  <v-col cols="12" lg="3">
               <v-card flat class="cardStyle">
                <p 
                style="font-size: 24px;
                font-weight: 600;
                letter-spacing: -0.72px;">Filter</p>
                <div @click="categoryExpand = !categoryExpand" style="cursor: pointer;" class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Category</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-expand-transition leave-absolute>

               
                <div v-if="categoryExpand">

                <v-chip-group
        v-model="category" color="green"
        column
         
      >
        <v-chip  :value="n"
        style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);"
        v-for="n in categories" :key="n"
           rounded="lg" class="px-6 py-3"
          variant="outlined" grow active-class="bordergreen text--green"
        >
        <span style="font-size: 14px;
font-weight: 500;
letter-spacing: -0.42px;"> {{n}}</span> 
        </v-chip>
        </v-chip-group>                </div>
 </v-expand-transition>
         <v-divider class="my-4"></v-divider>
         <div @click="genderExpand = !genderExpand" style="cursor: pointer;" class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Gender</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-expand-transition leave-absolute>

               
<div v-if="genderExpand">

                <v-chip-group
        v-model="gender" color="green"
        column
         
      >
        <v-chip  :value="n"
        style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);"
        v-for="n in genders" :key="n"
           rounded="lg" class="px-8 py-3"
          variant="outlined" grow active-class="bordergreen text--green"
        >
        <span style="font-size: 14px;
font-weight: 500;
letter-spacing: -0.42px;"> {{n}}</span> 
        </v-chip>
        </v-chip-group>
        </div>
        </v-expand-transition>
       <div>

        <v-divider class="my-4"></v-divider>
         <div @click="sellingExpand = !sellingExpand" style="cursor: pointer;" class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Selling Type</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-expand-transition leave-absolute>
<div v-if="sellingExpand">
                <v-checkbox class="mb-1" hide-details="" density="compact" v-for="n in ['In-store selling only', 'Online selling only', 'Available in-store and online']" color="green" inset>  <template v-slot:label>
                <div>

                    <p class="pl-2" style="color: #000!important;
font-size: 14px;
font-weight: 500;
">{{n}}</p>
</div>
</template>
</v-checkbox>
                </div>
                </v-expand-transition>
                </div>

       <div>

        <v-divider class="my-4"></v-divider>
         <div  @click="priceExpand = !priceExpand" style="cursor: pointer;" class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Price</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-expand-transition leave-absolute>
<div v-if="priceExpand">
                <v-text-field class="mb-2" hide-details="" density="compact" style="text-align: center;
font-size: 14px;
font-weight: 400;
" prepend-inner-icon="mdi mdi-currency-eur" placeholder="Minimum"></v-text-field>
                <v-text-field class="mb-4" hide-details="" density="compact" style="text-align: center;
font-size: 14px;
font-weight: 400;
" prepend-inner-icon="mdi mdi-currency-eur" placeholder="Maximum"></v-text-field>
                <v-row dense>
        <v-col  cols="6" v-for="(n, i) in ['€5.00 - €10.00', '€50.00 - €100.00', '€5.00 - €1000.00', '€50.00 - €5000.00']">
            <v-chip  :value="n"
        style="border-radius: 6px;
border: 1px solid var(--carbon-2, #CECECE);"
           rounded="lg" class="w-100 d-flex justify-center py-5"
          variant="outlined"  active-class="bordergreen text--green"
        >
        <span style="font-size: 12px;
font-weight: 500;
letter-spacing: -0.42px;"> {{n}}</span> 
        </v-chip> </v-col>
    </v-row>
            </div>
        </v-expand-transition>    
        </div>

       <div>

        <v-divider class="my-4"></v-divider>
         <div @click="payExpand = !payExpand" style="cursor: pointer;" class="d-flex mt-4 mb-2 justify-space-between align-center">
                    <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Payment</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-expand-transition leave-absolute>
<div v-if="payExpand">
                <v-checkbox class="mb-1" hide-details="" density="compact" v-for="n in ['Cash on Delivery', 'Gengspayler', 'Card Payment']" color="green" inset>  <template v-slot:label>
                <div>

                    <p class="pl-2"  style="color: #000!important;
font-size: 14px;
font-weight: 500;
">{{n}}</p>
</div>
</template>
</v-checkbox>
            </div>

            </v-expand-transition>
            </div>
       <div>

        <v-divider class="my-4"></v-divider>
            <div @click="productExpand = !productExpand" style="cursor: pointer;" class="d-flex mt-4 mb-2 justify-space-between align-center">
                        <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Product Rating</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-expand-transition leave-absolute>
<div v-if="productExpand">
                <v-checkbox class="mb-1 prat" hide-details="" density="compact" v-for="n in [4, 3, 2, 1]" color="green" inset>  <template style="opacity: 1!important;" v-slot:label>
                <div class="d-flex pb-1 align-center">
                    <v-rating
    :model-value="n"  
            active-color="#F0B136"
            half-increments density="comfortable"
            color="grey-lighten-1"
            size="x-small"
          ></v-rating>
                    <p class="pl-2"  style="color: #000!important;
font-size: 14px;
font-weight: 500;
">and above</p>
</div>
</template>
</v-checkbox>
            </div>
            </v-expand-transition>
            </div>
       <div>

        <v-divider class="my-4"></v-divider>
            <div @click="sizeExpand = !sizeExpand" style="cursor: pointer;" class="d-flex mt-4 mb-2 justify-space-between align-center">
                        <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Sizes</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-expand-transition leave-absolute>
<div v-if="sizeExpand">
                <v-text-field class="mb-4" hide-details="" density="comfortable" style="text-align: center;
font-size: 14px;
font-weight: 400;
" prepend-inner-icon="mdi mdi-magnify" placeholder="Search to add sizes"></v-text-field>
                <v-row dense>
        <v-col  cols="4" v-for="(n, i) in ['XXS', 'XL', 'XS', 'S', 'M', 'L', 'XXL', '3XL', '4XL']">
        <p class="w-100 d-flex align-center justify-center" style="color: #1E1E1E;
font-size: 14px;
font-weight: 400;height: 40px;border-radius: 6px;
border: 1px solid var(--carbon-1, #EDEDED);">{{ n }}</p>
        </v-col>
    </v-row>
            </div>
            </v-expand-transition>
            </div>
       <div>

        <v-divider class="my-4"></v-divider>
            <div @click="discountExpand = !discountExpand" style="cursor: pointer;" class="d-flex mt-4 mb-2 justify-space-between align-center">
                        <p style="color: #1E1E1E;
font-size: 18.118px;
font-weight: 600;
letter-spacing: -0.544px;">Discount%</p>
                    <v-icon icon="mdi mdi-chevron-down"></v-icon>
                </div>
                <v-expand-transition leave-absolute>
<div v-if="discountExpand">
                <v-text-field class="mb-4" hide-details="" density="comfortable" style="text-align: center;
font-size: 14px;
font-weight: 400;
" prepend-inner-icon="mdi mdi-magnify" placeholder="Search to add sizes"></v-text-field>
    <v-checkbox class="mb-1" hide-details="" density="compact" color="green" inset>  <template v-slot:label>
                <div>

                    <p class="pl-2"  style="color: #000!important;
font-size: 14px;
font-weight: 500;
">Free Delivery</p>
</div>
</template>
</v-checkbox>
    <v-checkbox class="mb-1" hide-details="" density="compact" v-for="n in discounts" color="green" inset>  <template v-slot:label>
                <div>

                    <p class="pl-2"  style="color: #000!important;
font-size: 14px;
font-weight: 500;
">{{n+ ' Discount'}}</p>
</div>
</template>
</v-checkbox>
            </div>
            </v-expand-transition>
            </div>

               </v-card> 
            </v-col> 
             </template>
<script>

export default {
    data() {
        return {
            categoryExpand: true,
            genderExpand: true,
            country: 'All of Africa',
            sellingExpand: false,
            priceExpand: false,
            payExpand: false,
            productExpand: false,
            sizeExpand: false,
            discountExpand: false,
            gender: 'Male',
            filters: ['Fashion', 'In-store selling only', '€50.00 - €100.00', 'Cash on Delivery'],
            genders: ['Male', 'Female', 'Unisex'],
            category: 'Fashion',
            categories: ['Fashion', 'Cosmetics', 'Art', 'Home Decoration'],
            discounts: ['10%', '20%', '30%', '45%', '50%', '60%', '75%'],
      
        }
    },
}
</script>