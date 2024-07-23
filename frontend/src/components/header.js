import { Link } from "react-router-dom";

const header = () => {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>COB SBO</h1>
        </Link>
      </div>
    </header>
  );
};

export default header;
