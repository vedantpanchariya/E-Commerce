import { useEffect, useState } from "react"
import { Link } from "react-router"

export default function Products(){

    const[productsList,setProductsList] = useState([])
    const[error,setError] = useState(null)
    const[loading,setLoading]= useState(true)


    useEffect(()=>{
        
        window.scrollTo(0,0);

        async function fetchProducts() {
            try{
                
                const response = await fetch("https://fakestoreapi.com/products")
                if(!response.ok){
                    throw new Error("Server Error");
                }
                const data = await response.json();
                setProductsList(data)
                setLoading(false)
                
            }
            catch(error){

                setError(error);
                throw error
            }
        }
        fetchProducts();


    },[])

    return (
        <section id="services">
            {loading && <div className="spinner"></div>}
            {error && <p>Error in laoding products</p>}
            

            <div id="products">
                {productsList.map((item) => ( 
                    <Link to= {`/products/${item.id}`} className="product" key={item.id}>
                        <img src={item.image} alt="products_image" height={"200px"} width={"200px"} />
                        <p>{item.title}</p>
                    </Link>
                    
                    ))}
            </div>
            
        </section>
    )
}