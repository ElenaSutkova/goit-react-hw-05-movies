import { NavLink } from "react-router-dom";
import styles from '../Header/Header.module.css'

const Header = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/movies">Movies</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Header;