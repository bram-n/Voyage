import "./styles.css";
import logoSb2 from "./Aesthetics/Sb-2.png"; // with import
import wave1 from "./Aesthetics/Waves/wave-1.svg";
import wave2 from "./Aesthetics/Waves/wave-2.svg";
import wave3 from "./Aesthetics/Waves/wave-3.svg";
import wave4 from "./Aesthetics/Waves/wave-4.svg";
import wave5 from "./Aesthetics/Waves/wave-5.svg";

function App() {
  return (
    <div>
      
        {/* <img src="./Aesthetics/Waves/wave-1.svg" />
    <img src="./Aesthetics/Waves/wave-2.svg" />
    <img src="./Aesthetics/Waves/wave-3.svg" />
    <img src="./Aesthetics/Waves/wave-4.svg" />
    <img src="./Aesthetics/Waves/wave-5.svg" id="shape" /> */}
        <img src={wave1} />
        <img src={wave2} />
        <img src={wave3} />
        <img src={wave4} />
        <img src={wave5} />
        <div> asd</div>
        
      {/* Nav Bar */}
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
      <div>
        {/* Main Content */}
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>asd</h1>
        <h1>Welcome to My Website</h1>
        <p>This is the main content of your page.</p>
      </div>

      <footer>
        {/* Footer content  */}
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
