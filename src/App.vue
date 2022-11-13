<template>
  <NavBar/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
  <FooterComp/>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import FooterComp from '@/components/FooterComp.vue'

export default {
  name: 'NavView',
  components: {
    NavBar,
    FooterComp
  }
}
</script>

