import { createContext, useContext, useState } from 'react'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../services/firebase'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null)

    async function loginWithGoogle() {
        const result = await signInWithPopup(auth, googleProvider)
        setUser(result.user)
    }

    async function logout() {
        await signOut(auth)
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, loginWithGoogle, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}