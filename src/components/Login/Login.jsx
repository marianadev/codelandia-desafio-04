import headerImage from "../../assets/images/header_img.svg";
import Form from "../Form/Form";

const Header = () => {
  return (
    <div className="container">
      <div className="leftContainer">
        <img src={headerImage} alt="Header" />
      </div>
      <div className="rightContainer">
        <Form />
      </div>
    </div>
  );
};

export default Header;
