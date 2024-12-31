<script setup lang="ts">
import { api } from "~/api/const";
import type { IDetailedMovie } from "~/types/app.types";

const movie = ref<IDetailedMovie | null>(null);
const loading = ref(true);
const error = ref<Error | null>(null);

const route = useRoute();
const movieId = route.params.id as string;

onMounted(async () => {
  try {
    // for dynamic usage - use movieId
    const response = await fetch(`${api}/card.json`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    if (data) {
      movie.value = data;
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
    <div class="details-grid" v-else-if="movie">
      <aside>
        <h2>{{ movie.name }}</h2>
        <img :src="movie.poster" :alt="movie.name" />
        <div class="tags">
          <div class="tag" :class="getRatingClass(movie.rating)">
            <Icon name="ph:star-bold" />
            <span>{{ movie.rating.toFixed(2) }}</span>
          </div>
          <div class="tag blue-tag">
            <Icon name="ph:film-strip-bold" />
            <span>{{ movie.genre }}</span>
          </div>
          <div class="tag purple-tag">
            <Icon name="ph:clock-bold" />
            <span>{{ movie.duration }}</span>
          </div>
        </div>
      </aside>
      <article>
        <h3>Description</h3>
        <p>{{ movie.description }}</p>
        <h3>Trivia</h3>
        <ul>
          <li v-for="item in movie.trivia">{{ item }}</li>
        </ul>
        <h3>Actors</h3>
        <ul>
          <li v-for="actor in movie.actors">
            <a
              :href="`https://www.imdb.com/name/${actor.imdb_id}`"
              target="_blank"
              >{{ actor.name }}</a
            >
          </li>
        </ul>
      </article>
    </div>
    <div v-else>
      <p>Nothing was found, try later</p>
    </div>
  </section>
</template>
<style scoped>
.details-grid {
  display: flex;
  flex-flow: column;
  gap: 32px 64px;
  position: relative;
}

aside {
  position: relative;
  grid-column: 1;
  flex: 1 0 180px;
  max-width: 240px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

article {
  grid-column: 2;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

img {
  min-width: 220px;
  width: 100%;
  height: 340px;
  object-fit: cover;
  border-radius: var(--alt-radius);
}

@media (min-width: 768px) {
  .details-grid {
    display: grid;

    grid-template-columns: 240px 3fr;
  }

  aside {
    position: sticky;
    top: 136px;
    left: 48px;
  }
}
</style>
