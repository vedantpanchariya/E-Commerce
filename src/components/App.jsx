import Header from "./Header"
import "../App.css"
import { Outlet } from "react-router"
import Footer from "./Footer"
import { useEffect } from "react"

export default function App(){

  
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  )
}