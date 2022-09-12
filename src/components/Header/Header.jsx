import headerImage from "../../assets/images/header_img.svg";
import LoginForm from "../LoginForm/LoginForm";

const Header = () => {
  return (
    <header>
      <div className="leftContainer">
        <img src={headerImage} alt="Header" />
      </div>
      <div className="rightContainer">
        <LoginForm />
      </div>
    </header>
  );
};

export default Header;
