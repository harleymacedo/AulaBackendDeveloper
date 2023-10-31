import styles from '../../styles/Comentarios.module.css'

export async function getStaticProps() {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    const data = await fetch(url)
    const comentarios = await data.json()
    console.log(comentarios)
    return {
        props: {comentarios},
    }
}

export default function Comentarios({comentarios}) {
    return(
        <div>
            <h2>Página de comentários</h2>
            <ul className={styles.comentarioList}>
                {comentarios.map( (comentario) => {
                    return(
                        <li>{comentario.id}</li>
                    )
                } )}
            </ul>
        </div>
    )
}
