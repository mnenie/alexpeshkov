<template>
  <div class="realtive">
    <div class="w-72 h-72 overflow-hidden bg-white rounded-full wrapper_profile">
      <NuxtImg class="w-80 h-80 object-cover" src="/models/me-main.png" />
    </div>
  </div>
</template>

<style scoped>
.wrapper_profile{
  box-shadow: 0 20px 5px 5px rgba(0, 220, 130, 0.2);
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
}

@keyframes animate {
  0%{
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  50%{
    border-radius:  60% 40% 30% 70%/60% 30% 70% 40%;
  }
  100%{
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
}
</style>
