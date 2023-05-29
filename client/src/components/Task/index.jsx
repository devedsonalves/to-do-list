import "./styles.css";

const Task = ({ title, category }) => {
  const handleComplete = () => {};
  const handleEdit = () => {};
  const handleDelete = () => {};

  return (
    <div className="task-container">
      <div className="task-content">
        <p>{title}</p>
        <p>({category})</p>
      </div>
      <div className="btns">
        <button onClick={handleComplete}>
          <i className="ph ph-check"></i>
        </button>
        <button onClick={handleEdit}>
          <i className="ph ph-pencil"></i>
        </button>
        <button onClick={handleDelete}>
          <i className="ph ph-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default Task;
