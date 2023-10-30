import Link from 'next/link'

import styles from '../styles/Navbar.module.css'

const Navbar = () => {
    return(
        <div className={styles.navbar}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/produto'>Produtos</Link>
                </li>
                <li>
                    <Link href='/sobre'>Sobre</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
