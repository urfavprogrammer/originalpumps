import { Link } from "react-router-dom";


export const ProductCard = ({product}) => {
  const {img, name, id} = product;
  console.log(img);
  return (
    <>
      <Link to={`/product/${id}`} product={name}>
        <div className="product" >

          <img src={img} alt={name} />
          <p className='name'>{name}</p>
        </div>
      </Link>
    </>
   
      

    
  )
}


