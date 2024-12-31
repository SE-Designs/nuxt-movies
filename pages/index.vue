<script setup lang="ts">
import { api } from "~/api/const";
import type { IMovie } from "~/types/app.types";

const movies = ref<IMovie[]>([]);
const loading = ref(true);
const error = ref<Error | null>();

onMounted(async () => {
  try {
    const response = await fetch(`${api}/cards.json`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    if (data && Array.isArray(data.items)) {
      movies.value = data.items;
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (err) {
    error.value =
      err instanceof Error ? err : new Error("Unknown error occurred");
  } finally {
    loading.value = false;
  }
});
</script>
<template>
  <section>
    <div v-if="loading">
      <p>Loading</p>
    </div>
    <div v-else-if="error">
      <p>{{ error.name }}: {{ error.message }}</p>
    </div>
    <div class="card-grid" v-else-if="movies">
      <HomeCard v-for="movie in movies" :key="movie.id" :movie="movie" />
    </div>
    <div v-else>
      <p>Nothing was found, try later</p>
    </div>
  </section>
</template>
<style scoped>
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 16px;
}
</style>
