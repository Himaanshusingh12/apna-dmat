import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Chart from "react-google-charts";
import "../Styles/Sipcalculator.css";

function LumpsumCalculator() {
  const [lumpsumAmount, setLumpsumAmount] = useState(100000);
  const [investmentPeriod, setInvestmentPeriod] = useState(10);
  const [expectedReturnRate, setExpectedReturnRate] = useState(12);
  const [investedAmount, setInvestedAmount] = useState(0);
  const [estimatedReturns, setEstimatedReturns] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const formatNumber = (num) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const [chartData, setChartData] = useState([
    ["Type", "Amount"],
    ["Invested", 0],
    ["Returns", 0],
  ]);

  const calculateLumpsum = () => {
    const n = investmentPeriod;
    const r = expectedReturnRate / 100;

    // Lumpsum future value calculation
    const futureValue = lumpsumAmount * Math.pow(1 + r, n);
    const returns = futureValue - lumpsumAmount;

    setInvestedAmount(lumpsumAmount);
    setEstimatedReturns(returns);
    setTotalValue(futureValue);

    // Update chart data to trigger re-render
    setChartData([
      ["Type", "Amount"],
      ["Invested", lumpsumAmount],
      ["Returns", returns],
    ]);
  };

  return (
    <>
      <TopBar />
      <Header pageTitle="Lumpsum Calculator" breadcrumb1="Lumpsum Calculator" />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Lumpsum Calculator</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Enter Your Details</h4>
              <div className="mb-3">
                <label className="form-label">
                  Lumpsum Investment Amount (₹)
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={lumpsumAmount}
                  onChange={(e) =>
                    setLumpsumAmount(
                      e.target.value ? Number(e.target.value) : ""
                    )
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Investment Period (Years)</label>
                <input
                  type="number"
                  className="form-control"
                  value={investmentPeriod}
                  onChange={(e) =>
                    setInvestmentPeriod(
                      e.target.value ? Number(e.target.value) : ""
                    )
                  }
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Expected Return Rate (%)</label>
                <input
                  type="number"
                  className="form-control"
                  value={expectedReturnRate}
                  onChange={(e) =>
                    setExpectedReturnRate(
                      e.target.value ? Number(e.target.value) : ""
                    )
                  }
                />
              </div>
              <button
                className="btn btn-primary w-100"
                onClick={calculateLumpsum}
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
                  <span>Invested Amount:</span>{" "}
                  <strong>₹{formatNumber(investedAmount)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Estimated Returns:</span>{" "}
                  <strong>₹{formatNumber(estimatedReturns)}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total Value:</span>{" "}
                  <strong>₹{formatNumber(totalValue)}</strong>
                </li>
              </ul>
              <Chart
                width={"100%"}
                height={"300px"}
                chartType="PieChart"
                loader={<div>Loading Chart...</div>}
                data={chartData}
                options={{ pieHole: 0.4 }}
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <h3 className="mt-5">What is a Lumpsum Calculator?</h3>
          <p>
            A Lumpsum Calculator helps investors estimate the future value of a
            one-time investment over a specific period with a fixed rate of
            return.
          </p>
          <h3>How Does It Work?</h3>
          <p>The formula used for Lumpsum calculations is:</p>
          <p>
            <strong>Future Value = P × (1 + r)^t</strong>
          </p>
          <p>where:</p>
          <ul>
            <li>
              <strong>P</strong> = Initial Investment (Lumpsum)
            </li>
            <li>
              <strong>r</strong> = Annual Interest Rate (decimal)
            </li>
            <li>
              <strong>t</strong> = Number of Years
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LumpsumCalculator;
