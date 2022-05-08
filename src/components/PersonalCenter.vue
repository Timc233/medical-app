<script setup>
import {ref} from "vue"
const name = ref("Name Mockup")
const gender = ref("Gender Mockup")
const email = ref("Email Mockup")
const role = ref("Role Mockup")

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
