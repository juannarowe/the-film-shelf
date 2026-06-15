const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export default async function getMovies() {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
        const data = await response.json()
        return data
    } catch(err) {
        throw new Error("Error fetching the data.")
    }   
    }

