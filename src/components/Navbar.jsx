import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav
        className={`${style.navbar} px-5 d-flex justify-content-between align-items-center`}
      >
        <b className="fs-3">Academy</b>
        <NavbarList />
      </nav>
    </>
  );
};

const NavbarList = () => {
  return (
    <ul className="d-flex m-0">
      <li className="mx-3">
        <a href="#">Home</a>
      </li>
      <li className="mx-3">
        <a href="#">About</a>
      </li>
      <li className="mx-3">
        <a href="#">Programs</a>
      </li>
      <li className="mx-3">
        <a href="#">Plans</a>
      </li>
      <li className="mx-3">
        <a href="#">Register</a>
      </li>
      <li className="mx-3">
        <a href="#">Payment</a>
      </li>
      <li className="mx-3">
        <a href="#">Login</a>
      </li>
      <li className="mx-3">
        <a href="#">Contact Us</a>
      </li>
    </ul>
  );
};

export default Navbar;
