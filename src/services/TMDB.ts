const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key="
const MOVIE_BASE_URL = "https://api.themoviedb.org/3/movie/"

export async function getMovies() {
    try {
        const response = await fetch(`${BASE_URL}${API_KEY}`)
        const data = await response.json()
        return data.results
    } catch (err) {
        throw new Error("Error fetching the data.")
    }
}

export async function getMovieById(id: string) {
    try {
        const response = await fetch(`${MOVIE_BASE_URL}${id}?api_key=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (err) {
        throw new Error("Error fetching the data.")
    }
}