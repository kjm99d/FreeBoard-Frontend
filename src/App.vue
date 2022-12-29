<template>
  <v-app>
    <SideBar/>

    <v-main>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img :src="logo" class="my-3" contain height="200" />
        </v-col>
      </v-row>

      <v-row class="text-center">
        <v-col cols="12">
              <RouterButton link="/" title="Home" />
              <RouterButton link="/about" title="About" />
        </v-col>
      </v-row>  
      
      
      <RouterView />


    </v-main>
  </v-app>
</template>

<script>

import { RouterView } from 'vue-router';
import logo from './assets/logo.svg'
import RouterButton from './components/block/RouterButton.vue';
import SideBar from './components/SideBar.vue'

export default {
  name: 'App',

  components: {
    RouterView,
    RouterButton,
    SideBar,
  },

  data: () => ({
    logo,
  }),
}
</script>
