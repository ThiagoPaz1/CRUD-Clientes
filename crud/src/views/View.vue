<script>
  import Home from '../components/Home.vue';
  export default {
    components: {
      Home,
    }
  }
</script>

<template>
  <main>
    <div>
      <Home />
    </div>
    <router-view />
  </main>  
</template>