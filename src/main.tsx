import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Index from "./pages/Index";
import Gracias from "./pages/Gracias";
import NotFound from "./pages/NotFound";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/gracias" element={<Gracias />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <SpeedInsights />
  </React.StrictMode>,
);
