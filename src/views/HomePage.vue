<template>
    <div>
        <h1>Home Test</h1>
        <router-link to="/game" @click="goGame">Game</router-link>
        
    </div>
</template>

<script>
import axios from 'axios';
import cookies from 'vue-cookies';
import router from '@/router';

    export default {
        name: "HomePage",
        methods: {
            goGame() {
                axios.request({
                url : 'https://reqres.in/',
                method: "GET" 
                }).then((response)=>{
                    cookies.set(response);
                    router.push('/game');
                }).catch((error)=>{
                    console.log(error);
                });
            }
        }
    }
</script>

<style scoped>
/* Log In Info
{
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}
 */
</style>