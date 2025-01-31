import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import About from "./components/About.jsx";
import Appart from "./components/Appart.jsx";
import Header from "./layout/Header.jsx";
import Footer from "./layout/Footer.jsx";
import { BrowserRouter, Routes, Route } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route index element={<App />} />
      <Route path="error" element={<ErrorPage />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="appart/:id" element={<Appart />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>
);
