
<template>
  <div id="app">
    <nav>
      <router-link to="/chercheurs">Chercheurs</router-link>
      <router-link to="/projets">Projets</router-link>
      <router-link to="/publications">Publications</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

nav {
  display: flex;
  justify-content: space-around;
  background-color: #f8f9fa;
  padding: 1rem;
}

nav a {
  text-decoration: none;
  color: #007bff;
}

nav a:hover {
  text-decoration: underline;
}
</style>
