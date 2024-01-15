import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import Internship from "./Pages/Internship";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import LogIn from "./Pages/Login";
import JobListings from "./Pages/JobListing";
import Description from "./Components/Description";
import DescriptionPage from "./Pages/DescriptionPage";


function App() {
  
  return (
    <>
      <AuthProvider>
        <Routes>
          {/* <Route path="/" element={<Home />}></Route> */}
          <Route path="/" element={<JobListings />}></Route>
          {/* <Route path="/internship" element={<Internship />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} /> */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
          <Route path="/description/:id" element={<DescriptionPage />} />
        </Routes>
      </AuthProvider> 
    </>
  );
}

export default App;
