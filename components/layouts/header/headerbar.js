import Navbar from "./navbar";
import SideMenu from "./sidemenu";
import Script from "next/script";

export default function HeaderBar() {
    return (
      <>
        <header className="header">
          <div className="main-navigation">
            <nav id="navbar_top" className="navbar navbar-expand-lg">
              <div className="container">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_nav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon">
                    <i className="ti-menu-alt"></i>
                  </span>
                </button>
                <Navbar />
                <SideMenu />
              </div>
            </nav>
          </div>
        </header>
        <Script src="/js/jquery-1.12.4.min.js" strategy="beforeInteractive" />
      </>
    );
}