import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../scripts/supabaseClient";

function Signup() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const intervalRef = useRef(null);

  const handleGetOtp = async () => {
    if (!email) return alert("Enter email");

    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: "https://zerodha-clone-gamma-liard.vercel.app/dashboard",
      },
    });

    setLoading(false);

    if (error) return alert(error.message);

    setStep(2);
    alert("Check email for OTP / Magic Link");
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Enter OTP");

    setLoading(true);

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });

    setLoading(false);

    if (error) return alert(error.message);

    alert("Login successful 🎉");
    navigate("/dashboard");
  };

  return (
    <div style={styles.page}>

      {/* CENTER TEXT */}
      <div style={styles.header}>
        <h1 style={styles.heading}>
          Open a free demat and trading account online
        </h1>
        <p style={styles.subText}>
          Start investing brokerage free and join a community of 1.6+ crore investors and traders.
        </p>
      </div>

      {/* MAIN */}
      <div style={styles.main}>

        {/* IMAGE (bigger + slightly lower) */}
        <div style={styles.left}>
          <img src="./media/signup.png" alt="signup" style={styles.image} />
        </div>

        {/* FORM (closer to image) */}
        <div style={styles.right}>
          <div style={styles.card}>

            <h2 style={styles.title}>Signup</h2>

            <input
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
            />

            {step === 1 && (
              <button
                onClick={handleGetOtp}
                disabled={loading}
                style={styles.button}
              >
                {loading ? "Sending..." : "Get OTP"}
              </button>
            )}

            {step === 2 && (
              <>
                <input
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  style={styles.input}
                />

                <button
                  onClick={handleVerifyOtp}
                  disabled={loading}
                  style={{ ...styles.button, background: "#22c55e" }}
                >
                  {loading ? "Verifying..." : "Verify & Login"}
                </button>
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}

/* =======================
   UPDATED STYLES
======================= */
const styles = {
  page: {
    background: "#f8f8f8",
    minHeight: "100vh",
    padding: "40px 70px",
    fontFamily: "Arial",
  },

  header: {
    textAlign: "center",
    marginBottom: "36px",
  },

  heading: {
    fontSize: "32px",
    fontWeight: "500",
    color: "#424242",
    marginTop: "75px",
  },

  subText: {
    fontSize: "20px",
    color: "#666",
    maxWidth: "1100px",
    margin: "0 auto",
    lineHeight: "1.5",
  },

  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "30px",
  },

  left: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: "30px",
    marginRight: "100px",  
    marginLeft: "150px",  // 👈 image slightly lower
  },

  image: {
    width: "100%",        // 👈 bigger image
    maxWidth: "520px",
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
  },

  card: {
    width: "340px",
    background: "white",
    padding: "28px",
    borderRadius: "10px",
    border: "1px solid #eee",
    boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
    marginLeft: "-20px",  // 👈 signup box image ke paas
  },

  title: {
    marginBottom: "15px",
    fontSize: "20px",
    fontWeight: "600",
    color: "#111",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },

  button: {
    width: "100%",
    padding: "10px",
    background: "#387ed1",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Signup;