<script setup>
import { reactive } from 'vue'

const portals = reactive(["Chat", "Measurements", "Appointments", "Devices", "Personal Center", "Place Holder"])

function jump(event){
    console.log(event.target.textContent)
}

</script>


<template >
<!-- <h1>Test</h1> -->
<div 
    flex="~ wrap"  
    justify-center 
    m-auto py-20 px-80
    min-w-150
    >
    <button
    v-for="i in portals"
    m-20
    w-50 h-50
    min-w-50
    rd-5
    @click="jump"
    >
    {{i}}
    </button>
</div>
</template>

<style>



</style>