import { useEffect, useState } from "react";
import "./sidebar.css";
import axios from "axios";
import { Link } from "react-router-dom";

function SideBar() {
  const [cat, setCat] = useState([]);
  const getCategories = async () => {
    const res = await axios.get("http://localhost:5000/api/categories");
    setCat(res.data);
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://www.waifu.com.mx/wp-content/uploads/elementor/thumbs/Hinata-Hyuga-Cover-q6vcrqnzrh03nyd8mmi87ai7theg8un9sf5n1fx5kg.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
          laborum quis asperiores quia recusandae at velit dicta, nemo tempora
          quae fugit facere! Fugit quia praesentium ipsa. Iusto omnis odit
          animi!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((elem) => (
            <Link to={`/?cat=${elem.name}`} key={elem} className="link">
              <li className="sidebarListItem">{elem.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOllOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-f"></i>
          <i className="sidebarIcon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
