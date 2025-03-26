import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import EquityTrading from "./Pages/EquityTrading";
import Fando from "./Pages/Fando";
import Ipos from "./Pages/Ipos";
import SipPlans from "./Pages/SipPlans";
import Swp from "./Pages/Swp";
import PNF from "./Pages/PNF";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubService from "./Pages/SubService";
import ServiceDetails from "./Pages/ServiceDetails";
import TermsCondition from "./Pages/TermsCondition";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      {/* <About /> */}
      {/* <TopBar /> */}
      {/* <Navbar /> */}
      {/* <Home /> */}
      {/* <Header /> */}
      {/* <Navbar /> */}

      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <>
                <About />
              </>
            }
          ></Route>
          <Route
            path="/services"
            element={
              <>
                <Services />
              </>
            }
          ></Route>
          <Route
            path="/sub-service/:service_id"
            element={
              <>
                <SubService />
              </>
            }
          ></Route>
          <Route
            path="/service-detail/:subservice_id"
            element={
              <>
                <ServiceDetails />
              </>
            }
          ></Route>
          <Route
            path="/terms-condition"
            element={
              <>
                <TermsCondition />
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Contact />
              </>
            }
          ></Route>
          <Route
            path="/search"
            element={
              <>
                <Search />
              </>
            }
          ></Route>
          <Route
            path="/equity-trading"
            element={
              <>
                <EquityTrading />
              </>
            }
          ></Route>
          <Route
            path="/f&o"
            element={
              <>
                <Fando />
              </>
            }
          ></Route>
          <Route
            path="/ipos"
            element={
              <>
                <Ipos />
              </>
            }
          ></Route>
          <Route
            path="/sip-plans"
            element={
              <>
                <SipPlans />
              </>
            }
          ></Route>
          <Route
            path="/swp"
            element={
              <>
                <Swp />
              </>
            }
          ></Route>
          <Route
            path="*"
            element={
              <>
                <PNF />
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
