<script setup>
import Dashboard from "@/components/Dashboard.vue";
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <main>
    <div flex="~">
    <SideBar id="side-bar"/>
    <Dashboard ml-10rem/>
  </div>
  </main>
</template>

<style>
#side-bar{
  position:absolute;
  height:100%;
  width:10rem;
}

</style>