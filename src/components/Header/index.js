import "./index.css";

import Logo from "../Logo";
import Menu from "../Menu";
import MenuIcon from "../MenuIcon";

function Header() {
  return (
    <header className="header">
      <Logo />
      <Menu />
      <MenuIcon />
    </header>
  );
}

export default Header;
