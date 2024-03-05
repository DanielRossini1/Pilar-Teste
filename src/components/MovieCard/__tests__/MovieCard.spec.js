import { describe, it, expect } from 'vitest'

import { mount, RouterLinkStub } from '@vue/test-utils'
import MovieCard from '../MovieCard.vue'

describe('MovieCard', () => {
  const movieData = {
    id: 123,
    title: 'Example Movie',
    poster_path: 'eLXRCSKXAo9831a9Bw22TdZSnzL.jpg',
  };

  const wrapper = mount(MovieCard, {
    props: {
      movie: movieData,
    },
  });
 
  it('renders with correct props', async () => {
    const titleElement = wrapper.text()
    expect(titleElement).toContain('Example Movie')

    const imgElement = wrapper.find('img')
    expect(imgElement.element.src).toContain(`https://media.themoviedb.org/t/p/w220_and_h330_face/${movieData.poster_path}`)
  });
});