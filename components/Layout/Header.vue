<script setup lang="ts"></script>
<template>
  <header>
    <nav>
      <NuxtLink to="/">
        <h1>Nuxt Movies</h1>
      </NuxtLink>

      <a href="https://github.com/se-designs">
        <!--  -->
      </a>
    </nav>
  </header>
</template>
<style scoped>
header {
  position: fixed;

  left: 0;
  top: 0;
  right: 0;

  z-index: 10;

  height: 100px;

  background-color: var(--primary-color);
}

nav {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 4px 12px;

  max-width: var(--max-width);
  margin: 0 auto;

  padding: 30px 48px;
}
</style>
