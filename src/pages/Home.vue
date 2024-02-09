<template>
  <div class="flex justify-center h-screen">
    <img src="../assets/home.png" class="object-cover" />
    <router-link to="/question">
      <button
        class="absolute top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 px-20 py-2 bg-[#f7c116] text-black font-extrabold rounded-3xl shadow-md border border-black md:px-15 md:py-2 xs:px-8 xs:py-1 xs:text-xs hover:bg-yellow-600 focus:outline-none"
      >
        เริ่มเลย
      </button>
    </router-link>
  </div>
</template>
