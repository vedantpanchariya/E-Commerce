import {  useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { useContext } from "react";
import { cartContext } from "../context/CartProvider";

export default function Header(){

    const[menu,setMenu] = useState(false);

    function handleShow(){
        setMenu(prevState => !prevState)
    }

    const burgerRef = useRef(null)
    const navbarRef = useRef(null)

    useEffect(()=>{

        const hamburger = burgerRef.current;
        const navbar = navbarRef.current;

        const handleScroll =() => { 

            if(window.scrollY > 30){
                navbar.classList.add("scrolled");
                hamburger && hamburger.classList.add("scrolled");
            }else{
                navbar.classList.remove("scrolled");
                hamburger && hamburger.classList.remove("scrolled");
            }
        }
        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll",handleScroll)
        
    },[])

    const {cart} = useContext(cartContext)

    return(
        
        <>
            <nav className="navbar" ref={navbarRef}>
                <div id="logo"><h2>Logo</h2></div>

                <div className="navigation"> 
                    <div id="hamburger" onClick={handleShow} ref={burgerRef}>
                        <div className="burger"></div>
                        <div className="burger"></div>
                        <div className="burger"></div> 
                    </div>

                    <div id="links-container" className={menu ? "menu":null}>
                    <ul>
                        <li><button id="close" onClick={handleShow}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg></button></li>
                        
                        <li><NavLink className={(e) => {return e.isActive ? "active":""}} to="/"     onClick={handleShow} >Home</NavLink></li>
                        <li><NavLink className={(e) => {return e.isActive ? "active":""}} to="/products" onClick={handleShow} >Products</NavLink></li>
                        <li><NavLink className={(e) => {return e.isActive ? "active":""}} to="/cart"   onClick={handleShow} >
                            🛒
                            <span> {cart.reduce((sum,item) => sum + item.quantity ,0)}</span> 
                            </NavLink>
                        </li>
                    </ul>
                </div> 

                </div>
            </nav>
        </>
    )
}