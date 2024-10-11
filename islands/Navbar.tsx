import { useState } from "preact/hooks";
export function Navbar() {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const toggleBurger = () => setBurgerOpen(!burgerOpen);

  return (
    <nav className="navbar is-transparent is-spaced">
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            href="/"
          >
            <span className="icon has-text-primary	">
              <i className="mdi mdi-36px mdi-code-array" />
            </span>
            <span>
              zizaco.dev
            </span>
          </a>

          <div
            className={`navbar-burger ${burgerOpen && "is-active"}`}
            onClick={toggleBurger}
          >
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>

        <div
          className={`navbar-menu ${burgerOpen && "is-active"}`}
        >
          <div className="navbar-end">
            <a
              className="navbar-item"
              href="https://github.com/Zizaco"
              target="_blank"
            >
              <span>Github</span>
              <span className="icon">
                <i className="mdi mdi-open-in-new" />
              </span>
            </a>
            <div className="navbar-item">
              <p className="control">
                <a
                  className="button is-primary is-fullwidth"
                  href="https://www.linkedin.com/in/zizaco/"
                  target="_blank"
                >
                  <span className="icon">
                    <i className="mdi mdi-forum-outline" />
                  </span>
                  <span>Contact</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
