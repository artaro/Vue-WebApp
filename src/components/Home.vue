<template>
<div class="home">
    <b-jumbotron header="Student Cards">

        <div>

            <b-card>
                <div class="d-flex justify-content-center align-items-center">
                    <b-card-group rows>
                        <div>
                            <h3>ยินดีต้อนรับเข้าสู่เว็บ Student Cards</h3><br>
                            <p>เป็นรูปแบบการแสดงผลชื่อนักเรียนในรูปของ Card</p><br>
                            <span>Example: </span>

                            <b-card title="อนงค์นาท ไฝขาว" img-src="https://i.imgur.com/pM9DUSD.jpg" img-alt="Image" 
                            img-top tag="article" style="width: 30" class="mb-2">
                                <p class="card-text">
                                    5835512036
                                </p>
                                <b-button href="https://www.facebook.com/gramma.nano" variant="primary">Facebook</b-button>
                            </b-card>
                        </div>
                    </b-card-group>
                </div>
            </b-card>

        </div>
        <b-button v-on:click="logout" variant="warning">Logout</b-button>
    </b-jumbotron>

    
</div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'Home',
    methods: {
        logout: function () {
            firebase.auth().signOut().then(() => {
                this.$router.replace('login')
            })
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

button {

    margin-top: 10px;
    width: 10%;
    cursor: pointer;
    padding: 5px;

}
</style>
