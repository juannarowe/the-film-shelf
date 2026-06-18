import { useAuth } from "../../context/authContext"
import { Navigate, useNavigate } from "react-router"

export default function Profile() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    function handleLogout() {
        logout()
        navigate('/login')
    }

    if (!user) {
        return <Navigate to="/login" />
    }

    return (
        <div className="flex flex-col items-center gap-4 py-12">
            <h1 className="text-2xl font-bold">{user.displayName}</h1>
            {user.photoURL && <img src={user.photoURL} alt={user.displayName ?? 'Profile Picture'} className="w-24 h-24 rounded-full object-cover border-2 border-white" />}
            <p className="text-gray-400">{user.email}</p>
            <button onClick={handleLogout} className="cursor-pointer bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 shadow-md transition-colors">
                Logout
            </button>
        </div>
    )
}