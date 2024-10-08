import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_URI}/profile`, {
      method: "GET",
      credentials: "include",
      headers: {
        'x-access-token': localStorage.token
      }
    })
      .then((response) => response.json())
      .then((userInfo) => {
        setUserInfo(userInfo);
      }).catch(err => {
        console.log(err)
        setUserInfo(null)
      });
  }, []);

  function logout() {
    fetch(`${process.env.REACT_APP_URI}/logout`, {
      credentials: "include",
      method: "POST",
    });
    localStorage.removeItem("token");
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header class="nav-bar-main">
      <Link to="/" className="logo">
        My Blogs
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <Link to="/myposts">My Posts</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
          
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
