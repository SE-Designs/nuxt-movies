<script setup lang="ts"></script>
<template>
  <footer>
    <div class="footer-wrapper">
      <h5>Nuxt Movies, 2025</h5>
      <div>
        <a class="anchor-tel" href="tel:518-363-2171">518-363-2171</a>
        <p>91 Park St. Fairhope, AL 36532</p>
      </div>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background-color: var(--primary-color);
}

.footer-wrapper {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 4px 12px;

  padding: 30px 48px;

  max-width: var(--max-width);
  margin: 0 auto;
}

.anchor-tel {
  font-size: 14px;

  text-decoration: underline;
}
</style>
