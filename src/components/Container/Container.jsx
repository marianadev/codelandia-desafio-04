import loginImage from "../../assets/images/login_img.svg";
import LoginForm from "../LoginForm/LoginForm";
import Register from "../Register/Register";

const Container = () => {
  return (
    <div className="container">
      <div className="leftContainer">
        <img src={loginImage} alt="Solution demonstration" />
      </div>
      <div className="rightContainer">
        <LoginForm />
        <Register />
      </div>
    </div>
  );
};

export default Container;
