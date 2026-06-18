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
        <div className="flex flex-col md:flex-row gap-8 py-4">
            <div className="shrink-0">
                <img src={`${IMG_BASE_URL}${poster_path}`} alt={`Poster of ${title}`} className="w-56 rounded-lg shadow-lg mx-auto" />
            </div>
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl font-bold">{title}</h1>
                <h2 className="text-lg text-white">Directed by {director?.name ?? "Unknown"}</h2>
                <h2 className="text-gray-400 text-sm">{`Original title: ${original_title}`}</h2>
                <h2 className="text-gray-400 text-sm">{`Release date: ${release_date}`}</h2>
                <p className="text-gray-400 text-sm">Original language: {original_language}</p>
                <p className="text-gray-300 mt-2">{overview}</p>
                <h3 className="text-lg font-semibold text-white mt-4">Cast</h3>
                {cast.map((actor) => (
                    <p key={actor.id} className="text-gray-400 text-sm">{actor.name}</p>
                ))}
                <h3 className="text-lg font-semibold text-white mt-4">Crew</h3>
                {crew.map((member) => (
                    <p key={member.credit_id} className="text-gray-400 text-sm">{member.job}: {member.name}</p>
                ))}
            </div>
        </div>
    )
}   