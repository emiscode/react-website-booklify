import "./App.css";
import Logo from "./components/Logo";
import profiler from "./images/profiler.png";
import cart from "./images/cart.png";

const optionsData = ["Home", "My Books", "Browse", "Community", "About"];
const iconsData = [profiler, cart];

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <Logo />

        <ul className="options">
          {optionsData.map((option) => (
            <li className="options-item">
              <span>{option}</span>
            </li>
          ))}
        </ul>

        <ul className="icons">
          {iconsData.map((icon) => (
            <li className="icons-item">
              <img src={icon} alt=""></img>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
