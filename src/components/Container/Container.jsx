import headerImage from "../../assets/images/header_img.svg";
import LoginForm from "../LoginForm/LoginForm";
import Register from "../Register/Register";

const Container = () => {
  return (
    <div className="container">
      <div className="leftContainer">
        <img src={headerImage} alt="Header" />
      </div>
      <div className="rightContainer">
        <LoginForm />
        <Register />
      </div>
    </div>
  );
};

export default Container;
