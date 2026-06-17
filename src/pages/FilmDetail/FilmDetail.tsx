import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getMovieById, getMovieCredits } from "../../services/TMDB"
import type { Movie, Credits } from "../../types/movie"

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500'

export default function FilmDetail() {
    const { id } = useParams<{ id: string }>()

    const [movie, setMovie] = useState<Movie | null>(null)
    const [credits, setCredits] = useState<Credits | null>(null)

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
    if (!credits) return <p>Loading...</p>

    console.log(movie)
    console.log(credits)
    const { crew, cast } = credits
    const director = crew.find(person => person.job === "Director")
    console.log(cast)

    const { poster_path, overview, release_date, original_title, original_language, title } = movie

    return (
        <div className="">
            <img src={`${IMG_BASE_URL}${poster_path}`} alt={`Poster of ${title}`} />
            <h1>{title}</h1>
            <h2>Directed by {director?.name ?? "Unknown"}</h2> 
            <h2>{`Original title: ${original_title}`}</h2>
            <h2>{`Release data: ${release_date}`}</h2>
            <p>Original language: {original_language}</p>
            <p>{overview}</p>
            <h3>Cast</h3>
            {cast.map((actor) => (
                <p key={actor.id}>{actor.name}</p>
            ))}
            <h3>Crew</h3>
            {crew.map((member) => (
                <p key={member.credit_id}>{member.job}: {member.name}</p>
            ))}
        </div>
    )
}   