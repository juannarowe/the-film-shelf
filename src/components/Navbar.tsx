import styles from './Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/explore">Explore</a></li>
                <li><a href="/movies">Favorites</a></li>
            </ul>
        </nav>
    )
}