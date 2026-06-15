import { useState, useEffect } from 'react'
import getMovies from '../../services/TMDB'

interface Movie {
    id: number
    title: string
    genre: string
    overview: string
    poster_path: string
}

export default function Explore() {
    // First I create the state:
    const [movies, setMovies] = useState<Movie[]>([])

    // Then, call the function to get the movies. When the movies arrive, save them in the state.
    useEffect(() => {
        getMovies().then((data) => {
            console.log(data)
            setMovies(data)})
    }, [])

    // Finally, I can render the movies in the component. The map needs a key (movie ID). Alt for accessibility.
    return (
        <div>
            {movies.map(movie => (
                <div key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
            ))}
        </div>
        )
}