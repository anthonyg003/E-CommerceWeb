import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Products from "./components/Products";

function App() {
  return (
    <>
      <div>
        <h1>App</h1>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
