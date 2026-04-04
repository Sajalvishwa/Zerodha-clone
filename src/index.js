  import React, { useEffect } from "react";
  import ReactDOM from "react-dom/client";
  import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
  import "./index.css";

  import { supabase } from "./scripts/supabaseClient";

  import HomePage from "./landing_page/home/HomePage";
  import Signup from "./landing_page/signup/Signup";
  import AboutPage from "./landing_page/about/AboutPage";
  import ProductPage from "./landing_page/products/ProductPage";
  import PricingPage from "./landing_page/pricing/PricingPage";
  import SupportPage from "./landing_page/support/SupportPage";
  import Dashboard from "./dashboard/Home";
  import ProtectedRoute from "./components/protectedRoute";

  import NotFound from "./landing_page/NotFound";
  import Navbar from "./landing_page/Navbar";
  import Footer from "./landing_page/Footer";

  function AppLayout() {
    const location = useLocation();
    const hideLayout = location.pathname.startsWith("/dashboard");

    // ✅ session sync + listener
    useEffect(() => {
      supabase.auth.getSession();

      const { data: listener } = supabase.auth.onAuthStateChange(
        (event, session) => {
          console.log("AUTH EVENT:", event);
          console.log("SESSION:", session);
        }
      );

      return () => {
        listener.subscription.unsubscribe();
      };
    }, []);

    return (
      <>
        {!hideLayout && <Navbar />}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/support" element={<SupportPage />} />

          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>

        {!hideLayout && <Footer />}
      </>
    );
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );