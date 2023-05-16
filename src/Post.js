import { format, formatISO9075 } from "date-fns";
import { Link } from 'react-router-dom';

function Post({_id, title, summary, cover, content, createdAt, author}) {
    return (
        <div className="post w-1/2 flex  border">
        <div className="img pr-4 pl-1 pt-2 pb-1 ">
          <Link to={`/post/${_id}`} >
            <img className=" h-full" src={'http://localhost:4000/' + cover} alt="blogPic" />
            </Link>
        </div>
        <div className="text grid pr-1 pt-2 pb-1">
        <Link to={`/post/${_id}`} >
            <h2 className="font-bold text-lg">{title}</h2>
            </Link>
          <p className="info flex space-x-2 text-red-200">
            <a href="" className="author">{ author.username}</a>
            <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
          </p>
        <p className="summary">{summary}</p>
        </div>
      </div>
    );
};

export default Post;