<script setup>
  import MovieDetails from '@/components/MovieDetails/MovieDetails.vue'
  import LoadingSpinner from '@/components/LoadingSpinner/LoadingSpinner.vue'
  import { useRoute } from 'vue-router'
  import { ref, onErrorCaptured } from 'vue';

  const route = useRoute()

  const error = ref(null);
  onErrorCaptured((err) => {
    error.value = err
  });
</script>

<template>
  <p v-if="error">error!</p>
  <Suspense v-else>
    <template #default>
      <MovieDetails :id="route.params.id" />
    </template>
    <template #fallback>
      <div class="h-screen w-screen flex justify-center items-center">
        <LoadingSpinner />
      </div>
    </template>
  </Suspense>
</template>