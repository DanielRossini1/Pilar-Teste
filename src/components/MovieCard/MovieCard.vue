<script setup>
  import { RouterView } from 'vue-router'

  const props = defineProps(['movie']);

  const imgUrl = 'https://media.themoviedb.org/t/p/w220_and_h330_face/' + props.movie.poster_path

  const detailsLink = '/details/' + props.movie.id
</script>

<template>
  <RouterLink :to="detailsLink">
    <div class="w-44">
      <img class="rounded-lg w-44" :src="imgUrl">
      <p>{{ props.movie.title }}</p>
    </div>
  </RouterLink>
</template>