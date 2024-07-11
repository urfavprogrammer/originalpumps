import React from 'react'

export const ProductCard = ({product}) => {
    const {img, name, id} = product;
  return (
    <div className="product">
        <img src={img} alt={name} />
        <p className='name'>{name}</p>

      
    </div>
  )
}


