import { NavLink, useNavigate } from 'react-router'
import { useAuth } from '../context/authContext'

export default function Navbar() {

    const { user, logout } = useAuth()

    console.log(user)

    return (
        <div>
            <h1>The Film Shelf</h1>
        <nav className="navBar">
            <ul>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/explore" end>Explore</NavLink>
                </li>
                <li>
                    {user?
                    <NavLink to="/profile" end>Profile</NavLink> :
                    <NavLink to="/login" end>Log In</NavLink>}
                </li>
            </ul>
        </nav>
        </div>
    )
}