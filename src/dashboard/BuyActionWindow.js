import React, { useState, useContext } from "react";
import { supabase } from "../scripts/supabaseClient.js";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  // 🔥 SUPABASE ORDER FUNCTION
  const placeOrder = async (mode) => {
    const { error } = await supabase.from("orders").insert([
      {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: mode,
      },
    ]);

    if (error) {
      console.log("❌ Order error:", error.message);
    } else {
      console.log(`${mode} Order placed ✅`);
      closeBuyWindow();
    }
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          {/* BUY */}
          <button
            className="btn btn-blue"
            onClick={() => placeOrder("BUY")}
          >
            Buy
          </button>

          {/* SELL */}
          <button
            className="btn btn-red"
            onClick={() => placeOrder("SELL")}
          >
            Sell
          </button>

          {/* CANCEL */}
          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;