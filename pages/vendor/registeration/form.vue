<template>
    <div style="position:relative;background-color: #F8F8F8; min-height: 100vh;">

        <regHeader />
        <div style="position: absolute;left: 24px; bottom: 22px;"
            class="d-flex pt-12 mt-12 justify-space-between align-center">
            <v-avatar class="" @click="$router.push('/')" size="135" style="height:auto!important" rounded="0">

                <v-img eager src="https://res.cloudinary.com/dkbt6at26/image/upload/v1684229324/Frame_4_emeelq.png"></v-img>
            </v-avatar>

        </div>
        <v-row>
            <v-col cols="12" style="max-width: 400px;" class="pb-0" sm="3">
                <v-card class="rounded-0 pa-4 pt-12" flat color="#F6F7F9" min>
                    <v-timeline density="compact" side="end" truncate-line="start">
                        <v-timeline-item v-for="item in items" :key="item.id" style="cursor: pointer;"
                            @click="formSect = window = item.id"
                            :dot-color="item.id == formSect ? '#00966D' : 'grey-lighten-2'" size="x-small">
                            <p style="font-weight: 500;
    font-size: 16px;" :class="item.id == formSect ? 'text-black' : 'text-grey'">{{ item.id + '. ' + item.name }}</p>
                        </v-timeline-item>
                    </v-timeline>
                </v-card>

            </v-col>
            <v-col cols="12" class="pb-0" sm="9">
                <v-card min-height="100vh" height="100%" class=" pa-4 py-8" flat color="#fff" min>

                    <v-window v-model="window">
                        <v-window-item :value="1">
                            <tellus />
                        </v-window-item>
                        <v-window-item :value="2">
                            <Ownerinfo />
                        </v-window-item>
                        <v-window-item :value="3">
                            <Documentation />
                        </v-window-item>
                        <v-window-item :value="4">
                            <Reviewsubmit />
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>

    </div>
</template>
<style>
.v-timeline--vertical .v-timeline-item:last-child .v-timeline-divider__after {
    display: none;
}
</style>
<script>
export default {
    data() {
        return {
            window: "1",
            formSect: 1,
            items: [
                {
                    id: 1,
                    name: "Companys Information"
                },
                {
                    id: 2,
                    name: "Ownership Information"
                },
                {
                    id: 3,
                    name: "Business Documentation"
                },
                {
                    id: 4,
                    name: "Review and Submit"
                },
            ],
        };
    },
}
</script>