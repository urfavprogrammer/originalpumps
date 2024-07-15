import { Link } from "react-router-dom";


export const ProductCard = ({product}) => {

  const {img, name, id} = product;
  return (
    <>
      <Link to={`/product/${id}`}>
        <div className="product" key={id}>

          <img src={img} alt={name} />
          <p className='name'>{name}</p>
        </div>
      </Link>
    </>
   
      

    
  )
}


