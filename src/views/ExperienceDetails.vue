<template>
<div id="experience">


     <h2>{{experience.name}}</h2>
        <div class="data">
             <img :src="require(`@/assets/${experience.image}`)" :alt="experience.name">
             <p>{{experience.description}}</p>
        </div>
</div>
 
</template>

<script>
import store from '@/store'
export default {
    props:{
        slug:{

        },
        exp:{

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

  .data{
      padding: 40px 0;
      display: flex;
      justify-content: center;
   
  }img{
     
    
      margin: 0 15px;
  }p{
        overflow: hidden;
        vertical-align: top;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        line-height: 28px;
        text-align: left;
        font-weight: bold;
  }.cards{
      display: flex;
      justify-content: space-between;
  }.exp{
      position: relative;
  }.ex-name{
      position: absolute;
      top: 50%;
      left: 9%;
      font-size: 20px;
      text-align: center;
      color: white;
  }.cards img{
      width: 90%;
      margin:0   5px;
  }
</style>