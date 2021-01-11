<template>
    <div  class="login">
        <h1> Login</h1>
        <h1></h1>
        <div  class="form">
            <label class="label2"  for="username">Username</label>
            <input class="input2" v-model="username"  name="username">
            <br>
            <label class="label2" for="password">Password</label>
            <input class="input2"  v-model="password"  type="password">
            <br>
        <button class="btn2" @click="login"> Log In</button>
        </div>
    </div>
</template>

<script>
import store from "@/store.js"
export default {
    data(){
        return {
            username:null,
            password:null
        }
    },
    methods:{
        login(){
            store.user = this.username
            let red = this.$route.query.redirect || "/"
            this.$router.push(red)
        }
    }
}
</script>

<style scoped>
    .login{
        display: flex;
        flex-direction: column;
        max-width: 400px;
        margin:  auto;
    }.label2{
        margin: 15px 0 0 0   !important;
    }
</style>