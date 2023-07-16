
import logoSb2 from "../assets/Sb-2.png"
function NavBar() {
    return (  
        <nav className="navbar">
        <a className="navbar-logo" href="">
          <img src={logoSb2} alt="Logo" />
        </a>
        <div className="navbar-menu">
          <a href="#Home">Home</a>
          <a href="#internships">Internships</a>
          <button className="btnLogin-popup">Login</button>
        </div>
        <div className="menu-toggle">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
       
      </nav>
    );
}

export default NavBar;

