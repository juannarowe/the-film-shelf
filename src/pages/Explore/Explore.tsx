import { useState, useEffect, useRef } from 'react'
import { getMovies, searchMovies, searchMoviesbyGenre } from '../../services/TMDB'
import { Link } from 'react-router'
import type { Movie } from '../../types/movie'
import getImageUrl from '../../utils/getImageUrl'

export default function Explore() {
    const [movies, setMovies] = useState<Movie[]>([])

    // useRef for the search input (not useState, because we don't need to re-render on every keystroke)
    const searchRef = useRef<HTMLInputElement>(null)

    async function handleSearch() {
        // Why the "?": if searchRef.current is null (which can happen if the component is unmounted), we don't want to throw an error. Instead, we just use an empty string as the search term.
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
            <div className="flex flex-col sm:flex-row gap-4 mb-8 items-start sm:items-center">
                <div className="flex gap-2">
                    <input ref={searchRef} type="search" placeholder="Search" className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 focus:outline-none focus:border-white" />
                    <button onClick={handleSearch} className="cursor-pointer bg-white hover:bg-gray-200 text-gray-900 font-semibold px-4 py-2 rounded transition-colors">Search</button>
                </div>
                <div>
                    <select onChange={handleFilterByGenre} className="bg-gray-800 text-white border border-gray-700 rounded px-3 py-2 focus:outline-none">
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {movies.map(movie => (
                    <Link key={movie.id} to={`/film-detail/${movie.id}`} className="block hover:opacity-75 transition-opacity">
                        <img src={getImageUrl(movie.poster_path)} alt={movie.title} className="rounded-lg w-full object-cover" />
                    </Link>
                ))}
            </div>
        </>

    )
}