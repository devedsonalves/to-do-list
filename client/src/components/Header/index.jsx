import "./styles.css";

const Header = () => {
  return (
    <header>
      <div>
        <h2>{"<Logo/>"}</h2>
      </div>
      <div>
        <form>
          <input type="text" placeholder="Adicione suas tarefas" />
          <button>CRIAR</button>
        </form>
      </div>
    </header>
  );
};

export default Header;
