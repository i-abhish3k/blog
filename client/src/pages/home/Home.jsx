import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/SideBar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [post, setPost] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:5000/api/posts" + search);
      console.log(res.data);
      setPost(res.data);
    };
    fetchPost();
  }, [search]);
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
