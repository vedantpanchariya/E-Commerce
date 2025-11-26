import { useState } from "react"
import { useContext } from "react"
import { cartContext } from "./CartProvider"

export default function Cart(){
    
    const{cart} = useContext(cartContext);

    return(
        <>
            <div className="product-details-wrapper">
                
                
                {cart.map((item) => (
                    <div className="product-details-container" key={item.id}>
                        <div className="product-image-box">
                          <img src={item.image} alt={item.title} />
                        </div>

                        <div className="product-info">
                          <h1 className="product-title">{item.title}</h1>

                          <div className="product-rating">
                            <span className="star">⭐</span>
                            <span>{item.rating?.rate} </span>
                            <span className="rating-count">({item.rating?.count} reviews)</span>
                          </div>

                          <p className="product-price">${item.price}</p>

                          <p className="product-description">
                            {item.description}
                          </p>
                        </div>
                    </div>
                ))}
                
            </div>
        </>
    )
}