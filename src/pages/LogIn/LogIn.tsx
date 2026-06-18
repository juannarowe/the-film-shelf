import { useAuth } from '../../context/authContext'
import { useNavigate } from 'react-router'

export default function LogIn() {
    const { loginWithGoogle } = useAuth()
    const navigate = useNavigate()

    async function handleLogin() {
        await loginWithGoogle()
        navigate('/')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] gap-6">
            <h1 className="text-3xl font-bold">Log In</h1>
            <button onClick={handleLogin} className="cursor-pointer bg-white text-gray-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 shadow-md transition-colors">
                Login com Google
            </button>
        </div>
    )
}
