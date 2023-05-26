import { Link } from "react-router-dom";

import "./styles.css";

const Home = ({ tasks }) => {
  return (
    <>
      <main className="principal">
        {tasks[0] ? (
          <section className="container">
            {tasks.map((task) => (
              <div>
                <div>
                  <p>{task.text}</p>
                  <p>({task.category})</p>
                </div>
                <div>
                  <button>COMPLETAR</button>
                  <button>EDITAR</button>
                  <button>EXCLUIR</button>
                </div>
              </div>
            ))}
          </section>
        ) : (
          <div className="container empty">
            <div className="alert">
              <h2>LISTA VAZIA...</h2>
            </div>
            <Link to="/create" className="btn">
              <p>CRIAR TAREFA</p>
              <i class="ph ph-arrow-up-right"></i>
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
