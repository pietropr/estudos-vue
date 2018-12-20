<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/master/Header'
export default {
  name: 'App',
  components: {Header}
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  .container-vue {
    margin-top: 70px;
  }
}
</style>
