import { Link, useLocation } from "react-router-dom";
import "./singlePost.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

const SinglePost = () => {
  const PF = "http://localhost:5000/images/";
  const [post, setPost] = useState([]);

  const { user } = useContext(Context);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts/" + path);
      setPost(res.data);
    };
    getPost();
  }, [path]);
  const handelDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
        data: {
          username: user.username,
        },
      });
      window.location.replace("/");
    } catch (error) {}
  };
  return (
    <div className="singlePost ">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}
        <h1 className="singlePostTitle">
          {post.title}
          {post.username === user?.username && (
            <div className="singlePostEdit">
              <i className="singlePostIcon fa-regular fa-pen-to-square" />
              <i
                className="singlePostIcon fa-solid fa-trash"
                onClick={handelDelete}
              />
            </div>
          )}
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            Date: <b>{new Date(post.createdAt).toDateString()}</b>
          </span>
        </div>
        <p className="singlePostDesc">{post.description}</p>
      </div>
    </div>
  );
};

export default SinglePost;
