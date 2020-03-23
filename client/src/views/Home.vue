<template>
  <div>
    <Navbar />
    <Countries />
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import Countries from '../components/Countries.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    Countries
  }
}
</script>

<style>

</style>