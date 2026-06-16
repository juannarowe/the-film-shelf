import { useParams } from "react-router"

export default function FilmDetail() {
    const params = useParams<{id: string}>()
    console.log(params)
    return (
        <div className="">
            <h1>Film Detail Page</h1>
            <p>Discover more about a movie here!</p>
        </div>
    )
}