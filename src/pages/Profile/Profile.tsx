import { useAuth } from "../../context/authContext"
import { Navigate } from "react-router"

export default function Profile() {
    const { user } = useAuth()

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <div>
            <h1>Hello {user.displayName}</h1>
            {user.photoURL && <img src={user.photoURL} alt={user.displayName ?? 'Profile Picture'} />}
            <p>Email: {user.email}</p>
        </div>
    )
}