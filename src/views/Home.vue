<template>
  <div class="home">       
      <div class="setter">
        <h1 style="margin-bottom:70px">All  Destinations</h1>
        <h1>{{this.$route.query.name}}</h1>
          <b-row class="flex">
                <div v-for="destination in destinations" :key="destination.name">
                    <b-col>
                      <router-link :to="{name:'Destination',params:{slug:destination.slug}}">
                          <h2>{{destination.name}}</h2>
                      </router-link>
                      <figure>
                        <router-link :to="{name:'Destination',params:{slug:destination.slug}}">
                            <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
                        </router-link>  
                      </figure>
                  </b-col>
                </div>
          </b-row>  
      </div>
  </div>
</template>

<script>
import store from '@/store.js'

export default {
  name: 'Home',
  data(){
    return {
      destinations:store.destinations,
    }
  }
}
</script>

<style  scoped>
  img{
    max-width: 150px;
  }
 .flex{
   
   justify-content: space-between;
  }.setter{
    margin: 40px 90px;
  }
  
</style>