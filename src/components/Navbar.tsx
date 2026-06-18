import { NavLink, useNavigate } from 'react-router'
import { useAuth } from '../context/authContext'

export default function Navbar() {

    const { user, logout } = useAuth()

    console.log(user)

    return (
        <div className="flex items-center justify-between px-6 py-4 bg-gray-950 border-b border-gray-800">
            <NavLink to="/">
                <h1 className="text-xl font-bold text-white">The Film Shelf</h1>
            </NavLink>
            <nav>
                <ul className="flex gap-6">
                    <li>
                        <NavLink to="/" end className="text-gray-300 hover:text-white transition-colors">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/explore" end className="text-gray-300 hover:text-white transition-colors">Explore</NavLink>
                    </li>
                    <li>
                        {user?
                        <NavLink to="/profile" end className="text-gray-300 hover:text-white transition-colors">Profile</NavLink> :
                        <NavLink to="/login" end className="text-gray-300 hover:text-white transition-colors">Log In</NavLink>}
                    </li>
                </ul>
            </nav>
        </div>
    )
}