import React from "react";

function Equity() {
  return (
    <div className="container py-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Charges</h1>
        <p className="text-muted">
          Transparent and simple pricing across all segments
        </p>
      </div>

      {/* Main Table */}
      <div className="table-responsive mb-5">
        <table className="table table-bordered text-center align-middle">
          <thead className="table-light">
            <tr>
              <th>Charges</th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&O - Futures</th>
              <th>F&O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Brokerage</td>
              <td className="fw-bold text-success">Zero</td>
              <td>0.03% or ₹20/order (whichever lower)</td>
              <td>0.03% or ₹20/order (whichever lower)</td>
              <td>Flat ₹20/order</td>
            </tr>
            <tr>
              <td>STT/CTT</td>
              <td>0.1% on buy & sell</td>
              <td>0.025% on sell side</td>
              <td>0.05% on sell side</td>
              <td>
                <div>0.15% on intrinsic value (buy & exercised)</div>
                <div>0.15% on sell side (premium)</div>
              </td>
            </tr>
            <tr>
              <td>Transaction charges</td>
              <td>
                <div>NSE: 0.00307%</div>
                <div>BSE: 0.00375%</div>
              </td>
              <td>
                <div>NSE: 0.00307%</div>
                <div>BSE: 0.00375%</div>
              </td>
              <td>
                <div>NSE: 0.00183%</div>
                <div>BSE: 0</div>
              </td>
              <td>
                <div>NSE: 0.03553%</div>
                <div>BSE: 0.0325%</div>
              </td>
            </tr>
            <tr>
              <td>GST</td>
              <td colSpan="4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td>SEBI charges</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
              <td>₹10 / crore</td>
            </tr>
            <tr>
              <td>Stamp charges</td>
              <td>0.015% or ₹1500 / crore (buy)</td>
              <td>0.003% or ₹300 / crore (buy)</td>
              <td>0.002% or ₹200 / crore (buy)</td>
              <td>0.003% or ₹300 / crore (buy)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col-lg-6">
          {/* Account Opening */}
          <div className="mb-5">
            <h3 className="mb-3">Charges for account opening</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table-light">
                  <tr>
                    <th>Type of account</th>
                    <th>Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Online account</td>
                    <td className="text-success fw-bold">Free</td>
                  </tr>
                  <tr>
                    <td>Offline account</td>
                    <td className="text-success fw-bold">Free</td>
                  </tr>
                  <tr>
                    <td>NRI account (offline only)</td>
                    <td>₹500</td>
                  </tr>
                  <tr>
                    <td>Partnership / LLP / HUF / Corporate</td>
                    <td>₹500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* AMC */}
          <div className="mb-5">
            <h3 className="mb-3">Demat AMC</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table-light">
                  <tr>
                    <th>Value of holdings</th>
                    <th>AMC</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Up to ₹4 lakh</td>
                    <td className="text-success fw-bold">Free*</td>
                  </tr>
                  <tr>
                    <td>₹4 lakh - ₹10 lakh</td>
                    <td>₹100/year (quarterly)</td>
                  </tr>
                  <tr>
                    <td>Above ₹10 lakh</td>
                    <td>₹300/year (quarterly)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          {/* Optional Services */}
          <div className="mb-5">
            <h3 className="mb-3">Value added services</h3>
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table-light">
                  <tr>
                    <th>Service</th>
                    <th>Billing</th>
                    <th>Charges</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tickertape</td>
                    <td>Monthly/Annual</td>
                    <td>Free: ₹0 | Pro: ₹249</td>
                  </tr>
                  <tr>
                    <td>Smallcase</td>
                    <td>Per txn</td>
                    <td>Buy: ₹100 | SIP: ₹10</td>
                  </tr>
                  <tr>
                    <td>Kite Connect</td>
                    <td>Monthly</td>
                    <td>Connect: ₹500</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Charges Explained - Accordion Section */}
      <div className="mb-5">
        <h3 className="mb-4">Charges explained</h3>
        <div className="accordion" id="chargesAccordion">
          {/* STT */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#stt">
                Securities/Commodities transaction tax (STT/CTT)
              </button>
            </h2>
            <div id="stt" className="accordion-collapse collapse show" data-bs-parent="#chargesAccordion">
              <div className="accordion-body text-muted">
                Government tax charged on transactions. Applied on both buy & sell for delivery and only on sell side for intraday and F&O.
              </div>
            </div>
          </div>

          {/* Transaction Charges */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#txn">
                Transaction/Turnover Charges
              </button>
            </h2>
            <div id="txn" className="accordion-collapse collapse" data-bs-parent="#chargesAccordion">
              <div className="accordion-body text-muted">
                Charges levied by exchanges like NSE, BSE, MCX on transaction value.
              </div>
            </div>
          </div>

          {/* GST */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#gst">
                GST
              </button>
            </h2>
            <div id="gst" className="accordion-collapse collapse" data-bs-parent="#chargesAccordion">
              <div className="accordion-body text-muted">
                18% GST is applied on brokerage, SEBI charges and transaction charges.
              </div>
            </div>
          </div>

          {/* SEBI */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sebi">
                SEBI Charges
              </button>
            </h2>
            <div id="sebi" className="accordion-collapse collapse" data-bs-parent="#chargesAccordion">
              <div className="accordion-body text-muted">
                ₹10 per crore charged by SEBI for regulating markets.
              </div>
            </div>
          </div>

          {/* DP Charges */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dp">
                DP (Depository Participant) Charges
              </button>
            </h2>
            <div id="dp" className="accordion-collapse collapse" data-bs-parent="#chargesAccordion">
              <div className="accordion-body text-muted">
                ₹15.34 per scrip charged when stocks are sold from your demat account.
              </div>
            </div>
          </div>

          {/* MTF */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#mtf">
                Margin Trading Facility (MTF)
              </button>
            </h2>
            <div id="mtf" className="accordion-collapse collapse" data-bs-parent="#chargesAccordion">
              <div className="accordion-body text-muted">
                Interest: 0.04% per day. Brokerage: 0.3% or ₹20 per order. Pledge charge: ₹15 + GST.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-5">
        <p className="text-muted mb-2">
          Calculate your costs upfront using our brokerage calculator
        </p>
        <button className="btn btn-primary px-4 py-2">
          Calculate Charges
        </button>
      </div>
    </div>
  );
}

export default Equity;