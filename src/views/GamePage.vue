<template>
    <div>
        <h1>Game Test</h1>
        <ScoreBoard/>
        <div>
            <img src="" alt="">
        </div>
        <div>
            <img src="" alt="">
        </div>
        <div>
            <button>ROCK</button>
            <button>PAPER</button>
            <button>SCISSORS</button>
        </div>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
import ScoreBoard from '@/components/ScoreBoard.vue';
    export default {
        name: "GamePage",
        components: ScoreBoard
    }
</script>

<style scoped>

</style>