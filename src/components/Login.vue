
<template>
    <div class="login">
        
        <h3> Sign In</h3>
        <input type="text" v-model="email" placeholder="Email"><br>
        <input type="password" v-model="password" placeholder="Password"><br>
        <button v-on:click="signIn">Connect</button>
        <p><router-link to="/sign-up"> Sign Up New Account</router-link></p>
    </div>
</template>

<script>
import firebase from 'firebase'

export default {
    name: 'login',
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        signIn: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
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
.login{
    margin-top: 50px;
    border: 3px solid #f1f1f1 ;
    border-width: 20%
    
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
p{
    margin-top: 20px;
    font-size: 13px;
    text-decoration: underline;
    cursor: pointer;
}
</style>
