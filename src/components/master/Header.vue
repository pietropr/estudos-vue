<template>
    <header v-if="usuario">
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
                <li v-if="usuario" class="nav-link">Bem vindo</li>
                <li v-if="usuario" v-on:click="sair" class="nav-link">Sair</li>
            </ul>
        </div>

    </header>

</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      usuario: '',
    }
  },
  created() {
    let usuario = sessionStorage.getItem('usuario');
    if(usuario) {
      this.usuario = JSON.parse(usuario);
    }
  },
  mounted() {
    // axios.post('http://localhost:8000/api/details', )
  },
  methods: {
    sair() {
      sessionStorage.removeItem('usuario');
      this.usuario = false;
      this.$router.push('/login')
    }
  }
}
</script>
