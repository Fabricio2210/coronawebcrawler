<template>
  <div class="container">
    <div class="row">
      <div class="col py-2">
        <NavBar />
      </div>
    </div>
    <TabelaPaises />
    <ListaNoticias />
  </div>
</template>

<script>
import TabelaPaises from './components/TabelaPaises.vue'
import ListaNoticias from './components/ListaNoticias.vue'
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    TabelaPaises,
    NavBar,
    ListaNoticias
  }
}
</script>

<style>

</style>
