import "./styles.css";
import Wavevify from "./Aesthetics/WavesFromWavify/Wave";
import NavBar2 from "./Components/NavBar2";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <NavBar2/>
      <h1 className="text-center mt-4">Welcome to our website</h1>

      <footer>
        <p>&copy; 2023 Your Website. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
