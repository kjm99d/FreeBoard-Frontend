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


        <v-list>
            <v-list-item v-for="item  in categoryItem" :key="item" link>
                
                <!--
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                -->
                    <v-list-item-content>
                        <v-list-item-title style="display: inline;">{{ item }}</v-list-item-title>
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
import axios from 'axios';

export default {
    name: "SideBar",
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard', url: "/" },
                { title: 'SampleView', icon: 'mdi-account-box', url: "/about"},
            ],
            categoryItem: [],
        }
    },
    created() {
        axios.get("http://localhost:8080/api/category/list")
            .then((res) => {
                this.categoryItem = res.data;
                console.log(this.categoryItem)
            })
            .catch((err) => {
                console.log(error);
            })
    },
    methods: {
        OnLocation(event) {
            //:to="item.url"
            this.$router.push("/about")
        }
    }
}
</script>
