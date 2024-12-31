<script setup lang="ts"></script>
<template>
  <div class="default-layout">
    <LayoutHeader />
    <main>
      <NuxtPage />
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
</style>
