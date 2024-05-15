<template>
	<v-card>
		<v-card-title class="headline text-wrap">Privacy Policy</v-card-title>
		<v-card-subtitle class="mb-3">Effective Date: 01.05.2024</v-card-subtitle>

		<v-card-text>
			<p>
				Umoja GmbH ("Umoja," "we," "us," or "our") is committed to protecting the privacy of our users, including vendors and customers. This Privacy
				Policy outlines the types of information we collect, how we use and protect that information, and your choices regarding the collection and
				use of your information.
			</p>

			<h2>Information We Collect</h2>
			<p>We may collect personal information from vendors and customers when they interact with our platform, including but not limited to:</p>
			<ul>
				<li>
					<strong>For Vendors:</strong>
					<ul>
						<li>
							Personal information provided during the registration process, such as name, email address, business information, and contact details.
						</li>
						<li>Financial information, such as bank account details, for payment processing purposes.</li>
						<li>Product information and images uploaded to the platform.</li>
					</ul>
				</li>
				<li>
					<strong>For Customers:</strong>
					<ul>
						<li>Personal information provided during the registration process, such as name, email address, and contact details.</li>
						<li>Transactional information, such as purchase history and shipping details.</li>
						<li>Information collected automatically when using our platform, such as IP address, device information, and browsing activity.</li>
					</ul>
				</li>
			</ul>

			<h2>How We Use Your Information</h2>
			<p>We may use the information we collect for various purposes, including but not limited to:</p>
			<ul>
				<li>Providing and improving our platform, products, and services.</li>
				<li>Facilitating transactions between vendors and customers.</li>
				<li>Personalizing user experience and delivering relevant content and advertisements.</li>
				<li>Communicating with users about their accounts, transactions, and updates to our platform.</li>
				<li>Analyzing user behavior and trends to understand how our platform is used and to improve user experience.</li>
			</ul>

			<h2>Information Sharing</h2>
			<p>We may share user information with third parties for the following purposes:</p>
			<ul>
				<li>
					<strong>Service Providers:</strong> We may share information with third-party service providers who assist us in operating our platform,
					conducting business activities, or providing services on our behalf.
				</li>
				<li>
					<strong>Business Transactions:</strong> In the event of a merger, acquisition, or sale of assets, user information may be transferred as
					part of the transaction.
				</li>
				<li>
					<strong>Legal Compliance:</strong> We may disclose information to comply with applicable laws, regulations, legal processes, or governmental
					requests.
				</li>
			</ul>

			<h2>Data Security</h2>
			<p>
				We implement reasonable security measures to protect user information from unauthorized access, disclosure, alteration, or destruction.
				However, no method of transmission over the internet or electronic storage is completely secure.
			</p>

			<h2>Your Choices</h2>
			<p>
				Users may choose not to provide certain personal information, but this may limit their ability to access certain features of our platform.
				Users can also opt-out of receiving promotional communications from us by following the instructions provided in those communications.
			</p>

			<h2>Changes to this Privacy Policy</h2>
			<p>
				We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify users of any
				material changes by posting the updated Privacy Policy on our platform or by other means.
			</p>

			<h2>Contact Us</h2>
			<p>
				If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at
				<a href="mailto:office@umoja-africa.com">office@umoja-africa.com</a>.
			</p>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>

			<v-btn text="Disagree" variant="text" @click="closeDialog"></v-btn>
			<v-btn color="surface-variant" text="Agree" variant="flat" @click="closeDialog"></v-btn>
		</v-card-actions>
	</v-card>
</template>

<script setup>
import { defineEmits } from "vue";

const emits = defineEmits(["closePrivacyVisible"]);

const closeDialog = () => {
	emits("closePrivacyVisible");
};
</script>
