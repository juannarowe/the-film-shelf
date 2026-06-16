const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE_URL = "https://api.themoviedb.org/3/discover/movie?api_key="

export default async function getMovies() {
    try {
        const response = await fetch(`${BASE_URL}${API_KEY}`)
        const data = await response.json()
        return data.results
    } catch(err) {
        throw new Error("Error fetching the data.")
    }   
    }

