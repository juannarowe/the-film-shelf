import { useState, useEffect, useRef } from 'react'
import { getMovies } from '../../services/TMDB'
import { Link } from 'react-router'

export interface Movie {
    id: number;
    title: string;
    genre_ids: number[];
    overview: string;
    poster_path: string;
    release_date: string;
    original_title: string;
    original_language: string;
    vote_average: number;
}

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export default function Explore() {
    const [movies, setMovies] = useState<Movie[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('')

    const searchRef = useRef<HTMLInputElement>(null)

    function handleSearch() {
        const term = searchRef.current?.value.toLowerCase() || ''
        setSearchTerm(term)
    }

    useEffect(() => {
        getMovies().then((data) => {
            setMovies(data)
        })
    }, [])

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(searchTerm)
    )

    return (
        <>
            <div>
                <div>
                    <input ref={searchRef} type="search" placeholder="Search" />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>
            <div>
                {filteredMovies.map(movie => (
                    <Link key={movie.id} to={`/film-detail/${movie.id}`}>
                        <img src={`${IMG_BASE_URL}${movie.poster_path}`} alt={movie.title} />
                    </Link>
                ))}
            </div>
        </>

    )
}