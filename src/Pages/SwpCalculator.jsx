import React from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/Sipcalculator.css";
import { useState } from "react";

function SwpCalculator() {
  const [initialInvestment, setInitialInvestment] = useState(500000);
  const [monthlyWithdrawal, setMonthlyWithdrawal] = useState(10000);
  const [expectedReturnRate, setExpectedReturnRate] = useState(8);
  const [duration, setDuration] = useState(5);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [totalWithdrawn, setTotalWithdrawn] = useState(0);
  const [finalValue, setFinalValue] = useState(0);

  const formatNumber = (num) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const calculateSWP = () => {
    let balance = initialInvestment;
    let totalWithdrawnAmount = 0;
    let months = duration * 12;
    const monthlyRate = expectedReturnRate / 100 / 12;

    for (let i = 0; i < months; i++) {
      // First, deduct the fixed monthly withdrawal
      if (balance >= monthlyWithdrawal) {
        balance -= monthlyWithdrawal;
        totalWithdrawnAmount += monthlyWithdrawal;
      } else {
        // If balance is less than the withdrawal amount, withdraw all remaining funds
        totalWithdrawnAmount += balance;
        balance = 0; // No money left
        break;
      }

      // After withdrawal, apply interest on the remaining balance
      balance *= 1 + monthlyRate;
    }

    // Set the invested amount, total withdrawn, and final value
    setInvestedAmount(initialInvestment);
    setTotalWithdrawn(totalWithdrawnAmount);
    setFinalValue(Math.round(balance)); // Rounded final balance
  };

  return (
    <>
      <TopBar />
      <Header pageTitle="Swp Calculator" breadcrumb1="Swp Calculator" />
      <div className="container mt-5">
        <h2 className="text-center mb-4">SWP Calculator</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm swpcard">
              <h4 className="mb-3">Enter Your Details</h4>
              <div className="mb-3">
                <label className="form-label">Initial Investment (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  value={initialInvestment}
                  onChange={(e) => setInitialInvestment(Number(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Monthly Withdrawal (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  value={monthlyWithdrawal}
                  onChange={(e) => setMonthlyWithdrawal(Number(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Expected Return Rate (%)</label>
                <input
                  type="number"
                  className="form-control"
                  value={expectedReturnRate}
                  onChange={(e) =>
                    setExpectedReturnRate(Number(e.target.value))
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Duration (Years)</label>
                <input
                  type="number"
                  className="form-control"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                />
              </div>
              <button className="btn btn-primary w-100" onClick={calculateSWP}>
                Calculate
              </button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card p-4 shadow-sm swpcard">
              <h4 className="mb-3">Results</h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Invested Amount:</span>{" "}
                  <strong>₹{formatNumber(investedAmount)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total Withdrawal:</span>{" "}
                  <strong>₹{formatNumber(totalWithdrawn)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Final Value:</span>{" "}
                  <strong>₹{formatNumber(finalValue)}</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="mt-5">What is an SWP Calculator?</h3>
          <p>
            A Systematic Withdrawal Plan (SWP) allows investors to withdraw a
            fixed amount at regular intervals from their mutual fund
            investments. This calculator helps estimate how long the investment
            will last based on withdrawals and returns.
          </p>
          <h3>How Does It Work?</h3>
          <p>The formula used for SWP calculations considers:</p>
          <ul>
            <li>
              <strong>Initial Investment:</strong> The starting amount you have
              invested.
            </li>
            <li>
              <strong>Monthly Withdrawal:</strong> The fixed amount withdrawn
              every month.
            </li>
            <li>
              <strong>Expected Return Rate:</strong> The annual interest rate
              your investment earns.
            </li>
            <li>
              <strong>Duration:</strong> The period for which you want to
              withdraw funds.
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default SwpCalculator;
