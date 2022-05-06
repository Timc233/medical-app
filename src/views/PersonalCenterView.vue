<script setup>
import PersonalCenter from "../components/PersonalCenter.vue";
import SideBar from "../components/SideBar.vue";
</script>
<template>
  <div flex="~">
    <SideBar id="side-bar"/>
    <PersonalCenter ml-15rem id="display-content"/>
  </div>
  
</template>

<style>
#side-bar{
  position: absolute;
  width: 15rem;
  height:100%
}

#display-content{
  position: absolute;
  height:100%
}

</style>
