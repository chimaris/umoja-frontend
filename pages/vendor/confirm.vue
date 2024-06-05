<template>
	<beta-test />
	<div class="authBg">
		<authHeader />
		<div class="d-flex justify-center py-12 px-2">
			<v-card color="transparent" flat class="pa-12 text-center rounded-lg" width="100%" max-width="582px">
				<v-img eager class="mx-auto mb-6" src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229325/Frame_o0hnea.png" width="195"></v-img>
				<h1
					style="
						font-style: normal;
						font-weight: 600;
						font-size: 36px;
						line-height: 44px;
						text-align: center;
						letter-spacing: -0.02em;

						/* base/black */

						color: #0f0c22;
					"
				>
					Almost done. Confirm your email.
				</h1>
				<p
					class="my-6"
					style="
						font-style: normal;
						font-weight: 500;
						font-size: 16px;
						line-height: 24px;
						/* or 150% */

						text-align: center;

						/* Grey/600 */

						color: #596066;
					"
				>
					We’ve sent a verification link to your email address. Click on the link to verify your email address. If you didn’t get the email, check
					your spam folder or resend the link.
				</p>
				<v-btn to="/vendor/setpass" width="295" color="green" flat size="x-large" class="rounded-lg">
					<span style="text-transform: none"> Check your email </span>
				</v-btn>
			</v-card>
		</div>
	</div>
</template>
