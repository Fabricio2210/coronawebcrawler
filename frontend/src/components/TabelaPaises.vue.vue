<template>
  <div>
    <br>
     <a class="btn btn-primary btn-lg btn-block colorBtn" href="http://192.168.99.100/Corona_Lista.xlsx" role="button">Baixar Planilha</a>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Países</th>
          <th scope="col">Casos Totais</th>
          <th scope="col">Novos Casos</th>
          <th scope="col">Total Mortes</th>
          <th scope="col">Novas Mortes</th>
          <th scope="col">Recuperados</th>
          <th scope="col">Casos Ativos</th>
          <th scope="col">Casos Críticos</th>
          <th scope="col">Casos por Milhão</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in arrayTabelaPaises">
          <td>{{data.pais}}</td>
          <td>{{data.casototais}}</td>
          <td>{{data.novosCasos}}</td>
          <td>{{data.totalMortes}}</td>
          <td>{{data.novasMortes}}</td>
          <td>{{data.recuperados}}</td>
          <td>{{data.casosAtivos}}</td>
          <td>{{data.casosCriticos}}</td>
           <td>{{data.casosPorUmMilhao}}</td>
        </tr>
      </tbody>
</table>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      arrayTabelaPaises: null,
    }
  },
  methods:{
    getDataPaises(){
      axios.get('/paises')
      .then((data)=>{
        this.arrayTabelaPaises = data.data.data
      })
    }
  },
  mounted(){
    this.getDataPaises()
  }
}
</script>
<style scoped>
    .colorBtn{
        background-color: #8b0000 !important;
    }
</style>
