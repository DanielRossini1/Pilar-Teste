<script setup>
  import MoviesList from '@/components/MoviesList/MoviesList.vue';
  import popularListService from '@/services/movie/popularListService';
  import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner.vue'

  import { ref, onErrorCaptured } from 'vue';

  const error = ref(null);
  onErrorCaptured((err) => {
    console.log(err)
    error.value = err
  });
</script>

<template>
  <p v-if="error">An error has occurred: {{ error.value }}</p>
  <Suspense v-else>
    <template #default>
      <MoviesList :service="popularListService" title="Os Mais Populares"/>
    </template>
    <template #fallback>
      <div class="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    </template>
  </Suspense>
</template>
