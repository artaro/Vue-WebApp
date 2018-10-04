// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Initialize Firebase
let app;
var config = {
  apiKey: "AIzaSyBjqnk6n21Ju6trRFMiZGcPOmt_oAmlACE",
  authDomain: "resume-dfb16.firebaseapp.com",
  databaseURL: "https://resume-dfb16.firebaseio.com",
  projectId: "resume-dfb16",
  storageBucket: "resume-dfb16.appspot.com",
  messagingSenderId: "430519981318"
};
firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(function(user){
  if (!app) {
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
