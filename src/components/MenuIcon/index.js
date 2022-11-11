import "./index.css";

import cart from "../../images/cart.png";
import profiler from "../../images/profiler.png";

const menuIconData = [profiler, cart];

function MenuIcon() {
  return (
    <ul className="icons">
      {menuIconData.map((icon, index) => (
        <li className="icons-item" key={index}>
          <img src={icon} alt=""></img>
        </li>
      ))}
    </ul>
  );
}

export default MenuIcon;
