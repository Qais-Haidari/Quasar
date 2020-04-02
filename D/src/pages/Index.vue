<template>
  <q-page class="flex flex-center">
    <img src="./img/RoshanLogoWhite.svg" />
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PageIndex',
  computed: {
    ...mapGetters(['text'])
  }
}
</script>
<style>
body {
  background-color: red;
}
img {
  width: 400px;
}
</style>
