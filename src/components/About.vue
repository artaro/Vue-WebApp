<template>
<div class="about">
    <b-jumbotron header="Student Cards">

        <div>
            <b-btn v-b-toggle.collapse1 variant="primary">Show Member</b-btn>
            <b-collapse id="collapse1" class="mt-2">
                <b-card>
                    <div class="d-flex justify-content-center align-items-center">
                        <b-card-group rows>
                            <b-card title="นฤนาฏ คุณาธรรม" img-src="https://i.imgur.com/7Nwfzp2.jpg" img-alt="Image" 
                            img-top tag="article" style="max-width: 20rem;" class="mb-2">
                                <p class="card-text">
                                    5835512010<br>

                                </p>
                                    <b-button href="https://www.facebook.com/narunart.kunatham" variant="primary">Facebook</b-button>
                            </b-card>
                            <b-card title="อนงค์นาท ไฝขาว" img-src="https://i.imgur.com/pM9DUSD.jpg" img-alt="Image" 
                            img-top tag="article" style="max-width: 20rem;" class="mb-2">
                                <p class="card-text">
                                    5835512036
                                </p>
                                <b-button href="https://www.facebook.com/gramma.nano" variant="primary">Facebook</b-button>
                            </b-card>
                            <b-card title="ทศพล ใจดี" img-src="https://i.imgur.com/ORrtv4N.jpg" img-alt="Image" 
                            img-top tag="article" style="max-width: 20rem;" class="mb-2">
                                <p class="card-text">
                                    5835512103
                                </p>
                                <b-button href="https://www.facebook.com/j.tossapol" variant="primary">Facebook</b-button>
                            </b-card>
                        </b-card-group>
                    </div>
                </b-card>
            </b-collapse>

        </div>
    </b-jumbotron>
    <b-button v-on:click="logout" variant="warning">Logout</b-button>

</div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'about',
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
