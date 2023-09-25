import "./post.css";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PF = "http://localhost:5000/images/"
  return (
    <div className="post">
      {post.photo && <img className="postImg" src={PF+post.photo} />}
      <div className="postInfo">
        <div className="postCat">
          {post.categories.map((c) => {
            <span className="postCats">{c.name}</span>;
          })}
        </div>
        <Link to={`post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <spna className="postDate">
          {new Date(post.createdAt).toDateString()}
        </spna>
      </div>
      <p className="postDesc">{post.description}</p>
    </div>
  );
};

export default Post;
