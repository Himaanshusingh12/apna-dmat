import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function TermplanCalculator() {
  const [age, setAge] = useState(30);
  const [sumAssured, setSumAssured] = useState(500000);
  const [policyTerm, setPolicyTerm] = useState(20);
  const [gender, setGender] = useState("male");
  const [isSmoker, setIsSmoker] = useState(false);

  const [premiumAmount, setPremiumAmount] = useState(0);
  const [totalPremium, setTotalPremium] = useState(0);

  const formatNumber = (num) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const calculatePremium = () => {
    // Base rate per ₹1000 sum assured
    let baseRate = 1;

    // Adjust the rate based on age (e.g., higher rates for older individuals)
    if (age > 50) baseRate = 1.5; // Example: older individuals pay more
    else if (age < 30) baseRate = 0.75; // Example: younger individuals pay less

    // Adjust for smoking
    if (isSmoker) baseRate += 0.5; // Smokers pay more

    // Calculate the premium
    const calculatedPremium = (sumAssured / 1000) * baseRate * policyTerm;

    // Set the total premium (could be annual or total for the policy term)
    setPremiumAmount(calculatedPremium / policyTerm); // Annual premium
    setTotalPremium(calculatedPremium); // Total premium for the entire policy term
  };
  return (
    <>
      <TopBar />
      <Header
        pageTitle="Term Plan Calculator"
        breadcrumb1="Term Plan Calculator"
      />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Term Plan Calculator</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Enter Your Details</h4>
              <div className="mb-3">
                <label className="form-label">Age</label>
                <input
                  type="number"
                  className="form-control"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Sum Assured (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  value={sumAssured}
                  onChange={(e) => setSumAssured(Number(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Policy Term (Years)</label>
                <input
                  type="number"
                  className="form-control"
                  value={policyTerm}
                  onChange={(e) => setPolicyTerm(Number(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Gender</label>
                <select
                  className="form-control"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-check-label">Are You a Smoker?</label>
                <input
                  type="checkbox"
                  checked={isSmoker}
                  onChange={() => setIsSmoker(!isSmoker)}
                />
              </div>
              <button
                className="btn btn-primary w-100"
                onClick={calculatePremium}
              >
                Calculate
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Results</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Annual Premium:</span>
                  <strong>₹{formatNumber(premiumAmount)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total Premium (for {policyTerm} years):</span>
                  <strong>₹{formatNumber(totalPremium)}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="mt-5">What is a Term Plan Calculator?</h3>
          <p>
            A Term Plan Calculator helps you estimate the life insurance premium
            based on the coverage amount (sum assured), policy term, and factors
            like age, gender, and smoking habits.
          </p>
          <h3>How Does It Work?</h3>
          <p>The formula used for Term Plan calculations is:</p>
          <p>
            <strong>Premium = Sum Assured × Rate × Policy Term</strong>
          </p>
          <p>where:</p>
          <ul>
            <li>
              <strong>Sum Assured</strong> = The amount you want to be insured
              for
            </li>
            <li>
              <strong>Rate</strong> = Base rate adjusted for age, gender, and
              smoking
            </li>
            <li>
              <strong>Policy Term</strong> = The duration (in years) for which
              you are insured
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default TermplanCalculator;
