<template>
 
</template>
<script>

export default {
  data() {
    return {
        name: '',
        dialog2: false,
        dialog: false,
        loading: false,
        category:null,
        email: '',
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
  methods: {
    opendialog(){
        this.dialog = true
    },

  }

};
</script>