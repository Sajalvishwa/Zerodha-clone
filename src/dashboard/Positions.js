import React, { useEffect, useState } from "react";
import { supabase } from "../scripts/supabaseClient.js";

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    const { data, error } = await supabase.from("positions").select("*");

    if (error) {
      console.log("❌ Error fetching positions:", error.message);
    } else {
      setPositions(data || []);
    }
  };

  return (
    <>
      <h3 className="title">Positions ({positions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>

          <tbody>
            {positions.map((stock, index) => {
              const curValue = (stock.price || 0) * (stock.qty || 0);
              const isProfit =
                curValue - (stock.avg || 0) * (stock.qty || 0) >= 0;

              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isloss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{stock.product}</td>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg?.toFixed(2)}</td>
                  <td>{stock.price?.toFixed(2)}</td>
                  <td className={profClass}>
                    {(curValue - stock.avg * stock.qty).toFixed(2)}
                  </td>
                  <td className={dayClass}>{stock.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;