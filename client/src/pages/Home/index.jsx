import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = ({ tasks }) => {
  return (
    <section>
      <Header></Header>
      {tasks[0] ? (
        <>
          {tasks.map((task) => (
            <div>
              <div>
                <p>{task.text}</p>
                <p>({task.category})</p>
                <p>[{task.id}]</p>
              </div>
              <div>
                <button>COMPLETAR</button>
                <button>EDITAR</button>
                <button>EXCLUIR</button>
              </div>
            </div>
          ))}
        </>
      ) : (
        <h1>LISTA VAZIA...</h1>
      )}
      <Footer></Footer>
    </section>
  );
};

export default Home;
