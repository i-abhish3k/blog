import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";
import axios from "axios";

const Home = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const feactPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      console.log(res.data);
      setPost(res.data);
    };
    feactPost();
  }, []);
  return (
    <>
      <Header />
      <div className="home">
        <SideBar />
        <Posts post={post} />
      </div>
    </>
  );
};

export default Home;
