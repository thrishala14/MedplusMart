import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "reactjs-popup/dist/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useState } from "react";
import LoginContext from "./components/LoginContext";
import Footer from "./components/Footer";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div className="App">
    <LoginContext.Provider value = {{show, setShow}}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
        <Header/>
      </BrowserRouter>
      </LoginContext.Provider>
      <Footer/>
    </div>
  );
}

export default App;
