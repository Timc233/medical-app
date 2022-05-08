<script setup>
import PersonalCenter from "../components/PersonalCenter.vue";
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
</script>
<template>
  <NavBar/>
  <PersonalCenter mt-3rem id="display-content"/>

  
</template>

<style>
#display-content{
  position: absolute;
  height:100%
}

</style>
