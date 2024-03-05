<script setup>
  import detailsService from '@/services/movie/detailsService'

  const props = defineProps(['id'])

  const movieDetails = await detailsService(props.id)

  const imgUrl = 'https://media.themoviedb.org/t/p/w220_and_h330_face/' + movieDetails.data.poster_path
</script>

<template>
  <div class="md:container mx-auto flex mt-10">
    <img :src="imgUrl" alt="Imagem do Filme">
    <div class="ml-10">
      <h2>{{ movieDetails.data.original_title }}</h2>
      <p>{{ movieDetails.data.release_date }}</p>
      <p>Sinopse: {{ movieDetails.data.overview }}</p>
    </div>
  </div>
</template>
