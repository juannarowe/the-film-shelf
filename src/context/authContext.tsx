import { createContext, useContext, useState } from 'react'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../services/firebase'
import type { ReactNode } from 'react'
import type { User } from 'firebase/auth'

interface AuthContextType {
    user: User | null
    loginWithGoogle: () => Promise<void>
    logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null)

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
    return useContext(AuthContext)!
}