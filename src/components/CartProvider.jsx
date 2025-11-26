import {createContext, useState } from "react";

export const cartContext = createContext(null)

export default function CartProvider({children}){

    const[cart,setCart] = useState([])

    const addToCart = (product) => {

        setCart(prevState => {

            const existing = prevState.find(item=> item.id === product.id);
            
            if(existing ) {
                return prevState.map((item) => 
                    item.id === product.id ? 
                        {
                            ...item,
                            quantity:item.quantity + 1} 
                            : item)
            }else{
                return [...prevState,{...product,quantity:1}];
            }
        })
    }
    

    return(
        <cartContext.Provider value={{cart,addToCart}}>
            {children}
        </cartContext.Provider>
    )
}
