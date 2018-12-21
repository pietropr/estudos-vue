<template>
  <div class="container container-vue">
    <h1>{{this.$store.state.usuario}}</h1>
  </div>
</template>

<script>
  import Header from './Header'
  export default {
    name: 'Home',
    components: {Header},
    data () {
      return {
        msg: 'Bem vindo',
        msg2: this.$store.state.usuario

      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
