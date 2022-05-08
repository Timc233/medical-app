<script setup>
import {ref} from 'vue'
import { useRouter } from "vue-router";

const router = useRouter();
const portals = ref([
  { name: "Chat", path: "chat" },
  { name: "Measurements", path: "measurements" },
  { name: "Appointment", path: "appointments" },
  { name: "Devices", path: "device" },
  { name: "Personal Center", path: "personalCenter" },
  { name: "Place Holder", path: "Place Holder" },
]);

function jump(path) {
  router.push({ name: path });
}
</script>
<template>
<div  
    flex="~ row"
    border-r-1
    justify-center
    bg-sky
    class="Wrapper">
    <button
    v-for="item in portals"
    b-0
    mx-2
    bg-sky
    color-stone-100
    hover:bg-sky-3
    hover:cursor-pointer
    hover:color-white
    ease-in duration-200
    @click="jump(item.path)"
    >
    {{item.name}}
    </button>
</div>
</template>

<style>
.Wrapper{
    position: fixed;
    top: 0;
    width: 100%;
    height:3rem;
    /* background-color: #81d6e3; */
}
/* button{
    background-color: #81d6e3;
}
button:hover{
    background-color: #81d6e3;
} */
</style>