const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key="
const MOVIE_BASE_URL = "https://api.themoviedb.org/3/movie/"
const MOVIE_CREDITS_BASE_URL = "https://api.themoviedb.org/3/credit/"

export async function getMovies() {
    try {
        const response = await fetch(`${BASE_URL}${API_KEY}`)
        const data = await response.json()
        return data.results
    } catch (error) {
        throw new Error("Error fetching the list of movies.")
    }
}

export async function getMovieById(id: string) {
    try {
        const response = await fetch(`${MOVIE_BASE_URL}${id}?api_key=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error("Error fetching the movie details.")
    }
}

export async function getMovieCredits(id: string) {
    try {
        const response = await fetch(`${MOVIE_CREDITS_BASE_URL}${id}?api_key=${API_KEY}`)
        const data = await response.json()
        console.log(data)
        return data
    } catch (error) {
        throw new Error("Error fetching the movie credits.")
    }
}