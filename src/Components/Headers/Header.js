import "bootstrap/dist/css/bootstrap.css";
import Nav from "../Nav/Nav";
import headerLogo from "../../Images/Logo.png";

function Header() {
  return (
    <header className="main-header container">
      <a href="/">
        <img className="my-3" src={headerLogo} alt="." />
      </a>
      <Nav />
    </header>
  );
}

export default Header;
