import { useEffect, useRef } from "react";

export default function Hero(){
    const upRef = useRef(null)
    const downRef = useRef(null)
    const containerRef = useRef(null)
    
    useEffect(()=>{
            window.scrollTo(0,0);

            const up = upRef.current
            const down = downRef.current
            
            up.classList.remove("up");
            down.classList.remove("down");
            
            void up.offsetWidth;
            void down.offsetWidth
            
            setTimeout(()=>{    
            
                up.classList.add("up");
                down.classList.add("down");
            
            },100);
        

        const handleScroll = () => {
            const container = containerRef.current

            if(window.scrollY > 30){
                container.classList.add("scrolled");
            }else{
                container.classList.remove("scrolled");
            }
        }
        window.addEventListener("scroll",handleScroll)
        return () => window.removeEventListener("scroll",handleScroll)
        
    },[])

    return(
        <>
            <div id="container" ref={containerRef}>
                
                <div className="right" id="up" ref={upRef}>
                    <h1>Product</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a href="#">Learn More</a>
                </div> 
                <div className="left" id="down" ref={downRef}></div>
            </div>
            
        </>
    )
}