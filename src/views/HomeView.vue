<template>
  <HelloWorld />
</template>

<script>
import { defineComponent } from 'vue';

// Components
import HelloWorld from '../components/page/HelloWorld.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
  },
});
</script>
