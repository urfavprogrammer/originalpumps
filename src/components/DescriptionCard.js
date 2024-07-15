
import "./description.css"

export const DescriptionCard = () => {

    const product = {
        // name: 'Awesome Product',
        price: '$99.99',
        description: 'This is an awesome product that you will love!',
        id: 1,
        img: "../assets/images/pd/Monoblock-pump.webp",
        name: "Monoblock Pump"

    };


        return (
            <div className="product-page">
                <div className="product-image">
                    <img src={product.img} alt={product.name} />
                </div>
                <div className="product-details">
                    <h1>{product.name}</h1>
                    <p className="product-price">{product.price}</p>
                    <p className="product-description">{product.description}</p>
                    {/* <ul className="product-features">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul> */}
                </div>
            </div>
        );
    };

   
  


