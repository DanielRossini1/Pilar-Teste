import { describe, it, expect } from 'vitest'

import { mount, RouterLinkStub } from '@vue/test-utils'
import MovieDetails from '../MovieDetails.vue';

describe('MoviesList', () => {
  it('renders with correct props', async () => {
    const wrapper = mount(MovieDetails, {
      props: {
        movie: movieData,
      },
    });
  });
});