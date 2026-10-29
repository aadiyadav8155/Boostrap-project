import { Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Footer from "./Component/Footer";


export default function App() {
  return (
    <>
     <Navbar />
       <Home />
      <Footer/>
    </>
  )
}