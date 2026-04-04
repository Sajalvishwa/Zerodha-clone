import React, { useEffect, useState } from "react";
import { supabase } from "../scripts/supabaseClient.js";
import { Link } from "react-router-dom";

const Funds = () => {
  const [funds, setFunds] = useState(null);

  useEffect(() => {
    fetchFunds();
  }, []);

  const fetchFunds = async () => {
    const { data, error } = await supabase
      .from("funds")
      .select("*")
      .limit(1);

    console.log("DATA:", data);
    console.log("ERROR:", error);

    if (error) {
      console.log("❌ Error fetching funds:", error.message);
    } else {
      setFunds(data[0]); // ✅ FIX
    }
  };

  if (!funds) {
    return <h3 style={{ padding: "20px" }}>Loading...</h3>;
  }

  return (
    <div style={{ padding: "20px" }}>
      
      {/* HEADER */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "20px",
        flexWrap: "wrap",
        gap: "10px",
      }}>
        <p style={{ fontSize: "16px", color: "#555" }}>
          Instant, zero-cost fund transfers with UPI
        </p>

        <div style={{ display: "flex", gap: "10px" }}>
          <Link className="btn btn-green">Add funds</Link>
          <Link className="btn btn-blue">Withdraw</Link>
        </div>
      </div>

      {/* GRID */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        {/* LEFT CARD */}
        <div style={{
          flex: 1,
          minWidth: "300px",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}>
          <h4 style={{ marginBottom: "15px" }}>Equity</h4>

          <div style={{ fontSize: "14px" }}>

            <Row label="Available margin" value={funds.available_margin} green />
            <Row label="Used margin" value={funds.used_margin} />
            <Row label="Available cash" value={funds.available_cash} />

            <hr />

            <Row label="Opening Balance" value={funds.opening_balance} />
            <Row label="Payin" value={funds.payin} />

            <Row label="SPAN" value="0.00" />
            <Row label="Delivery margin" value="0.00" />
            <Row label="Exposure" value="0.00" />
            <Row label="Options premium" value="0.00" />

            <hr />

            <Row label="Collateral (Liquid funds)" value="0.00" />
            <Row label="Collateral (Equity)" value="0.00" />
            <Row label="Total Collateral" value="0.00" bold />

          </div>
        </div>

        {/* RIGHT CARD */}
        <div style={{
          flex: 1,
          minWidth: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}>
          <p>📊 Future Graph / Insights</p>
        </div>

      </div>
    </div>
  );
};

// 🔥 reusable row component (clean UI)
const Row = ({ label, value, green, bold }) => (
  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
    <p>{label}</p>
    <p style={{
      color: green ? "green" : "black",
      fontWeight: bold || green ? "bold" : "normal"
    }}>
      {value}
    </p>
  </div>
);

export default Funds;