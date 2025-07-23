import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import axios from "axios";
import "./BuyActionWindow.css"; // Rename CSS file accordingly

const BuyActionWindow = ({ uid, mode }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow, closeSellWindow } = useContext(GeneralContext);

  const handleOrderClick = () => {
   console.log(uid,stockQuantity, stockPrice, mode);
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: Number(stockQuantity),
      price: Number(stockPrice),
      mode: mode.toUpperCase(),
    });

    // Call the right close function
    mode === "BUY" ? closeBuyWindow() : closeSellWindow();
  };

  const handleCancelClick = () => {
    mode === "BUY" ? closeBuyWindow() : closeSellWindow();
  };

  return (
    <div className="container" id="order-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price.</legend>
            <input
              type="number"
              value={stockPrice}
              name="price"
              id="price"
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>

        <div className="buttons">
          <span>Margin required ₹{(stockQuantity * stockPrice).toFixed(2)}</span>
          <div>
            <Link className="btn btn-blue" onClick={handleOrderClick}>
              {mode === "BUY" ? "Buy" : "Sell"}
            </Link>
            <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;


