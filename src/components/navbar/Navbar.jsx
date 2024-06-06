import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav-logo">EV CARS</div>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li className="nav-item">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
