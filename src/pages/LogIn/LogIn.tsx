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
        <div>
            <h1>Log In</h1>
            <button onClick={handleLogin}>Login com Google</button>
        </div>
    )
}
