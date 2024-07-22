import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

// importation des fichiers
import Home from "./pages/Home";
import About from "./pages/About";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <ToastContainer />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/add" Component={AddEdit} />
          <Route path="/update/:id" Component={AddEdit} />
          <Route path="/view/:id" Component={View} />
          <Route path="/about" Component={About} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
