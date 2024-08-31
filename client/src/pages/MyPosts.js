import React from 'react'
import Mypost from '../components/Mypost'
import {useEffect, useState} from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext";


const MyPosts = () => {
    const [posts,setPosts] = useState([]);
    const { setUserInfo, userInfo } = useContext(UserContext);
    useEffect(() => {
      fetch(`${process.env.REACT_APP_URI}/mypost/${localStorage.token}`, {
        method: "GET",
        credentials: "include",
        headers: {
          'x-access-token': localStorage.token
        }})
        .then(response => {
        response.json().then(posts => {
          setUserInfo(posts.userinfo)
          setPosts(posts.post);
        });
      });
    }, []);
  
    return (<>
    <div className='postbody'>
        <h1 style={{

            "color":"brown"
            
        }}>My Posts</h1>
      {posts.length > 0 && posts.map(post => (
        <Mypost key={post._id } {...post} />
      ))}
      </div>
    </>)
}

export default MyPosts