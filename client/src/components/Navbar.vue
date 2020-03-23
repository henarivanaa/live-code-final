<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-button @click="onReportList" size="sm" class="my-2 my-sm-0 ml-3" type="button"
              >Report</b-button>

          <b-button @click="logout" size="sm" class="my-2 my-sm-0 ml-3" type="button"
              >Logout</b-button>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    },

    onReportList () {
      this.$router.push('/reports')
    }
  }
};
</script>

<style></style>
