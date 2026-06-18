import { NavLink } from 'react-router'

export default function Navbar() {
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
                    <NavLink to="/login" end>Log In</NavLink>
                </li>
            </ul>
        </nav>
        </div>
    )
}