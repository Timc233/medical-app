<script setup>
import Chat from "../components/Chat.vue";
import SideBar from "../components/SideBar.vue";
import NavBar from "../components/NavBar.vue";
</script>

<template>
<div flex>
  <NavBar/>
  <Chat mt-3rem class="content-section"/>
</div>
  
</template>
<style>
.content-section{
  margin-left: 10rem;
}

.bar-section{
  position:absolute;
  height:100%;
  width:10rem;
}
</style>
