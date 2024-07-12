import { ProductCard } from "../components"

export const Products = () => {
  const products = [
    {
      "id": 1,
      "img": "./assets/images/pd/kms.webp",
      "name": "KMS Monoblock Centerfugal Pump"
    },
    {
      "id": 2,
      "img": "./assets/images/pd/kmsing.webp",
      "name": "KM Single Stage Pump"
    },
    {
      "id": 3,
      "img": "./assets/images/pd/sew.webp",
      "name": "KMW Sweage Pump"
    },
    {
      "id": 4,
      "img": "./assets/images/pd/multi.webp",
      "name": "KMM Multistage Centerfugal Pump"
    },
    {
      "id": 5,
      "img": "./assets/images/pd/kmo.webp",
      "name": "KMO Double-Suction Pump"
    },
    {
      "id": 6,
      "img": "./assets/images/pd/kmp.webp",
      "name": "KMP Selfprime Pump"
    },
    {
      "id": 7,
      "img": "./assets/images/pd/thermal.webp",
      "name": "KTM Thermal Oil Pump"
    },
    {
      "id": 8,
      "img": "./assets/images/pd/kmc.webp",
      "name": "KMC Circulating Pump"
    },
    {
      "id": 9,
      "img": "./assets/images/pd/9.webp",
      "name": "KMV Vacuum Pump"
    },
    {
      "id": 10,
      "img": "./assets/images/pd/kvm.webp",
      "name": "KVM Vertical Multistage Pump"
    },
    {
      "id": 11,
      "img": "./assets/images/pd/kbs.webp",
      "name": "KBS Industrial Typle Booster"
    },
    {
      "id": 12,
      "img": "./assets/images/pd/kmg.webp",
      "name": "KMG Gear Oil Pump"
    },
    {
      "id": 13,
      "img": "./assets/images/pd/kmr.webp",
      "name": "KMR Stainless Steel Submersible Pump"
    },
    {
      "id": 14,
      "img": "./assets/images/pd/dpp.webp",
      "name": "DPP Domestic Pump"
    },
    {
      "id": 15,
      "img": "./assets/images/pd/grandsu.webp",
      "name": "Grandsu Dosing Pump"
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


