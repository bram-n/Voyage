import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";
import LogIn from "./Pages/Login";
import JobListings from "./Pages/JobListing";

import DescriptionPage from "./Pages/DescriptionPage";



function App() {
  
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/" element={<UserProfilePage />}></Route> */}
          <Route path="/job" element={<JobListings />}></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} /> 
          <Route path="/description/:id" element={<DescriptionPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </AuthProvider> 
    </>
  );
}

export default App;
