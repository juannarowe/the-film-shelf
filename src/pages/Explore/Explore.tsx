import { useState, useEffect, useRef } from 'react'
import { getMovies, searchMovies, searchMoviesbyGenre } from '../../services/TMDB'
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

    async function handleFilterByGenre(event: any) {
        const genreId = Number(event.target.value)
        if (genreId === 0) {
            const data = await getMovies()
            setMovies(data)
            return
        }
        const data = await searchMoviesbyGenre(Number(event.target.value))
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
                <div>
                    <select onChange={handleFilterByGenre}>
                        <option value="">All Genres</option>
                        <option value="28">Action</option>
                        <option value="35">Comedy</option>
                        <option value="18">Drama</option>
                        <option value="27">Horror</option>
                        <option value="878">Science Fiction</option>
                        <option value="53">Thriller</option>
                    </select>
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