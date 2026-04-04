import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../scripts/supabaseClient";

function Signup() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [cooldown, setCooldown] = useState(false);
  const [timer, setTimer] = useState(0);

  const navigate = useNavigate();
  const intervalRef = useRef(null);

  // ⏳ cooldown
  const startCooldown = (seconds = 30) => {
    setCooldown(true);
    setTimer(seconds);

    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setCooldown(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 📩 SEND OTP / MAGIC LINK (MERGED VERSION)
  const handleGetOtp = async () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    if (cooldown) return;

    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: "https://zerodha-clone-gamma-liard.vercel.app/dashboard",
        },
      });

      console.log("OTP error:", error);

      if (error) {
        alert(error.message);
        return;
      }

      setStep(2);
      startCooldown(30);
      alert("Check your email 📩 (OTP / Magic Link sent)");

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  // ✅ VERIFY OTP
  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Enter OTP");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });

      if (error) {
        alert(error.message);
        return;
      }

      if (data?.session?.access_token) {
        localStorage.setItem(
          "supabase_token",
          data.session.access_token
        );

        alert("Login successful 🎉");
        navigate("/dashboard");
      }

    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container" style={{ padding: "80px 0" }}>
      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-lg-6 text-center">
          <img
            src="media/signup.png"
            alt="signup"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>

        {/* RIGHT FORM */}
        <div className="col-lg-6">
          <h2>Open a free demat and trading account online</h2>

          <p className="text-muted mt-2">
            Start investing brokerage free
          </p>

          {/* EMAIL */}
          <div className="input-group mt-3" style={{ maxWidth: "320px" }}>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <button
              className="btn btn-primary mt-3"
              style={{ width: "320px", height: "45px" }}
              onClick={handleGetOtp}
              disabled={loading || cooldown}
            >
              {cooldown
                ? `Wait ${timer}s`
                : loading
                ? "Sending..."
                : "Get OTP / Magic Link"}
            </button>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <input
                type="text"
                className="form-control mt-3"
                placeholder="Enter OTP (if using OTP mode)"
                maxLength={6}
                style={{ maxWidth: "320px" }}
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, ""))
                }
              />

              <button
                className="btn btn-success mt-3"
                style={{ width: "320px", height: "45px" }}
                onClick={handleVerifyOtp}
                disabled={loading}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>

              <button
                className="btn btn-link mt-2"
                onClick={handleGetOtp}
                disabled={loading || cooldown}
              >
                {cooldown ? `Resend in ${timer}s` : "Resend"}
              </button>
            </>
          )}

          <p className="text-muted mt-3" style={{ fontSize: "13px" }}>
            By proceeding, you agree to terms & privacy policy
          </p>
        </div>
      </div>
    </section>
  );
}

export default Signup;