import "./setting.css";
import SideBar from "./../../components/sidebar/SideBar";

export const Setting = () => {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update your account</span>
          <span className="settingsTitleDelete">Delete account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://www.waifu.com.mx/wp-content/uploads/elementor/thumbs/Mikasa-Ackerman-Cover-q6pckqawlcncrxmgxvjlwt2ag4v8c3mw23ikjlv8fk.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>Username</label>
          <input type="text" placeholder="User name" />
          <label>Email</label>
          <input type="email" placeholder="example@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmitButton">Update</button>
        </form>
      </div>
      <SideBar />
    </div>
  );
};
