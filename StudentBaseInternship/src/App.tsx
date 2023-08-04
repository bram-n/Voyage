
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Internship from "./Pages/Internship";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} / >
        <Route path = "/internship" element= {<Internship/>} />
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
