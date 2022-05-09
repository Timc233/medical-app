<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const portals = ref([
  { name: "Chat", path: "chat" },
  { name: "Measurement", path: "measurements" },
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
  <div flex="~ wrap" justify-start mx-auto>
    <button
      v-for="item in portals"
      rd-5
      m-15
      h-50
      w-50
      text-xl
      hover:cursor-pointer
      hover:bg-stone-300
      ease-in-out duration-200
      @click="jump(item.path)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style></style>
