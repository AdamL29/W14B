<template>
    <div>
        <h1>Welcome, Please Sign In</h1>
        <router-link to="/game" @click="goGame">Game</router-link>
        <div>
            <input type="email">
            <input type="password">
            <button @click="goGame">Submit</button>
        </div>
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
                url : 'https://reqres.in/api/login',
                method: "POST",
                data: {
                    email : 'test@gmail.com',
                    password : 'testing'
                }
                }).then((response)=>{
                    cookies.set(response.value);
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