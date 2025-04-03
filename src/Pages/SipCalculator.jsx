import React, { useState } from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../Styles/SipCalculator.css";
import Chart from "react-google-charts";

function SipCalculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
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

  const calculateSIP = () => {
    const n = investmentPeriod * 12;
    const r = expectedReturnRate / 100 / 12;
    const invested = monthlyInvestment * n;

    // SIP future value calculation
    const futureValue =
      monthlyInvestment * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const returns = futureValue - invested;

    setInvestedAmount(invested);
    setEstimatedReturns(returns);
    setTotalValue(futureValue);

    // Update chart data to trigger re-render
    setChartData([
      ["Type", "Amount"],
      ["Invested", invested],
      ["Returns", returns],
    ]);
  };

  return (
    <>
      <TopBar />
      <Header pageTitle="Sip Calculator" breadcrumb1="Sip Calculator" />
      <div className="container mt-5">
        <h2 className="text-center mb-4">SIP Calculator</h2>
        <div className="row">
          <div className="col-md-6">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Enter Your Details</h4>
              <div className="mb-3">
                <label className="form-label">Monthly Investment (₹)</label>
                <input
                  type="number"
                  className="form-control"
                  value={monthlyInvestment}
                  onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Investment Period (Years)</label>
                <input
                  type="number"
                  className="form-control"
                  value={investmentPeriod}
                  onChange={(e) => setInvestmentPeriod(Number(e.target.value))}
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
              <button className="btn btn-primary w-100" onClick={calculateSIP}>
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
          <h3 className="mt-5">What is a SIP Calculator?</h3>
          <p>
            A SIP (Systematic Investment Plan) Calculator helps investors
            estimate the future value of their investments. By investing a fixed
            amount regularly, you can build wealth over time with the power of
            compounding.
          </p>
          <h3>How Does It Work?</h3>
          <p>The formula used for SIP calculations is:</p>
          <p>
            <strong>Maturity Amount = P × [(1 + r/n)^(nt) - 1] / (r/n)</strong>
          </p>
          <p>where:</p>
          <ul>
            <li>
              <strong>P</strong> = Monthly Investment
            </li>
            <li>
              <strong>r</strong> = Annual Interest Rate (decimal)
            </li>
            <li>
              <strong>n</strong> = Number of Compounding Periods (12 for monthly
              SIP)
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

export default SipCalculator;
