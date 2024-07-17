
import { ProductCard } from "../components"
// import { useState } from "react";
// import useFetch from "../hooks/useFetch";

export const Products = ({products}) => {
  // const [url, setUrl] = useState(["http://localhost:8000/products"])
  // const { data: products, error } = useFetch("http://localhost:8000/products");  
  // console.log(products)
  
  
  return (
    
    <main>

      <section >
      
        <div className="productSection">
          <h1>Our Products</h1>
        </div>
        <div className="products">
          {products.map((product) => {
            return (
              
                <ProductCard product={product} key={product.id} />
             
             
            )
          })}
        </div>
        
      </section>
    </main>
  )
}


