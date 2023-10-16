import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <nav>
                <a href='/page2'>Link 1</a>
            </nav>
        </main>
    )
}
