import "./index.css";
import logo from "../../images/logo.png";

function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="logo book" className="logo-img"></img>
      <h1 className="logo-title">Booklify</h1>
    </div>
  );
}

export default Logo;
