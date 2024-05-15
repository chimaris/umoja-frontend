<template>
	<div style="background-color: #f8f8f8; padding: 20px 0">
	  <v-row class="">
		<v-col cols="12" style="max-width: 400px" class="pb-0 dash" md="3">
		  <v-card class="rounded-0 py-4 pl-4" flat color="#F6F7F9" min>
			<v-timeline density="compact" side="end" truncate-line="start">
			  <v-timeline-item
				v-model="formSect"
				fill-dot
				v-for="item in items"
				:key="item.id"
				style="cursor: pointer"
				:dot-color="getDotColor(item.id)"
				@click="navigateToSection(item)"
				size="x-small"
			  >
				<template v-slot:icon>
				  <v-icon size="14" color="white" :icon="getIcon(item.id)"></v-icon>
				</template>
				<p :class="getLabelClass(item.id)">{{ `${item.id}. ${item.name}` }}</p>
			  </v-timeline-item>
			</v-timeline>
		  </v-card>
		</v-col>
		<v-col cols="12" class="pb-0 dash" md="7">
		  <v-card min-height="100vh" height="auto" class="pa-4" flat min style="background-color: #f8f8f8">
			<v-window v-model="stage">
			  <v-window-item value="About Business">
				<tellus @submit="navigateNext" />
			  </v-window-item>
			  <v-window-item value="Business Info">
				<business @submit="navigateNext" />
			  </v-window-item>
			  <v-window-item value="Contact">
				<editcontact @submit="navigateNext" />
			  </v-window-item>
			  <v-window-item value="Account">
				<editvendoraccount @submit="navigateNext" />
			  </v-window-item>
			  <v-window-item value="Subscription">
				<subscription @submit="navigateNext" />
			  </v-window-item>
			</v-window>
		  </v-card>
		</v-col>
		<v-col cols="12" class="pt-8" md="2">
		  <v-progress-linear :model-value="progress" color="light-green-darken-4"></v-progress-linear>
		  <span class="mt-2 float-right" style="font-weight: 600; font-size: 14px; text-align: right">{{ formSect }}/5 Complete</span>
		</v-col>
	  </v-row>
	</div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useVendorStore } from '~/stores/vendorStore';
  
  const vendorStore = useVendorStore()
  const formSect = ref(1);
  const stage = ref("About Business");
  const items = [
  	{ id: 1, name: "About Business" },
	{ id: 2, name: "Business Info" },
	{ id: 3, name: "Contact" },
	{ id: 4, name: "Account" },
	{ id: 5, name: "Subscription" },
  ];

  
  function getDotColor(itemId) {
	return itemId <= formSect.value ? '#00966D' : 'grey-lighten-2';
  }
  
  function getIcon(itemId) {
	return formSect.value > itemId ? 'mdi mdi-check' : '';
  }
  
  function getLabelClass(itemId) {
	return itemId === formSect.value ? 'text-black' : 'text-grey';
  }
  
  function navigateNext() {
	formSect.value++;
	stage.value = items[formSect.value - 1].name;
  }
  
	function navigateToSection(item) {
	formSect.value = item.id;
	stage.value = item.name;
	}
  const progress = ref(0);
  
  watch(formSect, () => {
	progress.value = (formSect.value / items.length) * 100;
  });
  
  </script>
  
  <style>
  .v-timeline--vertical .v-timeline-item:last-child .v-timeline-divider__after {
	display: none;
  }
  </style>
  