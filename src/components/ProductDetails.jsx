import { useParams } from "react-router"
import { useState, useEffect } from "react";
import { useContext } from "react";
import { cartContext } from "./CartProvider";
import toast from "react-hot-toast";

export default function ProductDetails(){
    
    const notify = () => toast.success("Added To Cart", {
      style: {
        border: '1px solid #414A37',
        padding: '16px',
        color: '#414A37',
      },
      iconTheme: {
        primary: '#414A37',
        secondary: '#FFFAEE',
      },
    })

    const {id} = useParams();
    const[product,setProduct] = useState([])
    const[error,setError] = useState(null)
    const[loading,setLoading]= useState(true)
    
        useEffect(()=>{
    
            async function fetchProducts() {
                try{
                    
                    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                    if(!response.ok){
                        throw new Error("Server Error");
                    }
                    const data = await response.json();
                    setProduct(data)
                    setLoading(false)
                    
                }
                catch(error){
                    setError(error);
                    throw error
                }
            }
            fetchProducts();

            window.scrollTo({top:0,behavior:"smooth"});

        },[id])
    
        const {addToCart} = useContext(cartContext)


    return(
        <section id="services"> 

        {loading ? <div className="spinner"></div> : 
            <div className="product-details-wrapper">
            <div className="product-details-container">

                <div className="product-image-box">
                  <img src={product.image} alt={product.title} />
                </div>

                <div className="product-info">
                  <h1 className="product-title">{product.title}</h1>

                  <div className="product-rating">
                    <span className="star">⭐</span>
                    <span>{product.rating?.rate} </span>
                    <span className="rating-count">({product.rating?.count} reviews)</span>
                  </div>

                  <p className="product-price">${product.price}</p>

                  <p className="product-description">
                    {product.description}
                  </p>

                  <div className="product-buttons">
                    <button className="btn primary-btn" onClick={()=>{addToCart(product);notify();}}>Add to Cart</button>
                    
                    <button className="btn secondary-btn">Buy Now</button> 
                </div>
            </div>

            </div>
        </div>
        }
        {error && <p>Error in laoding products</p>}

        

        </section>
    )
}