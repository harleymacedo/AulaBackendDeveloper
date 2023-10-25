import { useRouter } from "next/router"

const PostDetalhe = () => {

    const router = useRouter()
    const id = router.query.id

    return(
        <div>
            <h1>Detalhe de Post: {id} </h1>
        </div>
    )
}

export default PostDetalhe
