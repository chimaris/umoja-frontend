<template>
    <div>
        <p 
            style="color: #000;
            font-size: 20px;
            font-weight: 600;" class="pa-5">Notifications</p>
            <v-divider></v-divider>
<div class="pa-5 pt-8">
<v-row>
    <v-col cols="12" lg="3">
        <p style="color:#333;
font-size: 20px;
font-weight: 600;">Email Notification</p>
    <p style="color:#969696;
font-size: 14px;
font-weight: 500;
">Substance can send you email
notifications for any new direct
messages</p>
    </v-col>
    <v-col cols="12" lg="9">
        <div>
            <v-switch :model-value="true"  color="green" inset>  <template v-slot:label>
      <span style="color: #333;
font-size: 14px;
font-weight: 500;
">On</span></template></v-switch>
            <v-checkbox :model-value="true"  color="green" inset>  <template v-slot:label>
                <div>

                    <p style="color: #000!important;
font-size: 14px;
font-weight: 500;
">News and update settings</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">The latest news about the latest features and software update settings</p>

</div>
</template>
</v-checkbox>
            <v-checkbox color="green" inset>  <template v-slot:label>
                <div>

                    <p style="color: #000!important;
font-size: 14px;
font-weight: 500;
">Tips and Tutorials</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">Tips and tricks in order to increase your performance efficiency</p>

</div>
</template>
</v-checkbox>
            <v-checkbox :model-value="true" color="green" inset>  <template v-slot:label>
                <div>

                    <p style="color: #000!important;
font-size: 14px;
font-weight: 500;
">Offer and Promotions</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">Promotions about software package prices and about the latest discounts</p>

</div>
</template>
</v-checkbox>
        </div>
    </v-col>
</v-row>
            <v-divider></v-divider>
<div class="pa-5 pt-8">
<v-row>
    <v-col cols="12" lg="3">
        <p style="color:#333;
font-size: 20px;
font-weight: 600;">More Activity</p>
    <p style="color:#969696;
font-size: 14px;
font-weight: 500;
">Substance can send you email
notifications for any new direct
messages</p>
    </v-col>
    <v-col cols="12" lg="9">
        <div>
            <v-switch :model-value="true"  color="green" inset>  <template v-slot:label>
      <span style="color: #333;
font-size: 14px;
font-weight: 500;
">On</span></template></v-switch>
            <v-checkbox :model-value="false"  color="green" inset>  <template v-slot:label>
                <div>

                    <p style="color: #000!important;
font-size: 14px;
font-weight: 500;
">All Reminders & Activity</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">Notify me all system activities and reminders that have been created</p>

</div>
</template>
</v-checkbox>
            <v-checkbox color="green" inset>  <template v-slot:label>
                <div>

                    <p style="color: #000!important;
font-size: 14px;
font-weight: 500;
">Activity only</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">Only notify me we have the latest activity updates about increasing or
decreasing data</p>

</div>
</template>
</v-checkbox>
            <v-checkbox :model-value="true" color="green" inset>  <template v-slot:label>
                <div>

                    <p style="color: #000!important;
font-size: 14px;
font-weight: 500;
">Important Reminders Only</p>
<p style="color: var(--carbon-3, #969696);
font-size: 14px;
font-weight: 500;">Only notify me all the reminders that have been made</p>

</div>
</template>
</v-checkbox>
        </div>
    </v-col>
</v-row>
</div>
</div>
           
    </div>
</template>