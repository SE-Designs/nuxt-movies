<script setup lang="ts">
import type { IMovie } from "~/types/app.types";

const { movie } = defineProps<{
  movie: IMovie;
}>();
</script>
<template>
  <div class="card-wrapper">
    <NuxtLink class="card" :to="`/movie/${movie.id}`">
      <img class="card__img" v-if="movie.poster" :src="movie.poster" alt="" />
      <!-- FALLBACK IF NEEDED -->
      <img
        v-else
        src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        alt=""
      />

      <div class="card__text">
        <h2 class="card__title">{{ movie.name }}</h2>
        <p class="card__description">{{ movie.description }}</p>
      </div>

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
    </NuxtLink>
  </div>
</template>
<style scoped>
.card-wrapper {
  border-radius: var(--main-radius);
  background-color: var(--purple-tag-color);
}

.card {
  display: flex;
  flex-direction: column;
  gap: 12px;

  padding: 12px;
  background-color: var(--primary-color);
  border-radius: var(--main-radius);

  transition: all 0.2s;
}

.card:hover {
  transform: translate(-12px, -12px);
}

.card__img {
  width: 100%;
  height: 172px;

  object-fit: cover;

  border-radius: var(--alt-radius);
}

.card__text {
}

.card__title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
}

.card__description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
