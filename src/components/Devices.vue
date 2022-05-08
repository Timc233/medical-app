<script setup></script>

<template>
<div>
  <h1>Device component</h1>
  <div flex="~ wrap" my-10 mx-auto px-30 pt-5>
    <div v-for="i in 100" flex="~ row" w-120 h-40 m-4 rd-5 bg-red>
      <h2>{{ i }}</h2>
    </div>
  </div>
</div>
  
</template>
