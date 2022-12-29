<template>
    <v-navigation-drawer class="deep-purple accent-4" dark permanent>
        <v-list>
            <v-list-item v-for="item in items" :key="item.title" link>
                <RouterLink :to="item.url">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </RouterLink>
            </v-list-item>
        </v-list>

        <template v-slot:append>
            <div class="pa-2">
                <v-btn block>
                    Logout
                </v-btn>
            </div>
        </template>
    </v-navigation-drawer>

</template>

<script>

import { RouterLink } from 'vue-router';

export default {
    name: "SideBar",
    components: {
        RouterLink
    },
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard', url: "/" },
                { title: 'SampleView', icon: 'mdi-account-box', url: "/about"},
            ],
        }
    },
}
</script>
