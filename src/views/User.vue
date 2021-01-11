<template>
    <div class="div">
           <h1>Welcome {{user}}</h1>
           <button class="btn2" @click="logOut">Logout</button>
    </div>
</template>

<script>
import store from "@/store.js"
export default {
    
    data(){
        return {
            user:store.user
        }
    },
    methods:{
        logOut(){
            store.user = null
            this.$router.push("/")
        }
    },
    
}
</script>

<style  scoped>
    .div{
        max-width: 400px;
        margin: 10px auto;
    }
</style>