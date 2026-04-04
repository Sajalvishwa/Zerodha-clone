import React, { useState, useEffect } from "react";
import { supabase } from "../scripts/supabaseClient.js";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    fetchHoldings();
  }, []);

  const fetchHoldings = async () => {
    const { data, error } = await supabase
      .from("holdings")
      .select("*");

    if (error) {
      console.log("❌ Error fetching holdings:", error.message);
    } else {
      setAllHoldings(data || []);
    }
  };

  // Graph data
  const labels = allHoldings.map((stock) => stock.name || "");

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price || 0),
      },
    ],
  };

  return (
    <>
      <h3 className="title">
        Holdings ({allHoldings.length})
      </h3>

      {/* TABLE */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const qty = stock.qty || 0;
              const price = stock.price || 0;
              const avg = stock.avg || 0;

              const curValue = price * qty;
              const profit = curValue - avg * qty;
              const isProfit = profit >= 0;

              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td>{curValue.toFixed(2)}</td>

                  <td className={profClass}>
                    {profit.toFixed(2)}
                  </td>

                  <td className={profClass}>
                    {stock.net}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* GRAPH */}
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;