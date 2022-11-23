import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import PostAuthor from "./postAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
const PostsList = () =>{
    const posts  = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date))

    const renderedPosts = orderedPosts.map(post=>(
        <article key={post.id}  style={{display:'block',border:"1px solid #000"}}>
            <h3> {post.title}</h3>
            <p>{post.content.substring(0,100)}</p>
            <p className="">
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>
            </p>
            <ReactionButtons post={post}/>
        </article>
    ))

    return(
        <section >
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}
export default PostsList