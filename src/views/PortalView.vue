<script setup>
import Portal from "@/components/Portal.vue";
import SideBar from "../components/SideBar.vue";
</script>

<template>
  <main>
    <Portal />
  </main>
  


</template>

<style>
main {
  position: fixed;
  width: 100%;
  height: 100%;
  /* background: rgb(93, 171, 255); */
  background: radial-gradient(
    circle,
    rgba(93, 171, 255, 1) 0%,
    rgba(255, 255, 255, 1) 55%
  );
}

</style>
