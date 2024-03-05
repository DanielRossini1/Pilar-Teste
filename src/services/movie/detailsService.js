import tmdbClient from "@/config/tmdb-client"

const detailsService = async (id) => {
  try {
    const response = await tmdbClient.get('/movie/' + id)
    return response
  } catch (error) {
    return error
  }
}

export default detailsService;