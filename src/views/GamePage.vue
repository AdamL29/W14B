<template>
    <div>
        <ScoreBoard/>
        <div class="enemy">
            <img src="https://media1.giphy.com/media/QA10cVOAjFyicXMoiO/giphy_s.gif?cid=6c09b952eb0c696f039ed3a5e3a71dd9848afb2c35a23e13&rid=giphy_s.gif&ct=s" 
            alt="Gary the snail">
        </div>
        <div class="user">
            <img :src="imgSrc" 
            alt="Serious Spongebob">
        </div>
        <div>
            <button @click="choiceRock">ROCK</button>
            <button @click="choicePaper">PAPER</button>
            <button @click="choiceScissors">SCISSORS</button>
        </div>
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
import ScoreBoard from '@/components/ScoreBoard.vue';
    export default {
        name: "GamePage",
        components: {
            ScoreBoard
        },
        data() {
            return {
                imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/Squidward_Tentacles.svg/640px-Squidward_Tentacles.svg.png"
            }
        },
        methods: {
            choiceRock() {
                this.imgSrc = "https://b.fssta.com/uploads/application/wwe/headshots/dwayne-the-rock-johnson.png";
                console.log('Rock');
            },
            choicePaper(){
                this.imgSrc = "https://logos-world.net/wp-content/uploads/2022/02/Dunder-Mifflin-Emblem.png"
                console.log('Paper');
            },
            choiceScissors(){
                this.imgSrc ="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Scissors.svg/2560px-Scissors.svg.png"
                console.log('Scissors');
            }
        },
    }
</script>

<style scoped>
.enemy{
    position: relative;
    left: 150px;
}
.user{
    position: relative;
    right: 100px;
}
img{
    height: 30vh;
    width: 55vw;
}
</style>