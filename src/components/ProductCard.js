
export const ProductCard = ({product}) => {
    const {img, name, id} = product;
  return (
    <div className="product" key={id}>
        <img src={img} alt={name} />
        <p className='name'>{name}</p>

    </div>
  )
}


