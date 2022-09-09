import headerImage from "../../assets/images/header_img.svg";

const Header = () => {
  return (
    <header>
      <div className="leftContainer">
        <img src={headerImage} alt="Header" />
      </div>
      <div className="rightContainer">
        <form className="loginForm">
          <h3>Bem vindo de volta</h3>
          <h1>Faça login na sua conta</h1>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <input type="checkbox" />
          <div className="footer">
            <label for="reminder">Lembre de mim</label>
            <a>Esqueceu sua senha?</a>
          </div>
          <button className="mainLoginBtn">Entrar</button>
          <button className="googleLoginBtn">Ou faça login com o Google</button>
        </form>
        <p>Não tem uma conta?<a>Cadastre-se</a></p>
      </div>
    </header>
  );
};

export default Header;
