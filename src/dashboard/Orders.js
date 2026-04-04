import React, { useEffect, useState } from "react";
import { supabase } from "../scripts/supabaseClient";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  // =========================
  // 🔥 FETCH ORDERS
  // =========================
  useEffect(() => {
    fetchOrders();

    const channel = supabase
      .channel("orders-live")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "orders" },
        () => {
          fetchOrders();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchOrders = async () => {
    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.log("❌ Error fetching orders:", error.message);
    } else {
      setAllOrders(data || []);
    }
  };

  // =========================
  // 🔥 REAL TRADING FUNCTION
  // =========================
  const placeOrder = async (name, qty, price, mode) => {
    const total = qty * price;

    // 1️⃣ GET FUNDS
    const { data: fundsData, error: fundErr } = await supabase
      .from("funds")
      .select("*")
      .limit(1)
      .single();

    if (fundErr) {
      console.log("❌ Funds error:", fundErr.message);
      return;
    }

    let currentCash = fundsData.available_cash;

    // =========================
    // 🟢 BUY
    // =========================
    if (mode === "BUY") {
      if (currentCash < total) {
        alert("❌ Not enough balance");
        return;
      }

      // deduct money
      await supabase
        .from("funds")
        .update({
          available_cash: currentCash - total,
        })
        .eq("id", fundsData.id);

      // check holdings
      const { data: existing } = await supabase
        .from("holdings")
        .select("*")
        .eq("name", name)
        .maybeSingle();

      if (existing) {
        await supabase
          .from("holdings")
          .update({
            qty: existing.qty + qty,
            price: price,
          })
          .eq("id", existing.id);
      } else {
        await supabase.from("holdings").insert([
          {
            name,
            qty,
            avg: price,
            price,
          },
        ]);
      }
    }

    // =========================
    // 🔴 SELL
    // =========================
    if (mode === "SELL") {
      const { data: existing } = await supabase
        .from("holdings")
        .select("*")
        .eq("name", name)
        .maybeSingle();

      if (!existing || existing.qty < qty) {
        alert("❌ Not enough stock");
        return;
      }

      // reduce holding
      await supabase
        .from("holdings")
        .update({
          qty: existing.qty - qty,
        })
        .eq("id", existing.id);

      // add money
      await supabase
        .from("funds")
        .update({
          available_cash: currentCash + total,
        })
        .eq("id", fundsData.id);
    }

    // =========================
    // 📦 INSERT ORDER
    // =========================
    const { error } = await supabase.from("orders").insert([
      {
        name,
        qty,
        price,
        mode,
      },
    ]);

    if (error) {
      console.log("❌ Order insert error:", error.message);
    } else {
      console.log("✅ Order placed");
    }
  };

  return (
    <>
      {/* TITLE */}
      <h3 className="title">Orders ({allOrders.length})</h3>

      {/* TABLE */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Total Value</th>
            </tr>
          </thead>

          <tbody>
            {allOrders.length === 0 ? (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", padding: "20px" }}>
                  You haven't placed any orders today
                </td>
              </tr>
            ) : (
              allOrders.map((order, index) => {
                const totalValue = order.qty * order.price;

                return (
                  <tr key={index}>
                    <td>{order.name}</td>
                    <td>{order.qty}</td>

                    <td>{Number(order.price).toFixed(2)}</td>

                    <td
                      style={{
                        color: order.mode === "BUY" ? "green" : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {order.mode}
                    </td>

                    <td>{totalValue.toFixed(2)}</td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* SUMMARY */}
      <div className="row">
        <div className="col">
          <h5>{allOrders.length}</h5>
          <p>Total Orders</p>
        </div>

        <div className="col">
          <h5>
            {allOrders.filter((o) => o.mode === "BUY").length}
          </h5>
          <p>Buy Orders</p>
        </div>

        <div className="col">
          <h5>
            {allOrders.filter((o) => o.mode === "SELL").length}
          </h5>
          <p>Sell Orders</p>
        </div>
      </div>
    </>
  );
};

export default Orders;