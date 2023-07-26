<template>
  <div class="v-container">
<div class="d-flex align-center justify-space-between">
  <h1 class="mt-4">Waitlist</h1>
  <v-btn @click="load()" :loading="loading" flat icon="mdi mdi-reload"></v-btn>
</div>
    <v-progress-linear :indeterminate="loading" v-if="loading" class="mb-5" model-value="20"></v-progress-linear>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            S/N
          </th>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Email
          </th>
          <th class="text-left">
            Category
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in list"
          :key="i"
        >
          <td>{{ i + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.category }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

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
        list: [],
        rules: {
        required: (value) => !!value || "Required.",
        email: (value) => {
          const pattern =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Invalid e-mail.";
        },
      },
    };
  },
  mounted() {
 this.load()
},
  methods: {
    load(){
      this.loading = true;
    axios.get('https://umoja-eaac4dc3d4d4.herokuapp.com/api/get_waitlist').then(response => {
        this.list = response.data.list
        console.log(response.data)
        this.loading = false;
    })
    },
    opendialog(){
        this.dialog = true
    },
    submitForm() {
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
    }
  }
};
</script>