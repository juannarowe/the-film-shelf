import { useState, useEffect } from 'react'
import { getMovies } from '../../services/TMDB'
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
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data)})
    }, [])

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