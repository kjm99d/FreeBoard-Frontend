<template>
    <RouterLink :to="this.link">
        <v-btn rounded color="primary" dark>{{ title }}</v-btn>
    </RouterLink>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "RouteButton",
    components: {
        RouterLink
    },
    props: {
        link: {
            type: String,
            default: "abc"
        },
        title: {
            type: String,
            default: "abc"
        }
    }
}
</script>