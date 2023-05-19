import { useEffect, useState } from "react";
import Post from "../Post.js";

function Index() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/posts/post').then(res => {
            res.json().then(posts => {
                setPosts(posts);
            });
        }).catch(err => console.log(err));
    }, []);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center pt-4 space-y-4">
            {posts.length > 0 && posts.map(post => {
                return <Post {...post} key={ post.Index} />
          })};
        </div>
    )
}

export default Index;