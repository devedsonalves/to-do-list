import "./styles.css";

const Modal = ({ isOpen, setIsOpen, children }) => {
  if (isOpen) {
    return (
      <section className="background">
        <div className="container">
          <div className="close">
            <button onClick={() => setIsOpen(false)}>X</button>
          </div>
          <div className="content">{children}</div>
        </div>
      </section>
    );
  }
};

export default Modal;
