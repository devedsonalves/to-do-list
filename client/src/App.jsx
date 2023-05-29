import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import TaskForm from "./pages/TaskForm";

function App() {
  const [theme, setTheme] = useState("lightTheme");
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
    <section className={theme}>
      <BrowserRouter>
        <Header theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home tasks={tasks} />} />
          <Route
            path="/create"
            element={
              <TaskForm
                tasks={tasks}
                setTasks={setTasks}
                CreateTask={CreateTask}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </section>
  );
}

export default App;
