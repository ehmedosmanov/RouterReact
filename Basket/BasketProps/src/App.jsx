import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import './App.css'
import ProductDetail from "./components/ProductDetail";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Login from "./pages/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/ProductDetail/:id" element={<ProductDetail/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
}

export default App;
