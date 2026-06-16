import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getMovieById } from "../../services/TMDB"
import type { Movie } from "../../types/movie"

export default function FilmDetail() {
    const { id } = useParams<{ id: string }>()

    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        if (id) {
            getMovieById(id).then(data => setMovie(data))
        }
    }, [id])

    if (!movie) return <p>Loading...</p>

    const { poster_path, overview, release_date, original_title, original_language, title, vote_average } = movie

    return (
        <div className="">
            <h1>{title}</h1>
            <p>Discover more about a movie here!</p>
        </div>
    )
}   