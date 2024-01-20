import "./App.css";
import "./global.css";

import Navbar from "./component/AppNavbar"; 
import { Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import AddProduct from "./component/AddProduct";
import EditProduct from "./component/EditProduct";

// Add these 
import SignUp from "./component/Registration"; 
import Login from "./component/Login";

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />

        
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;