<template>
	<v-row class="pt-2">
		<v-col cols="12" lg="8">
			<v-card class="overflow-visible" flat color="#F7F7F7" min-height="" width="100%">
				<v-card flat style="border-radius: 10px" class="pt-8 pb-4 px-4">
					<h1
						style="
							font-weight: 800;
							font-size: 32px;
							line-height: 40px;
							/* identical to box height */

							text-transform: uppercase;

							/* Carbon/4 */

							color: #333333;
						"
					>
						CART (3)
					</h1>
					<v-divider class="my-4"></v-divider>
					<div class="d-flex justify-space-between align-center">
						<v-btn color="red" variant="tonal"
							><span class="smallBtn">Clear cart</span> <v-icon size="15" class="ml-1" icon="mdi mdi-trash-can-outline"></v-icon
						></v-btn>

						<p class="text-overline text-grey-lighten-1">price</p>
					</div>
					<v-divider class="my-4"></v-divider>

					<v-sheet>
						<v-card v-for="(n, i) in 3" :key="n" class="py-2 px-2 my-2" flat color="transparent">
							<v-row>
								<v-col cols="3">
									<v-img
										cover
										class="rounded-lg bg-grey-lighten-2"
										width="100%"
										height="180"
										src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893058/umoja-backup2/Rectangle_459_1_wnr1ld_f2bmap.png"
									></v-img>
								</v-col>
								<v-col cols="6">
									<v-chip size="x-small" class="rounded-lg text-overline font-weight-regular" variant="tonal" color="green">in stock</v-chip>
									<p style="font-weight: 700; font-size: 16px; line-height: 140%; color: #333333" class="my-2">
										The Benin stone sculpture, made of clay in the 1900’s.
									</p>
									<p class="lightText">Category: Stone, Art, Sculpting, Carving.</p>
									<p class="lightText">Location: Lagos Nigeria.</p>
									<div class="d-flex py-2 align-center">
										<v-avatar color="white" size="40" class=" "
											><v-img src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893046/umoja-backup2/Frame_481586_piaotu_fijtzh.png"></v-img
										></v-avatar>
										<p style="font-weight: 800; font-size: 16px" class="ml-2">The Golden Matrix</p>
									</div>
								</v-col>
								<v-col cols="3">
									<h1 class="text-right bigpriceClass">$150.00</h1>
								</v-col>
							</v-row>
							<div class="d-flex pt-2 pb-4 justify-space-between">
								<v-btn color="red" variant="tonal"
									><span class="smallBtn">Remove</span> <v-icon size="15" class="ml-1" icon="mdi mdi-close"></v-icon
								></v-btn>
								<div class="d-flex align-center">
									<v-btn flat color="orange" variant="tonal"><v-icon size="15" icon="mdi mdi-minus"></v-icon></v-btn>
									<p style="font-weight: 500; font-size: 16px; line-height: 20px; letter-spacing: 0.03em; color: #333333" class="mx-6">2</p>
									<v-btn flat class="green-hover" color="orange"><v-icon size="15" icon="mdi mdi-plus"></v-icon></v-btn>
								</div>
							</div>
							<v-divider v-if="i + 1 !== 3" class="my-2"></v-divider>
						</v-card>
					</v-sheet>
				</v-card>
			</v-card>
		</v-col>
		<v-col cols="12" lg="4">
			<v-card style="border-radius: 10px" flat class="pa-4">
				<div class="mb-3">
					<p style="font-weight: 800; font-size: 16px; line-height: 20px; text-transform: uppercase; color: #333333" class="mt-8 mb-6">
						cart summary
					</p>
					<v-divider></v-divider>
					<div class="d-flex py-3 align-center justify-space-between">
						<p style="font-weight: 700; font-size: 16px; line-height: 20px; color: #c20052">Subtotal</p>
						<p style="color: #c20052" class="bigpriceClass">$1,380.32</p>
					</div>
					<div class="d-flex">
						<v-icon icon="mdi mdi-circle-small" color="grey"></v-icon>
						<p class="textClass text-grey">Delivery fees not Included</p>
					</div>
					<div class="d-flex">
						<v-icon icon="mdi mdi-circle-small" color="grey"></v-icon>
						<p class="textClass text-grey">Every delivery is carried out by <span class="text-blue"> umoja logistics </span></p>
					</div>
				</div>
				<v-btn to="/order/checkout" flat block size="x-large" color="green"> Proceed to checkout</v-btn>
			</v-card>

			<v-img
				style="position: relative; border-radius: 10px"
				class="mt-6 pt-10 bg-grey-lighten-1 pa-6 rounded-lg"
				width="100%"
				min-height="600px"
				cover
				eager
				src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893064/umoja-backup2/Rectangle_465_sohqlg_m8vcnf.png"
				height="auto"
			>
				<div class=" ">
					<h1 style="font-size: 50.4px; line-height: 53px" class="mb-0 text-white font-weight-black">Nawi’s long scarf</h1>
					<p class="textClass mb-4 text-white">known to be used by the Nawi people</p>
					<div>
						<v-btn flat to="/vendor/profile" color="orange"><span class="smallBtn"> See product </span> </v-btn>
						<v-btn to="/user/login" flat variant="text" class="ml-2 text-white howit"
							><span style="text-decoration: underline">
								<span class="smallBtn"> Not now </span>
							</span>
						</v-btn>
					</div>
				</div>
				<div class="pa-6" style="position: absolute; bottom: 0; left: 0; width: 100%">
					<v-card
						style="
							background: rgba(0, 0, 0, 0.7);
							backdrop-filter: blur(25px);
							bottom: 0;
							/* Note: backdrop-filter has minimal browser support */

							border-radius: 20px;
						"
						class="d-flex align-center pa-4"
					>
						<v-avatar size="50" class="mr-4"
							><v-img class="bg-grey-lighten-2" src="https://res.cloudinary.com/dd26v0ffw/image/upload/v1718893046/umoja-backup2/Frame_481586_piaotu_fijtzh.png"></v-img
						></v-avatar>
						<p class="text-white">@nawi_the_skulptur_queen</p>
					</v-card>
				</div>
			</v-img>
		</v-col>
	</v-row>
</template>
