<template>
	<v-container style="max-width: 1330px" class="w-100 mt-5 pt-0 pr-8 pl-5">
		<div class="d-flex justify-center">
			<v-row style="">
				<v-col cols="12" lg="4">
					<v-card color="green" height="260" min-width="300px" class="pt-4 px-4 mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex align-center">
							<p style="font-weight: 400; font-size: 17px; line-height: 25px; letter-spacing: -0.01em; color: #edf0ef">
								Total Revenue made this year ({{new Date().getFullYear()}})
							</p>
						</div>
						<div class="d-flex align-center justify-space-between">
							<h1 style="font-weight: 600; font-size: 40px; line-height: 60px; color: #edf0ef">{{!hasOrder? formattedPrice(0.00) : orderStore.revenue[0]?.total_amount? formattedPrice(orderStore.revenue[0]?.total_amount) : formattedPrice(0.00)}}</h1>
							<div class="pa-4" style="position: absolute; bottom: 0; width: 100%; left: 0">
								<v-progress-linear class="rounded-xl"  :model-value="!hasOrder? 0 : orderStore.revenue[0]?.total_amount? `${(orderStore.revenue[0]?.total_amount)}` : 0" :height="5"></v-progress-linear>
								<div class="d-flex pt-3 justify-space-between">
									<p class="tiny">{{!hasOrder? '0%' : orderStore.revenue[0]?.total_amount? formattedPrice(orderStore.revenue[0]?.total_amount) : 0}}</p>
									<!-- <p class="tiny">{{!hasOrder? '' :'€ 65M Last year'}}</p> -->
								</div>
							</div>
						</div>
					</v-card>
				</v-col>
				<v-col cols="12" lg="4">
					<v-card v-if="!hasOrder" color="" height="260" min-width="300px" class="pt-4 px-4 mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex justify-space-between">
							<p style="font-weight: 600; font-size: 24px; line-height: 30px; letter-spacing: -0.03em; color: #333333">Most Purchased Category</p>
						</div>

						<div style="display: flex; flex-direction: column; justify-content: center; color: #969696; width: 100%; height: 100%; gap: 10px; align-items: center" class="">
							<v-icon><i class="mdi mdi-block-helper"></i></v-icon>
							<span>No Product has been sold yet</span>
						</div>
					</v-card>
					<v-card v-else color="" height="260" min-width="300px" class="pt-4 px-4 mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex justify-space-between">
							<p style="font-weight: 600; font-size: 24px; line-height: 30px; letter-spacing: -0.03em; color: #333333">Most Purchased Category</p>
							<v-btn size="small" variant="text" color="#1361F4" class="" @click="dialog = true"> View All </v-btn>
						</div>

						<div  class="mt-3">
							<div v-for="(n, i) in allCategories.slice(0, 3)" :key="i" class="px-0 py-1">
								<div class="d-flex pb-2 align-center justify-space-between">
									<div class="d-flex align-center">
										<!-- <v-avatar size="30" rounded="lg"><v-img :src="n.img"></v-img></v-avatar> -->
										<p class="ml-2 tiny2">{{ n.category_name }}</p>
									</div>
									<p class="tiny2">{{formattedPrice(n.total_revenue)}}</p>
								</div>
								<v-progress-linear class="rounded-xl" :color="colors[i]" :model-value="n.total_revenue" :height="5"></v-progress-linear>
							</div>
						</div>
					</v-card>
				</v-col>
				<v-col cols="12" lg="4">
					<v-card v-if="!hasOrder" color="" height="260" min-width="300px" class="pt-4 px-4 mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex justify-space-between">
							<p style="font-weight: 600; font-size: 24px; line-height: 30px; letter-spacing: -0.03em; color: #333333">Most Popular Product</p>
						</div>

						<div style="display: flex; flex-direction: column; justify-content: center; color: #969696; width: 100%; height: 100%; gap: 10px; align-items: center" class="">
							<v-icon><i class="mdi mdi-block-helper"></i></v-icon>
							<span>No Product has been sold yet</span>
						</div>
					</v-card>
					<v-card v-else color="" height="260" min-width="300px" class="pt-4 px-4 mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex justify-space-between">
							<p style="font-weight: 600; font-size: 24px; line-height: 30px; letter-spacing: -0.03em; color: #333333">Most Popular Product</p>
							<v-btn size="small" variant="text" color="#1361F4" class="" @click="dialog1 = true"> View All </v-btn>
						</div>

						<div  class="mt-3">
							<div v-for="(n,i) in allProducts.slice(0,3)" :key="n" class="px-0 py-2">
								<div class="d-flex pb-2 align-center justify-space-between">
									<div class="d-flex align-center">
										<v-avatar size="30" rounded="lg"><v-img cover :src="n.product_photo.split(',')[0]"></v-img></v-avatar>
										<p class="ml-2 tiny2">{{ n.product_name }}</p>
									</div>
									<p class="tiny2">{{formattedPrice(n.total_revenue)}}</p>
								</div>
								<v-progress-linear class="rounded-xl" :color="colors[i]" :model-value="n.total_revenue" :height="5"></v-progress-linear>
							</div>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</div>

		<v-row class="py-6">
			<v-col cols="12" lg="6">
				<v-card class="mx-auto cardStyle" width="100%" style="" flat>
					<div class="d-flex justify-space-between">
						<div>
							<p class="mb-2 timernum d-flex align-center text-left">By Product</p>
						</div>

						<v-menu width="auto">
							<template v-slot:activator="{ props }">
								<v-btn :disabled="!hasOrder" v-bind="props" style="border: 1px solid #e5e5e5" variant="outlined" class="text-grey-darken-3">
									{{filterProduct}} <v-icon icon="mdi mdi-chevron-down"></v-icon>
								</v-btn>
							</template>
							<v-list>
								<v-list-item v-for="(item, index) in ['Last 7 days', 'This Month', 'This Year', 'Custom']" :key="index" @click="filterProduct = item">
									<v-list-item-title>{{ item }}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
						</div>
					<!-- <div class="d-flex align-center" v-if="hasOrder">
						<p v-for="n in soldProducts" class="mr-2 lightText3"><v-icon size="9.6" :color="n.color" icon="mdi mdi-circle"></v-icon> {{ n.product_name }}</p>
					</div> -->
					<soldproductgraph :soldProducts="soldProducts" />
				</v-card>
			</v-col>
			<v-col cols="12" lg="6">
				<v-card class="mx-auto cardStyle" width="100%" style="" flat>
					<div class="d-flex justify-space-between">
						<div>
							<p class="mb-2 timernum d-flex align-center text-left">By Category</p>
						</div>

						<v-menu width="auto">
							<template v-slot:activator="{ props }">
								<v-btn :disabled="!hasOrder" v-bind="props" style="border: 1px solid #e5e5e5" variant="outlined" class="text-grey-darken-3">
									{{filterCategory}} <v-icon icon="mdi mdi-chevron-down"></v-icon>
								</v-btn>
							</template>
							<v-list>
								<v-list-item v-for="(item, index) in ['Last 7 days', 'This Month', 'This Year', 'Custom']" :key="index" @click="filterCategory = item">
									<v-list-item-title>{{ item }}</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
					</div>
					<!-- <div class="d-flex align-center" v-if="hasOrder">
						<p v-for="n in items2" class="mr-2 lightText3"><v-icon size="9.6" :color="n.color" icon="mdi mdi-circle"></v-icon> {{ n.name }}</p>
					</div> -->
					<salescategorygraph :soldCategories="soldCategories" />
				</v-card>
			</v-col>

			<v-col cols="12">
				<v-card class="mx-auto cardStyle" width="100%" style="" flat>
					<div class="d-flex justify-space-between">
						<div>
							<h4 class="mb-2 timernum d-flex align-center text-left">Revenue Growth <span class="ml-2 lightText">(EUR)</span></h4>
							<p style="font-weight: 600; font-size: 48px; line-height: 60px; color: #333333">{{!hasOrder? formattedPrice(0.00) : saleRevenue[0]?.total_amount? formattedPrice(saleRevenue[0]?.total_amount) : formattedPrice(0.00)}}</p>
						</div>

						<v-chip-group
							variant="outlined"
							mandatory
							style="
								font-size: 14px;
								line-height: 17px;
								font-weight: 600 !important;
								letter-spacing: 0.03em;
								text-transform: uppercase;
								color: #333333;
							"
							class="text-capitalize"
							v-model="chip"
							selected-class=" chipselected2"
						>
							<v-chip 
								:class="chip == tag ? 'chipselected2' : ''"
								style="border: 1px solid #ced2d6; font-size: 14px; font-weight: 600 !important"
								size="x-large"
								:disabled="!hasOrder"
								@click="filterRevenue = tag"
								class="pa-4"
								v-for="tag in ['Last 24 hours', 'Last 7 days', 'This Month', 'This Year']"
								:key="tag"
							>
								{{ tag }}
							</v-chip>
						</v-chip-group>
					</div>
					<revenuegrowthgraph :saleRevenue ="saleRevenue"/>
				</v-card>
			</v-col>
		</v-row>
	</v-container>

	<!-- Most Purchased Category -->
	<v-dialog v-model="dialog" max-width="94%">
		<v-card style="padding: 20px; border-radius: 15px">
			<div class="d-flex align-center justify-space-between">
				<div>
					<p style="font-weight: 600; font-size: 24px" class="mb-2 d-flex align-center text-left">Most Popular Category</p>
				</div>
				<v-btn flat color="green" size="large" class="ml-4 text-grey-darken-3 d-flex justify-between items-center">
					<v-icon class="mr-2 mt-1" icon="mdi mdi-cloud-download"></v-icon>
					<span>Export trending products to CSV</span>
				</v-btn>
			</div>

			<div class="d-flex w-100 align-center mt-6 mb-3 justify-space-between">
				<div class="d-flex w-50 align-center">
					<v-text-field
						style="border: 1px solid #cecece; border-radius: 6px"
						variant="outlined"
						density="compact"
						hide-details
						prepend-inner-icon="mdi mdi-magnify"
						placeholder="Search for  any product to know how the product is doing"
					></v-text-field>
				</div>
				<div class="d-flex align-center">
					<v-btn
						:style="{ display: showFilter ? 'none' : 'block' }"
						style="border: 1px solid #e5e5e5"
						variant="outlined"
						size="large"
						class="ml-4 text-grey-darken-3"
						@click="showFilter = true"
					>
						<v-icon class="mr-2" icon="mdi mdi-tune"></v-icon>
						Filter
					</v-btn>
					<v-btn
						:style="{ display: showFilter ? 'block' : 'none' }"
						style="border: 1px solid #94aaa5; color: #2c6e63; background-color: #cdd6d4"
						variant="outlined"
						size="large"
						class="ml-4"
						@click="showFilter = !showFilter"
					>
						<v-icon class="mr-2" icon="mdi mdi-close-circle-outline"></v-icon>
						Close Filter
					</v-btn>
				</div>
			</div>
			<!-- Filtering Section -->
			<div style="overflow-y: scroll" :style="{ display: showFilter ? 'block' : 'none' }">
				<v-row class="mt-3">
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Year"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Month"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Day"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Review Stars"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="Price"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Estimated Orders"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
				</v-row>
			</div>
			<!-- Table -->
			<v-table style="height: 80%; !important; overflow: scroll;">
				<thead>
					<tr style="background: #edf0ef; border-radius: 6px">
						<th style="width: 40px" class="font-weight-medium text-left">
							<v-checkbox hide-details></v-checkbox>
						</th>
						<th style="font-size: 14px; width: 100px" class="font-weight-medium text-left">Category</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Total Rating</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Price Range</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Est. Orders/day</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Est. Revenue</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Growth</th>
					</tr>
				</thead>
				<tbody>
					<!-- @click="chosen = item.sn" -->
					<tr :style="chosen == item.sn ? 'background:#DFDFDF' : ''" v-for="item in items1" :key="item.sn">
						<td class="text-grey-lighten-1 pl-4 px-1">
							<v-checkbox hide-details></v-checkbox>
						</td>
						<td style="position: relative; font-size: 14px; height: 100px">
							<div style="position: ; top: 24px; width: ">
								<v-menu class="pl-0" offset="9px" open-on-hover location="top">
									<template v-slot:activator="{ props }">
										<div v-bind="props" class="d-flex align-center pr-4 pl-2">
											<v-avatar color="grey-lighten-4" class="rounded-pill pa-1 mr-3 ml-0" size="50"
												><v-img
													src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"
												></v-img
											></v-avatar>
											<div>
												<p class="mb-1" style="font-weight: 600; font-size: 16px !important; line-height: 20px; color: #333333">Clothing</p>
											</div>
										</div></template
									>
									<!-- <v-card max-width="310" class="pa-6 rounded-lg" color="#2C6E63">
										<v-row class="d-flex align-start">
											<v-avatar color="grey-lighten-4" class="pa-1" size="70" rounded="lg">
												<v-img
													src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"
												></v-img>
											</v-avatar>
											<v-col class="py-0">
												<p style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px">
													Multicolored Ankara Material made in the Suberbs of Africa
												</p>
												<p style="color: #cdd6d4; font-size: 12px; font-weight: 500; line-height: 20px">Fashion and Style</p>

												<p style="color: #edf0ef; font-size: 16px; font-weight: 600; line-height: 20px" class="mt-1">€ 235.00 per yard</p>
											</v-col>
										</v-row>
									</v-card> -->
								</v-menu>
							</div>
						</td>

						<td class="tableThick px-1">
							<p style="font-weight: 600; font-size: 16px; line-height: 10px; color: #000000" class="d-flex align-center">
								<v-rating readonly model-value="4" color="grey-lighten-1" active-color="#F0B136" density="compact" size="" class="mr-2"></v-rating>
								<span style="font-weight: 500; color: #969696">(560)</span>
							</p>
						</td>
						<td class="tableThick px-1">$17.00 - $150.00</td>

						<td class="tableThick px-1">200 - 300</td>
						<td class="tableThick px-1">$27,800.69 - $31,004.67</td>

						<td class="text-grey-lighten-1 text-center px-1">
							<div class="d-flex" style="color: #00966d">
								<v-icon class="mr-1" icon="mdi mdi-trending-up" style="color: #00966d"></v-icon>
								<p style="font-size: 16px; font-weight: 600; padding: 0 5px 5px 0">+ 1764%</p>
							</div>
						</td>
					</tr>
				</tbody>
			</v-table>
			<v-btn
				variant="outlined"
				density="default"
				size="x-large"
				max-width="298px"
				class="mt-10"
				style="font-size: 14px; font-weight: 600; color: #333333; text-align: center; margin: auto; padding: 16px 34px"
			>
				See the next 50 categories
			</v-btn>
		</v-card>
	</v-dialog>

	<!-- Most Purchased Product -->
	<v-dialog v-model="dialog1" max-width="94%">
		<v-card style="padding: 20px; border-radius: 15px">
			<div class="d-flex align-center justify-space-between">
				<div>
					<p style="font-weight: 600; font-size: 24px" class="mb-2 d-flex align-center text-left">Most Purchased Product</p>
				</div>
				<v-btn flat color="green" size="large" class="ml-4 text-grey-darken-3 d-flex justify-between items-center">
					<v-icon class="mr-2 mt-1" icon="mdi mdi-cloud-download"></v-icon>
					<span>Export trending products to CSV</span>
				</v-btn>
			</div>

			<div class="d-flex w-100 align-center mt-6 mb-3 justify-space-between">
				<div class="d-flex w-50 align-center">
					<v-text-field
						style="border: 1px solid #cecece; border-radius: 6px"
						variant="outlined"
						density="compact"
						hide-details
						prepend-inner-icon="mdi mdi-magnify"
						placeholder="Search for  any product to know how the product is doing"
					></v-text-field>
				</div>
				<div class="d-flex align-center">
					<v-btn
						:style="{ display: showFilter ? 'none' : 'block' }"
						style="border: 1px solid #e5e5e5"
						variant="outlined"
						size="large"
						class="ml-4 text-grey-darken-3"
						@click="showFilter = true"
					>
						<v-icon class="mr-2" icon="mdi mdi-tune"></v-icon>
						Filter
					</v-btn>
					<v-btn
						:style="{ display: showFilter ? 'block' : 'none' }"
						style="border: 1px solid #94aaa5; color: #2c6e63; background-color: #cdd6d4"
						variant="outlined"
						size="large"
						class="ml-4"
						@click="showFilter = !showFilter"
					>
						<v-icon class="mr-2" icon="mdi mdi-close-circle-outline"></v-icon>
						Close Filter
					</v-btn>
				</div>
			</div>
			<!-- Filtering Section -->
			<div style="overflow-y: scroll" :style="{ display: showFilter ? 'block' : 'none' }">
				<v-row class="mt-3">
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Year"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Month"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Day"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Review Stars"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="Price"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
					<v-col col="'2'">
						<v-select
							density="compact"
							append-inner-icon="mdi mdi-chevron-down"
							color="grey-lighten-2"
							flat
							size="x-small"
							style="border-radius: 5px"
							label="By Estimated Orders"
							:items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
						></v-select>
					</v-col>
				</v-row>
			</div>
			<!-- Table -->
			<v-table style="height: 80%; !important; overflow: scroll;">
				<thead>
					<tr style="background: #edf0ef; border-radius: 6px">
						<th style="width: 40px" class="font-weight-medium text-left">
							<v-checkbox hide-details></v-checkbox>
						</th>
						<th style="font-size: 14px; width: 100px" class="font-weight-medium text-left">Product Information</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Rating</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Price</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Category</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Est. Orders/day</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Est. Revenue</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Growth</th>
					</tr>
				</thead>
				<tbody>
					<!-- @click="chosen = item.sn" -->
					<tr :style="chosen == item.sn ? 'background:#DFDFDF' : ''" v-for="item in soldProducts" :key="item.sn">
						<td class="text-grey-lighten-1 pl-4 px-1">
							<v-checkbox hide-details></v-checkbox>
						</td>
						<td style="position: relative; font-size: 14px; height: 100px">
							<div style="position: ; top: 24px; width: ">
								<v-menu class="pl-0" offset="9px" open-on-hover location="top">
									<template v-slot:activator="{ props }">
										<div v-bind="props" class="d-flex align-center pr-4 pl-2">
											<v-avatar color="grey-lighten-4" class="rounded-lg pa-1 mr-3 ml-0" size="50"
												><v-img
													:src="item.product_photo.split(',')[0]"
												></v-img
											></v-avatar>
											<div>
												<p class="mb-1" style="font-weight: 600; font-size: 16px !important; line-height: 20px; color: #333333">
													{{item.product_name}}
												</p>
												<p style="font-weight: 400; font-size: 14px; line-height: 18px; color: #969696" class="text-truncate">
													{{item.product_name}}
												</p>
											</div>
										</div></template
									>
									<v-card max-width="310" class="pa-6 rounded-lg" color="#2C6E63">
										<v-row class="d-flex align-start">
											<v-avatar color="grey-lighten-4" class="pa-1" size="70" rounded="lg">
												<v-img
													src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"
												></v-img>
											</v-avatar>
											<v-col class="py-0">
												<p style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px">
													Multicolored Ankara Material made in the Suberbs of Africa
												</p>
												<p style="color: #cdd6d4; font-size: 12px; font-weight: 500; line-height: 20px">Fashion and Style</p>

												<p style="color: #edf0ef; font-size: 16px; font-weight: 600; line-height: 20px" class="mt-1">€ 235.00 per yard</p>
											</v-col>
										</v-row>
									</v-card>
								</v-menu>
							</div>
						</td>

						<td class="tableThick px-1">
							<p style="font-weight: 600; font-size: 16px; line-height: 10px; color: #000000" class="d-flex align-center">
								<v-rating readonly model-value="4" color="grey-lighten-1" active-color="#F0B136" density="compact" size="" class="mr-2"></v-rating>
								<span style="font-weight: 500; color: #969696">(560)</span>
							</p>
						</td>
						<td class="tableThick px-1">
							<div class="d-flex pb-2" style="color: #333333; border-bottom: 1px dashed #1273eb; width: 50%">
								<p style="font-size: 16px; font-weight: 600; padding: 0 5px 5px 0">$8.99</p>
								<v-icon class="ml-2" icon="mdi mdi-arrow-up" style="color: #00966d"></v-icon>
							</div>
							<p style="color: #333333; font-weight: 500; font-size: 14px">Last Changed: 26/19/2024</p>
						</td>
						<td style="height: 100px" class="align-center d-flex px-1">
							<v-chip
								style="color: #333; background-color: #ededed; font-size: 10px; font-weight: 500"
								rounded="sm"
								class=""
								size="small"
								color="grey"
								variant="tonal"
							>
								Fashion and style
							</v-chip>
							<v-chip
								style="color: #333; background-color: #ededed; font-size: 10px; font-weight: 500"
								rounded="sm"
								class="mx-2"
								size="small"
								color="grey"
								variant="tonal"
							>
								Clothes
							</v-chip>
						</td>
						<td class="tableThick px-1">31 - 35</td>
						<td class="tableThick px-1">$ 278.69 - $314.67</td>

						<td class="text-grey-lighten-1 text-center px-1">
							<div class="d-flex" style="color: #00966d">
								<v-icon class="mr-1" icon="mdi mdi-trending-up" style="color: #00966d"></v-icon>
								<p style="font-size: 16px; font-weight: 600; padding: 0 5px 5px 0">+ 1764%</p>
							</div>
						</td>
					</tr>
				</tbody>
			</v-table>
			<v-btn
				variant="outlined"
				density="default"
				size="x-large"
				max-width="298px"
				class="mt-10"
				style="font-size: 14px; font-weight: 600; color: #333333; text-align: center; margin: auto; padding: 16px 34px"
			>
				See the next 50 products
			</v-btn>
		</v-card>
	</v-dialog>
</template>
<style>
.reviewstab .v-carousel .v-btn--icon .v-icon {
	font-size: 9px;
}
.reviewstab .v-carousel--hide-delimiter-background .v-carousel__controls {
	bottom: -33px;
}
.reviewstab .v-carousel .v-btn--icon.v-btn--active .v-icon {
	color: orange;
}
</style>
<script setup>
import { useOrderStore } from '~/stores/order';
import { formattedPrice } from '~/utils/price';
import {vendorUseApi} from '~/composables/vendorApi'
import {ref, onBeforeMount, onMounted} from 'vue'
import { useVendorStore } from '~/stores/vendorStore';
import { getRevenue, getSales, getCategories, getAllCategories, getAllProducts } from '~/composables/useSales';

		const soldProducts =ref([])
		const vendorStore  = useVendorStore();
		const soldCategories = ref([])
		const saleRevenue = ref([])
		const filterProduct =ref("Last 7 days")
		const filterCategory = ref("Last 7 days")
		const filterRevenue = ref("Last 24 hours")
		const orderStore = useOrderStore()
		const vendor = ref(vendorStore.vendor)
		const chip = ref("Last 24 hours")
		const text = ref("1")
		const chosen =ref("")
		const dialog = ref(false)
		const dialog1 = ref(false)
		const showFilter = ref(false)
		const allCategories = ref([])
		const allProducts = ref([])
		const hasOrder = computed(() => vendor.value.vendor_details?.order_count > 0)

		onMounted(async () => {
			if (hasOrder.value){
				allCategories.value = await getAllCategories()
				allProducts.value = await getAllProducts()
				soldProducts.value = await getSales(filterProduct.value)
				soldCategories.value = await getCategories(filterCategory.value)
				saleRevenue.value = await getRevenue(filterRevenue.value)
				await useOrderStore().getRevenues()
			}
		});
		watch(() => filterProduct.value, async (newval) => {
			if (hasOrder.value && newval){
				soldProducts.value = await getSales(filterProduct.value)
			}
			
		})
		watch(() => filterCategory.value, async (newval) => {
			if (hasOrder.value && newval){
				soldCategories.value = await getCategories(filterCategory.value)
			}
			
		})
		watch(() => filterRevenue.value, async (newval) => {
			if (hasOrder.value && newval){
				saleRevenue.value = await getRevenue(filterRevenue.value)
			}
		
		})



const items1 = ref( [
				{
					sn: "#23942",
					name: "Leather crop top & pants......",
					date: "17 May",
					total: "€2,349‎",
					date: "May 29, 2023",
					customer: "Okoli Bonaventure",
					delivery: "€ 24.08",
					payment_status: 1,
					status: 2,
					items_no: 7,
					delivery_method: "Umoja Delivery",
				},
				{
					sn: "#876567",
					name: "Leather crop top & pants......",
					date: "17 May",
					total: "€2,349‎",
					date: "May 29, 2023",
					customer: "David",
					delivery: 0,
					payment_status: 0,
					status: 2,
					items_no: 1,
					delivery_method: "Fedex Delivery",
				},
				{
					sn: "#3456456",
					name: "Leather crop top & pants......",
					date: "17 May",
					total: "€2,349‎",
					date: "May 29, 2023",
					customer: "Frank",
					delivery: "€ 24.08",
					payment_status: 1,
					status: 2,
					items_no: 4,
					delivery_method: "DHL Delivery",
				},

				{
					sn: "#9867763",
					name: "Leather crop top & pants......",
					date: "17 May",
					total: "€2,349‎",
					date: "May 29, 2023",
					customer: "Okoli Bonaventure",
					delivery: "€ 24.08",
					payment_status: 1,
					status: 1,
					items_no: 7,
					delivery_method: "DHL Delivery",
				},
			])
		
const items =  ref([])	
const colors = ["#CBDED6", "#00966D", "#005A41"]

</script>
