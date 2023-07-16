<template>
 <v-container height="100%" class=" mx-auto px-5 " width="100%"
    style="overflow:hidden;padding-bottom: 200px;max-width: 1330px;" flat>   <p style="color: var(--carbon-4, #333);
font-size: 24px;
font-weight: 600;">App Integrations</p>
   <p style="color: #969696;
font-size: 16px;
font-weight: 400;">Lorem ipsum dolor sit amet consectetur. Mattis vitae.</p>

<v-row class="mt-4"> 
 
    <v-col cols="12" v-for="(n, i) in items" :key="i" md="6" lg="4">
        <v-sheet class="cardStyle">
            <div class="d-flex mb-4 justify-space-between">

                <v-avatar size="50" :color="n.color" rounded="lg"></v-avatar>

                <v-btn class="rounded-lg" v-if="n.connected" variant="tonal" color="green"> <v-icon class="mr-1" icon="mdi mdi-lightning-bolt-outline"></v-icon>  <span style="
                font-size: 14px;
                font-weight: 600;">Connected</span></v-btn>
                <v-btn  v-else style="    border: 1px solid #e5e5e5;"  class=" rounded-lg " color="white" variant="tonal"> <v-icon color="#333" class="mr-1" icon="mdi mdi-lightning-bolt-circle"></v-icon> 
                <span style="color: var(--carbon-4, #333);
                font-size: 14px;
                font-weight: 600;">Connect</span> </v-btn>
            </div>
            <p style="color: var(--carbon-4, #333);
font-size: 18px;
font-weight: 600;
line-height: 20px; /* 111.111% */" class="mb-3">{{n.title}}</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;"> Lorem ipsum dolor sit amet consectetur. Aliquam fermentum pellentesque nisl neque faucibus sed hac rhoncus. Nibh purus vulputate potenti adipiscing nunc.</p>
        </v-sheet>
    </v-col>
</v-row>
    </v-container>
</template>
<script>
export default {
    methods: {
        openDialog() {
            this.dialog = true
        },
        closeDialog() {
            this.dialog = false
        }
    },
    data: () => ({
        dialog: false,
        items: [
            {
                title: 'Jira',
                color: '#2C6E63',
                connected: true,
            },
            {
                title: 'Intercom',
                color: '#F38218',
                connected: false,
            },
            {
                title: 'Quick Books',
                color: '#F38218',
                connected: true,
            },
            {
                title: 'Jira',
                color: '#1273EB',
                connected: false,
            },
            {
                title: 'Intercom',
                color: '#333333',
                connected: false,
            },
            {
                title: 'Quick Books',
                color: '#00966D',
                connected: false,
            },
       
            {
                title: 'Jira',
                color: '#333333',
                connected: true,
            },
            {
                title: 'Intercom',
                color: '#835353',
                connected: false,
            },
            {
                title: 'Quick Books',
                color: '#F0B136',
                connected: true,
            },
           
        ],
    }),
}
</script>