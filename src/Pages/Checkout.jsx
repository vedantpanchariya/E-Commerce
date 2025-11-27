import { useContext, useRef } from "react"
import toast from "react-hot-toast"
import { cartContext } from "../context/CartProvider"

export default function Checkout(){

    const order_success = () => toast.success("Order Confirmed")
    const order_fail = () => toast.error("Add items first")
    const{cart,setCart} = useContext(cartContext)

    const formRef = useRef(null)

    const calculate = cart.reduce(
        (sum,item) => sum + item.price * item.quantity,
        0
    )
    const total = calculate.toFixed(2); 
    return(
        <main id="checkout" >
            <div className="information">
            <form id="checkOutForm" ref={formRef} onSubmit={(e)=>{
                e.preventDefault();
                if(cart.length === 0){
                    return order_fail();
                }
                order_success();
                setCart([]);
                formRef.current.reset();
            }}>
                <h1>Checkout Cart</h1>
               <div id="details">
                <h2>Personal Details</h2>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" id="name"  required/>

                    <label htmlFor="address">Delivery Address</label>
                    <input type="text" name="address" id="address" required/>

                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" required />
               </div>

                <div id="radio">
                    <h2>Payment Method</h2>
                    
                    <div className="options">
                        <input type="radio" name="payment-options" id="option-1" value={"Wallet"} required/>                        
                        <label htmlFor="option-1"> Wallet </label> 
                    </div>

                    <h2>Another Payment Methods </h2>

                    <div className="options">
                        <input type="radio" name="payment-options" id="option-2" value={"Upi"}/>
                        <label htmlFor="option-2">UPI</label>
                    </div>
                    <div className="options">
                        <input type="radio" name="payment-options" id="option-3" value={"Net Banking"}/> 
                        <label htmlFor="option-3"> Net Banking </label> 
                    </div>
                    <div className="options">
                        <input type="radio" name="payment-options" id="option-4" value={"Debit or Credit Card"}/> 
                        <label htmlFor="option-4"> Debit or Credit Card </label> 
                    </div>
                    <div className="options">
                        <input type="radio" name="payment-options" id="option-5" value={"Cash on Delivery"}/>
                        <label htmlFor="option-5">
                            <h4>Cash on Delivery/Pay on Delivery</h4>
                            <h5>Cash, Card and UPI. </h5>
                            </label> 
                    </div>
                </div>
                
            </form>
            </div>
            <div className="finalize">

                <h2>Order Summary :</h2>
                <p>Items Total : {total}</p>
                <p>Delivery : <span style={{color:"green"}}>Free</span></p> 
                <p>Order Total : {total}</p>
                <button type="submit" form="checkOutForm">Confirm Order</button> 

            </div>
        </main>
    )
}