import React from "react";
import { Link } from "react-router-dom";

const PaymentPage = () => {
  const price = 500000;
  const total = price;
  const handleChange = () => {
    console.log("checked!");
  };

  return (
    <div className="container">
      <Link className="back" to="/">
        <p>back to Deliver</p>
      </Link>
      <div className="side">
        <div className="side-left">
          <div className="header">
            <h1>Shipment</h1>
            <div className="delivery">
              <div className="delivery-checkbox">
                <label className="parent-checkbox">
                  <input type="checkbox" onChange={handleChange} />
                  <div className="checkmark">JNE</div>
                </label>
              </div>
              <div className="delivery-checkbox">
                <label className="parent-checkbox">
                  <input type="checkbox" onChange={handleChange} />
                  <div className="checkmark">JNE</div>
                </label>
              </div>
              <div className="delivery-checkbox">
                <label className="parent-checkbox">
                  <input type="checkbox" onChange={handleChange} />
                  <div className="checkmark">JNE</div>
                </label>
              </div>
            </div>
          </div>
          <div className="header">
            <h1>Payment</h1>
            <div className="delivery">
              <div className="delivery-checkbox">
                <label className="parent-checkbox">
                  <input type="checkbox" onChange={handleChange} />
                  <div className="checkmark">JNE</div>
                </label>
              </div>
              <div className="delivery-checkbox">
                <label className="parent-checkbox">
                  <input type="checkbox" onChange={handleChange} />
                  <div className="checkmark">JNE</div>
                </label>
              </div>
              <div className="delivery-checkbox">
                <label className="parent-checkbox">
                  <input type="checkbox" onChange={handleChange} />
                  <div className="checkmark">JNE</div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="diveder" />
        <div className="side-right">
          <div className="header-summary">
            <h2>Summary</h2>
            <p>10 items purchased</p>
          </div>
          <div className="summary-content">
            <div className="bottom">
              <div className="bottom-child">
                <p>Cost of goods</p>
              </div>
              <div className="bottom-price">
                <p>
                  {price.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}
                </p>
              </div>
            </div>

            <div className="bottom">
              <h2>Total</h2>
              <h2>
                {total.toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}
              </h2>
            </div>
            <Link to="/payment">
              <button className="btn">Continue to Payment</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;