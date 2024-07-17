import { useParams } from "react-router-dom";
import "./description.css"
import { Link } from "react-router-dom";

export const DescriptionCard = ({products}) => {
    const params = useParams();
    console.log(params.id)
    // const [detail, setDetails ] = useState(null && {});


  
   
    const product = products[params.id];
    console.log(product.img)
    

    // const product = {
    //     // name: 'Awesome Product',
    //     price: '$99.99',
    //     description: 'This is an awesome product that you will love!',
    //     id: 1,
    //     img: "../assets/images/pd/Monoblock-pump.webp",
    //     name: "Monoblock Pump"

    // };


        return (
            <div className="product-page">
                <div className="product-image">
                    <img src={product.img} alt={product.name} />
          </div>
             <div className="product-details">
                    <h1>{product.name}</h1>
                    <Link to={"/ContactUs"}>
                        <button className="order-button">Order Now</button>
                    </Link>
                   <p className="product-price">{product.code}</p>
                    <ul className="product-features">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul> 
                   <p className="product-description">{product.description}</p>
                   
                    
               </div>
            </div>
        );
    };

   
  


