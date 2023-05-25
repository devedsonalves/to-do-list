import { useState } from "react";
import Footer from "../../components/Footer";

const TaskForm = ({ CreateTask }) => {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");

  const createSubmit = (e) => {
    e.preventDefault();

    if (!text || !category) {
      alert("Preencha todos os campos");
      return;
    }

    CreateTask(text, category);
    setText("");
    setCategory("");
  };

  return (
    <section>
      <form onSubmit={createSubmit}>
        <div>
          <h5>TITULO: </h5>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value=""></option>
            <option value="Trabalho">Trabalho</option>
            <option value="Estudos">Estudos</option>
            <option value="Pessoal">Pessoal</option>
          </select>
        </div>
        <div>
          <button type="submit">Criar</button>
        </div>
      </form>
      <Footer></Footer>
    </section>
  );
};

export default TaskForm;
