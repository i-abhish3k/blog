import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">Tesststs</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5N0TnIaT1AuRviIgwUQh6u4cAOHUVbwgrQg&usqp=CAU"
        alt="img"
      />
    </div>
  );
};

export default Header;
