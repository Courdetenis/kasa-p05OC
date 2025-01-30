import React from "react";
import Header from "./components/Header.jsx";
import "./App.css";
import Banner from "./components/Banner.jsx";
import AppartContainer from "./components/AppartContainer.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <AppartContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
