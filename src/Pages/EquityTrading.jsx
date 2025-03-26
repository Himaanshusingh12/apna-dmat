import React from "react";
import TopBar from "../Components/TopBar";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

function EquityTrading() {
  return (
    <>
      <TopBar />
      <Header pageTitle="Equity Trading" breadcrumb1="Equity Trading" />
      {/* <div className="container py-5">
        <div className="text-center mb-5">
          <h1 className="fw-bold">Equity Market Overview</h1>
          <p className="text-muted">
            Get the latest updates on top stocks in the equity market.
          </p>
        </div>

        <div className="card shadow-lg border-0">
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">Top Performing Stocks</h5>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped table-hover mb-0">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Company Name</th>
                    <th scope="col">Stock Symbol</th>
                    <th scope="col">Current Price (₹)</th>
                    <th scope="col">Change (₹)</th>
                    <th scope="col">% Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Reliance Industries</td>
                    <td>RELIANCE</td>
                    <td>2,500</td>
                    <td className="text-success">+30</td>
                    <td className="text-success">+1.2%</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Tata Motors</td>
                    <td>TATAMOTORS</td>
                    <td>650</td>
                    <td className="text-danger">-15</td>
                    <td className="text-danger">-2.3%</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Infosys Ltd.</td>
                    <td>INFY</td>
                    <td>1,450</td>
                    <td className="text-success">+20</td>
                    <td className="text-success">+1.4%</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>HDFC Bank</td>
                    <td>HDFCBANK</td>
                    <td>1,600</td>
                    <td className="text-danger">-10</td>
                    <td className="text-danger">-0.6%</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Bharti Airtel</td>
                    <td>AIRTEL</td>
                    <td>820</td>
                    <td className="text-success">+12</td>
                    <td className="text-success">+1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container py-5">
        {/* Page Title */}
        <div className="text-center mb-5">
          <h1 className="fw-bold display-5">📈 Equity Market Overview</h1>
          <p className="text-secondary fs-5">
            Stay updated with the latest movements of the top-performing stocks.
          </p>
        </div>

        {/* Stylish Card */}
        <div className="card shadow-lg border-0 rounded-4">
          <div
            className="card-header text-white rounded-top-4"
            style={{
              // background: "linear-gradient(135deg, #007bff, #6610f2)",
              color: "#fff",
              background: "#00ff82",
            }}
          >
            <h4 className="mb-0 py-2 text-center text-white">
              Top Performing Stocks
            </h4>
          </div>

          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-hover align-middle mb-0">
                <thead className="table-light">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Company</th>
                    <th scope="col">Symbol</th>
                    <th scope="col">Price (₹)</th>
                    <th scope="col">Change (₹)</th>
                    <th scope="col">% Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-bottom">
                    <th scope="row">1</th>
                    <td>Reliance Industries</td>
                    <td>
                      <span className="badge bg-primary">RELIANCE</span>
                    </td>
                    <td>2,500</td>
                    <td className="text-success fw-bold">+30</td>
                    <td className="text-success fw-bold">+1.2%</td>
                  </tr>
                  <tr className="border-bottom">
                    <th scope="row">2</th>
                    <td>Tata Motors</td>
                    <td>
                      <span className="badge bg-secondary">TATAMOTORS</span>
                    </td>
                    <td>650</td>
                    <td className="text-danger fw-bold">-15</td>
                    <td className="text-danger fw-bold">-2.3%</td>
                  </tr>
                  <tr className="border-bottom">
                    <th scope="row">3</th>
                    <td>Infosys Ltd.</td>
                    <td>
                      <span className="badge bg-info">INFY</span>
                    </td>
                    <td>1,450</td>
                    <td className="text-success fw-bold">+20</td>
                    <td className="text-success fw-bold">+1.4%</td>
                  </tr>
                  <tr className="border-bottom">
                    <th scope="row">4</th>
                    <td>HDFC Bank</td>
                    <td>
                      <span className="badge bg-warning">HDFCBANK</span>
                    </td>
                    <td>1,600</td>
                    <td className="text-danger fw-bold">-10</td>
                    <td className="text-danger fw-bold">-0.6%</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Bharti Airtel</td>
                    <td>
                      <span className="badge bg-danger">AIRTEL</span>
                    </td>
                    <td>820</td>
                    <td className="text-success fw-bold">+12</td>
                    <td className="text-success fw-bold">+1.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="card-footer text-center py-3 bg-light rounded-bottom-4">
            <small className="text-muted">
              Data updated every 5 minutes. Last updated:{" "}
              {new Date().toLocaleTimeString()}
            </small>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EquityTrading;
