<template>
  <div id="app">
    <Header />
    <transition name="fade">
        <router-view/>
    </transition>

  </div>
</template>

<script>
import Header from './components/master/Header'
export default {
  name: 'App',
  components: {Header},
  beforeCreate() {
    let login = sessionStorage.getItem('token');
    if(!login) {
      return this.$router.push('/login');
    }
  }
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
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .30s;
}

.fade-enter-active {
  transition-delay: .30s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
