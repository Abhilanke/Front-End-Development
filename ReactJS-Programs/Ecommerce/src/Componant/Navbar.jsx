function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-white border-bottom">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            <h1>
              <i class="bi bi-shop"></i>
            </h1>
          </a>
          <div class="d-flex align-items-center">
            <div class="search-box d-flex align-items-center me">
              <input
                type="text"
                class="form-control border-0"
                placeholder="Search"
              />
              <i class="bi bi-search"></i>
            </div>
          </div>

          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  STORE
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  ELECTRONIC
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  BEAUTY
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  FASHION
                </a>
              </li>
            </ul>
            <a href="#" class="nav-icons">
              <i class="bi bi-person-circle"></i>
            </a>
          </div>
          <a href="#" class="nav-icons">
            <i class="bi bi-cart-check-fill"></i>
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
