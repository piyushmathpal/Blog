import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

export default function Mypost({_id,title,summary,cover,content,createdAt,author}) {
  async function deletePost(ev) {
    const response = await fetch(`${process.env.REACT_APP_URI}/post/${_id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "x-access-token": localStorage.token,
      },
    });
    if (response.status === 200) {
      alert("Post deleted successfully");
    } else {
      alert("Something went wrong");
    }
  }

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
        <div className="edit-row">
          <Link className="edit-btn" to={`/edit/${_id}`}> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit this post
          </Link>
          <br/>
          <Link className="edit-btn" to={`/`} onClick={deletePost}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Delete this post
          </Link>
        </div>
   
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