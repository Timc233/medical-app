<script setup>
import { ref, reactive, computed } from "vue";
import axios from 'axios'
const isMP = ref(false);
const isMale = ref(true);

function roleClick(event) {
  if (event.target.id == "role-patient") {
    isMP.value = false
    user.role = "patients"
  } else {
    isMP.value = true
    user.role = "doctor"
  }
}

function genderClick(event) {
  if (event.target.id == "male") {
    isMale.value = true;
    user.gender = "male"
  } else {
    isMale.value = false;
    user.gender = "female"
  }
}

// const name = ref("")
// const email = ref("")
// const password = ref("")
// const passwordConfirm = ref("")

const user = reactive({
  name:"",
  role:"",
  gender:"",
  email:"",
  password:"",
  passwordConfirm:""
})



function signup(){


}

// const errorMessage = ref("")
const errorMessage = computed(() => {
  return user.password === user.passwordConfirm ? "" : "Make sure you confirmed your password" 
})

</script>

<template>
  <div class="wrapper">
    <h1 class="portal-title">Create your account</h1>
    <div class="input-fields">
      <p>Select your role</p>
      <div id="role-button-wrapper">
        <button
          id="role-patient"
          class="role-button"
          @click="roleClick"
          :class="isMP ? 'role-button' : 'role-button-clicked'"
          :style="{ cursor: 'pointer' }"
        >
          Patient
        </button>
        <button
          id="role-MP"
          class="role-button"
          @click="roleClick"
          :class="isMP ? 'role-button-clicked' : 'role-button'"
          :style="{ cursor: 'pointer' }"
        >
          Medical Professional
        </button>
      </div>

      <p>Biological Gender</p>
      <div id="gender-button-wrapper">
        <button
          id="male"
          class="role-button"
          @click="genderClick"
          :class="isMale ? 'role-button-clicked' : 'role-button'"
          :style="{ cursor: 'pointer' }"
        >
          Male
        </button>
        <button
          id="female"
          class="role-button"
          @click="genderClick"
          :class="isMale ? 'role-button' : 'role-button-clicked'"
          :style="{ cursor: 'pointer' }"
        >
          Female
        </button>
      </div>

      <input placeholder="Name" v-model="user.name"/>
      <hr class="line-separator" />
      <input text="Email" placeholder="Email" id="email-text" v-model="user.email"/>
      <hr class="line-separator" />
      <input text="Password" placeholder="Password" id="password-text" v-model="user.password" />
      <hr class="line-separator" />
      <input placeholder="Confirm" v-model="user.passwordConfirm"/>
      <hr class="line-separator" />
      <p color-rose-600>{{errorMessage}}</p>
      <button id="signup-button" cursor-pointer @click="signup">Sign up</button>
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

body {
  background: rgb(93, 171, 255);
  background: radial-gradient(
    circle,
    rgba(93, 171, 255, 1) 0%,
    rgba(255, 255, 255, 1) 55%
  );

  /* background-color: rgba(255, 255, 255, .15);   */
  /* backdrop-filter: blur(25px); */
}

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

#role-button-wrapper,
#gender-button-wrapper {
  display: flex;
  justify-content: space-evenly;
}

.role-button {
  max-width: 8 rem;
  width: 8rem;
  height: 2rem;
  border: 0px;
  border-radius: 10px;
  transition: 0.2s;
}

.role-button:hover {
  background-color: #c1c1c1;
}

.role-button:focus {
  background-color: #fe621d;
  color: #ffffff;
}

.role-button-clicked {
  background-color: #fe621d;
  color: #ffffff;
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

#signup-button {
  margin: 2rem auto;
  width: 20.5rem;
  height: 2rem;
  background-color: #007aff;
  color: #ffffff;
  border-radius: 10px;
  /* border-style: solid; */
  border:0;
  transition: 0.2s;
}

#signup-button:hover {
  background-color: #1b66ca;
}

#signup-button:active {
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
