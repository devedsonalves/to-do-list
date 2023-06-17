import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const item = localStorage.getItem("item");

    if (item !== null) {
      setTasks(JSON.parse(item));
    }
  }, []);

  const CreateTask = (text, category) => {
    const newTasks = [
      ...tasks,
      {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        text,
        category,
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );
}

export default App;
