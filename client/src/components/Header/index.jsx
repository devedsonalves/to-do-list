import { Link } from "react-router-dom";
import "./styles.css";

const Header = ({ setTheme, theme }) => {
  const handleClick = () => {
    theme === "lightTheme" ? setTheme("nightTheme") : setTheme("lightTheme");
  };

  return (
    <header>
      <div>
        <h2>{"<Logo/>"}</h2>
      </div>
      <div className="nav">
        <Link to="/">TAREFAS</Link>
        <Link to="/create">CRIAR TAREFA</Link>
        <button
          onClick={handleClick}
          className={theme === "nightTheme" ? "day" : "night"}
        >
          <i className="ph ph-arrows-clockwise"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
