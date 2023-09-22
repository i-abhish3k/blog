import Post from "../post/Post";
import "./posts.css";

const Posts = ({ post }) => {
  return (
    <div className="posts">
      {post.map((item) => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  );
};

export default Posts;
