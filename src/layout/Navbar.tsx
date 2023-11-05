import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to="/">Trang chủ fast</Link>
        <Link to="/about">Giới thiệu fast</Link>
      </nav>
    </>
  );
}

export default Navbar;