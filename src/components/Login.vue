<template>
    <div id="login">
        <h1>Login</h1>
        <input name="username" v-model="input.email" placeholder="Username" type="email" />
        <input type="password" name="password" v-model="input.password" placeholder="Password" />
        <input type="password" name="c_password" v-model="input.c_password" placeholder="Password" />
        <button type="button" v-on:click="login()">Login</button>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
      name: 'login-component',
      data() {
        return {
          errors: [],
          input: {
            email: "",
            password: "",
            c_password: ""
          }
        }
      },
      methods: {
        login() {
            console.log('ok');
            axios.post('http://localhost:8000/api/login', {
              email: this.input.email,
              password: this.input.password,
              c_password: this.input.c_password
            })
              .then(res => {
                if(res.data.success.token)  {
                    console.log(res);
                    console.log('Login realizado com sucesso!');
                    sessionStorage.setItem('usuario', JSON.stringify(res.data.success));
                    this.$router.push('/');
                }
                else {
                  console.log('Erros de validação')
                }
              })
              .catch(err => {
                console.log(err);
              })
        }
      }
    }
</script>
