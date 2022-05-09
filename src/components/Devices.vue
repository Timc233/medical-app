<script setup>
import {ref} from 'vue'

const devices = ref([
  {name:"Thermometer", model:"001A", maker:"Thermo Maker", measurement:"Temperature", unit:"°C", status:"Being used"},
  {name:"Weight", model:"05B", maker:"Infinity Weight Co.", measurement:"Weight", unit:"lb", status:"Idle"},
  {name:"Blood Pressure Monitor", model:"055", maker:"Wide Pres Ltd.", measurement:"Blood Pressure", unit:"mmHg", status:"In maintenance"},
])


</script>



<template>
<div>
  <div mx-10rem mt-10rem>
      <h1>You have {{devices.length}} devices registered</h1>
  </div>
  <div flex="~ wrap" my-10 mx-auto px-30 pt-5>
    <div v-for="item in devices" w-120 h-60 m-4 rd-5 bg-rose-200 p-3>
      <h2>
        {{ item.name }}
        </h2>
      <p>Model: {{item.model}}</p>
      <p>Maker: {{item.maker}}</p>
      <p>Measurement: {{item.measurement}} {{item.unit}}</p>
      <p>Status: {{item.status}}</p>
    </div>
  </div>
</div>
  
</template>
