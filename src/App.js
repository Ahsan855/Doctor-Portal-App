import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/About/About";
import Footer from "./Pages/Home/Footer";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import RequierAuth from "./Pages/Login/RequierAuth";
import SignUp from "./Pages/Login/SignUp";
import Navbar from "./Pages/Shared/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashBord from "./Pages/DashBord/DashBord";
import MyAppointment from "./Pages/DashBord/MyAppointment";
import MyReviwe from "./Pages/DashBord/MyReviwe";
import MyHistory from "./Pages/DashBord/MyHistory";
import Appoinment from "./Pages/Appoinment/Appointment";
import ContactUs from "./Pages/Home/ContactUs";
import REview from "./Pages/Home/REview";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="reviews" element={<REview />} />
        <Route
          path="appointment"
          element={
            <RequierAuth>
              <Appoinment />
            </RequierAuth>
          }
        ></Route>
        <Route
          path="dashboard"
          element={
            <RequierAuth>
              <DashBord />
            </RequierAuth>
          }
        >
          <Route index element={<MyAppointment />}></Route>
          <Route path="review" element={<MyReviwe />}></Route>
          <Route path="history" element={<MyHistory />}></Route>
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
