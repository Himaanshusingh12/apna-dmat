import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import EquityTrading from "./Pages/EquityTrading";
import Fando from "./Pages/Fando";
import SipPlans from "./Pages/SipPlans";
import PNF from "./Pages/PNF";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubService from "./Pages/SubService";
import ServiceDetails from "./Pages/ServiceDetails";
import TermsCondition from "./Pages/TermsCondition";
import BlogList from "./Pages/BlogList";
import BlogDetail from "./Pages/BlogDetail";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import PopUp from "./Components/PopUp";
import SipCalculator from "./Pages/SipCalculator";
import SwpCalculator from "./Pages/SwpCalculator";
import LumpsumCalculator from "./Pages/LumpsumCalculator";
import TermplanCalculator from "./Pages/TermplanCalculator";

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <PopUp />
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
            path="/service/:slug"
            element={
              <>
                <SubService />
              </>
            }
          ></Route>
          <Route
            // path="/service/:service_slug/:subservice_slug"
            path="/:service_slug/:subservice_slug"
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
            path="/privacy-policy"
            element={
              <>
                <PrivacyPolicy />
              </>
            }
          ></Route>
          <Route
            path="/blog/:slug"
            element={
              <>
                <BlogList />
              </>
            }
          />
          <Route
            path="/blog-detail/:slug"
            element={
              <>
                <BlogDetail />
              </>
            }
          />
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
            path="/sip-plans"
            element={
              <>
                <SipPlans />
              </>
            }
          ></Route>
          <Route
            path="/sip-calculator"
            element={
              <>
                <SipCalculator />
              </>
            }
          ></Route>
          <Route
            path="/swp-calculator"
            element={
              <>
                <SwpCalculator />
              </>
            }
          ></Route>
          <Route
            path="/lumpsum-calculator"
            element={
              <>
                <LumpsumCalculator />
              </>
            }
          ></Route>
          <Route
            path="/termplan-calculator"
            element={
              <>
                <TermplanCalculator />
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
