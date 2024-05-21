<template>
	<div class="px-md-6 py-10">
		<p style="color: #000; font-size: 24px; font-weight: 600">Following (1920)</p>
		<p style="color: var(--carbon-3, #969696); font-family: Faktum; font-size: 14px; font-style: normal; font-weight: 500">
			List of all the business accounts your are following
		</p>
	</div>
	<div class="d-flex px-md-6 pb-6 w-100 align-center">
		<v-text-field hide-details="" prepend-inner-icon="mdi mdi-magnify" placeholder="Search for Order ID or Product" density="compact"> </v-text-field>
		<v-btn
			rounded="xl"
			:width="$vuetify.display.mobile ? '116' : '154'"
			style="border: 1px solid #e5e5e5; color: #333; font-size: 14px; font-weight: 600"
			variant="outlined"
			class="textClass text-grey-darken-3 ml-3"
		>
			<v-img class="mr-2" width="14" height="14" src="https://res.cloudinary.com/payhospi/image/upload/v1716236855/umoja/filtericon.svg" />
			Filter
		</v-btn>
	</div>
	<div class="mx-md-6 mb-6 cardStyle">
		<div v-for="n in 8" :key="n">
			<div class="pa-md-6 d-flex align-center justify-space-between">
				<div class="d-flex">
					<v-avatar size="50" color="grey-lighten-2" class="mr-3"></v-avatar>
					<div>
						<p class="inputLabel my-0">Da Creative Zik</p>
						<p class="catlight mb-0">Fashions and Style</p>
						<a class="smallLink my-0">View Business Profile</a>
					</div>
				</div>
				<v-btn :width="$vuetify.display.mobile ? '107' : '154'" flat style="border: 1px solid var(--carbon-2, #cecece)" class="ml-3" rounded="xl">
					<span style="color: #333; font-size: 14px; font-weight: 600"> Following </span>
				</v-btn>
			</div>
			<v-divider v-if="n < 8" class="my-4 my-md-0"></v-divider>
		</div>
	</div>
</template>
