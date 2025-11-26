import Header from "./Header"
import "../App.css"
import { Outlet } from "react-router"
import Footer from "./Footer"
import CartProvider from "./CartProvider"


export default function App(){

  return (
    <>
        <CartProvider>
          <Header />
          <Outlet />
          <Footer/>  
        </CartProvider>      
    </>
  )
}