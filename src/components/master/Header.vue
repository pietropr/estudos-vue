<template>
    <header>
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
            </ul>
        </div>

    </header>

</template>

<script>
export default {
  name: 'Header'
}
</script>
