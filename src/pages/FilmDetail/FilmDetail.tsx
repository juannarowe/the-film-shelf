import { useState, useEffect } from "react"
import { useParams } from "react-router"
import { getMovieById } from "../../services/TMDB"

export default function FilmDetail() {
    const { id } = useParams<{ id: string }>()

    const [movie, setMovie] = useState([])

    useEffect(() => {
        if (id) {
            getMovieById(id).then(data => setMovie(data))
        }
    }, [id])

    console.log(movie)

    return (
        <div className="">
            <h1>Film Detail Page</h1>
            <p>Discover more about a movie here!</p>
        </div>
    )
}