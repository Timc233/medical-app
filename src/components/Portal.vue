<script setup>
import { inject, ref, onMounted, queuePostFlushCb } from "vue"
import { useRouter } from "vue-router";
import {userUrl} from '@/assets/properties.js'
import {useCookies} from 'vue3-cookies'
import qs from 'qs'
import axios from 'axios'

const router = useRouter();
const email = ref("")
const password = ref("")
const errorMessage = ref("")
const {cookies} = useCookies()

function signup() {
  router.push({ name: "signup" });
}

function signin() {
  
  axios(
    {
      url:userUrl + '?' + qs.stringify({
        email:email.value,
        password:password.value
      })
    }
  ).then(
    // if(){

    // }else{

    // }
    // (res) => {
    //   console.log(res.data)
    //   cookies.set('email', res.data.email)
    //   cookies.set('password', res.data.password)
    // }
    (res) =>{
      cookies.set('email', res.data.email)
      cookies.set('password', res.data.password)
      router.push({ name: "home" });      
    }
  ).catch(error => {
    console.log({
      headers:error.response.headers,
      status:error.response.status,
      data:error.response.data
    })
    errorMessage.value = "Wrong email or password. Try angain."
  })

}
</script>

<template>
  <div class="wrapper">
    <h1 class="portal-title">Medical System</h1>
    <div class="input-fields">
      <input text="Email" placeholder="Email" id="email-text" v-model="email" />
      <hr class="line-separator" />
      <input text="Password" placeholder="Password" id="password-text" v-model="password"/>
      <hr class="line-separator" />
      <!-- <a text="Forgot password?" id="forgot-password"></a> -->
      <button id="signin-button" @click="signin" cursor-pointer>
        Sign in
      </button>
      <button @click="router.push({ name: 'home' })" 
      h-3rem
      border-0
      rounded-xl
      hover:cursor-pointer
      hover:bg-stone-3
          ease-in-out duration-200
      >
        Dev Login
      </button>
      <p color-rose-600>{{errorMessage}}</p>
      <p id="no-account">
        Don't have an account?
        <span>
          <a @click="signup" id="create-account" cursor-pointer
            >Create Account</a>
        </span>
      </p>
    </div>
    <footer></footer>
  </div>
</template>

<style>
@font-face {
  font-family: "Alef";
  font-weight: 400;
  src: local("Alef"), url("src/assets/fonts/Alef-Regular.ttf");
}

/* body{
    background: rgb(93,171,255);
    background: radial-gradient(circle, rgba(93,171,255,1) 0%, rgba(255,255,255,1) 55%);
  } */

h1,
a,
p,
#signin-button,
input {
  font-family: "Alef";
}

.wrapper {
  margin: 12% auto;
  padding: 20px;
  border-radius: 30px;
  width: max-content;
  background-color: #ffffff;
}

.portal-title {
  margin: 3rem 0;
  width: 100%;
  text-align: center;
}

.input-fields {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 0 auto;
  max-width: 20rem;
  /* margin-top: 5rem; */
}

input {
  width: 20rem;
  height: 1.5rem;
  margin: 0.5rem 0 0 0;
  border: 0;
  padding: 0.5rem;
}

input:focus {
  outline: none;
}

.line-separator {
  border: 1px solid #bbb;
  width: 20rem;
  margin: 0;
}

#signin-button {
  margin: 2rem auto;
  width: 20.5rem;
  height: 2rem;
  background-color: #007aff;
  color: #ffffff;
  border-radius: 10px;
  /* border-style: solid; */
  border: 0;
  transition: 0.2s;
}

#signin-button:hover {
  background-color: #1b66ca;
}

#signin-button:active {
  background-color: #1d539c;
}

#forgot-password {
  color: #007aff;
  text-align: end;
  margin: 1rem 0;
}

#no-account {
  color: #8a8a8e;
}

#create-account {
  color: #007aff;
  transition: 0.2s;
}

#create-account:hover {
  color: #064384;
}

#create-account:active {
  color: #000f1f;
}
</style>
