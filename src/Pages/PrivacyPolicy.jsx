import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { BACKEND_URL } from "../Constant";
import { toast } from "react-toastify";
import axios from "axios";

function PrivacyPolicy() {
  const [privacypolicy, Setprivacypolicy] = useState(null);

  useEffect(() => {
    fetchprivacypolicy();
  }, []);

  const fetchprivacypolicy = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/privacy-policy/get-active`
      );
      if (response.status === 200 && response.data.data.length > 0) {
        Setprivacypolicy(response.data.data[0]);
      } else {
        Setprivacypolicy(null);
      }
    } catch (error) {
      toast.error(
        `Error fetching privacy policy: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };
  return (
    <>
      <TopBar />
      <Header pageTitle="Privacy Policy" breadcrumb1="Privacy Policy" />
      <div className="container my-4">
        <h2 className="text-center text-primary">Privacy Policy</h2>

        {privacypolicy ? (
          <div
            className="privacy-content"
            dangerouslySetInnerHTML={{ __html: privacypolicy.content }}
          />
        ) : (
          <p className="text-center">Loading privacy policy...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
