import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getMovieById, getMovieCredits } from "../../services/TMDB"
import type { Movie } from "../../types/movie"

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export default function FilmDetail() {
    const { id } = useParams<{ id: string }>()

    const [movie, setMovie] = useState<Movie | null>(null)
    const [credits, setCredits] = useState<any | null>(null)

    useEffect(() => {
        if (id) {
            Promise.all([
                getMovieById(id),
                getMovieCredits(id)
            ]).then(([movieData, creditsData]) => {
                setMovie(movieData)
                setCredits(creditsData)
            })
        }
    }, [id])

    if (!movie) return <p>Loading...</p>

    const { poster_path, overview, release_date, original_title, original_language, title, vote_average } = movie

    return (
        <div className="">
            <img src={`${IMG_BASE_URL}${poster_path}`} alt={`Poster of ${title}`} />
            <h1>{title}</h1>
            <h2>{`Original title: ${original_title}.`}</h2>
            <h3>{`Release data: ${release_date}`}</h3>
            <p>{overview}</p>
        </div>
    )
}   