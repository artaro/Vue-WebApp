<template>
    <div class="sign-up">
        <h3>Sign up a new account</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signUp">Sign Up</button>
        <span><router-link to="/"> Got an account ? Sign in here !</router-link></span>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'signUp',
    data: function() {
        return{
            email: '',
            password: ''
        }
    },
    methods: {
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                    this.$router.replace('hello')
                },
                (err) => {
                    alert('Oops.' + err.message)
                }

            );
        }
    }
}
</script>

<style scoped>
.sign-up{
    margin-top: 50px;
    border: 3px solid #f1f1f1 ;
    border-width: 20%;
}
input{
    margin: 5px;
    padding: 8px;
    width: 20%;
}
button{
    margin-top: 10px;
    width: 10%;
    cursor: pointer;
    padding: 5px;
}
span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}

</style>

