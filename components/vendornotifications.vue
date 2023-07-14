<template>
    <v-container>
        <div class=" my-5" >
    <v-tabs
      v-model="tab" class="orders"
      color="green"
      
    >
      <v-tab 
        v-for="item in ['All','Orders', 'Products', 'Customers', 'Reviews']"
        :key="item"
        :value="item" 
        class="d-flex text-capitalize  align-center"
      >
        {{ item }} 

      </v-tab>
    </v-tabs>
    <v-divider></v-divider>
    </div>
    <p style="color: var(--carbon-4, #333);

font-size: 20px;
font-weight: 600;">Today - 5TH July, 2023</p>
    </v-container>
</template>

<script>
export default {
 
  data() {
    return {
        tab: '',
        item: 'All',
        tabs:[{name:'All Orders', prop:null,value: null}, {name:'Unfulfilled',prop:'status',value: 0}, {name:'Unpaid',prop:'payment_status',value: 0}, {name:'Open',prop:'status',value: 1}, {name:'closed',prop:'status',value: 2}],
 
   items: []  
}
},
mounted(){
    this.items = this.items1;
  },
  methods:{
    choose(x){
      this.$emit('changePage', 'Order details');
    },
    choose2(x){
      this.$emit('changePage', 'createorder');
    },
    sort(x, y){
      var itm = this.items1;
      this.items = itm.filter((item) => {
      return item[x] == y;
    });
  }
}
}
</script>
