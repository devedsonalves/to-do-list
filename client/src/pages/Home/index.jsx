import { Link } from "react-router-dom";

import "./styles.css";
import Task from "../../components/Task";

const Home = ({ tasks }) => {
  return (
    <>
      <main className="principal">
        {tasks[0] ? (
          <section className="container">
            {tasks.map((task) => (
              <Task title={task.text} category={task.category} />
            ))}
          </section>
        ) : (
          <div className="container empty">
            <div className="alert">
              <h2>LISTA VAZIA...</h2>
            </div>
            <Link to="/create" className="btn">
              <p>CRIAR TAREFA</p>
              <i className="ph ph-arrow-up-right"></i>
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export default Home;
