<template>
    <v-navigation-drawer class="deep-purple accent-4" dark permanent>
        <v-list>
            <v-list-item :to="item.url" v-for="item in items" :key="item.title" link>
                
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title style="display: inline;">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                
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
export default {
    name: "SideBar",
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard', url: "/" },
                { title: 'SampleView', icon: 'mdi-account-box', url: "/about"},
            ],
        }
    },
    methods: {
        OnLocation(event) {
            //:to="item.url"
            this.$router.push("/about")
        }
    }
}
</script>
