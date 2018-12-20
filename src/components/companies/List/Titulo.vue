<template>
    <div class="">
        <h2>Empresas cadastradas</h2>
        <router-link :to="{name: 'novaEmpresa'}">Criar nova</router-link>
    </div>
</template>
<script>
    export default {
        name: 'TituloListCompanies'
    }
</script>
