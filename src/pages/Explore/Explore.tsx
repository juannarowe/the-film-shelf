import { useState, useEffect } from 'react'
import getMovies from '../../services/TMDB'

export default function Explore() {
    // First I create the state:
    const [movies, setMovies] = useState([])

    // Then, call the function to get the movies. When the movies arrive, save the/*  */ in the state.
    useEffect(() => {
        getMovies().then((data) => {
            console.log(data)
            setMovies(data)})
    }, [])

    return (
        <div>
            {/* {movies.map((movie) => (
                <div key={movie.id}>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                </div>
            ))} */}
        </div>
    )
}