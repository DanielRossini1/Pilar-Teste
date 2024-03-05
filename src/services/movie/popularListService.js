import tmdbClient from "@/config/tmdb-client";

const popularListService = async () => {
  try {
    const response = await tmdbClient.get('/discovser/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc');
    if (response.status !== 200) {
      console.log(response)
      // throw new Error(response.status_message)
    }
    return response;
  } catch (error) {
    return error;
  }
}

export default popularListService;