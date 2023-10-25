
export async function getStaticProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()
    console.log(posts)
    return {
        props: { posts }
    }
}

export default function Post({ posts: any }) {
    return(
        <div>
            <h1>Lista de Posts</h1>
            <ul>
            {posts.map( (post: any) => {
                <li key={post.id} > {post.id} </li>
            } )}
            </ul>
        </div>
    )
}
