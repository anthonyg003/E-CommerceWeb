import React from "react";
import "./checkout.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    cardName: "",
    cardNumber: "",
    months: 1,
    years: "",
    security: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckout = () => {
    navigate("/order");
  };

  return (
    <>
      <h1>Checkout</h1>
      <div className="checkoutContainer">
        <form className="checkoutForm" onSubmit={handleCheckout}>
          <div className="shipping">
            <h2>Shipping Info</h2>
            <label htmlFor="name">
              Full Name{" "}
              <input type="text" className="name" onChange={handleChange} />
            </label>
            <label htmlFor="street">
              Street{" "}
              <input type="text" className="street" onChange={handleChange} />
            </label>
            <label htmlFor="city">
              City{" "}
              <input type="text" className="city" onChange={handleChange} />
            </label>
            <label htmlFor="state">
              State{" "}
              <input type="text" className="state" onChange={handleChange} />
            </label>
            <label htmlFor="zipCode">
              Zip Code{" "}
              <input type="text" className="zipCode" onChange={handleChange} />
            </label>
          </div>
          <div className="billing">
            <h2>Billing Info</h2>
            <label htmlFor="cardName">
              Name on card{" "}
              <input type="text" className="cardName" onChange={handleChange} />
            </label>
            <label htmlFor="cardNumber">
              Card Number{" "}
              <input
                type="text"
                className="cardNumber"
                onChange={handleChange}
              />
            </label>
            <label htmlFor="expiration">
              Expiration Date
              <select
                name="months"
                id="months"
                value={formData.months}
                onChange={handleChange}
              >
                {[...Array(12).keys()].map((index) => {
                  console.log(index);
                  return (
                    <option key={index} value={index + 1}>
                      {index + 1}
                    </option>
                  );
                })}
              </select>
              <select name="years" id="years" onChange={handleChange}>
                <option value="2024">2024</option>
                <option value="2024">2025</option>
                <option value="2024">2026</option>
                <option value="2024">2027</option>
                <option value="2024">2028</option>
                <option value="2024">2029</option>
              </select>
            </label>
            <label className="securityLabel">
              Security Code{" "}
              <input type="text" className="security" onChange={handleChange} />
            </label>
            <button className="orderButton">Place Order</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
