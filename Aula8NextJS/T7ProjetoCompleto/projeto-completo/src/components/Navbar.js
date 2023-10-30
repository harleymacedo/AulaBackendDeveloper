import Link from 'next/link'

const Navbar = () => {
    return(
        <ul>
            <li>
                <Link href='/produtos' >Produtos</Link>
            </li>
            <li>
                <Link href='/sobre' >Sobre</Link>
            </li>
        </ul>
    )
}

export default Navbar