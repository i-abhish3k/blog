import "./sidebar.css";

function SideBar() {
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
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Other</li>
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
