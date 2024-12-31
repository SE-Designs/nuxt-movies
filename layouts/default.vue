<script setup lang="ts"></script>
<template>
  <div class="default-layout">
    <LayoutHeader />
    <main>
      <transition name="fade" mode="out-in">
        <NuxtPage />
      </transition>
    </main>
    <LayoutFooter />
  </div>
</template>
<style scoped>
.default-layout {
  background-color: var(--foreground-color);
}

main {
  min-height: calc(100vh - 100px);
  max-width: var(--max-width);
  margin: 100px auto 0;

  background-color: inherit;

  padding: 36px 48px;
}
.fade-enter-active {
  animation: fadeIn 0.4s forwards;
}

.fade-leave-active {
  animation: fadeOut 0.4s forwards;
}

@keyframes fadeIn {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  60% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}

@keyframes fadeOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  60% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(0.95);
    opacity: 0;
  }
}
</style>
