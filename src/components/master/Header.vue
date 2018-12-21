<template>
    <header v-if="(this.$store.state.logado)">
        <div class="container">
            <ul class="nav">
                <li class="nav-item">
                    <router-link class="nav-link active" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/companies">Companies</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="#">Jobs</router-link>
                </li>
                <li v-if="this.usuario" class="nav-link">Bem vindo <span class="text-capitalize">{{this.$store.getters.getUsuario}}</span></li>
                <li v-if="this.usuario" v-on:click="sair" class="nav-link">Sair</li>
            </ul>
        </div>

    </header>

</template>

<script>
export default {

  name: 'Header',
  data() {
    return {
      usuario: this.$store.state.usuario,
      logado: []
    }
  },

  methods: {
    sair() {
      sessionStorage.removeItem('usuario');
      this.$store.state.usuario = [];
      this.$store.commit('reseta');
      sessionStorage.clear();
      localStorage.removeItem('app');
      this.$router.push('/login')
    }
  }
}
</script>
