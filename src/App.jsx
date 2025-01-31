import React from "react";
import "./App.scss";
import Banner from "./layout/Banner.jsx";
import AppartContainer from "./components/AppartContainer.jsx";

function App() {
  return (
    <div>
      <main>
        <Banner />
        <AppartContainer />
      </main>
    </div>
  );
}

export default App;
