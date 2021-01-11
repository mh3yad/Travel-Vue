<template>
   <div>
         <p class="back" @click="$router.back()"><- back</a>

        <h1>{{destination.name}}</h1>
        <div class="data">
             <img :src="require(`@/assets/${destination.image}`)" :alt="destination.name">
             <p>{{destination.description}}</p>
        </div>
        <div class="experiences" id="experience">
            <h2>Top experiences in {{destination.name}}</h2>
            <div class="cards">
                <div v-for="experience in destination.experiences" :key="experience.name">
                    
                        
                         <router-link class="exp" :to="{name:'expDetails',params: { exp:experience.slug },hash:'#experience'}">
                              <img :src="require(`@/assets/${experience.image}`)"  alt="experience.name">
                               <span class="ex-name">{{experience.name}}</span>
                         </router-link>     
                     
                </div>
            </div>
        </div>
       <router-view  :key="this.$route.path"/>
      
   </div>
</template>

<script>
import store from '@/store'
export default {
    data(){
        return{
            // destinationSlug:this.$route.params.slug
        }
    },props:{
        slug:{
            
        },exp:{

        }
    },
    computed:{
        destination(){
            return store.destinations.find(
                destination => destination.slug == this.slug
            )
        },
        experience(){
            return this.destination.experiences.find(
                experience => experience.slug == this.exp
            )
        }
       
    }
}
</script>

<style  scoped>
.back{
     position: fixed;
    top: 82px;
    left: 7px;
    text-align: right;
    display: abs;
    padding: 7px;
    margin: 11px;
    clear: both;
    color: #ffffff;
    background: #a5a5a5;
    cursor: pointer;
    border-radius: 5px;
}.back a:hover{
    text-decoration: none;
}
  .data{
      display: flex;
      justify-content: center;
     
      margin-bottom: 60px;
   
  }img{
     
      
      margin: 0 15px;
  }p{
        overflow: hidden;
        vertical-align: top;
        font-size: 16px;
        line-height: 28px;
        text-align: left;
  }.cards{
      display: flex;
      justify-content: space-between;
       padding: 40px 0;
  }.exp{
      position: relative;
  }.ex-name{
      position: absolute;
      top: 50%;
      left: 30%;
      font-size: 20px;
      text-align: center;
      color: white;
  }.cards img{
      width: 90%;
      margin:0   5px;
  }
</style>