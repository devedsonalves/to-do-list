import { Link } from "react-router-dom";

import "./styles.css";

const Header = () => {
  return (
    <header>
      <div>
        <h2>{"<Logo />"}</h2>
      </div>
      <div className="nav">
        <Link to="/">TAREFAS</Link>
        <Link to="/create">CRIAR TAREFA</Link>
      </div>
    </header>
  );
};

export default Header;
