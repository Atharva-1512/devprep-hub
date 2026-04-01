import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/questions" style={{ color: "#fff" }}>
        Questions
      </Link>
    </nav>
  );
}



function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>
        Home
      </Link>
      <Link to="/questions" style={{ color: "#fff" }}>
        Questions
      </Link>
    </nav>
  );
}
export default Navbar;