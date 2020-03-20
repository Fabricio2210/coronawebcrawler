<template>
    <div>
        <h2 class="text-center">Últimas Notícias {{Date.now()| moment("DD/MM/YYYY")}}</h2>
        <ul class="list-group">
            <li v-for="data in arrayNoticias" class="list-group-item">{{data}}</li>
        </ul>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
      arrayNoticias: null,
    }
  },
  methods:{
    getDataPaises(){
      axios.get('/noticias')
      .then((data)=>{
        this.arrayNoticias = data.data.data
        console.log(this.arrayNoticias)
      })
    }
  },
  mounted(){
    this.getDataPaises()
  }
}
</script>
