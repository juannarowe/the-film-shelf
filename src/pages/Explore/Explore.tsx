import { useState, useEffect } from 'react'
import getMovies from '../../services/TMDB'
import { Link } from 'react-router'

interface Movie {
    id: number
    title: string
    genre: string
    overview: string
    poster_path: string
}

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export default function Explore() {
    // First I create the state:
    const [movies, setMovies] = useState<Movie[]>([])

    // Then, call the function to get the movies. When the movies arrive, save them in the state.
    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data)})
    }, [])

    // Finally, I can render the movies in the component. The map needs a key (movie ID). Alt for accessibility.
    return (
        <div>
            {movies.map(movie => (
                <Link key={movie.id} to={`/film-detail/${movie.id}`}>
                    <img src={`${IMG_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                </Link>
            ))}
        </div>
        )
}