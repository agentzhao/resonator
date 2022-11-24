<template>
  <div
    class="grid fixed bottom-1 grid-cols-3 justify-items-center py-10 w-full md:w-1/3"
  >
    <!-- <button class="py-2 px-2 my-10 mx-auto bg-white rounded-md text-zinc-800"> -->
    <!--   <router-link to="/">Back</router-link> -->
    <!-- </button> -->
    <button class="px-5 bg-white rounded-md" @click="this.$router.go(-1)">
      <font-awesome-icon
        class="h-5 text-zinc-800 icons"
        icon="fa-solid fa-angle-left"
      />
    </button>
    <button class="px-5 bg-white rounded-md" @click="this.$router.push('/')">
      <font-awesome-icon
        class="h-5 text-zinc-800 icons"
        icon="fa-solid fa-house"
      />
    </button>
    <button class="px-5 bg-white rounded-md" @click="this.$router.go(-1)">
      <font-awesome-icon
        class="h-5 text-zinc-800 icons"
        icon="fa-solid fa-angle-right"
      />
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
