import "./index.css";

const menuData = ["Home", "My Books", "Browse", "Community", "About"];

function Menu() {
  return (
    <ul className="menu">
      {menuData.map((option, index) => (
        <li className="menu-item" key={index}>
          <span>{option}</span>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
