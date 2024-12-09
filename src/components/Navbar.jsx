const Navbar = ({ NavbarStyle }) => {
  return (
    <>
      <nav
        className={`${NavbarStyle.navbar} d-flex justify-content-between align-items-center`}
      >
        <div>Logo</div>
        <NavbarList />
      </nav>
    </>
  );
};

const NavbarList = () => {
  return (
    <ul className="d-flex">
      <li className="mx-3">Home</li>
      <li className="mx-3">About</li>
      <li className="mx-3">Programs</li>
      <li className="mx-3">Plans</li>
      <li className="mx-3">Register</li>
      <li className="mx-3">Payment</li>
      <li className="mx-3">Login</li>
      <li className="mx-3">Contact Us</li>
    </ul>
  );
};

export default Navbar;
