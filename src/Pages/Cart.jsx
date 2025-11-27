import { useContext } from "react"
import { cartContext } from "../context/CartProvider"
import { Link } from "react-router";

export default function Cart(){
    
    const{cart, increaseQuantity , decreaseQuantity} = useContext(cartContext);
    const calculate = cart.reduce(
        (sum,item) => sum + item.price * item.quantity,
        0
    )
    const total = calculate.toFixed(2); 
    return(
        <>
            <div className="cart-details-wrapper">
                <h1>Shopping Cart</h1>
                
                {cart.length < 1 ? <h2>Hmm....Your Cart Looks Empty,  Wanna <Link to = "/products">Shop</Link> ?!</h2> : 
                    cart.map((item) => (
                    <div className="shopping-cart" key={item.id}>

                        <div className="cart-info">
                            <div className="cart-image">
                              <img src={item.image} alt={item.title} />
                            </div>

                            <div className="cart-details">

                              <h1 className="cart-title">{item.title}</h1>  
                              <p className="cart-price">${item.price}</p>

                              <p className="product-quantity">
                                <button onClick={() => decreaseQuantity(item.id)}>{item.quantity > 1 ? "-":"🗑"}</button>
                                <span>Qty : {item.quantity} </span>
                                <button onClick={() => increaseQuantity(item.id)}>+</button>
                              </p>

                            </div>
                        </div>
                        
                    </div>
                ))
                }
                {cart.length > 0 && <div className="cart-bottom">
                    <button>
                        <Link to={"/checkout"}> Proceed to Buy </Link>
                    </button>
                    <p >Total : {total}$</p>
                </div>}
            </div>
        </>
    )
} 
