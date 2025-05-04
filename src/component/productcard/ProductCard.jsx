import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const imgUrl = `https://admin.refabry.com/storage/product/${product.image}`;
  return (
    <Link to={`/product/${product.id}`} className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
      <img src={imgUrl} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 mt-1">৳ {product.price}</p>
    </Link>
  )
}

export default ProductCard
