import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Post({_id,title,summary,cover,content,createdAt,author}) {
 
  return (
    <div className="post">
      <div className="image">
        <Link to={`/post/${_id}`} id="indexpage-show-image">
          <img  src={cover} alt=""/>
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
        </Link>
        <p className="info">
          <span  className="author">{author.username}</span>
          <br/>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <Link to={`/post/${_id}`} id="indexpage-hidden-image">
          <img  src={cover} alt=""/>
        </Link>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}