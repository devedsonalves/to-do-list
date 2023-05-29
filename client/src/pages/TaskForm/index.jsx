import { useState } from "react";

import "./styles.css";

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
    <main className="principal">
      <form className="container form" onSubmit={createSubmit}>
        <div className="title">
          <h5>TITULO </h5>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="category">
          <h5>CATEGORIA</h5>
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
        <div className="btn-container">
          <button type="submit" className="btn-submit">
            <p>CRIAR</p>
            <i className="ph ph-plus"></i>
          </button>
        </div>
      </form>
    </main>
  );
};

export default TaskForm;
