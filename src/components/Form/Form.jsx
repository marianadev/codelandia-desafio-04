import googleIcon from "../../assets/icons/google.svg";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";

const LoginForm = () => {
  return (
    <form className="loginForm">
      <div className="formTitle">
        <h4>Bem vindo de volta</h4>
        <h2>Faça login na sua conta</h2>
      </div>
      <Input id="email" fieldType="email" label="E-mail" />
      <Input id="password" fieldType="password" label="Senha" />
      <div className="reminders">
        <Checkbox id="rememberMe" label="Lembre de mim" />
        <a href="/">Esqueceu sua senha?</a>
      </div>
      <button className="mainLoginBtn">Entrar</button>
      <button className="googleLoginBtn">
        <img src={googleIcon} alt="Google icon" />
        Ou faça login com o Google
      </button>
      <div className="register">Não tem uma conta? <a href="/">Cadastre-se</a></div>
    </form>
  );
};

export default LoginForm;
