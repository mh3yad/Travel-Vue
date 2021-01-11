<template>

  <div id="app">
  <div class="wrapper">
  <b-navbar toggleable="lg" type="light"  variant="info" style="background-color: #ffffff !important;position:sticky;top:0">
    <b-navbar-brand  class="home"  ><h1><router-link to="/">MH3YAD</router-link></h1></b-navbar-brand>
     <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
         <b-navbar-nav>
           <b-nav-item>
                <router-link to="/">
                              Home
                </router-link> 
           </b-nav-item>
         
              <b-nav-item class="active" v-for="destination in destinations" :key="destination.name">
              <router-link :to="{name:'Destination',params:{slug:destination.slug}}">
                              {{destination.name}}
              </router-link> 
             
              </b-nav-item>
              <b-nav-item>
                    <router-link to="/user">
                                  Dashboard
                    </router-link> 
              </b-nav-item>
        </b-navbar-nav>     
      </b-collapse>      
  </b-navbar>
   
  
  </div>  
       <transition name="slide" mode="out-in">
          <router-view :key="this.$route.path"/>
       </transition>
    
  </div>
</template>

<script>
import store from '@/store'

export default {
  data(){
    return {
      
      destinations:store.destinations
    }
  },methods: {
    hasHistory () { return window.history.length > 2 }
    }
}
</script>

<style lang="scss">

    h1,h2,h3,p{
      font-weight: bold !important;
    }
    .btn2{
      width: 100%;
      color: white !important;
      padding: 10px;
      background:#2f9c7e !important;
      border-radius: 10px;
      border: 2px solid #2f9c7e !important;
      margin: 10px 0;
    }
    .input2{
      width: 100%;
      border: 2px solid red;
      padding: 10px;
    }
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-weight: bold !important;
}

.slide-enter-active,.slide.leave.active{
    transition: opacity  3s;transform: 1s;
}

.slide-enter,.slide-leave-to{
  opacity: 0;
  transform: translateX(-30deg);
}


.wrapper {
  position: sticky;
  top: 0;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #fdfdfd;
    padding: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
    
  }.logo{
    float: left;
    margin-right: 20px;
  }.home:hover{
    text-decoration: none;
  }.home:hover{
    color: rgb(255, 255, 255) !important;
  }

  li{
       float: left;
       display: inline;
       list-style: none;
    }ul{
      list-style: none;
    }.bg-info {
    background-color: #ffffff !important;
    }
  }

  

</style>
