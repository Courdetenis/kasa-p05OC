import React from "react";
import Header from "./components/Header.jsx";
import "./App.css";
import Banner from "./components/Banner.jsx";
import AppartContainer from "./components/AppartContainer.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Banner />
        <AppartContainer />
      </main>
    </div>
  );
}

export default App;
