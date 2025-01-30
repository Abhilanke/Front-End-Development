function Navbar({ manuBar }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white border-bottom">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex align-items-center">
              {manuBar.map((item) => (
                <li key={item} className="nav-item">
                  <a className="nav-link px-3 text-dark" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
