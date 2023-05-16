import { useEffect, useState, useContext} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {UserContext} from "../UserContext";


function PostPage() {

    const [postInfo, setPostInfo] = useState(null);
    const {userInfo} = useContext(UserContext);



    const { id } = useParams();
  
    useEffect(() => {
        fetch(`http://localhost:4000/posts/post/${id}`).then(res => {
            res.json().then(posts => {
                setPostInfo(posts);
            });
        });
    }, []);


    if (!postInfo) return 'loading';
    return (
        <div className="post-page">
            <div>
                <img src={`http://localhost:4000/${postInfo.cover}`} alt='h' />
            </div>
            <div className="author">{postInfo.author.username}</div>
            {userInfo.id=== postInfo.author._id && (
                
                <Link className='edit-btn' to={`/edit/${postInfo._id}`}>
                    Edit this post
                    </Link>
            )}
            <h1>{postInfo.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
        </div>
    )

};

export default PostPage;