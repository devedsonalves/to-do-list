import { Link } from "react-router-dom";

import "./styles.css";

const Footer = () => {
  return (
    <footer>
      <Link to="/">HOME</Link>
      <Link to="/create">CRIAR</Link>
    </footer>
  );
};

export default Footer;
