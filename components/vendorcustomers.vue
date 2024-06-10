<template>
	<v-container height="100%" class="mx-auto px-5" width="100%" style="overflow: hidden; padding-bottom: 200px; max-width: 1330px" flat>
		<div class="d-flex align-center justify-space-between">
			<div>
				<p style="font-weight: 600; font-size: 24px" class="mb-2 d-flex align-center text-left">List of all your customers</p>
			</div>
			<div>
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="ml-4 text-grey-darken-3"> Last 7 DAYS </v-btn>
				<!-- <v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="ml-4 text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-tray-arrow-down"></v-icon>
					Import
				</v-btn>
				<v-btn @click="dialog2 = true" flat color="green" size="large" class="ml-4 text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-plus"></v-icon>
					Add Customer
				</v-btn> -->
			</div>
		</div>

		<div class="d-flex pt-8 pb-6">
			<v-row style="overflow-x: scroll; -webkit-overflow-scrolling: touch; display: grid; grid-auto-flow: column">
				<v-col v-for="n in dashes">
					<v-card min-width="300px" class="mx-auto cardStyle" width="100%" style="" flat>
						<div class="d-flex align-center">
							<v-avatar class="mr-2" size="34"><v-img :src="n.img"></v-img></v-avatar>
							<p style="font-weight: 500; font-size: 20px; line-height: 25px; color: #333333">{{ n.name }}</p>
							<div class="ml-2">
								<v-icon size="16" icon="mdi mdi-information"> </v-icon>
								<v-tooltip activator="parent" location="end" class="text-red"> {{ n.tooltip }}</v-tooltip>
							</div>
						</div>
						<div class="d-flex align-center mt-4 justify-space-between">
							<h1 class="bigpriceClass2">{{ n.amount }}</h1>
							<div class="text-left">
								<p
									style="font-weight: 600; font-size: 14px; line-height: 18px; color: #00966d"
									class="text-grey-lighten-2"
									:class="n.trending ? 'text-grey-lighten-2' : 'text-red'"
								>
									<v-icon :icon="n.trending ? 'mdi mdi-trending-up' : 'mdi mdi-trending-down'"></v-icon> {{ n.trend }}%
								</p>
								<p style="font-weight: 500; font-size: 14px; line-height: 18px; letter-spacing: -0.01em; color: #969696">vs last 7 days</p>
							</div>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</div>
		<div class="d-flex align-center justify-space-between">
			<div class="pl-3" style="width: 50%; max-width: 580px">
				<v-text-field
					style="border: 1px solid #e5e5e5; border-radius: 6px"
					variant="outlined"
					density="compact"
					hide-details
					prepend-inner-icon="mdi mdi-magnify"
					placeholder="Search for order id, customer, order status or something..."
				></v-text-field>
			</div>
			<div class="d-flex align-center">
				<!-- <v-chip-group selected-class="text-primary" column>
					<v-chip
						style="font-weight: 600; font-size: 14px; line-height: 20px; color: #2c6e63"
						rounded="lg"
						size="x-large"
						color="green"
						variant="tonal"
						v-for="tag in ['All time', 'USA, CANADA, UK...']"
						:key="tag"
						closable
						close-icon="mdi  mdi-close"
					>
						{{ tag }}
					</v-chip>
				</v-chip-group> -->
				<v-btn style="border: 1px solid #e5e5e5" variant="outlined" size="large" class="ml-0 text-grey-darken-3">
					<v-icon class="mr-2" icon="mdi mdi-tune-vertical-variant"></v-icon>
					Filter
				</v-btn>
			</div>
		</div>

		<div class="mt-5">
			<div v-if="loading" class="d-flex align-center justify-center" style="position: relative; height: 100%; min-height: 300px">
				<v-progress-circular color="green" indeterminate></v-progress-circular>
			</div>
			<v-table v-if="!loading" style="height: 80% !important; overflow: scroll">
				<thead>
					<tr style="background: #f8f8f8; border-radius: 6px; height: 55px" class="rounded-lg">
						<th style="width: 50px" class="font-weight-medium text-left">
							<v-checkbox color="green" hide-details></v-checkbox>
						</th>
						<th style="font-size: 14px; width: 100px" class="font-weight-medium text-left">ID</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Username</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Gender</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Joined Date</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">Country/State</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium">status</th>
						<th style="font-size: 14px" class="text-left px-1 font-weight-medium"></th>
					</tr>
				</thead>
				<tbody>
					<tr @click="dialog = true" v-for="(item, index) in vendorFollowers.followers" :key="item.sn">
						<td class="text-grey-lighten-1 pl-4 px-1">
							<v-checkbox color="green" hide-details></v-checkbox>
						</td>
						<td style="font-size: 14px" class="tableLight px-1 pl-2">
							{{ index + 1 }}
						</td>
						<td class="tableThick px-1">
							<div class="d-flex align-center" style="text-transform: capitalize">
								<v-avatar size="30" class="mr-2">
									<v-img :src="item.picture"></v-img>
								</v-avatar>
								{{ item.first_name }} {{ item.last_name }}
							</div>
						</td>
						<td class="tableLight text-center px-1">
							<span>
								<v-chip
									style="width: 70px; font-weight: 500; font-size: 10px"
									class="rounded-lg elevation-0 d-flex justify-center"
									size="small"
									variant="elevated"
									color="#1273EB"
								></v-chip>
							</span>
							<!-- <span v-else class="d-flex align-center">
								<v-chip
									style="width: 70px; font-weight: 500; font-size: 10px"
									class="rounded-lg elevation-0 d-flex justify-center"
									size="small"
									variant="elevated"
									color="#F38218"
									>Female</v-chip
								></span
							> -->
						</td>
						<td class="tableLight px-1">{{ getdateRegistered(item.created) }}</td>

						<td style="font-weight: 600; font-size: 14px; line-height: 18px" class="tableLight px-1">
							<span style="color: #333333">{{ item.user_country }}, </span>
							<span style="color: #969696">{{ item.user_city }}</span>
						</td>
						<td class="text-grey-lighten-1 text-center px-1">
							<v-chip
								style="width: 70px; font-weight: 500 !important; font-size: 10px !important"
								size="small"
								rounded="lg"
								class="tablechip text-center d-flex justify-center"
								:color="item.status == 'active' ? 'green' : 'red'"
								variant="tonal"
							>
								{{ item.status }}
							</v-chip>
						</td>
						<td class="text-grey-lighten-1 text-center px-1">
							<v-menu width="auto">
								<template v-slot:activator="{ props }">
									<v-btn v-bind="props" icon variant="text" class="ml-8 text-grey-darken-3">
										<v-icon icon="mdi mdi-dots-horizontal"></v-icon>
									</v-btn>
								</template>
								<v-list>
									<v-list-item v-for="(item, index) in ['visit profile', 'edit', 'delete']" :key="index" :value="index">
										<v-list-item-title>{{ item }}</v-list-item-title>
									</v-list-item>
								</v-list>
							</v-menu>
						</td>

						<!-- <td style="font-size: 14px;" class="text-grey-lighten-1 px-1">
           <span v-if="chosen !== item.sn ">
               {{ item.total }}
           </span>
           <v-btn v-else color="green" size="small" class=" rounded-lg"> See details</v-btn>
       </td> -->
					</tr>
				</tbody>
			</v-table>
			<div v-if="!hasCustomer" class="d-flex flex-column justify-center align-center" style="max-height: 100%; height: 70vh">
				<v-sheet class="d-flex flex-column justify-center align-center text-center" style="width: 740px">
					<v-img :width="100" cover src="https://res.cloudinary.com/payhospi/image/upload/v1713433043/umoja/customer-empty-box.png"></v-img>
					<h2 style="color: #333; font-size: 24px; font-weight: 700; line-height: 30px">Everything customer in a single place</h2>
					<p style="color: #969696; font-size: 16px; font-weight: 500">
						When you have a customer, you will be updated with their details, get a summary of their order history, create segment to send
						personalized communications that drive sales and more
					</p>
				</v-sheet>
			</div>
			<v-dialog scrollable class="customerdet" v-model="dialog" transition="slide-x-reverse-transition" :scrim="true">
				<div style="width: 100%; height: 100%; display: flex; justify-content: right">
					<div @click="dialog = false" style="position: absolute; height: 100%; width: 100%"></div>
					<v-card height="100vh" style="overflow: scroll" width="100%" max-width="825" class="rounded-0">
						<div
							style="
								height: 67px;
								background: rgb(255 255 255 / 65%);
								backdrop-filter: blur(3px);
								position: sticky;
								z-index: 99;
								top: 0;
								border-bottom: 0.4px #efefef solid;
							"
						>
							<div class="h-100 pa-6 justify-space-between d-flex align-center">
								<div class="d-flex align-center">
									<v-btn class="mr-4" icon="mdi mdi-arrow-right-top" flat rounded="xl" @click="dialog = !dialog" variant="outlined"> </v-btn>

									<p style="font-weight: 600; font-size: 24px; line-height: 32px; color: #1a1d1f">Customer #23456</p>
								</div>
								<v-btn style="border: 1px solid #c20052" variant="outlined" size="large" class="ml-4" color="red">
									<v-icon class="mr-2" icon="mdi mdi-trash-can-outline"></v-icon>
									Remove Customer
								</v-btn>
							</div>
						</div>
						<div class=" ">
							<div class="d-flex px-6 py-8">
								<v-avatar class="" size="150"
									><v-img src="https://res.cloudinary.com/payhospi/image/upload/v1687702335/rectangle-1939_khvhag.png"></v-img
								></v-avatar>

								<div>
									<p class="px-6" style="color: #333; font-size: 32px; font-weight: 600; letter-spacing: -0.96px">Nweke Franklin Odira</p>
									<div class="d-flex px-6">
										<v-chip
											size="small"
											style="color: #333; font-size: 10px; font-weight: 500; width: 98px"
											rounded="lg"
											class="d-flex justify-center align-center mr-2"
										>
											<span class=""> Follows you </span>
										</v-chip>
										<v-chip
											color="green"
											size="small"
											style="font-size: 10px; font-weight: 500; width: 98px"
											rounded="lg"
											class="d-flex justify-center align-center mx-"
										>
											Active User</v-chip
										>
									</div>
									<div style="max-width: " class="px-1 pt-8 d-flex">
										<div :style="i < 3 ? 'border-right: 1px solid #e0e0e0;' : ''" class="px-5" v-for="(n, i) in customer_details" :key="i">
											<div>
												<p style="color: #969696; font-size: 14px; font-weight: 500">{{ n.item }}</p>
											</div>
											<p style="color: #333; font-size: 14px; font-weight: 500">{{ n.value }}</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="pa-6">
							<p style="font-size: 20px; font-style: normal; font-weight: 600; line-height: normal" class="mb-2">
								Private note <v-icon size="16" icon="mdi mdi-information"> </v-icon>
								<v-tooltip activator="parent" location="right" class="text-red"> Note for Customer</v-tooltip>
							</p>
							<v-card height="auto" class="mx-auto pt-2 coolTable pb-0 mb-8" width="100%" style="overflow: hidden" flat>
								<div class="bg-white d-flex justify-space-between px-2 pb-2" v-if="editor">
									<!-- :disabled="!editor.can().chain().focus().toggleBold().run()" -->
									<div>
										<v-btn
											flat
											icon="mdi mdi-format-italic"
											class="mr-1"
											@click="editor.chain().focus().toggleItalic().run()"
											:class="{ 'is-active': editor.isActive('italic') }"
										>
										</v-btn>
										<v-btn
											flat
											icon="mdi mdi-format-bold"
											class="mr-1"
											@click="editor.chain().focus().toggleBold().run()"
											:class="{ 'is-active': editor.isActive('bold') }"
										>
										</v-btn>
										<v-btn
											flat
											class="mr-1"
											@click="editor.chain().focus().toggleUnderline().run()"
											icon="mdi mdi-format-underline"
											:class="{ 'is-active': editor.isActive('underline') }"
										>
										</v-btn>
										<v-btn
											flat
											icon="mdi mdi-format-strikethrough"
											class="mr-1"
											@click="editor.chain().focus().toggleStrike().run()"
											:class="{ 'is-active': editor.isActive('strike') }"
										>
										</v-btn>
										<v-btn flat icon="mdi mdi-link-variant" class="mr-1" @click="setLink" :class="{ 'is-active': editor.isActive('link') }"> </v-btn>
										<v-btn
											flat
											icon="mdi mdi-link-variant-off"
											class="mr-1"
											@click="editor.chain().focus().unsetLink().run()"
											:disabled="!editor.isActive('link')"
										>
										</v-btn>
										<v-btn flat icon="mdi mdi-format-align-left" class="mr-1" @click="editor.chain().focus().setTextAlign('left').run()"> </v-btn>
										<v-btn flat icon="mdi mdi-format-align-center" class="mr-1" @click="editor.chain().focus().setTextAlign('center').run()"> </v-btn>
										<v-btn flat icon="mdi mdi-format-align-right" class="mr-1" @click="editor.chain().focus().setTextAlign('right').run()"> </v-btn>
										<v-btn
											flat
											icon="mdi mdi-format-list-bulleted"
											class="mr-1"
											@click="editor.chain().focus().toggleBulletList().run()"
											:class="{ 'is-active': editor.isActive('bullet') }"
										>
										</v-btn>
									</div>
									<div>
										<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-left"></v-btn>
										<v-btn flat color="grey" variant="text" icon="mdi mdi-arrow-right"></v-btn>
									</div>
								</div>
								<div style="min-height: 162px" class="bg-grey-lighten-4 pa-4">
									<editor-content :editor="editor" />
								</div>
							</v-card>

							<v-card height="auto" class="mx-auto px-6 pt-6 coolTable pb-12" width="100%" style="overflow: hidden" flat>
								<v-tabs v-model="tab" class="orders" color="green">
									<v-tab
										@click.stop="sort(item.prop, item.value)"
										v-for="item in tabs"
										:key="item"
										:value="item"
										class="d-flex text-capitalize align-center"
									>
										{{ item.name }}
									</v-tab>
								</v-tabs>
								<v-divider></v-divider>
								<v-window v-model="window">
									<v-window-item :value="'Customer Orders'">
										<div>
											<v-table>
												<thead>
													<tr class="  ">
														<th style="font-size: 14px; width: 53%" class="font-weight-bold text-left">Products</th>
														<th style="font-size: 14px; width: 10%" class="text- px-1 font-weight-bold">Price</th>
														<th style="font-size: 14px" class="text-left text-right font-weight-bold">Date</th>
														<th style="font-size: 14px" class="text-left pr-8 text-right font-weight-bold"></th>
													</tr>
												</thead>
											</v-table>

											<div
												class="rounded-lg"
												:class="selected == item.sn + '' + i ? 'bg-grey-lighten-4' : ''"
												style="width: 100% !important"
												v-for="(item, i) in items1"
												:key="item.sn"
											>
												<v-table :class="selected == item.sn + '' + i ? 'bg-grey-lighten-4' : ''">
													<tbody>
														<tr style="width: 100%" :style="chosen == item.sn ? 'background:#DFDFDF' : ''">
															<td style="font-size: 14px; height: 100px" class="px-1 d-flex align-center pl-2">
																<v-avatar rounded="lg" color="grey-lighten-2" class="pa-1 mr-3 ml-1" size="50"
																	><v-img
																		src="https://res.cloudinary.com/payhospi/image/upload/v1686754027/H468a70379a6043119f5077bf8ba35a7cO_bnnitb.png"
																	></v-img
																></v-avatar>
																<div>
																	<p class="" style="font-weight: 600; font-size: 16px; line-height: 20px; color: #333333">{{ item.name }}</p>
																	<p style="font-weight: 400; font-size: 14px; line-height: 18px; color: #969696">Fashion and Style</p>
																</div>
															</td>
															<td style="font-size: 14px" class="text-grey-darken-1 px-1">
																<v-chip rounded="lg" color="blue">
																	<span
																		style="color: var(--carbon-4, #333); font-size: 14px !important; font-weight: 600; line-height: 20px"
																		class="text-black"
																	>
																		€ 1,829.00
																	</span>
																</v-chip>
															</td>
															<td style="color: #000; font-size: 14px; font-weight: 500" class="text-right px-1">
																<span> September 9, 2022 </span>
															</td>
															<td style="color: #000; font-size: 14px; font-weight: 500" class="text-right px-1">
																<v-icon
																	@click="select(item.sn + '' + i)"
																	class="ml-"
																	:icon="selected !== item.sn + '' + i ? 'mdi mdi-chevron-down-circle-outline' : 'mdi mdi-chevron-up-circle-outline'"
																></v-icon>
															</td>
														</tr>
													</tbody>
												</v-table>
												<div style="width: 100%; border-bottom: 0.5px solid rgb(215, 215, 215)" class=" ">
													<v-expand-transition>
														<v-card
															color="grey-lighten-4"
															class="pb-4"
															flat
															v-show="selected == item.sn + '' + i"
															style="width: 100%; border-top: 1px dashed #cecece"
														>
															<v-row class="pa-4">
																<v-col>
																	<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Address
																	</p>
																	<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Mrs Smith 71 Cherry Court Southampton SO53 5PD
																	</p>
																</v-col>
																<v-col>
																	<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Product purchase
																	</p>
																	<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal">
																		In-store purchase
																	</p>
																</v-col>
																<v-col>
																	<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Tracking #UMOJA
																	</p>
																	<p
																		style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal"
																		class="d-flex align-center"
																	>
																		4589058409584045845 <v-icon size="x-small" color="green" class="ml-2" icon="mdi mdi-content-copy"></v-icon>
																	</p>
																</v-col>
																<v-col>
																	<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Delivery type
																	</p>
																	<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Umoja Shipping
																	</p>
																</v-col>
															</v-row>
															<v-row class="pa-4" style="border-top-width: 300px; border-top: 1px dashed #90beaa">
																<v-col style="position: relative">
																	<v-icon style="top: -28px; left: 0px; position: absolute" color="#90BEAA" icon="mdi mdi-circle"></v-icon>

																	<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Processed
																	</p>
																	<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">May 14</p>
																</v-col>
																<v-col style="position: relative">
																	<v-icon style="top: -28px; left: 5%; position: absolute" color="#90BEAA" icon="mdi mdi-circle"></v-icon>
																	<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Shipped
																	</p>
																	<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 600; line-height: normal">May 16</p>
																</v-col>
																<v-col style="position: relative">
																	<v-icon style="top: -28px; left: 5%; position: absolute" color="#90BEAA" icon="mdi mdi-circle"></v-icon>
																	<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		In-transit
																	</p>
																	<p
																		style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal"
																		class="d-flex align-center"
																	>
																		May 24
																	</p>
																</v-col>
																<v-col style="position: relative">
																	<v-icon style="top: -28px; left: 5%; position: absolute" color="green" icon="mdi mdi-check-circle"></v-icon>
																	<p class="mb-2" style="color: #969696; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Delivery type
																	</p>
																	<p style="color: #333; font-size: 14px; font-style: normal; font-weight: 500; line-height: normal">
																		Umoja Shipping
																	</p>
																</v-col>
															</v-row>
														</v-card>
													</v-expand-transition>
												</div>
											</div>
										</div>
									</v-window-item>
									<v-window-item :value="'Activities'">
										<v-card class="py-4">
											<div class="py-4" style="border-bottom: 0.5px solid rgb(215, 215, 215)" v-for="n in 4" :key="n">
												<div class="d-flex justify-space-between align-center">
													<div class="d-flex">
														<v-avatar size="56">
															<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688110792/rectangle-22424_cbrmty.png"></v-img>
														</v-avatar>
														<div class="px-4">
															<p style="color: #969696; font-size: 14px; font-weight: 400">
																<span style="color: #333; font-weight: 700"> Nweke Franklin </span> and 47 others liked your post.
															</p>
															<p style="color: #8e97ad; font-size: 12px; font-weight: 400">2hrs ago</p>
														</div>
													</div>
													<v-avatar rounded="lg" size="56">
														<v-img src="https://res.cloudinary.com/payhospi/image/upload/v1688113032/rectangle-22423_gbfrmk.png"></v-img>
													</v-avatar>
												</div>
											</div>
										</v-card>
									</v-window-item>
								</v-window>
							</v-card>
						</div>
					</v-card>
				</div>
			</v-dialog>
			<v-dialog width="auto" v-model="dialog2">
				<v-sheet width="100vw" max-width="669px" class="cardStyle px-0">
					<div class="px-6 d-flex justify-space-between">
						<div class="d-flex align-center">
							<v-avatar size="70" color="#EDEDED"><v-icon icon="mdi mdi-account-plus"></v-icon></v-avatar>
							<div class="mx-4">
								<p style="color: #333; font-size: 24px; font-weight: 600; line-height: 20px; letter-spacing: -0.24px">Add New Customer</p>
								<p style="color: #969696; font-size: 16px; font-weight: 500; line-height: 20px; letter-spacing: -0.16px" class="mt-2">
									Add New Customers to your lists
								</p>
							</div>
						</div>
						<v-icon @click="dialog2 = false" icon="mdi mdi-close-circle-outline" color="#1273EB"></v-icon>
					</div>
					<v-divider class="my-4"></v-divider>
					<div class="px-2">
						<v-breadcrumbs
							@click="window = 'ship'"
							style="color: var(--magnetic-green-4, #2c6e63); font-size: 14px; font-weight: 600; line-height: 20px; letter-spacing: -0.14px"
							density="compact"
							class="my-2"
							color="green"
							:items="['Basic Information', 'Shipping Details']"
						>
							<template v-slot:divider>
								<v-icon icon="mdi mdi-chevron-right"></v-icon>
							</template>
						</v-breadcrumbs>
					</div>
					<v-divider></v-divider>
					<v-window v-model="window" :show-arrows="false">
						<v-window-item value="basic">
							<div class="px-7 pt-6">
								<p style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px">Upload customer profile picture</p>
								<v-row class="pt-4 align-center pl-2 d-flex">
									<v-avatar size="70" color="#EDF0EF"><v-icon icon="mdi mdi-image-outline"></v-icon></v-avatar>

									<v-col>
										<div class="d-flex justify-center align-center pa-4 rounded-lg" style="height: ; width: 100%; border: 3.4px dashed #e1e1e1">
											<p class="text-center ma-auto" style="text-align: center; font-size: 12px; font-weight: 600; max-width: 260px">
												<span style="color: #1273eb"> Click to upload </span>
												or drag and drop SVG, PNF, JPG, or GIF (max 800X400px)
											</p>
										</div>
									</v-col>
								</v-row>
								<v-row class="mt-3">
									<v-col>
										<p class="inputLabel">First Name</p>
										<v-text-field placeholder="Enter first name" density="comfortable"> </v-text-field
									></v-col>
									<v-col>
										<p class="inputLabel">Last Name</p>

										<v-text-field placeholder="Enter last name" density="comfortable"> </v-text-field
									></v-col>
								</v-row>
								<p class="inputLabel">Language</p>
								<v-select
									persistent-hint
									hint="This customer will receive notification in this language"
									append-inner-icon="mdi mdi-chevron-down"
									placeholder="English (Default)"
									density="comfortable"
								>
								</v-select>
								<p class="inputLabel mt-5">Gender</p>
								<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select Gender" density="comfortable"> </v-select>
							</div>
							<div class="px-5">
								<p class="inputLabel">Email</p>
								<v-text-field placeholder="Enter customer email address" density="comfortable"> </v-text-field>
								<v-checkbox hide-details density="compact" color="#00966D">
									<template v-slot:label>
										<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
											Customer accepts email marketing
										</div>
									</template>
								</v-checkbox>
								<v-checkbox hide-details density="compact" color="#00966D">
									<template v-slot:label>
										<div style="color: #333; font-size: 14px; font-weight: 500; line-height: 20px" class="ml-2 font-weight-medium">
											Customer is tax exempt
										</div>
									</template>
								</v-checkbox>

								<div class="py-8">
									<v-row>
										<v-col cols="6"
											><v-btn size="large" style="border: 1px solid #e5e5e5" flat block>
												<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
											></v-col
										>
										<v-col cols="6">
											<v-btn size="large" color="green" flat block>
												<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save and Proceed </span></v-btn
											></v-col
										>
									</v-row>
								</div>
							</div>
						</v-window-item>
						<v-window-item value="ship">
							<div class="px-7 pt-6">
								<p class="inputLabel">Country/region</p>
								<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Country/region" density="comfortable"> </v-select>

								<p class="inputLabel">Company</p>
								<v-text-field placeholder="Company" density="comfortable"> </v-text-field>
								<p class="inputLabel">Address</p>

								<v-text-field placeholder="Enter customer address" density="comfortable"> </v-text-field>
								<p class="inputLabel">Apartment, suite, etc</p>
								<v-select
									persistent-hint
									hint="This customer will receive notification in this language"
									append-inner-icon="mdi mdi-chevron-down"
									placeholder="English (Default)"
									density="comfortable"
								>
								</v-select>
							</div>
							<div class="px-5">
								<v-row class="mt-3">
									<v-col>
										<p class="inputLabel">City</p>
										<v-text-field placeholder="Enter city" density="comfortable"> </v-text-field
									></v-col>
									<v-col>
										<p class="inputLabel">State</p>
										<v-select append-inner-icon="mdi mdi-chevron-down" placeholder="Select State" density="comfortable"> </v-select>
									</v-col>
									<v-col>
										<p class="inputLabel">Zipcode</p>

										<v-text-field placeholder="Enter last name" density="comfortable"> </v-text-field
									></v-col>
								</v-row>

								<p class="inputLabel">Phone</p>
								<v-text-field append-inner-icon="mdi mdi-phone" placeholder="NG" density="comfortable"> </v-text-field>

								<div class="py-8">
									<v-row>
										<v-col cols="6"
											><v-btn size="large" style="border: 1px solid #e5e5e5" flat block>
												<span style="color: #333; font-size: 14px; font-weight: 600; line-height: 20px"> Cancel</span></v-btn
											></v-col
										>
										<v-col cols="6">
											<v-btn size="large" color="green" flat block>
												<span style="color: #edf0ef; font-size: 14px; font-weight: 600; line-height: 20px"> Save and Proceed </span></v-btn
											></v-col
										>
									</v-row>
								</div>
							</div>
						</v-window-item>
					</v-window>
				</v-sheet>
			</v-dialog>
		</div>
	</v-container>
</template>
<style>
.v-btn--density-default.v-btn--size-default.v-btn--variant-elevated.is-active {
	background: black;
	color: white;
}
.ProseMirror-focused {
	outline: none;
}

.customerdet.v-dialog > .v-overlay__content {
	max-height: calc(100%);
	width: calc(100%);
	max-width: calc(100%);
	margin: 0px;
	height: 100%;
	display: flex;
}
</style>

<script>
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { useVendorStore } from "~/stores/vendorStore";
import { getVendorFollowers, getNoFollowers } from "~/composables/vendorCustomers";
import { formattedPrice } from "~/utils/price";
import { getdateRegistered } from "~/utils/date";
import { sortedIndexBy } from "lodash";

export default {
	setup() {
		const vendorStore = useVendorStore();
		const vendor = ref(vendorStore.vendor);
		const hasCustomer = computed(() => vendor.value.vendor_details?.order_count > 0);
		const vendorFollowers = ref([]);
		const loading = ref(false);

		onBeforeMount(async () => {
			if (hasCustomer.value) {
				loading.value = true;
				const id = vendor.value.vendor_details?.id;
				vendorFollowers.value = await getVendorFollowers(id);
				if (vendorFollowers.value) {
					loading.value = false;
				}
			}
		});
		const dashes = computed(() => {
			return [
				{
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686906413/Frame_427320547_6_u4cwdq.png",
					name: "Total Customers",
					tooltip: "Total customers in your shop",
					amount: hasCustomer.value ? vendorFollowers.value?.total_order_users : "0",
					trend: "0",
					trending: true,
				},
				{
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686906413/Frame_427320548_1_bvohqz.png",
					name: "Followers",
					tooltip: "Total members in the last seven days",
					amount: hasCustomer.value ? vendorFollowers.value?.total_followers : "0",
					trend: "0",
					trending: true,
				},
				{
					img: "https://res.cloudinary.com/payhospi/image/upload/v1686906397/Frame_427320547_7_znnge2.png",
					name: "Active",
					tooltip: "Active customers in the last seven days",
					amount: hasCustomer.value ? vendorFollowers.value?.active_followers : "0",
					trend: "0",
					trending: true,
				},
			];
		});
		return {
			vendor,
			hasCustomer,
			vendorFollowers,
			dashes,
			loading,
		};
	},
	components: {
		EditorContent,
	},

	data() {
		return {
			tab: "",
			editor: null,
			dialog: false,
			dialog2: false,
			selected: "",
			window: "Customer Orders",
			tabs: [
				{ name: "Customer Orders", prop: null, value: "Customer Orders" },
				{ name: "Activities", prop: "status", value: "Activities" },
			],
			items1: [],
			customer_details: [
				{
					item: "Gender",
					value: "Male",
				},
				{
					item: "Age",
					value: "26yrs",
				},
				{
					item: "Customer since",
					value: "14th May, 2023",
				},
				{
					item: "Country",
					value: "🇺🇸 United States, New York City",
				},
			],
		};
	},

	mounted() {
		this.items = this.items1;

		this.editor = new Editor({
			extensions: [
				StarterKit,
				Link,
				Underline,
				TextAlign.configure({
					types: ["heading", "paragraph"],
				}),
			],
			content: "",
		});
	},
	// beforeUnmount() {
	// 	this.editor.destroy();
	// },
	methods: {
		select(x) {
			if (this.selected == x) {
				this.selected = null;
				return;
			} else {
				this.selected = x;
			}
		},
		sort(x, y) {
			this.window = y;
		},
		mkbld() {
			console.log(this.editor.getHTML());
		},
		setLink() {
			const previousUrl = this.editor.getAttributes("link").href;
			const url = window.prompt("URL", previousUrl);

			// cancelled
			if (url === null) {
				return;
			}

			// empty
			if (url === "") {
				this.editor.chain().focus().extendMarkRange("link").unsetLink().run();

				return;
			}

			// update link
			this.editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
		},
	},
};
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
	> * + * {
		margin-top: 0.75em;
	}

	ul,
	ol {
		padding: 0 1rem;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		line-height: 1.1;
	}

	code {
		background-color: rgba(#616161, 0.1);
		color: #616161;
	}

	pre {
		background: #0d0d0d;
		color: #fff;
		font-family: "JetBrainsMono", monospace;
		padding: 0.75rem 1rem;
		border-radius: 0.5rem;

		code {
			color: inherit;
			padding: 0;
			background: none;
			font-size: 0.8rem;
		}
	}

	img {
		max-width: 100%;
		height: auto;
	}

	blockquote {
		padding-left: 1rem;
		border-left: 2px solid rgba(#0d0d0d, 0.1);
	}

	hr {
		border: none;
		border-top: 2px solid rgba(#0d0d0d, 0.1);
		margin: 2rem 0;
	}
}
</style>
