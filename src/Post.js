import { format, formatISO9075 } from "date-fns";
import { Link } from 'react-router-dom';

function Post({_id, title, summary, cover, content, createdAt, author}) {
    return (
        <div className="post w-1/2 flex-col  border w-1/2">
        <div className="bg-white rounded-lg shadow-md p-4">
          <Link to={`/post/${_id}`} >
            <img className="object-contain h-full w-full" src={'http://localhost:4000/' + cover} alt="blogPic" />
            </Link>
        </div>
        <div className="mt-4  items-center">
        <Link to={`/post/${_id}`} >
            <h2 className="font-bold pl-4 text-lg">{title}</h2>
            </Link>
          <p className="info flex space-x-2 pl-4 text-red-200 text-sm">
            <a href="" className="author">{ author.username}</a>
            <time>{format(new Date(createdAt), 'MMM d, yyyy HH:mm')}</time>
          </p>
        <p className="summary pl-4 pt-2">{summary}</p>
        </div>
      </div>
    );
};

export default Post;