import { ProductCard } from "../components"

export const Products = () => {
  const products = [
    {
      "id": 1,
      "img": "/assets/images/",
      "name": "pump1"
    },
    {
      "id": 2,
      "img": "/assets/images/",
      "name": "pump2"
    },
    {
      "id": 3,
      "img": "/assets/images/",
      "name": "pump3"
    },
    {
      "id": 3,
      "img": "/assets/images/",
      "name": "pump3"
    }
  ]
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


