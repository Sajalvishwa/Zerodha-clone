import React, { useEffect, useState } from "react";
import { supabase } from "../scripts/supabaseClient.js";

const Summary = () => {
  const [funds, setFunds] = useState(null);
  const [holdings, setHoldings] = useState([]);

  useEffect(() => {
    fetchFunds();
    fetchHoldings();
  }, []);

  // 🔥 FETCH FUNDS
  const fetchFunds = async () => {
    const { data, error } = await supabase
      .from("funds")
      .select("*")
      .limit(1);

    if (!error) {
      setFunds(data[0]);
    }
  };

  // 🔥 FETCH HOLDINGS
  const fetchHoldings = async () => {
    const { data, error } = await supabase
      .from("holdings")
      .select("*");

    if (!error) {
      setHoldings(data);
    }
  };

  if (!funds) return <h3>Loading...</h3>;

  // =========================
  // 💰 EQUITY CALCULATION
  // =========================
  const availableMargin =
    (funds.available_cash - funds.used_margin).toFixed(2);

  // =========================
  // 📊 HOLDINGS CALCULATION
  // =========================
  let totalInvestment = 0;
  let currentValue = 0;

  holdings.forEach((stock) => {
    totalInvestment += stock.avg * stock.qty;
    currentValue += stock.price * stock.qty;
  });

  const pnl = currentValue - totalInvestment;
  const pnlPercent = ((pnl / totalInvestment) * 100).toFixed(2);

  // format ₹
  const format = (num) => `₹${(num / 1000).toFixed(2)}k`;

  return (
    <div className="summary">

      {/* USER */}
      <div className="user">
        <h5>Hi, User</h5>
      </div>

      {/* EQUITY */}
      <div className="box">
        <p className="title">Equity</p>

        <h2>{format(availableMargin)}</h2>
        <p className="muted">Margin available</p>

        <div className="row">
          <div>
            <p className="label">Margins used</p>
            <p className="value">₹{funds.used_margin}</p>
          </div>

          <div>
            <p className="label">Opening balance</p>
            <p className="value">₹{funds.opening_balance}</p>
          </div>
        </div>
      </div>

      {/* HOLDINGS */}
      <div className="box">
        <p className="title">Holdings ({holdings.length})</p>

        <h2 className={pnl >= 0 ? "profit" : "loss"}>
          ₹{(pnl / 1000).toFixed(2)}k{" "}
          <span>{pnl >= 0 ? "+" : ""}{pnlPercent}%</span>
        </h2>
        <p className="muted">P&L</p>

        <div className="row">
          <div>
            <p className="label">Current value</p>
            <p className="value">₹{(currentValue / 1000).toFixed(2)}k</p>
          </div>

          <div>
            <p className="label">Investment</p>
            <p className="value">₹{(totalInvestment / 1000).toFixed(2)}k</p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Summary;