<template>
  <div class="home">
      <b-row align-v="center">
        <b-col>
          <div>
            <b-img
              src="/img/login.svg"
              fluid
              alt="Responsive image"
            ></b-img>
          </div>
        </b-col>

        <b-col>
          <b-form @submit.prevent="onSubmit">
            <b-form-group>
              <b-form-input placeholder="username" v-model="username"/>
            </b-form-group>

            <b-form-group>
              <b-form-input placeholder="password" v-model="password"/>
            </b-form-group>
            <b-button variant="primary" type="submit">Login</b-button>
          </b-form>
        </b-col>
      </b-row>
  </div>
</template>

<script>
import axios from 'axios'
const server = 'http://localhost:3000'
export default {
  name: "Login",
  components: {},
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit() {
      const obj = {
        username: this.username,
        password: this.password
      }
      const { data } = await axios.post(`${server}/login`, obj)
      localStorage.setItem('token', data.token)
      this.$router.push('/countries')
    }
  }
};
</script>
