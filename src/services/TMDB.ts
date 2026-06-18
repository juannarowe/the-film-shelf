const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key="
const MOVIE_BASE_URL = "https://api.themoviedb.org/3/movie/"
const SEARCH_BASE_URL = "https://api.themoviedb.org/3/search/movie?api_key="

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
        const response = await fetch(`${MOVIE_BASE_URL}${id}/credits?api_key=${API_KEY}`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error("Error fetching the movie credits.")
    }
}

export async function searchMovies(query: string) {
    try {
        const response = await fetch(`${SEARCH_BASE_URL}${API_KEY}&query=${encodeURIComponent(query)}`)
        const data = await response.json()
        return data.results
    } catch (error) {
        throw new Error("Error searching the movie.")
    }
}

export async function searchMoviesbyGenre(genreId: number) {
    try {
        const response = await fetch(`${BASE_URL}${API_KEY}&with_genres=${genreId}`)
        const data = await response.json()
        return data.results
    } catch (error) {
        throw new Error("Error searching the movie by genre.")
    }
}