<template>
  <div class="hola">
    <h1>Hola</h1>
    <input type="text" name="login" v-model="login" placeholder="login"> <br>
    <input type="password" name="password" v-model="password" placeholder="password"> <br>
    <button @click="registering">add</button>
  </div>
</template>

<script>
import Auth from '../services//AuthenticationService'
export default {
  data () {
    return {
      login: this.login,
      password: this.password
    }
  },
  methods: {
    async registering () {
      const responce = await Auth.register({
        login: this.login,
        password: this.password
      })
      console.log(responce.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
