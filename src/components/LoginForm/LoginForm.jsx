import LabeledInput from "../LabeledInput/LabeledInput";

const LoginForm = () => {
  return (
    <form className="loginForm">
      <div className="formTitle">
        <h4>Bem vindo de volta</h4>
        <h2>Faça login na sua conta</h2>
      </div>
      <LabeledInput id="email" fieldType="email" label="E-mail" />
      <LabeledInput id="password" fieldType="password" label="Senha" />
      <div className="reminders">
        <div className="rememberMe">
          <input id="reminder" type="checkbox" />
          <label htmlFor="reminder">Lembre de mim</label>
        </div>
        <a href="/">Esqueceu sua senha?</a>
      </div>
      <button className="mainLoginBtn">Entrar</button>
      <button className="googleLoginBtn">Ou faça login com o Google</button>
      <div className="registerLink">
        <p>Não tem uma conta? <a href="/">Cadastre-se</a></p>
      </div>
    </form>
  );
};

export default LoginForm;
