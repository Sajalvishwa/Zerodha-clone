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

    // 🔥 IMPORTANT: direct go dashboard
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: 50 }}>
      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {step === 1 && (
        <button onClick={handleGetOtp} disabled={loading}>
          Send OTP
        </button>
      )}

      {step === 2 && (
        <>
          <input
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />

          <button onClick={handleVerifyOtp} disabled={loading}>
            Verify
          </button>
        </>
      )}
    </div>
  );
}

export default Signup;