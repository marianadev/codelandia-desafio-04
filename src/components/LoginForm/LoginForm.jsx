import LabeledInput from "../LabeledInput/LabeledInput";

const LoginForm = () => {
  return (
    <form className="loginForm">
      <h4>Bem vindo de volta</h4>
      <h2>Faça login na sua conta</h2>
      <LabeledInput id="email" fieldType="email" label="E-mail" />
      <LabeledInput id="password" fieldType="password" label="Senha" />
      <div className="footer">
        <input id="reminder" type="checkbox" />
        <label htmlFor="reminder">Lembre de mim</label>
        <a href="/">Esqueceu sua senha?</a>
      </div>
      <button className="mainLoginBtn">Entrar</button>
      <button className="googleLoginBtn">Ou faça login com o Google</button>
      <p>
        Não tem uma conta?<a href="/">Cadastre-se</a>
      </p>
    </form>
  );
};

export default LoginForm;
