import { useParams } from "react-router"

export default function FilmDetail() {
    const {id} = useParams<{id: string}>()
    
    return (
        <div className="">
            <h1>Film Detail Page</h1>
            <p>Discover more about a movie here!</p>
        </div>
    )
}