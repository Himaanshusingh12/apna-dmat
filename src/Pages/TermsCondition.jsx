import React, { useEffect, useState } from "react";
import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import axios from "axios";
import { BACKEND_URL } from "../Constant";
import { toast } from "react-toastify";

function TermsCondition() {
  const [termscondition, Settermscondition] = useState(null);

  useEffect(() => {
    fetchtermscondition();
  }, []);

  const fetchtermscondition = async () => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/terms-condition/get-active`
      );
      if (response.status === 200 && response.data.data.length > 0) {
        Settermscondition(response.data.data[0]);
      } else {
        Settermscondition(null);
      }
    } catch (error) {
      toast.error(
        `Error fetching terms condition: ${
          error.response?.data?.message || error.message
        }`
      );
    }
  };
  return (
    <>
      <TopBar />
      <Header pageTitle="Terms & Condition" breadcrumb1="Terms & Condition" />
      <div className="container my-4">
        <h2 className="text-center">Terms Condition</h2>

        {termscondition ? (
          <div
            className="privacy-content"
            dangerouslySetInnerHTML={{ __html: termscondition.content }}
          />
        ) : (
          <p className="text-center">Loading terms condition...</p>
        )}
      </div>
      <Footer />
    </>
  );
}
// 3T_IxICA8tMiZ7ndJLfE-fZQt5g
export default TermsCondition;
