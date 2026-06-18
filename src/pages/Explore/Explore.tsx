import { useState, useEffect, useRef } from 'react'
import { getMovies, searchMovies } from '../../services/TMDB'
import { Link } from 'react-router'
import type { Movie } from '../../types/movie'

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export default function Explore() {
    const [movies, setMovies] = useState<Movie[]>([])

    const searchRef = useRef<HTMLInputElement>(null)

    async function handleSearch() {
        const term = searchRef.current?.value || ''
        if (term.trim() === '') {
            const data = await getMovies()
            setMovies(data)
            return
        }
        const data = await searchMovies(term)
        setMovies(data)
    }

    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data)
        })
    }, [])

    return (
        <>
            <div>
                <div>
                    <input ref={searchRef} type="search" placeholder="Search" />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div>
                {movies.map(movie => (
                    <Link key={movie.id} to={`/film-detail/${movie.id}`}>
                        <img src={`${IMG_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                    </Link>
                ))}
            </div>
        </>

    )
}