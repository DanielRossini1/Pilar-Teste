<script setup>
  import MovieCard from '@/components/MovieCard/MovieCard.vue';
  const props = defineProps(['service', 'title'])

  let serviceResponse

  try {
    serviceResponse = await props.service();
  } catch (error) {
    throw error
  }
</script>

<template>
  <div class="xl:container mx-auto mb-3">
    <p class="text-2xl font-extrabold">{{ title }}</p>
  </div>
  <div class="xl:container mx-auto">
    <div class="flex flex-wrap flex-row gap-8">
      <div v-for="movie in serviceResponse.data.results">
        <MovieCard :movie="movie" />
      </div>
    </div>
  </div>
</template>
