<script setup>
import {ref} from "vue"
const name = ref("Bob")
const gender = ref("Male")
const email = ref("bob@gmail.com")
const role = ref("Patient")

</script>


<template>
<div>
  <div id="Wrapper" m-10>
    <h1>Personal Center</h1>
    <h2>Full name: {{name}}</h2>
    <h2>Gender: {{gender}}</h2>
    <h2>Email: {{email}}</h2>
    <h2>Role: {{role}}</h2>
  </div>
</div>
  
  
</template>
