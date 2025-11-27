import Header from "./Header"
import "../App.css"
import { Outlet } from "react-router"
import Footer from "./Footer"
import CartProvider from "../context/CartProvider"
import { Toaster } from "react-hot-toast"


export default function App(){

  return (
    <>
        <CartProvider>
          <Header />
          <Outlet />
          <Toaster position="top-center"/>
          <Footer/>  
        </CartProvider>      
    </>
  )
}